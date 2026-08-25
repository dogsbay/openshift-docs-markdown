{%- set _mod_docs_content_type = "PROCEDURE" %}
# Switch channels to view available update options {id="osd-upgrading-switch-channels_{{ context }}"}

You can switch the channel on a {{ product_title }} cluster to access update options within a current minor version (y-stream), or the subsequent minor versions (y+1, y+2). The version number in the channel represents the target minor version. {._abstract}

For example, if your cluster is on `stable-4.18`, switching the channel to `stable-4.19` shows update paths from 4.18.z to 4.19.z, if such paths are available. This strategy ensures that administrators must explicitly initiate minor version updates, and they never occur automatically.

**Procedure**

1.  Log in to {{ cluster_manager_url }}.
1.  Click **Fleet Management** > **Clusters**.
1.  Select the cluster for which you want to see the update options. 
1.  To view the cluster details, click the **Overview** tab.
    *   The **Channel** field displays the current update channel for the cluster.
1.  Select the new update channel.
    1.  In the **Channel** field, click the **Edit channel** icon next to the current channel name.
    1.  On the **Edit channel** dialog, select the required channel version.
    1.  Click **Save**.
        *   The **Channel** field updates to display the new update channel. 
        *   The **Version** field displays the **Update** link if updates are available for your selected channel.