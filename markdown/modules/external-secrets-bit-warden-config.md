{%- set _mod_docs_content_type = "PROCEDURE" %}
# Configuring the bitwardenSecretManagerProvider plugin {id="external-secrets-bit-warden-config_{{ context }}"}

You must configure the `bitwardenSecretManagerProvider` plugin to enable communication with the Bitwarden API. This configuration enables the Operator to authenticate and fetch secrets for synchronization. {._abstract}

**Prerequisites**

*   You have access to the cluster with `cluster-admin` privileges.
*   You have created the `ExternalSecretsConfig` custom resource.

**Procedure**

1.  Edit the `ExternalSecretsConfig` custom resource by running the following command:
    ```terminal
    $  oc edit externalsecretsconfigs.operator.openshift.io cluster
    ```
1.  Edit the `spec.plugins.bitwardenSecretManagerProvider` section as follows to enable the Bitwarden Secrets Manager:
    ```yaml
    apiVersion: operator.openshift.io/v1alpha1
    kind: ExternalSecretsConfig
    ...
    spec:
      plugins:
        bitwardenSecretManagerProvider:
          mode: Enabled
          secretRef:
            name: <secret_object_name>
    ```

    where:

    name
    :   The name of the secret containing the certificate key pair for the plugin. The key name in the secret for the certificate must be `tls.crt`. The key name for the private key must be `tls.key`. The key name for the Certificate Authority (CA) certificate key name must be `ca.crt`. Configuring the secret is optional when the cert-manager certificate provider is configured.

1.  Save your changes and exit the editor.
1.  If you disable the plugin the following resources must be deleted manually by running the following commands:
    ```terminal
    $ oc delete deployments.apps bitwarden-sdk-server -n external-secrets
    ```
    ```terminal
    $ oc delete certificates.cert-manager.io bitwarden-tls-certs -n external-secrets
    ```
    ```terminal
    $ oc delete service bitwarden-sdk-server -n external-secrets
    ```
    ```terminal
    $ oc delete serviceaccounts bitwarden-sdk-server -n external-secrets
    ```