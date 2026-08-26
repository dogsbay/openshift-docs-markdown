{%- set _mod_docs_content_type = "PROCEDURE" %}
# Configuring the routing tables {id="dedicated-aws-vpc-configuring-routing-tables"}

After you accept the Virtual Private Cloud (VPC) peering request, both VPCs must configure their routes to communicate across the peering connection.

**Prerequisites**

*   Initiate and accept the VPC peer request.

**Procedure**

1.  Log in to the AWS Web Console for the {{ product_title }} AWS Account.
1.  Navigate to the **VPC Service**, then **Route tables**.
1.  Select the Route Table for the {{ product_title }} Cluster VPC.

    :::note

    On some clusters, there may be more than one route table for a particular VPC. Select the private one that has several explicitly associated subnets.
    
    :::

1.  Select the **Routes** tab, then **Edit**.
1.  Enter the Customer VPC CIDR block in the **Destination** text box.
1.  Enter the Peering Connection ID in the **Target** text box.
1.  Click **Save**.
1.  You must complete the same process with the other VPC’s CIDR block:
    1.  Log into the Customer AWS Web Console → **VPC Service** → **Route Tables**.
    1.  Select the Route Table for your VPC.
    1.  Select the **Routes** tab, then **Edit**.
    1.  Enter the {{ product_title }} Cluster VPC CIDR block in the **Destination** text box.
    1.  Enter the Peering Connection ID in the **Target** text box.
    1.  Click **Save changes**.