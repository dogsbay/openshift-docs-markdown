{%- set _mod_docs_content_type = "PROCEDURE" %}
# Exploring the daemon sets {id="file-integrity-operator-exploring-daemon-sets_{{ context }}"}

Each `FileIntegrity` object represents a scan on several nodes. The scan itself is performed by pods managed by a daemon set. The config maps created by the AIDE daemon are not retained and are deleted after the File Integrity Operator processes them. However, on failure and error, the contents of these config maps are copied to the config map that the `FileIntegrityNodeStatus` object points to. {._abstract}

**Procedure**

1.  To find the daemon set that represents a `FileIntegrity` object, run:
    ```terminal
    $ oc -n openshift-file-integrity get ds/aide-worker-fileintegrity
    ```
1.  To list the pods in that daemon set, run:
    ```terminal
    $ oc -n openshift-file-integrity get pods -lapp=aide-worker-fileintegrity
    ```
1.  To view logs of a single AIDE pod, call `oc logs` on one of the pods:
    ```terminal
    $ oc -n openshift-file-integrity logs pod/aide-worker-fileintegrity-mr8x6
    ```
    ```terminal title="Example output"
    Starting the AIDE runner daemon
    initializing AIDE db
    initialization finished
    running aide check
    ...
    ```