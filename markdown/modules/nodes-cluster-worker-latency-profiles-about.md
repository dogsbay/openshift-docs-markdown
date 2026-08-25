{%- set _mod_docs_content_type = "CONCEPT" %}
# Understanding worker latency profiles {id="nodes-cluster-worker-latency-profiles-about_{{ context }}"}

Review the following information to learn about worker latency profiles, which allow you to control the reaction of the cluster to latency issues without needing to determine the best values by using manual methods. {._abstract}

Worker latency profiles are four different categories of carefully-tuned parameters. The four parameters which implement these values are `node-status-update-frequency`, `node-monitor-grace-period`, `default-not-ready-toleration-seconds` and `default-unreachable-toleration-seconds`.


:::important

Setting these parameters manually is not supported. Incorrect parameter settings adversely affect cluster stability.

:::


All worker latency profiles configure the following parameters:


node-status-update-frequency
:   Specifies how often the kubelet posts node status to the API server.

node-monitor-grace-period
:    Specifies the amount of time in seconds that the Kubernetes Controller Manager waits for an update from a kubelet before marking the node unhealthy and adding the `node.kubernetes.io/not-ready` or `node.kubernetes.io/unreachable` taint to the node.

default-not-ready-toleration-seconds
:   Specifies the amount of time in seconds after marking a node unhealthy that the Kube API Server Operator waits before evicting pods from that node.

default-unreachable-toleration-seconds
:   Specifies the amount of time in seconds after marking a node unreachable that the Kube API Server Operator waits before evicting pods from that node.

The following Operators monitor the changes to the worker latency profiles and respond accordingly:

*   The Machine Config Operator (MCO) updates the `node-status-update-frequency` parameter on the compute nodes.
*   The Kubernetes Controller Manager updates the `node-monitor-grace-period` parameter on the control plane nodes.
*   The Kubernetes API Server Operator updates the `default-not-ready-toleration-seconds` and `default-unreachable-toleration-seconds` parameters on the control plane nodes.

{% if not (openshift_rosa or openshift_dedicated) %}
Although the default configuration works in most cases, {{ product_title }} offers two other worker latency profiles for situations where the network is experiencing higher latency than usual. The three worker latency profiles are described in the following sections:
{% endif %}
{% if openshift_rosa or openshift_dedicated %}
Although the default configuration works in most cases, {{ product_title }} offers a second worker latency profile for situations where the network is experiencing higher latency than usual. The two worker latency profiles are described in the following sections:
{% endif %}


Default worker latency profile
:   With the `Default` profile, each `Kubelet` updates its status every 10 seconds (`node-status-update-frequency`). The `Kube Controller Manager` checks the statuses of `Kubelet` every 5 seconds.

    The Kubernetes Controller Manager waits 40 seconds (`node-monitor-grace-period`) for a status update from `Kubelet` before considering the `Kubelet` unhealthy. If no status is made available to the Kubernetes Controller Manager, it then marks the node with the `node.kubernetes.io/not-ready` or `node.kubernetes.io/unreachable` taint and evicts the pods on that node.

    If a pod is on a node that has the `NoExecute` taint, the pod runs according to `tolerationSeconds`. If the node has no taint, it will be evicted in 300 seconds (`default-not-ready-toleration-seconds` and `default-unreachable-toleration-seconds` settings of the `Kube API Server`).
<table>
<tbody>
<tr>
  <td>Profile</td>
  <td>Component</td>
  <td>Parameter</td>
  <td>Value</td>
</tr>
<tr>
  <td rowspan="4">Default</td>
  <td>kubelet</td>
  <td><code>node-status-update-frequency</code></td>
  <td>10s</td>
</tr>
<tr>
  <td>Kubelet Controller Manager</td>
  <td><code>node-monitor-grace-period</code></td>
  <td>40s</td>
</tr>
<tr>
  <td>Kubernetes API Server Operator</td>
  <td><code>default-not-ready-toleration-seconds</code></td>
  <td>300s</td>
</tr>
<tr>
  <td>Kubernetes API Server Operator</td>
  <td><code>default-unreachable-toleration-seconds</code></td>
  <td>300s</td>
</tr>
</tbody>
</table>


Medium worker latency profile
:   Use the `MediumUpdateAverageReaction` profile if the network latency is slightly higher than usual.

    The `MediumUpdateAverageReaction` profile reduces the frequency of kubelet updates to 20 seconds and changes the period that the Kubernetes Controller Manager waits for those updates to 2 minutes. The pod eviction period for a pod on that node is reduced to 60 seconds. If the pod has the `tolerationSeconds` parameter, the eviction waits for the period specified by that parameter.

    The Kubernetes Controller Manager waits for 2 minutes to consider a node unhealthy. In another minute, the eviction process starts.
<table>
<tbody>
<tr>
  <td>Profile</td>
  <td>Component</td>
  <td>Parameter</td>
  <td>Value</td>
</tr>
<tr>
  <td rowspan="4">MediumUpdateAverageReaction</td>
  <td>kubelet</td>
  <td><code>node-status-update-frequency</code></td>
  <td>20s</td>
</tr>
<tr>
  <td>Kubelet Controller Manager</td>
  <td><code>node-monitor-grace-period</code></td>
  <td>2m</td>
</tr>
<tr>
  <td>Kubernetes API Server Operator</td>
  <td><code>default-not-ready-toleration-seconds</code></td>
  <td>60s</td>
</tr>
<tr>
  <td>Kubernetes API Server Operator</td>
  <td><code>default-unreachable-toleration-seconds</code></td>
  <td>60s</td>
</tr>
</tbody>
</table>

{% if not (openshift_rosa or openshift_dedicated) %}


Low worker latency profile
:   Use the `LowUpdateSlowReaction` profile if the network latency is extremely high.

    The `LowUpdateSlowReaction` profile reduces the frequency of kubelet updates to 1 minute and changes the period that the Kubernetes Controller Manager waits for those updates to 5 minutes. The pod eviction period for a pod on that node is reduced to 60 seconds. If the pod has the `tolerationSeconds` parameter, the eviction waits for the period specified by that parameter.

    The Kubernetes Controller Manager waits for 5 minutes to consider a node unhealthy. In another minute, the eviction process starts.
<table>
<tbody>
<tr>
  <td>Profile</td>
  <td>Component</td>
  <td>Parameter</td>
  <td>Value</td>
</tr>
<tr>
  <td rowspan="4">LowUpdateSlowReaction</td>
  <td>kubelet</td>
  <td><code>node-status-update-frequency</code></td>
  <td>1m</td>
</tr>
<tr>
  <td>Kubelet Controller Manager</td>
  <td><code>node-monitor-grace-period</code></td>
  <td>5m</td>
</tr>
<tr>
  <td>Kubernetes API Server Operator</td>
  <td><code>default-not-ready-toleration-seconds</code></td>
  <td>60s</td>
</tr>
<tr>
  <td>Kubernetes API Server Operator</td>
  <td><code>default-unreachable-toleration-seconds</code></td>
  <td>60s</td>
</tr>
</tbody>
</table>

{% endif %}


:::note

The latency profiles do not support custom machine config pools, only the default worker machine config pools.

:::