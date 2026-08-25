{%- set _mod_docs_content_type = "PROCEDURE" %}
# Connecting to an existing Direct Connect Gateway {id="dedicated-aws-dc-existing"}

**Prerequisites**

*   Confirm the CIDR range of the {{ product_title }} VPC will not conflict with any other VGWs you have associated.
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
1.  From the {{ product_title }} AWS Account region, select **Direct Connect** from the **Services** menu.
1.  Click **virtual private gateways** and select the virtual private gateway.
1.  Click **View details**.
1.  Click the **Direct Connect gateway associations** tab.
1.  Click **Associate Direct Connect gateway**
1.  Under **Association account type**, for Account owner, click **Another account**.
1.  Under **Association settings**, for Direct Connect gateway ID, enter the ID of the Direct Connect gateway.
1.  For **Direct Connect gateway owner**, enter the ID of the AWS account that owns the Direct Connect gateway.
1.  Optional: Add prefixes to **Allowed prefixes**, separating them using commas or put them on separate lines.
1.  Click **Associate Direct Connect gateway**.
1.  After the Association Proposal has been sent, it will be waiting for your acceptance. The final steps you must perform are available in the
[AWS Documentation](https://docs.aws.amazon.com/directconnect/latest/UserGuide/multi-account-associate-vgw.html).