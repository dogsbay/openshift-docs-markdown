{%- set _mod_docs_content_type = "PROCEDURE" %}

# Scheduling recurring upgrades for your cluster {id="upgrade-auto_{{ context }}"}

You can use {{ cluster_manager }} to schedule recurring, automatic upgrades for z-stream patch versions for your {{ product_title }} cluster. Based on upstream changes, there might be times when no updates are released. Therefore, no upgrade occurs for that week. {._abstract}

**Procedure**

1.  From {{ cluster_manager_url }}, select your cluster from the clusters list.
1.  Click the **Upgrade settings** tab to access the upgrade operator.
1.  To schedule recurring upgrades, select **Recurring updates**.
1.  Provide an administrator’s acknowledgment and click **Approve and continue**. {{ cluster_manager }} does not start scheduled y-stream updates for minor versions without receiving an administrator’s acknowledgment.

    :::important

    Before upgrading a Workload Identity Federation (WIF)-enabled {{ product_title }} on {{ GCP }} cluster, you must update the wif-config. For more information, see "Cluster upgrades with Workload Identity Federation (WIF)".
    
    :::

1.  Specify the day of the week and the time you want your cluster to upgrade.
1.  Click **Save**.
1.  Optional: Set a grace period for **Node draining** by selecting a designated amount of time from the drop down list. A **1 hour** grace period is set by default.
1.  To edit an existing recurring upgrade policy, edit the preferred day or start time from the **Upgrade Settings** tab. Click **Save**.
1.  To cancel a recurring upgrade policy, switch the upgrade method to individual from the **Upgrade Settings** tab. Click **Save**.

**Verification**

*   On the **Upgrade settings** tab, the **Upgrade status** box indicates that an upgrade is scheduled. The date and time of the next scheduled update is listed.