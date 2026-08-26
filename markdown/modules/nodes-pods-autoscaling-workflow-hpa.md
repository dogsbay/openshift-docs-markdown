{%- set _mod_docs_content_type = "CONCEPT" %}
# How does the HPA work? {id="nodes-pods-autoscaling-workflow-hpa_{{ context }}"}

By using the horizontal pod autoscaler (HPA) you can create and manage a group of load-balanced nodes. The HPA automatically increases or decreases the number of pods when a given CPU or memory threshold is crossed. {._abstract}

**Figure 1. High level workflow of the HPA**

![workflow](/images/HPAflow.png)

The HPA is an API resource in the Kubernetes autoscaling API group. The autoscaler works as a control loop with a default of 15 seconds for the sync period. During this period, the controller manager queries the CPU, memory utilization, or both, against what is defined in the YAML file for the HPA.
The controller manager obtains the utilization metrics from the resource metrics API for per-pod resource metrics like CPU or memory, for each pod that is targeted by the HPA.

If a utilization value target is set, the controller calculates the utilization value as a percentage of the equivalent resource request on the containers in each pod. The controller then takes the average of utilization across all targeted pods and produces a ratio that is used to scale the number of desired replicas.
The HPA is configured to fetch metrics from `metrics.k8s.io`, which is provided by the metrics server. Because of the dynamic nature of metrics evaluation, the number of replicas can fluctuate during scaling for a group of replicas.


:::note

To implement the HPA, all targeted pods must have a resource request set on their containers.

:::