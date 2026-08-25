{%- set _mod_docs_content_type = "PROCEDURE" %}
# Accessing running pods {id="accessing-running-pods_{{ context }}"}

You can review running pods dynamically by opening a shell inside a pod or by gaining network access through port forwarding. {._abstract}

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

1.  Switch into the project that contains the pod you would like to access. This is necessary because the `oc rsh` command does not accept the `-n` namespace option:
    ```terminal
    $ oc project <namespace>
    ```
1.  Start a remote shell into a pod:
    ```terminal
    $ oc rsh <pod_name>
    ```

    where:

    `<pod_name>`
    :   If a pod has multiple containers, `oc rsh` defaults to the first container unless `-c <container_name>` is specified.

1.  Start a remote shell into a specific container within a pod:
    ```terminal
    $ oc rsh -c <container_name> pod/<pod_name>
    ```
1.  Create a port forwarding session to a port on a pod:
    ```terminal
    $ oc port-forward <pod_name> <host_port>:<pod_port>
    ```

    where:

    `<pod_name> <host_port>:<pod_port>`
    :   Enter `Ctrl+C` to cancel the port forwarding session.