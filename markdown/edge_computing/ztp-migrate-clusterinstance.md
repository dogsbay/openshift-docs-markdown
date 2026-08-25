---
title: Migrating from SiteConfig CRs to ClusterInstance CRs
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Migrating from SiteConfig CRs to ClusterInstance CRs {id="ztp-migrate-clusterinstance"}
{%- set context = "ztp-migrate-clusterinstance" %}

You can incrementally migrate {{ sno }} clusters from `SiteConfig` custom resources (CRs) to `ClusterInstance` CRs. During migration, the existing and new pipelines run in parallel, so you can migrate one or more clusters at a time in a controlled and phased manner.


:::important

*   The `SiteConfig` CR is deprecated from {{ product_title }} version 4.18 and removed from {{ product_title }} 4.21.
*   The `ClusterInstance` CR is available from {{ rh_rhacm_first }} version 2.12 or later.

:::


{% leveloffset +1 %}{% include "./modules/ztp-migrate-clusterinstance-overview.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/ztp-creating-argocd-clusterinstance.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/ztp-active-ocp-version.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/ztp-migrating-sno-clusterinstance.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Enabling the SiteConfig operator](https://docs.redhat.com/en/documentation/red_hat_advanced_cluster_management_for_kubernetes/2.12/html/multicluster_engine_operator_with_red_hat_advanced_cluster_management/siteconfig-intro#enable)

{% leveloffset +2 %}{% include "./modules/ztp-site-converter-ref.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/ztp-clusterinstance-cleanup.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/ztp-clusterinstance-troubleshooting.md" %}{% endleveloffset %}