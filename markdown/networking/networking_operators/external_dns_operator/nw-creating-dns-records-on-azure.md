---
title: Creating DNS records on Azure
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
# Creating DNS records on Azure {id="creating-dns-records-on-azure"}
{% include "./_attributes/common-attributes.md" %}
{%- set context = "creating-dns-records-on-azure" %}

To create DNS records on {{ azure_first }}, use the External DNS Operator. By using this Operator, you can manage external name resolution for your cluster services.


:::important

Using the External DNS Operator on a {{ entra_first }}-enabled cluster or a cluster that runs in {{ azure_full }} Government (MAG) regions is not supported.

:::


{% leveloffset +1 %}{% include "./modules/nw-control-dns-records-public-hosted-zone-azure.md" %}{% endleveloffset %}