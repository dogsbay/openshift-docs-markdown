{%- set _mod_docs_content_type = "CONCEPT" %}
# Configure a private storage endpoint with a user-provided VNet {id="configure-private-storage-endpoint-with-user-provided-vnet-con_{{ context }}"}

If you manage your own {{ azure_short }} networking, specify the virtual network, subnet, and resource group names in the Image Registry Operator configuration. The Operator then creates the private endpoint exactly where you want it.