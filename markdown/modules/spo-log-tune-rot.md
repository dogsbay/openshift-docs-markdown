{%- set _mod_docs_content_type = "PROCEDURE" %}
# Audit log file fine-tuning and rotation {id="spo-log-tune-rot_{{ context }}"}

For audit logging to a file, you can manage file size and how long each file is kept. These options are similar to [Kubernetes API server log settings](https://kubernetes.io/docs/tasks/debug/debug-cluster/audit/). {._abstract}

**Procedure**

1.  You configure these by patching the JSON log enricher options:
    ```terminal
    # kubectl -n openshift-security-profiles patch spod spod --type=merge -p '{"spec":{"enableJsonEnricher":true,"verbosity":0,"jsonEnricherOptions":{"auditLogPath":"/tmp/logs/audit1.log","auditLogMaxSize":500,"auditLogMaxBackups":2,"auditLogMaxAge":10}}}'
    ```

    Wait until all SPOD pods show `Running` before proceeding.
    *   `auditLogMaxSize`: The maximum size (in megabytes) a log file can reach before it’s rotated (a new file is started).
    *   `auditLogMaxBackups`: The maximum number of older, rotated log files to keep. Set to 0 for no limit.
    *   `auditLogMaxAge`: The maximum number of days to keep old log files.
1.  Increase the logging level for the JSON log enricher container to help with debugging. A value of `0` sets minimal logs. A value of `1` sets more detailed logs. You can choose either of these two levels and enable either level with the following command:
    ```terminal
    # kubectl -n openshift-security-profiles patch spod spod --type=merge -p '{"spec":{"enableJsonEnricher":true, "verbosity": 1}}'
    ```

    Wait until all SPOD pods show `Running` before proceeding.