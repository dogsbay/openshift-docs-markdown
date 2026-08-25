{%- set _mod_docs_content_type = "CONCEPT" %}
# Private hosted clusters on {{ azure_short }} {id="hcp-azure-private_{{ context }}"}

By default, hosted clusters are accessible through public DNS and the default router of the management cluster. If you want communication between your compute nodes and the hosted control plane to be private, you can create hosted clusters that use {{ azure_short }} Private Link for communication. {._abstract}

Private endpoint access uses {{ azure_short }} Private Link to expose the internal load balancer of the hosted control plane to the {{ azure_short }} Virtual Network (VNet) of the hosted cluster. Compute nodes resolve the API server hostname by using private DNS zones that point to the private endpoint IP address.