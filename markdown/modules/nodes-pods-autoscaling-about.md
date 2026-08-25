{%- set _mod_docs_content_type = "CONCEPT" %}
# Understanding horizontal pod autoscalers {id="nodes-pods-autoscaling-about_{{ context }}"}

You can create a horizontal pod autoscaler to specify the minimum and maximum number of pods you want to run and the CPU usage or memory usage your pods should target. {._abstract}

After you create a horizontal pod autoscaler, {{ product_title }} begins to query the CPU, memory, or both resource metrics on the pods. When these metrics are available, the horizontal pod autoscaler computes the ratio of the current metric use with the intended metric use, and scales up or down as needed. The query and scaling occurs at a regular interval, but can take one to two minutes before metrics become available.

For replication controllers, this scaling corresponds directly to the replicas of the replication controller. For deployment, scaling corresponds directly to the replica count of the deployment. Note that autoscaling applies only to the latest deployment in the `Complete` phase.

{{ product_title }} automatically accounts for resources and prevents unnecessary autoscaling during resource spikes, such as during start up. Pods in the `unready` state have `0 CPU` usage when scaling up and the autoscaler ignores the pods when scaling down. Pods without known metrics have `0% CPU` usage when scaling up and `100% CPU` when scaling down. This allows for more stability during the HPA decision. To use this feature, you must configure readiness checks to determine if a new pod is ready for use.

{% if openshift_origin or openshift_enterprise or openshift_webscale %}
To use horizontal pod autoscalers, your cluster administrator must have properly configured cluster metrics.
{% endif %}

The following metrics are supported by horizontal pod autoscalers:

***Supported metrics***

<table>
<thead>
<tr>
  <th>Metric</th>
  <th>Description</th>
  <th>API version</th>
</tr>
</thead>
<tbody>
<tr>
  <td>CPU utilization</td>
  <td>Number of CPU cores used. You can use this to calculate a percentage of the pod's requested CPU.</td>
  <td><code>autoscaling/v1</code>, <code>autoscaling/v2</code></td>
</tr>
<tr>
  <td>Memory utilization</td>
  <td>Amount of memory used. You can use this to calculate a percentage of the pod's requested memory.</td>
  <td><code>autoscaling/v2</code></td>
</tr>
</tbody>
</table>


:::important

For memory-based autoscaling, memory usage must increase and decrease proportionally to the replica count. On average:

*   An increase in replica count must lead to an overall decrease in memory
(working set) usage per-pod.
*   A decrease in replica count must lead to an overall increase in per-pod memory usage.

Use the {{ product_title }} web console to check the memory behavior of your application and ensure that your application meets these requirements before using memory-based autoscaling.

:::


The following example shows autoscaling for the `hello-node` `Deployment` object. The initial deployment requires 3 pods. The HPA object increases the minimum to 5. If CPU usage on the pods reaches 75%, the pods increase to 7:

```terminal
$ oc autoscale deployment/hello-node --min=5 --max=7 --cpu-percent=75
```

```terminal title="Example output"
horizontalpodautoscaler.autoscaling/hello-node autoscaled
```

```yaml title="Sample YAML to create an HPA for the hello-node deployment object with minReplicas set to 3"
apiVersion: autoscaling/v1
kind: HorizontalPodAutoscaler
metadata:
  name: hello-node
  namespace: default
spec:
  maxReplicas: 7
  minReplicas: 3
  scaleTargetRef:
    apiVersion: apps/v1
    kind: Deployment
    name: hello-node
  targetCPUUtilizationPercentage: 75
status:
  currentReplicas: 5
  desiredReplicas: 0
```

After you create the HPA, you can view the new state of the deployment by running the following command:

```terminal
$ oc get deployment hello-node
```

There are now 5 pods in the deployment:

```terminal title="Example output"
NAME         REVISION   DESIRED   CURRENT   TRIGGERED BY
hello-node   1          5         5         config
```