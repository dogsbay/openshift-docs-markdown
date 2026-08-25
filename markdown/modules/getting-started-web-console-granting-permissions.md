{%- set _mod_docs_content_type = "PROCEDURE" %}
# Granting view permissions {id="getting-started-web-console-granting-permissions_{{ context }}"}

Configure the necessary permissions for the application to access the required cluster resources. {._abstract}

{{ product_title }} automatically creates several service accounts in every project. The `default` service account takes responsibility for running the pods. {{ product_title }} uses and injects this service account into every pod that launches.

By default, the `default` service account has limited permissions to interact with the OpenShift API.

As a requirement of the application, you must assign the `view` role to the `default` service account to allow it to communicate with the OpenShift API to learn about pods, services, and resources within the project.

**Prerequisites**

*   You have `cluster-admin` or project-level `admin` privileges.

**Procedure**

1.  Navigate to **User Management** -> **RoleBindings**.
1.  Click **Create binding**.
1.  In the **Name** field, enter `sa-user-account`.
1.  In the **Namespace** field, search for and select `user-getting-started`.

    :::important

    If you are using a different project, select the name of your project.
    
    :::

1.  In the **Role name** field, search for and select `view`.
1.  Under **Subject**, select `ServiceAccount`.
1.  In the **Subject namespace** field, search for and select `user-getting-started`.

    :::important

    If you are using a different project, select the name of your project.
    
    :::

1.  In the **Subject name** field, enter `default`.
1.  Click **Create**.