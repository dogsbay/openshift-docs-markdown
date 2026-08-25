{%- set _mod_docs_content_type = "CONCEPT" %}
# About the cluster API {id="bare-metal-about-the-cluster-api_{{ context }}"}

{{ product_title }} 4.19 and later releases can manage machines by using the Cluster API. 

{%- set FeatureName = "Managing machines with the Cluster API" %}
{% include "./snippets/technology-preview.md" %}

You can use the Cluster API to perform compute node provisioning management actions after the cluster installation finishes. The Cluster API allows dynamic management of compute node machine sets and machines. However, there is no support for control plane machines.