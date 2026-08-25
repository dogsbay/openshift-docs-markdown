---
title: Disabling the Cluster API
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
# Disabling the Cluster API {id="cluster-api-disabling"}
{% include "./_attributes/common-attributes.md" %}
{%- set context = "cluster-api-disabling" %}

To stop using the Cluster API to automate the management of infrastructure resources on your {{ product_title }} cluster, convert any Cluster API resources on your cluster to equivalent Machine API resources.

{%- set FeatureName = "Managing machines with the Cluster API" %}
{% include "./snippets/technology-preview.md" %}

{% leveloffset +1 %}{% include "./modules/capi-to-mapi-migration-overview.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/migrating-between-capi-mapi.md" %}{% endleveloffset %}

**Additional resources**

*   [Unexpected behavior when changing resource configurations](/machine_management/cluster_api_machine_management/cluster-api-troubleshooting#ts-capi-migrate-unexpected-behavior_cluster-api-troubleshooting)

{% leveloffset +2 %}{% include "./modules/machine-set-authoritative-api-machines.md" %}{% endleveloffset %}

**Additional resources**

*   [Troubleshooting resource migration](/machine_management/cluster_api_machine_management/cluster-api-troubleshooting#ts-capi-resource-migration_cluster-api-troubleshooting)
*   [Machine API to Cluster API resource migration](/machine_management/cluster_api_machine_management/cluster-api-getting-started#mapi-to-capi-migration-overview_cluster-api-getting-started)