{%- set _mod_docs_content_type = "PROCEDURE" %}
# Enable autoscaling after cluster creation with {{ cluster_manager }} {id="rosa-enable-cluster-autoscale-ui-after_{{ context }}"}

Enable cluster autoscaling on an existing cluster by using {{ cluster_manager }} to automatically adjust the number of nodes based on workload demands. {._abstract}

**Procedure**

1.  In {{ cluster_manager }}, click the name of the cluster you want to autoscale. The **Overview** page for the cluster has a **Autoscaling** item that indicates if it is enabled or disabled.
1.  Click the **Machine Pools** tab.
1.  Click the **Edit cluster autoscaling** button. The **Edit cluster autoscaling** settings window is shown.
1.  Click the **Autoscale cluster** toggle at the top of the window. All the settings are now editable.
1.  Edit any settings you want and then click **Save**.
1.  Click the **x** at the top right of the screen to close the settings window.

    To revert all autoscaling settings to the defaults if they have been changed, click the **Revert all to defaults** button.