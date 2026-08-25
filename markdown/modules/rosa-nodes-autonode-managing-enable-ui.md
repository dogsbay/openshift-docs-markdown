{%- set _mod_docs_content_type = "PROCEDURE" %}
# Enable the {{ autonode }} using {{ cluster_manager }} {id="rosa-nodes-autonode-managing-enable-ui_{{ context }}"}

Enable the {{ autonode }} on your cluster by using {{ cluster_manager }} after it finishes installing. {._abstract}

**Prerequisites**

*   You have created an AWS Identity and Access Management (IAM) role to be configured for the {{ autonode }}.
*   You have your cluster’s OpenID Connect (OIDC) Endpoint URL.

    :::note

    Run `rosa describe cluster -c $CLUSTER_NAME | grep "OIDC Endpoint URL"` to see this URL. Do not include the `https://` prefix from the OIDC Endpoint URL. For example, use  `example-oidc-endpoint.cloudfront.net/abcd1234examplehash5678` instead of `https://example-oidc-endpoint.cloudfront.net/abcd1234examplehash5678`.
    
    :::

*   You have the proper credentials to access the AWS console.

**Procedure**

1.  Export your AWS ID:
    ```terminal
    $ export AWS_ACCOUNT_ID=$(aws sts get-caller-identity --query Account --output text)
    ```
1.  Log in to the [AWS console](https://console.aws.amazon.com/). 
1.  In the AWS console, navigate to **IAM > Roles**.
1.  On your {{ autonode }} Amazon Resource Name (ARN), update the trust policy to include the following policy specifications:

    :::note

    To access this ARN, run:

    ```terminal
    $ echo $ROLE_ARN
    ```
    
    :::

    ```json
    {
        "Version": "2012-10-17",
        "Statement": [
            {
                "Effect": "Allow",
                "Principal": {
                    "Federated": "arn:aws:iam::<aws_account_id>:oidc-provider/<oidc-endpoint-URL>"
                },
                "Action": "sts:AssumeRoleWithWebIdentity",
                "Condition": {
                    "StringEquals": {
                        "<oidc-endpoint-URL>:sub": "system:serviceaccount:kube-system:karpenter"
                    }
                }
            }
        ]
    }
    ```

    where:

    &lt;aws_account_id>
    :   Specifies your AWS Account ID. 

    &lt;oidc-endpoint-URL>
    :   Specifies the OIDC endpoint URL that you acquired.

1.  In {{ cluster_manager_url }}, select your cluster from the cluster list.
1.  On the cluster details screen, select the **Edit** button next to the status for the {{ autonode }}. 
1.  On the **Edit Autonode settings** dialog box, toggle **Enable Autonode**.
1.  Add your {{ autonode }} IAM role ARN to the field in this dialog box.
1.  Select **Save** to save your configurations and close the **Edit Autonode settings** box.

**Verification**

1.  Log in to the cluster:
    ```terminal
    $ oc login <api_url> --username cluster-admin --password <password>
    ```
1.  Verify that the {{ autonode }} custom resource definitions (CRDs) are present:
    ```terminal
    $ oc get ec2nodeclass
    ```
    ```terminal title="Example output"
    NAME      READY   AGE
    default   True    5m
    ```
    ```terminal
    $ oc get openshiftec2nodeclass
    ```
    ```terminal title="Example output"
    NAME      READY
    default   True
    ```