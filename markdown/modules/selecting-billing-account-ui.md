{%- set _mod_docs_content_type = "PROCEDURE" %}
# Select the AWS billing account during cluster deployment using the web console {id="selecting-billing-account-ui_{{ context }}"}

When deploying your cluster using {{ cluster_manager }}, you must select the correct AWS billing account for {{ product_title }}. {._abstract}

**Procedure**

1.  To start creating a cluster, select **Create with web interface** of the introductory **Set up {{ product_title }}** page.
    ![rosa-deploy-ui-19](/_assets/images/rosa-deploy-ui-19.png)

    :::note

    Complete the prerequisites before starting the web console deployment process.

    The {{ rosa_cli_first }} is required for certain tasks, such as creating the account roles. If you are deploying {{ product_title }} for the first time, follow the CLI steps until running the `rosa whoami` command, before starting the web console deployment steps.
    
    :::

1.  Select the **Hosted** control plane option, then click **Next**.
    ![rosa-deploy-ui-hcp-20](/_assets/images/rosa-deploy-ui-hcp-20.png)
1.  In the next step **Accounts and roles**, specify the infrastructure AWS account, into which the {{ product_title }} cluster is deployed and where the resources are consumed and managed.
    ![rosa-ui-account-21](/_assets/images/rosa-ui-account-21.png)
    *   Click the **How to associate a new AWS account**, if you don’t see the account into which you want to deploy the {{ product_title }} cluster for detailed information on how to create or link account roles for this association.
    *   The {{ rosa_cli }} is used for this.
    *   If you are using multiple AWS accounts and have their profiles configured for the AWS CLI, you can use the `--profile` selector to specify the AWS profile when working with the {{ rosa_cli }} commands.
1.  Select the AWS billing account.
    ![rosa-ui-billing-22](/_assets/images/rosa-ui-billing-22.png)
    *   Only AWS accounts that are linked to the user’s logged in Red&#160;Hat account are shown.
    *   The specified AWS account is charged for using the {{ product_title }} service.
    *   An indicator shows if the {{ product_title }} contract is enabled or not enabled for a given AWS billing account.
        *   If you select an AWS billing account that shows the _Contract enabled_ label, on-demand consumption rates are charged only after the capacity of your pre-paid contract is consumed.
        *   AWS accounts without the _Contract enabled_ label are charged the applicable on-demand consumption rates.

            :::note

            The following steps past the billing AWS account selection are beyond the scope of this tutorial.
            
            :::