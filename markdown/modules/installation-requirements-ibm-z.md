{%- set _mod_docs_content_type = "REFERENCE" %}
# Minimum {{ ibm_z_title }} system environment {id="minimum-ibm-z-system-requirements_{{ context }}"}

To install {{ product_title }} on {{ ibm_z_name }} or {{ ibm_linuxone_name }}, your environment must meet minimum hardware, operating system, network, and storage requirements. {._abstract}

**Supported {{ ibm_name }} hardware**

|  | z/VM | LPAR | {{ op_system_base }} KVM |
| --- | --- | --- | --- |
| {{ ibm_name }} z17 (all models) | supported | supported | supported |
| {{ ibm_name }} z16 (all models) | supported | supported | supported |
| {{ ibm_name }} z15 (all models) | supported | supported | supported |
| {{ ibm_name }} z14 (all models) | supported | supported | supported |
| {{ ibm_linuxone_name }} 4 (all models) | supported | supported | supported |
| {{ ibm_linuxone_name }} 5 (all models) | supported | supported | supported |
| {{ ibm_linuxone_name }} III (all models) | supported | supported | supported |
| {{ ibm_linuxone_name }} Emperor II | supported | supported | supported |
| {{ ibm_linuxone_name }} Rockhopper II | supported | supported | supported |

When running {{ product_title }} on {{ ibm_z_name }} in an LPAR without a hypervisor, use the Dynamic Partition Manager (DPM) to manage your machine.

The {{ op_system_base }} KVM host in your environment must meet certain requirements to host the virtual machines that you plan for the {{ product_title }} environment. See [Enabling virtualization on {{ ibm_z_name }}](https://docs.redhat.com/en/documentation/red_hat_enterprise_linux/9/html/configuring_and_managing_virtualization/assembly_enabling-virtualization-in-rhel-9_configuring-and-managing-virtualization#enabling-virtualization-on-ibm-z_assembly_enabling-virtualization-in-rhel-9).


:::note

For detailed system requirements, see [Linux on {{ ibm_z_name }}/{{ ibm_linuxone_name }} tested platforms](https://www.ibm.com/support/pages/linux-ibm-zibm-linuxone-tested-platforms) (IBM Support).

:::


## Hardware requirements {id="ibm-z-hardware-requirements_{{ context }}"}

*   The equivalent of six Integrated Facilities for Linux (IFL), which are SMT2 enabled, for each cluster.
*   At least one network connection to both connect to the `LoadBalancer` service and to serve data for traffic outside the cluster.


:::important

*   You can use dedicated or shared IFLs to assign sufficient compute resources. Resource sharing is one of the key strengths of {{ ibm_z_name }}. However, you must adjust the capacity correctly on each hypervisor layer and ensure that there are sufficient resources for every {{ product_title }} cluster.
*   Since the overall performance of the cluster can be impacted, the LPARs that are used to set up the {{ product_title }} clusters must provide sufficient compute capacity. In this context, LPAR weight management, entitlements, and CPU shares on the hypervisor level play an important role. For more information, see "Recommended host practices for {{ ibm_z_title }} & {{ ibm_linuxone_title }} environments".

:::


## {{ ibm_z_title }} operating system requirements {id="ibm-z-operating-system-requirements_{{ context }}"}

**Operating system requirements**

|  | z/VM | LPAR | {{ op_system_base }} KVM |
| --- | --- | --- | --- |
| Hypervisor | One instance of z/VM 7.2 or later | {{ ibm_name }} z14 or later with DPM or PR/SM | One LPAR running on {{ op_system_base }} 8.6 or later with KVM, which is managed by libvirt |
| {{ product_title }} control plane machines | Three guest virtual machines | Three LPARs | Three guest virtual machines |
| {{ product_title }} compute machines | Two guest virtual machines | Two LPARs | Two guest virtual machines |
| Temporary {{ product_title }} bootstrap machine | One machine | One machine | One machine |

## {{ ibm_z_title }} network connectivity {id="ibm-z-network-connectivity_{{ context }}"}

**Network connectivity requirements**

|  | z/VM | LPAR | {{ op_system_base }} KVM |
| --- | --- | --- | --- |
| Network Interface Card (NIC) | One single z/VM virtual NIC in layer 2 mode | - | - |
| Virtual switch (vSwitch) | z/VM VSWITCH in layer 2 Ethernet mode | - | - |
| Network adapter | Direct-attached OSA, RoCE, or HiperSockets | Direct-attached OSA, RoCE, or HiperSockets | A {{ op_system_base }} KVM host configured with OSA, RoCE, or HiperSockets Either a {{ op_system_base }} KVM host that is configured to use bridged networking in libvirt or MacVTap to connect the network to the guests. See [Types of virtual network connections](https://access.redhat.com/documentation/en-us/red_hat_enterprise_linux/8/html-single/configuring_and_managing_virtualization/index#types-of-virtual-machine-network-connections_configuring-virtual-machine-network-connections). |

## Disk storage {id="ibm-z-disk-storage_{{ context }}"}

**Disk storage requirements**

|  | z/VM | LPAR | {{ op_system_base }} KVM |
| --- | --- | --- | --- |
| Fibre Connection (FICON) | z/VM minidisks, fullpack minidisks, or dedicated DASDs, all of which must be formatted as CDL, which is the default. To reach the minimum required DASD size for {{ op_system_first }} installations, you need extended address volumes (EAV). If available, use HyperPAV to ensure optimal performance. | Dedicated DASDs that must be formatted as CDL, which is the default. To reach the minimum required DASD size for {{ op_system_first }} installations, you need extended address volumes (EAV). If available, use HyperPAV to ensure optimal performance. | Virtual block device |
| Fibre Channel Protocol (FCP) | Dedicated FCP or EDEV | Dedicated FCP or EDEV | Virtual block device |
| QCOW | Not supported | Not supported | Supported |
| NVMe | Not supported | Supported | Virtual block device |