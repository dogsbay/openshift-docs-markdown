{%- set _mod_docs_content_type = "PROCEDURE" %}

# Scheduling individual upgrades for your cluster {id="upgrade-manual_{{ context }}"}

You can use {{ cluster_manager }} to manually upgrade your {{ product_title }} cluster one time. {._abstract}

**Procedure**

1.  From {{ cluster_manager_url }}, select your cluster from the clusters list.
1.  Click the **Upgrade settings** tab to access the upgrade operator. You can also update your cluster from the **Overview** tab by clicking **Update** next to the cluster version under the **Details** heading.
1.  To schedule an individual upgrade, select **Individual updates**.
1.  Click **Update** in the **Update Status** box.
1.  Select the version you want to upgrade your cluster to. Recommended cluster upgrades appear in the UI. To learn more about each available upgrade version, click **View release notes**.
1.  If you select an update version that requires approval, provide an administrator’s acknowledgment and click **Approve and continue**.

    :::important

    Before upgrading a Workload Identity Federation (WIF)-enabled {{ product_title }} on {{ GCP }} cluster, you must update the wif-config. For more information, see "Cluster upgrades with Workload Identity Federation (WIF)".
    
    :::

1.  Click **Next**.
1.  To schedule your upgrade:
    *   Click **Upgrade now** to upgrade within the next hour.
    *   Click **Schedule a different time** and specify the date and time that you want the cluster to upgrade.
1.  Click **Next**.
1.  Review the upgrade policy and click **Confirm upgrade**.
1.  A confirmation appears when the cluster upgrade has been scheduled. Click **Close**.
1.  Optional: Set a grace period for **Node draining** by selecting a designated amount of time from the drop down list. A **1 hour** grace period is set by default.

**Verification**

*   From the **Overview** tab, next to the cluster version, the UI notates that the upgrade has been scheduled.
    *   Click **View details** to view the upgrade details. If you need to cancel the scheduled upgrade, you can click **Cancel this upgrade** from the **View Details** pop-up.
    *   The same upgrade details are available on the **Upgrade settings** tab under the **Upgrade status** box. If you need to cancel the scheduled upgrade, you can click **Cancel this upgrade** from the **Upgrade status** box.


    :::warning

    If a Common Vulnerabilities and Exposures (CVE) or other critical issue to {{ product_title }} is found, all clusters are upgraded within 48 hours of the fix being released. You are notified when the fix is available and informed that the cluster will be automatically upgraded at your latest preferred start time before the 48 hour window closes. You can also upgrade manually at any time before the recurring upgrade starts.
    
    :::