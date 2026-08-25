{%- set _mod_docs_content_type = "PROCEDURE" %}
# Managing traffic between revisions by using the {{ product_title }} web console {id="odc-splitting-traffic-between-revisions-using-developer-perspective_{{ context }}"}

**Prerequisites**

*   The {{ ServerlessOperatorName }} and Knative Serving are installed on your cluster.
*   You have logged in to the {{ product_title }} web console.

**Procedure**

To split traffic between multiple revisions of an application in the **Topology** view:

1.  Click the Knative service to see its overview in the side panel.
1.  Click the **Resources** tab, to see a list of **Revisions** and **Routes** for the service.
    **Figure 1. Serverless application**

    ![odc-serverless-app](/_assets/images/odc-serverless-app.png)
1.  Click the service, indicated by the **S** icon at the top of the side panel, to see an overview of the service details.
1.  Click the **YAML** tab and modify the service configuration in the YAML editor, and click **Save**. For example, change the `timeoutseconds` from 300 to 301 . This change in the configuration triggers a new revision. In the **Topology** view, the latest revision is displayed and the **Resources** tab for the service now displays the two revisions.
1.  In the **Resources** tab, click **[Set Traffic Distribution]** to see the traffic distribution dialog box:
    1.  Add the split traffic percentage portion for the two revisions in the **Splits** field.
    1.  Add tags to create custom URLs for the two revisions.
    1.  Click **Save** to see two nodes representing the two revisions in the Topology view.
        **Figure 2. Serverless application revisions**

        ![odc-serverless-revisions](/_assets/images/odc-serverless-revisions.png)