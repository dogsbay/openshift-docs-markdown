{%- set _mod_docs_content_type = "PROCEDURE" %}
# Creating a Direct Connect Gateway for a public Direct Connect {id="dedicated-aws-dc-hvif-public_{{ context }}"}

If your Direct Connect Virtual Interface type is public, create a Direct Connect Gateway. {._abstract}

**Prerequisites**

*   You determined the Virtual Interface type is public.
*   You recorded the **Amazon side ASN** value.

**Procedure**

1.  Log in to the {{ product_title }} AWS Account Dashboard and select the correct region.
1.  From the {{ product_title }} AWS Account region, select **Direct Connect** from the **Services** menu.
1.  Select **Direct Connect gateways** and **Create Direct Connect gateway**.
1.  Give the Direct Connect gateway a suitable name.
1.  In the **Amazon side ASN**, enter the Amazon side ASN value gathered previously.
1.  Click **Create the Direct Connect gateway**.

**Verification**

After the Direct Connect Virtual Interfaces have been accepted, wait a short period and view the status of the Interfaces.

1.  Log in to the {{ product_title }} AWS Account Dashboard and select the correct region.
1.  From the {{ product_title }} AWS Account region, select **Direct Connect** from the **Services** menu.
1.  Select one of the Direct Connect Virtual Interfaces from the list.
1.  Check the Interface State has become **Available**.
1.  Check the Interface BGP Status has become **Up**.
1.  Repeat this verification for any remaining Direct Connect Interfaces.

    After the Direct Connect Virtual Interfaces are available, you can log in to the {{ product_title }} AWS Account Dashboard and download the Direct Connect configuration file for configuration on your side.