{%- set _mod_docs_content_type = "CONCEPT" %}
# Additional principals on your {{ product_title }} cluster {id="rosa-additional-principals-overview_{{ context }}"}

You can allow AWS Identity and Access Management (IAM) roles as additional principals to connect to your cluster’s private API server endpoint. {._abstract}

You can access your {{ product_title }} cluster’s API server endpoint from the public internet or the VPC private subnet interface endpoint. By default, you can privately access your {{ product_title }} API Server by using the `-kube-system-kube-controller-manager` Operator role. To access the {{ product_title }} API server from another account without using the primary account, include cross-account IAM roles as additional principals. This feature simplifies your network architecture and reduces data transfer costs. You can avoid peering or attaching cross-account VPCs to the cluster’s VPC.

![Overview of AWS cross account access](/images/AWS_cross_account_access.png)

In this diagram, the cluster creating account is designated as Account A. This account designates that another account, Account B, should have access to the API server.


:::note

After configuring additional allowed principals, create an interface VPC endpoint in the VPC that accesses the cross-account {{ product_title }} API server. Then, create a private hosted zone in Route53. Configure the hosted zone to route calls to the cross-account {{ product_title }} API server through the VPC endpoint.

:::