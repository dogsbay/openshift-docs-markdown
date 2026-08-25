{%- set _mod_docs_content_type = "PROCEDURE" %}
# Create the egress IP rules {id="cloud-experts-consistent-egress-ip-creating-ip-rules_{{ context }}"}

Configure egress IP rules to provide reserved, consistent IP addresses for your outbound cluster traffic. Before creating the egress IP rules, identify which egress IPs to use. {._abstract}


:::note

The egress IPs that you select should exist as a part of the subnets in which the worker nodes are provisioned.

:::


**Procedure**

*   Reserve the egress IPs that you requested to avoid conflicts with the AWS Virtual Private Cloud (VPC) Dynamic Host Configuration Protocol (DHCP) service.

    Request explicit IP reservations on the [AWS documentation for CIDR reservations](https://docs.aws.amazon.com/vpc/latest/userguide/subnet-cidr-reservation.html) page.