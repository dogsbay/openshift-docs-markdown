{%- set _mod_docs_content_type = "REFERENCE" %}
# Requirements for clusters on {{ rh_openstack }} or {{ rhoso }} that use either SR-IOV or OVS-DPDK {id="installation-openstack-nfv-requirements_{{ context }}"}

If you use SR-IOV or OVS-DPDK with your deployment, you must meet certain requirements. {._abstract}

Ensure that {{ rh_openstack }} compute nodes use a flavor that supports huge pages.