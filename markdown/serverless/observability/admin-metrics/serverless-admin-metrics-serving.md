{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Knative Serving metrics {id="serverless-admin-metrics-serving"}
{%- set context = "serverless-admin-metrics-serving" %}

Cluster administrators can view the following metrics for Knative Serving components.

{% leveloffset +1 %}{% include "./modules/serverless-activator-metrics.md" %}{% endleveloffset %}
{% leveloffset +1 %}{% include "./modules/serverless-autoscaler-metrics.md" %}{% endleveloffset %}
{% leveloffset +1 %}{% include "./modules/serverless-go-metrics.md" %}{% endleveloffset %}