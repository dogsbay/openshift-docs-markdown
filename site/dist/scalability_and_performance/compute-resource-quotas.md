---
title: Using quotas and limit ranges
---

# Using quotas and limit ranges {#compute-resource-quotas}

As a cluster administrator, you can use quotas and limit ranges to set constraints. These constraints limit the number of objects or the amount of compute resources that are used in your project.

By using quotes and limits, you can better manage and allocate resources across all projects. You can also ensure that no projects use more resources than is appropriate for the cluster size.

A resource quota, defined by a `ResourceQuota` object, provides constraints that limit aggregate resource consumption per project. The quota can limit the quantity of objects that can be created in a project by type. Additinally, the quota can limit the total amount of compute resources and storage that might be consumed by resources in that project.

> [!IMPORTANT]
> Quotas are set by cluster administrators and are scoped to a given project. OpenShift Container Platform project owners can change quotas for their project, but not limit ranges. OpenShift Container Platform users cannot modify quotas or limit ranges.

## Additional resources {#additional-resources_using-quotas-and-limit-ranges}

- [Resources managed by quotas](/applications/quotas/quotas-setting-per-project#quotas-setting-per-project_quotas-setting-per-project)
- [Resource requests and overcommitment](/nodes/clusters/nodes-cluster-overcommit#nodes-cluster-overcommit-resource-requests_nodes-cluster-overcommit)

## Additional resources {#_additional_resources}

- [Resources managed by quotas](/applications/quotas/quotas-setting-per-project#quotas-resources-managed_quotas-setting-per-project)
- [Working with projects](/applications/projects/working-with-projects#working-with-projects-create-project_working-with-projects-create-project)
- [Understanding deployments](/applications/deployments/what-deployments-are#what-deployments-are_what-deployments-are)

## Additional resources {#_additional_resources}

- [Managing images streams](/openshift_images/image-streams-manage#images-imagestream-use_image-streams-managing)
- [Restrict resource consumption with limit ranges](/nodes/clusters/nodes-cluster-limit-ranges#nodes-cluster-limit-stream-limits_nodes-cluster-limit-stream-limits)
- [About limit ranges](/nodes/clusters/nodes-cluster-limit-ranges#nodes-cluster-limit-ranges-about_nodes-cluster-limit-ranges)
- [Recommended control plane practices](/scalability_and_performance/recommended-performance-scale-practices/recommended-control-plane-practices#recommended-scale-practices_recommended-control-plane-practices)
- [Understanding ephemeral storage](/storage/understanding-ephemeral-storage#storage-ephemeral-storage-overview_understanding-ephemeral-storage)

## Additional resources {#_additional_resources}

- [Resource quotas per projects](/applications/quotas/quotas-setting-per-project#quotas-setting-per-project_quotas-setting-per-project)
