---
title: Configuring fair sharing
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Configuring fair sharing {id="configuring-fairsharing"}
{%- set context = "configuring-fairsharing" %}

You can configure fair sharing as a preemption strategy to distribute borrowable resources equally or by weight between tenants of a cohort.

Borrowable resources are the unused nominal quota of all the cluster queues in a cohort.

You can configure fair sharing by setting the `preemptionPolicy` value in the `Kueue` custom resource (CR) to `FairSharing`.

{% leveloffset +1 %}{% include "./modules/kueue-clusterqueue-share-value.md" %}{% endleveloffset %}

## Additional resources {id="additional-resources_{{ context }}"}
*   [Creating a `Kueue` custom resource](/ai_workloads/kueue/install-kueue#create-kueue-cr_install-kueue)