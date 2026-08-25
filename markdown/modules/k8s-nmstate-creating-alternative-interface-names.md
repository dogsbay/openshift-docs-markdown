{%- set _mod_docs_content_type = "PROCEDURE" %}
# Create alternative interface names by interface name {id="k8s-nmstate-creating-alternative-interface-names-by-name_{{ context }}"}

You can create alternative names for network interfaces to enable consistent, descriptive interface references across cluster nodes.
Alternative names persist across reboots and can be used anywhere standard interface names are accepted. {._abstract}


:::important

You cannot configure alternative names on the `br-ex` bridge or any OVN-Kubernetes-managed Open vSwitch bridge.
You also cannot configure alternative names on interfaces, bonds, VLANs, or other devices associated with the `br-ex` bridge.

:::


**Prerequisites**

*   You installed the Kubernetes NMState Operator.
*   You have access to the cluster as a user with the `cluster-admin` role.
*   You installed the OpenShift CLI (`oc`).
*   You identified the target interface by interface name.
*   The target interface is not the `br-ex` bridge, an OVN-Kubernetes-managed bridge, or associated with these bridges.

**Procedure**

1.  Create a `NodeNetworkConfigurationPolicy` custom resource (CR) to define alternative names for a target interface.

    :::note

    Alternative names are appended to any existing alternative names.
    If you apply a policy multiple times with the same alternative names, the configuration remains unchanged.
    
    :::


    The following example creates a file named `ethernet-alt-names.yaml`:
    ```yaml
    apiVersion: nmstate.io/v1
    kind: NodeNetworkConfigurationPolicy
    metadata:
      name: ethernet-alt-names-policy
    spec:
      nodeSelector:
        kubernetes.io/hostname: <node_name>
      desiredState:
        interfaces:
          - name: <interface_name>
            type: ethernet
            state: up
            alt-names:
              - name: <alternative_name_1>
              - name: <alternative_name_2>
    ```

    where:
    *   `<node_name>` is the target node name. To target multiple nodes, use a different label selector such as `node-role.kubernetes.io/worker: ""`.
    *   `<interface_name>` is the target interface name.
    *   `<alternative_name_1>` and `<alternative_name_2>` are the alternative names you want to assign.
1.  Apply the policy to the cluster by running the following command:
    ```terminal
    $ oc apply -f ethernet-alt-names.yaml
    ```
    ```terminal title="Example output"
    nodenetworkconfigurationpolicy.nmstate.io/ethernet-alt-names-policy created
    ```

**Verification**

1.  Verify that the policy was applied successfully by running the following command:
    ```terminal
    $ oc get nncp ethernet-alt-names-policy -o yaml
    ```

    Check the `status` section to confirm the policy state is `Available`:
    ```yaml
    status:
      conditions:
      - lastTransitionTime: "2026-03-31T12:00:00Z"
        message: 2/2 nodes successfully configured
        reason: SuccessfullyConfigured
        status: "True"
        type: Available
    ```
1.  Create a debug pod on the target node and open a shell to the node filesystem by running the following command:
    ```terminal
    $ oc debug node/<node_name>
    ```
1.  Verify that the alternative names are configured on the interface by running the following command:
    ```terminal
    sh-4.4# ip link show <interface_name>
    ```
    ```terminal title="Example output"
    2: eth0: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc fq_codel state UP mode DEFAULT group default qlen 1000
        link/ether 00:11:22:33:44:55 brd ff:ff:ff:ff:ff:ff
        altname production-network
        altname external-interface
    ```

    The `altname` entries show the configured alternative names.