{%- set _mod_docs_content_type = "PROCEDURE" %}
# Editing a deployment by using the Developer perspective {id="odc-editing-deployments_{{ context }}"}

To change the strategy, images, environment variables, or advanced options for a deployment in {{ product_title }}, you can edit the deployment in the **Developer** perspective.  {._abstract}

Open the application in the **Topology** view and use **Edit Deployment** to update settings such as rollouts and replicas.

**Prerequisites**

*   You are in the **Developer** perspective of the web console.
*   You have created an application.

**Procedure**

1.  Navigate to the **Topology** view. 
1.  Click your application to see the **Details** panel.
1.  In the **Actions** drop-down menu, select **Edit Deployment** to view the **Edit Deployment** page.
1.  You can edit the following **Advanced options** for your deployment:
    1.  Optional: You can pause rollouts by clicking **Pause rollouts**, and then selecting the **Pause rollouts for this deployment** checkbox.

        By pausing rollouts, you can make changes to your application without triggering a rollout. You can resume rollouts at any time.
    1.  Optional: Click **Scaling** to change the number of instances of your image by modifying the number of **Replicas**.
1.  Click **Save**.