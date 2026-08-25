{%- set _mod_docs_content_type = "CONCEPT" %}
# Performance tuning the VPA Operator {id="nodes-pods-vertical-autoscaler-tuning_{{ context }}"}

As a cluster administrator, you can tune the performance of your Vertical Pod Autoscaler Operator (VPA) to limit the rate at which the VPA makes requests of the Kubernetes API server and to specify the CPU and memory resources for the VPA component pods. {._abstract}

You can also configure the VPA to monitor only those workloads a VPA custom resource (CR) manages. By default, the VPA monitors every workload in the cluster. As a result, the VPA accrues and stores 8 days of historical data for all workloads. The can be used by the VPA if a new VPA CR is created for a workload. However, this causes the VPA to use significant CPU and memory. This can cause the VPA to fail, particularly on larger clusters. By configuring the VPA to monitor only workloads with a VPA CR, you can save on CPU and memory resources. One tradeoff is that where you have a running workload and you create a VPA CR to manage that workload. The VPA does not have any historical data for that workload. As a result, the initial recommendations are not as useful as those after the workload is running for some time.

Use these tunings to ensure the VPA has enough resources to operate at peak efficiency and to prevent throttling, and a possible delay in pod admissions.

You can perform the following tunings on the VPA components by editing the `VerticalPodAutoscalerController` custom resource (CR):

*   To prevent throttling and pod admission delays, set the queries per second (QPS) and burst rates for VPA requests of the Kubernetes API server by using the `kube-api-qps` and `kube-api-burst` parameters.
*   To ensure enough CPU and memory, set the CPU and memory requests for VPA component pods by using the standard `cpu` and `memory` resource requests.
*   To configure the VPA to monitor only workloads that the VPA CR manages, set the `memory-saver` parameter to `true` for the recommender component.

For guidelines on the resources and rate limits that you could set for each VPA component, the following tables provide recommended baseline values, depending on the size of your cluster and other factors.


:::important

These recommended values derive from internal Red&#160;Hat testing on clusters that are not necessarily representative of real-world clusters. Before you configure a production cluster, ensure you test these values in a non-production cluster.

:::


**Requests by containers in the cluster**

|     |     |     |     |     |     |     |     |     |     |     |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Component 2+ | 1-500 containers 2+ | 500-1,000 containers 2+ | 1,000-2,000 containers 2+ | 2,000-4,000 containers 2+ | 4,000+ containers |  | **CPU** | **Memory** | **CPU** | **Memory** |
| **CPU** | **Memory** | **CPU** | **Memory** | **CPU** | **Memory** | Admission | 25m | 50Mi | 25m | 75Mi |
| 40m | 150Mi | 75m | 260Mi | (0.03c)/2 + 10 ^[1]^ | (0.1c)/2 + 50 ^[1]^ | Recommender | 25m | 100Mi | 50m | 160Mi |
| 75m | 275Mi | 120m | 420Mi | (0.05c)/2 + 50 ^[1]^ | (0.15c)/2 + 120 ^[1]^ | Updater | 25m | 100Mi | 50m | 220Mi |
1.  `c` is the number of containers in the cluster.


:::note

It is recommended that you set the memory limit on your containers to at least double the recommended requests in the table. However, because CPU is a compressible resource, setting CPU limits for containers can throttle the VPA. As such, it is recommended that you do not set a CPU limit on your containers.

:::


**Rate limits by VPAs in the cluster**

|     |     |     |     |     |     |     |     |     |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Component 2+ | 1-150 VPAs 2+ | 151-500 VPAs 2+ | 501-2,000 VPAs 2+ | 2,001-4,000 VPAs |  | **QPS Limit** ^[1]^ | **Burst** ^[2]^ | **QPS Limit** |
| **Burst** | **QPS Limit** | **Burst** | **QPS Limit** | **Burst** | Recommender | 5 | 10 | 30 |
| 60 | 60 | 120 | 120 | 240 | Updater | 5 | 10 | 30 |
1.  QPS specifies the queries per second (QPS) limit when making requests to Kubernetes API server. The default for the updater and recommender pods is `5.0`.
1.  Burst specifies the burst limit when making requests to Kubernetes API server. The default for the updater and recommender pods is `10.0`.


:::note

If you have more than 4,000 VPAs in your cluster, it is recommended that you start performance tuning with the values in the table and slowly increase the values until you achieve the required recommender and updater latency and performance. Adjust these values slowly because increased QPS and Burst can affect cluster health and slow down the Kubernetes API server if too many API requests are sent to the API server from the VPA components.

:::


The following example VPA controller CR is for a cluster with 1,000 to 2,000 containers and a pod creation surge of 26 to 50. The CR sets the following values:

*   The container memory and CPU requests for all three VPA components
*   The container memory limit for all three VPA components
*   The QPS and burst rates for all three VPA components
*   The `memory-saver` parameter to `true` for the VPA recommender component

```yaml title="Example VerticalPodAutoscalerController CR"
apiVersion: autoscaling.openshift.io/v1
kind: VerticalPodAutoscalerController
metadata:
  name: default
  namespace: openshift-vertical-pod-autoscaler
spec:
  deploymentOverrides:
    admission:
      container:
        args:
          - '--kube-api-qps=50.0'
          - '--kube-api-burst=100.0'
        resources:
          requests:
            cpu: 40m
            memory: 150Mi
          limits:
            memory: 300Mi
    recommender:
      container:
        args:
          - '--kube-api-qps=60.0'
          - '--kube-api-burst=120.0'
          - '--memory-saver=true'
        resources:
          requests:
            cpu: 75m
            memory: 275Mi
          limits:
            memory: 550Mi
    updater:
      container:
        args:
          - '--kube-api-qps=60.0'
          - '--kube-api-burst=120.0'
        resources:
          requests:
            cpu: 80m
            memory: 350M
          limits:
            memory: 700Mi
  minReplicas: 2
  podMinCPUMillicores: 25
  podMinMemoryMb: 250
  recommendationOnly: false
  safetyMarginFraction: 0.15
```
where:


`spec.deploymentOverrides.admission`
:   Specifies the tuning parameters for the VPA admission controller.

`spec.deploymentOverrides.admission.container.args`
:   Specifies the API QPS and burst rates for the VPA admission controller.
    *   `kube-api-qps`: Specifies the queries per second (QPS) limit when making requests to Kubernetes API server. The default is `5.0`.
    *   `kube-api-burst`: Specifies the burst limit when making requests to Kubernetes API server. The default is `10.0`.

`spec.deploymentOverrides.admission.container.resources.requests`
:   Specifies the resource requests and limits for the VPA admission controller pod.

`spec.deploymentOverrides.recommender`
:   Specifies the tuning parameters for the VPA recommender.

`spec.deploymentOverrides.recommender.container.args.memory-saver`
:   When `true`, specifies that the VPA Operator monitors only workloads with a VPA CR. The default is `false`.

`spec.deploymentOverrides.updater`
:   Specifies the tuning parameters for the VPA updater.

You can verify that the settings were applied to each VPA component pod.

```yaml title="Example updater pod"
apiVersion: v1
kind: Pod
metadata:
  name: vpa-updater-default-d65ffb9dc-hgw44
  namespace: openshift-vertical-pod-autoscaler
# ...
spec:
  containers:
  - args:
    - --logtostderr
    - --v=1
    - --min-replicas=2
    - --kube-api-qps=60.0
    - --kube-api-burst=120.0
# ...
    resources:
      requests:
        cpu: 80m
        memory: 350M
# ...
```

```yaml title="Example admission controller pod"
apiVersion: v1
kind: Pod
metadata:
  name: vpa-admission-plugin-default-756999448c-l7tsd
  namespace: openshift-vertical-pod-autoscaler
# ...
spec:
  containers:
  - args:
    - --logtostderr
    - --v=1
    - --tls-cert-file=/data/tls-certs/tls.crt
    - --tls-private-key=/data/tls-certs/tls.key
    - --client-ca-file=/data/tls-ca-certs/service-ca.crt
    - --webhook-timeout-seconds=10
    - --kube-api-qps=50.0
    - --kube-api-burst=100.0
# ...
    resources:
      requests:
        cpu: 40m
        memory: 150Mi
# ...
```

```yaml title="Example recommender pod"
apiVersion: v1
kind: Pod
metadata:
  name: vpa-recommender-default-74c979dbbc-znrd2
  namespace: openshift-vertical-pod-autoscaler
# ...
spec:
  containers:
  - args:
    - --logtostderr
    - --v=1
    - --recommendation-margin-fraction=0.15
    - --pod-recommendation-min-cpu-millicores=25
    - --pod-recommendation-min-memory-mb=250
    - --kube-api-qps=60.0
    - --kube-api-burst=120.0
    - --memory-saver=true
# ...
    resources:
      requests:
        cpu: 75m
        memory: 275Mi
# ...
```