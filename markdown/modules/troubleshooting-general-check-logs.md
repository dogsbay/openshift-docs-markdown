{%- set _mod_docs_content_type = "PROCEDURE" %}
# Checking pod logs {id="troubleshooting-general-check-logs_{{ context }}"}

Get logs from the pod so that you can review the logs for issues. {._abstract}

**Procedure**

1.  List the pods by running the following command:
    ```terminal
    $ oc get pod
    ```

    ```terminal
    NAME        READY   STATUS    RESTARTS          AGE
    busybox-1   1/1     Running   168 (34m ago)     7d
    busybox-2   1/1     Running   119 (9m20s ago)   4d23h
    busybox-3   1/1     Running   168 (43m ago)     7d
    busybox-4   1/1     Running   168 (43m ago)     7d
    ```
1.  Check pod log files by running the following command:
    ```terminal
    $ oc logs -n <namespace> busybox-1
    ```

    For more information, see "oc logs", "Logging", and "Inspecting pod and container logs".