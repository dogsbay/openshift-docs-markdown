{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Validate traffic and configure telemetry {id="dpf-validation-telemetry"}
{%- set context = "dpf-validation-telemetry" -%}
{%- set dpf_version = "26.4.1" %}

After provisioning the DPUs and verifying system readiness, validate end-to-end traffic flow and configure DPU telemetry observability. {._abstract}

{% leveloffset +1 %}{% include "./modules/nw-dpf-deploying-traffic-test-pods.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/nw-dpf-running-traffic-validation.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/nw-dpf-dts-observability-overview.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/nw-dpf-enabling-user-workload-monitoring.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/nw-dpf-configuring-dts-servicemonitor.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/nw-dpf-installing-dts-console-dashboard.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/nw-dpf-installing-grafana-for-dts.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/nw-dpf-viewing-dts-metrics.md" %}{% endleveloffset %}