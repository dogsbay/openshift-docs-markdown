{%- set _mod_docs_content_type = "CONCEPT" %}
# Installer-provisioned DNS requirements {id="installation-installer-user-infra_{{ context }}"}

In {{ product_title }} deployments, you must ensure that cluster components meet certain DNS name resolution criteria for internal communication, certificate validation, and automated node discovery purposes. {._abstract}

{% leveloffset +1 %}{% include "./snippets/dns-requirements.md" %}{% endleveloffset %}