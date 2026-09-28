{%- set _mod_docs_content_type = "CONCEPT" %}
# Create a primary network with a network attachment definition {id="create-a-primary-network-with-a-network-attachment-definition-con_{{ context }}"}

Use a `NetworkAttachmentDefinition` (NAD) to create a primary network when you need a CNI plugin other than OVN-Kubernetes, such as IPVLAN or MACVLAN, or when you require direct control over the CNI configuration. You can create the attachment through the Cluster Network Operator or by applying a YAML manifest.