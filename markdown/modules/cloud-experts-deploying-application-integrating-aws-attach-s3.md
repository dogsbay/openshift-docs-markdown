{%- set _mod_docs_content_type = "PROCEDURE" %}
# Attaching the S3 policy to the IAM role {id="cloud-experts-deploying-application-integrating-aws-attach-s3_{{ context }}"}

After you created your IAM role, you can use the `aws` CLI to attach the S3 policy to this created role. {._abstract}

**Procedure**

1.  Get the S3 full access policy ARN by running the following command:
    ```terminal
    $ export POLICY_ARN=$(aws iam list-policies --query 'Policies[?PolicyName==`AmazonS3FullAccess`].Arn' --output text)
    ```
1.  Attach the policy to the AWS IAM role by running the following command:
    ```terminal
    $ aws iam attach-role-policy --role-name "ostoy-sa-role" --policy-arn "${POLICY_ARN}"
    ```