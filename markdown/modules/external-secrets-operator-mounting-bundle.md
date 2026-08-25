{%- set _mod_docs_content_type = "PROCEDURE" %}
# Mounting a custom trusted certificate authority bundle for external-secrets {id="external-secrets-operator-mounting-bundle_{{ context }}"}

You can configure the {{ external_secrets_operator }} to trust a custom certificate authority (CA) bundle when the `external-secrets` core controller communicates with external secret backends over transport layer socket (TLS). This is required when your organization uses a private CA or a self-signed certificate that is not included in the default system truststore. {._abstract}

To enable mounting a custom trusted CA, you reference a `ConfigMap` that contains the Privacy Enhanced Mail (PEM)-encoded CA certificates in the `spec.controllerConfig.trustedCABundle` field of the `ExternalSecretsConfig` custom resource (CR). The Operator mounts the bundle into the core controller pod and configures the TLS library to use it alongside the default system trust stores.

The {{ external_secrets_operator }} applies the following rules to the CA bundle `ConfigMap`:

*   The `ConfigMap` must reside in the `external-secrets` namespace and must contain only PEM-encoded X.509 CA certificates. Leaf certificates and private key PEM blocks are rejected.
*   If the `ConfigMap` key contains an invalid bundle, the `ExternalSecretsConfig` CR enters a `Degraded` state. The Operator automatically recovers and mounts the bundle when the `ConfigMap` is corrected, without requiring manual intervention.
*   If the referenced `ConfigMap` does not exist, the Operator removes any previously mounted CA bundle from the core controller deployment and sets the `ExternalSecretsConfig` CR to a `Degraded` state until the `ConfigMap` is created.
*   The CA bundle is mounted only on the core `external-secrets` controller container. The webhook and cert-controller containers are not affected.
*   If the `ConfigMap` has the `config.openshift.io/inject-trusted-cabundle: "true"` label and a cluster proxy is configured, the Operator skips the user-defined mount. The cluster-wide CA bundle injected by the Cluster Network Operator (CNO) is already available to the controller through the proxy CA bundle mechanism.

**Prerequisites**

*   You have access to the cluster with `cluster-admin` privileges.
*   You have installed the {{ external_secrets_operator }} and created the `ExternalSecretsConfig` CR.
*   A `ConfigMap` containing PEM-encoded X.509 CA certificates exists in the `external-secrets` namespace.

**Procedure**

1.  Create the `ConfigMap` containing your CA bundle by running the following command:
    ```terminal
    $ oc create configmap user-ca-bundle \
      --from-file=ca-bundle.crt=/path/to/ca.pem \
      -n external-secrets
    ```
1.  Edit the `ExternalSecretsConfig` CR by running the following command:
    ```terminal
    $ oc edit externalsecretsconfigs.operator.openshift.io cluster
    ```
1.  Add the `trustedCABundle` field under `spec.controllerConfig`:
    ```yaml
    apiVersion: operator.openshift.io/v1alpha1
    kind: ExternalSecretsConfig
    metadata:
      name: cluster
    spec:
      controllerConfig:
        trustedCABundle:
          name: user-ca-bundle
          key: ca-bundle.crt
    ```

    where:

    `spec.controllerConfig.trustedCABundle.name`
    :   Specifies the name of the `ConfigMap` in the `external-secrets` namespace that contains the CA certificate bundle.

    `spec.controllerConfig.trustedCABundle.key`
    :   Optional. Specifies the key within the `ConfigMap` that holds the PEM-encoded CA bundle. The default is `ca-bundle.crt`.

**Verification**

1.  Verify that the CA bundle volume is mounted on the core controller deployment by running the following command:
    ```terminal
    $ oc get deployment external-secrets \
      -n external-secrets \
      -o jsonpath='{.spec.template.spec.volumes}' | jq '.[] | select(.name=="user-ca-bundle")'
    ```

    ```json title="Example output"
    {
      "configMap": {
        "defaultMode": 420,
        "items": [
          {
            "key": "ca-bundle.crt",
            "path": "ca-bundle.crt"
          }
        ],
        "name": "trusted-ca-bundle-for-es"
      },
      "name": "user-ca-bundle"
    }
    ```
1.  Verify that the `SSL_CERT_DIR` is set on the core controller container by running the following command:
    ```terminal
    $ oc set env deployment/external-secrets \
      -n external-secrets \
      --list | grep SSL_CERT_DIR
    ```

    ```terminal title="Example output"
    SSL_CERT_DIR=/etc/pki/tls/user-certs:/etc/pki/tls/certs:/etc/ssl/certs
    ```
1.  Verify that the `ExternalSecretsConfig` CR is not in a `Degraded` state by running the following command:
    ```terminal
    $ oc get externalsecretsconfigs.operator.openshift.io cluster \
      -o jsonpath='{.status.conditions[?(@.type=="Degraded")]}' | jq .
    ```

    ```json title="Example output"
    {
      "lastTransitionTime": "2026-06-22T10:29:11Z",
      "message": "",
      "observedGeneration": 5,
      "reason": "Ready",
      "status": "False",
      "type": "Degraded"
    }
    ```

    The `Degraded` condition should show `"status": "False"`. If the condition is `True,` review the message field for the specific validation error and correct the referenced `ConfigMap`.