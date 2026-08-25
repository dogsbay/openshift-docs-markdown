{%- set _mod_docs_content_type = "CONCEPT" %}
# {{ microshift_short }} default networking plugin {id="microshift-default-networking-plugin_{{ context }}"}

The OVN-Kubernetes Container Network Interface (CNI) plugin is the default networking solution for a {{ microshift_short }} node. OVN-Kubernetes is a virtualized network for pods and services that is based on Open Virtual Network (OVN). {._abstract}

*   Changing the CNI is not supported on {{ microshift_short }}.
*   Default network configuration and connections are applied automatically in {{ microshift_short }} with the `microshift-networking` RPM during installation.
*   A node that uses the OVN-Kubernetes network plugin also runs Open vSwitch (OVS) on the node.
*   OVN-K configures OVS on the node to implement the declared network configuration.
*   Host physical interfaces are not bound by default to the OVN-K gateway bridge, `br-ex`. You can use standard tools on the host for managing the default gateway, such as the Network Manager CLI (`nmcli`).

Using configuration files or custom scripts, you can configure the following networking settings:

*   You can use subnet CIDR ranges to allocate IP addresses to pods.
*   You can change the maximum transmission unit (MTU) value.
*   You can configure firewall ingress and egress.
*   You can define network policies in the {{ microshift_short }}, including ingress and egress rules.
*   You can use the {{ microshift_short }} Multus plugin to chain other CNI plugins.
*   You can configure or remove the ingress router.