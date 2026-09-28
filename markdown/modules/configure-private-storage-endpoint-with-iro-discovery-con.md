{%- set _mod_docs_content_type = "CONCEPT" %}
# Configure a private storage endpoint by using Image Registry Operator discovery {id="configure-private-storage-endpoint-with-iro-discovery-con_{{ context }}"}

On {{ azure_short }} installer-provisioned infrastructure, the Image Registry Operator can discover the virtual network and subnet names for you and create a private endpoint to the registry storage account. Use this option to keep registry storage traffic off the public network with the least configuration.