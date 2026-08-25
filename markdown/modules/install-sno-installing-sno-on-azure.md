{%- set _mod_docs_content_type = "CONCEPT" %}
{%- if not openshift_origin %}
# Installing {{ sno }} on Azure {id="installing-sno-on-azure_{{ context }}"}

{% endif %}
{% if openshift_origin %}
# Installing {{ sno_okd }} on Azure {id="_installing_sno_okd_on_azure"}

{% endif %}

Installing a single-node cluster on Azure requires installer-provisioned installation using the "Installing a cluster on Azure with customizations" procedure.