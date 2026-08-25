{%- set _mod_docs_content_type = "REFERENCE" %}
# Sample YAML for a Cluster API compute machine set resource on {{ vmw_full }} {id="capi-yaml-machine-set-vsphere_{{ context }}"}

The compute machine set resource defines additional properties of the machines that the resource creates.
The compute machine set also references the cluster resource and machine template when creating machines. {._abstract}

```yaml
apiVersion: cluster.x-k8s.io/v1beta1
kind: MachineSet
metadata:
  name: <machine_set_name>
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
      cluster.x-k8s.io/set-name: <machine_set_name>
  template:
    metadata:
      labels:
        test: example
        cluster.x-k8s.io/cluster-name: <cluster_name>
        cluster.x-k8s.io/set-name: <machine_set_name>
        node-role.kubernetes.io/<role>: ""
    spec:
      bootstrap:
         dataSecretName: worker-user-data
      clusterName: <cluster_name>
      infrastructureRef:
        apiVersion: infrastructure.cluster.x-k8s.io/v1beta1
        kind: VSphereMachineTemplate
        name: <template_name>
      failureDomain:
        - name: <failure_domain_name>
          region: <region_a>
          zone: <zone_a>
          server: <vcenter_server_name>
          topology:
            datacenter: <region_a_data_center>
            computeCluster: "</region_a_data_center/host/zone_a_cluster>"
            resourcePool: "</region_a_data_center/host/zone_a_cluster/Resources/resource_pool>"
            datastore: "</region_a_data_center/datastore/datastore_a>"
            networks:
            - port-group
```

where:


`metadata.name`
:   Specifies a name for the compute machine set.
    The cluster ID, machine role, and region form a typical pattern for this value in the following format: `<cluster_name>-<role>-<region>`.

`metadata.labels.cluster.x-k8s.io/cluster-name`
:   Specifies the cluster ID as the name of the cluster.

`spec.clusterName`
:   Specifies the cluster ID as the name of the cluster.

`spec.template.spec.infrastructureRef.kind`
:   Specifies the machine template kind.
    This value must match the value for your platform.

`spec.template.spec.infrastructureRef.name`
:   Specifies the machine template name.

`spec.template.spec.failureDomain`
:   Specifies the failure domain configuration details.


:::note

Using multiple regions and zones on a {{ vmw_short }} cluster that uses the Cluster API is not a validated configuration.

:::