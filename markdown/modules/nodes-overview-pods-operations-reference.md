{%- set _mod_docs_content_type = "REFERENCE" %}
# Pod operations {id="nodes-overview-pods-operations-reference_{{ context }}"}

Find procedures for reading, managing, and enhancing pods in an {{ product_title }} cluster. {._abstract}

## Read operations {id="_read_operations"}

As an administrator, you can get information about pods in a project through the following tasks:

*   [List pods associated with a project](/nodes/pods/nodes-pods-viewing#nodes-pods-viewing-project_nodes-pods-viewing), including information such as the number of replicas and restarts, current status, and age.
*   [View pod usage statistics](/nodes/pods/nodes-pods-viewing#nodes-pods-viewing-usage_nodes-pods-viewing) such as CPU, memory, and storage consumption.

## Management operations {id="_management_operations"}

The following list of tasks provides an overview of how an administrator can manage pods in an {{ product_title }} cluster.

*   Control scheduling of pods using the advanced scheduling features available in {{ product_title }}:
    *   Node-to-pod binding rules such as [pod affinity](/nodes/scheduling/nodes-scheduler-pod-affinity#nodes-scheduler-pod-affinity-example-affinity_nodes-scheduler-pod-affinity), [node affinity](/nodes/scheduling/nodes-scheduler-node-affinity#nodes-scheduler-node-affinity), and [anti-affinity](/nodes/scheduling/nodes-scheduler-pod-affinity#nodes-scheduler-pod-anti-affinity-configuring_nodes-scheduler-pod-affinity).
    *   [Node labels and selectors](/nodes/scheduling/nodes-scheduler-node-selectors#nodes-scheduler-node-selectors).
        {%- if not (openshift_rosa or openshift_rosa_hcp or openshift_dedicated) %}
    *   [Taints and tolerations](/nodes/scheduling/nodes-scheduler-taints-tolerations#nodes-scheduler-taints-tolerations).
        {%- endif %}
    *   [Pod topology spread constraints](/nodes/scheduling/nodes-scheduler-pod-topology-spread-constraints#nodes-scheduler-pod-topology-spread-constraints).
        {%- if not (openshift_rosa or openshift_rosa_hcp or openshift_dedicated) %}
    *   [Secondary scheduling](/nodes/scheduling/secondary_scheduler/index#nodes-secondary-scheduler-about).
*   [Configure the descheduler to evict pods](/nodes/scheduling/descheduler/index#nodes-descheduler-about) based on specific strategies so that the scheduler reschedules the pods to more appropriate nodes.
{%- endif %}
*   [Configure how pods behave after a restart using pod controllers and restart policies](/nodes/pods/nodes-pods-configuring#nodes-pods-configuring-restart_nodes-pods-configuring).
*   [Limit both egress and ingress traffic on a pod](/nodes/pods/nodes-pods-configuring#nodes-pods-configuring-bandwidth_nodes-pods-configuring).
*   [Add and remove volumes to and from any object that has a pod template](/nodes/containers/nodes-containers-volumes#nodes-containers-volumes). A volume is a mounted file system available to all the containers in a pod. Container storage is ephemeral; you can use volumes to persist container data.

## Enhancement operations {id="_enhancement_operations"}

You can work with pods more easily and efficiently with the help of various tools and features available in {{ product_title }}. The following operations involve using those tools and features to better manage pods.

{% if not (openshift_rosa or openshift_rosa_hcp or openshift_dedicated) %}
| Operation | User | More information |
| --- | --- | --- |
| Create and use a horizontal pod autoscaler. | Developer | You can use a horizontal pod autoscaler to specify the minimum and the maximum number of pods you want to run, as well as the CPU utilization or memory utilization your pods should target. Using a horizontal pod autoscaler, you can [automatically scale pods](/nodes/pods/nodes-pods-autoscaling#nodes-pods-autoscaling). |
| [Install and use a vertical pod autoscaler](/nodes/pods/nodes-pods-vertical-autoscaler#nodes-pods-vpa). | Administrator and developer | As an administrator, use a vertical pod autoscaler to better use cluster resources by monitoring the resources and the resource requirements of workloads. As a developer, use a vertical pod autoscaler to ensure your pods stay up during periods of high demand by scheduling pods to nodes that have enough resources for each pod. |
| Provide access to external resources using device plugins. | Administrator | A [device plugin](/nodes/pods/nodes-pods-plugins#nodes-pods-device) is a gRPC service running on nodes (external to the kubelet), which manages specific hardware resources. You can [deploy a device plugin](/nodes/pods/nodes-pods-plugins#methods-for-deploying-a-device-plugin_nodes-pods-device) to provide a consistent and portable solution to consume hardware devices across clusters. |
| Provide sensitive data to pods [using the `Secret` object](/nodes/pods/nodes-pods-secrets#nodes-pods-secrets). | Administrator | Some applications need sensitive information, such as passwords and usernames. You can use the `Secret` object to provide such information to an application pod. |
{% endif %}
{% if openshift_rosa or openshift_rosa_hcp or openshift_dedicated %}
*   Secrets: Some applications need sensitive information, such as passwords and usernames. An administrator can use the `Secret` object to provide sensitive data to pods [using the `Secret` object](/nodes/pods/nodes-pods-secrets#nodes-pods-secrets).
{% endif %}