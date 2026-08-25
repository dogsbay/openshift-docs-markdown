{%- set _mod_docs_content_type = "REFERENCE" %}
# Components for monitoring user-defined projects {id="components-for-monitoring-user-defined-projects_{{ context }}"}

{{ product_title }}
{%- if not (openshift_dedicated or openshift_rosa or openshift_rosa_hcp) %}
{{ product_version }}
{%- endif %}
includes an optional enhancement to the monitoring stack that helps you monitor services and pods in user-defined projects. This feature includes the following components:

***Components for monitoring user-defined projects***

<table>
<thead>
<tr>
  <th>Component</th>
  <th>Description</th>
</tr>
</thead>
<tbody>
<tr>
  <td>Prometheus Operator</td>
  <td>The Prometheus Operator in the <code>openshift-user-workload-monitoring</code> project creates, configures, and manages Prometheus and Thanos Ruler instances in the same project.</td>
</tr>
<tr>
  <td>Prometheus</td>
  <td>Prometheus is the monitoring system that provides monitoring for user-defined projects. Prometheus sends alerts to Alertmanager for processing.</td>
</tr>
<tr>
  <td>Thanos Ruler</td>
  <td>The Thanos Ruler is a rule evaluation engine for Prometheus that is deployed as a separate process. In {{ product_title }}</td>
</tr>
<tr>
  <td>Alertmanager</td>
  <td>The Alertmanager service handles alerts received from Prometheus and Thanos Ruler. Alertmanager is also responsible for sending user-defined alerts to external notification systems. Deploying this service is optional.</td>
</tr>
</tbody>
</table>

{% if not (openshift_dedicated or openshift_rosa) %}

:::note

The components in the preceding table are deployed after you enable monitoring for user-defined projects.

:::

{% endif %}

The monitoring stack monitors all components for user-defined projects. The components are automatically updated when {{ product_title }} is updated.