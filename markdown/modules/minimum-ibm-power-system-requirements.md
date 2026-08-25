{%- set _mod_docs_content_type = "CONCEPT" %}
# Minimum {{ ibm_power_title }} requirements {id="minimum-ibm-power-system-requirements_{{ context }}"}

Before you install {{ product_title }} on {{ ibm_power_name }}, verify that your hardware meets the minimum system requirements for processor, disk storage, network, and memory. {._abstract}

*   {{ ibm_power_name }}9, {{ ibm_power_name }}10 or {{ ibm_power_name }}11 processor-based systems

## Hardware requirements {id="_hardware_requirements"}

*   Six logical partitions (LPARs) across multiple PowerVM servers

## Operating system requirements {id="_operating_system_requirements"}

*   One instance of an {{ ibm_power_name }}9, Power10 or Power11 processor-based system

On your {{ ibm_power_name }} instance, set up:

*   Three LPARs for {{ product_title }} control plane machines
*   Two LPARs for {{ product_title }} compute machines
*   One LPAR for the temporary {{ product_title }} bootstrap machine

## Disk storage for the {{ ibm_power_title }} guest virtual machines {id="_disk_storage_for_the_ibm_power_title_guest_virtual_machines"}

*   Local storage, or storage provisioned by the Virtual I/O Server using vSCSI, NPIV (N-Port ID Virtualization), Fibre Channel, multipath, or SSP (shared storage pools)

## Network for the PowerVM guest virtual machines {id="_network_for_the_powervm_guest_virtual_machines"}

*   Dedicated physical adapter, or SR-IOV virtual function
*   Available by the Virtual I/O Server using Shared Ethernet Adapter
*   Virtualized by the Virtual I/O Server using {{ ibm_name }} virtual NIC (vNIC)

## Storage / main memory {id="_storage_main_memory"}

*   500 GB / 16 GB for {{ product_title }} control plane machines
*   500 GB / 8 GB for {{ product_title }} compute machines
*   500 GB / 16 GB for the temporary {{ product_title }} bootstrap machine