{%- set _mod_docs_content_type = "REFERENCE" %}
# Machine autoscaler resource definition {id="machine-autoscaler-cr_{{ context }}"}

This `MachineAutoscaler` resource definition shows the parameters and sample values for the machine autoscaler. {._abstract}

```yaml
apiVersion: "autoscaling.openshift.io/v1beta1"
kind: "MachineAutoscaler"
metadata:
  name: "worker-us-east-1a"
  namespace: "openshift-machine-api"
spec:
  minReplicas: 1
  maxReplicas: 12
  scaleTargetRef:
    apiVersion: machine.openshift.io/v1beta1
    kind: MachineSet
    name: worker-us-east-1a
```
where:


&lt;name>
:   Specify the machine autoscaler name. To make it easier to identify which compute machine set this machine autoscaler scales, specify or include the name of the compute machine set to scale. The compute machine set name takes the following form: `<clusterid>-<machineset>-<region>`.


&lt;minReplicas>
:   Specify the minimum number machines of the specified type that must remain in the specified zone after the cluster autoscaler initiates cluster scaling. If running in AWS, {{ gcp_short }}, Azure, {{ rh_openstack }}, or vSphere, this value can be set to `0`. For other providers, do not set this value to `0`.

    You can save on costs by setting this value to `0` for use cases such as running expensive or limited-usage hardware that is used for specialized workloads, or by scaling a compute machine set with extra large machines. The cluster autoscaler scales the compute machine set down to zero if the machines are not in use.

    :::important


    Do not set the `spec.minReplicas` value to `0` for the three compute machine sets that are created during the {{ product_title }} installation process for an installer provisioned infrastructure.
    
    :::



&lt;maxReplicas>
:   Specify the maximum number machines of the specified type that the cluster autoscaler can deploy in the specified zone after it initiates cluster scaling. Ensure that the `maxNodesTotal` value in the `ClusterAutoscaler` resource definition is large enough to allow the machine autoscaler to deploy this number of machines.


&lt;scaleTargetRef>
:   In this section, provide values that describe the existing compute machine set to scale.


&lt;kind>
:   The `kind` parameter value is always `MachineSet`.


&lt;name>
:   The `name` value must match the name of an existing compute machine set, as shown in the `metadata.name` parameter value.