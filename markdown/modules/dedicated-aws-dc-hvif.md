{%- set _mod_docs_content_type = "PROCEDURE" %}
# Creating the hosted Virtual Interface {id="dedicated-aws-dc-hvif"}

**Prerequisites**

*   Gather {{ product_title }} AWS Account ID.

## Determining the type of Direct Connect connection {id="dedicated-aws-dc-hvif-type"}

View the Direct Connect Virtual Interface details to determine the type of
connection.

**Procedure**

1.  Log in to the {{ product_title }} AWS Account Dashboard and select the correct region.
1.  Select **Direct Connect** from the **Services** menu.
1.  There will be one or more Virtual Interfaces waiting to be accepted, select one of them to view the **Summary**.
1.  View the Virtual Interface type: private or public.
1.  Record the **Amazon side ASN** value.

If the Direct Connect Virtual Interface type is Private, a Virtual Private
Gateway is created. If the Direct Connect Virtual Interface is Public, a Direct
Connect Gateway is created.

## Creating a Private Direct Connect {id="dedicated-aws-dc-hvif-private"}

A Private Direct Connect is created if the Direct Connect Virtual Interface type is Private.

**Procedure**

1.  Log in to the {{ product_title }} AWS Account Dashboard and select the correct region.
1.  From the AWS region, select **VPC** from the **Services** menu.
1.  From **Virtual private network (VPN)**, select **Virtual private gateways**.
1.  Click **Create virtual private gateway**.
1.  Give the Virtual Private Gateway a suitable name.
1.  Select **Custom ASN** in the **Enter custom ASN** field enter the **Amazon side ASN** value gathered previously.
1.  Click **Create virtual private gateway**.
1.  Click the newly created Virtual Private Gateway and choose **Attach to VPC** from the **Actions** tab.
1.  Select the **{{ product_title }} Cluster VPC** from the list, and click **Attach VPC**.

Note: Editing the kubelet config will cause the nodes for your machine pool to be recreated. This ma???

## Creating a Public Direct Connect {id="dedicated-aws-dc-hvif-public"}

A Public Direct Connect is created if the Direct Connect Virtual Interface type
is Public.

**Procedure**

1.  Log in to the {{ product_title }} AWS Account Dashboard and select the correct region.
1.  From the {{ product_title }} AWS Account region, select **Direct Connect** from the **Services** menu.
1.  Select **Direct Connect gateways** and **Create Direct Connect gateway**.
1.  Give the Direct Connect gateway a suitable name.
1.  In the **Amazon side ASN**, enter the Amazon side ASN value gathered previously.
1.  Click **Create the Direct Connect gateway**.

## Verifying the Virtual Interfaces {id="dedicated-aws-dc-hvif-verifying"}

After the Direct Connect Virtual Interfaces have been accepted, wait a short
period and view the status of the Interfaces.

**Procedure**

1.  Log in to the {{ product_title }} AWS Account Dashboard and select the correct region.
1.  From the {{ product_title }} AWS Account region, select **Direct Connect** from the **Services** menu.
1.  Select one of the Direct Connect Virtual Interfaces from the list.
1.  Check the Interface State has become **Available**
1.  Check the Interface BGP Status has become **Up**.
1.  Repeat this verification for any remaining Direct Connect Interfaces.

After the Direct Connect Virtual Interfaces are available, you can log in to the
{{ product_title }} AWS Account Dashboard and download the Direct Connect configuration file for
configuration on your side.