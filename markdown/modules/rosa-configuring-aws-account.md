{%- set _mod_docs_content_type = "PROCEDURE" %}
# Configuring your AWS account {id="rosa-configuring-aws-account_{{ context }}"}

To configure your AWS account to use the {{ product_title }} service, complete the following steps. {._abstract}

**Prerequisites**

*   Review and complete the deployment prerequisites and policies.
*   Create a [Red&#160;Hat account](https://cloud.redhat.com), if you do not already have one. Then, check your email for a verification link. You will need these credentials to install ROSA.

**Procedure**

1.  Log in to the Amazon Web Services (AWS) account that you want to use.

    A dedicated AWS account is recommended to run production clusters. If you are using AWS Organizations, you can use an AWS account within your organization or [create a new one](https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_accounts_create.html#orgs_manage_accounts_create-new).

    If you are using AWS Organizations and you need to have a service control policy (SCP) applied to the AWS account you plan to use, see AWS Prerequisites for details on the minimum required SCP.

    As part of the cluster creation process, `rosa` establishes an `osdCcsAdmin` IAM user. This user uses the IAM credentials you provide when configuring the AWS CLI.

    :::note

    This user has `Programmatic` access enabled and the `AdministratorAccess` policy attached to it.
    
    :::

1.  Enable the ROSA service in the AWS Console.
    1.  Sign in to your [AWS account](https://console.aws.amazon.com/rosa/home).
    1.  To enable ROSA, go to the [ROSA service](https://console.aws.amazon.com/rosa/) and select **Enable OpenShift**.
1.  Install and configure the AWS CLI.
    1.  Follow the AWS command-line interface documentation to [install](https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-install.html) and [configure](https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-configure.html) the AWS CLI for your operating system.

        Specify the correct `aws_access_key_id` and `aws_secret_access_key` in the `.aws/credentials` file. See [AWS Configuration basics](https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-quickstart.html) in the AWS documentation.
    1.  Set a default AWS region.

        :::note

        It is recommended to set the default AWS region by using the environment variable.
        
        :::


        The {{ product_title }} service evaluates regions in the following priority order:
        1.  The region specified when running the `rosa` command with the `--region` flag.
        1.  The region set in the `AWS_DEFAULT_REGION` environment variable. See [Environment variables to configure the AWS CLI](https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-envvars.html) in the AWS documentation.
        1.  The default region set in your AWS configuration file. See [Quick configuration with aws configure](https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-quickstart.html#cli-configure-quickstart-config) in the AWS documentation.
    1.  Optional: Configure your AWS CLI settings and credentials by using an AWS named profile. `rosa` evaluates AWS named profiles in the following priority order:
        1.  The profile specified when running the `rosa` command with the `--profile` flag.
        1.  The profile set in the `AWS_PROFILE` environment variable. See [Named profiles](https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-profiles.html) in the AWS documentation.
    1.  Verify the AWS CLI is installed and configured correctly by running the following command to query the AWS API:
        ```terminal
        $ aws sts get-caller-identity --output text
        ```
        ```terminal title="Example output"
        <aws_account_id>    arn:aws:iam::<aws_account_id>:user/<username>  <aws_user_id>
        ```

        After completing these steps, install {{ product_title }}.