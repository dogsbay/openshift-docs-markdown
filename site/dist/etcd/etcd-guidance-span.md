---
title: Guidance for clusters that span data centers
---

# Guidance for clusters that span data centers {#etcd-guidance-span}

Evaluate considerations and metrics for OpenShift Container Platform clusters that span data centers so you can design supported, resilient multisite deployments.

Red Hat strongly recommends a deployment model where OpenShift Container Platform clusters are deployed within a data center, but also acknowledges that there can be scenarios where a provider can use a deployment model where a cluster can span across data centers. This guidance outlines considerations when exploring the use of cluster deployments that span many data centers and describes important metrics that affect the supportability of such deployments. The design of such deployments must adhere to these guidelines for the product to function optimally and to ensure the highest quality of support with the appropriate product support subscriptions.

> [!WARNING]
> A cluster deployment that spans many data centers extends the cluster as a single failure domain across locations and must not be considered a replacement for a disaster recovery plan.

Clusters that span many data centers follow standard Red Hat OpenShift Container Platform support guidance. Review the "Red Hat OpenShift Container Platform Lifecycle" and "Red Hat Production Support Scope of Coverage" for more information.

Do not deploy an OpenShift Container Platform cluster that spans many sites. If you need presence in many data centers or regions, deploy one cluster per region or site, and use tools such as {{ rh_rhacm_title }} to manage those clusters and deployments.

Some OpenShift Container Platform platforms support many data center deployments. Check the platform-specific product documentation and release notes for details. Other platforms can span data centers, depending on the quality of the network connectivity between nodes. For more information, see "Ensuring reliable etcd performance and scalability".

When you implement a cluster deployment that spans many data centers, implement the practices in "Red Hat High Availability, and Recommended Practices". An alternative to multisite deployments is to deploy one OpenShift Container Platform cluster per site, managed by {{ rh_rhacm_title }}.

**Additional resources**

- [Understanding and Validating MTU setting with OpenShift Container Platform 4.x (Red Hat Knowledgebase)](https://access.redhat.com/articles/7010220)
- [Configuring {{ rh_storage }} Disaster Recovery for OpenShift Workloads](https://docs.redhat.com/en/documentation/red_hat_openshift_data_foundation/4.19/html-single/configuring_openshift_data_foundation_disaster_recovery_for_openshift_workloads/index)

**Additional resources**

- [Ensuring reliable etcd performance and scalability](/openshift-docs-markdown/etcd/etcd-performance#etcd-leader-election-log-replication_etcd-performance)
- [Understanding and Validating MTU setting with OpenShift Container Platform 4.x (Red Hat Knowledgebase)](https://access.redhat.com/articles/7010220)
- [How etcd peer round trip time affects performance](/openshift-docs-markdown/etcd/etcd-performance#etcd-peer-round-trip_etcd-performance)
- [Determining the size of the etcd database and understanding its effects](/openshift-docs-markdown/etcd/etcd-performance#etcd-database-size_etcd-performance)

## Additional resources {#additional-resources-etcd-span_etcd-guidance-span}

- [Red Hat OpenShift Container Platform Lifecycle](https://access.redhat.com/support/policy/updates/openshift)
- [Red Hat Production Support Scope of Coverage](https://access.redhat.com/support/offerings/production/soc)
- [Ensuring reliable etcd performance and scalability](/openshift-docs-markdown/etcd/etcd-performance#etcd-leader-election-log-replication_etcd-performance)
- [Red Hat OpenShift Container Platform High Availability, and Recommended Practices (Red Hat Knowledgebase)](https://access.redhat.com/articles/3221001)
