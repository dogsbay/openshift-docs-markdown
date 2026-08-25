{%- set _mod_docs_content_type = "PROCEDURE" %}
# Setting a log level for the {{ external_secrets_operator }} operand {id="external-secrets-enable-operand-log-level_{{ context }}"}

You can troubleshoot common issues, such as secret synchronization failures, provider authentication errors, or data formatting problems, by configuring the log verbosity for the core controller. {._abstract}

**Prerequisites**

*   You have access to the cluster with `cluster-admin` privileges.
*   You have created the `ExternalSecretsConfig` custom resource.

**Procedure**

1.  Edit the `ExternalSecretsConfig` CR by running the following command:
    ```terminal
    $ oc edit externalsecretsconfigs.operator.openshift.io cluster
    ```
1.  Set the log level value by editing the `spec.appConfig.logLevel` section:
    ```yaml
    apiVersion: operator.openshift.io/v1alpha1
    kind: ExternalSecretsConfig
    ...
    spec:
      appConfig:
        logLevel: <log_level>
    ```

    where:

    log_level
    :   Supports the value range of 1-5. The log level gets mapped to the following operand support levels:
    *   1 - warnings
    *   2 - error logs
    *   3 - info logs
    *   4 and 5 - debug logs
1.  Save your changes and exit the editor.