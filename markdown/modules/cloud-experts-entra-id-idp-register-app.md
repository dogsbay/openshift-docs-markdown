{%- set _mod_docs_content_type = "PROCEDURE" %}
# Register a new application in Entra ID for authentication {id="cloud-experts-entra-id-idp-register-app_{{ context }}"}

Register an application in Entra ID using your cluster OAuth callback URL to generate the credentials for cluster authentication. {._abstract}

**Prerequisites**

*   You have created a set of security groups and assigned users by following [the Microsoft documentation](https://learn.microsoft.com/en-us/azure/active-directory/fundamentals/how-to-manage-groups).

**Procedure**

1.  Create the cluster’s OAuth callback URL by changing the specified variables and running the following command:
    ```terminal
    $ domain=$(rosa describe cluster -c <cluster_name> | grep "DNS" | grep -oE '\S+.openshiftapps.com')
    echo "OAuth callback URL: https://oauth.${domain}/oauth2callback/AAD"
    ```

    The `AAD` directory at the end of the OAuth callback URL must match the OAuth identity provider name that you will set up later in this process.

    :::note

    Remember to save this callback URL; it will be required later in the process.
    
    :::

1.  Create the Entra ID application by logging in to the Azure portal, and select the [App registrations blade](https://portal.azure.com/#blade/Microsoft_AAD_RegisteredApps/ApplicationsListBlade). Then, select **New registration** to create a new application.

    ![Azure Portal - App registrations blade](/_assets/images/azure-portal_app-registrations-blade.png)
1.  Name the application, for example `openshift-auth`.
1.  Select **Web** from the _Redirect URI_ dropdown and enter the value of the OAuth callback URL you retrieved in the previous step.
1.  After providing the required information, click **Register** to create the application.

    ![Azure Portal - Register an application page](/_assets/images/azure-portal_register-an-application-page.png)
1.  Select the **Certificates & secrets** sub-blade and select **New client secret**.

    ![Azure Portal - Certificates and secrets page](/_assets/images/azure-portal_certificates-secrets-page.png)
1.  Complete the requested details and store the generated client secret value. This secret is required later in this process.

    :::important

    After initial setup, you cannot see the client secret. If you did not record the client secret, you must generate a new one.
    
    :::


    ![Azure Portal - Add a Client Secret page](/_assets/images/azure-portal_add-a-client-secret-page.png)
1.  Select the **Overview** sub-blade and note the `Application (client) ID` and `Directory (tenant) ID`. You will need these values in a future step.

    ![Azure Portal - Copy Client Secret page](/_assets/images/azure-portal_copy-client-secret-page.png)