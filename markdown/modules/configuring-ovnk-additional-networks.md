{%- set _mod_docs_content_type = "CONCEPT" %}
# Configuration for an OVN-Kubernetes secondary network {id="configuration-ovnk-additional-networks_{{ context }}"}

The {{ openshift_networking }} OVN-Kubernetes network plugin allows the configuration of secondary network interfaces for pods. To configure secondary network interfaces, you must define the configurations in the `NetworkAttachmentDefinition` custom resource definition (CRD). {._abstract}


:::note

Pod and multi-network policy creation might remain in a pending state until the OVN-Kubernetes control plane agent in the nodes processes the associated `network-attachment-definition` CRD.

:::


You can configure an OVN-Kubernetes secondary network in layer 2, layer 3, or localnet topologies. For more information about features supported on these topologies, see "UserDefinedNetwork and NetworkAttachmentDefinition support matrix". 

The following sections provide example configurations for each of the topologies that OVN-Kubernetes currently allows for secondary networks.


:::note

Networks names must be unique. For example, creating multiple `NetworkAttachmentDefinition` CRDs with different configurations that reference the same network is unsupported.

:::


## Supported platforms for OVN-Kubernetes secondary network {id="configuration-additional-network-types-supported-platforms_{{ context }}"}

You can use an OVN-Kubernetes secondary network with the following supported platforms:

*   Bare metal
*   {{ ibm_power_name }}
*   {{ ibm_z_name }}
*   {{ ibm_linuxone_name }}
*   VMware vSphere
*   {{ rh_openstack_first }}