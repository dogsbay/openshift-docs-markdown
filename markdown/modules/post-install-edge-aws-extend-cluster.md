{%- set _mod_docs_content_type = "CONCEPT" %}
# Extend existing clusters to use {{ aws_short }} Local Zones or Wavelength Zones {id="post-install-edge-aws-extend-cluster_{{ context }}"}

As a post-installation task, you can extend an existing {{ product_title }} cluster on {{ aws_full }} to use {{ aws_short }} {{ zone_type }}. {._abstract}

Extending nodes to {{ zone_type }} locations comprises the following steps:

*   Adjusting the cluster-network maximum transmission unit (MTU).
*   Opting in the {{ zone_type }} group to {{ aws_short }} {{ zone_type }}.
*   Creating a subnet in the existing VPC for a {{ zone_type }} location.

    :::important

    Before you extend an existing {{ product_title }} cluster on {{ aws_short }} to use {{ zone_type }}, check that the existing VPC contains available Classless Inter-Domain Routing (CIDR) blocks. These blocks are needed for creating the subnets.
    
    :::

*   Creating the machine set manifest, and then creating a node in each Local Zone or Wavelength Zone location.
*   Local Zones only: Adding the permission  `ec2:ModifyAvailabilityZoneGroup` to the Identity and Access Management (IAM) user or role, so that the required network resources can be created. For example:
    ```yaml title="Example of an additional IAM policy for {{ aws_short }} Local Zones deployments"
    {
      "Version": "2012-10-17",
      "Statement": [
        {
          "Action": [
            "ec2:ModifyAvailabilityZoneGroup"
          ],
          "Effect": "Allow",
          "Resource": "*"
        }
      ]
    }
    ```
*   Wavelength Zone only: Adding the permissions  `ec2:ModifyAvailabilityZoneGroup`, `ec2:CreateCarrierGateway`, and `ec2:DeleteCarrierGateway` to the Identity and Access Management (IAM) user or role, so that the required network resources can be created. For example:
    ```yaml title="Example of an additional IAM policy for {{ aws_short }} Wavelength Zones deployments"
    {
      "Version": "2012-10-17",
      "Statement": [
        {
          "Effect": "Allow",
          "Action": [
            "ec2:DeleteCarrierGateway",
            "ec2:CreateCarrierGateway"
          ],
          "Resource": "*"
        },
        {
          "Action": [
            "ec2:ModifyAvailabilityZoneGroup"
          ],
          "Effect": "Allow",
          "Resource": "*"
        }
      ]
    }
    ```