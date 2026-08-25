{%- set _mod_docs_content_type = "PROCEDURE" %}
# Installing and configuring the {{ rosa_cli }} {id="rosa-installing-and-configuring-the-rosa-cli_{{ context }}"}

Install and configure the {{ rosa_cli_first }}. You can also install the {{ oc_first }} and verify if the required AWS resource quotas are available by using the {{ rosa_cli }}. {._abstract}

**Prerequisites**

*   Review and complete the AWS prerequisites and {{ product_title }} policies.
*   Create a [Red&#160;Hat account](https://cloud.redhat.com), if you do not already have one. Then, check your email for a verification link. You will need these credentials to install {{ product_title }}.
*   Configure your AWS account and enable the {{ product_title }} service in your AWS account.

**Procedure**

1.  Install `rosa`, the {{ rosa_cli }}.
    1.  Download the [latest release](https://console.redhat.com/openshift/downloads) of the {{ rosa_cli }} for your operating system.
    1.  Optional: Rename the executable file you downloaded to `rosa`. This documentation uses `rosa` to refer to the executable file.
    1.  Optional: Add `rosa` to your path.
        ```terminal title="Example"
        $ mv rosa /usr/local/bin/rosa
        ```
    1.  Enter the following command to verify your installation:
        ```terminal
        $ rosa
        ```
        ```terminal title="Example output"
        Command-line tool for Red Hat OpenShift Service on AWS.
        For further documentation visit https://access.redhat.com/documentation/en-us/red_hat_openshift_service_on_aws

        Usage:
          rosa [command]

        Available Commands:
          completion  Generates completion scripts
          create      Create a resource from stdin
          delete      Delete a specific resource
          describe    Show details of a specific resource
          download    Download necessary tools for using your cluster
          edit        Edit a specific resource
          grant       Grant role to a specific resource
          help        Help about any command
          init        Applies templates to support Red Hat OpenShift Service on AWS
          install     Installs a resource into a cluster
          link        Link a ocm/user role from stdin
          list        List all resources of a specific type
          login       Log in to your Red Hat account
          logout      Log out
          logs        Show installation or uninstallation logs for a cluster
          revoke      Revoke role from a specific resource
          uninstall   Uninstalls a resource from a cluster
          unlink      UnLink a ocm/user role from stdin
          upgrade     Upgrade a resource
          verify      Verify resources are configured correctly for cluster install
          version     Prints the version of the tool
          whoami      Displays user account information

        Flags:
              --color string   Surround certain characters with escape sequences to display them in color on the terminal. Allowed options are [auto never always] (default "auto")
              --debug          Enable debug mode.
          -h, --help           help for rosa

        Use "rosa [command] --help" for more information about a command.
        ```
    1.  Optional: Generate the command completion scripts for the {{ rosa_cli }}. The following example generates the Bash completion scripts for a Linux machine:
        ```terminal
        $ rosa completion bash | sudo tee /etc/bash_completion.d/rosa
        ```
    1.  Optional: Enable command completion for the {{ rosa_cli }} from your existing terminal. The following example enables Bash completion for `rosa` in an existing terminal on a Linux machine:
        ```terminal
        $ source /etc/bash_completion.d/rosa
        ```
1.  Log in to your Red&#160;Hat account with `rosa`.
    1.  Enter the following command.
        ```terminal
        $ rosa login
        ```
    1.  Replace `<my_offline_access_token>` with your token.
        ```terminal title="Example output"
        To login to your Red Hat account, get an offline access token at https://console.redhat.com/openshift/token/rosa
        ? Copy the token and paste it here: <my-offline-access-token>
        ```
        ```terminal title="Example output continued"
        I: Logged in as 'rh-rosa-user' on 'https://api.openshift.com'
        ```
1.  Enter the following command to verify that your AWS account has the necessary permissions.
    ```terminal
    $ rosa verify permissions
    ```
    ```terminal title="Example output"
    I: Validating SCP policies...
    I: AWS SCP policies ok
    ```

    :::note

    This command verifies permissions only for {{ product_title }} clusters that do not use the AWS Security Token Service (STS).
    
    :::

1.  Verify that your AWS account has the necessary quota to deploy a {{ product_title }} cluster.
    ```terminal
    $ rosa verify quota --region=us-west-2
    ```
    ```terminal title="Example output"
    I: Validating AWS quota...
    I: AWS quota ok
    ```

    :::note

    Sometimes your AWS quota varies by region. If you receive any errors, try a different region.
    
    :::


    If you need to increase your quota, go to your [AWS console](https://aws.amazon.com/console/), and request a quota increase for the service that failed.

    After both the permissions and quota checks pass, proceed to the next step.
1.  Prepare your AWS account for cluster deployment:
    1.  Run the following command to verify your Red&#160;Hat and AWS credentials are setup correctly. Check that your AWS Account ID, Default Region and ARN match what you expect. You can safely ignore the rows beginning with `OCM` for now.
        ```terminal
        $ rosa whoami
        ```
        ```terminal title="Example output"
        AWS Account ID:               000000000000
        AWS Default Region:           us-east-2
        AWS ARN:                      arn:aws:iam::000000000000:user/hello
        OCM API:                      https://api.openshift.com
        OCM Account ID:               1DzGIdIhqEWyt8UUXQhSoWaaaaa
        OCM Account Name:             Your Name
        OCM Account Username:         you@domain.com
        OCM Account Email:            you@domain.com
        OCM Organization ID:          1HopHfA2hcmhup5gCr2uH5aaaaa
        OCM Organization Name:        Red Hat
        OCM Organization External ID: 0000000
        ```
    1.  Initialize your AWS account. This step runs a CloudFormation template that prepares your AWS account for cluster deployment and management. This step typically takes 1-2 minutes to complete.
        ```terminal
        $ rosa init
        ```
        ```terminal title="Example output"
        I: Logged in as 'rh-rosa-user' on 'https://api.openshift.com'
        I: Validating AWS credentials...
        I: AWS credentials are valid!
        I: Validating SCP policies...
        I: AWS SCP policies ok
        I: Validating AWS quota...
        I: AWS quota ok
        I: Ensuring cluster administrator user 'osdCcsAdmin'...
        I: Admin user 'osdCcsAdmin' created successfully!
        I: Verifying whether OpenShift command-line tool is available...
        E: OpenShift command-line tool is not installed.
        Run 'rosa download oc' to download the latest version, then add it to your PATH.
        ```
1.  Install the {{ oc_first }} from the {{ rosa_cli }}.
    1.  Enter this command to download the latest version of the OpenShift CLI:
        ```terminal
        $ rosa download oc
        ```
    1.  After downloading the OpenShift CLI, extract it and add it to your path.
    1.  Enter this command to verify that the OpenShift CLI is installed correctly:
        ```terminal
        $ rosa verify oc
        ```

**Next steps**

*   Create a {{ product_title }} cluster.