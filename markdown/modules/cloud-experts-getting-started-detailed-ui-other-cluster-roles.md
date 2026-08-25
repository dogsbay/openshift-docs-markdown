{%- set _mod_docs_content_type = "PROCEDURE" %}

# Other {{ cluster_manager }} role creation options {id="cloud-experts-getting-started-detailed-ui-other-cluster-roles_{{ context }}"}

You can use the {{ rosa_cli }} tool to create your cluster roles. {._abstract}

**Procedure**

*   **Manual mode:** If you prefer to run the AWS CLI commands yourself, you can define the mode as `manual` rather than `auto`. The CLI will output the AWS commands and the relevant JSON files are created in the current directory.

    Use the following command to create the {{ cluster_manager }} role in manual mode:
    ```terminal
    $ rosa create ocm-role --mode manual --admin --yes
    ```
*   **Basic {{ cluster_manager }} role:** If you prefer that the {{ cluster_manager }} has read only access to the account, create a basic {{ cluster_manager }} role. You will then need to manually create the required roles, policies, and OIDC provider using the CLI.

    Use the following command to create a Basic {{ cluster_manager }} role:
    ```terminal
    $ rosa create ocm-role --mode auto --yes
    ```