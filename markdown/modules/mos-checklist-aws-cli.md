{%- set _mod_docs_content_type = "PROCEDURE" %}
# AWS CLI (`aws`) {id="mos-checklist-aws-cli_{{ context }}"}

The AWS CLI tool allows you to interact with AWS resources directly. {._abstract}

**Procedure**

1.  Install the [AWS Command Line Interface](https://aws.amazon.com/cli/).
1.  Log in to your AWS account using the AWS CLI: [Sign in through the AWS CLI](https://docs.aws.amazon.com/signin/latest/userguide/command-line-sign-in.html)
1.  Verify your account identity:
    ```terminal
     $ aws sts get-caller-identity
    ```
1.  Check whether the service role for ELB (Elastic Load Balancing) exists:
    ```terminal
    $ aws iam get-role --role-name "AWSServiceRoleForElasticLoadBalancing"
    ```

    If the role does not exist, create it by running the following command:
    ```terminal
    $ aws iam create-service-linked-role --aws-service-name "elasticloadbalancing.amazonaws.com"
    ```