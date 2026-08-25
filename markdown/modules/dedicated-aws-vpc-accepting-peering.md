{%- set _mod_docs_content_type = "PROCEDURE" %}
# Accepting the VPC peer request {id="dedicated-aws-vpc-accepting-peering"}

After you create the VPC peering connection, you must accept the request in the
Customer AWS Account.

**Prerequisites**

*   Initiate the VPC peer request.

**Procedure**

1.  Log in to the AWS Web Console.
1.  Navigate to **VPC Service**.
1.  Go to **Peering Connections**.
1.  Click on **Pending peering connection**.
1.  Confirm the AWS Account and VPC ID that the request originated from. This should
be from the {{ product_title }} AWS Account and {{ product_title }} Cluster VPC.
1.  Click **Accept Request**.