{%- set _mod_docs_content_type = "PROCEDURE" %}
# Step Three - VPC Owner: Updating the shared VPC role and creating hosted zones {id="rosa-sharing-vpc-hosted-zones_{{ context }}"}

After the **Cluster Creator** provides the DNS domain and the IAM roles, create a private hosted zone and update the trust policy on the IAM role that was created for sharing the VPC. {._abstract}

![372_OpenShift_on_AWS_persona_worflows_0923_3](/images/372_OpenShift_on_AWS_persona_worflows_0923_3.png)

**Prerequisites**

*   You have the full domain name from the **Cluster Creator**.
*   You have the _Ingress Operator Cloud Credentials_ role’s ARN from the **Cluster Creator**.
*   You have the _Installer_ role’s ARN from the **Cluster Creator**.

**Procedure**

1.  In the [Resource Access Manager of the AWS console](https://console.aws.amazon.com/ram/), create a resource share that shares the previously created public and private subnets with the **Cluster Creator’s** AWS account ID.
1.  Update the VPC sharing IAM role and add the _Installer_ and _Ingress Operator Cloud Credentials_ roles to the principal section of the trust policy.
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
              "arn:aws:iam::<Cluster-Creator's-AWS-Account-ID>:role/<prefix>-Installer-Role"
            ]
    	  },
    	  "Action": "sts:AssumeRole"
    	}
      ]
    }
    ```
1.  Create a private hosted zone in the [Route 53 section of the AWS console](https://us-east-1.console.aws.amazon.com/route53/v2/). In the hosted zone configuration, the domain name is `<cluster_domain_prefix>.<reserved_dns_domain>`. The private hosted zone must be associated with the created VPC.
1.  After the hosted zone is created and associated with the VPC, provide the following to the **Cluster Creator** to continue configuration:
    *   Hosted zone ID
    *   AWS region
    *   Subnet IDs