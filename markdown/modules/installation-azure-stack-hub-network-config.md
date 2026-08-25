{%- set _mod_docs_content_type = "CONCEPT" %}
# Configuring a DNS zone in Azure Stack Hub {id="installation-azure-stack-hub-network-config_{{ context }}"}

To successfully install {{ product_title }} on Azure Stack Hub, you must create DNS records in an Azure Stack Hub DNS zone. The DNS zone must be authoritative for the domain. To delegate a registrar’s DNS zone to Azure Stack Hub, see "Azure Stack Hub datacenter DNS integration".