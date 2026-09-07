{%- set _mod_docs_content_type = "PROCEDURE" %}
# Set up the management cluster {id="nw-dpf-management-cluster-setup_{{ context }}"}

The management cluster is a standard {{ product_title }} {{ product_version }} cluster installed by using the Assisted Installer.
This cluster hosts the DPF Operators and the hosted control planes for managing the hosted cluster on DPUs. {._abstract}

**Prerequisites**

*   You have access to the [{{ hybrid_console }}](https://console.redhat.com/openshift/create).
*   You have the OpenShift CLI (`oc`) installed.

**Procedure**

1.  Go to the [{{ hybrid_console }} cluster creation page](https://console.redhat.com/openshift/create) and create a cluster with control-plane nodes only.
Select **Data center** → **Assisted Installer**.
1.  Optional: Configure jumbo MTU for each control plane node.
    1.  Under **Hosts' network configuration** in the Assisted Installer wizard, select **Static IP, bridges, and bonds**.
    1.  Set the **Static network configurations** section per node according to the following template, using the relevant MAC address and interface name for each node:
        ```yaml
        interfaces:
          - ipv4:
              dhcp: true
              enabled: true
            mac-address: <xx:xx:xx:xx:xx:xx>
            mtu: 1500 # Set to 1500 for standard MTU or 9000 for jumbo frames
            name: <interface-name>
            state: up
            type: ethernet
        ```

        :::note

        *   You can alternatively configure MTU allocation on the DHCP server that allocates IPs to the control plane nodes.
        *   If virtual machines are used for control-plane nodes, the MTU must be set on the bridge of the hypervisor used by the VMs.
        *   When using MTU 9000, ensure the switch ports that connect the cluster’s control-plane nodes are set to handle jumbo frames.
        
        :::

1.  Select the following operators to install with the cluster:
    *   **Storage** → **Logical Volume Manager Storage**
    *   **Platform Operations & Lifecycle** → **MultiCluster Engine**
    *   **Scheduling** → **Node Feature Discovery**
1.  Click **Add hosts** to add hosts to the cluster.
Only control plane nodes are required at this stage.
1.  After the installation completes, download the `KUBECONFIG` file and save it as `mgmt-kubeconfig`.

**Verification**

1.  Set the `KUBECONFIG` environment variable:
    ```terminal
    $ export KUBECONFIG="$(pwd)/mgmt-kubeconfig"
    ```
1.  Verify that all nodes are in a `Ready` state:
    ```terminal
    $ oc get nodes
    ```