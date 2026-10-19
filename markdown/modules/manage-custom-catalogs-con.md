{%- set _mod_docs_content_type = "CONCEPT" %}
# Manage custom catalogs {id="manage-custom-catalogs_{{ context }}"}

{% if not (openshift_dedicated or openshift_rosa or openshift_rosa_hcp) %}
Cluster administrators
{% endif %}
{% if openshift_dedicated or openshift_rosa or openshift_rosa_hcp %}
Administrators with the `dedicated-admin` role
{%- endif %}
and Operator catalog maintainers can create and manage custom catalogs packaged using the bundle format on Operator Lifecycle Manager (OLM) in {{ product_title }}. {._abstract}


:::important

Kubernetes periodically deprecates certain APIs and removes them in later releases. As a result, Operators are unable to use removed APIs starting with the version of {{ product_title }} that uses the Kubernetes version that removed the API.

:::