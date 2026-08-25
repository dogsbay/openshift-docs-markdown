{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
{% include "./_attributes/attributes-openshift-dedicated.md" %}
# Troubleshooting log forwarding {id="log-forwarding-troubleshooting"}
{%- set context = "log-forwarding-troubleshooting" %}

{% leveloffset +1 %}{% include "./modules/redeploying-fluentd-pods.md" %}{% endleveloffset %}
{% leveloffset +1 %}{% include "./modules/loki-rate-limit-errors.md" %}{% endleveloffset %}