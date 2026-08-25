{% if context == "rosa-hcp-quickstart-guide" %}
{%- set quickstart = true -%}
{% endif %}

{%- set _mod_docs_content_type = "PROCEDURE" %}
# Install and configure the required CLI tools {id="rosa-getting-started-install-configure-cli-tools_{{ context }}"}

Several command-line interface (CLI) tools are required to deploy and work with your cluster. {._abstract}

**Prerequisites**

*   You have an AWS account.
*   You have a Red&#160;Hat account.

**Procedure**

1.  Log in to your Red&#160;Hat and AWS accounts to access the download page for each required tool.
    1.  Log in to your Red&#160;Hat account at [console.redhat.com](https://console.redhat.com).
    1.  Log in to your AWS account at [aws.amazon.com](https://aws.amazon.com).
1.  Install and configure the latest AWS CLI (`aws`).
    1.  Install the AWS CLI by following the [AWS Command Line Interface](https://aws.amazon.com/cli/) documentation appropriate for your workstation.
    1.  Configure the AWS CLI by specifying your `aws_access_key_id`, `aws_secret_access_key`, and `region` in the `.aws/credentials` file. For more information, see [AWS Configuration basics](https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-quickstart.html) in the AWS documentation.

        :::note

        Optional: Use the `AWS_DEFAULT_REGION` environment variable to set the default AWS region.
        
        :::

    1.  Query the AWS API to verify if the AWS CLI is installed and configured correctly:
        ```terminal
        $ aws sts get-caller-identity  --output text
        ```

        For example:
        ```terminal
        <aws_account_id>    arn:aws:iam::<aws_account_id>:user/<username>  <aws_user_id>
        ```
1.  Install and configure the latest {{ rosa_cli }}.
    1.  Navigate to [**Downloads**](https://console.redhat.com/openshift/downloads).
    1.  Find **Red Hat OpenShift Service on AWS command line interface (`rosa`)** in the list of tools and click **Download**.

        The `rosa-linux.tar.gz` file is downloaded to your default download location.
    1.  Extract the `rosa` binary file from the downloaded archive. The following example extracts the binary from a Linux tar archive:
        ```terminal
        $ tar xvf rosa-linux.tar.gz
        ```
    1.  Move the `rosa` binary file to a directory in your execution path. In the following example, the `/usr/local/bin` directory is included in the path of the user:
        ```terminal
        $ sudo mv rosa /usr/local/bin/rosa
        ```
    1.  Verify that the {{ rosa_cli }} is installed correctly by querying the `rosa` version:
        ```terminal
        $ rosa version
        ```

        For example:
        ```terminal {minja}
        1.2.47
        Your {{ rosa_cli }} is up to date.
        ```
1.  Log in to the {{ rosa_cli }} using an offline access token.
    1.  Run the login command:
        ```terminal
        $ rosa login
        ```

        For example:
        ```terminal
        To login to your Red Hat account, get an offline access token at https://console.redhat.com/openshift/token/rosa
        ? Copy the token and paste it here:
        ```
    1.  Navigate to the URL listed in the command output to view your offline access token.
    1.  Enter the offline access token at the command-line prompt to log in.
        ```terminal
        ? Copy the token and paste it here: *******************
        [full token length omitted]
        ```

        :::note

        In the future you can specify the offline access token by using the `--token="<offline_access_token>"` argument when you run the `rosa login` command.
        
        :::

    1.  Verify that you are logged in and confirm that your credentials are correct before proceeding:
        ```terminal
        $ rosa whoami
        ```

        For example:
        ```terminal
        AWS Account ID:               <aws_account_number>
        AWS Default Region:           us-east-1
        AWS ARN:                      arn:aws:iam::<aws_account_number>:user/<aws_user_name>
        OCM API:                      https://api.openshift.com
        OCM Account ID:               <red_hat_account_id>
        OCM Account Name:             Your Name
        OCM Account Username:         you@domain.com
        OCM Account Email:            you@domain.com
        OCM Organization ID:          <org_id>
        OCM Organization Name:        Your organization
        OCM Organization External ID: <external_org_id>
        ```
1.  Install and configure the latest OpenShift CLI (`oc`).
    1.  Use the {{ rosa_cli }} to download the `oc` CLI.

        The following command downloads the latest version of the CLI to the current working directory:
        ```terminal
        $ rosa download openshift-client
        ```
    1.  Extract the `oc` binary file from the downloaded archive. The following example extracts the files from a Linux tar archive:
        ```terminal
        $ tar xvf openshift-client-linux.tar.gz
        ```
    1.  Move the `oc` binary to a directory in your execution path. In the following example, the `/usr/local/bin` directory is included in the path of the user:
        ```terminal
        $ sudo mv oc /usr/local/bin/oc
        ```
    1.  Verify that the `oc` CLI is installed correctly:
        ```terminal
        $ rosa verify openshift-client
        ```

        For example:
        ```terminal
        I: Verifying whether OpenShift command-line tool is available...
        I: Current OpenShift Client Version: 4.17.3
        ```

**Verification**

*   Verify the installation of each CLI tool:
    ```terminal
    $ rosa version
    $ aws --version
    $ oc version
    ```

**Additional resources**
{._additional-resources}

*   [AWS Command Line Interface documentation](https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-welcome.html)
*   [Getting started with the OpenShift CLI](https://docs.openshift.com/container-platform/latest/cli_reference/openshift_cli/getting-started-cli.html)

{% if context == "rosa-hcp-quickstart-guide" %}
{%- set quickstart = "" -%}
{% endif %}