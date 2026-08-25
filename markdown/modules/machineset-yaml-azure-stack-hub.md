{% if context == "creating-infrastructure-machinesets" %}
{%- set infra = true -%}
{% endif %}

{%- set _mod_docs_content_type = "REFERENCE" %}
# Sample YAML for a compute machine set custom resource on {{ azure_short }} Stack Hub {id="machineset-yaml-azure-stack-hub_{{ context }}"}

You can create a machine set on {{ azure_first }} Stack Hub. By defining a YAML configuration with specific cluster IDs and provider details, you can automate the provisioning of specialized nodes. {._abstract}

The {{ azure_full }} sample YAML defines a compute machine set that runs in the `1` {{ azure_short }} zone in a region and creates nodes that are labeled with
{%- if not infra %}
`node-role.kubernetes.io/<role>: ""`.
{%- endif %}
{%- if infra %}
`node-role.kubernetes.io/infra: ""`. The sample YAML specifies a taint to prevent user workloads from being scheduled on infra nodes. After adding the `NoSchedule` taint on the infrastructure node, existing DNS pods running on that node are marked as `misscheduled`. You must either delete or [add toleration on `misscheduled` DNS pods](https://access.redhat.com/solutions/6592171).
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
  name: <infrastructure_id>-infra-<region>
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
      machine.openshift.io/cluster-api-machineset: <infrastructure_id>-infra-<region>
{%- endif %}
  template:
    metadata:
      creationTimestamp: null
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
        machine.openshift.io/cluster-api-machineset: <infrastructure_id>-infra-<region>
{%- endif %}
    spec:
      metadata:
        creationTimestamp: null
        labels:
{%- if not infra %}
          node-role.kubernetes.io/<role>: ""
{%- endif %}
{%- if infra %}
          node-role.kubernetes.io/infra: ""
      taints:
      - key: node-role.kubernetes.io/infra
        effect: NoSchedule
{%- endif %}
      providerSpec:
        value:
          apiVersion: machine.openshift.io/v1beta1
          availabilitySet: <availability_set>
          credentialsSecret:
            name: azure-cloud-credentials
            namespace: openshift-machine-api
          image:
            offer: ""
            publisher: ""
            resourceID: /resourceGroups/<infrastructure_id>-rg/providers/Microsoft.Compute/images/<infrastructure_id>
            sku: ""
            version: ""
          internalLoadBalancer: ""
          kind: AzureMachineProviderSpec
{%- if not infra %}
          location: <region>
{%- endif %}
{%- if infra %}
          location: <region>
{%- endif %}
          managedIdentity: <infrastructure_id>-identity
          metadata:
            creationTimestamp: null
          natRule: null
          networkResourceGroup: ""
          osDisk:
            diskSizeGB: 128
            managedDisk:
              storageAccountType: Premium_LRS
            osType: Linux
          publicIP: false
          publicLoadBalancer: ""
          resourceGroup: <infrastructure_id>-rg
          sshPrivateKey: ""
          sshPublicKey: ""
          subnet: <infrastructure_id>-<role>-subnet
          userDataSecret:
            name: worker-user-data
          vmSize: Standard_DS4_v2
          vnet: <infrastructure_id>-vnet
{%- if not infra %}
          zone: "1"
{%- endif %}
{%- if infra %}
          zone: "1"
{%- endif %}
```

where:


`<infrastructure_id>`
:   Specifies the infrastructure ID that is based on the cluster ID that you set when you provisioned the cluster. If you have the {{ product_title }} CLI installed, you can obtain the infrastructure ID by running the following command:
    ```terminal
    $ oc get -o jsonpath='{.status.infrastructureName}{"\n"}' infrastructure cluster
    ```

    You can obtain the subnet by running the following command:
    ```terminal
    $  oc -n openshift-machine-api \
        -o jsonpath='{.spec.template.spec.providerSpec.value.subnet}{"\n"}' \
        get machineset/<infrastructure_id>-worker-centralus1
    ```

    You can obtain the vnet by running the following command:
    ```terminal
    $  oc -n openshift-machine-api \
        -o jsonpath='{.spec.template.spec.providerSpec.value.vnet}{"\n"}' \
        get machineset/<infrastructure_id>-worker-centralus1
    ```
{% if not infra %}

`<role>`
:   Specifies the node label to add.

`<infrastructure_id>-<role>-<region>`
:   Specifies the infrastructure ID, node label, and region.

`<region>`
:   Specifies the region to place machines on.

    :::note


    The `spec.template.spec.providerSpec.value.zone` specifies the zone within your region to place machines on. Be sure that your region supports the zone that you specify.
    
    :::



`<availability_set>`
:   Specifies the availability set for the cluster.

`<image>`
:   Specifies the boot image to use. You should use the use the latest image when adding a new machine set.
{% endif %}
{% if infra %}

`<infra>`
:   Specifies the `<infra>` node label.

`<infrastructure_id>-infra-<region>`
:    Specifies the infrastructure ID, `<infra>` node label, and region.

`<region>`
:   Specifies the region to place machines on.

    :::note


    The `spec.template.spec.providerSpec.value.zone` specifies the zone within your region to place machines on. Be sure that your region supports the zone that you specify.
    
    :::



`<availability_set>`
:   Specifies the availability set for the cluster.

`<image>`
:   Specifies the boot image to use. You should use the use the latest image when adding a new machine set.
{% endif %}


:::note

Machine sets running on Azure Stack Hub do not support non-guaranteed Spot VMs.

:::


{% if context == "creating-infrastructure-machinesets" %}
{%- set infra = "" -%}
{% endif %}
{% if context == "cluster-tasks" %}
{%- set infra = "" -%}
{% endif %}