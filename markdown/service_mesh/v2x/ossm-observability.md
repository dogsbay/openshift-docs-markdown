---
title: "Metrics, logs, and traces"
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Metrics, logs, and traces {id="ossm-observability"}
{%- set context = "observability" %}

Once you have added your application to the mesh, you can observe the data flow through your application. If you do not have your own application installed, you can see how observability works in {{ SMProductName }} by installing the [Bookinfo sample application](/service_mesh/v2x/prepare-to-deploy-applications-ossm#ossm-tutorial-bookinfo-overview_ossm-create-mesh).

{% leveloffset +1 %}{% include "./modules/ossm-observability-addresses.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/ossm-kiali-accessing-console.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/ossm-observability-visual.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/ossm-kiali-viewing-logs.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/ossm-kiali-viewing-metrics.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/ossm-distr-tracing.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/ossm-configuring-distr-tracing-tempo.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/ossm-config-external-jaeger.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/ossm-config-sampling.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/ossm-jaeger-accessing-console.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/ossm-access-grafana.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/ossm-access-prometheus.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/ossm-integrating-with-user-workload-monitoring.md" %}{% endleveloffset %}

{%- if not (openshift_rosa or openshift_rosa_hcp or openshift_dedicated) %}
## Additional resources {id="additional-resources_user-workload-monitoring" ._additional-resources}

*   [Enabling monitoring for user-defined projects](https://docs.redhat.com/en/documentation/monitoring_stack_for_red_hat_openshift/latest/html/configuring_user_workload_monitoring/preparing-to-configure-the-monitoring-stack-uwm#enabling-monitoring-for-user-defined-projects-uwm_preparing-to-configure-the-monitoring-stack-uwm)
*   [Installing the {{ DTShortName }}](https://docs.redhat.com/en/documentation/red_hat_openshift_distributed_tracing_platform/latest/html/installing_the_distributed_tracing_platform/distr-tracing-tempo-installing)
*   [Installing the Red Hat build of OpenTelemetry](https://docs.redhat.com/en/documentation/red_hat_build_of_opentelemetry/latest/html/installing_red_hat_build_of_opentelemetry/install-otel)
{%- endif %}