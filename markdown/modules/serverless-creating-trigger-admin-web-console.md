{%- set _mod_docs_content_type = "PROCEDURE" %}
# Creating a trigger by using the Administrator perspective {id="serverless-creating-trigger-admin-web-console_{{ context }}"}

Using the {{ product_title }} web console provides a streamlined and intuitive user interface to create a trigger. After Knative Eventing is installed on your cluster and you have created a broker, you can create a trigger by using the web console.

**Prerequisites**

*   The {{ ServerlessOperatorName }} and Knative Eventing are installed on your {{ product_title }} cluster.
*   You have logged in to the web console and are in the **Administrator** perspective.

{% if openshift_enterprise %}
*   You have cluster administrator permissions for {{ product_title }}.
{% endif %}

{% if openshift_dedicated or openshift_rosa %}
*   You have cluster or dedicated administrator permissions for {{ product_title }}.
{% endif %}
*   You have created a Knative broker.
*   You have created a Knative service to use as a subscriber.

**Procedure**

1.  In the **Administrator** perspective of the {{ product_title }} web console, navigate to **Serverless** -> **Eventing**.
1.  In the **Broker** tab, select the Options menu {{ kebab }} for the broker that you want to add a trigger to.
1.  Click **Add Trigger** in the list.
1.  In the **Add Trigger** dialogue box, select a **Subscriber** for the trigger. The subscriber is the Knative service that will receive events from the broker.
1.  Click **Add**.