{%- set _mod_docs_content_type = "REFERENCE" %}
# Requirements for iSCSI booting {id="iscsi-boot-requirements_{{ context }}"}

Several configurations are necessary to enable iSCSI booting when using the Agent-based Installer. {._abstract}

The following configurations are required:

*   Dynamic Host Configuration Protocol (DHCP) must be configured.
Static networking is not supported.
*   You must create an additional network for iSCSI that is separate from the machine network of the cluster.
The machine network is rebooted during cluster installation and cannot be used for the iSCSI session.
*   If the host on which you are booting the agent ISO image also has an installed disk, it might be necessary to specify the iSCSI disk name in the `rootDeviceHints` parameter to ensure that it is chosen as the boot disk for the final {{ op_system_first }} image.
You can also use a diskless environment for iSCSI booting, in which case you do not need to set the `rootDeviceHints` parameter.