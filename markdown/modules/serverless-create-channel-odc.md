{%- set _mod_docs_content_type = "PROCEDURE" %}
# Creating a channel by using the Developer perspective {id="serverless-create-channel-odc_{{ context }}"}

Using the {{ product_title }} web console provides a streamlined and intuitive user interface to create a channel. After Knative Eventing is installed on your cluster, you can create a channel by using the web console.

**Prerequisites**

*   You have logged in to the {{ product_title }} web console.
*   The {{ ServerlessOperatorName }} and Knative Eventing are installed on your {{ product_title }} cluster.
*   You have created a project or have access to a project with the appropriate roles and permissions to create applications and other workloads in {{ product_title }}.

**Procedure**

1.  In the **Developer** perspective, navigate to **+Add** → **Channel**.
1.  Select the type of `Channel` object that you want to create in the **Type** list.
1.  Click **Create**.

**Verification**

*   Confirm that the channel now exists by navigating to the **Topology** page.
    ![View the channel in the Topology view](/images/verify-channel-odc.png)