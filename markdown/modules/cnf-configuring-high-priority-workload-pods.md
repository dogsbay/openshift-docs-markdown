{%- set _mod_docs_content_type = "PROCEDURE" %}
# Disabling power saving mode for high priority pods {id="cnf-configuring-high-priority-workload-pods_{{ context }}"}

To protect high priority workloads when using power saving configurations on a node, apply performance settings at the pod level. This ensures that the configuration applies to all cores used by the pod, maintaining performance stability. {._abstract}

By disabling P-states and C-states at the pod level, you can configure high priority workloads for best performance and lowest latency.

**Configuration for high priority workloads**

<table>
<thead>
<tr>
  <th>Annotation</th>
  <th>Possible Values</th>
  <th>Description</th>
</tr>
</thead>
<tbody>
<tr>
  <td><code>cpu-c-states.crio.io:</code></td>
  <td><ul><li><code>"enable"</code></li><li><code>"disable"</code></li><li><code>"max_latency:microseconds"</code></li></ul></td>
  <td>This annotation allows you to enable or disable C-states for each CPU. Alternatively, you can also specify a maximum latency in microseconds for the C-states. For example, enable C-states with a maximum latency of 10 microseconds with the setting <code>cpu-c-states.crio.io</code>: <code>"max_latency:10"</code>. Set the value to <code>"disable"</code> to provide the best performance for a pod.</td>
</tr>
<tr>
  <td><code>cpu-freq-governor.crio.io:</code></td>
  <td>Any supported <code>cpufreq governor</code>.</td>
  <td>Sets the <code>cpufreq</code> governor for each CPU. The <code>"performance"</code> governor is recommended for high priority workloads.</td>
</tr>
</tbody>
</table>

**Prerequisites**

*   You have configured power saving in the performance profile for the node where the high priority workload pods are scheduled.

**Procedure**

1.  Add the required annotations to your high priority workload pods. The annotations override the `default` settings.
    ```yaml title="Example high priority workload annotation"
    apiVersion: v1
    kind: Pod
    metadata:
      #...
      annotations:
        #...
        cpu-c-states.crio.io: "disable"
        cpu-freq-governor.crio.io: "performance"
        #...
      #...
    spec:
      #...
      runtimeClassName: performance-<profile_name>
      #...
    ```
1.  Restart the pods to apply the annotation.