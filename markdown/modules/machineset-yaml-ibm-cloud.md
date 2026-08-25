{% if context == "creating-infrastructure-machinesets" %}
{%- set infra = true -%}
{% endif %}

{%- set _mod_docs_content_type = "REFERENCE" %}
{% include "./_attributes/common-attributes.md" %}
# Sample YAML for a compute machine set custom resource on {{ ibm_cloud_title }} {id="machineset-yaml-ibm-cloud_{{ context }}"}

You can use the sample YAML file to automate the provisioning of compute or infrastructure nodes within a specific Virtual Private Cloud (VPC). The sample YAML defines a compute machine set that runs in a specified {{ ibm_cloud_name }} zone in a region and creates nodes that are labeled with
{%- if not infra %}
`node-role.kubernetes.io/<role>: ""`.
{%- endif %}
{%- if infra %}
`node-role.kubernetes.io/infra: ""`. {._abstract}
{%- endif %}

In the sample, `<infrastructure_id>` is the infrastructure ID label that is based on the cluster ID that you set when you provisioned the cluster, and
{%- if not infra %}
`<role>`
{%- endif %}
{%- if infra %}
`<infra>`
{%- endif %}
is the node label to add.

```yaml {minja}
apiVersion: machine.openshift.io/v1beta1
kind: MachineSet
metadata:
  labels:
    machine.openshift.io/cluster-api-cluster: <infrastructure_id>
{%- if not infra %}
    machine.openshift.io/cluster-api-machine-role: <role>
    machine.openshift.io/cluster-api-machine-type: <role>
  name: <infrastructure_id>-<role>-<region>
{%- endif %}
{%- if infra %}
    machine.openshift.io/cluster-api-machine-role: <infra>
    machine.openshift.io/cluster-api-machine-type: <infra>
  name: <infrastructure_id>-<infra>-<region>
{%- endif %}
  namespace: openshift-machine-api
spec:
  replicas: 1
  selector:
    matchLabels:
      machine.openshift.io/cluster-api-cluster: <infrastructure_id>
{%- if not infra %}
      machine.openshift.io/cluster-api-machineset: <infrastructure_id>-<role>-<region>
{%- endif %}
{%- if infra %}
      machine.openshift.io/cluster-api-machineset: <infrastructure_id>-<infra>-<region>
{%- endif %}
  template:
    metadata:
      labels:
        machine.openshift.io/cluster-api-cluster: <infrastructure_id>
{%- if not infra %}
        machine.openshift.io/cluster-api-machine-role: <role>
        machine.openshift.io/cluster-api-machine-type: <role>
        machine.openshift.io/cluster-api-machineset: <infrastructure_id>-<role>-<region>
{%- endif %}
{%- if infra %}
        machine.openshift.io/cluster-api-machine-role: <infra>
        machine.openshift.io/cluster-api-machine-type: <infra>
        machine.openshift.io/cluster-api-machineset: <infrastructure_id>-<infra>-<region>
{%- endif %}
    spec:
      metadata:
        labels:
{%- if not infra %}
          node-role.kubernetes.io/<role>: ""
{%- endif %}
{%- if infra %}
          node-role.kubernetes.io/infra: ""
{%- endif %}
      providerSpec:
        value:
          apiVersion: ibmcloudproviderconfig.openshift.io/v1beta1
          credentialsSecret:
            name: ibmcloud-credentials
          image: <infrastructure_id>-rhcos
          kind: IBMCloudMachineProviderSpec
          primaryNetworkInterface:
              securityGroups:
              - <infrastructure_id>-sg-cluster-wide
              - <infrastructure_id>-sg-openshift-net
              subnet: <infrastructure_id>-subnet-compute-<zone>
          profile: <instance_profile>
          region: <region>
          resourceGroup: <resource_group>
          userDataSecret:
              name: <role>-user-data
          vpc: <vpc_name>
          zone: <zone>
{%- if infra %}
        taints:
        - key: node-role.kubernetes.io/infra
          effect: NoSchedule
{%- endif %}
```

where:


`<infrastructure_id>`
:   Specifies the infrastructure ID that is based on the cluster ID that you set when you provisioned the cluster. If you have the OpenShift CLI installed, you can obtain the infrastructure ID by running the following command:
    ```terminal
    $ oc get -o jsonpath='{.status.infrastructureName}{"\n"}' infrastructure cluster
    ```
{% if not infra %}

`<role>`
:   Specifies the node label to add.

`<infrastructure_id>-<role>-<region>`
:   Specifies the infrastructure ID, node label, and region.
{% endif %}
{% if infra %}

`<infra>`
:   Specifies the `<infra>` node label.

`<infrastructure_id>-<infra>-<region>`
:   Specifies the infrastructure ID, `<infra>` node label, and region.
{%- endif %}

`<infrastructure_id>-rhcos`
:   Specifies the custom {{ op_system_first }} image to use as a boot image for your nodes. You should use the use the latest image when adding a new machine set.

`<infrastructure_id>-subnet-compute-<zone>`
:   Specifies the infrastructure ID and zone within your region to place machines on. Be sure that your region supports the zone that you specify.

`<instance_profile>`
:   Specifies the [{{ ibm_cloud_name }} instance profile](https://cloud.ibm.com/docs/vpc?topic=vpc-profiles&interface=ui).

`<region>`
:   Specifies the region to place machines on.

`<resource_group>`
:   Specifies the resource group that machine resources are placed in. This is either an existing resource group specified at installation time, or an installer-created resource group named based on the infrastructure ID.

`<vpc_name>`
:   Specifies the VPC name.

`<zone>`
:   Specifies the zone within your region to place machines on. Be sure that your region supports the zone that you specify.
{%- if infra %}

`taints`
:   Specifies the taint to prevent user workloads from being scheduled on infra nodes.

    :::note


    After adding the `NoSchedule` taint on the infrastructure node, existing DNS pods running on that node are marked as `misscheduled`. You must either delete or [add toleration on `misscheduled` DNS pods](https://access.redhat.com/solutions/6592171).
    
    :::

{%- endif %}

{% if context == "creating-infrastructure-machinesets" %}
{%- set infra = "" -%}
{% endif %}