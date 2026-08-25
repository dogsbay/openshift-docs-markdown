---
title: Using quotas and limit ranges
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Using quotas and limit ranges {id="compute-resource-quotas"}
{%- set context = "using-quotas-and-limit-ranges" %}

As a cluster administrator, you can use quotas and limit ranges to set constraints. These constraints limit the number of objects or the amount of compute resources that are used in your project. {._abstract}

By using quotes and limits, you can better manage and allocate resources across all projects. You can also ensure that no projects use more resources than is appropriate for the cluster size.

A resource quota, defined by a `ResourceQuota` object, provides constraints that limit aggregate resource consumption per project. The quota can limit the quantity of objects that can be created in a project by type. Additinally, the quota can limit the total amount of compute resources and storage that might be consumed by resources in that project.


:::important

Quotas are set by cluster administrators and are scoped to a given project. {{ product_title }} project owners can change quotas for their project, but not limit ranges. {{ product_title }} users cannot modify quotas or limit ranges.

:::


{% leveloffset +1 %}{% include "./modules/admin-quota-overview.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/setting-resource-quota-extended-resources.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/quota-scopes.md" %}{% endleveloffset %}

## Additional resources {id="additional-resources_{{ context }}" ._additional-resources}

*   [Resources managed by quotas](/applications/quotas/quotas-setting-per-project#quotas-setting-per-project_quotas-setting-per-project)
*   [Resource requests and overcommitment](/nodes/clusters/nodes-cluster-overcommit#nodes-cluster-overcommit-resource-requests_nodes-cluster-overcommit)

{% leveloffset +1 %}{% include "./modules/admin-quota-usage.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/sample-resource-quota-definitions.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/creating-a-quota.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/creating-object-count-quotas.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/viewing-a-quota.md" %}{% endleveloffset %}

{% if openshift_origin or openshift_enterprise %}
{% leveloffset +2 %}{% include "./modules/configuring-quota-synchronization-period.md" %}{% endleveloffset %}
{% endif %}

{% if openshift_origin or openshift_enterprise or openshift_dedicated %}
{% leveloffset +2 %}{% include "./modules/setting-quota-to-consume-resource.md" %}{% endleveloffset %}
{% endif %}

## Additional resources {id="_additional_resources" ._additional-resources}

*   [Resources managed by quotas](/applications/quotas/quotas-setting-per-project#quotas-resources-managed_quotas-setting-per-project)
*   [Working with projects](/applications/projects/working-with-projects#working-with-projects-create-project_working-with-projects-create-project)
*   [Understanding deployments](/applications/deployments/what-deployments-are#what-deployments-are_what-deployments-are)

{% leveloffset +1 %}{% include "./modules/admin-quota-limits.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/container-limits.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/pod-limits.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/image-limits.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/image-stream-limits.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/persistent-volume-claim-limits.md" %}{% endleveloffset %}

## Additional resources {id="_additional_resources" ._additional-resources}

*   [Managing images streams](/openshift_images/image-streams-manage#images-imagestream-use_image-streams-managing)
*   [Restrict resource consumption with limit ranges](/nodes/clusters/nodes-cluster-limit-ranges#nodes-cluster-limit-stream-limits_nodes-cluster-limit-stream-limits)
*   [About limit ranges](/nodes/clusters/nodes-cluster-limit-ranges#nodes-cluster-limit-ranges-about_nodes-cluster-limit-ranges)
*   [Recommended control plane practices](/scalability_and_performance/recommended-performance-scale-practices/recommended-control-plane-practices#recommended-scale-practices_recommended-control-plane-practices)
*   [Understanding ephemeral storage](/storage/understanding-ephemeral-storage#storage-ephemeral-storage-overview_understanding-ephemeral-storage)

{% leveloffset +1 %}{% include "./modules/admin-limit-operations.md" %}{% endleveloffset %}

## Additional resources {id="_additional_resources" ._additional-resources}

*   [Resource quotas per projects](/applications/quotas/quotas-setting-per-project#quotas-setting-per-project_quotas-setting-per-project)