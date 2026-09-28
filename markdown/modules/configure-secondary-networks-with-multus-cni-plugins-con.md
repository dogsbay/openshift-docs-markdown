{%- set _mod_docs_content_type = "CONCEPT" %}
# Configure secondary networks with Multus CNI plugins {id="configure-secondary-networks-with-multus-cni-plugins-con_{{ context }}"}

Multus lets a pod attach to more than one network, with each secondary network defined by a `NetworkAttachmentDefinition` that names a CNI plugin and its configuration. Choosing the right plugin, such as bridge, bond, host device, VLAN, IPVLAN, MACVLAN, or TAP, determines the kind of interface the workload receives.