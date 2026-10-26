{%- set _mod_docs_content_type = "REFERENCE" %}
# Recommended bonding modes for OVS bridges {id="virt-recommended-bonding-modes-ovs-bridge_{{ context }}"}

You can run VM traffic over a bonded interface to increase resiliency. The following bonding modes are recommended when you configure an OVS bridge for a localnet network. {._abstract}


:::note

If you use the default machine network as the uplink connection, see "Postinstallation configuration" in the Additional resources section for Day 1 configuration.

:::



Source load balancing (`balance-slb`)
:   This mode balances traffic from different VMs across the physical links based on the source MAC address and VLAN. It works without needing special switch support, making it useful when the physical switch is not configured for Link Aggregation Control Protocol (LACP).
    ```yaml title="Example NodeNetworkConfigurationPolicy manifest with balance-slb bonding"
    apiVersion: nmstate.io/v1
    kind: NodeNetworkConfigurationPolicy
    metadata:
      name: network-config
    spec:
      desiredState:
        interfaces:
        # ...
        - name: br1
          type: ovs-bridge
          state: up
          bridge:
            # ...
            port:
            - name: bond1
              link-aggregation:
                mode: balance-slb
                port:
                  - name: eno1np0
                  - name: eno2np1
    ```


LACP (mode 4 / IEEE 802.3ad)
:   Also known as Link Aggregation Control Protocol (LACP), this mode creates a single logical link from multiple physical interfaces for increased bandwidth and redundancy. This mode requires compatible switch configuration.
    ```yaml title="Example NodeNetworkConfigurationPolicy manifest with 802.3ad bonding"
    apiVersion: nmstate.io/v1
    kind: NodeNetworkConfigurationPolicy
    metadata:
      name: network-config
    spec:
      desiredState:
        interfaces:
        # ...
        - name: bond1
          type: bond
          state: up
          link-aggregation:
            mode: 802.3ad
            port:
            - eno1np0
            - eno2np1
    ```


:::important

{{ VirtProductName }} does not support linux bonding modes 0, 5, and 6. Mode 1 is only partially supported. For more information, see "Which bonding modes work when used with a bridge that virtual machine guests or containers connect to?" in the Additional resources section.

:::