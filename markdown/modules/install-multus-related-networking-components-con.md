{%- set _mod_docs_content_type = "CONCEPT" %}
# Install Multus-related networking components {id="install-multus-related-networking-components-con_{{ context }}"}

{{ product_title }} includes the Multus CNI meta-plug-in by default, enabling pods to connect to multiple networks simultaneously. Use `NetworkAttachmentDefinition` (NAD) resources to define the secondary networks and CNI plug-in configurations that Multus attaches to your pods.