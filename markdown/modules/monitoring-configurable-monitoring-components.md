{%- set _mod_docs_content_type = "REFERENCE" %}
# Configurable monitoring components {id="configurable-monitoring-components_{{ context }}"}

{%- set configmap_name = "cluster-monitoring-config" -%}
{%- set alertmanager = "alertmanagerMain" -%}
{%- set prometheus = "prometheusK8s" -%}
{%- set thanosname = "Thanos Querier" -%}
{%- set thanos = "thanosQuerier" %}
{%- set configmap_name = "user-workload-monitoring-config" -%}
{%- set alertmanager = "alertmanager" -%}
{%- set prometheus = "prometheus" -%}
{%- set thanosname = "Thanos Ruler" -%}
{%- set thanos = "thanosRuler" %}

This table shows the monitoring components you can configure and the keys used to specify the components in the `{{ configmap_name }}`{minja} config map.

{%- if openshift_dedicated or openshift_rosa or openshift_rosa_hcp %}

:::warning

Do not modify the monitoring components in the `cluster-monitoring-config` `ConfigMap` object. Red&#160;Hat Site Reliability Engineers (SRE) use these components to monitor the core cluster components and Kubernetes services.

:::

{%- endif %}

**Configurable monitoring components for user-defined projects**

| Component | {{ configmap_name }} config map key |
| --- | --- |
| Prometheus Operator | `prometheusOperator` |
| Prometheus | `{{ prometheus }}`{minja} |
| Alertmanager | `{{ alertmanager }}`{minja} |
| {{ thanosname }} | `{{ thanos }}`{minja} |
| kube-state-metrics | `kubeStateMetrics` |
| monitoring-plugin | `monitoringPlugin` |
| openshift-state-metrics | `openshiftStateMetrics` |
| Telemeter Client | `telemeterClient` |
| Metrics Server | `metricsServer` |

{% if not (openshift_dedicated or openshift_rosa) %}

:::warning

Different configuration changes to the `ConfigMap` object result in different outcomes:

*   The pods are not redeployed. Therefore, there is no service outage.
*   The affected pods are redeployed:

{% if not openshift_rosa_hcp %}
    *   For single-node clusters, this results in temporary service outage.
{% endif %}
    *   For multi-node clusters, because of high-availability, the affected pods are gradually rolled out and the monitoring stack remains available.
    *   Configuring and resizing a persistent volume always results in a service outage, regardless of high availability.

Each procedure that requires a change in the config map includes its expected outcome.

:::

{% endif %}

{%- set configmap_name = "" -%}
{%- set alertmanager = "" -%}
{%- set prometheus = "" -%}
{%- set thanosname = "" -%}
{%- set thanos = "" -%}