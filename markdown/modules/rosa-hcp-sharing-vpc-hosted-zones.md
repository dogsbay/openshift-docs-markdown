{%- set _mod_docs_content_type = "PROCEDURE" %}
# Step Three - VPC Owner: Updating the shared VPC role and creating hosted zones {id="rosa-hcp-sharing-vpc-hosted-zones_{{ context }}"}

After the **Cluster Creator** provides the DNS domain and IAM roles, create two hosted zones and update the trust policy on the shared VPC IAM roles. {._abstract}


:::note

The hosted zones can be created in either the centrally-managed VPC account or in the workload account.

:::


![Step three of the shared VPC workflow showing hosted zone creation and role updates.](/_assets/images/522-shared-vpc-step-3.png)

* The hosted zones can be created in either the centrally-managed VPC account or in the workload account in which the cluster is deployed.

**Prerequisites**

*   You have the full domain name from the **Cluster Creator**.
*   You have the _Ingress Operator Cloud Credentials_ role’s ARN from the **Cluster Creator**.
*   You have the _Installer_ role’s ARN from the **Cluster Creator**.
*   You have the _Control plane Operator Cloud Credentials_ role’s ARN from the **Cluster Creator**.

{% include "./snippets/rosa-long-cluster-name.md" %}

**Procedure**

1.  In the [Resource Access Manager of the AWS console](https://aws.amazon.com/ram/), create a resource share that shares the previously created VPC’s public and private subnets with the **Cluster Creator’s** AWS account ID.
1.  Update the `Route 53 role` and add the _Installer_ and _Ingress Operator Cloud Credentials_ roles to the principal section of the trust policy.
    ```terminal
    {
      "Version": "2012-10-17",
      "Statement": [
        {
    	  "Sid": "Statement1",
    	  "Effect": "Allow",
    	  "Principal": {
    	  	"AWS": [
              "arn:aws:iam::<Cluster-Creator's-AWS-Account-ID>:role/<prefix>-ingress-operator-cloud-credentials",
              "arn:aws:iam::<Cluster-Creator's-AWS-Account-ID>:role/<prefix>-hcp-Installer-Role",
              "arn:aws:iam::<Cluster-Creator's-AWS-Account-ID>:role/<prefix>-control-plane-operator"
            ]
    	  },
    	  "Action": "sts:AssumeRole"
    	}
      ]
    }
    ```
1.  Update the `VPC endpoint role` and add the _Installer_ and _Ingress Operator Cloud Credentials_ roles to the principal section of the trust policy.
    ```terminal
    {
      "Version": "2012-10-17",
      "Statement": [
        {
    	  "Sid": "Statement1",
    	  "Effect": "Allow",
    	  "Principal": {
    	  	"AWS": [
              "arn:aws:iam::<Cluster-Creator's-AWS-Account-ID>:role/<prefix>-hcp-Installer-Role",
              "arn:aws:iam::<Cluster-Creator's-AWS-Account-ID>:role/<prefix>-control-plane-operator"
            ]
    	  },
    	  "Action": "sts:AssumeRole"
    	}
      ]
    }
    ```
1.  Create a private hosted zone in the [Route 53 section of the AWS console](https://us-east-1.console.aws.amazon.com/route53/v2/). In the hosted zone configuration, the domain name is `rosa.<cluster-name>.<base-domain>`. The private hosted zone must be associated with the network owner’s VPC.
1.  Create a local hosted zone in the [Route 53 section of the AWS console](https://us-east-1.console.aws.amazon.com/route53/v2/). In the hosted zone configuration, the domain name is `<cluster-name>.hypershift.local`. The local hosted zone must be associated with the network owner’s VPC.
1.  After the hosted zones are created and associated with the network owner’s VPC, provide the following to the **Cluster Creator** to continue configuration:
    *   Hosted zone IDs
    *   AWS region
    *   Subnet IDs