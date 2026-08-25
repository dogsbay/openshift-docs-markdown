{%- set _mod_docs_content_type = "CONCEPT" %}
# Dashboard customization {id="hcp-customize-dashboards_{{ context }}"}

To generate dashboards for each hosted cluster, the HyperShift Operator uses a template that is stored in the `monitoring-dashboard-template` config map in the Operator namespace (`hypershift`). This template contains a set of Grafana panels that contain the metrics for the dashboard. {._abstract}

You can edit the content of the config map to customize the dashboards.

When a dashboard is generated, the following strings are replaced with values that correspond to a specific hosted cluster:

| Name | Description |
| --- | --- |
| `__NAME__` | The name of the hosted cluster |
| `__NAMESPACE__` | The namespace of the hosted cluster |
| `__CONTROL_PLANE_NAMESPACE__` | The namespace where the control plane pods of the hosted cluster are placed |
| `__CLUSTER_ID__` | The UUID of the hosted cluster, which matches the `_id` label of the hosted cluster metrics |

To set a custom cluster identifier when you create the hosted cluster, see "Customized hosted cluster identifiers".