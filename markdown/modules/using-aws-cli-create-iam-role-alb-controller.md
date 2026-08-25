{%- set _mod_docs_content_type = "PROCEDURE" %}
# Creating an AWS IAM role for the controller by using the AWS CLI {id="using-aws-cli-create-iam-role-alb-controller_{{ context }}"}

To enable the {{ aws_short }} Load Balancer Controller to interact with subnets and Virtual Private Clouds (VPCs), create an IAM role by using the {{ aws_short }} CLI. This ensures the controller has the specific permissions required to manage network resources within the cluster. {._abstract}

**Prerequisites**

*   You must have access to the {{ aws_short }} command-line interface (`aws`).

**Procedure**

1.  Generate a trust policy file using your identity provider by running the following command:
    ```terminal
    $ cat <<EOF > albo-controller-trust-policy.json
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

1.  Create an {{ aws_short }} IAM role with the generated trust policy by running the following command:
    ```terminal
    $ aws iam create-role --role-name albo-controller --assume-role-policy-document file://albo-controller-trust-policy.json
    ```
    ```terminal title="Example output"
    ROLE	arn:aws:iam::<aws_account_number>:role/albo-controller	2023-08-02T12:13:22Z (1)
    ASSUMEROLEPOLICYDOCUMENT	2012-10-17
    STATEMENT	sts:AssumeRoleWithWebIdentity	Allow
    STRINGEQUALS	system:serviceaccount:aws-load-balancer-operator:aws-load-balancer-operator-controller-manager
    PRINCIPAL	arn:aws:iam:<aws_account_number>:oidc-provider/<cluster_oidc_endpoint>
    ```

    where:

    `<aws_account_number>`
    :   Specifies the ARN for an {{ aws_short }} IAM role for the {{ aws_short }} Load Balancer Controller, such as `arn:aws:iam::777777777777:role/albo-controller`.

1.  Download the permission policy for the {{ aws_short }} Load Balancer Controller by running the following command:
    ```terminal
    $ curl -o albo-controller-permission-policy.json https://raw.githubusercontent.com/openshift/aws-load-balancer-operator/main/assets/iam-policy.json
    ```
1.  Attach the permission policy for the {{ aws_short }} Load Balancer Controller to an {{ aws_short }} IAM role by running the following command:
    ```terminal
    $ aws iam put-role-policy --role-name albo-controller --policy-name perms-policy-albo-controller --policy-document file://albo-controller-permission-policy.json
    ```
1.  Create a YAML file that defines the `AWSLoadBalancerController` object:
    ```yaml title="Example sample-aws-lb-manual-creds.yaml file"
    apiVersion: networking.olm.openshift.io/v1
    kind: AWSLoadBalancerController
    metadata:
      name: cluster
    spec:
      credentialsRequestConfig:
        stsIAMRoleARN: <albc_role_arn>
    ```

    where:

    `kind`
    :   Specifies the `AWSLoadBalancerController` object.

    `metatdata.name`
    :   Specifies the {{ aws_short }} Load Balancer Controller name. All related resources use this instance name as a suffix.

    `stsIAMRoleARN`
    :   Specifies the ARN role for the {{ aws_short }} Load Balancer Controller. The `CredentialsRequest` object uses this ARN role to provision the {{ aws_short }} credentials. An example of `<albc_role_arn>` is `arn:aws:iam::777777777777:role/albo-controller`.