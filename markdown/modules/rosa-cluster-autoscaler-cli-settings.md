{%- set _mod_docs_content_type = "REFERENCE" %}
# Cluster autoscaling parameters using the ROSA CLI {id="rosa-cluster-cli-autoscale-parameters_{{ context }}"}

You can add the following parameters to the cluster creation command to configure autoscaler parameters when using the {{ rosa_cli_first }}. {._abstract}

**Configurable autoscaler parameters available with the {{ rosa_cli }}**

<table>
<thead>
<tr>
  <th>Setting</th>
  <th>Description</th>
  <th>Type or Range</th>
  <th>Example/Instruction</th>
</tr>
</thead>
<tbody>
<tr>
  {% if openshift_rosa %}<td><code>--autoscaler-balance-similar-node-groups</code></td>{% endif %}
  {% if openshift_rosa %}<td>Identify node groups with the same instance type and label set, and try to balance respective sizes of those node groups.</td>{% endif %}
  {% if openshift_rosa %}<td><code>boolean</code></td>{% endif %}
  {% if openshift_rosa %}<td>Add it to set to true, omit the option to set to false.</td>{% endif %}
</tr>
<tr>
  {% if openshift_rosa %}<td><code>--autoscaler-skip-nodes-with-local-storage</code></td>{% endif %}
  {% if openshift_rosa %}<td>If set, the cluster autoscaler does not delete nodes with pods that have local storage, for example, EmptyDir or HostPath.</td>{% endif %}
  {% if openshift_rosa %}<td><code>boolean</code></td>{% endif %}
  {% if openshift_rosa %}<td>Add it to set to true, omit the option to set to false.</td>{% endif %}
</tr>
<tr>
  {% if openshift_rosa %}<td><code>--autoscaler-log-verbosity <em>int</em></code></td>{% endif %}
  {% if openshift_rosa %}<td>Autoscaler log level. Replace <em>int</em> in the command with the number you want to use.</td>{% endif %}
  {% if openshift_rosa %}<td><code>integer</code></td>{% endif %}
  {% if openshift_rosa %}<td><code>--autoscaler-log-verbosity 4</code></td>{% endif %}
</tr>
<tr>
  <td><code>--autoscaler-max-pod-grace-period <em>int</em></code></td>
  <td>Gives pods graceful termination time before scaling down, measured in seconds. Replace <em>int</em> in the command with the number of seconds you want to use.</td>
  <td><code>integer</code></td>
  <td><code>--autoscaler-max-pod-grace-period 0</code></td>
</tr>
<tr>
  <td><code>--autoscaler-pod-priority-threshold <em>int</em></code></td>
  <td>The priority that a pod must exceed to cause the cluster autoscaler to deploy additional nodes. Replace <em>int</em> in the command with the number you want to use, can be negative.</td>
  <td><code>integer</code></td>
  <td><code>--autoscaler-pod-priority-threshold -10</code></td>
</tr>
<tr>
  {% if openshift_rosa %}<td><code>--autoscaler-gpu-limit <em>stringArray</em></code></td>{% endif %}
  {% if openshift_rosa %}<td>Minimum and maximum number of different GPUs in cluster. Cluster autoscaler does not scale the cluster less than or greater than these numbers. The format must be a comma-separated list of "<gpu_type>,<min>,<max>".</td>{% endif %}
  {% if openshift_rosa %}<td><code>array</code></td>{% endif %}
  {% if openshift_rosa %}<td><code>--autoscaler-gpu-limit nvidia.com/gpu,0,10  --autoscaler-gpu-limit amd.com/gpu,1,5</code></td>{% endif %}
</tr>
<tr>
  {% if openshift_rosa %}<td><code>--autoscaler-ignore-daemonsets-utilization</code></td>{% endif %}
  {% if openshift_rosa %}<td>If set, the cluster-autoscaler ignores daemon set pods when calculating resource utilization for scaling down.</td>{% endif %}
  {% if openshift_rosa %}<td><code>boolean</code></td>{% endif %}
  {% if openshift_rosa %}<td>Add it to set to true, omit the option to set to false.</td>{% endif %}
</tr>
<tr>
  <td><code>--autoscaler-max-node-provision-time <em>string</em></code></td>
  <td>Maximum time that the cluster autoscaler waits for a node to be provisioned. Replace <em>string</em> in the command with an integer and time unit (ns,us,µs,ms,s,m,h).</td>
  <td><code>string</code></td>
  <td><code>--autoscaler-max-node-provision-time 35m</code></td>
</tr>
<tr>
  {% if openshift_rosa %}<td><code>--autoscaler-balancing-ignored-labels <em>strings</em></code></td>{% endif %}
  {% if openshift_rosa %}<td>A comma-separated list of label keys that the cluster autoscaler should ignore when comparing node groups for similarity. Replace <em>strings</em> in the command with the relevant labels..</td>{% endif %}
  {% if openshift_rosa %}<td><code>string</code></td>{% endif %}
  {% if openshift_rosa %}<td><code>--autoscaler-balancing-ignored-labels topology.ebs.csi.aws.com/zone,alpha.eksctl.io/instance-id</code></td>{% endif %}
</tr>
<tr>
  <td><code>--autoscaler-max-nodes-total <em>int</em></code></td>
  <td>Maximum amount of nodes in the cluster, including the autoscaled nodes. Replace <em>int</em> in the command with the number you want to use.</td>
  <td><code>integer</code></td>
  <td><code>--autoscaler-max-nodes-total 180</code></td>
</tr>
<tr>
  {% if openshift_rosa %}<td><code>--autoscaler-min-cores <em>int</em></code></td>{% endif %}
  {% if openshift_rosa %}<td>Minimum number of cores to deploy in the cluster. Replace <em>int</em> in the command with the number you want to use.</td>{% endif %}
  {% if openshift_rosa %}<td><code>integer</code></td>{% endif %}
  {% if openshift_rosa %}<td><code>--autoscaler-min-cores 0</code></td>{% endif %}
</tr>
<tr>
  {% if openshift_rosa %}<td><code>--autoscaler-max-cores <em>int</em></code></td>{% endif %}
  {% if openshift_rosa %}<td>Maximum number of cores to deploy in the cluster. Replace <em>int</em> in the command with the number you want to use.</td>{% endif %}
  {% if openshift_rosa %}<td><code>integer</code></td>{% endif %}
  {% if openshift_rosa %}<td><code>--autoscaler-max-cores 100</code></td>{% endif %}
</tr>
<tr>
  {% if openshift_rosa %}<td><code>--autoscaler-min-memory <em>int</em></code></td>{% endif %}
  {% if openshift_rosa %}<td>Minimum amount of memory, in GiB, in the cluster. Replace <em>int</em> in the command with the number you want to use.</td>{% endif %}
  {% if openshift_rosa %}<td><code>integer</code></td>{% endif %}
  {% if openshift_rosa %}<td><code>--autoscaler-min-memory 0</code></td>{% endif %}
</tr>
<tr>
  {% if openshift_rosa %}<td><code>--autoscaler-max-memory <em>int</em></code></td>{% endif %}
  {% if openshift_rosa %}<td>Maximum amount of memory, in GiB, in the cluster. Replace <em>int</em> in the command with the number you want to use.</td>{% endif %}
  {% if openshift_rosa %}<td><code>integer</code></td>{% endif %}
  {% if openshift_rosa %}<td><code>--autoscaler-max-memory 4096</code></td>{% endif %}
</tr>
<tr>
  {% if openshift_rosa %}<td><code>--autoscaler-scale-down-enabled</code></td>{% endif %}
  {% if openshift_rosa %}<td>If set, the cluster autoscaler should scale down the cluster.</td>{% endif %}
  {% if openshift_rosa %}<td><code>boolean</code></td>{% endif %}
  {% if openshift_rosa %}<td>Add it to set to true, omit the option to set to false.</td>{% endif %}
</tr>
<tr>
  {% if openshift_rosa %}<td><code>--autoscaler-scale-down-unneeded-time <em>string</em></code></td>{% endif %}
  {% if openshift_rosa %}<td>How long a node should be unneeded before it is eligible for scale down. Replace <em>string</em> in the command with an integer and time unit (ns,us,µs,ms,s,m,h).</td>{% endif %}
  {% if openshift_rosa %}<td><code>string</code></td>{% endif %}
  {% if openshift_rosa %}<td><code>--autoscaler-scale-down-unneeded-time 1h</code></td>{% endif %}
</tr>
<tr>
  {% if openshift_rosa %}<td><code>--autoscaler-scale-down-utilization-threshold <em>float</em></code></td>{% endif %}
  {% if openshift_rosa %}<td>Node utilization level, defined as sum of requested resources divided by capacity, below which a node can be considered for scale down. Value must be between 0 and 1.</td>{% endif %}
  {% if openshift_rosa %}<td><code>float</code></td>{% endif %}
  {% if openshift_rosa %}<td><code>--autoscaler-scale-down-utilization-threshold 0.5</code></td>{% endif %}
</tr>
<tr>
  {% if openshift_rosa %}<td><code>--autoscaler-scale-down-delay-after-add <em>string</em></code></td>{% endif %}
  {% if openshift_rosa %}<td>How long after scale up that scale down evaluation resumes. Replace <em>string</em> in the command with an integer and time unit (ns,us,µs,ms,s,m,h).</td>{% endif %}
  {% if openshift_rosa %}<td><code>string</code></td>{% endif %}
  {% if openshift_rosa %}<td><code>--autoscaler-scale-down-delay-after-add 1h</code></td>{% endif %}
</tr>
<tr>
  {% if openshift_rosa %}<td><code>--autoscaler-scale-down-delay-after-delete <em>string</em></code></td>{% endif %}
  {% if openshift_rosa %}<td>How long after node deletion that scale down evaluation resumes. Replace <em>string</em> in the command with an integer and time unit (ns,us,µs,ms,s,m,h).</td>{% endif %}
  {% if openshift_rosa %}<td><code>string</code></td>{% endif %}
  {% if openshift_rosa %}<td><code>--autoscaler-scale-down-delay-after-delete 1h</code></td>{% endif %}
</tr>
<tr>
  {% if openshift_rosa %}<td><code>--autoscaler-scale-down-delay-after-failure <em>string</em></code></td>{% endif %}
  {% if openshift_rosa %}<td>How long after scale down failure that scale down evaluation resumes. Replace <em>string</em> in the command with an integer and time unit (ns,us,µs,ms,s,m,h).</td>{% endif %}
  {% if openshift_rosa %}<td><code>string</code></td>{% endif %}
  {% if openshift_rosa %}<td><code>--autoscaler-scale-down-delay-after-failure 1h</code></td>{% endif %}
</tr>
</tbody>
</table>