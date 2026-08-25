{%- set _mod_docs_content_type = "PROCEDURE" %}
# Creating a subscription by using the Administrator perspective {id="serverless-creating-subscription-admin-web-console_{{ context }}"}

After you have created a channel and an event sink, also known as a _subscriber_, you can create a subscription to enable event delivery. Subscriptions are created by configuring a `Subscription` object, which specifies the channel and the subscriber to deliver events to. You can also specify some subscriber-specific options, such as how to handle failures.

**Prerequisites**

*   The {{ ServerlessOperatorName }} and Knative Eventing are installed on your {{ product_title }} cluster.
*   You have logged in to the web console and are in the **Administrator** perspective.

{% if openshift_enterprise %}
*   You have cluster administrator permissions for {{ product_title }}.
{% endif %}

{% if openshift_dedicated or openshift_rosa %}
*   You have cluster or dedicated administrator permissions for {{ product_title }}.
{% endif %}
*   You have created a Knative channel.
*   You have created a Knative service to use as a subscriber.

**Procedure**

1.  In the **Administrator** perspective of the {{ product_title }} web console, navigate to **Serverless** → **Eventing**.
1.  In the **Channel** tab, select the Options menu {{ kebab }} for the channel that you want to add a subscription to.
1.  Click **Add Subscription** in the list.
1.  In the **Add Subscription** dialogue box, select a **Subscriber** for the subscription. The subscriber is the Knative service that receives events from the channel.
1.  Click **Add**.