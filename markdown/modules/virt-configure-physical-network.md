{%- set _mod_docs_content_type = "CONCEPT" %}
# VM physical network configuration in the web console {id="virt-configure-physical-network_{{ context }}"}

Virtual machines that need direct layer 2 access to your data center connect through a physical network on your cluster nodes. Build that network on an uplink or bonded interface, expand it to more nodes later, and create a VM network from it with optional VLAN tagging and project access.