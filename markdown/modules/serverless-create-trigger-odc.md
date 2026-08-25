{%- set _mod_docs_content_type = "PROCEDURE" %}
# Creating a trigger by using the Developer perspective {id="serverless-create-trigger-odc_{{ context }}"}

Using the {{ product_title }} web console provides a streamlined and intuitive user interface to create a trigger. After Knative Eventing is installed on your cluster and you have created a broker, you can create a trigger by using the web console.

**Prerequisites**

*   The {{ ServerlessOperatorName }}, Knative Serving, and Knative Eventing are installed on your {{ product_title }} cluster.
*   You have logged in to the web console.
*   You have created a project or have access to a project with the appropriate roles and permissions to create applications and other workloads in {{ product_title }}.
*   You have created a broker and a Knative service or other event sink to connect to the trigger.

**Procedure**

1.  In the **Developer** perspective, navigate to the **Topology** page.
1.  Hover over the broker that you want to create a trigger for, and drag the arrow. The **Add Trigger** option is displayed.
1.  Click **Add Trigger**.
1.  Select your sink in the **Subscriber** list.
1.  Click **Add**.

**Verification**

*   After the subscription has been created, you can view it in the **Topology** page, where it is represented as a line that connects the broker to the event sink.

**Deleting a trigger**

1.  In the **Developer** perspective, navigate to the **Topology** page.
1.  Click on the trigger that you want to delete.
1.  In the **Actions** context menu, select **Delete Trigger**.