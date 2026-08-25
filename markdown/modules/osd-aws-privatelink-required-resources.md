{%- if context == "rosa-hcp-aws-private-creating-cluster" %}
{%- set rosa_hcp = true -%}
{% endif %}
{% if context == "rosa-aws-privatelink-creating-cluster" %}
{%- set rosa_standalone = true -%}
{% endif %}
{%- set _mod_docs_content_type = "REFERENCE" %}
# Requirements for using AWS PrivateLink clusters {id="osd-aws-privatelink-required-resources_{{ context }}"}

AWS PrivateLink clusters require specific AWS resources including VPC, private subnets, and network access controls. {._abstract}

{% if rosa_hcp %}
For {{ hcp_title }} private clusters, internet gateways, NAT gateways, and public subnets are not required, but the private subnets must have internet connectivity to install the required components. At least one private subnet is required. The following table shows the AWS resources that are required for a successful installation:
{% endif %}
{% if not rosa_hcp %}
For AWS PrivateLink clusters, internet gateways, NAT gateways, and public subnets are not required, but the private subnets must have internet connectivity provided to install required components. At least one single private subnet is required for Single-AZ clusters and at least 3 private subnets are required for Multi-AZ clusters. The following table shows the AWS resources that are required for a successful installation:
{% endif %}

***Required AWS resources***

<table>
<thead>
<tr>
  <th>Component</th>
  <th>AWS Type</th>
  <th>Description</th>
</tr>
</thead>
<tbody>
<tr>
  <td>VPC</td>
  <td><ul><li>AWS::EC2::VPC</li><li>AWS::EC2::VPCEndpoint</li></ul></td>
  <td>You must provide a VPC for the cluster to use.</td>
</tr>
<tr>
  <td>Network access control</td>
  <td><ul><li>AWS::EC2::NetworkAcl</li><li>AWS::EC2::NetworkAclEntry</li></ul></td>
  <td>You must allow access to the following ports:!===!Port !Reason! 80! Inbound HTTP traffic! 443! Inbound HTTPS traffic! 22! Inbound SSH traffic! 1024-65535! Inbound ephemeral traffic! 0-65535! Outbound ephemeral traffic!===</td>
</tr>
<tr>
  <td>Private subnets</td>
  <td><ul><li>AWS::EC2::Subnet</li><li>AWS::EC2::RouteTable</li><li>AWS::EC2::SubnetRouteTableAssociation</li></ul></td>
  <td>Your VPC must have private subnets in at least 1 availability zone.Your VPC must have private subnets in 1 availability zone for Single-AZ deployments or 3 availability zones for Multi-AZ deployments.You must provide appropriate routes and route tables.</td>
</tr>
</tbody>
</table>

{%- if context == "rosa-hcp-aws-private-creating-cluster" %}
{%- set rosa_hcp = false -%}
{% endif %}
{% if context == "rosa-aws-privatelink-creating-cluster" %}
{%- set rosa_standalone = false -%}
{% endif %}