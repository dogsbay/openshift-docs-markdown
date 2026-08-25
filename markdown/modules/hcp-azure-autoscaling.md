{%- set _mod_docs_content_type = "REFERENCE" %}
# Example: Autoscaling a hosted cluster on {{ azure_short }} {id="hcp-azure-autoscaling_{{ context }}"}

To balance node pools on your {{ azure_short }} hosted cluster, you can configure autoscaling for the cluster. {._abstract}

When you scale up `NodePool` objects, the Cluster API Provider for {{ azure_short }} provisions individual {{ azure_short }} virtual machines.

To configure autoscaling for a hosted cluster on {{ azure_short }}, you edit the `spec.autoscaling` parameters in the `HostedCluster` resource. The following example shows a `HostedCluster` resource with 2 {{ azure_short }} node pools.


:::note

This example shows only the autoscaling-related fields.

:::


```yaml
apiVersion: hypershift.openshift.io/v1beta1
kind: HostedCluster
metadata:
  name: my-cluster
  namespace: my-cluster-namespace
spec:
  autoscaling:
    scaling: ScaleUpAndScaleDown
    maxNodesTotal: 12
    expanders:
      - Random
    scaleDown:
      delayAfterAddSeconds: 300
      unneededDurationSeconds: 600
      utilizationThresholdPercent: 40
    balancingIgnoredLabels:
      - "custom.label/environment"
    maxFreeDifferenceRatioPercent: 70
---
apiVersion: hypershift.openshift.io/v1beta1
kind: NodePool
metadata:
  name: my-cluster-nodepool-1
  namespace: my-cluster-namespace
spec:
  clusterName: my-cluster
  autoScaling:
    min: 1
    max: 6
  platform:
    azure:
      vmSize: Standard_D4s_v3
      # ... 
---
apiVersion: hypershift.openshift.io/v1beta1
kind: NodePool
metadata:
  name: my-cluster-nodepool-2
  namespace: my-cluster-namespace
spec:
  clusterName: my-cluster
  autoScaling:
    min: 1
    max: 6
  platform:
    azure:
      vmSize: Standard_D4s_v3
      # ... 
```

*   `spec.autoScaling.min` must be greater than or equal to `1`. Scaling from zero (`autoScaling.min: 0`) is not supported on {{ azure_short }}.