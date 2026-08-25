{%- set _mod_docs_content_type = "PROCEDURE" %}
# Checking the realtime kernel version {id="ztp-checking-kernel-rt-in-cluster_{{ context }}"}

Always use the latest version of the realtime kernel in your {{ product_title }} clusters. If you are unsure about the kernel version that is in use in the cluster, you can compare the current realtime kernel version to the release version with the following procedure. {._abstract}

**Prerequisites**

*   You have installed the OpenShift CLI (`oc`).
*   You are logged in as a user with `cluster-admin` privileges.
*   You have installed `podman`.

**Procedure**

1.  Run the following command to get the cluster version:
    ```terminal
    $ OCP_VERSION=$(oc get clusterversion version -o jsonpath='{.status.desired.version}{"\n"}')
    ```
1.  Get the release image SHA number:
    ```terminal
    $ DTK_IMAGE=$(oc adm release info --image-for=driver-toolkit quay.io/openshift-release-dev/ocp-release:$OCP_VERSION-x86_64)
    ```
1.  Run the release image container and extract the kernel version that is packaged with cluster’s current release:
    ```terminal
    $ podman run --rm $DTK_IMAGE rpm -qa | grep 'kernel-rt-core-' | sed 's#kernel-rt-core-##'
    ```
    ```terminal title="Example output"
    4.18.0-305.49.1.rt7.121.el8_4.x86_64
    ```

    This is the default realtime kernel version that ships with the release.

    :::note

    The realtime kernel is denoted by the string `.rt` in the kernel version.
    
    :::


**Verification**

Check that the kernel version listed for the cluster’s current release matches actual realtime kernel that is running in the cluster. Run the following commands to check the running realtime kernel version:

1.  Open a remote shell connection to the cluster node:
    ```terminal
    $ oc debug node/<node_name>
    ```
1.  Check the realtime kernel version:
    ```terminal
    sh-4.4# uname -r
    ```
    ```terminal title="Example output"
    4.18.0-305.49.1.rt7.121.el8_4.x86_64
    ```