{%- set _mod_docs_content_type = "PROCEDURE" %}
# Getting the DPLL firmware version for the CGU in an Intel 800 series NIC {id="cnf-getting-the-dpll-firmware-version-for-intel-800-series-nics_{{ context }}"}

You can get the digital phase-locked loop (DPLL) firmware version for the Clock Generation Unit (CGU) in an Intel 800 series NIC by opening a debug shell to the cluster node and querying the NIC hardware. {._abstract}

**Prerequisites**

*   You have installed the OpenShift CLI (`oc`).
*   You have logged in as a user with `cluster-admin` privileges.
*   You have installed an Intel 800 series NIC in the cluster host.
*   You have installed the PTP Operator on a bare-metal cluster with hosts that support PTP.

**Procedure**

1.  Start a debug pod by running the following command:
    ```terminal
    $ oc debug node/<node_name>
    ```

    where:

    &lt;node_name>
    :   Is the node where you have installed the Intel 800 series NIC.
1.  Check the CGU firmware version in the NIC by using the `devlink` tool and the bus and device name where the NIC is installed.
For example, run the following command:
    ```terminal
    sh-4.4# devlink dev info <bus_name>/<device_name> | grep cgu
    ```

    where:

    &lt;bus_name> 
    :   Is the bus where the NIC is installed. For example, `pci`.

    &lt;device_name> 
    :   Is the NIC device name. For example, `0000:51:00.0`.
    ```terminal title="Example output"
    cgu.id 36
    fw.cgu 8032.16973825.6021
    ```

    where:

    `cgu.id 36`
    :   CGU hardware revision number.


    `fw.cgu 8032.16973825.6021`
    :   DPLL firmware version running in the CGU, where the DPLL firmware version is `6201`, and the DPLL model is `8032`.
        The string `16973825` is a shorthand representation of the binary version of the DPLL firmware version (`1.3.0.1`).

    :::note

    The firmware version has a leading nibble and 3 octets for each part of the version number.
    The number `16973825` in binary is `0001 0000 0011 0000 0000 0000 0001`.
    Use the binary value to decode the firmware version.
    For example:

    **DPLL firmware version**

    | Binary part | Decimal value |
    | --- | --- |
    | `0001` | 1 |
    | `0000 0011` | 3 |
    | `0000 0000` | 0 |
    | `0000 0001` | 1 |