---
title: Migrating from SiteConfig CRs to ClusterInstance CRs
---

# Migrating from SiteConfig CRs to ClusterInstance CRs {#ztp-migrate-clusterinstance}

You can incrementally migrate {{ sno }} clusters from `SiteConfig` custom resources (CRs) to `ClusterInstance` CRs. During migration, the existing and new pipelines run in parallel, so you can migrate one or more clusters at a time in a controlled and phased manner.

> [!IMPORTANT]
> - The `SiteConfig` CR is deprecated from OpenShift Container Platform version 4.18 and removed from OpenShift Container Platform 4.21.
> - The `ClusterInstance` CR is available from {{ rh_rhacm_first }} version 2.12 or later.

**Additional resources**

- [Enabling the SiteConfig operator](https://docs.redhat.com/en/documentation/red_hat_advanced_cluster_management_for_kubernetes/2.12/html/multicluster_engine_operator_with_red_hat_advanced_cluster_management/siteconfig-intro#enable)
