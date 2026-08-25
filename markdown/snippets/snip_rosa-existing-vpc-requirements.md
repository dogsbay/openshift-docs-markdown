{%- set _mod_docs_content_type = "SNIPPET" %}

Your VPC must meet the requirements shown in the following table. {._abstract}

**Requirements for your VPC**

| Requirement | Details |
| --- | --- |
| VPC name | You need to have the specific VPC name and ID when creating your cluster. |
| CIDR range | Your VPC CIDR range should match your machine CIDR. |
| Availability zone | You need one availability zone for a single zone, and you need three for availability zones for multi-zone. |
| Public subnet | You must have one public subnet with a NAT gateway for public clusters. Private clusters do not need a public subnet. |
| DNS hostname and resolution | You must ensure that the DNS hostname and resolution are enabled. |