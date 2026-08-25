{%- set _mod_docs_content_type = "PROCEDURE" %}
# Inspecting pod and container logs {id="inspecting-pod-and-container-logs_{{ context }}"}

You can inspect pod and container logs for warnings and error messages related to explicit pod failures. Depending on policy and exit code, pod and container logs remain available after pods have been terminated. {._abstract}

**Prerequisites**

{% if not (openshift_rosa or openshift_rosa_hcp or openshift_dedicated) %}
*   You have access to the cluster as a user with the `cluster-admin` role.
{% endif %}
{% if openshift_rosa or openshift_rosa_hcp or openshift_dedicated %}
*   You have access to the cluster as a user with the `dedicated-admin` role.
{%- endif %}
*   Your API service is still functional.
*   You have installed the OpenShift CLI (`oc`).

**Procedure**

1.  Query logs for a specific pod:
    ```terminal
    $ oc logs <pod_name>
    ```
1.  Query logs for a specific container within a pod:
    ```terminal
    $ oc logs <pod_name> -c <container_name>
    ```

    Logs retrieved using the preceding `oc logs` commands are composed of messages sent to stdout within pods or containers.
1.  Inspect logs contained in `/var/log/` within a pod.
    1.  List log files and subdirectories contained in `/var/log` within a pod:
        ```terminal
        $ oc exec <pod_name>  -- ls -alh /var/log
        ```
        ```text title="Example output"
        total 124K
        drwxr-xr-x. 1 root root   33 Aug 11 11:23 .
        drwxr-xr-x. 1 root root   28 Sep  6  2022 ..
        -rw-rw----. 1 root utmp    0 Jul 10 10:31 btmp
        -rw-r--r--. 1 root root  33K Jul 17 10:07 dnf.librepo.log
        -rw-r--r--. 1 root root  69K Jul 17 10:07 dnf.log
        -rw-r--r--. 1 root root 8.8K Jul 17 10:07 dnf.rpm.log
        -rw-r--r--. 1 root root  480 Jul 17 10:07 hawkey.log
        -rw-rw-r--. 1 root utmp    0 Jul 10 10:31 lastlog
        drwx------. 2 root root   23 Aug 11 11:14 openshift-apiserver
        drwx------. 2 root root    6 Jul 10 10:31 private
        drwxr-xr-x. 1 root root   22 Mar  9 08:05 rhsm
        -rw-rw-r--. 1 root utmp    0 Jul 10 10:31 wtmp
        ```
    1.  Query a specific log file contained in `/var/log` within a pod:
        ```terminal
        $ oc exec <pod_name> cat /var/log/<path_to_log>
        ```
        ```text title="Example output"
        2023-07-10T10:29:38+0000 INFO --- logging initialized ---
        2023-07-10T10:29:38+0000 DDEBUG timer: config: 13 ms
        2023-07-10T10:29:38+0000 DEBUG Loaded plugins: builddep, changelog, config-manager, copr, debug, debuginfo-install, download, generate_completion_cache, groups-manager, needs-restarting, playground, product-id, repoclosure, repodiff, repograph, repomanage, reposync, subscription-manager, uploadprofile
        2023-07-10T10:29:38+0000 INFO Updating Subscription Management repositories.
        2023-07-10T10:29:38+0000 INFO Unable to read consumer identity
        2023-07-10T10:29:38+0000 INFO Subscription Manager is operating in container mode.
        2023-07-10T10:29:38+0000 INFO
        ```
    1.  List log files and subdirectories contained in `/var/log` within a specific container:
        ```terminal
        $ oc exec <pod_name> -c <container_name> ls /var/log
        ```
    1.  Query a specific log file contained in `/var/log` within a specific container:
        ```terminal
        $ oc exec <pod_name> -c <container_name> cat /var/log/<path_to_log>
        ```