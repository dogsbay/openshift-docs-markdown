{%- set _mod_docs_content_type = "REFERENCE" %}
# Requirements for clusters on {{ rh_openstack }} or {{ rhoso }} that use SR-IOV {id="installation-openstack-sr-iov-requirements_{{ context }}"}

To use single-root I/O virtualization (SR-IOV) with your deployment, you must meet specific requirements. {._abstract}

The requirements are as follows:

*   If you use {{ rh_openstack_first }}, see "Planning an SR-IOV deployment ({{ rh_openstack_first }} documentation)".
*   If you use {{ rhoso_first }}, see "Planning an SR-IOV deployment ({{ rhoso_first }} documentation)".
*   {{ product_title }} must support the NICs that you use. For a list of supported NICs, see "About Single Root I/O Virtualization (SR-IOV) hardware networks".
*   For each node that will have an attached SR-IOV NIC, your {{ rh_openstack }} cluster must have:
    *   One instance from the quota.
    *   One port attached to the machines subnet.
    *   One port for each SR-IOV Virtual Function.
    *   A flavor with at least 16 GB memory, 4 vCPUs, and 25 GB storage space.
*   SR-IOV deployments often employ performance optimizations, such as dedicated or isolated CPUs. For maximum performance, configure your underlying {{ rh_openstack }} deployment to use these optimizations, and then run {{ product_title }} compute machines on the optimized infrastructure.
    *   If you use {{ rh_openstack }}, see "Configuring CPUs on Compute nodes ({{ rh_openstack_first }} documentation)".
    *   If you use {{ rhoso }}, see "NFV performance considerations ({{ rhoso_first }} documentation)".