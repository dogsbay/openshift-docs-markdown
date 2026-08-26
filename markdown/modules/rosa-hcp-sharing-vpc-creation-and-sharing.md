{%- set _mod_docs_content_type = "PROCEDURE" %}
# Step One - VPC Owner: Configuring a VPC to share within your AWS organization {id="rosa-hcp-sharing-vpc-creation-and-sharing_{{ context }}"}

You can share subnets within a VPC with another AWS account in your AWS organization. {._abstract}

![Step one of the shared VPC workflow showing VPC creation and sharing.](/images/522-shared-vpc-step-1.png)

**Procedure**

1.  Create or modify a VPC to your specifications in the [VPC section of the AWS console](https://us-east-1.console.aws.amazon.com/vpc/). Ensure you have selected the correct region.
1.  Create the `Route 53 role`.

    :::note

    You must create the `Route 53 role` in the same account where you plan to create the Amazon Route 53 hosted zones (which are created in Step 3). For example, if you want to create the hosted zones in the centrally-managed VPC account, you must create the `Route 53 role` in the **VPC Owner** account. If you want to create the hosted zones in the workload account, you must create the `Route 53 role` in the **Cluster Creator** account.
    
    :::

    1.  Create a custom trust policy file that grants permission to assume roles:
        ```terminal
        $ cat <<EOF > /tmp/route53-role.json
        {
            "Version": "2012-10-17",
            "Statement": [
                {
                    "Effect": "Allow",
                    "Principal": {
                        "AWS": "arn:aws:iam::<Account-ID>:root"
                    },
                    "Action": "sts:AssumeRole"
                }
            ]
        }
        EOF
        ```

        The trust policy principals (`Principal.AWS`) may be scoped down to the ingress Operator role and installer account role rather than `root`.
    1.  Create the IAM role for the AWS managed policy [`ROSASharedVPCRoute53Policy`](https://docs.aws.amazon.com/rosa/latest/userguide/security-iam-awsmanpol.html#security-iam-awsmanpol-rosasharedvpcroute53policy).
        ```terminal
        $ aws iam create-role --role-name <role_name> \
            --assume-role-policy-document file:///tmp/route53-role.json
        ```
    1.  Attach the AWS managed policy `ROSASharedVPCRoute53Policy` to allow for necessary shared VPC permissions.
        ```terminal
        $ aws iam attach-role-policy --role-name <role_name> \
        --policy-arn arn:aws:iam::aws:policy/ROSASharedVPCRoute53Policy
        ```
1.  Create the `VPC endpoint role`.
    1.  Create a custom trust policy file that grants permission to assume roles:
        ```terminal
        $ cat <<EOF > /tmp/shared-vpc-role.json
        {
            "Version": "2012-10-17",
            "Statement": [
                {
                    "Effect": "Allow",
                    "Principal": {
                        "AWS": "arn:aws:iam::<Account-ID>:root"
                    },
                    "Action": "sts:AssumeRole"
                }
            ]
        }
        EOF
        ```

        The trust policy principals (`Principal.AWS`) may be scoped down to the ingress Operator role and installer account role rather than `root`.
    1.  Create the IAM role for the AWS managed policy [`ROSASharedVPCEndpointPolicy`](https://docs.aws.amazon.com/rosa/latest/userguide/security-iam-awsmanpol.html#security-iam-awsmanpol-rosasharedvpcendpointpolicy):
        ```terminal
        $ aws iam create-role --role-name <role_name> \
            --assume-role-policy-document file:///tmp/vpce-role.json
        ```
    1.  Attach the AWS managed policy `ROSASharedVPCEndpointPolicy` to allow for necessary shared VPC permissions.
        ```terminal
        $ aws iam attach-role-policy --role-name <role_name> \
        --policy-arn arn:aws:iam::aws:policy/ROSASharedVPCEndpointPolicy
        ```
1.  Provide the `Route 53 role` ARN and the `VPC endpoint role` ARN to the **Cluster Creator** to continue configuration.