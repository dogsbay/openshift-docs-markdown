{%- set _mod_docs_content_type = "CONCEPT" %}
# CLI deployment modes {id="cloud-experts-getting-start-detailed-cli-deployment-mode_{{ context }}"}

There are two modes with which to deploy a {{ product_title }} cluster. One is automatic, which is quicker and performs the manual work for you. The other is manual, requires you to run extra commands, and allows you to inspect the roles and policies being created. This tutorial documents both options.  {._abstract}

If you want to create a cluster quickly, use the automatic option. If you prefer exploring the roles and policies being created, use the manual option. 

Choose the deployment mode by using the `--mode` flag in the relevant commands.  

Valid options for `--mode` are:

*   **`manual`:** Role and policies are created and saved in the current directory. You must manually run the provided commands as the next step. This option allows you to review the policy and roles before creating them.
*   **`auto`:** Roles and policies are created and applied automatically using the current AWS account.


:::tip

You can use either deployment method for this tutorial. The `auto` mode is faster and has less steps.

:::


## Deployment workflow {id="_deployment_workflow"}
The overall deployment workflow follows these steps:

1.  `rosa create account-roles` - This is executed only _once_ for each account. Once created, the account roles do **not** need to be created again for more clusters of the same y-stream version.
1.  `rosa create cluster`
1.  `rosa create operator-roles` - For manual mode only.
1.  `rosa create oidc-provider` - For manual mode only.

For each additional cluster in the same account for the same y-stream version, only step 2 is needed for automatic mode. Steps 2 through 4 are needed for manual mode.