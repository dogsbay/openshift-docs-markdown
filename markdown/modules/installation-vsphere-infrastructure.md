{%- set _mod_docs_content_type = "REFERENCE" %}
# VMware vSphere infrastructure requirements {id="installation-vsphere-infrastructure_{{ context }}"}

You must install an {{ product_title }} cluster on one of the following versions of a {{ vmw_full }} instance that meets the requirements for the components that you use: {._abstract}

*   Version 8.0 Update 1 or later, or VMware Cloud Foundation 5.0 or later
*   {{ vmw_full }} Foundation 9 or later, or VMware Cloud Foundation 9 or later

Both of these releases support Container Storage Interface (CSI) migration, which is enabled by default on {{ product_title }} {{ product_version }}.


:::note

Red Hat follows Broadcom’s End of Support dates for VMware products that {{ product_title }} runs on. After a VMware product version reaches End of Support, that version is no longer supported for use with {{ product_title }}.

:::


You can host the VMware vSphere infrastructure on-premise or on a [VMware Cloud Verified provider](https://cloud.vmware.com/providers) that meets the requirements outlined in the following tables:

**Version requirements for vSphere virtual environments**

| Virtual environment product | Required version |
| --- | --- |
| VMware virtual hardware | 15 or later |
| vSphere ESXi hosts | 8.0 Update 1 or later, or {{ vmw_full }} Foundation 9 or later; VMware Cloud Foundation 5.0 or later, or VMware Cloud Foundation 9 or later |
| vCenter host | 8.0 Update 1 or later, or {{ vmw_full }} Foundation 9 or later; VMware Cloud Foundation 5.0 or later, or VMware Cloud Foundation 9 or later |


:::important

You must ensure that the time on your ESXi hosts is synchronized before you install {{ product_title }}. See [Editing the Time Configuration Settings of Your ESXi Host (Broadcom documentation)](https://techdocs.broadcom.com/us/en/vmware-cis/vsphere/vsphere/8-0/vcenter-and-host-management/host-configuration-host-management/synchronizing-clocks-on-the-vsphere-network-host-management/editing-time-configuration-for-a-host-host-management.html).

:::


**Minimum supported vSphere version for VMware components**

| Component | Minimum supported versions | Description |
| --- | --- | --- |
| Hypervisor | vSphere 8.0 Update 1 or later, or VMware Cloud Foundation 5.0 or later with virtual hardware version 15; {{ vmw_full }} Foundation 9 or later, or VMware Cloud Foundation 9 or later | This hypervisor version is the minimum version that {{ op_system_first }} supports. For more information about supported hardware on the latest version of {{ op_system_base_full }} that is compatible with {{ op_system }}, see [Hardware](https://catalog.redhat.com/hardware/search) on the Red Hat Customer Portal. |
| Networking (NSX) | vSphere 8.0 Update 1 or later, or VMware Cloud Foundation 5.0 or later; VMware vSphere Foundation 9 or later, or VMware Cloud Foundation 9 or later | Red Hat uses the Partner Certification process to verify NSX compatibility. |
| CPU micro-architecture | x86-64-v2 or higher | {{ product_title }} version 4.13 and later are based on the {{ op_system_base }} 9.2 host operating system, which raised the microarchitecture requirements to x86-64-v2. See [Architectures](https://access.redhat.com/documentation/en-us/red_hat_enterprise_linux/9/html-single/9.2_release_notes/index#architectures) in the {{ op_system_base }} documentation. |


:::important

To ensure the best performance conditions for your cluster workloads that operate on {{ oci_first }} and on the {{ ocvs_first }} service, ensure volume performance units (VPUs) for your block volume are sized for your workloads.

The following list provides some guidance in selecting the VPUs needed for specific performance needs:

*   Test or proof of concept environment: 100 GB, and 20 to 30 VPUs.
*   Base-production environment: 500 GB, and 60 VPUs.
*   Heavy-use production environment: More than 500 GB, and 100 or more VPUs.

Consider allocating additional VPUs to give enough capacity for updates and scaling activities. See [Block Volume Performance Levels (Oracle documentation)](https://docs.oracle.com/en-us/iaas/Content/Block/Concepts/blockvolumeperformance.htm).

:::



:::note

The following additional {{ vmw_full }} Foundation and VMware Cloud Foundation components are outside the scope of Red Hat support:

*   Management: VCF Operations, VCF Automation, VCF Fleet Management, and VCF Identity Broker.
*   Networking: VMware NSX Container Plugin (NCP).
*   Migration: VMware HCX.

:::