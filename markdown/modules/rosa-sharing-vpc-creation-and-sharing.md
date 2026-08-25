{%- set _mod_docs_content_type = "PROCEDURE" %}
# Step One - VPC Owner: Configuring a VPC to share within your AWS organization {id="rosa-sharing-vpc-creation-and-sharing_{{ context }}"}

You can share subnets within a configured VPC with another AWS user account if that account is within your current AWS organization. {._abstract}

![372_OpenShift_on_AWS_persona_worflows_0923_1](/_assets/images/372_OpenShift_on_AWS_persona_worflows_0923_1.png)

**Procedure**

1.  Create or modify a VPC to your specifications in the [VPC section of the AWS console](https://us-east-1.console.aws.amazon.com/vpc/).
1.  Create a custom policy file to allow for necessary shared VPC permissions that uses the name `SharedVPCPolicy`:
    ```terminal
    $ cat <<EOF > /tmp/shared-vpc-policy.json
    {
        "Version": "2012-10-17",
        "Statement": [
            {
                "Effect": "Allow",
                "Action": [
                    "route53:ChangeResourceRecordSets",
                    "route53:ListHostedZones",
                    "route53:ListHostedZonesByName",
                    "route53:ListResourceRecordSets",
                    "route53:ChangeTagsForResource",
                    "route53:GetAccountLimit",
                    "route53:GetChange",
                    "route53:GetHostedZone",
                    "route53:ListTagsForResource",
                    "route53:UpdateHostedZoneComment",
                    "tag:GetResources",
                    "tag:UntagResources"
                ],
                "Resource": "*"
            }
        ]
    }
    EOF
    ```
1.  Create the policy in AWS:
    ```terminal
    $ aws iam create-policy \
        --policy-name SharedVPCPolicy \
        --policy-document file:///tmp/shared-vpc-policy.json
    ```

    You will attach this policy to a role necessary for the shared VPC permissions.
1.  Create a custom trust policy file that grants permission to assume roles. Replace `<Account-ID>` with the **Cluster Creator’s** AWS account ID. The principal will be scoped down after the **Cluster Creator** creates the necessary cluster roles. On creation, you must create a root user placeholder by using the **Cluster Creator’s** AWS account ID as `arn:aws:iam::{{ Account }}:root`{minja}.
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
1.  Create the IAM role. Replace `<role_name>` with the name of the role you want to create.
    ```terminal
    $ aws iam create-role --role-name <role_name> \
        --assume-role-policy-document file:///tmp/shared-vpc-role.json
    ```
1.  Attach the custom `SharedVPCPolicy` permissions policy.
    ```terminal
    $ aws iam attach-role-policy --role-name <role_name> --policy-arn \
        arn:aws:iam::<AWS_account_ID>:policy/SharedVPCPolicy
    ```
    where:


    `<role_name>`
    :   Replace with the name of the role you created.

    `<AWS_account_ID>`
    :   Replace with the **VPC Owner’s** AWS account ID.
1.  Provide the `SharedVPCRole` ARN to the **Cluster Creator** to continue configuration.