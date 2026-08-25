{%- set _mod_docs_content_type = "REFERENCE" %}
# Get support {id="support_{{ context }}"}

Red&#160;Hat offers several support channels to help you troubleshoot issues and get the most from {{ product_title }}. {._abstract}

From the Red&#160;Hat Customer Portal, you can:

*   Search or browse through the Red&#160;Hat Knowledgebase of articles and solutions about Red&#160;Hat products.
*   Submit a support case to Red&#160;Hat Support.
*   Access other product documentation.

{% if not microshift %}
To identify issues with your cluster, you can use {{ red_hat_lightspeed }} in {{ cluster_manager_url }}. {{ red_hat_lightspeed }} provides details about issues and, if available, information about how to solve a problem.

To suggest improvements or report errors, give specific details such as the section name and {{ product_title }} version.
{% endif %}