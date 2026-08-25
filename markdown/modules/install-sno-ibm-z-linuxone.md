{%- set _mod_docs_content_type = "CONCEPT" %}
# Installing {{ sno }} with {{ ibm_z_title }} and {{ ibm_linuxone_title }} {id="install-sno-with-ibm-z_{{ context }}"}

You can install a {{ sno }} cluster with {{ ibm_z_title }} and {{ ibm_linuxone_title }} by performing a user-provisioned installation. {._abstract}

Installing a single-node cluster on {{ ibm_z_name }} and {{ ibm_linuxone_name }} requires user-provisioned installation using one of the following procedures:

*   "Installing a cluster with z/VM on {{ ibm_z_name }} and {{ ibm_linuxone_name }}"
*   "Installing a cluster with {{ op_system_base }} KVM on {{ ibm_z_name }} and {{ ibm_linuxone_name }}"
*   "Installing a cluster in an LPAR on {{ ibm_z_name }} and {{ ibm_linuxone_name }}"


:::note

Installing a single-node cluster on {{ ibm_z_name }} simplifies installation for development and test environments and requires less resource requirements at entry level.

:::


You must meet the following hardware requirements when installing a single-node cluster on {{ ibm_z_name }} and {{ ibm_linuxone_name }}:

*   The equivalent of two Integrated Facilities for Linux (IFL), which are SMT2 enabled, for each cluster.
*   At least one network connection to both connect to the `LoadBalancer` service and to serve data for traffic outside the cluster.


:::note

You can use dedicated or shared IFLs to assign sufficient compute resources. Resource sharing is one of the key strengths of {{ ibm_z_name }}. However, you must adjust capacity correctly on each hypervisor layer and ensure sufficient resources for every {{ product_title }} cluster.

:::