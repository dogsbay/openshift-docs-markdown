{%- set _mod_docs_content_type = "CONCEPT" %}
# Manage catalogs with {{ olmv0 }} {id="manage-catalogs-with-olmv0-con_{{ context }}"}

{% if not (openshift_dedicated or openshift_rosa or openshift_rosa_hcp) %}
Cluster administrators
{% endif %}
{% if openshift_dedicated or openshift_rosa or openshift_rosa_hcp %}
Administrators with the `dedicated-admin` role
{%- endif %}
and Operator catalog maintainers can create and manage custom catalogs packaged using the bundle format on Operator Lifecycle Manager (OLM) in {{ product_title }}.