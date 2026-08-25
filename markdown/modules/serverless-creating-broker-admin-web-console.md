{%- set _mod_docs_content_type = "PROCEDURE" %}
# Creating a broker by using the Administrator perspective {id="serverless-creating-broker-admin-web-console_{{ context }}"}

{% include "./snippets/serverless-brokers-intro.md" %}

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
1.  In the **Create** list, select **Broker**. You will be directed to the **Create Broker** page.
1.  Optional: Modify the YAML configuration for the broker.
1.  Click **Create**.