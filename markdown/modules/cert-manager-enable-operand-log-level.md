{%- set _mod_docs_content_type = "PROCEDURE" %}
# Setting a log level for cert-manager {id="cert-manager-enable-operand-log-level_{{ context }}"}

To troubleshoot issues and control log volume, configure the log level for the {{ cert_manager_operator }}. You can set specific verbosity levels to capture the necessary details for debugging or to reduce noise in your cluster logs. {._abstract}

**Prerequisites**

*   You have access to the cluster with `cluster-admin` privileges.
*   You have installed version 1.11.1 or later of the {{ cert_manager_operator }}.

**Procedure**

1.  Edit the `CertManager` resource by running the following command:
    ```terminal
    $ oc edit certmanager.operator cluster
    ```
1.  Set the log level value by editing the `spec.logLevel` section:
    ```yaml
    apiVersion: operator.openshift.io/v1alpha1
    kind: CertManager
    ...
    spec:
      logLevel: <log_level>
    ```

    The `CertManager` resource supports the following `logLevel` values:

    `Normal`
    :   Audits logs and records common operations. The default setting. Use this level when there are no issues.

    `Debug`
    :   Provides verbose logs. Use this level to troubleshoot minor issues.

    `Trace`
    :   Provides highly verbose logs. Use this level to troubleshoot major issues.

    `TraceAll`
    :   Provides maximum log detail. Use this level to troubleshoot serious issues.

    :::note

    `TraceAll` generates huge amount of logs. After setting `logLevel` to `TraceAll`, you might experience performance issues.
    
    :::


1.  Save your changes and quit the text editor to apply your changes.

    After applying the changes, the verbosity level for the cert-manager components controller, CA injector, and webhook is updated.