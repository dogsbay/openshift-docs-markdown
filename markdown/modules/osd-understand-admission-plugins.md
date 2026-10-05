{%- set _mod_docs_content_type = "CONCEPT" %}
# Understand admission plugins for API request regulation {id="osd-understand-admission-plugins_{{ context }}"}

Admission plugins intercept requests to the {{ product_title }} API server after authentication and authorization, and can validate or mutate them before they are persisted.
Understanding the default and webhook-based plugins helps you regulate what enters your cluster.