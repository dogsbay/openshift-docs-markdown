{%- set _mod_docs_content_type = "PROCEDURE" %}
# Establishing the VPN connection and enabling route propagation {id="dedicated-aws-vpn-establishing-connection_{{ context }}"}

After you create the customer gateway and virtual private gateway, establish the Site-to-Site VPN connection and enable route propagation. {._abstract}

**Prerequisites**

*   You created a customer gateway in your {{ product_title }} AWS account.
*   You have a virtual private gateway attached to the cluster Virtual Private Cloud (VPC).

**Procedure**

1.  From the VPC dashboard, under Virtual private network (VPN) click **Site-to-Site VPN connections**.
1.  Click **Create VPN connection**.
    1.  Give it a meaningful name tag.
    1.  Select the Virtual private gateway created previously.
    1.  For Customer gateway, select **Existing**.
    1.  Select the Customer gateway ID by name.
    1.  If the VPN uses the Border Gateway Protocol (BGP), select **Dynamic**, otherwise select **Static** and enter the Static IP Classless Inter-Domain Routings (CIDRs). If there are multiple CIDRs, add each CIDR as **Another Rule**.
    1.  Click **Create VPN connection**.
    1.  Under **State** wait for the VPN status to change from **Pending** to **Available**, approximately 5 to 10 minutes.
1.  Select the VPN you just created and click **Download configuration**.
    1.  From the list, select the vendor, platform, and version of the customer gateway device, then click **Download**.
    1.  The **Generic** vendor configuration is also available for retrieving information in a plain text format.

        :::note

        After the VPN connection has been established, set up Route Propagation or the VPN might not function as expected. Note the VPC subnet information, which you must add to your configuration as the remote network. 
        
        :::

1.  From the VPC Dashboard, under Virtual private cloud, click on **Route tables**.
1.  Select the private Route table associated with the VPC that contains your {{ product_title }} cluster.

    :::note

    On some clusters, there may be more than one route table for a particular VPC. Select the private one that has several explicitly associated subnets.
    
    :::

1.  Click on the **Route Propagation** tab.
1.  In the table that shows, you see the Virtual Private Gateway you created. Check the value in the **Propagate** column.
    1.  If **Propagation** is set to **No**, click **Edit route propagation**, and check the **Enable** checkbox in Propagation.
    1.  Click **Save**.

        After you configure your VPN tunnel and AWS detects it as **Up**, your static or BGP routes are automatically added to the route table.