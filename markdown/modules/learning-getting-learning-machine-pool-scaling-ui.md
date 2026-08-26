{%- set _mod_docs_content_type = "PROCEDURE" %}
# Scaling worker nodes using the UI {id="learning-getting-started-learning-machine-pool-scaling-ui_{{ context }}"}

Edit a machine pool to scale the number of worker nodes in that specific machine pool by using {{ cluster_manager }}. {._abstract}

**Procedure**

1.  Click the three dots to the right of the machine pool you want to edit.
1.  Click **Edit**.
1.  Enter the desired number of nodes, and click **Save**.
1.  Confirm that the cluster has scaled by selecting the cluster, clicking the **Overview** tab, and scrolling to **Compute listing**. The compute listing should equal the scaled nodes. For example, 3/3.
    ![cloud-experts-getting-started-managing-ocm-nodes](/images/cloud-experts-getting-started-managing-ocm-nodes.png)