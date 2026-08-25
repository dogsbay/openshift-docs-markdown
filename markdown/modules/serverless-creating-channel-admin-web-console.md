{%- set _mod_docs_content_type = "PROCEDURE" %}
# Creating a channel by using the Administrator perspective {id="serverless-creating-channel-admin-web-console_{{ context }}"}

After Knative Eventing is installed on your cluster, you can create a channel by using the Administrator perspective.

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

1.  In the **Administrator** perspective of the {{ product_title }} web console, navigate to **Serverless** → **Eventing**.
1.  In the **Create** list, select **Channel**. You will be directed to the **Channel** page.
1.  Select the type of `Channel` object that you want to create in the **Type** list.

    :::note

    Currently only `InMemoryChannel` channel objects are supported by default. Knative channels for Apache Kafka are available if you have installed the Knative broker implementation for Apache Kafka on {{ ServerlessProductName }}.
    
    :::

1.  Click **Create**.