{%- set _mod_docs_content_type = "PROCEDURE" %}
# Create a secret and IAM access policies {id="cloud-experts-aws-secret-manager-create-iam-polices_{{ context }}"}

Create a secret in AWS Secrets Manager and configure the necessary AWS Identity and Access Management (IAM) policies and roles to allow your application workloads to retrieve the secret securely using the Security Token Service (STS). {._abstract}

**Procedure**

1.  Create a secret in AWS Secrets Manager by running the following command:
    ```terminal
    $ SECRET_ARN=$(aws --region "$REGION" secretsmanager create-secret \
        --name MySecret --secret-string \
        '{"username":"shadowman", "password":"hunter2"}' \
        --query ARN --output text); echo $SECRET_ARN
    ```
1.  Create an IAM Access Policy document by running the following command:
    ```terminal
    $ cat << EOF > policy.json
    {
       "Version": "2012-10-17",
       "Statement": [{
          "Effect": "Allow",
          "Action": [
            "secretsmanager:GetSecretValue",
            "secretsmanager:DescribeSecret"
          ],
          "Resource": ["$SECRET_ARN"]
          }]
    }
    EOF
    ```
1.  Create an IAM Access Policy by running the following command:
    ```terminal
    $ POLICY_ARN=$(aws --region "$REGION" --query Policy.Arn \
    --output text iam create-policy \
    --policy-name openshift-access-to-mysecret-policy \
    --policy-document file://policy.json); echo $POLICY_ARN
    ```
1.  Create an IAM Role trust policy document by running the following command:

    :::note

    The trust policy is locked down to the default service account of a namespace you create later in this process.
    
    :::

    ```terminal
    $ cat <<EOF > trust-policy.json
    {
       "Version": "2012-10-17",
       "Statement": [
       {
       "Effect": "Allow",
       "Condition": {
         "StringEquals" : {
           "${OIDC_ENDPOINT}:sub": ["system:serviceaccount:my-application:default"]
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
1.  Create an IAM role by running the following command:
    ```terminal
    $ ROLE_ARN=$(aws iam create-role --role-name openshift-access-to-mysecret \
    --assume-role-policy-document file://trust-policy.json \
    --query Role.Arn --output text); echo $ROLE_ARN
    ```
1.  Attach the role to the policy by running the following command:
    ```terminal
    $ aws iam attach-role-policy --role-name openshift-access-to-mysecret \
        --policy-arn $POLICY_ARN
    ```