{%- set _mod_docs_content_type = "PROCEDURE" %}
# Granting user permissions by using the web console {id="granting-user-permissions-using-the-web-console_{{ context }}"}

You can grant users permissions for the `openshift-monitoring` project or their own projects, by using the {{ product_title }} web console.

**Prerequisites**

*   You have access to the cluster as a user with the `cluster-admin` cluster role.
*   The user account that you are assigning the role to already exists.

**Procedure**

1.  In the {{ product_title }} web console, go to **User Management** → **RoleBindings** → **Create binding**.
1.  In the **Binding Type** section, select the **Namespace Role Binding** type.
1.  In the **Name** field, enter a name for the role binding.
1.  In the **Namespace** field, select the project where you want to grant the access.

    :::important

    The monitoring role or cluster role permissions that you grant to a user by using this procedure apply only to the project that you select in the **Namespace** field.
    
    :::

1.  Select a monitoring role or cluster role from the **Role Name** list.
1.  In the **Subject** section, select **User**.
1.  In the **Subject Name** field, enter the name of the user.
1.  Select **Create** to apply the role binding.