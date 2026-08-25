{%- set _mod_docs_content_type = "PROCEDURE" %}
# Collecting a network trace from an {{ product_title }} node or container {id="support-collecting-network-trace_{{ context }}"}

When investigating potential network-related {{ product_title }} issues, Red Hat Support might request a network packet trace from a specific {{ product_title }} cluster node or from a specific container. The recommended method to capture a network trace in {{ product_title }} is through a debug pod. {._abstract}

**Prerequisites**

*   You have access to the cluster as a user with the `cluster-admin` role.
{%- if openshift_dedicated %}

    :::note

    In {{ product_title }} deployments, customers who are not using the Customer Cloud Subscription (CCS) model cannot use the `oc debug` command as it requires `cluster-admin` privileges.
    
    :::

{%- endif %}
*   You have installed the OpenShift CLI (`oc`).
*   You have an existing Red Hat Support case ID.
{%- if not (openshift_rosa or openshift_rosa_hcp or openshift_dedicated) %}
*   You have a Red Hat standard or premium Subscription.
*   You have a Red Hat Customer Portal account.
*   You have SSH access to your hosts.
{% endif %}

**Procedure**

1.  Obtain a list of cluster nodes:
    ```terminal
    $ oc get nodes
    ```
1.  Enter into a debug session on the target node. This step instantiates a debug pod called `<node_name>-debug`:
    ```terminal
    $ oc debug node/my-cluster-node
    ```
1.  Set `/host` as the root directory within the debug shell. The debug pod mounts the host’s root file system in `/host` within the pod. By changing the root directory to `/host`, you can run binaries contained in the host’s executable paths:
    ```terminal
    # chroot /host
    ```
{%- if not (openshift_rosa or openshift_rosa_hcp or openshift_dedicated) %}

    :::note

    {{ product_title }} {{ product_version }} cluster nodes running {{ op_system_first }} are immutable and rely on Operators to apply cluster changes. Accessing cluster nodes by using SSH is not recommended. However, if the {{ product_title }} API is not available, or the kubelet is not properly functioning on the target node, `oc` operations will be impacted. In such situations, it is possible to access nodes using `ssh core@<node>.<cluster_name>.<base_domain>` instead.
    
    :::

{% endif %}
1.  From within the `chroot` environment console, obtain the node’s interface names:
    ```terminal
    # ip ad
    ```
1.  Start a `toolbox` container, which includes the required binaries and plugins to run `sosreport`:
    ```terminal
    # toolbox
    ```

    :::note

    If an existing `toolbox` pod is already running, the `toolbox` command outputs ’toolbox-' already exists. Trying to start...`. To avoid `tcpdump` issues, remove the running toolbox container with `podman rm toolbox-` and spawn a new toolbox container.
    
    :::

1.  Initiate a `tcpdump` session on the cluster node and redirect output to a capture file. This example uses `ens5` as the interface name:
    ```terminal
    $ tcpdump -nn -s 0 -i ens5 -w /host/var/tmp/my-cluster-node_$(date +%d_%m_%Y-%H_%M_%S-%Z).pcap
    ```

    where:

    `/host/var/tmp/my-cluster-node_$(date +%d_%m_%Y-%H_%M_%S-%Z).pcap`
    :   The `tcpdump` capture file’s path is outside of the `chroot` environment because the toolbox container mounts the host’s root directory at `/host`.

1.  If a `tcpdump` capture is required for a specific container on the node, follow these steps.
    1.  Determine the target container ID. The `chroot host` command precedes the `crictl` command in this step because the toolbox container mounts the host’s root directory at `/host`:
        ```terminal
        # chroot /host crictl ps
        ```
    1.  Determine the container’s process ID. In this example, the container ID is `a7fe32346b120`:
        ```terminal
        # chroot /host crictl inspect --output yaml a7fe32346b120 | grep 'pid' | awk '{print $2}'
        ```
    1.  Initiate a `tcpdump` session on the container and redirect output to a capture file. This example uses `49628` as the container’s process ID and `ens5` as the interface name. The `nsenter` command enters the namespace of a target process and runs a command in its namespace. because the target process in this example is a container’s process ID, the `tcpdump` command is run in the container’s namespace from the host:
        ```terminal
        # nsenter -n -t 49628 -- tcpdump -nn -i ens5 -w /host/var/tmp/my-cluster-node-my-container_$(date +%d_%m_%Y-%H_%M_%S-%Z).pcap
        ```

        where:

        `/host/var/tmp/my-cluster-node-my-container_$(date +%d_%m_%Y-%H_%M_%S-%Z).pcap`
        :   The `tcpdump` capture file’s path is outside of the `chroot` environment because the toolbox container mounts the host’s root directory at `/host`.

1.  Provide the `tcpdump` capture file to Red Hat Support for analysis, using one of the following methods.
    *   Upload the file to an existing Red Hat support case.
        1.  Concatenate the `sosreport` archive by running the `oc debug node/<node_name>` command and redirect the output to a file. This command assumes you have exited the previous `oc debug` session:
            ```terminal
            $ oc debug node/my-cluster-node -- bash -c 'cat /host/var/tmp/my-tcpdump-capture-file.pcap' > /tmp/my-tcpdump-capture-file.pcap
            ```

            where:

            `/host/var/tmp/my-tcpdump-capture-file.pcap`
            :   The debug container mounts the host’s root directory at `/host`. Reference the absolute path from the debug container’s root directory, including `/host`, when specifying target files for concatenation.
{%- if not (openshift_rosa or openshift_rosa_hcp or openshift_dedicated) %}

            :::note

            {{ product_title }} {{ product_version }} cluster nodes running {{ op_system_first }} are immutable and rely on Operators to apply cluster changes. Transferring a `tcpdump` capture file from a cluster node by using `scp` is not recommended. However, if the {{ product_title }} API is not available, or the kubelet is not properly functioning on the target node, `oc` operations will be impacted. In such situations, it is possible to copy a `tcpdump` capture file from a node by running `scp core@<node>.<cluster_name>.<base_domain>:<file_path> <local_path>`.
            
            :::

{% endif %}

        1.  Navigate to an existing support case within [the **Customer Support** page](https://access.redhat.com/support/cases/#/case/list) of the Red Hat Customer Portal.
        1.  Select **Attach files** and follow the prompts to upload the file.