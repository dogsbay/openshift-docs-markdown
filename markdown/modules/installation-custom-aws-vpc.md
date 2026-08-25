{% if context == "installing-aws-china-region" %}
{%- set aws_china = true -%}
{% endif %}
{% if context == "installing-aws-vpc" %}
{%- set public = true -%}
{% endif %}
{% if context == "installing-aws-secret-region" %}
{%- set aws_secret = true -%}
{% endif %}
{% if context == "installing-aws-specialized-region" %}
{%- set aws_secret = true -%}
{%- set aws_china = true -%}
{% endif %}
{% if context == "installing-aws-outposts-remote-workers" %}
{%- set aws_outposts = true -%}
{% endif %}

{%- set _mod_docs_content_type = "CONCEPT" %}
# About using a custom VPC {id="installation-custom-aws-vpc_{{ context }}"}

{% if not aws_outposts %}
You can deploy a cluster into existing subnets in an existing Amazon Virtual Private Cloud (VPC) in Amazon Web Services (AWS). {._abstract}

By deploying {{ product_title }} into an existing AWS VPC, you might be able to avoid limit constraints in new accounts or more easily abide by the operational constraints that your company’s guidelines set. If you cannot obtain the infrastructure creation permissions that are required to create the VPC yourself, use this installation option.
{% endif %}
{% if aws_outposts %}
The installation program cannot automatically deploy AWS Subnets on AWS Outposts, so you will need to manually configure the VPC. Therefore, you have to deploy the cluster into existing subnets in an existing Amazon Virtual Private Cloud (VPC) in Amazon Web Services (AWS).

In addition, by deploying {{ product_title }} into an existing AWS VPC, you might be able to avoid limit constraints in new accounts or more easily abide by the operational constraints that your company’s guidelines set.
{% endif %}

Because the installation program cannot know what other components are also in your existing subnets, it cannot choose subnet CIDRs and so forth on your behalf. You must configure networking for the subnets that you install your cluster to yourself.

The installation program no longer creates the following components:

*   Internet gateways
*   NAT gateways
*   Subnets
*   Route tables
*   VPCs
*   VPC DHCP options
*   VPC endpoints

{% include "./snippets/custom-dns-server.md" %}

If you use a custom VPC, you must correctly configure it and its subnets for the installation program and the cluster to use. See "Create a VPC" in the {{ aws_full }} documentation for more information about {{ aws_short }} VPC console wizard configurations and creating and managing an {{ aws_short }} VPC.

The installation program cannot:

*   Subdivide network ranges for the cluster to use.
*   Set route tables for the subnets.
*   Set VPC options like DHCP.

You must complete these tasks before you install the cluster. See "VPC networking components" and "Route tables for your VPC" for more information on configuring networking in an AWS VPC.

Your VPC must meet the following characteristics:

{% if public %}
*   Create a public and private subnet for each availability zone that your cluster uses. Each availability zone can contain no more than one public and one private subnet. For an example of this type of configuration, see "VPC with public and private subnets (NAT)" in the AWS documentation.

    Record each subnet ID. Completing the installation requires that you enter these values in the `platform` section of the `install-config.yaml` file. See "Finding a subnet ID" in the AWS documentation.
*   The VPC’s CIDR block must contain the `Networking.MachineCIDR` range, which is the IP address pool for cluster machines. The subnet CIDR blocks must belong to the machine CIDR that you specify.
*   The VPC must have a public internet gateway attached to it. For each availability zone:
    *   The public subnet requires a route to the internet gateway.
    *   The public subnet requires a NAT gateway with an EIP address.
    *   The private subnet requires a route to the NAT gateway in public subnet.
{% endif %}
{% if aws_outposts %}

    :::note

    To allow the creation of {{ product_title }} with remote workers in the AWS Outposts, you must create at least one private subnet in the AWS Outpost instance for the workload instances creation and one private subnet in an AWS region for the control plane instances creation. If you specify more than one private subnet in the region, the control plane instances will be distributed across these subnets. You will also need to create a public subnet in each of the availability zones used for private subnets, including the Outpost private subnet, as Network Load Balancers will be created in the AWS region for the API server and Ingress network as part of the cluster installation. It is possible to create an AWS region private subnet in the same Availability zone as an Outpost private subnet.
    
    :::

*   Create a public and private subnet in the AWS Region for each availability zone that your control plane uses. Each availability zone can contain no more than one public and one private subnet in the AWS region. For an example of this type of configuration, see "VPC with public and private subnets (NAT)" in the AWS documentation.

    To create a private subnet in the AWS Outposts, you need to first ensure that the Outpost instance is located in the desired availability zone. Then, you can create the private subnet within that availability zone within the Outpost instance, by adding the Outpost ARN. Make sure there is another public subnet in the AWS Region created in the same availability zone.

    Record each subnet ID. Completing the installation requires that you enter all the subnets IDs, created in the AWS Region, in the `platform` section of the `install-config.yaml` file and changing the workers `machineset` to use the private subnet ID created in the Outpost. See "Finding a subnet ID" in the AWS documentation.

    :::important

    In case you need to create a public subnet in the AWS Outposts, verify that this subnet is not used for the Network or Classic LoadBalancer, otherwise the LoadBalancer creation fails. To achieve that, the `kubernetes.io/cluster/.*-outposts: owned` special tag must be included in the subnet.
    
    :::

*   The VPC’s CIDR block must contain the `Networking.MachineCIDR` range, which is the IP address pool for cluster machines. The subnet CIDR blocks must belong to the machine CIDR that you specify.
*   The VPC must have a public internet gateway attached to it. For each availability zone:
    *   The public subnet requires a route to the internet gateway.
    *   The public subnet requires a NAT gateway with an EIP address.
    *   The private subnet requires a route to the NAT gateway in public subnet.


        :::note

        To access your local cluster over your local network, the VPC must be associated with your Outpost’s local gateway route table. For more information, see "VPC associations" in the AWS Outposts User Guide.
        
        :::

{%- endif %}
*   The VPC must not use the `kubernetes.io/cluster/.*: owned`, `Name`, and `openshift.io/cluster` tags.

    The installation program modifies your subnets to add the `kubernetes.io/cluster/.*: shared` tag, so your subnets must have at least one free tag slot available for it. See "Tag Restrictions" in the AWS documentation to confirm that the installation program can add a tag to each subnet that you specify. You cannot use a `Name` tag, because it overlaps with the EC2 `Name` field and the installation fails.
*   If you want to extend your {{ product_title }} cluster into an AWS Outpost and have an existing Outpost subnet, the existing subnet must use the `kubernetes.io/cluster/unmanaged: true` tag. If you do not apply this tag, the installation might fail due to the Cloud Controller Manager creating a service load balancer in the Outpost subnet, which is an unsupported configuration.
*   You must enable the `enableDnsSupport` and `enableDnsHostnames` attributes in your VPC, so that the cluster can use the Route 53 zones that are attached to the VPC to resolve cluster’s internal DNS records. See "DNS Support in Your VPC" in the AWS documentation.

    If you prefer to use your own Route 53 hosted private zone, you must associate the existing hosted zone with your VPC prior to installing a cluster. You can define your hosted zone using the `platform.aws.hostedZone` and `platform.aws.hostedZoneRole` fields in the `install-config.yaml` file.
    You can use a private hosted zone from another account by sharing it with the account where you install the cluster. If you use a private hosted zone from another account, you must use the `Passthrough` or `Manual` credentials mode.

{% if not (aws_secret or aws_outposts) %}
If you are working in a disconnected environment, you are unable to reach the public IP addresses for EC2, ELB, and S3 endpoints. Depending on the level to which you want to restrict internet traffic during the installation, the following configuration options are available:
{% endif %}

{% if aws_secret %}
A cluster in an SC2S or C2S Region is unable to reach the public IP addresses for the EC2, ELB, and S3 endpoints. Depending on the level to which you want to restrict internet traffic during the installation, the following configuration options are available:
{% endif %}

## Option 1: Create VPC endpoints {id="create-vpc-endpoints_{{ context }}"}

Create a VPC endpoint and attach it to the subnets that the clusters are using. Name the endpoints as follows:

{% if not (aws_china or aws_secret) %}
*   `ec2.<aws_region>.amazonaws.com`
*   `elasticloadbalancing.<aws_region>.amazonaws.com`
*   `s3.<aws_region>.amazonaws.com`
{% endif %}

{% if aws_china %}

China
:   *   `ec2.<aws_region>.amazonaws.com.cn`
    *   `elasticloadbalancing.<aws_region>.amazonaws.com`
    *   `s3.<aws_region>.amazonaws.com`
{% endif %}

{% if aws_secret %}

SC2S
:   *   `elasticloadbalancing.<aws_region>.sc2s.sgov.gov`
    *   `ec2.<aws_region>.sc2s.sgov.gov`
    *   `s3.<aws_region>.sc2s.sgov.gov`

C2S
:   *   `elasticloadbalancing.<aws_region>.c2s.ic.gov`
    *   `ec2.<aws_region>.c2s.ic.gov`
    *   `s3.<aws_region>.c2s.ic.gov`
{% endif %}

With this option, network traffic remains private between your VPC and the required AWS services.

## Option 2: Create a proxy without VPC endpoints {id="create-proxy-without-vpc-endpoints_{{ context }}"}
As part of the installation process, you can configure an HTTP or HTTPS proxy. With this option, internet traffic goes through the proxy to reach the required AWS services.

## Option 3: Create a proxy with VPC endpoints {id="create-proxy-with-vpc-endpoints_{{ context }}"}
As part of the installation process, you can configure an HTTP or HTTPS proxy with VPC endpoints. Create a VPC endpoint and attach it to the subnets that the clusters are using. Name the endpoints as follows:

{% if not (aws_china or aws_secret) %}
*   `ec2.<aws_region>.amazonaws.com`
*   `elasticloadbalancing.<aws_region>.amazonaws.com`
*   `s3.<aws_region>.amazonaws.com`
{% endif %}

{% if aws_china %}

China
:   *   `ec2.<aws_region>.amazonaws.com.cn`
    *   `elasticloadbalancing.<aws_region>.amazonaws.com`
    *   `s3.<aws_region>.amazonaws.com`
{% endif %}

{% if aws_secret %}

SC2S
:   *   `elasticloadbalancing.<aws_region>.sc2s.sgov.gov`
    *   `ec2.<aws_region>.sc2s.sgov.gov`
    *   `s3.<aws_region>.sc2s.sgov.gov`

C2S
:   *   `elasticloadbalancing.<aws_region>.c2s.ic.gov`
    *   `ec2.<aws_region>.c2s.ic.gov`
    *   `s3.<aws_region>.c2s.ic.gov`
{% endif %}

When configuring the proxy in the `install-config.yaml` file, add these endpoints to the `noProxy` field. With this option, the proxy prevents the cluster from accessing the internet directly. However, network traffic remains private between your VPC and the required AWS services.

You must provide a suitable VPC and subnets that allow communication to your
machines.

**Required VPC components**

<table>
<thead>
<tr>
  <th>Component</th>
  <th>AWS type</th>
  <th colspan="2">Description</th>
</tr>
</thead>
<tbody>
<tr>
  <td>VPC</td>
  <td><ul><li><code>AWS::EC2::VPC</code></li><li><code>AWS::EC2::VPCEndpoint</code></li></ul></td>
  <td colspan="2">You must provide a public VPC for the cluster to use. The VPC uses an endpoint that references the route tables for each subnet to improve communication with the registry that is hosted in S3.</td>
</tr>
<tr>
  <td>Public subnets</td>
  <td><ul><li><code>AWS::EC2::Subnet</code></li><li><code>AWS::EC2::SubnetNetworkAclAssociation</code></li></ul></td>
  <td colspan="2">Your VPC must have public subnets for between 1 and 3 availability zones and associate them with appropriate Ingress rules.</td>
</tr>
<tr>
  <td>Internet gateway</td>
  <td><ul><li><code>AWS::EC2::InternetGateway</code></li><li><code>AWS::EC2::VPCGatewayAttachment</code></li><li><code>AWS::EC2::RouteTable</code></li><li><code>AWS::EC2::Route</code></li><li><code>AWS::EC2::SubnetRouteTableAssociation</code></li><li><code>AWS::EC2::NatGateway</code></li><li><code>AWS::EC2::EIP</code></li></ul></td>
  <td colspan="2">You must have a public internet gateway, with public routes, attached to the VPC. In the provided templates, each public subnet has a NAT gateway with an EIP address. These NAT gateways allow cluster resources, like private subnet instances, to reach the internet and are not required for some restricted network or proxy scenarios.</td>
</tr>
<tr>
  <td rowspan="7">Network access control</td>
  <td rowspan="7"><ul><li><code>AWS::EC2::NetworkAcl</code></li><li><code>AWS::EC2::NetworkAclEntry</code></li></ul></td>
  <td colspan="2">You must allow the VPC to access the following ports:</td>
</tr>
<tr>
  <th>Port</th>
  <th>Reason</th>
</tr>
<tr>
  <td><code>80</code></td>
  <td>Inbound HTTP traffic</td>
</tr>
<tr>
  <td><code>443</code></td>
  <td>Inbound HTTPS traffic</td>
</tr>
<tr>
  <td><code>22</code></td>
  <td>Inbound SSH traffic</td>
</tr>
<tr>
  <td><code>1024</code> - <code>65535</code></td>
  <td>Inbound ephemeral traffic</td>
</tr>
<tr>
  <td><code>0</code> - <code>65535</code></td>
  <td>Outbound ephemeral traffic</td>
</tr>
<tr>
  <td>Private subnets</td>
  <td><ul><li><code>AWS::EC2::Subnet</code></li><li><code>AWS::EC2::RouteTable</code></li><li><code>AWS::EC2::SubnetRouteTableAssociation</code></li></ul></td>
  <td colspan="2">Your VPC can have private subnets. The provided CloudFormation templates can create private subnets for between 1 and 3 availability zones. {% if aws_outposts %} To enable remote workers running in the Outpost, the VPC must include a private subnet located within the Outpost instance, in addition to the private subnets located within the corresponding AWS region. {% endif %} If you use private subnets, you must provide appropriate routes and tables for them.</td>
</tr>
</tbody>
</table>

## VPC validation {id="installation-custom-aws-vpc-validation_{{ context }}"}

To ensure that the subnets that you provide are suitable, the installation program confirms the following data:

*   All the subnets that you specify exist.
*   You provide private subnets.
*   The subnet CIDRs belong to the machine CIDR that you specified.
{%- if not aws_outposts %}
*   You provide subnets for each availability zone. Each availability zone contains no more than one public and one private subnet. If you use a private cluster, provide only a private subnet for each availability zone. Otherwise, provide exactly one public and private subnet for each availability zone.
{%- endif %}
{%- if aws_outposts %}
*   You provide subnets for each availability zone. Each availability zone contains exactly one public and one private subnet in the AWS region (not created in the Outpost instance). The availability zone in which the Outpost instance is installed should include one aditional private subnet in the Outpost instance.
{%- endif %}
*   You provide a public subnet for each private subnet availability zone. Machines are not provisioned in availability zones that you do not provide private subnets for.

If you destroy a cluster that uses an existing VPC, the VPC is not deleted. When you remove the {{ product_title }} cluster from a VPC, the `kubernetes.io/cluster/.*: shared` tag is removed from the subnets that it used.

## Division of permissions {id="installation-about-custom-aws-permissions_{{ context }}"}

Starting with {{ product_title }} 4.3, you do not need all of the permissions that are required for an installation program-provisioned infrastructure cluster to deploy a cluster. This change mimics the division of permissions that you might have at your company: some individuals can create different resource in your clouds than others. For example, you might be able to create application-specific items, like instances, buckets, and load balancers, but not networking-related components such as VPCs, subnets, or ingress rules.

The AWS credentials that you use when you create your cluster do not need the networking permissions that are required to make VPCs and core networking components within the VPC, such as subnets, routing tables, internet gateways, NAT, and VPN. You still need permission to make the application resources that the machines within the cluster require, such as ELBs, security groups, S3 buckets, and nodes.

## Isolation between clusters {id="installation-custom-aws-vpc-isolation_{{ context }}"}

If you deploy {{ product_title }} to an existing network, the isolation of cluster services is reduced in the following ways:

*   You can install multiple {{ product_title }} clusters in the same VPC.
*   ICMP ingress is allowed from the entire network.
*   TCP 22 ingress (SSH) is allowed to the entire network.
*   Control plane TCP 6443 ingress (Kubernetes API) is allowed to the entire network.
*   Control plane TCP 22623 ingress (MCS) is allowed to the entire network.

**Additional resources**
{._additional-resources}

*   [Create a VPC ({{ aws_full }} documentation)](https://docs.aws.amazon.com/vpc/latest/userguide/working-with-vpcs.html)
*   [VPC networking components ({{ aws_full }} documentation)](https://docs.aws.amazon.com/vpc/latest/userguide/VPC_Networking.html)
*   [Route tables for your VPC ({{ aws_full }} documentation)](https://docs.aws.amazon.com/vpc/latest/userguide/VPC_Route_Tables.html)
{%- if public %}
*   [VPC with public and private subnets (NAT) ({{ aws_full }} documentation)](https://docs.aws.amazon.com/vpc/latest/userguide/VPC_Scenario2.html)
*   [Finding a subnet ID ({{ aws_full }} documentation)](https://docs.aws.amazon.com/managedservices/latest/userguide/find-subnet.html)
{%- endif %}
{%- if aws_outposts %}
*   [VPC with public and private subnets (NAT) ({{ aws_full }} documentation)](https://docs.aws.amazon.com/vpc/latest/userguide/VPC_Scenario2.html)
*   [Finding a subnet ID ({{ aws_full }} documentation)](https://docs.aws.amazon.com/managedservices/latest/userguide/find-subnet.html)
*   [VPC associations ({{ aws_full }} documentation)](https://docs.aws.amazon.com/outposts/latest/userguide/outposts-local-gateways.html#vpc-associations)
{%- endif %}
*   [Tag Restrictions ({{ aws_full }} documentation)](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Using_Tags.html#tag-restrictions)
*   [DNS Support in Your VPC ({{ aws_full }} documentation)](https://docs.aws.amazon.com/vpc/latest/userguide/vpc-dns.html#vpc-dns-support)

{% if context == "installing-aws-china-region" %}
{%- set aws_china = "" -%}
{% endif %}
{% if context == "installing-aws-vpc" %}
{%- set public = "" -%}
{% endif %}
{% if context == "installing-aws-secret-region" %}
{%- set aws_secret = "" -%}
{% endif %}
{% if context == "installing-aws-outposts-remote-workers" %}
{%- set aws_outposts = "" -%}
{% endif %}
{% if context == "installing-aws-specialized-region" %}
{%- set aws_secret = "" -%}
{%- set aws_china = "" -%}
{% endif %}