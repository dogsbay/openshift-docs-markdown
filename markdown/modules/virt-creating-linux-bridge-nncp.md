{%- set _mod_docs_content_type = "PROCEDURE" %}
# Create a Linux bridge node network configuration policy {id="virt-creating-linux-bridge-nncp_{{ context }}"}

You can configure a Linux bridge network for live migration or external access to virtual machines (VMs) by creating a `NodeNetworkConfigurationPolicy` (NNCP) manifest. {._abstract}

**Prerequisites**

*   You have installed the Kubernetes NMState Operator.

**Procedure**

1.  Configure the `NNCP` manifest. This example includes sample values that you must replace with your own information.
    ```yaml
    apiVersion: nmstate.io/v1
    kind: NodeNetworkConfigurationPolicy
    metadata:
      name: br1-eth1-policy
    spec:
      desiredState:
        interfaces:
          - name: br1
            description: Linux bridge with eth1 as a port
            type: linux-bridge
            state: up
            ipv4:
              enabled: false
            bridge:
              options:
                stp:
                  enabled: false
              port:
                - name: eth1
    ```
    *   `metadata.name`: Defines the name of the node network configuration policy.
    *   `spec.desiredState.interfaces.name`: Defines the name of the new Linux bridge.
    *   `spec.desiredState.interfaces.description`: Optional field that can be used to define a human-readable description for the bridge.
    *   `spec.desiredState.interfaces.type`: Defines the interface type. In this example, the type is a Linux bridge.
    *   `spec.desiredState.interfaces.state`: Defines the requested state for the interface after creation.
    *   `spec.desiredState.interfaces.ipv4.enabled`: Defines whether the ipv4 protocol is active. Setting this to `false` disables IPv4 addressing on this bridge.
    *   `spec.desiredState.interfaces.bridge.options.stp.enabled`: Defines whether Spanning Tree Protocol (STP) is active. Setting this to `false` disables STP on this bridge.
    *   `spec.desiredState.interfaces.bridge.port.name`: Defines the node NIC that the bridge is attached to.

        :::note

        To create the NNCP manifest for a Linux bridge using Open Systems Adapter (OSA) with {{ ibm_z_name }}, you must disable VLAN filtering by the setting the `rx-vlan-filter` to `false` in the `NodeNetworkConfigurationPolicy` manifest.

        Alternatively, if you have SSH access to the node, you can disable VLAN filtering by running the following command:

        ```terminal
        $ sudo ethtool -K <osa-interface-name> rx-vlan-filter off
        ```
        
        :::

1.  Create the `NNCP` manifest:
    ```
    $ oc apply -f linux-bridge-nncp.yaml
    ```