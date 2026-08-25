{% if context == "installing-aws-localzone" %}
{%- set local_zone = true -%}
{% endif %}
{% if context == "installing-aws-wavelength-zone" %}
{%- set wavelength_zone = true -%}
{% endif %}
{% if context == "aws-compute-edge-zone-tasks" %}
{%- set post_aws_zones = true -%}
{% endif %}

{%- set _mod_docs_content_type = "CONCEPT" %}
# About edge compute pools {id="edge-machine-pools-aws-local-zones_{{ context }}"}

The edge compute pool configuration is common between {{ aws_first }} {{ zone_type }} locations. You can use the edge compute pool to create new labels to deploy applications onto {{ aws_first }} {{ zone_type }} nodes. Edge compute nodes are tainted compute nodes that run in {{ aws_short }} {{ zone_type }} locations. {._abstract}

When deploying a cluster that uses {{ zone_type }}, consider the following points:

*   Amazon EC2 instances in the {{ zone_type }} are more expensive than Amazon EC2 instances in the Availability Zones.
*   The latency is lower between the applications running in {{ aws_short }} {{ zone_type }} and the user. A latency impact exists for some workloads if, for example, ingress traffic is mixed between {{ zone_type }} and Availability Zones.


:::important

Generally, the maximum transmission unit (MTU) between an Amazon EC2 instance in a {{ zone_type }} and an Amazon EC2 instance in the Region is 1300. The cluster network MTU must be always less than the EC2 MTU to account for the overhead. The specific overhead is determined by the network plugin. For example: OVN-Kubernetes has an overhead of `100 bytes`.

The network plugin can provide additional features, such as IPsec, that also affect the MTU sizing.

:::


{{ product_title }} 4.12 introduced a new compute pool, _edge_, that is designed for use in remote zones. The edge compute pool configuration is common between {{ aws_first }} {{ zone_type }} locations. Because of the type and size limitations of resources like EC2 and EBS on {{ zone_type }} resources, the default instance type can vary from the traditional compute pool.

The default Elastic Block Store (EBS) for {{ zone_type }} locations is `gp2`, which differs from the non-edge compute pool. The instance type used for each {{ zone_type }} on an edge compute pool also might differ from other compute pools, depending on the instance offerings on the zone.

The edge compute pool creates new labels that developers can use to deploy applications onto AWS {{ zone_type }} nodes. The new labels are:

*   `node-role.kubernetes.io/edge=''`
{%- if local_zone %}
*   `machine.openshift.io/zone-type=local-zone`
{%- endif %}
{%- if wavelength_zone %}
*   `machine.openshift.io/zone-type=wavelength-zone`
{%- endif %}
{%- if post_aws_zones %}
*   Local Zones only: `machine.openshift.io/zone-type=local-zone`
*   Wavelength Zones only: `machine.openshift.io/zone-type=wavelength-zone`
{%- endif %}
*   `machine.openshift.io/zone-group=$ZONE_GROUP_NAME`

By default, the machine sets for the edge compute pool define the taint of `NoSchedule` to prevent other workloads from spreading on {{ zone_type }} instances. Users can only run user workloads if they define tolerations in the pod specification.

{% if context == "installing-aws-localzone" %}
{%- set local_zone = "" -%}
{% endif %}
{% if context == "installing-aws-wavelength-zone" %}
{%- set wavelength_zone = "" -%}
{% endif %}
{% if context == "aws-compute-edge-zone-tasks" %}
{%- set post_aws_zones = "" -%}
{% endif %}