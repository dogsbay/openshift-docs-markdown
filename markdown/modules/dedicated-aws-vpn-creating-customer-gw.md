{%- set _mod_docs_content_type = "PROCEDURE" %}
# Creating a customer gateway and virtual private gateway {id="dedicated-aws-vpn-creating-customer-gw_{{ context }}"}

Create a customer gateway and, if needed, a virtual private gateway to prepare for a VPN connection to your {{ product_title }} cluster. {._abstract}

**Prerequisites**

*   Hardware VPN gateway device model and software version, for example Cisco ASA running version 8.3. See the Amazon VPC [Network Administrator Guide](https://docs.aws.amazon.com/vpc/latest/adminguide/Introduction.html#DevicesTested) to confirm whether your gateway device is supported by AWS.
*   Public, static IP address for the VPN gateway device.
*   Border Gateway Protocol (BGP) or static routing: if using BGP, the Autonomous System Number (ASN) is required. If using static routing, you must configure at least one static route.
*   **Optional**: IP and Port/Protocol of a reachable service to test the VPN connection.

**Procedure**

1.  Log in to the {{ product_title }} AWS Account Dashboard, and navigate to the VPC Dashboard.
1.  Under **Virtual private cloud** click **Your VPCs** and identify the name and VPC ID for the VPC containing the {{ product_title }} cluster.
1.  Under **Virtual private network (VPN)** click **Customer gateways**.
1.  Click **Create customer gateway** and give it a meaningful name.
1.  Enter the ASN of your customer gateway device in the **BGP ASN** field.
1.  In the **IP address** field, enter the IP address of an external interface for your customer gateway devices.
1.  Click **Create customer gateway**.
1.  If you do not already have a Virtual Private Gateway attached to the intended VPC:
    1.  From the VPC Dashboard, click **Virtual Private Gateways**.
    1.  Click **Create virtual private gateway**, give it a meaningful name.
    1.  Click **Create virtual private gateway**, leaving the **Amazon default ASN**.
    1.  Select the newly created gateway.
    1.  Select **Actions** from the list and click **Attach to VPC**.
    1.  Select the newly created gateway under Available VPC’s and click **Attach to VPC** to attach it to the cluster VPC you identified earlier.