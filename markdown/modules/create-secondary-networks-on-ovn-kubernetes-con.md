{%- set _mod_docs_content_type = "CONCEPT" %}
# Create secondary networks on OVN-Kubernetes {id="create-secondary-networks-on-ovn-kubernetes-con_{{ context }}"}

As a cluster administrator, you can configure secondary networks for your cluster by using the `NetworkAttachmentDefinition` (NAD) resource with the OVN-Kubernetes CNI plug-in. OVN-Kubernetes supports layer 2, layer 3, and localnet topologies for secondary network segments.