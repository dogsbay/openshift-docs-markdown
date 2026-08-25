{% if context == "installing-openstack-user-sr-iov" %}
{%- set osp_sr_iov = true -%}
{% endif %}
{% if context == "installing-openstack-installer-sr-iov" %}
{%- set osp_sr_iov = true -%}
{% endif %}
{% if context == "installing-openstack-installer-ovs-dpdk" %}
{%- set osp_sr_iov = true -%}
{% endif %}

{%- set _mod_docs_content_type = "CONCEPT" %}
# Compute machines {id="installation-osp-compute-machines_{{ context }}"}

By default, the {{ product_title }} installation process creates three compute machines. {._abstract}

Each machine requires:

*   An instance from the {{ rh_openstack }} quota
*   A port from the {{ rh_openstack }} quota
*   A flavor with at least 8 GB memory and 2 vCPUs
*   At least 100 GB storage space from the {{ rh_openstack }} quota


:::tip

Compute machines host the applications that you run on {{ product_title }}; aim to run as many as you can.

:::


{% if osp_sr_iov %}
Additionally, for clusters that use single-root input/output virtualization (SR-IOV), {{ rh_openstack }} compute nodes require a flavor that supports huge pages.


:::important

SR-IOV deployments often employ performance optimizations, such as dedicated or isolated CPUs. For maximum performance, configure your underlying {{ rh_openstack }} deployment to use these optimizations, and then run {{ product_title }} compute machines on the optimized infrastructure.

:::


*   For more information about configuring performant {{ rh_openstack }} compute nodes, see "Configuring Compute nodes for performance".
{% endif %}

{% if context == "installing-openstack-user-sr-iov" %}
{%- set osp_sr_iov = false -%}
{% endif %}
{% if context == "installing-openstack-installer-sr-iov" %}
{%- set osp_sr_iov = false -%}
{% endif %}
{% if context == "installing-openstack-installer-ovs-dpdk" %}
{%- set osp_sr_iov = false -%}
{% endif %}