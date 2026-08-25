{%- set _mod_docs_content_type = "PROCEDURE" %}
# Troubleshooting a failed storage checkup {id="virt-troubleshoot-storage-checkup_{{ context }}"}

If a storage checkup fails, there are steps that you can take to identify the reason for failure. {._abstract}

**Prerequisites**

*   You have installed the {{ oc_first }}.
*   You have downloaded the directory provided by the `must-gather` tool.

**Procedure**

1.  Review the `status.failureReason` field in the `storage-checkup-config` config map by running the following command and observing the output:
    ```terminal
    $ oc get configmap storage-checkup-config -n <namespace> -o yaml
    ```

    Example output config map:
    ```yaml
    apiVersion: v1
    kind: ConfigMap
    metadata:
      name: storage-checkup-config
      labels:
        kiagnose/checkup-type: kubevirt-storage
    data:
      spec.timeout: 10m
      status.succeeded: "false"
      status.failureReason: "ErrNoDefaultStorageClass"
    # ...
    ```
    *   If the checkup has failed, the `status.succeeded` value is `false`.
    *   If the checkup has failed, the `status.failureReason` field contains an error message. In this example output, the `ErrNoDefaultStorageClass` error message means that no default storage class is configured.
1.  Search the directory provided by the `must-gather` tool for logs, events, or terms related to the error in the `data.status.failureReason` field value.