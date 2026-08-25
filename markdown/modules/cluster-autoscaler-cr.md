{%- set _mod_docs_content_type = "REFERENCE" %}
# Cluster autoscaler resource definition {id="cluster-autoscaler-cr_{{ context }}"}

This `ClusterAutoscaler` resource definition shows the parameters and sample values for the cluster autoscaler. {._abstract}


:::note

When you change the configuration of an existing cluster autoscaler, it restarts.

:::


```yaml
apiVersion: "autoscaling.openshift.io/v1"
kind: "ClusterAutoscaler"
metadata:
  name: "default"
spec:
  podPriorityThreshold: -10
  resourceLimits:
    maxNodesTotal: 24
    cores:
      min: 8
      max: 128
    memory:
      min: 4
      max: 256
    gpus:
    - type: <gpu_type>
      min: 0
      max: 16
  logVerbosity: 4
  scaleDown:
    cordonNodeBeforeTerminating: Enabled
    enabled: true
    delayAfterAdd: 10m
    delayAfterDelete: 5m
    delayAfterFailure: 30s
    unneededTime: 5m
    utilizationThreshold: "0.4"
  scaleUp:
    newPodScaleUpDelay: "10s"
  expanders: ["Random"]
```

***Cluster autoscaler parameters***

<table>
<thead>
<tr>
  <th>Parameter</th>
  <th>Description</th>
</tr>
</thead>
<tbody>
<tr>
  <td><code>podPriorityThreshold</code></td>
  <td>Specify the priority that a pod must exceed to cause the cluster autoscaler to deploy additional nodes. Enter a 32-bit integer value. The <code>podPriorityThreshold</code> value is compared to the value of the <code>PriorityClass</code> that you assign to each pod.</td>
</tr>
<tr>
  <td><code>maxNodesTotal</code></td>
  <td>Specify the maximum number of nodes to deploy. This value is the total number of machines that are deployed in your cluster, not just the ones that the autoscaler controls. Ensure that this value is large enough to account for all of your control plane and compute machines and the total number of replicas that you specify in your <code>MachineAutoscaler</code> resources.</td>
</tr>
<tr>
  <td><code>cores.min</code></td>
  <td>Specify the minimum number of cores to deploy in the cluster.</td>
</tr>
<tr>
  <td><code>cores.max</code></td>
  <td>Specify the maximum number of cores to deploy in the cluster.</td>
</tr>
<tr>
  <td><code>memory.min</code></td>
  <td>Specify the minimum amount of memory, in GiB, in the cluster.</td>
</tr>
<tr>
  <td><code>memory.max</code></td>
  <td>Specify the maximum amount of memory, in GiB, in the cluster.</td>
</tr>
<tr>
  <td><code>gpus.type</code></td>
  <td>Optional: To configure the cluster autoscaler to deploy GPU-enabled nodes, specify a <code>type</code> value.</td>
</tr>
<tr>
  <td><code>gpus.min</code></td>
  <td>Specify the minimum number of GPUs of the specified type to deploy in the cluster.</td>
</tr>
<tr>
  <td><code>gpus.max</code></td>
  <td>Specify the maximum number of GPUs of the specified type to deploy in the cluster.</td>
</tr>
<tr>
  <td><code>logVerbosity</code></td>
  <td>Specify the logging verbosity level between <code>0</code> and <code>10</code>. The following log level thresholds are provided for guidance:<br><br><ul><li><code>1</code>: (Default) Basic information about changes.</li><li><code>4</code>: Debug-level verbosity for troubleshooting typical issues.</li><li><code>9</code>: Extensive, protocol-level debugging information.</li></ul>If you do not specify a value, the default value of <code>1</code> is used.</td>
</tr>
<tr>
  <td><code>scaleDown</code></td>
  <td>In this section, you can specify the period to wait for each action by using any valid <a href="https://golang.org/pkg/time/#ParseDuration">ParseDuration</a> interval, including <code>ns</code>, <code>us</code>, <code>ms</code>, <code>s</code>, <code>m</code>, and <code>h</code>.</td>
</tr>
<tr>
  <td><code>scaleDown.cordonNodeBeforeTerminating</code></td>
  <td>Optional: Specify whether the cluster autoscaler should cordon a node before removing that node by using one of the following values:<br><br><ul><li><code>Enabled</code>: The cluster autoscaler cordons the node before draining any pods and removing that node.</li><li><code>Disabled</code>: The cluster autoscaler does not cordon the node before draining any pods and removing that node. This is the default.</li></ul></td>
</tr>
<tr>
  <td><code>scaleDown.enabled</code></td>
  <td>Specify whether the cluster autoscaler can remove unnecessary nodes.</td>
</tr>
<tr>
  <td><code>scaleDown.delayAfterAdd</code></td>
  <td>Optional: Specify the period to wait before deleting a node after a node has recently been <em>added</em>. If you do not specify a value, the default value of <code>10m</code> is used.</td>
</tr>
<tr>
  <td><code>scaleDown.delayAfterDelete</code></td>
  <td>Optional: Specify the period to wait before deleting a node after a node has recently been <em>deleted</em>. If you do not specify a value, the default value of <code>0s</code> is used.</td>
</tr>
<tr>
  <td><code>scaleDown.delayAfterFailure</code></td>
  <td>Optional: Specify the period to wait before deleting a node after a scale down failure occurred. If you do not specify a value, the default value of <code>3m</code> is used.</td>
</tr>
<tr>
  <td><code>scaleDown.unneededTime</code></td>
  <td>Optional: Specify a period of time before an unnecessary node is eligible for deletion. If you do not specify a value, the default value of <code>10m</code> is used.</td>
</tr>
<tr>
  <td><code>scaleDown.utilizationThreshold</code></td>
  <td>Optional:  Specify the <em>node utilization level</em>. Nodes below this utilization level are eligible for deletion.<br><br>The node utilization level is the sum of the requested resources divided by the allocated resources for the node, and must be a value greater than <code>"0"</code> but less than <code>"1"</code>. If you do not specify a value, the cluster autoscaler uses a default value of <code>"0.5"</code>, which corresponds to 50% utilization. You must express this value as a string.</td>
</tr>
<tr>
  <td><code>scaleUp</code></td>
  <td>In this section, you can specify the period to wait before recognizing newly pending pods by using any valid <a href="https://golang.org/pkg/time/#ParseDuration">ParseDuration</a> interval, including <code>ns</code>, <code>us</code>, <code>ms</code>, <code>s</code>, <code>m</code>, and <code>h</code>.</td>
</tr>
<tr>
  <td><code>scaleUp.newPodScaleUpDelay</code></td>
  <td>Optional: Specify the period to ignore a new unschedulable pod before adding a new node. If you do not specify a value, the default value of <code>0s</code> is used.</td>
</tr>
<tr>
  <td><code>expanders</code></td>
  <td>Optional: Specify any expanders that you want the cluster autoscaler to use.The following values are valid:<br><br><ul><li><code>LeastWaste</code>: Selects the machine set that minimizes the idle CPU after scaling.</li></ul>If multiple machine sets would yield the same amount of idle CPU, the selection minimizes unused memory.<ul><li><code>Priority</code>: Selects the machine set with the highest user-assigned priority.</li></ul>To use this expander, you must create a config map that defines the priority of your machine sets.For more information, see "Configuring a priority expander for the cluster autoscaler."<ul><li><code>Random</code>: (Default) Selects the machine set randomly.</li></ul>If you do not specify a value, the default value of <code>Random</code> is used.<br><br>You can specify multiple expanders by using the <code>[LeastWaste, Priority]</code> format.The cluster autoscaler applies each expander according to the specified order.<br><br>In the <code>[LeastWaste, Priority]</code> example, the cluster autoscaler first evaluates according to the <code>LeastWaste</code> criteria.If more than one machine set satisfies the <code>LeastWaste</code> criteria equally well, the cluster autoscaler then evaluates according to the <code>Priority</code> criteria.If more than one machine set satisfies all of the specified expanders equally well, the cluster autoscaler selects one to use at random.</td>
</tr>
</tbody>
</table>


:::note

When performing a scaling operation, the cluster autoscaler remains within the ranges set in the `ClusterAutoscaler` resource definition, such as the minimum and maximum number of cores to deploy or the amount of memory in the cluster. However, the cluster autoscaler does not correct the current values in your cluster to be within those ranges.

The minimum and maximum CPUs, memory, and GPU values are determined by calculating those resources on all nodes in the cluster, even if the cluster autoscaler does not manage the nodes. For example, the control plane nodes are considered in the total memory in the cluster, even though the cluster autoscaler does not manage the control plane nodes.

:::