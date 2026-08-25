{%- set _mod_docs_content_type = "REFERENCE" %}
# Provisioned AWS Infrastructure {id="rosa-aws-policy-provisioned_{{ context }}"}

This is an overview of the provisioned {{ AWS }} components on a deployed {{ product_title }} cluster. {._abstract}

## EC2 instances {id="rosa-ec2-instances_{{ context }}"}

AWS EC2 instances are required to deploy
{%- if not openshift_rosa_hcp %}
the control plane and data plane functions for
{%- endif %}
{{ product_title }}.
{%- if not openshift_rosa_hcp %}
Instance types can vary for control plane and infrastructure nodes, depending on the worker node count.

At a minimum, the following EC2 instances are deployed:

*   Three `m5.2xlarge` control plane nodes
*   Two `r5.xlarge` infrastructure nodes
*   Two `m5.xlarge` worker nodes
{% endif %}

{% if openshift_rosa_hcp %}
At a minimum, two `m5.xlarge` EC2 instances are deployed for use as worker nodes.
{% endif %}

The instance type shown for worker nodes is the default value, but you can customize the instance type for worker nodes according to the needs of your workload.

## Amazon Elastic Block Store storage {id="rosa-ebs-storage_{{ context }}"}

Amazon Elastic Block Store (Amazon EBS) block storage is used for both local node storage and persistent volume storage. By default, the following storage is provisioned for each EC2 instance:

{% if not openshift_rosa_hcp %}
*   Control Plane Volume
    *   Size: 350GB
    *   Type: gp3
    *   Input/Output Operations Per Second: 1000
*   Infrastructure Volume
    *   Size: 300GB
    *   Type: gp3
    *   Input/Output Operations Per Second: 900
*   Worker Volume
    *   Default size: 300&#160;GiB (adjustable at creation time)
    *   Minimum size: 128GB
    *   Type: gp3
    *   Input/Output Operations Per Second: 900


:::note

Clusters deployed before the release of {{ OCP }} 4.11 use gp2 type storage by default.

:::

{% endif %}
{% if openshift_rosa_hcp %}
*   Node volumes
    *   Type: `AWS EBS GP3`
    *   Default size: 300&#160;GiB (adjustable at creation time)
    *   Minimum size: 75&#160;GiB
*   Workload persistent volumes
    *   Default storage class: `gp3-csi`
    *   Provisioner: `ebs.csi.aws.com`
    *   Dynamic persistent volume provisioning
{% endif %}

## Elastic Load Balancing {id="rosa-elastic-load-balancers_{{ context }}"}

{% if not openshift_rosa_hcp %}
Each cluster can use up to two Classic Load Balancers for application router and up to two Network Load Balancers for API.
{% endif %}
{% if openshift_rosa_hcp %}
By default, one Network Load Balancer is created for use by the default ingress controller. You can create additional load balancers of the following types according to the needs of your workload:

*   Classic Load Balancer
*   Network Load Balancer
*   Application Load Balancer

{%- endif %}
For more information, see the [ELB documentation for AWS](https://aws.amazon.com/elasticloadbalancing/features/#Details_for_Elastic_Load_Balancing_Products).

## S3 storage {id="rosa-s3-storage_{{ context }}"}

The image registry is backed by AWS S3 storage. Resources are pruned regularly to optimize S3 usage and cluster performance.


:::note

Two buckets are required with a typical size of 2TB each.

:::


## VPC {id="rosa-vpc_{{ context }}"}

Configure your VPC according to the following requirements:

*   **Subnets**: Every cluster requires a minimum of one private subnet for every availability zone. For example, 1 private subnet is required for a single-zone cluster, and 3 private subnets are required for a cluster with 3 availability zones.

    If your cluster needs direct access to a network that is external to the cluster, including the public internet, you require at least one public subnet.

    Red&#160;Hat strongly recommends using unique subnets for each cluster. Sharing subnets between multiple clusters is not recommended.

    :::note

    A **public subnet** connects directly to the internet through an internet gateway.

    A **private subnet** connects to the internet through a network address translation (NAT) gateway.
    
    :::

*   **Route tables**: One route table per private subnet, and one additional table per cluster.
*   **Internet gateways**: One Internet Gateway per cluster.
*   **NAT gateways**: One NAT Gateway per public subnet.

{% if not openshift_rosa_hcp %}
**Figure 1. Sample VPC Architecture**

![VPC Reference Architecture](/_assets/images/VPC-Diagram.png)
{% endif %}

## Security groups {id="rosa-security-groups_{{ context }}"}

AWS security groups provide security at the protocol and port access level; they are associated with EC2 instances and Elastic Load Balancing (ELB) load balancers. Each security group contains a set of rules that filter traffic coming in and out of one or more EC2 instances.

Ensure that the ports required for cluster installation and operation are open on your network and configured to allow access between hosts. The requirements for the default security groups are listed in [Required ports for default security groups](#required-secgroup-ports_{{ context }}).

<a name="required-secgroup-ports_{{ context }}"></a>

***Required ports for default security groups***

<table>
<thead>
<tr>
  <th>Group</th>
  <th>Type</th>
  <th>IP Protocol</th>
  <th>Port range</th>
</tr>
</thead>
<tbody>
<tr>
  {% if not openshift_rosa_hcp %}<td>.4+</td>{% endif %}
  {% if not openshift_rosa_hcp %}<td>MasterSecurityGroup .4+</td>{% endif %}
  {% if not openshift_rosa_hcp %}<td><code>AWS::EC2::SecurityGroup</code></td>{% endif %}
  {% if not openshift_rosa_hcp %}<td><code>icmp</code></td>{% endif %}
</tr>
<tr>
  {% if not openshift_rosa_hcp %}<td><code>0</code></td>{% endif %}
  {% if not openshift_rosa_hcp %}<td><code>tcp</code></td>{% endif %}
  {% if not openshift_rosa_hcp %}<td><code>22</code></td>{% endif %}
  {% if not openshift_rosa_hcp %}<td><code>tcp</code></td>{% endif %}
</tr>
<tr>
  {% if not openshift_rosa_hcp %}<td><code>6443</code></td>{% endif %}
  {% if not openshift_rosa_hcp %}<td><code>tcp</code></td>{% endif %}
  {% if not openshift_rosa_hcp %}<td><code>22623</code><br><br>.2+</td>{% endif %}
  <td>WorkerSecurityGroup</td>
</tr>
<tr>
  <td>.2+</td>
  <td><code>AWS::EC2::SecurityGroup</code></td>
  <td><code>icmp</code></td>
  <td><code>0</code></td>
</tr>
<tr>
  <td><code>tcp</code></td>
  <td><code>22</code><br><br>.2+</td>
  {% if not openshift_rosa_hcp %}<td>BootstrapSecurityGroup .2+</td>{% endif %}
  {% if not openshift_rosa_hcp %}<td><code>AWS::EC2::SecurityGroup</code></td>{% endif %}
</tr>
<tr>
  {% if not openshift_rosa_hcp %}<td><code>tcp</code></td>{% endif %}
  {% if not openshift_rosa_hcp %}<td><code>22</code></td>{% endif %}
  {% if not openshift_rosa_hcp %}<td><code>tcp</code></td>{% endif %}
  {% if not openshift_rosa_hcp %}<td><code>19531</code></td>{% endif %}
</tr>
</tbody>
</table>