{%- set _mod_docs_content_type = "PROCEDURE" %}
# Prepare your AWS account {id="cloud-experts-using-aws-ack-prep-aws_{{ context }}"}

Create the AWS Identity and Access Management (IAM) trust policy and role that the AWS Controllers for Kubernetes (ACK) Operator requires to manage AWS resources from your {{ product_title }} cluster. {._abstract}

**Procedure**

1.  Create an AWS IAM trust policy for the ACK Operator:
    ```terminal
    $ cat <<EOF > "${SCRATCH}/trust-policy.json"
    {
     "Version": "2012-10-17",
     "Statement": [
     {
     "Effect": "Allow",
     "Condition": {
       "StringEquals" : {
         "${OIDC_ENDPOINT}:sub": "system:serviceaccount:ack-system:${ACK_SERVICE_ACCOUNT}"
       }
     },
     "Principal": {
       "Federated": "arn:aws:iam::$AWS_ACCOUNT_ID:oidc-provider/${OIDC_ENDPOINT}"
     },
     "Action": "sts:AssumeRoleWithWebIdentity"
     }
     ]
    }
    EOF
    ```
1.  Create an AWS IAM role for the ACK Operator to assume with the `AmazonS3FullAccess` policy attached:

    :::note

    You can find the recommended policy in each project’s GitHub repository, for example https://github.com/aws-controllers-k8s/s3-controller/blob/main/config/iam/recommended-policy-arn.
    
    :::

    ```terminal
    $ ROLE_ARN=$(aws iam create-role --role-name "ack-${ACK_SERVICE}-controller" \
       --assume-role-policy-document "file://${SCRATCH}/trust-policy.json" \
       --query Role.Arn --output text)
    ```
    ```terminal
    $ echo $ROLE_ARN
    ```
    ```terminal
    $ aws iam attach-role-policy --role-name "ack-${ACK_SERVICE}-controller" \
         --policy-arn ${POLICY_ARN}
    ```