{%- set _mod_docs_content_type = "REFERENCE" %}
# commonConfigs {id="eso-common-config_{{ context }}"}

The `commonConfigs` specifies the common configurations available for all operands managed by the Operator. {._abstract}

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
  <td><code>logLevel</code></td>
  <td><em>integer</em></td>
  <td><code>logLevel</code> supports the value range as defined in the <a href="https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.32/#time-v1-meta"><em>Time</em></a>.</td>
  <td>1</td>
  <td>The maximum number of log levels is 5.<br><br>The minimum number of log levels is 1.</td>
</tr>
<tr>
  <td><code>resources</code></td>
  <td><a href="https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.32/#resourcerequirements-v1-core"><em>ResourceRequirements</em></a>.</td>
  <td><code>resources</code> defines the resource requirements. This cannot be updated. See <a href="https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/">Resource Management for Pods and Containers</a>.</td>
  <td></td>
  <td></td>
</tr>
<tr>
  <td><code>affinity</code></td>
  <td><a href="https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.32/#affinity-v1-core"><em>affinity</em></a>.</td>
  <td><code>affinity</code> is used for setting scheduling affinity rules. See See <a href="https://kubernetes.io/docs/concepts/scheduling-eviction/assign-pod-node/">Assigning Pods to Nodes</a>.</td>
  <td></td>
  <td></td>
</tr>
<tr>
  <td><code>tolerations</code></td>
  <td><a href="https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.32/#toleration-v1-core"><em>toleration array</em></a></td>
  <td><code>tolerations</code> sets the pod tolerations.</td>
  <td></td>
  <td>The maximum number of items is 50.<br><br>The minimum number of items is 0.</td>
</tr>
<tr>
  <td><code>nodeSelector</code></td>
  <td><em>object (keys:string, values:string)</em></td>
  <td><code>nodeSelector</code> defines the scheduling criteria using node labels.</td>
  <td></td>
  <td>The maximum number of properties is 50.<br><br>The minimum number of properties is 0.</td>
</tr>
<tr>
  <td><code>proxy</code></td>
  <td><em>proxyConfig</em></td>
  <td><code>proxy</code> sets the proxy configurations which are made avaiable in operand containers managed by the Operator as environment variables.</td>
  <td></td>
  <td></td>
</tr>
</tbody>
</table>