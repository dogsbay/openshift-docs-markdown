{%- set _mod_docs_content_type = "PROCEDURE" %}
# Enable autoscaling nodes in an existing cluster using {{ cluster_manager_first }} {id="ocm-enabling-autoscaling_{{ context }}"}

Enable autoscaling for worker nodes in the machine pool definition from {{ cluster_manager }} console. {._abstract}

**Procedure**

1.  From {{ cluster_manager_url }}, navigate to the **Cluster List** page and select the cluster that you want to enable autoscaling for.
1.  On the selected cluster, select the **Machine pools** tab.
1.  Click the Options menu {{ kebab }} at the end of the machine pool that you want to enable autoscaling for and select **Edit**.
1.  On the **Edit machine pool** dialog, select the **Enable autoscaling** checkbox.
1.  Select **Save** to save these changes and enable autoscaling for the machine pool.