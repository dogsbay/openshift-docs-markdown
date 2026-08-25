{%- set _mod_docs_content_type = "REFERENCE" %}
# deploymentConfig {id="eso-deployment-config_{{ context }}"}

The `deploymentConfig` field defines configuration overrides for a Kubernetes Deployment resource. {._abstract}

<table>
<thead>
<tr>
  <th>Field</th>
  <th>Type</th>
  <th>Description</th>
  <th>Default</th>
  <th>Validation</th>
</tr>
</thead>
<tbody>
<tr>
  <td><code>revisionHistoryLimit</code></td>
  <td><em>integer</em></td>
  <td><code>revisionHistoryLimit</code> specifies the number of old <code>ReplicaSets</code> to retain for rollback purposes. This allows rolling back to previous deployment versions using the command <code>oc rollout undo</code>. Must be at least 1 to ensure rollback capability.</td>
  <td>10</td>
  <td>The maximum value is 50.<br><br>The minimum value is 1.</td>
</tr>
</tbody>
</table>