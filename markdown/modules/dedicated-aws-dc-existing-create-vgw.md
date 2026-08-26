{%- set _mod_docs_content_type = "PROCEDURE" %}
# Creating a virtual private gateway for a Direct Connect connection {id="dedicated-aws-dc-existing-create-vgw_{{ context }}"}

Create a virtual private gateway in your {{ product_title }} AWS account to connect to an existing Direct Connect Gateway. {._abstract}

**Prerequisites**

*   Confirm the Classless Inter-Domain Routing (CIDR) range of the {{ product_title }} Virtual Private Cloud (VPC) doesn’t conflict with any other VGWs you have associated.
*   Gather the following information:
    *   The Direct Connect Gateway ID.
    *   The AWS Account ID associated with the virtual interface.
    *   The BGP ASN assigned for the DXGateway. Optional: the Amazon default ASN may also be used.

**Procedure**

1.  Log in to the {{ product_title }} AWS Account Dashboard and select the correct region.
1.  From the {{ product_title }} AWS Account region, select **VPC** from the **Services** menu.
1.  From **Virtual private network (VPN)**, select **Virtual private gateways**.
1.  Select **Create virtual private gateway**.
1.  Give the virtual private gateway a suitable name in the **Details** field.
1.  Click **Custom ASN** and enter the **Amazon side ASN** value gathered previously or use the Amazon Provided ASN.
1.  Click **Create virtual private gateway**.