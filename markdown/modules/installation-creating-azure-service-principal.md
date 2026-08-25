{%- set _mod_docs_content_type = "PROCEDURE" %}
# Creating a service principal {id="installation-creating-azure-service-principal_{{ context }}"}

To provide the identity that the installation program requires on {{ azure_short }}, you can create a service principal. {._abstract}

If you are unable to use a service principal, you can use a managed identity.

**Prerequisites**

*   You have installed or updated the [{{ azure_short }} CLI](https://docs.microsoft.com/en-us/cli/azure/install-azure-cli-yum?view=azure-cli-latest).
*   You have an {{ azure_short }} subscription ID.
*   If you are not assigning the `Contributor` and `User Administrator Access` roles to the service principal, you have created a custom role with the required {{ azure_short }} permissions.

**Procedure**

1.  Create the service principal for your account by running the following command:
    ```terminal
    $ az ad sp create-for-rbac --role <role_name> \
         --name <service_principal> \
         --scopes /subscriptions/<subscription_id>
    ```

    where:

    `<role_name>`
    :   Specifies the role name. You can use the `Contributor` role, or you can specify a custom role which contains the necessary permissions.

    `<service_principal>`
    :   Specifies the service principal name.

    `<subscription_id>`
    :   Specifies the subscription ID.
    ```terminal title="Example output"
    Creating 'Contributor' role assignment under scope '/subscriptions/<subscription_id>'
    The output includes credentials that you must protect. Be sure that you do not
    include these credentials in your code or check the credentials into your source
    control. For more information, see https://aka.ms/azadsp-cli
    {
      "appId": "axxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
      "displayName": <service_principal>",
      "password": "00000000-0000-0000-0000-000000000000",
      "tenantId": "8xxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"
    }
    ```

Record the values of the `appId` and `password` parameters from the output. You require these values when installing the cluster.

1.  If you assigned the `Contributor` role to your service principal, assign the `User Administrator Access` role by running the following command:
    ```terminal
    $ az role assignment create --role "User Access Administrator" \
      --assignee-object-id $(az ad sp show --id <appId> --query id -o tsv) \
      --scope /subscriptions/<subscription_id>
    ```

    where:

    `<appId>`
    :   Specifies the `appId` parameter value for your service principal.

    `<subscription_id>`
    :   Specifies the subscription ID.