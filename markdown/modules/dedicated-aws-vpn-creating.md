{%- set _mod_docs_content_type = "PROCEDURE" %}
# Creating a VPN connection {id="dedicated-aws-vpn-creating"}

You can configure an Amazon Web Services (AWS) {{ product_title }} cluster to use a customer’s on-site hardware VPN device using the following procedures.

**Prerequisites**

*   Hardware VPN gateway device model and software version, for example Cisco ASA
running version 8.3. See the Amazon VPC
[Network Administrator Guide](https://docs.aws.amazon.com/vpc/latest/adminguide/Introduction.html#DevicesTested)
to confirm whether your gateway device is supported by AWS.
*   Public, static IP address for the VPN gateway device.
*   BGP or static routing: if BGP, the ASN is required. If static routing, you must
configure at least one static route.
*   **Optional**: IP and Port/Protocol of a reachable service to test the VPN connection.

## Configuring the VPN connection {id="dedicated-aws-vpn-creating-configuring"}

**Procedure**

1.  Log in to the {{ product_title }} AWS Account Dashboard, and navigate to the VPC Dashboard.
1.  Under **Virtual private cloud** click on **Your VPCs** and identify the name and VPC ID for the VPC containing the {{ product_title }} cluster.
1.  Under **Virtual private network (VPN)** click **Customer gateways**.
1.  Click **Create customer gateway** and give it a meaningful name.
1.  Enter the ASN of your customer gateway device in the **BGP ASN** field.
1.  Enter the IP address for your customer gateway devices’s external interface in the **IP address** field.
1.  Click **Create customer gateway**.
1.  If you do not already have a Virtual Private Gateway attached to the intended VPC:
    1.  From the VPC Dashboard, click on **Virtual Private Gateways**.
    1.  Click **Create virtual private gateway**, give it a meaningful name.
    1.  Click **Create virtual private gateway**, leaving the **Amazon default ASN**.
    1.  Select the newly created gateway.
    1.  Select **Actions** from the list and click **Attach to VPC**.
    1.  Select the newly created gateway under Available VPC’s and click **Attach to VPC** to attach it to the cluster VPC you identified earlier.

## Establishing the VPN Connection {id="dedicated-aws-vpn-creating-establishing"}

**Procedure**

1.  From the VPC dashboard, under Virtual private network (VPN) click on **Site-to-Site VPN connections**.
1.  Click **Create VPN connection**.
    1.  Give it a meaningful name tag.
    1.  Select the Virtual private gateway created previously.
    1.  For Customer gateway, select **Existing**.
    1.  Select the Customer gateway id by name.
    1.  If the VPN will use BGP, select **Dynamic**, otherwise select **Static** and enter the
    Static IP CIDRs. If there are multiple CIDRs, add each CIDR as **Another Rule**.
    1.  Click **Create VPN connection**.
    1.  Under **State** wait for the VPN status to change from **Pending** to **Available**, approximately 5 to 10 minutes.
1.  Select the VPN you just created and click **Download configuration**.
    1.  From the list, select the vendor, platform, and version of the customer
    gateway device, then click **Download**.
    1.  The **Generic** vendor configuration is also available for retrieving information
    in a plain text format.


    :::note

    After the VPN connection has been established, be sure to set up Route
    Propagation or the VPN may not function as expected.
    
    :::



    :::note

    Note the VPC subnet information, which you must add to your configuration as the
    remote network.
    
    :::


## Enabling VPN route propagation {id="dedicated-aws-vpn-creating-propagation"}

After you have set up the VPN connection, you must ensure that route propagation
is enabled so that the necessary routes are added to the VPC’s route table.

**Procedure**

1.  From the VPC Dashboard, under Virtual private cloud, click on **Route tables**.
1.  Select the private Route table associated with the VPC that contains your
{{ product_title }} cluster.

    :::note

    On some clusters, there may be more than one route table for a particular VPC.
    Select the private one that has a number of explicitly associated subnets.
    
    :::

1.  Click on the **Route Propagation** tab.
1.  In the table that appears, you should see the Virtual Private Gateway you
created previously. Check the value in the **Propagate** column.
    1.  If **Propagation** is set to **No**, click **Edit route propagation**, check the **Enable** checkbox in Propagation and click **Save**.

After you configure your VPN tunnel and AWS detects it as **Up**, your static or
BGP routes are automatically added to the route table.