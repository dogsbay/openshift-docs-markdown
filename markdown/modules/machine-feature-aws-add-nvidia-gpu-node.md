{%- set _mod_docs_content_type = "CONCEPT" %}
# GPU-enabled machine options {id="machine-feature-aws-add-nvidia-gpu-node_{{ context }}"}

You can deploy GPU-enabled compute machines on {{ aws_first }}. {._abstract}

The following sample configuration uses an {{ aws_short }} G4dn instance type, which includes an NVIDIA Tesla T4 Tensor Core GPU, as an example.

For more information about supported instance types, see the following pages in the NVIDIA documentation:

*   NVIDIA GPU Operator Community support matrix
*   NVIDIA AI Enterprise support matrix

{% include "./snippets/apply-machine-configuration-method.md" %}

```yaml title="Sample GPU-enabled machine template configuration"
apiVersion: infrastructure.cluster.x-k8s.io/v1beta2
kind: AWSMachineTemplate
# ...
spec:
  template:
    spec:
      instanceType: g4dn.xlarge
# ...
```
*   The `spec.template.spec.instanceType` field specifies a G4dn instance type.

```yaml title="Sample GPU-enabled machine set configuration"
apiVersion: cluster.x-k8s.io/v1beta1
kind: MachineSet
metadata:
  name: <cluster_name>-gpu-<region>
  namespace: openshift-cluster-api
  labels:
    cluster.x-k8s.io/cluster-name: <cluster_name>
spec:
  clusterName: <cluster_name>
  replicas: 1
  selector:
    matchLabels:
      test: example
      cluster.x-k8s.io/cluster-name: <cluster_name>
      cluster.x-k8s.io/set-name: <cluster_name>-gpu-<region>
  template:
    metadata:
      labels:
        test: example
        cluster.x-k8s.io/cluster-name: <cluster_name>
        cluster.x-k8s.io/set-name: <cluster_name>-gpu-<region>
        node-role.kubernetes.io/<role>: ""
# ...
```

where:


`metadate.name`
:   Specifies a name that includes the `gpu` role. The name includes the cluster ID as a prefix and the region as a suffix.

`spec.selector.matchLabels.cluster.x-k8s.io/set-name`
:   Specifies a selector label that matches the machine set name.

`spec.template.metadata.labels.cluster.x-k8s.io/set-name`
:   Specifies a template label that matches the machine set name.