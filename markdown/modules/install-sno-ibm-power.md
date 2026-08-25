{%- set _mod_docs_content_type = "PROCEDURE" %}
# Installing {{ sno }} with {{ ibm_power_title }} {id="installing-sno-on-ibm-power_{{ context }}"}

You can install {{ sno }} with {{ ibm_power_title }}. {._abstract}

There are two steps for the {{ sno }} cluster installation. First the {{ sno }} logical partition (LPAR) needs to boot up with PXE, then you need to monitor the installation progress.

**Prerequisites**

*   You have set up bastion.

**Procedure**

1.  Use the following command to boot powerVM with netboot:
    ```terminal
    $ lpar_netboot -i -D -f -t ent -m <sno_mac> -s auto -d auto -S <server_ip> -C <sno_ip> -G <gateway> <lpar_name> default_profile <cec_name>
    ```

    where:

    sno_mac
    :   Specifies the MAC address of the {{ sno }} cluster.

    sno_ip
    :   Specifies the IP address of the {{ sno }} cluster.

    server_ip
    :   Specifies the IP address of bastion (PXE server).

    gateway
    :   Specifies the Network’s gateway IP.

    lpar_name
    :   Specifies the {{ sno }} lpar name in HMC.

    cec_name
    :   Specifies the System name where the sno_lpar resides
1.  After the {{ sno }} LPAR boots up with PXE, use the `openshift-install` command to monitor the progress of installation:
    1.  Run the following command after the bootstrap is complete:
        ```terminal
        ./openshift-install wait-for bootstrap-complete
        ```
    1.  Run the following command after it returns successfully:
        ```terminal
        ./openshift-install wait-for install-complete
        ```