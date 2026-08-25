{%- set _mod_docs_content_type = "REFERENCE" %}
# Requirements for clusters on {{ rh_openstack }} or {{ rhoso }} that use OVS-DPDK {id="installation-openstack-ovs-dpdk-requirements_{{ context }}"}

To use Open vSwitch with the Data Plane Development Kit (OVS-DPDK) with your deployment, you must meet specific requirements. {._abstract}

The requirements are as follows:

*   If you use {{ rh_openstack_first }}:
    *   Plan your OVS-DPDK deployment. For more information, see "Planning your OVS-DPDK deployment ({{ rh_openstack_first }} documentation)".
    *   Configure your OVS-DPDK deployment. For more information, see "Configuring an OVS-DPDK deployment ({{ rh_openstack_first }} documentation)".
*   If you use {{ rhoso_first }}:
    *   Plan your OVS-DPDK deployment. For more information, see "Planning an OVS-DPDK deployment ({{ rhoso_first }} documentation)".
    *   Configure your OVS-DPDK deployment. For more information, see"Creating the data plane for SR-IOV and DPDK environments ({{ rhoso_first }} documentation)".