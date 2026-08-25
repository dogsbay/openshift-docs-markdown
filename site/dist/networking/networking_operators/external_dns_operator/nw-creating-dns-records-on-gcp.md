---
title: Creating DNS records on Google Cloud Platform
---

# Creating DNS records on Google Cloud Platform {#creating-dns-records-on-gcp}

To create DNS records on {{ gcp_first }}, use the External DNS Operator. The DNS Operator manages external name resolution for your cluster services.

> [!IMPORTANT]
> Using the External DNS Operator on a cluster with {{ gcp_short }} Workload Identity enabled is not supported. For more information about the {{ gcp_short }} Workload Identity, see [{{ gcp_short }} Workload Identity](/authentication/managing_cloud_provider_credentials/cco-short-term-creds#cco-short-term-creds-gcp_cco-short-term-creds).
