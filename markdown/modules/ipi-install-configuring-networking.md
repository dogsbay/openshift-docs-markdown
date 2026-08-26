{%- set _mod_docs_content_type = "PROCEDURE" %}
# Configuring networking {id="configuring-networking_{{ context }}"}

Before installation, you must configure networking settings for the provisioner node. Installer-provisioned clusters deploy with a bare-metal bridge and network resources, and an optional provisioning bridge and network resources. {._abstract}

**Figure 1. Configure networking**

![Configure networking](/images/210_OpenShift_Baremetal_IPI_Deployment_updates_0122_1.png)


:::note

You can also configure networking settings from the {{ product_title }} web console.

:::


**Prerequisites**

*   You installed the `nmstate` package with the `sudo dnf install -y <package_name>` command. The package includes the `nmstatectl` CLI.

**Procedure**

1.  Configure the bare-metal network:

    :::note

    When configuring the bare-metal network and the secure shell (SSH) connection disconnects, NMState has a rollback mechanism that automatically reverts any configurations. You can also use the `nmstatectl gc` tool to generate configuration files for specified network state files.
    
    :::

    1.  For a network using DHCP, run the following command to delete the `/etc/sysconfig/network-scripts/ifcfg-eth0` legacy style:
        ```yaml
        $ nmcli con delete "System <baremetal_nic_name>"
        ```

        where:

        `<baremetal_nic_name>`
        :   Replace `<baremetal_nic_name>` with the name of your network interface controller (NIC).
    1.  For a network that uses Dynamic Host Configuration Protocol (DHCP), create an NMState YAML file and specify the bare-metal bridge interface and any physical interfaces in the file:
        ```yaml title="Example bare-metal bridge interface configuration that uses DHCP"
        # ...
        interfaces:
          - name:  <physical_interface_name>
            type: ethernet
            state: up
            ipv4:
              enabled: false
            ipv6:
              enabled: false
          - name: baremetal
            type: linux-bridge
            state: up
            ipv4:
              enabled: true
              dhcp: true
            bridge:
              options:
                stp:
                  enabled: false
              port:
                - name:  <physical_interface_name>
        # ...
        ```
    1.  For a network using static IP addressing and no DHCP network, create an NMState YAML file and specify the bare-metal bridge interface details in the file:
        ```yaml title="Example bare-metal bridge interface configuration that uses static IP addressing and no DHCP network"
        # ...
        dns-resolver:
          config:
            server:
              - <dns_ip_address>
        routes:
          config:
            - destination: 0.0.0.0/0
              next-hop-interface: baremetal
              next-hop-address: <gateway_ip>
        interfaces:
          - name: <physical_interface_name>
            type: ethernet
            state: up
            ipv4:
              enabled: false
            ipv6:
              enabled: false
          - name: baremetal
            type: linux-bridge 
            state: up
            ipv4:
              enabled: true
              dhcp: false
              address:
                - ip: <static_ip_address>
                  prefix-length: 24
            bridge:
              options:
                stp:
                  enabled: false
              port:
                - name: <physical_interface_name>
        # ...
        ```

        where:

        `<dns-resolver>`
        :   Defines the DNS server for your bare-metal system.

        `<server>`
        :   Replace `<dns_ip_address>` with the IP address for the DNS server.

        `<type>`
        :   Defines the bridge interface and its static IP configuration.

        `<gateway>`
        :   Replace `<gateway_ip>` with the IP address of the gateway.

        `<name>`
        :   Details the physical interface that you set as the bridge port.

1.  Apply the network configuration from the YAML file to the network interfaces for the host by entering the following command: 
    ```terminal
    $ nmstatectl apply <path_to_network_yaml>
    ```
1.  Back up the network configuration YAML file by entering the following command:
    ```terminal
    $ nmstatectl show > backup-nmstate.yml
    ```
1.  Optional: If you are deploying your cluster in a provisioning network, create or edit an NMState YAML file and specify the details in the file.

    :::note

    The IPv6 address can be any address that does not route through the bare-metal network.

    Ensure that you enabled Unified Extensible Firmware Interface (UEFI) and set UEFI PXE settings for the IPv6 protocol when using IPv6 addressing.
    
    :::

    ```yaml title="Example NMState YAML file for a provisioning network"
    # ...
    interfaces:
      - name: eth1
        type: ethernet
        state: up
        ipv4:
          enabled: false
        ipv6:
          enabled: false
      - name: provisioning
        type: linux-bridge
        state: up
        ipv4:
          enabled: true
          dhcp: false
          address:
            - ip: 172.22.0.254
              prefix-length: 24
        ipv6:
          enabled: true
          dhcp: false
          address:
            - ip: fd00:1101::1
              prefix-length: 64
        bridge:
          options:
            stp:
              enabled: false
          port:
            - name: eth1
    # ...
    ```
1.  Optional: Establish an SSH connection into the `provisioner` node by running the following command:
    ```terminal
    # ssh kni@provisioner.<cluster_name>.<domain>
    ```

    where

    `<cluster_name>.<domain>`
    :   Replace `<cluster_name>` with the name of your cluster and `<domain>` with the fully qualified domain name (FQDN) of your cluster.

1.  Verify that the connection bridges have been properly created by running the following command:
    ```terminal
    $ sudo nmcli con show
    ```
    ```terminal title="Example output"
    NAME                UUID                                  TYPE      DEVICE
    baremetal           832f645a-9337-4afc-b48e-4a55c5779eab  bridge    baremetal
    provisioning        e7756e01-d026-4a38-b460-129afaac0ec2  bridge    provisioning
    Wired connection 1  49ff4c9c-db76-3139-8c18-c49fa7deb39a  ethernet  eth0
    Wired connection 2  c1fb12b1-88a6-3c07-93b9-187c99204c43  ethernet  eth1
    lo                  aa030e0f-21ca-498f-b6ce-bac7d4d793f0  loopback  lo
    ```