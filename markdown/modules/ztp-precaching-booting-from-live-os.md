{%- set _mod_docs_content_type = "PROCEDURE" %}
# Booting from a live operating system image {id="ztp-booting-from-live-os_{{ context }}"}

You can use the {{ factory_prestaging_tool }} to boot servers where only one disk is available and an external disk drive cannot be attached to the server. {._abstract}


:::warning

{{ op_system }} requires the disk to not be in use when the disk is about to be written with an {{ op_system }} image.

:::


Depending on the server hardware, you can mount the {{ op_system }} live ISO on the blank server using one of the following methods:

*   Using the Dell RACADM tool on a Dell server.
*   Using the HPONCFG tool on a HP server.
*   Using the Redfish BMC API.

It is recommended to automate the mounting procedure. To automate the procedure, you need to pull the required images and host them on a local HTTP server.

**Prerequisites**

*   You powered up the host.
*   You have network connectivity to the host.

The following example procedure uses the Redfish BMC API to mount the {{ op_system }} live ISO.

**Procedure**

1.  Mount the {{ op_system }} live ISO:
    1.  Check virtual media status:
        ```terminal
        $ curl --globoff -H "Content-Type: application/json" -H \
        "Accept: application/json" -k -X GET --user ${username_password} \
        https://$BMC_ADDRESS/redfish/v1/Managers/Self/VirtualMedia/1 | python -m json.tool
        ```
    1.  Mount the ISO file as a virtual media:
        ```terminal
        $ curl --globoff -L -w "%{http_code} %{url_effective}\\n" -ku ${username_password} -H "Content-Type: application/json" -H "Accept: application/json" -d '{"Image": "http://[$HTTPd_IP]/RHCOS-live.iso"}' -X POST https://$BMC_ADDRESS/redfish/v1/Managers/Self/VirtualMedia/1/Actions/VirtualMedia.InsertMedia
        ```
    1.  Set the boot order to boot from the virtual media once:
        ```terminal
        $ curl --globoff  -L -w "%{http_code} %{url_effective}\\n"  -ku ${username_password}  -H "Content-Type: application/json" -H "Accept: application/json" -d '{"Boot":{ "BootSourceOverrideEnabled": "Once", "BootSourceOverrideTarget": "Cd", "BootSourceOverrideMode": "UEFI"}}' -X PATCH https://$BMC_ADDRESS/redfish/v1/Systems/Self
        ```
1.  Reboot and ensure that the server is booting from virtual media.