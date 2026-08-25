{%- set _mod_docs_content_type = "CONCEPT" %}
# Limitations to configure the size of the devices used in {{ lvms }} {id="limitations-to-configure-size-of-devices_{{ context }}"}

To ensure your devices are compatible with storage operations, review the size configuration limitations in {{ lvms }}. Adhering to these constraints prevents provisioning failures by ensuring selected devices meet the required capacity specifications. {._abstract}

When provisioning storage by using {{ lvms }}, the following factors limit device size:

*   The total storage size that you can provision is limited by the size of the underlying Logical Volume Manager (LVM) thin pool and the over-provisioning factor.
*   The size of the logical volume depends on the size of the Physical Extent (PE) and the Logical Extent (LE).
    *   You can define the size of PE and LE during the physical and logical device creation.
    *   The default PE and LE size is 4 MiB.
    *   If the size of the PE is increased, the maximum size of the LVM is determined by the kernel limits and your disk space.
{%- if microshift %}
    *   The size limit for {{ op_system_base_full }} 9 by using the default PE and LE size is 8 EB.
    *   The following are the minimum storage sizes that you can request for each file system type:
        *   `block`: 8 MiB
        *   `xfs`: 300 MiB
        *   `ext4`: 32 MiB
{%- endif %}

{% if not microshift %}

The following tables describe the chunk size and volume size limits for static and host configurations:

**Tested configuration**

| Parameter | Value |
| --- | --- |
| Chunk size | 128 KiB |
| Maximum volume size | 32 TiB |

**Theoretical size limits for static configuration**

| Parameter | Minimum value | Maximum value |
| --- | --- | --- |
| Chunk size | 64 KiB | 1 GiB |
| Volume size | Minimum size of the underlying {{ op_system_first }} system. | Maximum size of the underlying {{ op_system }} system. |

**Theoretical size limits for a host configuration**

| Parameter | Value |
| --- | --- |
| Chunk size | This value is based on the configuration in the `lvm.conf` file. By default, the configuration sets the value to `128` KiB. |
| Maximum volume size | Equal to the maximum volume size of the underlying {{ op_system }} system. |
| Minimum volume size | Equal to the minimum volume size of the underlying {{ op_system }} system. |

{% endif %}