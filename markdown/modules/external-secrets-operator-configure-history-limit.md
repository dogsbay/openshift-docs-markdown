{%- set _mod_docs_content_type = "PROCEDURE" %}
# Configuring the revisionHistoryLimit for external-secrets components {id="external-secrets-enable-operator-configure-history-limit_{{ context }}"}

Configure the number of old `ReplicaSet` objects retained for rollback by setting the `revisionHistoryLimit` parameter for `external-secrets` components. {._abstract}

The following components can be configured:

| Component name | Description |
| --- | --- |
| `ExternalSecretsCoreController` | The main `external-secrets` controller. |
| `Webhook` | The `external-secrets` webhook server. |
| `CertController` | The certificate controller for webhook TLS. |
| `BitwardenSDKServer` | The Bitwarden SDK server plugin. |

Each component can only have one configuration entry. A maximum of 4 component configuration entries are allowed, one per component.

**Prerequisites**

*   You have access to the cluster with `cluster-admin` privileges.
*   You have created the `ExternalSecretsConfig` custom resource.

**Procedure**

1.  Edit the `ExternalSecretsConfig` CR by running the following command:
    ```terminal
    $ oc edit externalsecretsconfigs.operator.openshift.io cluster
    ```
1.  Add the `componentConfigs` field under `spec.controllerConfig` as follows:
    ```yaml
    apiVersion: operator.openshift.io/v1alpha1
    kind: ExternalSecretsConfig
    metadata:
      name: cluster
    spec:
      controllerConfig:
        componentConfigs:
          - componentName: ExternalSecretsCoreController
            deploymentConfigs:
              revisionHistoryLimit: 5
          - componentName: Webhook
            deploymentConfigs:
              revisionHistoryLimit: 3
    ```

    where

    `spec.controllerConfig.componentConfigs.componentName.deploymentConfigs.revisionHistoryLimit`
    :   Specifies the number of old `ReplicaSet` objects to retain for rollback. The value must be at least 1 to ensure rollback capability. The maximum value is 50. If not specified, the default is 10.

**Verification**

*   Verify that the `revisionHistoryLimit` parameter is applied to the deployment by running the following command:
    ```terminal
    $ oc get deployment external-secrets -n external-secrets -o jsonpath='{.spec.revisionHistoryLimit}'
    ```

    The output should display the value you configured.