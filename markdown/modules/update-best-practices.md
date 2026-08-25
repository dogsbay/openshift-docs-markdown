{%- set _mod_docs_content_type = "REFERENCE" %}
# Best practices for cluster updates {id="update-best-practices_{{ context }}"}

Follow best practices to ensure successful cluster updates. These best practices include selecting recommended versions, resolving critical alerts, maintaining spare node capacity, and properly configuring pod disruption budgets. {._abstract}

{{ product_title }} minimizes workload disruptions during an update. Updates do not begin unless the cluster is in an upgradeable state at the time of the update request.

This design enforces some key conditions before initiating an update, but there are several actions you can take to increase your chances of a successful cluster update.

## Choose versions recommended by the OpenShift Update Service {id="recommended-versions_{{ context }}"}

The OpenShift Update Service (OSUS) provides update recommendations based on cluster characteristics such as the cluster’s subscribed channel.
The Cluster Version Operator saves these recommendations as either recommended or conditional updates.

While it is possible to attempt an update to a version that is not recommended by OSUS, following a recommended update path protects users from encountering known issues or unintended consequences on the cluster.

Choose only update targets that are recommended by OSUS to ensure a successful update.

## Address all critical alerts on the cluster {id="critical-alerts_{{ context }}"}

Critical alerts must always be addressed as soon as possible, but it is especially important to address these alerts and resolve any problems before initiating a cluster update.

Failing to address critical alerts before beginning an update can cause problematic conditions for the cluster.

In the **Administrator** perspective of the web console, navigate to **Observe** -> **Alerting** to find critical alerts.

## Ensure that the cluster is in an Upgradeable state {id="cluster-upgradeable_{{ context }}"}

When one or more Operators have not reported their `Upgradeable` condition as `True` for more than an hour, the `ClusterNotUpgradeable` warning alert is triggered in the cluster. In most cases this alert does not block patch updates, but you cannot perform a minor version update until you resolve this alert and all Operators report `Upgradeable` as `True`.

For more information about the `Upgradeable` condition, see "Understanding cluster Operator condition types" in the additional resources section.

## SDN support removal {id="sdn-support-removal"}

OpenShift SDN network plugin was deprecated in versions 4.15 and 4.16. With this release, the SDN network plugin is no longer supported and the content has been removed from the documentation.

If your {{ product_title }} cluster is still using the OpenShift SDN CNI, see [Migrating from the OpenShift SDN network plugin](https://docs.redhat.com/en/documentation/openshift_container_platform/4.16/html/networking/ovn-kubernetes-network-plugin#migrate-from-openshift-sdn).


:::important

It is not possible to update a cluster to {{ product_title }} 4.17 if it is using the OpenShift SDN network plugin. You must migrate to the OVN-Kubernetes plugin before upgrading to {{ product_title }} 4.17. 

:::


## Ensure that enough spare nodes are available {id="nodes-ready_{{ context }}"}

A cluster should not be running with little to no spare node capacity, especially when initiating a cluster update. Nodes that are not running and available may limit a cluster’s ability to perform an update with minimal disruption to cluster workloads.

Depending on the configured value of the cluster’s `maxUnavailable` spec, the cluster might not be able to apply machine configuration changes to nodes if there is an unavailable node. Additionally, if compute nodes do not have enough spare capacity, workloads might not be able to temporarily shift to another node while the first node is taken offline for an update.

Make sure that you have enough available nodes in each worker pool, as well as enough spare capacity on your compute nodes, to increase the chance of successful node updates.


:::warning

The default setting for `maxUnavailable` is `1` for all the machine config pools in {{ product_title }}. It is recommended to not change this value and update one control plane node at a time. Do not change this value to `3` for the control plane pool.

:::


## Ensure that the cluster’s PodDisruptionBudget is properly configured {id="pod-disruption-budget_{{ context }}"}

You can use the `PodDisruptionBudget` object to define the minimum number or percentage of pod replicas that must be available at any given time.
This configuration protects workloads from disruptions during maintenance tasks such as cluster updates.

However, it is possible to configure the `PodDisruptionBudget` for a given topology in a way that prevents nodes from being drained and updated during a cluster update.

When planning a cluster update, check the configuration of the `PodDisruptionBudget` object for the following factors:

*   For highly available workloads, make sure there are replicas that can be temporarily taken offline without being prohibited by the `PodDisruptionBudget`.
*   For workloads that are not highly available, make sure they are either not protected by a `PodDisruptionBudget` or have some alternative mechanism for draining these workloads eventually, such as periodic restart or guaranteed eventual termination.