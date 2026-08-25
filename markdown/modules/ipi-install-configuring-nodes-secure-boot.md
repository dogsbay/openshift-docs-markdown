{%- set _mod_docs_content_type = "PROCEDURE" %}
# Configuring nodes for Secure Boot manually {id="configuring-nodes-for-secure-boot_{{ context }}"}

Secure Boot prevents a node from booting unless it verifies the node is using only trusted software, such as UEFI firmware drivers, EFI applications, and the operating system. {._abstract}


:::note

Red Hat only supports manually configured Secure Boot when deploying with Redfish virtual media.

:::


To enable Secure Boot manually, refer to the hardware guide for the node and execute the following:

**Procedure**

1.  Boot the node and enter the BIOS menu.
1.  Set the node’s boot mode to `UEFI Enabled`.
1.  Enable Secure Boot.

    :::important

    Red Hat does not support Secure Boot with self-generated keys.
    
    :::