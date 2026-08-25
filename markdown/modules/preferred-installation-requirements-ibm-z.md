{%- set _mod_docs_content_type = "REFERENCE" %}
# Preferred {{ ibm_z_title }} system environment {id="preferred-ibm-z-system-requirements_{{ context }}"}

While {{ product_title }} runs on the minimum {{ ibm_z_name }} hardware requirements, using the preferred system environment improves performance and supports production workloads. {._abstract}

## Hardware requirements {id="preferred-ibm-z-hardware-requirements_{{ context }}"}

*   Three logical partitions (LPARs) that each have the equivalent of six Integrated Facilities for Linux (IFLs), which are SMT2 enabled, for each cluster.
*   Two network connections to both connect to the `LoadBalancer` service and to serve data for traffic outside the cluster.
*   HiperSockets that are attached to a node directly as a device. To directly connect HiperSockets to a node, you must set up a gateway to the external network via a {{ op_system_base }} 8 guest to bridge to the HiperSockets network.

    :::note

    When installing in a z/VM environment, you can also bridge HiperSockets with one z/VM VSWITCH to be transparent to the z/VM guest.
    
    :::


## {{ ibm_z_title }} operating system requirements {id="preferred-ibm-z-operating-system-requirements_{{ context }}"}

**Operating system requirements**

|  | z/VM | LPAR | {{ op_system_base }} KVM |
| --- | --- | --- | --- |
| Hypervisor | One instance of z/VM 7.2 or later | {{ ibm_name }} z14 or later with DPM or PR/S | One LPAR running on {{ op_system_base }} 8.6 or later with KVM, which is managed by libvirt |
| {{ product_title }} control plane machines | Three guest virtual machines | Three LPARs | Three guest virtual machines |
| {{ product_title }} compute machines | Six guest virtual machines | Six LPARs | Six guest virtual machines |
| Temporary {{ product_title }} bootstrap machine | One machine | One machine | One machine |


:::note

When working in a z/VM environment, to ensure the availability of integral components in an overcommitted environment, increase the priority of the control plane by using the CP command `SET SHARE`. Do the same for infrastructure nodes, if they exist. See [SET SHARE](https://www.ibm.com/docs/en/zvm/latest?topic=commands-set-share) ({{ ibm_name }} Documentation).

:::