{%- set _mod_docs_content_type = "PROCEDURE" %}
# Enable autoscaling during cluster creation with {{ cluster_manager }} {id="rosa-enable-cluster-autoscale-ui-during_{{ context }}"}

Enable cluster autoscaling during cluster creation by using {{ cluster_manager }} to automatically adjust the number of nodes based on workload demands. {._abstract}

**Procedure**

1.  During cluster creation, check the **Enable autoscaling** box. The **Edit cluster autoscaling settings** button becomes selectable.
    1.  You can also choose the minimum or maximum amount of nodes to autoscale.
1.  Click **Edit cluster autoscaling settings**.
1.  Edit any settings you want and then click **Close**.