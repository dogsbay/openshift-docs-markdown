{%- set _mod_docs_content_type = "PROCEDURE" %}
# Configuring cert-manager for the external-secrets certificate requirements {id="external-secrets-cert-manager-config_{{ context }}"}

You can optionally configure cert-manager to manage certificates for the {{ external_secrets_operator }} webhook and plugins. If you do not use cert-manager, the Operator automatically generates webhook certificates, but you must manually configure certificates for any plugins. {._abstract}

**Prerequisites**

*   You have access to the cluster with `cluster-admin` privileges.
*   You have created the `ExternalSecretsConfig` custom resource.
*   You have installed the {{ cert_manager_operator }}. For more information, see "Installing the {{ cert_manager_operator }}"

**Procedure**

1.  Edit the `ExternalSecretsConfig` custom resource by running the following command:
    ```terminal
    $  oc edit externalsecretsconfigs.operator.openshift.io cluster
    ```
1.  Configure `cert-manager` by editing the `spec.controllerConfig.certProvider.certManager` section as follows:
    ```yaml
    apiVersion: operator.openshift.io/v1alpha1
    kind: ExternalSecretsConfig
    ...
    spec:
      controllerConfig:
        certProvider:
          certManager:
            injectAnnotations: "true"
            issuerRef:
              name: <issuer_name>
              kind: <issuer_kind>
              group: <issuer_group>
            mode: Enabled
    ```

    where:

    injectAnnotation
    :   Must be set to `true` when enabled.

    name
    :   Specifies the name of the issuer object referenced in `ExternalSecretsConfig`.

    kind
    :   Specifies the API issuer. Can be set to either `Issuer` or `ClusterIssuer`.

    group
    :   Specifies the API issuer group. The group name must be `cert-manager.io`.

    mode
    :   Must be set to `Enabled`. This is an immutable field and cannot be modified once it is configured.

1.  Save your changes.
1.  After you update the `cert-manager` configurations in the `externalsecretsconfig.operator.openshift.io` object, you must manually delete `external-secrets-cert-controller` deployment by running the following command. This prevents performance degradation of the `external-secrets` application.
    ```terminal
    $ oc delete deployments.apps external-secrets-cert-controller -n external-secrets
    ```
1.  Optionally, you can delete other resources created for the `cert-controller` by running the following commands:
    ```terminal
    $ oc delete clusterrolebindings.rbac.authorization.k8s.io external-secrets-cert-controller
    ```
    ```terminal
    $ oc delete clusterroles.rbac.authorization.k8s.io external-secrets-cert-controller
    ```
    ```terminal
    $ oc delete serviceaccounts external-secrets-cert-controller -n external-secrets
    ```
    ```terminal
    $ oc delete secrets external-secrets-webhook -n external-secrets
    ```