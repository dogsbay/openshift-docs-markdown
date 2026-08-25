{%- set _mod_docs_content_type = "CONCEPT" %}
{%- if not openshift_origin %}
# Installing {{ sno }} on {{ gcp_short }} {id="installing-sno-on-gcp_{{ context }}"}

{% endif %}
{% if openshift_origin %}
# Installing {{ sno_okd }} on {{ gcp_short }} {id="_installing_sno_okd_on_gcp_short"}

{% endif %}

Installing a single-node cluster on {{ gcp_short }} requires installer-provisioned installation using the "Installing a cluster on {{ gcp_short }} with customizations" procedure.