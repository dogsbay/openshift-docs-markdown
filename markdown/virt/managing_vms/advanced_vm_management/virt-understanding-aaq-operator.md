---
title: Configuring the Application-Aware Quota (AAQ) Operator
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
# Configuring the Application-Aware Quota (AAQ) Operator {id="virt-understanding-aaq-operator"}
{% include "./_attributes/common-attributes.md" %}
{%- set context = "virt-understanding-aaq-operator" %}

You can use the Application-Aware Quota (AAQ) Operator to customize and manage resource quotas for individual components in an {{ product_title }} cluster.

{% leveloffset +1 %}{% include "./modules/virt-about-aaq-operator.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/virt-enabling-aaq-operator.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/virt-configuring-aaq-operator.md" %}{% endleveloffset %}

## Additional resources {id="additional-resources_{{ context }}"}

*   [Resource quotas per project](/applications/quotas/quotas-setting-per-project#quotas-setting-per-project)
*   [Resource quotas across multiple projects](/applications/quotas/quotas-setting-across-multiple-projects#quotas-setting-across-multiple-projects)
*   [`ResourceQuota` API reference](/rest_api/schedule_and_quota_apis/resourcequota-v1#resourcequota-v1)
*   [`ClusterResourceQuota` API reference](/rest_api/schedule_and_quota_apis/clusterresourcequota-quota-openshift-io-v1#clusterresourcequota-quota-openshift-io-v1)
*   [Pod scheduling gates specification](/rest_api/workloads_apis/pod-v1#spec-schedulinggates)
*   [Viewing system event information in an {{ product_title }} cluster](/nodes/clusters/nodes-containers-events#nodes-containers-events)