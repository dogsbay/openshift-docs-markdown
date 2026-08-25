{% if context == "creating-infrastructure-machinesets" %}
{%- set infra = true -%}
{% endif %}

{%- set _mod_docs_content_type = "REFERENCE" %}
# Sample YAML for a compute machine set custom resource on {{ vmw_short }} {id="machineset-yaml-vsphere_{{ context }}"}

To enable the Machine API to automate node provisioning on {{ vmw_first }} infrastructure, define a `MachineSet` resource with parameters that are specific to {{ vmw_short }}, for example data center, resource pool, and template. {._abstract}

The sample YAML file defines a compute machine set that runs on {{ vmw_short }} and creates nodes that are labeled with
{%- if not infra %}
`node-role.kubernetes.io/<role>: ""`.
{%- endif %}
{%- if infra %}
`node-role.kubernetes.io/infra: ""`.
{%- endif %}

In this sample, `<infrastructure_id>` is the infrastructure ID label that is based on the cluster ID that you set when you provisioned the cluster, and
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
  creationTimestamp: null
  labels:
    machine.openshift.io/cluster-api-cluster: <infrastructure_id>
{%- if not infra %}
  name: <infrastructure_id>-<role>
{%- endif %}
{%- if infra %}
  name: <infrastructure_id>-infra
{%- endif %}
  namespace: openshift-machine-api
spec:
  replicas: 1
  selector:
    matchLabels:
      machine.openshift.io/cluster-api-cluster: <infrastructure_id>
{%- if not infra %}
      machine.openshift.io/cluster-api-machineset: <infrastructure_id>-<role>
{%- endif %}
{%- if infra %}
      machine.openshift.io/cluster-api-machineset: <infrastructure_id>-infra
{%- endif %}
  template:
    metadata:
      creationTimestamp: null
      labels:
        machine.openshift.io/cluster-api-cluster: <infrastructure_id>
{%- if not infra %}
        machine.openshift.io/cluster-api-machine-role: <role>
        machine.openshift.io/cluster-api-machine-type: <role>
        machine.openshift.io/cluster-api-machineset: <infrastructure_id>-<role>
{%- endif %}
{%- if infra %}
        machine.openshift.io/cluster-api-machine-role: infra
        machine.openshift.io/cluster-api-machine-type: infra
        machine.openshift.io/cluster-api-machineset: <infrastructure_id>-infra
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
{%- endif %}
      providerSpec:
        value:
          apiVersion: machine.openshift.io/v1beta1
          credentialsSecret:
            name: vsphere-cloud-credentials
          dataDisks:
          - name: "<disk_name>"
            provisioningMode: "<mode>"
            sizeGiB: 20
          diskGiB: 120
          kind: VSphereMachineProviderSpec
          memoryMiB: 8192
          metadata:
            creationTimestamp: null
          network:
            devices:
            - networkName: "<vm_network_name>"
          numCPUs: 4
          numCoresPerSocket: 1
          snapshot: ""
          template: <vm_template_name>
          userDataSecret:
            name: worker-user-data
          workspace:
            datacenter: <vcenter_data_center_name>
            datastore: <vcenter_datastore_name>
            folder: <vcenter_vm_folder_path>
            resourcepool: <vsphere_resource_pool>
            server: <vcenter_server_ip>
{%- if infra %}
      taints:
      - key: node-role.kubernetes.io/infra
        effect: NoSchedule
{%- endif %}
```

where


`<infrastructure_id>`
:   Specifies the infrastructure ID that is based on the cluster ID that you set when you provisioned the cluster. If you have the OpenShift CLI (`oc`) installed, you can obtain the infrastructure ID by running the following command:
    ```terminal
    $ oc get -o jsonpath='{.status.infrastructureName}{"\n"}' infrastructure cluster
    ```
{% if not infra %}

`<infrastructure_id>-<role>`
:   Specifies the infrastructure ID and node label.

`<role>`
:   Specifies the node label to add.
{% endif %}
{% if infra %}

`<infrastructure_id>-infra`
:   Specifies the infrastructure ID and `infra` node label.

`infra`
:   Specifies the `infra` node label.
{%- endif %}

`<disk_name>`
:   Specifies one or more data disk definitions. For more information, see "Configuring data disks by using machine sets".

`<image_name>`
:   Specifies the image to use as a boot image for your nodes.

`<vm_network_name>`
:   Specifies the {{ vmw_short }} VM network to deploy the compute machine set to. This VM network must be where other compute machines reside in the cluster.

`<vm_template_name>`
:   Specifies the {{ vmw_short }} VM template to use as a boot image for your nodes, such as `user-5ddjd-rhcos`. You should use a template with the latest {{ product_title }} image when adding a new machine set.

`<vcenter_data_center_name>`
:   Specifies the vCenter datacenter to deploy the compute machine set on.

`<vcenter_datastore_name>`
:   Specifies the vCenter datastore to deploy the compute machine set on.

`<vcenter_vm_folder_path>`
:   Specifies the path to the {{ vmw_short }} VM folder in vCenter, such as `/dc1/vm/user-inst-5ddjd`.

`<vsphere_resource_pool>`
:   Specifies the {{ vmw_short }} resource pool for your VMs.

`<vcenter_server_ip>`
:   Specifies the vCenter server IP or fully qualified domain name.

{% if infra %}

`taints`
:   Specifies a taint to prevent user workloads from being scheduled on infra nodes.

    :::note


    After adding the `NoSchedule` taint on the infrastructure node, existing DNS pods running on that node are marked as `misscheduled`. You must either delete or [add toleration on `misscheduled` DNS pods](https://access.redhat.com/solutions/6592171).
    
    :::


{% endif %}
{% if context == "creating-infrastructure-machinesets" %}
{%- set infra = "" -%}
{% endif %}
{% if context == "cluster-tasks" %}
{%- set infra = "" -%}
{% endif %}