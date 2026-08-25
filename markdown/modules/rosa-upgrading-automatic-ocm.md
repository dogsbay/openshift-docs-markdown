{%- set _mod_docs_content_type = "PROCEDURE" %}
# Scheduling recurring upgrades for your cluster {id="rosa-scheduling-upgrade_{{ context }}"}

You can schedule recurring, automatic upgrades for z-stream patch versions for your {{ product_title }} cluster through the {{ cluster_manager }} console.

**Procedure**

1.  Log in to {{ cluster_manager_url }}.
1.  Select a cluster to upgrade.
1.  Click the **Settings** tab.
1.  In the **Update strategy** pane, select **Recurring updates**.
1.  Select a preferred day of the week and start time for the upgrade, when updates are available.
1.  Provide an administrator’s acknowledgment and click **Approve and continue**. {{ cluster_manager }} does not start scheduled y-stream updates for minor versions without receiving an administrator’s acknowledgment.
1.  In the **Node draining** pane, select a grace period interval from the list. The grace period enables the nodes to gracefully drain before forcing the pod eviction. The default is **1 hour**.
1.  In the **Update strategy** pane, click **Save** to apply your update strategy.

    When upgrades are available, they are automatically applied to the cluster on the preferred day of the week and start time.