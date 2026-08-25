{%- set _mod_docs_content_type = "PROCEDURE" %}
# Control Plane Only update using the web console {id="updating-control-plane-only-update-console_{{ context }}"}

You can perform a Control Plane Only update by using the web console. {._abstract}

**Prerequisites**

*   You verified that machine config pools are unpaused.
*   You have access to the web console as a user with `cluster-admin` privileges.

**Procedure**

1.  Using the web console, update any Operator Lifecycle Manager (OLM) Operators to the versions that are compatible with your intended updated version. For more information, see "Updating installed Operators".
1.  Verify that all machine config pools display a status of `Up to date` and that no machine config pool displays a status of `UPDATING`.

    To view the status of all machine config pools, click **Compute** -> **MachineConfigPools** and review the contents of the **Update status** column.

    :::note

    If your machine config pools have an `Updating` status, wait for this status to change to `Up to date`. This process could take several minutes.
    
    :::

1.  Set your channel to `eus-<4.y+2>`.

    To set your channel, click **Administration** -> **Cluster Settings** -> **Channel**. You can edit your channel by clicking on the current hyperlinked channel.
1.  Pause all worker machine pools except for the master pool. You can perform this action on the **MachineConfigPools** tab under the **Compute** page. Select the vertical ellipses next to the machine config pool you’d like to pause and click **Pause updates**.
1.  Update to version &lt;4.y+1> and complete up to the **Save** step. For more information, see "Updating a cluster by using the web console".
1.  Ensure that the &lt;4.y+1> updates are complete by viewing the **Last completed version** of your cluster. You can find this information on the **Cluster Settings** page under the **Details** tab.
1.  If necessary, update your OLM Operators by using the Administrator perspective on the web console. For more information, see "Updating installed Operators".
1.  Update to version &lt;4.y+2> and complete up to the **Save** step. For more information, see "Updating a cluster by using the web console".
1.  Ensure that the &lt;4.y+2> update is complete by viewing the **Last completed version** of your cluster. You can find this information on the **Cluster Settings** page under the **Details** tab.
1.  Unpause all previously paused machine config pools. You can perform this action on the **MachineConfigPools** tab under the **Compute** page. Select the vertical ellipses next to the machine config pool you’d like to unpause and click **Unpause updates**.

    :::important

    If pools are paused, the cluster is not permitted to upgrade to any future minor versions, and some maintenance tasks are inhibited. This puts the cluster at risk for future degradation.
    
    :::

1.  Verify that your previously paused pools are updated and that your cluster has completed the update to version &lt;4.y+2>.

    You can verify that your pools have updated on the **MachineConfigPools** tab under the **Compute** page by confirming that the **Update status** has a value of **Up to date**.

    :::important

    When you update a cluster that contains {{ op_system_base_full }} compute machines, those machines temporarily become unavailable during the update process. You must run the upgrade playbook against each {{ op_system_base }} machine as it enters the `NotReady` state for the cluster to finish updating. For more information, see "Updating a cluster that includes RHEL compute machines".
    
    :::


    You can verify that your cluster has completed the update by viewing the **Last completed version** of your cluster. You can find this information on the **Cluster Settings** page under the **Details** tab.