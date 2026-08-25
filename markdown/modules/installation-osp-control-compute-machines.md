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
# Control plane machines {id="installation-osp-control-compute-machines_{{ context }}"}

By default, the {{ product_title }} installation process creates three control plane machines. {._abstract}

Each machine requires:

*   An instance from the {{ rh_openstack }} quota
*   A port from the {{ rh_openstack }} quota
*   A flavor with at least 16 GB memory and 4 vCPUs
*   At least 100 GB storage space from the {{ rh_openstack }} quota

{% if context == "installing-openstack-user-sr-iov" %}
{%- set osp_sr_iov = false -%}
{% endif %}
{% if context == "installing-openstack-installer-sr-iov" %}
{%- set osp_sr_iov = false -%}
{% endif %}
{% if context == "installing-openstack-installer-ovs-dpdk" %}
{%- set osp_sr_iov = false -%}
{% endif %}