{%- set _mod_docs_content_type = "REFERENCE" %}
# `NodePool` resource constraints {id="rosa-nodes-autonode-ref-nodepool-constraints_{{ context }}"}

When you create or edit `NodePool` custom resources, you must conform to the following engineering validations and structural constraints. {._abstract}

*   **Instance sizing validation:** Select from the supported list of Amazon `EC2` instances. The selected `EC2` instance must meet the minimum resource requirements of 4 vCPUs or more. To enforce this validation on your cluster, include the `karpenter.k8s.aws/instance-cpu` key in your `spec.template.spec.requirements` block.
*   **Reserved Kubernetes labels:** In the `NodePool` configurations that you create, avoid using the following reserved Kubernetes labels:
    *   `node-role.kubernetes.io/master`
    *   `node-role.kubernetes.io/infra`
    *   `node-role.kubernetes.io/control-plane`
*   **Static capacity restrictions:** Setting the `spec.replicas` field or `StaticCapacity` is not supported. This field requires the feature gate.
*   **Workload interruption defaults:** Review the default values of the custom resources managed by Karpenter. For example, Karpenter includes the spot market type for the EC2 instances and nodes automatically expire after 30 days by default. If your workloads must not be interrupted, you must configure the custom resources explicitly to modify these behaviors.

    :::warning

    By default, Karpenter schedules workloads on spot instances, which AWS can reclaim at any time. If your workloads require uninterrupted availability, you must explicitly set the `karpenter.sh/capacity-type` requirement to `on-demand` in your `NodePool` configuration.
    
    :::