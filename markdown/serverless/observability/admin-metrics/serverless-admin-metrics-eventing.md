{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Knative Eventing metrics {id="serverless-admin-metrics-eventing"}
{%- set context = "serverless-admin-metrics-eventing" %}

Cluster administrators can view the following metrics for Knative Eventing components.

By aggregating the metrics from HTTP code, events can be separated into two categories; successful events (2xx) and failed events (5xx).

{% leveloffset +1 %}{% include "./modules/serverless-broker-ingress-metrics.md" %}{% endleveloffset %}
{% leveloffset +1 %}{% include "./modules/serverless-broker-filter-metrics.md" %}{% endleveloffset %}
{% leveloffset +1 %}{% include "./modules/serverless-inmemory-dispatch-metrics.md" %}{% endleveloffset %}
{% leveloffset +1 %}{% include "./modules/serverless-event-source-metrics.md" %}{% endleveloffset %}