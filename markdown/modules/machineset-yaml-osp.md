{% if context == "creating-infrastructure-machinesets" %}
{%- set infra = true -%}
{% endif %}

{%- set _mod_docs_content_type = "REFERENCE" %}
{% include "./_attributes/common-attributes.md" %}
# Sample YAML for a compute machine set custom resource on {{ rh_openstack }} {id="machineset-yaml-osp_{{ context }}"}

To enable the Machine API to automate the scaling and management of compute nodes, define a `MachineSet` resource with {{ rh_openstack_first }} parameters, for example, image and network IDs. {._abstract}

The sample YAML defines a compute machine set that runs on {{ rh_openstack_first }} and creates nodes that are labeled with
{%- if not infra %}
`node-role.kubernetes.io/<role>: ""`.
{% endif %}
{% if infra %}
`node-role.kubernetes.io/infra: ""`. It specifies a taint to prevent user workloads from being scheduled on infra nodes. After adding the `NoSchedule` taint on the infrastructure node, existing DNS pods running on that node are marked as `misscheduled`. You must either delete or [add toleration on `misscheduled` DNS pods](https://access.redhat.com/solutions/6592171).
{% endif %}

In the sample, `<infrastructure_id>` is the infrastructure ID label that is based on the cluster ID that you set when you provisioned the cluster, and
{% if not infra %}
`<role>`
{% endif %}
{% if infra %}
`<infra>`
{% endif %}
is the node label to add.

```yaml
apiVersion: machine.openshift.io/v1beta1
kind: MachineSet
metadata:
  labels:
    machine.openshift.io/cluster-api-cluster: <infrastructure_id>
{%- if not infra %}
    machine.openshift.io/cluster-api-machine-role: <role>
    machine.openshift.io/cluster-api-machine-type: <role>
  name: <infrastructure_id>-<role>
{% endif %}
{% if infra %}
    machine.openshift.io/cluster-api-machine-role: infra
    machine.openshift.io/cluster-api-machine-type: infra
  name: <infrastructure_id>-infra
{%- endif %}
  namespace: openshift-machine-api
spec:
  replicas: <number_of_replicas>
  selector:
    matchLabels:
      machine.openshift.io/cluster-api-cluster: <infrastructure_id>
{%- if not infra %}
      machine.openshift.io/cluster-api-machineset: <infrastructure_id>-<role>
{% endif %}
{% if infra %}
      machine.openshift.io/cluster-api-machineset: <infrastructure_id>-infra
{%- endif %}
  template:
    metadata:
      labels:
        machine.openshift.io/cluster-api-cluster: <infrastructure_id>
{%- if not infra %}
        machine.openshift.io/cluster-api-machine-role: <role>
        machine.openshift.io/cluster-api-machine-type: <role>
        machine.openshift.io/cluster-api-machineset: <infrastructure_id>-<role>
    spec:
{% endif %}
{% if infra %}
        machine.openshift.io/cluster-api-machine-role: infra
        machine.openshift.io/cluster-api-machine-type: infra
        machine.openshift.io/cluster-api-machineset: <infrastructure_id>-infra
    spec:
      metadata:
        creationTimestamp: null
        labels:
          node-role.kubernetes.io/infra: ""
      taints:
      - key: node-role.kubernetes.io/infra
        effect: NoSchedule
{%- endif %}
      providerSpec:
        value:
          apiVersion: machine.openshift.io/v1alpha1
          cloudName: openstack
          cloudsSecret:
            name: openstack-cloud-credentials
            namespace: openshift-machine-api
          flavor: <nova_flavor>
{%- if infra %}
          image: <glance_image_name_or_location>
{% endif %}
{% if not infra %}
          image: <glance_image_name_or_location>
{% endif %}
{% if not infra %}
          serverGroupID: <optional_UUID_of_server_group>
{% endif %}
{% if infra %}
          serverGroupID: <optional_UUID_of_server_group>
{%- endif %}
          kind: OpenstackProviderSpec
{%- if not infra %}
          networks:
{% endif %}
{% if infra %}
          networks:
{%- endif %}
          - filter: {}
            subnets:
            - filter:
                name: <subnet_name>
                tags: openshiftClusterID=<infrastructure_id>
{%- if not infra %}
          primarySubnet: <rhosp_subnet_UUID>
{% endif %}
{% if infra %}
          primarySubnet: <rhosp_subnet_UUID>
{%- endif %}
          securityGroups:
          - filter: {}
            name: <infrastructure_id>-worker
          serverMetadata:
            Name: <infrastructure_id>-worker
            openshiftClusterID: <infrastructure_id>
          tags:
          - openshiftClusterID=<infrastructure_id>
          trunk: true
          userDataSecret:
            name: worker-user-data
          availabilityZone: <optional_openstack_availability_zone>
```

where:


`<infrastructure_id>`
:   Specifies the infrastructure ID that is based on the cluster ID that you set when you provisioned the cluster. If you have the {{ product_title }} CLI installed, you can obtain the infrastructure ID by running the following command:
    ```terminal
    $ oc get -o jsonpath='{.status.infrastructureName}{"\n"}' infrastructure cluster
    ```

{% if not infra %}

`<role>`
:   Specifies the node label to add.

`<infrastructure_id>-<role>`
:   Specifies the infrastructure ID and node label.


`<glance_image_name_or_location>`
:    Specifies the image to use as a boot image for your nodes. You should use the latest image when adding a new machine set.


`<optional_UUID_of_server_group>`
:   Sets a server group policy for the `MachineSet` YAML by entering the value that is returned from
    [creating a server group](https://access.redhat.com/documentation/en-us/red_hat_openstack_platform/16.0/html/command_line_interface_reference/server#server_group_create). For most deployments, `anti-affinity` or `soft-anti-affinity` policies are recommended.


`<subnet_name>`
:   Specifies a subnet to use.

    :::note


    The `spec.template.spec.providerSpec.value.networks` stanza is required for deployments to multiple networks. If deploying to multiple networks, this list must include the network that is used as the `primarySubnet` value.
    
    :::



`<rhosp_subnet_UUID>`
:   Specifies the {{ rh_openstack }} subnet that you want the endpoints of nodes to be published on. Usually, this is the same subnet that is used as the value of `machinesSubnet` in the `install-config.yaml` file.
{% endif %}

{% if infra %}

`<infrastructure_id>-infra`
:   Specifies the infrastructure ID and `infra` node label.


`<glance_image_name_or_location>`
:    Specifies the image to use as a boot image for your nodes. You should use the latest image when adding a new machine set.


`<optional_UUID_of_server_group>`
:   Sets a server group policy for the `MachineSet` YAML, by entering the value that is returned from
    [creating a server group](https://access.redhat.com/documentation/en-us/red_hat_openstack_platform/16.0/html/command_line_interface_reference/server#server_group_create). For most deployments, `anti-affinity` or `soft-anti-affinity` policies are recommended.


`<subnet_name>`
:   Specifies a subnet to use.

    :::note


    The `spec.template.spec.providerSpec.value.networks` stanza is required for deployments to multiple networks. If deploying to multiple networks, this list must include the network that is used as the `primarySubnet` value.
    
    :::



`<rhosp_subnet_UUID>`
:   Specifies the {{ rh_openstack }} subnet that you want the endpoints of nodes to be published on. Usually, this is the same subnet that is used as the value of `machinesSubnet` in the `install-config.yaml` file.
{% endif %}

{% if context == "creating-infrastructure-machinesets" %}
{%- set infra = false -%}
{% endif %}
{% if context == "cluster-tasks" %}
{%- set infra = false -%}
{% endif %}