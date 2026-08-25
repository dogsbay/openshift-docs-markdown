{%- set _mod_docs_content_type = "PROCEDURE" %}
# Starting a rolling deployment using the Developer perspective {id="odc-starting-rolling-deployment_{{ context }}"}

To upgrade an application with minimal downtime in {{ product_title }}, you can start a rolling deployment in the **Developer** perspective. From the **Topology** view, select **Start Rollout** to spin up the new version and then terminate the old pods. {._abstract}

**Prerequisites**

*   You are in the **Developer** perspective of the web console.
*   You have created an application.

**Procedure**

1.  In the **Topology** view, click the application node to see the **Overview** tab in the side panel. Note that the **Update Strategy** is set to the default **Rolling** strategy.
1.  In the **Actions** drop-down menu, select **Start Rollout** to start a rolling update. The rolling deployment spins up the new version of the application and then terminates the old one.
    **Figure 1. Rolling update**

    ![odc-rolling-update](/_assets/images/odc-rolling-update.png)