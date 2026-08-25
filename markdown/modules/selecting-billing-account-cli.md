{%- set _mod_docs_content_type = "PROCEDURE" %}
# Select the AWS billing account during cluster deployment using the CLI {id="selecting-billing-account-cli_{{ context }}"}

When deploying your cluster using {{ rosa_cli_first }}, you must select the correct AWS billing account for {{ product_title }}. {._abstract}

**Prerequisites**

*   You have installed the most recent [{{ rosa_cli }}](https://docs.redhat.com/en/documentation/red_hat_openshift_service_on_aws/4/html-single/cli_tools/index#rosa-get-started-cli).
*   You have installed the most recent [AWS CLI](https://aws.amazon.com/cli/).
*   You have completed the steps in [Link AWS and Red&#160;Hat accounts and subscriptions](https://docs.redhat.com/en/documentation/red_hat_openshift_service_on_aws/4/html-single/tutorials/index#aws-rh-linking_cloud-experts-activation-account-linking).

**Procedure**

1.  Initiate the cluster deployment using the `rosa create cluster` command. You can click the **copy** button on the [Set up {{ product_title }} console page](https://console.redhat.com/openshift/create/rosa/getstarted) and paste the command in your terminal. This launches the cluster creation process in interactive mode.
    ![rosa-cli-15](/_assets/images/rosa-cli-15.png)
    1.  Optional: Add the `--profile <profile_name>` option to the `rosa create cluster` command to use a non-default profile from your `~/.aws/credentials` file, for example:
        ```terminal
        $ rosa create cluster --profile stage
        ```

        If no profile is specified, the default AWS CLI profile determines the AWS infrastructure profile into which the cluster is deployed.
1.  Specify the billing AWS account.
    ![rosa-create-cli-billing-17](/_assets/images/rosa-create-cli-billing-17.png)
    *   Only AWS accounts that are linked to the user’s logged in Red&#160;Hat account are shown.
    *   The specified AWS account is charged for using the {{ product_title }} service.
    *   An indicator shows if the {{ product_title }} contract is enabled or not enabled for a given AWS billing account.
        *   If you select an AWS billing account that shows the _Contract enabled_ label, on-demand consumption rates are charged only after the capacity of your pre-paid contract is consumed.
        *   AWS accounts without the _Contract enabled_ label are charged the applicable on-demand consumption rates.