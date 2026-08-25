{%- set _mod_docs_content_type = "PROCEDURE" %}
# Booting from an HTTP-hosted ISO image using the Redfish API {id="install-booting-from-an-iso-over-http-redfish_{{ context }}"}

You can provision hosts in your network using ISOs that you install using the Redfish Baseboard Management Controller (BMC) API. {._abstract}


:::note

This example procedure demonstrates the steps on a Dell server.

:::



:::important

Ensure that you have the latest firmware version of iDRAC that is compatible with your hardware. If you have any issues with the hardware or firmware, you must contact the provider.

:::


**Prerequisites**

*   Download the installation {{ op_system_first }} ISO.
*   Use a Dell PowerEdge server that is compatible with iDRAC9.

**Procedure**

1.  Copy the ISO file to an HTTP server accessible in your network.
1.  Boot the host from the hosted ISO file, for example:
    1.  Call the Redfish API to set the hosted ISO as the `VirtualMedia` boot media by running the following command:
        ```terminal
        $ curl -k -u <bmc_username>:<bmc_password> -d '{"Image":"<hosted_iso_file>", "Inserted": true}' -H "Content-Type: application/json" -X POST <host_bmc_address>/redfish/v1/Managers/iDRAC.Embedded.1/VirtualMedia/CD/Actions/VirtualMedia.InsertMedia
        ```

        Where:

        &lt;bmc_username>:&lt;bmc_password>
        :   Is the username and password for the target host BMC.

        &lt;hosted_iso_file>
        :   Is the URL for the hosted installation ISO, for example: `http://webserver.example.com/rhcos-live-minimal.iso`. The ISO must be accessible from the target host machine.

        &lt;host_bmc_address>
        :   Is the BMC IP address of the target host machine.
    1.  Set the host to boot from the `VirtualMedia` device by running the following command:
        ```terminal
        $ curl -k -u <bmc_username>:<bmc_password> -X PATCH -H 'Content-Type: application/json' -d '{"Boot": {"BootSourceOverrideTarget": "Cd", "BootSourceOverrideMode": "UEFI", "BootSourceOverrideEnabled": "Once"}}' <host_bmc_address>/redfish/v1/Systems/System.Embedded.1
        ```
    1.  Reboot the host:
        ```terminal
        $ curl -k -u <bmc_username>:<bmc_password> -d '{"ResetType": "ForceRestart"}' -H 'Content-type: application/json' -X POST <host_bmc_address>/redfish/v1/Systems/System.Embedded.1/Actions/ComputerSystem.Reset
        ```
    1.  Optional: If the host is powered off, you can boot it using the `{"ResetType": "On"}` switch. Run the following command:
        ```terminal
        $ curl -k -u <bmc_username>:<bmc_password> -d '{"ResetType": "On"}' -H 'Content-type: application/json' -X POST <host_bmc_address>/redfish/v1/Systems/System.Embedded.1/Actions/ComputerSystem.Reset
        ```