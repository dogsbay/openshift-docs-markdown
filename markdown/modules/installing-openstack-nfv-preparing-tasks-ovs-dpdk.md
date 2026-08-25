{%- set _mod_docs_content_type = "PROCEDURE" %}
# Preparing to install a cluster that uses OVS-DPDK {id="installing-openstack-nfv-preparing-tasks-ovs-dpdk_{{ context }}"}

You must configure your {{ rh_openstack }} platform before you install a cluster that uses OVS-DPDK on it. {._abstract}

After you perform preinstallation tasks, install your cluster by following the most relevant {{ product_title }} on {{ rh_openstack }} installation instructions. You can then perform the tasks outlined in the additional resources section.

**Procedure**

*   Depending on your platform, complete one of the following tasks:
    *   If you use {{ rh_openstack_first }}, create a flavor and deploy an instance for OVS-DPDK before you install a cluster on {{ rh_openstack }}.
    *   If you use {{ rhoso_first }}, create a custom OVS-DPDK compute service before you install a cluster on {{ rhoso }}.