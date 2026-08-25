{%- set _mod_docs_content_type = "PROCEDURE" %}
# Configuring a RoCE adapter for virtual machine networking on {{ ibm_z_name }} {id="virt-udn-roce-ibm-z_{{ context }}"}

On {{ ibm_z_name }} z17, RoCE adapters support promiscuous mode at the hardware level, which forwards traffic for all virtual machine MAC addresses without manual registration. On earlier {{ ibm_z_name }} generations, each virtual machine MAC address must be manually registered with the RoCE interface because promiscuous mode is not available. {._abstract}

Use the following procedure to enable promiscuous mode on {{ ibm_z_name }} z17.

**Prerequisites**

*   You have access to the LPAR configuration for the {{ ibm_z_name }} z17 system.
*   You have the name of the RoCE network interface, for example `ens329`.

**Procedure**

1.  Enable promiscuous mode on the RoCE adapter at the hardware level in the LPAR. See [Configuring FIDPARM to support promiscuous mode on a VF](https://www.ibm.com/docs/en/linux-on-systems?topic=mode-configuring-fidparm-support-promiscuous-vf)
1.  Enable promiscuous mode on the corresponding network interface by running the following command:
    ```terminal
    $ ip link set dev <interface> promisc on
    ```

    where `<interface>` is the name of the RoCE network interface, for example `ens329`.

**Verification**

1.  Verify that promiscuous mode is active by running the following command:
    ```terminal
    $ ip link show dev <interface>
    ```

    Example output:
    ```terminal
    3: ens329: <BROADCAST,MULTICAST,PROMISC,UP,LOWER_UP> mtu 1500 qdisc mq state UP mode DEFAULT group default qlen 1000
        link/ether 22:4b:c0:53:05:be brd ff:ff:ff:ff:ff:ff
        altname enp0s0
    ```

    The presence of the `PROMISC` flag confirms that promiscuous mode is active.