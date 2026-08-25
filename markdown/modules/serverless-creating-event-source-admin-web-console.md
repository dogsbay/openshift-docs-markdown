{%- set _mod_docs_content_type = "PROCEDURE" %}
# Creating an event source by using the Administrator perspective {id="serverless-creating-event-source-admin-web-console_{{ context }}"}

A Knative _event source_ can be any Kubernetes object that generates or imports cloud events, and relays those events to another endpoint, known as a _sink_.

**Prerequisites**

*   The {{ ServerlessOperatorName }} and Knative Eventing are installed on your {{ product_title }} cluster.
*   You have logged in to the web console and are in the **Administrator** perspective.

{% if openshift_enterprise %}
*   You have cluster administrator permissions for {{ product_title }}.
{% endif %}

{% if openshift_dedicated or openshift_rosa %}
*   You have cluster or dedicated administrator permissions for {{ product_title }}.
{% endif %}

**Procedure**

1.  In the **Administrator** perspective of the {{ product_title }} web console, navigate to **Serverless** -> **Eventing**.
1.  In the **Create** list, select **Event Source**. You will be directed to the **Event Sources** page.
1.  Select the event source type that you want to create.