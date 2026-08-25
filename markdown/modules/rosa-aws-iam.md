{%- set _mod_docs_content_type = "CONCEPT" %}
# Red&#160;Hat managed IAM references for AWS {id="rosa-policy-iam_{{ context }}"}

Red&#160;Hat is responsible for creating and managing the following Amazon Web Services (AWS) resources: IAM policies, IAM users, and IAM roles. {._abstract}

## IAM Policies {id="rosa-iam-policies_{{ context }}"}


:::note

IAM policies are subject to modification as the capabilities of {{ product_title }} change.

:::


*   The `AdministratorAccess` policy is used by the administration role. This policy provides Red&#160;Hat the access necessary to administer the {{ product_title }} (ROSA) cluster in the customer’s AWS account.
    ```
    {
        "Version": "2012-10-17",
        "Statement": [
            {
                "Action": "*",
                "Resource": "*",
                "Effect": "Allow"
            }
        ]
    }
    ```

## IAM users {id="rosa-iam-users_{{ context }}"}

The `osdManagedAdmin` user is created immediately after installing ROSA into the customer’s AWS account.