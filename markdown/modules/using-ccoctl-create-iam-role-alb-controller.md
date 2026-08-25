{%- set _mod_docs_content_type = "PROCEDURE" %}
# Creating an AWS IAM role for the controller by using the Cloud Credential Operator utility {id="using-ccoctl-create-iam-role-alb-controller_{{ context }}"}

To enable the {{ aws_short }} Load Balancer Controller to interact with subnets and VPCs, create an IAM role by using the Cloud Credential Operator utility (`ccoctl`). This utility ensures the controller has the specific permissions required to manage network resources within the cluster. {._abstract}

**Prerequisites**

*   You must extract and prepare the `ccoctl` binary.

**Procedure**

1.  Download the `CredentialsRequest` custom resource (CR) and store it in a directory by running the following command:
    ```terminal
    $ curl --create-dirs -o <credentials_requests_dir>/controller.yaml https://raw.githubusercontent.com/openshift/aws-load-balancer-operator/main/hack/controller/controller-credentials-request.yaml
    ```
1.  Use the `ccoctl` utility to create an {{ aws_short }} IAM role by running the following command:
    ```terminal
    $ ccoctl aws create-iam-roles \
        --name <name> \
        --region=<aws_region> \
        --credentials-requests-dir=<credentials_requests_dir> \
        --identity-provider-arn <oidc_arn>
    ```
    ```terminal title="Example output"
    2023/09/12 11:38:57 Role arn:aws:iam::777777777777:role/<name>-aws-load-balancer-operator-aws-load-balancer-controller created
    2023/09/12 11:38:57 Saved credentials configuration to: /home/user/<credentials_requests_dir>/manifests/aws-load-balancer-operator-aws-load-balancer-controller-credentials.yaml
    2023/09/12 11:38:58 Updated Role policy for Role <name>-aws-load-balancer-operator-aws-load-balancer-controller created
    ```

    where:

    `<name>`
    :   Specifies the Amazon Resource Name (ARN) for an {{ aws_short }} IAM role that was created for the {{ aws_short }} Load Balancer Controller, such as `arn:aws:iam::777777777777:role/<name>-aws-load-balancer-operator-aws-load-balancer-controller`.

    :::note

    The length of an AWS IAM role name must be less than or equal to 12 characters.
    
    :::