{% if context == "creating-infrastructure-machinesets" %}
{%- set infra = true -%}
{% endif %}
{% if context == "cluster-tasks" %}
{%- set infra = true -%}
{% endif %}
{% if context == "aws-compute-edge-zone-tasks" %}
{%- set edge = true -%}
{% endif %}

{%- set _mod_docs_content_type = "REFERENCE" %}
# Sample YAML for a compute machine set custom resource on {{ aws_short }} {id="machineset-yaml-aws_{{ context }}"}

{%- if not edge %}
The sample YAML defines a compute machine set that runs in the `us-east-1a` {{ aws_first }} Local Zone and creates nodes that are labeled with
{% endif %}
{% if not (infra or edge) %}
`node-role.kubernetes.io/<role>: ""`.
{% endif %}
{% if infra %}
`node-role.kubernetes.io/infra: ""`.
{% endif %}
{% if edge %}
This sample YAML defines a compute machine set that runs in the `us-east-1-nyc-1a` {{ aws_short }} zone and creates nodes that are labeled with `node-role.kubernetes.io/edge: ""`.
{% endif %} {._abstract}

{% if infra or edge %}
The sample YAML specifies a taint to prevent user workloads from being scheduled on
{% if infra %}
`infra`
{% endif %}
{% if edge %}
`edge`
{% endif %}
nodes.

After adding the `NoSchedule` taint on the infrastructure node, existing DNS pods running on that node are marked as `misscheduled`. You must either delete or [add toleration on `misscheduled` DNS pods](https://access.redhat.com/solutions/6592171).
{% endif %}

{% if edge %}

:::note

If you want to reference the sample YAML file in the context of Wavelength Zones, ensure that you replace the {{ aws_short }} Region and zone information with supported Wavelength Zone values.

:::

{% endif %}

In this sample, `<infrastructure_id>` is the infrastructure ID label that is based on the cluster ID that you set when you provisioned the cluster, and
{% if not (infra or edge) %}
`<role>`
{% endif %}
{% if infra %}
`<infra>`
{% endif %}
{% if edge %}
`<edge>`
{% endif %}
is the node label to add.

```yaml
apiVersion: machine.openshift.io/v1beta1
kind: MachineSet
metadata:
  labels:
    machine.openshift.io/cluster-api-cluster: <infrastructure_id>
{%- if not (infra or edge) %}
  name: <infrastructure_id>-<role>-<zone>
{% endif %}
{% if infra %}
  name: <infrastructure_id>-infra-<zone>
{% endif %}
{% if edge %}
  name: <infrastructure_id>-edge-<zone>
{%- endif %}
  namespace: openshift-machine-api
spec:
  replicas: 1
  selector:
    matchLabels:
      machine.openshift.io/cluster-api-cluster: <infrastructure_id>
{%- if edge %}
      machine.openshift.io/cluster-api-machineset: <infrastructure_id>-edge-<zone>
{% endif %}
{% if not (infra or edge) %}
      machine.openshift.io/cluster-api-machineset: <infrastructure_id>-<role>-<zone>
{% endif %}
{% if infra %}
      machine.openshift.io/cluster-api-machineset: <infrastructure_id>-infra-<zone>
{%- endif %}
  template:
    metadata:
      labels:
        machine.openshift.io/cluster-api-cluster: <infrastructure_id>
{%- if not (infra or edge) %}
        machine.openshift.io/cluster-api-machine-role: <role>
        machine.openshift.io/cluster-api-machine-type: <role>
        machine.openshift.io/cluster-api-machineset: <infrastructure_id>-<role>-<zone>
{% endif %}
{% if infra %}
        machine.openshift.io/cluster-api-machine-role: infra
        machine.openshift.io/cluster-api-machine-type: infra
        machine.openshift.io/cluster-api-machineset: <infrastructure_id>-infra-<zone>
{% endif %}
{% if edge %}
        machine.openshift.io/cluster-api-machine-role: edge
        machine.openshift.io/cluster-api-machine-type: edge
        machine.openshift.io/cluster-api-machineset: <infrastructure_id>-edge-<zone>
{%- endif %}
    spec:
      metadata:
        labels:
{%- if not (infra or edge) %}
          node-role.kubernetes.io/<role>: ""
{% endif %}
{% if infra %}
          node-role.kubernetes.io/infra: ""
{% endif %}
{% if edge %}
          machine.openshift.io/parent-zone-name: <value_of_ParentZoneName>
          machine.openshift.io/zone-group: <value_of_GroupName>
          machine.openshift.io/zone-type: <value_of_ZoneType>
          node-role.kubernetes.io/edge: ""
{%- endif %}
      providerSpec:
        value:
          ami:
            id: ami-046fe691f52a953f9
          apiVersion: machine.openshift.io/v1beta1
          blockDevices:
            - ebs:
                iops: 0
                volumeSize: 120
                volumeType: gp2
          credentialsSecret:
            name: aws-cloud-credentials
          deviceIndex: 0
          iamInstanceProfile:
            id: <infrastructure_id>-worker-profile
          instanceType: m6i.large
          kind: AWSMachineProviderConfig
          placement:
            availabilityZone: <zone>
            region: <region>
          securityGroups:
            - filters:
                - name: tag:Name
                  values:
                    - <infrastructure_id>-node
            - filters:
                - name: tag:Name
                  values:
                    - <infrastructure_id>-lb
          subnet:
{%- if not edge %}
            filters:
              - name: tag:Name
                values:
                  - <infrastructure_id>-subnet-private-<zone>
                    {% endif %}
                    {% if edge %}
              id: <value_of_PublicSubnetIds>
          publicIp: true
{%- endif %}
          tags:
            - name: kubernetes.io/cluster/<infrastructure_id>
              value: owned
            - name: <custom_tag_name>
              value: <custom_tag_value>
          userDataSecret:
            name: worker-user-data
{%- if infra or edge %}
      taints:
{%- if infra %}
        - key: node-role.kubernetes.io/infra
          {% endif %}
          {% if edge %}
        - key: node-role.kubernetes.io/edge
          {%- endif %}
          effect: NoSchedule
{%- endif %}
```
where:


`<infrastructure_id>`
:   Specifies the infrastructure ID that is based on the cluster ID that you set when you provisioned the cluster. If you have the OpenShift CLI installed, you can obtain the infrastructure ID by running the following command:
    ```terminal
    $ oc get -o jsonpath='{.status.infrastructureName}{"\n"}' infrastructure cluster
    ```
{%- if not (infra or edge) %}

`<infrastructure_id>-<role>-<zone>`
:   Specifies the infrastructure ID, role node label, and zone.

`<role>`
:   Specifies the role node label to add.
{% endif %}
{% if infra %}

`<infrastructure_id>-infra-<zone>`
:   Specifies the infrastructure ID, `infra` role node label, and zone.

`<infra>`
:   Specifies the `infra` role node label.
{% endif %}
{% if edge %}

`<infrastructure_id>-edge-<zone>`
:   Specifies the infrastructure ID, `edge` role node label, and zone name.

`<edge>`
:   Specifies the `edge` role node label.
{% endif %}
{% if not edge %}

`<zone>`
:   Specifies the zone name, for example, `us-east-1a`.
{% endif %}
{% if edge %}

`<zone>`
:   Specifies the zone name, for example, `us-east-1-nyc-1a`.
{%- endif %}

`<region>`
:   Specifies the region, for example, `us-east-1`.
{%- if not edge %}

`<infrastructure_id>-subnet-private-<zone>`
:   Specifies the infrastructure ID and zone.
{% endif %}
{% if edge %}

`<value_of_PublicSubnetIds>`
:   Indicates the ID of the public subnet that you created in {{ aws_short }} {{ zone_type }}. You created this public subnet ID when you finished the procedure for "Creating a subnet in an {{ aws_short }} zone".
{%- endif %}

`<custom_tag_name>`
:   Optional: Specifies custom tag data for your cluster. For example, you might add an admin contact email address by specifying a `name:value` pair of `Email:\admin-email@example.com`.

    :::note


    Custom tags can also be specified during installation in the `install-config.yaml` file. If the `install-config.yaml` file and the machine set include a tag with the same `name` data, the value for the tag from the machine set takes priority over the value for the tag in the `install-config.yaml` file.
    
    :::



:::note

The `spec.template.spec.providerSpec.value.ami.id` stanza specifies a valid {{ op_system_first }} Amazon Machine Image (AMI) for your {{ aws_short }} zone for your {{ product_title }} nodes. If you want to use an {{ aws_short }} Marketplace image, you must complete the {{ product_title }} subscription from the [{{ aws_short }} Marketplace](https://aws.amazon.com/marketplace/fulfillment?productId=59ead7de-2540-4653-a8b0-fa7926d5c845) to obtain an AMI ID for your region.

```terminal
$ oc -n openshift-machine-api \
    -o jsonpath='{.spec.template.spec.providerSpec.value.ami.id}{"\n"}' \
    get machineset/<infrastructure_id>-<role>-<zone>
```

:::


{% if infra %}

Machine sets running on {{ aws_short }} support non-guaranteed Spot Instances. You can save on costs by using Spot Instances at a lower price compared to On-Demand Instances on {{ aws_short }}. For more information, see "Machine sets that deploy machines as Spot Instances".
{% endif %}

{% if context == "creating-infrastructure-machinesets" %}
{%- set infra = false -%}
{% endif %}
{% if context == "cluster-tasks" %}
{%- set infra = false -%}
{% endif %}
{% if context == "aws-compute-edge-zone-tasks" %}
{%- set edge = false -%}
{% endif %}