{% if context == "installing-openstack-installer-custom" %}
{%- set osp_ipi = true -%}
{% endif %}
{% if context == "installing-openstack-user" %}
{%- set osp_upi = true -%}
{% endif %}
{% if context == "installing-openstack-user-sr-iov" %}
{%- set osp_upi = true -%}
{% endif %}
{% if context == "installing-openstack-installer-restricted" %}
{%- set osp_ipi = true -%}
{%- set osp_restricted = true -%}
{% endif %}

{%- set _mod_docs_content_type = "PROCEDURE" %}
# Completing installation without floating IP addresses {id="installation-osp-accessing-api-no-floating_{{ context }}"}

You can install {{ product_title }} on {{ rh_openstack_first }} without providing floating IP addresses. {._abstract}

**Procedure**

1.  In the
{%- if osp_ipi %}
`install-config.yaml`
{%- endif %}
{%- if osp_upi %}
`inventory.yaml`
{%- endif %}
file, do not define the following
{%- if osp_ipi %}
parameters:
{%- endif %}
{%- if osp_upi %}
variables:
{%- endif %}

{% if osp_ipi %}
    *   `platform.openstack.ingressFloatingIP`
    *   `platform.openstack.apiFloatingIP`
1.  If you cannot provide an external network, you can also leave `platform.openstack.externalNetwork` blank. If you do not provide a value for `platform.openstack.externalNetwork`, a router is not created for you, and, without additional action, the installer will fail to retrieve an image from Glance. You must configure external connectivity on your own.
{% endif %}

{% if osp_upi %}
    *   `os_api_fip`
    *   `os_bootstrap_fip`
    *   `os_ingress_fip`
1.  If you cannot provide an external network, you can also leave `os_external_network` blank. If you do not provide a value for `os_external_network`, a router is not created for you, and, without additional action, the installer will fail to retrieve an image from Glance. Later in the installation process, when you create network resources, you must configure external connectivity on your own.
{% endif %}
1.  If you run the installer
{%- if osp_upi %}
with the `wait-for` command
{%- endif %}
from a system that cannot reach the cluster API due to a lack of floating IP addresses or name resolution, installation fails. To prevent installation failure in these cases, you can use a proxy network or run the installer from a system that is on the same network as your machines.

    :::note

    You can enable name resolution by creating DNS records for the API and Ingress ports. For example:

    ```dns
    api.<cluster_name>.<base_domain>.  IN  A  <api_port_IP>
    *.apps.<cluster_name>.<base_domain>. IN  A <ingress_port_IP>
    ```

    If you do not control the DNS server, you can add the record to your `/etc/hosts` file. This action makes the API accessible to only you, which is not suitable for production deployment but does allow installation for development and testing.
    
    :::


{% if context == "installing-openstack-installer-custom" %}
{%- set osp_ipi = "" -%}
{% endif %}
{% if context == "installing-openstack-user" %}
{%- set osp_upi = "" -%}
{% endif %}
{% if context == "installing-openstack-user-sr-iov" %}
{%- set osp_upi = "" -%}
{% endif %}
{% if context == "installing-openstack-installer-restricted" %}
{%- set osp_ipi = "" -%}
{%- set osp_restricted = "" -%}
{% endif %}