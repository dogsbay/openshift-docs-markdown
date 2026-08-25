{%- set _mod_docs_content_type = "CONCEPT" %}
# Recommended {{ ibm_power_title }} system requirements {id="recommended-ibm-power-system-requirements_{{ context }}"}

{{ product_title }} on {{ ibm_power_name }} requires a minimum of six LPARs across multiple PowerVM servers, with specific hardware, storage, and network configuration for each node type. {._abstract}

## Hardware requirements {id="_hardware_requirements"}

*   Six LPARs across multiple PowerVM servers

## Operating system requirements {id="_operating_system_requirements"}

*   One instance of an {{ ibm_power_name }}9, {{ ibm_power_name }}10 or {{ ibm_power_name }}11 processor-based system

On your {{ ibm_power_name }} instance, set up:

*   Three LPARs for {{ product_title }} control plane machines
*   Two LPARs for {{ product_title }} compute machines
*   One LPAR for the temporary {{ product_title }} bootstrap machine

## Disk storage for the {{ ibm_power_title }} guest virtual machines {id="_disk_storage_for_the_ibm_power_title_guest_virtual_machines"}

*   Local storage, or storage provisioned by the Virtual I/O Server using vSCSI, NPIV (N-Port ID Virtualization) or SSP (shared storage pools)

## Network for the PowerVM guest virtual machines {id="_network_for_the_powervm_guest_virtual_machines"}

*   Dedicated physical adapter, or SR-IOV virtual function
*   Virtualized by the Virtual I/O Server using Shared Ethernet Adapter
*   Virtualized by the Virtual I/O Server using {{ ibm_name }} virtual NIC (vNIC)

## Storage / main memory {id="_storage_main_memory"}

*   120 GB / 32 GB for {{ product_title }} control plane machines
*   120 GB / 32 GB for {{ product_title }} compute machines
*   120 GB / 16 GB for the temporary {{ product_title }} bootstrap machine