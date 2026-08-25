{% if context == "creating-infrastructure-machinesets" %}
{%- set infra = true -%}
{% endif %}

{%- set _mod_docs_content_type = "REFERENCE" %}
# Sample YAML for a compute machine set custom resource on {{ azure_short }} {id="machineset-yaml-azure_{{ context }}"}

You can define a machine set YAML to provision nodes by specifying parameters such as `vmSize` and `image`. You can use this to automate and scale infrastructure consistently, to ensure compute nodes meet specific workload requirements within the cluster. {._abstract}

The sample YAML defines a compute machine set that runs in the `1` {{ azure_first }} zone in a region and creates nodes that are labeled with
{%- if not infra %}
`node-role.kubernetes.io/<role>: ""`.
{%- endif %}
{% if infra %}`node-role.kubernetes.io/infra: ""`. The YAML specifies a taint to prevent user workloads from being scheduled on infra nodes. After adding the `NoSchedule` taint on the infrastructure node, existing DNS pods running on that node are marked as `misscheduled`. You must either delete or link:https://access.redhat.com/solutions/6592171[add toleration on `misscheduled` DNS pods{% endif %}.

In the sample, `<infrastructure_id>` is the infrastructure ID label that is based on the cluster ID that you set when you provisioned the cluster, and
{%- if not infra %}
`<role>`
{%- endif %}
{%- if infra %}
`infra`
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
    machine.openshift.io/cluster-api-machine-role: infra
    machine.openshift.io/cluster-api-machine-type: infra
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
        machine.openshift.io/cluster-api-machine-role: infra
        machine.openshift.io/cluster-api-machine-type: infra
        machine.openshift.io/cluster-api-machineset: <infrastructure_id>-infra-<region>
{%- endif %}
    spec:
      metadata:
        creationTimestamp: null
        labels:
          machine.openshift.io/cluster-api-machineset: <machineset_name>
{%- if not infra %}
          node-role.kubernetes.io/<role>: ""
{%- endif %}
{%- if infra %}
          node-role.kubernetes.io/infra: ""
{%- endif %}
      providerSpec:
        value:
          apiVersion: machine.openshift.io/v1beta1
          credentialsSecret:
            name: azure-cloud-credentials
            namespace: openshift-machine-api
          image:
            offer: ""
            publisher: ""
            resourceID: /resourceGroups/<infrastructure_id>-rg/providers/Microsoft.Compute/galleries/gallery_<infrastructure_id>/images/<infrastructure_id>-gen2/versions/latest
            sku: ""
            version: ""
          internalLoadBalancer: ""
          kind: AzureMachineProviderSpec
          location: <region>
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
          tags:
            <custom_tag_name_1>: <custom_tag_value_1>
            <custom_tag_name_2>: <custom_tag_value_2>
          subnet: <infrastructure_id>-<role>-subnet
          userDataSecret:
            name: worker-user-data
          vmSize: Standard_D4s_v3
          vnet: <infrastructure_id>-vnet
          zone: "1"
{%- if infra %}
      taints:
      - key: node-role.kubernetes.io/infra
        effect: NoSchedule
{%- endif %}
```

where:


`<infrastructure_id>`
:   Specifies the infrastructure ID that is based on the cluster ID that you set when you provisioned the cluster. If you have the {{ oc_first }} installed, you can obtain the infrastructure ID by running the following command:
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
{% endif %}
{% if infra %}

    :::note


    The value of the `metadata.labels.machine.openshift.io/cluster-api-machine-role` parameter specifies the `infra` node label.
    
    :::


`<infrastructure_id>-infra-<region>`
:   Specifies the infrastructure ID, `infra` node label, and region.
{% endif %}


:::note

The value of the `spec.template.spec.providerSpec.value.image` parameter specifies the image details for your compute machine set. If you want to use an {{ azure_short }} Marketplace image, see "Using the {{ azure_short }} Marketplace offering".

The value of the `spec.template.spec.providerSpec.value.image.resourceID` parameter specifies an image that is compatible with your instance type. The Hyper-V generation V2 images created by the installation program have a `-gen2` suffix, while V1 images have the same name without the suffix.

The value of the `spec.template.spec.providerSpec.value.location` parameter specifies the region to place machines on.

:::



`<custom_tag_name_1>`
:   Optional: Specifies custom tags in your machine set. Provide the tag name in `<custom_tag_name>` field and the corresponding tag value in `<custom_tag_value>` field.


:::note

The value of the `spec.template.spec.providerSpec.value.zone` parameter specifies the zone within your region to place machines on. Ensure that your region supports the zone that you specify. If your region supports availability zones, you must specify the zone. Specifying the zone avoids volume node affinity failure when a pod requires a persistent volume attachment. To do this, you can create a compute machine set for each zone in the same region.

:::


{% if context == "creating-infrastructure-machinesets" %}
{%- set infra = "" -%}
{% endif %}
{% if context == "cluster-tasks" %}
{%- set infra = "" -%}
{% endif %}