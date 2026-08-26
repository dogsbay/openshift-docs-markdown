{%- set _mod_docs_content_type = "PROCEDURE" %}
# Starting a recreate deployment using the Developer perspective {id="odc-starting-recreate-deployment_{{ context }}"}

To switch from a rolling update to a recreate rollout in {{ product_title }}, you can change the deployment strategy in the **Developer** perspective. Set the strategy type to `Recreate` in the YAML editor, then start a rollout from the **Topology** view. {._abstract}

**Prerequisites**

*   Ensure that you are in the **Developer** perspective of the web console.
*   Ensure that you have created an application using the **Add** view and see it deployed in the **Topology** view.

**Procedure**

1.  Click your application to see the **Details** panel.
1.  In the **Actions** drop-down menu, select **Edit Deployment Config** to see the deployment configuration details of the application.
1.  In the YAML editor, change the `spec.strategy.type` to `Recreate` and click **Save**.
1.  In the **Topology** view, select the node to see the **Overview** tab in the side panel. The **Update Strategy** is now set to **Recreate**.
1.  Use the **Actions** drop-down menu to select **Start Rollout** to start an update using the recreate strategy. The recreate strategy first terminates pods for the older version of the application and then spins up pods for the new version.

    **Figure 1. Recreate update**

![odc-recreate-update](/images/odc-recreate-update.png)