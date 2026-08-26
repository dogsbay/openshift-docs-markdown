{%- set _mod_docs_content_type = "PROCEDURE" %}
# Creating a subscription by using the Developer perspective {id="serverless-creating-subscriptions-odc_{{ context }}"}

After you have created a channel and an event sink, you can create a subscription to enable event delivery. Using the {{ product_title }} web console provides a streamlined and intuitive user interface to create a subscription.

**Prerequisites**

*   The {{ ServerlessOperatorName }}, Knative Serving, and Knative Eventing are installed on your {{ product_title }} cluster.
*   You have logged in to the web console.
*   You have created an event sink, such as a Knative service, and a channel.
*   You have created a project or have access to a project with the appropriate roles and permissions to create applications and other workloads in {{ product_title }}.

**Procedure**

1.  In the **Developer** perspective, navigate to the **Topology** page.
1.  Create a subscription using one of the following methods:
    1.  Hover over the channel that you want to create a subscription for, and drag the arrow. The **Add Subscription** option is displayed.
        ![Create a subscription for the channel](/images/create-sub-ODC.png)
        1.  Select your sink in the **Subscriber** list.
        1.  Click **Add**.
    1.  If the service is available in the **Topology** view under the same namespace or project as the channel, click on the channel that you want to create a subscription for, and drag the arrow directly to a service to immediately create a subscription from the channel to that service.

**Verification**

*   After the subscription has been created, you can see it represented as a line that connects the channel to the service in the **Topology** view:
    ![Subscription in the Topology view](/images/verify-subscription-odc.png)