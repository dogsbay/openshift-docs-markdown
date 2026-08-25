---
title: Creating DNS records on Google Cloud Platform
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
# Creating DNS records on Google Cloud Platform {id="creating-dns-records-on-gcp"}
{% include "./_attributes/common-attributes.md" %}
{%- set context = "creating-dns-records-on-gcp" %}

To create DNS records on {{ gcp_first }}, use the External DNS Operator. The DNS Operator manages external name resolution for your cluster services.


:::important

Using the External DNS Operator on a cluster with {{ gcp_short }} Workload Identity enabled is not supported. For more information about the {{ gcp_short }} Workload Identity, see [{{ gcp_short }} Workload Identity](/authentication/managing_cloud_provider_credentials/cco-short-term-creds#cco-short-term-creds-gcp_cco-short-term-creds).

:::


{% leveloffset +1 %}{% include "./modules/nw-control-dns-records-public-managed-zone-gcp.md" %}{% endleveloffset %}