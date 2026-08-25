---
title: Migration from OpenShift Container Platform 3 to 4 overview
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Migration from OpenShift Container Platform 3 to 4 overview {id="migration-from-version-3-to-4-overview"}
{%- set context = "migration-from-version-3-to-4-overview" %}

{{ product_title }} 4 clusters are different from {{ product_title }} 3 clusters. {{ product_title }} 4 clusters contain new technologies and functionality that result in a cluster that is self-managing, flexible, and automated. To learn more about migrating from {{ product_title }} 3 to 4 see [About migrating from OpenShift Container Platform 3 to 4](/migrating_from_ocp_3_to_4/about-migrating-from-3-to-4#about-migrating-from-3-to-4).

## Differences between {{ product_title }} 3 and 4 {id="mtc-3-to-4-overview-differences-mtc"}
Before migrating from {{ product_title }} 3 to 4, you can check [differences between {{ product_title }} 3 and 4](/migrating_from_ocp_3_to_4/planning-migration-3-4#planning-migration-3-4). Review the following information:

*   [Architecture](/architecture/architecture#architecture)
*   [Installation and update](/architecture/architecture-installation#architecture-installation)
*   [Storage](/storage/index#index), [network](/networking/networking_overview/understanding-networking#understanding-networking), [security](/security/index#index), and [monitoring considerations](/observability/monitoring/about-ocp-monitoring#about-ocp-monitoring)

## Planning network considerations {id="mtc-3-to-4-overview-planning-network-considerations-mtc"}
Before migrating from {{ product_title }} 3 to 4, review the [differences between {{ product_title }} 3 and 4](/migrating_from_ocp_3_to_4/planning-migration-3-4#planning-migration-3-4) for information about the following areas:

*   [DNS considerations](/migrating_from_ocp_3_to_4/planning-considerations-3-4#dns-considerations_planning-considerations-3-4)
    *   [Isolating the DNS domain of the target cluster from the clients](/migrating_from_ocp_3_to_4/planning-considerations-3-4#migration-isolating-dns-domain-of-target-cluster-from-clients_planning-considerations-3-4).
    *   [Setting up the target cluster to accept the source DNS domain](/migrating_from_ocp_3_to_4/planning-considerations-3-4#migration-setting-up-target-cluster-to-accept-source-dns-domain_planning-considerations-3-4).