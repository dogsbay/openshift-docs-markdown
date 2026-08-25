{%- set _mod_docs_content_type = "PROCEDURE" %}
# Debugging Velero resources with the OpenShift CLI tool {id="oadp-debugging-oc-cli_{{ context }}"}

Debug a failed backup or restore by checking Velero custom resources (CRs) and the `Velero` pod log with the OpenShift CLI tool. {._abstract}

**Procedure**

*   Retrieve a summary of warnings and errors associated with a `Backup` or `Restore` CR by using the following `oc describe` command:
    ```terminal
    $ oc describe <velero_cr> <cr_name>
    ```
*   Retrieve the `Velero` pod logs by using the following `oc logs` command:
    ```terminal
    $ oc logs pod/<velero>
    ```
*   Specify the Velero log level in the `DataProtectionApplication` resource as shown in the following example.

    :::note

    This option is available starting from {{ oadp_short }} 1.0.3.
    
    :::

    ```yaml
    apiVersion: oadp.openshift.io/v1alpha1
    kind: DataProtectionApplication
    metadata:
      name: velero-sample
    spec:
      configuration:
        velero:
          logLevel: warning
    ```

    The following `logLevel` values are available:
    *   `trace`
    *   `debug`
    *   `info`
    *   `warning`
    *   `error`
    *   `fatal`
    *   `panic`

        Use the `info` `logLevel` value for most logs.