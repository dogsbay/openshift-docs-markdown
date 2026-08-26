{%- set _mod_docs_content_type = "PROCEDURE" %}
# Creating a Virtual Private Gateway for a private Direct Connect {id="dedicated-aws-dc-hvif-private_{{ context }}"}

If your Direct Connect Virtual Interface type is private, create and attach a Virtual Private Gateway to your {{ product_title }} cluster VPC. {._abstract}

**Prerequisites**

*   You determined the Virtual Interface type is private.
*   You recorded the **Amazon side ASN** value.

**Procedure**

1.  Log in to the {{ product_title }} AWS Account Dashboard and select the correct region.
1.  From the AWS region, select **VPC** from the **Services** menu.
1.  From **Virtual private network (VPN)**, select **Virtual private gateways**.
1.  Click **Create virtual private gateway**.
1.  Give the Virtual Private Gateway a suitable name.
1.  Select **Custom ASN** in the **Enter custom ASN** field.
1.  Enter the **Amazon side ASN** value gathered previously.
1.  Click **Create virtual private gateway**.
1.  Click the newly created Virtual Private Gateway and choose **Attach to VPC** from the **Actions** tab.
1.  Select the **{{ product_title }} Cluster VPC** from the list, and click **Attach VPC**.

**Verification**

After the Direct Connect Virtual Interfaces have been accepted, wait a short period and view the status of the Interfaces.

1.  Log in to the {{ product_title }} AWS Account Dashboard and select the correct region.
1.  From the {{ product_title }} AWS Account region, select **Direct Connect** from the **Services** menu.
1.  Select one of the Direct Connect Virtual Interfaces from the list.
1.  Check the Interface State has become **Available**.
1.  Check the Interface BGP Status has become **Up**.
1.  Repeat this verification for any remaining Direct Connect Interfaces.

    After the Direct Connect Virtual Interfaces are available, you can log in to the {{ product_title }} AWS Account Dashboard and download the Direct Connect configuration file for configuration on your side.