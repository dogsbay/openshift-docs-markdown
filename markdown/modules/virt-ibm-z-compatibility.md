{%- set _mod_docs_content_type = "REFERENCE" %}
# {{ ibm_z_title }} and {{ ibm_linuxone_title }} compatibility {id="virt-ibm-z-compatibility_{{ context }}"}

You can use {{ VirtProductName }} in an {{ product_title }} cluster that is installed in logical partitions (LPARs) on an {{ ibm_z_name }} or {{ ibm_linuxone_name }} (`s390x` architecture) system. {._abstract}

Some features are not currently available on `s390x` architecture, while others require workarounds or procedural changes. These lists are subject to change.


Currently unavailable features
:   The following features are currently not available on `s390x` architecture:
    *   Memory hot plugging and hot unplugging
    *   Node Health Check Operator
    *   SR-IOV Operator
    *   PCI passthrough
    *   {{ VirtProductName }} cluster checkup framework
    *   {{ VirtProductName }} on a cluster installed in FIPS mode
    *   IPv6
    *   {{ ibm_name }} Storage scale
    *   {{ hcp_capital }} for {{ VirtProductName }}
    *   VM pages using HugePages

    The following features are not applicable on `s390x` architecture:
    *   virtual Trusted Platform Module (vTPM) devices
    *   UEFI mode for VMs
    *   USB host passthrough
    *   Configuring virtual GPUs
    *   Creating and managing Windows VMs
    *   Hyper-V

Functionality differences
    :   The following features are available for use on s390x architecture but function differently or require procedural changes:
    * When deleting a virtual machine by using the web console, the **grace period** option is ignored. For more information, see "Deleting a virtual machine by using the web console" in the Additional resources section.
    * When configuring the default CPU model, the `spec.defaultCPUModel` value is `"gen15b"` for an {{ ibm_z_title }} cluster. For more information, see "Configuring the default CPU model" in the Additional resources section.
    * When configuring a downward metrics device, if you use a VM preference, the `spec.preference.name` value must be set to `rhel.9.s390x` or another available preference with the format `*.s390x`. For more information, see "Configuring a downward metrics device" in the Additional resources section.
    * When creating virtual machines from instance types, you are not allowed to set `spec.domain.memory.maxGuest` because memory hot plugging is not supported on {{ ibm_z_name }}. For more information, see "Creating virtual machines from instance types" in the Additional resources section.
    * Prometheus queries for VM guests could have inconsistent outcome in comparison to `x86`.