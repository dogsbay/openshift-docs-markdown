{%- set _mod_docs_content_type = "PROCEDURE" %}
# Checking the pods for mismatch {id="microshift-checking-pods-mismatch_{{ context }}"}

To ensure workload consistency, check the pods running on {{ microshift_short }} for mismatches. Identifying these discrepancies helps verify that your running workloads match the expected configuration. {._abstract}

**Procedure**

1.  List the mount point within the first pod by running the following command:
    ```terminal
    $ oc get pods -n _<pod_name_a>_ -ojsonpath='{.spec.containers[*].volumeMounts[*].mountPath}'
    ```
    *   Replace `_<pod_name_a>_` with the name of the first pod.
        ```terminal title="Example output"
        /files /var/run/secrets/kubernetes.io/serviceaccount
        ```
1.  List the mount point within the second pod by running the following command:
    ```terminal
    $ oc get pods -n _<pod_name_b>_ -ojsonpath='{.spec.containers[*].volumeMounts[*].mountPath}'
    ```
    *   Replace `_<pod_name_b>_` with the name of the second pod.
        ```terminal title="Example output"
        /files /var/run/secrets/kubernetes.io/serviceaccount
        ```
1.  Check the context and permissions inside the first pod by running the following command:
    ```terminal
    $ oc rsh _<pod_name_a>_ ls -lZah _<pvc_mountpoint>_
    ```
    *   Replace `_<pod_name_a>_` with the name of the first pod. 
    *   Replace `_<pvc_mountpoint>_` with the mount point within the first pod.
        ```terminal title="Example output"
        total 12K
        dr-xr-xr-x.   1 root root system_u:object_r:container_file_t:s0:c398,c806   40 Feb 17 13:36 .
        dr-xr-xr-x.   1 root root system_u:object_r:container_file_t:s0:c398,c806   40 Feb 17 13:36 ..
        [...]
        ```
1.  Check the context and permissions inside the second pod by running the following command:
    ```terminal
    $ oc rsh _<pod_name_b>_ ls -lZah _<pvc_mountpoint>_
    ```
    *   Replace `_<pod_name_b>_` with the name of the second pod.
    *   Replace `_<pvc_mountpoint>_` with the mount point within the second pod.
        ```terminal title="Example output"
        total 12K
        dr-xr-xr-x.   1 root root system_u:object_r:container_file_t:s0:c15,c25   40 Feb 17 13:34 .
        dr-xr-xr-x.   1 root root system_u:object_r:container_file_t:s0:c15,c25   40 Feb 17 13:34 ..
        [...]
        ```
1.  Compare both the outputs to check if there is a mismatch of SELinux context.