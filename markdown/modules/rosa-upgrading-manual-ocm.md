{% if openshift_rosa %}
{% if context == "rosa-hcp-upgrading" %}
{%- set hcp_in_rosa = true -%}
{% endif %}
{% endif %}

{% if context == "rosa-upgrading-sts" %}
{%- set sts = true -%}
{% endif %}

{%- set _mod_docs_content_type = "PROCEDURE" %}
# Upgrading with the {{ cluster_manager }} console {id="rosa-upgrade-ocm_{{ context }}"}

You can schedule upgrades for a {{ product_title }} cluster manually either one time or on a recurring schedule by using {{ cluster_manager }} console. {._abstract}

**Procedure**

1.  Log in to {{ cluster_manager_url }}.
1.  Select a cluster to upgrade.
1.  Click the **Settings** tab.
1.  For production clusters, ensure that the **Channel** is set to the correct channel for the version that you want to update to, such as `stable-4.19`.
1.  In the **Update strategy** pane, select which type of update you want:
    *   For individual updates, you can request the upgrade either immediately (to start within an hour) or at a future time.
    *   For recurring updates, select a recurring date and time to start the upgrade automatically to the latest x.y.Z (z-stream) version available.

        :::important

        Recurring updates are applicable only for z-stream updates. Minor version or y-stream updates need to be done manually. You will be notified when a new y-stream update is available.
        
        :::

{% if not (hcp_in_rosa or openshift_rosa_hcp) %}
1.  Optional: In the **Node draining** pane, select a grace period interval from the list. The grace period enables the nodes to gracefully drain before forcing the pod eviction. The default is **1 hour**.

    :::important

    You cannot change the node drain grace period after you start the upgrade process.
    
    :::

{%- endif %}
1.  In the **Update strategy** pane, click **Save** to apply your update strategy.
1.  In the **Update status** pane, review the **Update available** information and click **Update**.

    :::note

    The **Update** button is enabled only when an upgrade is available.
    
    :::

1.  The **Update cluster** dialog opens. Recommended cluster upgrades appear in the **Select version** pane. Select the version you want to upgrade your cluster to, and click **Next**.
1.  Optional: For {{ product_title }} clusters that use AWS Security Token Service (STS), the account-level and cluster-specific Operator roles might need to be updated, depending on the selected target version.
    1.  In the {{ rosa_cli }}, run the `rosa list account-roles` command to list and verify that the account roles are compatible with the target minor version chosen for the upgrade. If the roles are not compatible, run the `rosa upgrade account-roles` command to upgrade the account roles to the latest OpenShift version.
    1.  In the {{ rosa_cli }}, run the `rosa list operator-roles` command to list and verify that Operator roles associated with the cluster are compatible with the target minor version chosen for the upgrade. If not, run the `rosa upgrade operators-roles` command to upgrade the cluster’s Operator roles to the latest OpenShift version.
    1.  If you select an update version that requires approval, provide an administrator’s acknowledgment by typing **Acknowledge** into the field provided, and click **Next**.
1.  In the **Schedule update** dialog, schedule your cluster upgrade.
    *   To upgrade within an hour, select **Update now** and click **Next**.
    *   To upgrade at a later time, select **Schedule a different time** and set a time and date for your upgrade. Click **Next** to proceed to the confirmation dialog.
1.  After reviewing the version and schedule summary, select **Confirm update**.
1.  Click **Close** to exit out of the **Update cluster** dialog.

    The cluster is scheduled for an upgrade to the target version. This action can take up to an hour, depending on the selected upgrade schedule and your workload configuration, such as pod disruption budgets.

    The status is displayed in the **Update status** pane.
1.  After the update completes and the Cluster Version Operator refreshes the available updates, check if more updates are available in your current channel.
    *   If updates are available, continue to perform updates in the current channel until you can no longer update.
    *   If no updates are available, change the **Channel** to the `stable-\*`, `fast-\*`, or `eus-*` channel for the next minor version, and update to the version that you want in that channel.

        You might need to perform several intermediate updates until you reach the version that you want.

**Troubleshooting**

*   Sometimes a scheduled upgrade does not trigger. See [Upgrade maintenance cancelled](https://access.redhat.com/solutions/6648291) for more information.

{% if context == "rosa-upgrading-sts" %}
{%- set sts = "" -%}
{% endif %}

{% if context == "rosa-hcp-upgrading" %}
{%- set hcp_in_rosa = "" -%}
{% endif %}