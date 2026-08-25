{%- set _mod_docs_content_type = "PROCEDURE" %}
# Configure AWS infrastructure access {id="config-aws-access_{{ context }}"}

Configure AWS infrastructure access to enable AWS Identity and Access Management (IAM) users to have federated access to the AWS Management Console for your {{ product_title }} cluster. {._abstract}

**Prerequisites**

*   An AWS account with IAM permissions.

**Procedure**

1.  Log in to your AWS account. If necessary, you can create a new AWS account by following the [AWS documentation](https://aws.amazon.com/premiumsupport/knowledge-center/create-and-activate-aws-account/).
1.  Create an IAM user with `STS:AllowAssumeRole` permissions within the AWS account.
    1.  Open the [IAM dashboard](https://console.aws.amazon.com/iam/home#/home) of the AWS Management Console.
    1.  In the **Policies** section, click **Create Policy**.
    1.  Select the **JSON** tab and replace the existing text with the following:
        ```json
        {
          "Version": "2012-10-17",
          "Statement": [
              {
                  "Effect": "Allow",
                  "Action": "sts:AssumeRole",
                  "Resource": "*"
              }
          ]
        }
        ```
    1.  Click **Next:Tags**.
    1.  Optional: Add tags. Click **Next:Review**
    1.  Provide an appropriate name and description, then click **Create Policy**.
    1.  In the **Users** section, click **Add user**.
    1.  Provide an appropriate user name.
    1.  Select **AWS Management Console access** as the AWS access type.
    1.  Adjust the password requirements as necessary for your organization, then click **Next:Permissions**.
    1.  Click the **Attach existing policies directly** option. Search for and check the policy created in previous steps.

        :::note

        It is not recommended to set a permissions boundary.
        
        :::

    1.  Click **Next: Tags**, then click **Next: Review**. Confirm the configuration is correct.
    1.  Click **Create user**, a success page appears.
    1.  Gather the IAM user’s Amazon Resource Name (ARN). The ARN has the following format: `arn:aws:iam::000111222333:user/username`. Click **Close**.
1.  Open {{ cluster_manager_url }} in your browser and select the cluster you want to allow AWS infrastructure access.
1.  Select the **Access control** tab, and scroll to the **AWS Infrastructure Access** section.
1.  Paste the **AWS IAM ARN** and select **Network Management** or **Read-only** permissions, then click **Grant role**.
1.  Copy the **AWS OSD console URL** to your clipboard.
1.  Sign in to your AWS account with your Account ID or alias, IAM user name, and password.
1.  In a new browser tab, paste the AWS OSD Console URL that routes to the AWS Switch Role page.
1.  Your account number and role are filled in already. Choose a display name if necessary, then click **Switch Role**.