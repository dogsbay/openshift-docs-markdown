{%- set _mod_docs_content_type = "PROCEDURE" %}
# Disable autoscaling nodes in an existing cluster using {{ cluster_manager_first }} {id="ocm-disabling-autoscaling_{{ context }}"}

Disable autoscaling for worker nodes in the machine pool definition from {{ cluster_manager }}. {._abstract}

**Procedure**

1.  From {{ cluster_manager_url }}, navigate to the **Cluster List** page and select the cluster with autoscaling that must be disabled.
1.  On the selected cluster, select the **Machine pools** tab.
1.  Click the Options menu {{ kebab }} at the end of the machine pool with autoscaling and select **Edit**.
1.  On the **Edit machine pool** dialog, clear the **Enable autoscaling** checkbox.
1.  Select **Save** to save these changes and disable autoscaling from the machine pool.