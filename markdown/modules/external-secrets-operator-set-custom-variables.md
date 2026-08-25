{%- set _mod_docs_content_type = "PROCEDURE" %}
# Setting custom environment variables for external-secrets components {id="external-secrets-operator-set-custom-variables_{{ context }}"}

To configure component behavior at runtime or integrate with external services, set custom environment variables for individual `external-secrets` components. {._abstract}

Custom environment variables are merged with the default environment variables set by the Operator. User-specified variables take precedence in case of conflicts with the Operator defaults. A maximum of 50 custom environment variables can be specified per component.

The environment variable names starting with the following prefixes are reserved:

*   `HOSTNAME`
*   `KUBERNETES_`
*   `EXTERNAL_SECRETS_`

**Prerequisites**

*   You have access to the cluster with `cluster-admin` privileges.
*   You have created the `ExternalSecretsConfig` custom resource.

**Procedure**

1.  Edit the `ExternalSecretsConfig` CR by running the following command:
    ```terminal
    $ oc edit externalsecretsconfigs.operator.openshift.io cluster
    ```
1.  Add the `overrideEnv` field under the desired component in the `spec.controllerConfig.componentConfigs` stanza as follows:
    ```yaml
    apiVersion: operator.openshift.io/v1alpha1
    kind: ExternalSecretsConfig
    metadata:
      name: cluster
    spec:
      controllerConfig:
        componentConfigs:
          - componentName: ExternalSecretsCoreController
            overrideEnv:
              - name: Example
                value: "4"
    ```

    where

    `spec.controllerConfig.componentConfigs.overrideEnv.name`
    :   Specifies the name of the environment variable. Environment variable names starting with `HOSTNAME`, `KUBERNETES_`, or `EXTERNAL_SECRETS_` are reserved and are not allowed.


`spec.controllerConfig.componentConfigs.overrideEnv.value`
:   Specifies the value of the environment variable.

**Verification**

*   Verify that the environment variable is set on the deployment by running the following command:
    ```terminal
    $ oc set env deployment/external-secrets -n external-secrets --list
    ```

    The output should include the custom environment variable you specified.