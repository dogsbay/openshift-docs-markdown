{%- set _mod_docs_content_type = "PROCEDURE" %}
# Enable IP forwarding on specific interfaces {id="nw-nmstate-enable-per-interface-ip-forwarding_{{ context }}"}

You can enable IPv4 forwarding on specific network interfaces by configuring the `forwarding` field in a `NodeNetworkConfigurationPolicy` custom resource (CR). {._abstract}

Enabling IP forwarding is useful when you need specific secondary network interfaces to forward IP packets. For example, MetalLB load balancers on secondary network interfaces require IP forwarding to function. IP forwarding at the interface level enables this functionality, while retaining global forwarding rules that still disable IP forwarding at the node or cluster level.


:::important

The Kubernetes NMState Operator configures forwarding on secondary network interfaces for IPv4 packets only.

:::


**Prerequisites**

*   You installed Kubernetes NMState Operator.
*   You have access to the cluster as a user with the `cluster-admin` role.
*   You have identified the network interfaces that require IPv4 forwarding.
*   You have installed the OpenShift CLI (`oc`).

**Procedure**

1.  Create a `NodeNetworkConfigurationPolicy` manifest file to enable IP forwarding on the target interface:
    ```yaml
    apiVersion: nmstate.io/v1
    kind: NodeNetworkConfigurationPolicy
    metadata:
      name: enable-forwarding-eth1 
    spec:
      nodeSelector:
        node-role.kubernetes.io/worker: ""
      desiredState:
        interfaces:
        - name: eth1
          type: ethernet
          state: up
          ipv4:
            enabled: true
            forwarding: true
    ```

    where:
    *   `metadata.name` defines the name of the policy.
    *   `spec.nodeSelector` specifies which nodes to apply the policy to based on node labels or roles.
    *   `interfaces.name` defines the name of the interface on which to enable IP forwarding. This can be a physical, bond, or VLAN interface.
    *   `interfaces.ipv4.enabled` defines whether the IPv4 protocol is active.
    *   `interfaces.ipv4.forwarding` specifies whether IPv4 forwarding is enabled on the interface. Setting this to `true` enables IPv4 forwarding on the interface.
1.  Apply the policy by running the following command:
    ```terminal
    $ oc apply -f enable-forwarding-eth1.yaml
    ```

**Verification**

1.  Verify that the policy was applied successfully by running the following command:
    ```terminal
    $ oc get nncp
    ```
    ```terminal title="Example output"
    NAME                      STATUS      REASON
    enable-forwarding-eth1    Available   SuccessfullyConfigured
    ```

    The `SuccessfullyConfigured` status indicates that the policy was successfully applied.
1.  Start a debug session on a target node and access the root file system:
    ```terminal
    $ oc debug node/<node_name>
    # chroot /host
    ```
    *   Replace `<node_name>` with the name of the node.
1.  Verify that IP forwarding is enabled on the interface:
    ```terminal
    # sysctl net.ipv4.conf.eth1.forwarding
    ```
    ```terminal title="Example output"
    net.ipv4.conf.eth1.forwarding = 1
    ```

    A value of `1` indicates that IPv4 forwarding is enabled on the interface.