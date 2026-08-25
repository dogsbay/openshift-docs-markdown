{%- set _mod_docs_content_type = "CONCEPT" %}
# Limitations for performance plus {id="persistent-storage-csi-azure-disk-perf-plus-limits_{{ context }}"}

To successfully enable performance plus, verify that your disk configuration meets the required type, size, and provisioning criteria before attempting to use this feature. {._abstract}

Performance plus for Azure Disk has the following limitations:

*   Can be enabled only on Standard HDD, Standard SSD, and Premium SSD managed disks that are 513 GiB or larger.

    :::important

    If you request a smaller value, the disk size is rounded up to 513GiB.
    
    :::

*   Can be enabled only on new disks. For a workaround, see "Enabling performance plus by snapshot or cloning".