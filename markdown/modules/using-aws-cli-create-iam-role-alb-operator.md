{%- set _mod_docs_content_type = "PROCEDURE" %}
# Creating an AWS IAM role by using the AWS CLI {id="using-aws-cli-create-iam-role-alb-operator_{{ context }}"}

To enable the {{ aws_short }} Load Balancer Operator to interact with subnets and VPCs, create an {{ aws_short }} IAM role by using the {{ aws_short }} CLI. This enables the Operator to access and manage the necessary network resources within the cluster. {._abstract}

**Prerequisites**

*   You must have access to the {{ aws_short }} Command Line Interface (`aws`).

**Procedure**

1.  Generate a trust policy file by using your identity provider by running the following command:
    ```terminal
    $ cat <<EOF > albo-operator-trust-policy.json
    {
        "Version": "2012-10-17",
        "Statement": [
            {
                "Effect": "Allow",
                "Principal": {
                    "Federated": "<oidc_arn>"
                },
                "Action": "sts:AssumeRoleWithWebIdentity",
                "Condition": {
                    "StringEquals": {
                        "<cluster_oidc_endpoint>:sub": "system:serviceaccount:aws-load-balancer-operator:aws-load-balancer-operator-controller-manager"
                    }
                }
            }
        ]
    }
    EOF
    ```

    where:

    `<oidc_arn>`
    :   Specifies the Amazon Resource Name (ARN) of the OIDC identity provider, such as `arn:aws:iam::777777777777:oidc-provider/rh-oidc.s3.us-east-1.amazonaws.com/28292va7ad7mr9r4he1fb09b14t59t4f`.

    `serviceaccount`
    :   Specifies the service account for the {{ aws_short }} Load Balancer Controller. An example of `<cluster_oidc_endpoint>` is `rh-oidc.s3.us-east-1.amazonaws.com/28292va7ad7mr9r4he1fb09b14t59t4f`.

1.  Create the IAM role with the generated trust policy by running the following command:
    ```terminal
    $ aws iam create-role --role-name albo-operator --assume-role-policy-document file://albo-operator-trust-policy.json
    ```
    ```terminal title="Example output"
    ROLE	arn:aws:iam::<aws_account_number>:role/albo-operator	2023-08-02T12:13:22Z (1)
    ASSUMEROLEPOLICYDOCUMENT	2012-10-17
    STATEMENT	sts:AssumeRoleWithWebIdentity	Allow
    STRINGEQUALS	system:serviceaccount:aws-load-balancer-operator:aws-load-balancer-controller-manager
    PRINCIPAL	arn:aws:iam:<aws_account_number>:oidc-provider/<cluster_oidc_endpoint>
    ```

    where:

    `<aws_account_number>`
    :   Specifies the ARN of the created {{ aws_short }} IAM role for the {{ aws_short }} Load Balancer Operator, such as `arn:aws:iam::777777777777:role/albo-operator`.

1.  Download the permission policy for the {{ aws_short }} Load Balancer Operator by running the following command:
    ```terminal
    $ curl -o albo-operator-permission-policy.json https://raw.githubusercontent.com/openshift/aws-load-balancer-operator/main/hack/operator-permission-policy.json
    ```
1.  Attach the permission policy for the {{ aws_short }} Load Balancer Controller to the IAM role by running the following command:
    ```terminal
    $ aws iam put-role-policy --role-name albo-operator --policy-name perms-policy-albo-operator --policy-document file://albo-operator-permission-policy.json
    ```