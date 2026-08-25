{%- if context == "installing-openstack-installer-custom" %}
{%- set osp_custom = true -%}
{% endif %}
{% if context == "installing-openstack-user" %}
{%- set osp_user = true -%}
{% endif %}
{% if context == "installing-openstack-user-sr-iov" %}
{%- set osp_user = true -%}
{% endif %}

{%- set _mod_docs_content_type = "PROCEDURE" %}
# Verifying external network access {id="installation-osp-verifying-external-network_{{ context }}"}

The {{ product_title }} installation process requires external network access. You must provide an external network value to it, or deployment fails. Before you begin the process, verify that a network with the external router type exists in {{ rh_openstack_first }}. {._abstract}

**Prerequisites**

*   [Configure OpenStack’s networking service to have DHCP agents forward instances' DNS queries](https://docs.openstack.org/neutron/rocky/admin/config-dns-res.html#case-2-dhcp-agents-forward-dns-queries-from-instances)

**Procedure**

*   Using the {{ rh_openstack }} CLI, verify the name and ID of the 'External' network:
    ```terminal
    $ openstack network list --long -c ID -c Name -c "Router Type"
    ```
    ```terminal title="Example output"
    +--------------------------------------+----------------+-------------+
    | ID                                   | Name           | Router Type |
    +--------------------------------------+----------------+-------------+
    | 148a8023-62a7-4672-b018-003462f8d7dc | public_network | External    |
    +--------------------------------------+----------------+-------------+
    ```

    A network with an external router type appears in the network list. If at least one does not, see [Creating a default floating IP network](https://access.redhat.com/documentation/en-us/red_hat_openstack_platform/16.0/html/director_installation_and_usage/performing-overcloud-post-installation-tasks#creating-a-default-floating-ip-network) and [Creating a default provider network](https://access.redhat.com/documentation/en-us/red_hat_openstack_platform/16.0/html/director_installation_and_usage/performing-overcloud-post-installation-tasks#creating-a-default-provider-network).
{%- if osp_custom %}

    :::important

    If the external network’s CIDR range overlaps one of the default network ranges, you must change the matching network ranges in the `install-config.yaml` file before you start the installation process.

    The default network ranges are:
    | Network | Range |
    | --- | --- |
    | `machineNetwork` | 10.0.0.0/16 |
    | `serviceNetwork` | 172.30.0.0/16 |
    | `clusterNetwork` | 10.128.0.0/14 |
    
    :::

{% endif %}
{% if osp_custom %}

    :::warning

   \
    If the installation program finds multiple networks with the same name, it sets one of them at random. To avoid this behavior, create unique names for resources in {{ rh_openstack }}.
{%- endif %}
    +
    
    :::


    If the Neutron trunk service plugin is enabled, a trunk port is created by default. For more information, see [Neutron trunk port](https://wiki.openstack.org/wiki/Neutron/TrunkPort).

{% if context == "installing-openstack-installer-custom" %}
{%- set osp_custom = false -%}
{% endif %}
{% if context == "installing-openstack-user" %}
{%- set osp_user = false -%}
{% endif %}
{% if context == "installing-openstack-user-sr-iov" %}
{%- set osp_user = false -%}
{% endif %}