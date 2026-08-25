{%- set _mod_docs_content_type = "PROCEDURE" %}
# Verifying pods after resolving a mismatch {id="microshift-verifying-pods-mismatch_{{ context }}"}

To confirm that the mismatch is resolved, verify the security context constraint (SCC) and the SELinux label of the pods. Checking these settings ensures that your workloads are functioning with the correct security configurations. {._abstract}

**Procedure**

1.  Verify that the same SCC is assigned to the first pod by running the following command:
    ```terminal
    $ oc describe pod _<pod_name_a>_ |grep -i scc
    ```
    *   Replace `_<pod_name_a>_` with the name of the first pod.
        ```terminal title="Example output"
        openshift.io/scc: restricted
        ```
1.  Verify that the same SCC is assigned to first second pod by running the following command:
    ```terminal
    $ oc describe pod _<pod_name_b>_ |grep -i scc
    ```
    *   Replace `_<pod_name_b>_` with the name of the second pod.
        ```terminal title="Example output"
        openshift.io/scc: restricted
        ```
1.  Verify that the same SELinux label is applied to first pod by running the following command:
    ```terminal
    $ oc exec _<pod_name_a>_ -- ls -laZ _<pvc_mountpoint>_
    ```
    *   Replace `_<pod_name_a>_` with the name of the first pod. 
    *   Replace `_<pvc_mountpoint>_` with the mount point within the first pod.
        ```terminal title="Example output"
        total 4
        drwxrwsrwx. 2 root       1000670000 system_u:object_r:container_file_t:s0:c10,c26 19 Aug 29 18:17 .
        dr-xr-xr-x. 1 root       root       system_u:object_r:container_file_t:s0:c10,c26 61 Aug 29 18:16 ..
        -rw-rw-rw-. 1 1000670000 1000670000 system_u:object_r:container_file_t:s0:c10,c26 29 Aug 29 18:17 test1
        [...]
        ```
1.  Verify that the same SELinux label is applied to second pod by running the following command:
    ```terminal
    $ oc exec _<pod_name_b>_ -- ls -laZ _<pvc_mountpoint>_
    ```
    *   Replace `_<pod_name_b>_` with the name of the second pod.
    *   Replace `_<pvc_mountpoint>_` with the mount point within the second pod.
        ```terminal title="Example output"
        total 4
        drwxrwsrwx. 2 root       1000670000 system_u:object_r:container_file_t:s0:c10,c26 19 Aug 29 18:17 .
        dr-xr-xr-x. 1 root       root       system_u:object_r:container_file_t:s0:c10,c26 61 Aug 29 18:16 ..
        -rw-rw-rw-. 1 1000670000 1000670000 system_u:object_r:container_file_t:s0:c10,c26 29 Aug 29 18:17 test1
        [...]
        ```