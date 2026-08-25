{%- set _mod_docs_content_type = "PROCEDURE" %}
# Creating an identity-based IAM policy {id="rosa-create-an-identity-based-policy_{{ context }}"}

Create an Identity and Access Management (IAM) policy that denies access to all AWS actions if the request is made from an IP address not provided by Red&#160;Hat. {._abstract}

**Prerequisites**

*   You have access to the [AWS Management Console](https://aws.amazon.com/console/) with the permissions required to create and modify IAM policies.

**Procedure**

1.  Sign in to the AWS Management Console using your AWS account credentials.
1.  Navigate to the IAM service.
1.  In the IAM console, select **Policies** from the left navigation menu.
1.  Click **Create policy**.
1.  Select the **JSON** tab to define the policy using JSON format.
1.  To get the IP addresses required for the JSON policy document, run the following command:
    ```terminal
    $ ocm get /api/clusters_mgmt/v1/trusted_ip_addresses
    ```

    :::note

    These IP addresses are not permanent and can change. Regularly review the API output and update the JSON policy document.
    
    :::

1.  Copy and paste the following `policy_document.json` file into the editor:
    ```json
    {
        "Version": "2012-10-17",
        "Statement": [
            {
                "Effect": "Deny",
                "Action": "*",
                "Resource": "*",
                "Condition": {
                    "NotIpAddress": {
                        "aws:SourceIp": []
                    },
                    "Bool": {
                        "aws:ViaAWSService": "false"
                    }
                }
            }
        ]
    }
    ```
1.  Copy and paste all of the IP addresses, which you got in Step 6, into the `"aws:SourceIp": []` array in your `policy_document.json` file.
1.  Click **Review and create**.
1.  Provide a name and description for the policy, and review the details for accuracy.
1.  Click **Create policy** to save the policy.

    :::note

    Set the `aws:ViaAWSService` condition key to false to ensure that subsequent calls succeed after your initial call. For example, if you do not set `aws:ViaAWSService` to false and run `aws ec2 describe-instances`, some follow-up calls can fail. It applies to subsequent calls that you make within the AWS API server to retrieve information about the Elastic Block Store (EBS) volumes attached to the EC2 instance. The subsequent calls fail because they originate from AWS IP addresses that are not included in the AllowList.
    
    :::