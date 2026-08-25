{%- set _mod_docs_content_type = "REFERENCE" %}
# ARM64 compatibility {id="virt-arm-compatibility_{{ context }}"}

{{ VirtProductName }} on ARM64 systems is generally available (GA) with specific limitations for operating systems and live migration. {._abstract}

Before using {{ VirtProductName }} on an ARM64-based system, consider the following limitations:


Operating system
:   *   Only Linux-based guest operating systems are supported.
    *   All virtualization limitations for {{ op_system_base }} also apply to {{ VirtProductName }}. For more information, see [How virtualization on ARM64 differs from AMD64 and Intel 64](https://docs.redhat.com/en/documentation/red_hat_enterprise_linux/9/html/configuring_and_managing_virtualization/assembly_feature-support-and-limitations-in-rhel-9-virtualization_configuring-and-managing-virtualization#how-virtualization-on-arm-64-differs-from-amd64-and-intel64_feature-support-and-limitations-in-rhel-9-virtualization) in the {{ op_system_base }} documentation.

Live migration
:   *   Live migration is **not supported** on ARM64-based {{ product_title }} clusters.
    *   Hotplug is not supported on ARM64-based clusters because it depends on live migration.

VM creation
:   *   {{ op_system_base }} 10 supports instance types and preferences, but not templates.
    *   {{ op_system_base }} 9 supports templates, instance types, and preferences.