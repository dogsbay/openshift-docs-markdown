{%- set _mod_docs_content_type = "CONCEPT" %}
# Understanding {{ product_title }} cluster upgrades {id="upgrade_{{ context }}"}

When upgrades are made available for your {{ product_title }} cluster, you can upgrade to the newest version through {{ cluster_manager_first }} or {{ cluster_manager }} CLI. You can set your upgrade policies on existing clusters or during cluster creation, and upgrades can be scheduled to occur automatically or manually. {._abstract}


:::important

Before upgrading a Workload Identity Federation (WIF)-enabled {{ product_title }} on {{ GCP }} cluster, you must update the wif-config. For more information, see "Cluster upgrades with Workload Identity Federation (WIF)".

:::


Red Hat Site Reliability Engineers (SRE) will provide a curated list of available versions for your {{ product_title }} clusters. For each cluster you will be able to review the full list of available releases, as well as the corresponding release notes. {{ cluster_manager }} will enable installation of clusters at the latest supported versions, and upgrades can be canceled at any time.

You can also set a grace period for how long `PodDisruptionBudget` protected workloads are respected during upgrades. After this grace period, any workloads protected by  `PodDisruptionBudget` that have not been successfully drained from a node, will be forcibly deleted.


:::note

All Kubernetes objects and Persistent Volumes (PVs) in each {{ product_title }} cluster are backed up as part of the {{ product_title }} service. Application and application data backups are not a part of the {{ product_title }} service. Ensure you have a backup policy in place for your applications and application data before scheduling upgrades.

:::



:::note

When following a scheduled upgrade policy, there might be a delay of an hour or more before the upgrade process begins, even if it is an immediate upgrade. Additionally, the duration of the upgrade might vary based on your workload configuration.

:::


## Recurring upgrades {id="upgrade-automatic_{{ context }}"}

Upgrades can be scheduled to occur automatically on a day and time specified by the cluster owner or administrator. Upgrades occur on a weekly basis, unless an upgrade is unavailable for that week.

If you select recurring updates for your cluster, you must provide an administrator’s acknowledgment. {{ cluster_manager }} does not start scheduled y-stream updates for minor versions without receiving an administrator’s acknowledgment.


:::note

Recurring upgrade policies are optional and if they are not set, the upgrade policies default to individual.

:::


## Individual upgrades {id="upgrade-manual_upgrades_{{ context }}"}

If you opt for individual upgrades, you are responsible for updating your cluster. If you select an update version that requires approval, you must provide an administrator’s acknowledgment.

If your cluster version becomes outdated, it changes to a limited support status.

## Upgrade notifications {id="upgrade-notifications_{{ context }}"}

From {{ cluster_manager }} console you can view your cluster’s history from the **Overview** tab. The Upgrade states can be viewed in the service log under the **Cluster history** heading.

Every change of state also triggers an email notification to the cluster owner and subscribed users. You will receive email notifications for the following events:

*   An upgrade has been scheduled.
*   An upgrade has started.
*   An upgrade has completed.
*   An upgrade has been canceled.


:::note

For recurring upgrades, you will also receive email notifications before the upgrade occurs based on the following cadence:

*   2 week notice
*   1 week notice
*   1 day notice

:::


## Cluster upgrades with Workload Identity Federation (WIF) {id="wif-upgrades_{{ context }}"}
Before upgrading an {{ product_title }} on {{ GCP }} cluster with WIF authentication type to a newer y-stream version, you must update the WIF configuration to that version. Failure to do so before attempting to upgrade the cluster version will result in an error.
For more information on how to update a WIF configuration, see the  _Additional resources_ section.


:::note

The update path to a brand new release of {{ product_title }} is not available in the stable channel until 45 to 90 days after the initial GA of a newer y-stream version.

:::