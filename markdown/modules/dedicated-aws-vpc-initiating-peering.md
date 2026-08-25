{%- set _mod_docs_content_type = "PROCEDURE" %}
# Initiating the VPC peer request {id="dedicated-aws-vpc-initiating-peering"}

You can send a VPC peering connection request from the {{ product_title }} AWS Account to the
Customer AWS Account.

**Prerequisites**

*   Gather the following information about the Customer VPC required to initiate the
peering request:
    *   Customer AWS account number
    *   Customer VPC ID
    *   Customer VPC Region
    *   Customer VPC CIDR
*   Check the CIDR block used by the {{ product_title }} Cluster VPC. If it overlaps or
matches the CIDR block for the Customer VPC, then peering between these two VPCs
is not possible; see the Amazon VPC
[Unsupported VPC Peering Configurations](https://docs.aws.amazon.com/vpc/latest/peering/invalid-peering-configurations.html)
documentation for details. If the CIDR blocks do not overlap, you can continue
with the procedure.

**Procedure**

1.  Log in to the Web Console for the {{ product_title }} AWS Account and navigate to the
**VPC Dashboard** in the region where the cluster is being hosted.
1.  Go to the **Peering Connections** page and click the **Create Peering Connection**
button.
1.  Verify the details of the account you are logged in to and the details of the
account and VPC you are connecting to:
    1.  **Peering connection name tag**: Set a descriptive name for the VPC Peering Connection.
    1.  **VPC (Requester)**: Select the {{ product_title }} Cluster VPC ID from the list.
    1.  **Account**: Select **Another account** and provide the Customer AWS Account number
    *(without dashes).
    1.  **Region**: If the Customer VPC Region differs from the current region, select
    **Another Region** and select the customer VPC Region from the list.
    1.  **VPC (Accepter)**: Set the Customer VPC ID.
1.  Click **Create Peering Connection**.
1.  Confirm that the request enters a **Pending** state. If it enters a **Failed**
state, confirm the details and repeat the process.