{%- set _mod_docs_content_type = "PROCEDURE" %}

# Creating and associating an {{ cluster_manager }} role {id="cloud-experts-getting-started-detailed-ui-associate-ocm-role_{{ context }}"}

You need the {{ cluster_manager }} role to create your cluster.  {._abstract}

**Procedure**

1.  Run the following command to see if an {{ cluster_manager }} role exists:
    ```terminal
    $ rosa list ocm-role
    ```
1.  The UI displays the commands to create an {{ cluster_manager }} role with two different levels of permissions:
    *   **Basic {{ cluster_manager }} role:** Allows the {{ cluster_manager }} to have read-only access to the account to check if the roles and policies that are required by {{ product_title }} are present before creating a cluster. You will need to manually create the required roles, policies, and OIDC provider using the CLI.
    *   **Admin {{ cluster_manager }} role:** Grants the {{ cluster_manager }} additional permissions to create the required roles, policies, and OIDC provider for {{ product_title }}. Using this makes the deployment of a {{ product_title }} cluster quicker since the {{ cluster_manager }} will be able to create the required resources for you.

        To read more about these roles, see the "{{ cluster_manager }} roles and permissions" documentation in the _Additional resources_.

        For the purposes of this tutorial, use the **Admin {{ cluster_manager }} role** for the simplest and quickest approach.
1.  Copy the command to create the Admin {{ cluster_manager }} role from the sidebar or switch to your terminal and enter the following command:
    ```terminal
    $ rosa create ocm-role --mode auto --admin --yes
    ```

    This command creates the {{ cluster_manager }} role and associates it with your Red&#160;Hat account.

    ***Example output***
    ```terminal
    I: Creating ocm role
    I: Creating role using 'arn:aws:iam::000000000000:user/rosa-user'
    I: Created role 'ManagedOpenShift-OCM-Role-12561000' with ARN 'arn:aws:iam::000000000000:role/ManagedOpenShift-OCM-Role-12561000'
    I: Linking OCM role
    I: Successfully linked role-arn 'arn:aws:iam::000000000000:role/ManagedOpenShift-OCM-Role-12561000' with organization account '1MpZfntsZeUdjWHg7XRgP000000'
    ```
1.  Click **Step 2: User role**.