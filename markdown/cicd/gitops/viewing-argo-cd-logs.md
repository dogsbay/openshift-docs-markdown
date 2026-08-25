{%- set _mod_docs_content_type = "ASSEMBLY" %}
# Viewing Argo CD logs {id="viewing-argo-cd-logs"}
{% include "./_attributes/common-attributes.md" %}
{%- set context = "viewing-argo-cd-logs" %}

You can view the Argo CD logs with {{ logging }}. {{ logging_uc }} visualizes the logs on a Kibana dashboard. The {{ clo }} enables logging with Argo CD by default.

{% leveloffset +1 %}{% include "./modules/gitops-storing-and-retrieving-argo-cd-logs.md" %}{% endleveloffset %}