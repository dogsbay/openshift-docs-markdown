{%- set _mod_docs_content_type = "PROCEDURE" %}
# Configuring OSA and HiperSockets adapters for virtual machine networking on {{ ibm_z_name }} {id="virt-udn-osa-hipersockets-ibm-z_{{ context }}"}

You can configure OSA and HiperSockets interfaces on {{ ibm_z_name }} for virtual machine networking by enabling Virtual NIC Characteristics (VNICC) attributes on the qeth driver. Without them, the qeth driver silently drops packets destined for virtual machine MAC addresses. {._abstract}

**Prerequisites**

*   You have the bus ID of the qeth network device, for example `0.0.1100`.
*   The `chzdev` command-line tool is available on the host node.

**Procedure**

1.  Enable flooding on the qeth device by running the following command:
    ```terminal
    $ echo 1 > /sys/devices/qeth/0.0.1100/vnicc/flooding
    ```
1.  Enable multicast flooding on the qeth device by running the following command:
    ```terminal
    $ echo 1 > /sys/devices/qeth/0.0.1100/vnicc/mcast_flooding
    ```
1.  Enable MAC address learning on the qeth device by running the following command:
    ```terminal
    $ echo 1 > /sys/devices/qeth/0.0.1100/vnicc/learning
    ```
1.  Or, enable MAC address learning by using `chzdev`:
    ```terminal
    $ sudo chzdev <device_bus_id> vnicc/learning=1
    ```

    where:

    `chzdev`
    :   Specifies the tool to configure {{ ibm_z_name }} devices.

    `<device_bus_id>`
    :   Specifies the bus ID of the qeth network device, for example `0.0.1100`.

    `vnicc/learning=1`
    :   Enables MAC address learning.