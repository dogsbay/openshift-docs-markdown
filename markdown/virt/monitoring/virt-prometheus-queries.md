---
title: Prometheus queries for virtual resources
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Prometheus queries for virtual resources {id="virt-prometheus-queries"}
{%- set context = "virt-prometheus-queries" -%}
{%- set toclevels = "4" %}

Monitor the consumption of cluster infrastructure resources by using the metrics provided by {{ VirtProductName }}. These metrics are also used to query live migration status. {._abstract}


:::note

{%- if not (openshift_rosa or openshift_dedicated or openshift_rosa_hcp) %}
*   To use the vCPU metric, apply the `schedstats=enable` kernel argument to the `MachineConfig` object. This kernel argument enables scheduler statistics used for debugging and performance tuning and adds a minor additional load to the scheduler.
{%- endif %}
*   For guest memory swapping queries to return data, enable memory swapping on the virtual guests.

:::


{% leveloffset +1 %}{% include "./modules/monitoring-querying-metrics-for-all-projects-with-mon-dashboard.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/monitoring-querying-metrics-for-user-defined-projects-with-mon-dashboard.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/virt-querying-metrics.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/virt-live-migration-metrics.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/virt-node-memory-overcommit-dashboard.md" %}{% endleveloffset %}

## Additional resources {id="additional-resources_{{ context }}" ._additional-resources}
*   [KubeVirt components metrics](https://github.com/kubevirt/monitoring/blob/main/docs/metrics.md)
{%- if not (openshift_rosa or openshift_dedicated or openshift_rosa_hcp) %}
*   [Adding kernel arguments to nodes](/machine_configuration/machine-configs-configure#nodes-nodes-kernel-arguments_machine-configs-configure)
{%- endif %}
{%- if not (openshift_rosa_hcp or openshift_rosa or openshift_dedicated) %}
*   [About {{ product_title }} monitoring](https://docs.redhat.com/en/documentation/monitoring_stack_for_red_hat_openshift/latest/html/about_monitoring/about-ocp-monitoring)
{%- endif %}

{% if openshift_dedicated or openshift_rosa %}
*   [About {{ product_title }} monitoring](/observability/monitoring/about-ocp-monitoring/about-ocp-monitoring#about-ocp-monitoring)
{% endif %}
*   [Querying Prometheus](https://prometheus.io/docs/prometheus/latest/querying/basics/)
*   [Prometheus query examples](https://prometheus.io/docs/prometheus/latest/querying/examples/)