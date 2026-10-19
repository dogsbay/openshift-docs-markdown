{%- set _mod_docs_content_type = "CONCEPT" %}
# Understand Operators in multitenant clusters {id="understand-operators-in-multitenant-clusters-con_{{ context }}"}

The default behavior for Operator Lifecycle Manager (OLM) aims to provide simplicity during Operator installation. However, this behavior can lack flexibility, especially in multitenant clusters. In order for multiple tenants on
{%- if not (openshift_rosa or openshift_rosa_hcp or openshift_dedicated) %}
an {{ product_title }}
{%- endif %}
{%- if openshift_rosa or openshift_rosa_hcp or openshift_dedicated %}
a {{ product_title }}
{%- endif %}
cluster to use an Operator, the default behavior of OLM requires that administrators install the Operator in **All namespaces** mode, which can be considered to violate the principle of least privilege. {._abstract}

Consider the following scenarios to determine which Operator installation workflow works best for your environment and requirements.