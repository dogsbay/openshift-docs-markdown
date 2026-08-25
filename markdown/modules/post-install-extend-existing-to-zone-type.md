{%- set _mod_docs_content_type = "CONCEPT" %}
# Create network requirements in an existing VPC that uses {{ aws_short }} Local Zones or Wavelength Zones {id="post-install-existing-local-zone-subnet_{{ context }}"}

If you want a Machine API to create an Amazon EC2 instance in a remote zone location, you must create a subnet in a {{ zone_type }} location. You can use any provisioning tool, such as Ansible or Terraform, to create subnets in the existing Virtual Private Cloud (VPC). {._abstract}

You can configure the CloudFormation template to meet your requirements. The following subsections include steps that use CloudFormation templates to create the network requirements that extend an existing VPC to use an {{ aws_short }} {{ zone_type }}.

Extending nodes to Local Zones requires that you create the following resources:

*   2 VPC Subnets: public and private. The public subnet associates to the public route table for the regular Availability Zones in the Region. The private subnet associates to the provided route table ID.

Extending nodes to Wavelength Zones requires that you create the following resources:

*   1 VPC Carrier Gateway associated to the provided VPC ID.
*   1 VPC Route Table for Wavelength Zones with a default route entry to VPC Carrier Gateway.
*   2 VPC Subnets: public and private. The public subnet associates to the public route table for an {{ aws_short }} Wavelength Zone. The private subnet associates to the provided route table ID.


:::important

Considering the limitation of NAT Gateways in Wavelength Zones, the provided CloudFormation templates support only associating the private subnets with the provided route table ID. A route table ID is attached to a valid NAT Gateway in the {{ aws_short }} Region.

:::