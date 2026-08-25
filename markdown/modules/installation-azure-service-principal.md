{% if context == "installing-azure-stack-hub-user-infra" %}
{%- set ash = true -%}
{% endif %}
{% if context == "installing-azure-stack-hub-account" %}
{%- set ash = true -%}
{% endif %}
{% if context == "installing-azure-account" %}
{%- set ipi = true -%}
{% endif %}
{% if context == "installing-azure-user-infra" %}
{%- set upi = true -%}
{% endif %}
{% if context == "installing-restricted-networks-azure-user-provisioned" %}
{%- set upi = true -%}
{% endif %}

{%- set _mod_docs_content_type = "PROCEDURE" %}
# Creating a service principal {id="installation-azure-service-principal_{{ context }}"}

To enable {{ product_title }} to create Azure resources, you must create a service principal that represents the installation program in Azure Resource Manager. {._abstract}

**Prerequisites**

*   Install or update the [Azure CLI](https://docs.microsoft.com/en-us/cli/azure/install-azure-cli-yum?view=azure-cli-latest).
*   Your Azure account has the required roles for the subscription that you use.
{%- if ipi %}
*   If you want to use a custom role, you have created a [custom role](https://learn.microsoft.com/en-us/azure/role-based-access-control/custom-roles) with the required permissions listed in the _Required Azure permissions for installer-provisioned infrastructure_ section.
{% endif %}
{% if upi %}
*   If you want to use a custom role, you have created a [custom role](https://learn.microsoft.com/en-us/azure/role-based-access-control/custom-roles) with the required permissions listed in the _Required Azure permissions for user-provisioned infrastructure_ section.
{% endif %}

**Procedure**

{% if ash %}
1.  Register your environment:
    ```terminal
    $ az cloud register -n AzureStackCloud --endpoint-resource-manager <endpoint>
    ```

    `<endpoint>` is the Azure Resource Manager endpoint, \`https://management.<region>.<fqdn>/`.

    See the [Microsoft documentation](https://docs.microsoft.com/en-us/azure-stack/mdc/azure-stack-version-profiles-azurecli-2-tzl#connect-to-azure-stack-hub) for details.
1.  Set the active environment:
    ```terminal
    $ az cloud set -n AzureStackCloud
    ```
1.  Update your environment configuration to use the specific API version for Azure Stack Hub:
    ```terminal
    $ az cloud update --profile 2019-03-01-hybrid
    ```
{% endif %}
1.  Log in to the Azure CLI:
    ```terminal
    $ az login
    ```
{%- if ash %}

    If you are in a multitenant environment, you must also supply the tenant ID.
{% endif %}
1.  If your Azure account uses subscriptions, ensure that you are using the right
subscription:
    1.  View the list of available accounts and record the `tenantId` value for the
    subscription you want to use for your cluster:
        ```terminal
        $ az account list --refresh
        ```
        ```terminal title="Example output"
        [
          {
{%- if not ash %}
            "cloudName": "AzureCloud",
{% endif %}
{% if ash %}
            "cloudName": AzureStackCloud",
{%- endif %}
            "id": "9bab1460-96d5-40b3-a78e-17b15e978a80",
            "isDefault": true,
            "name": "Subscription Name",
            "state": "Enabled",
            "tenantId": "6057c7e9-b3ae-489d-a54e-de3f6bf6a8ee",
            "user": {
              "name": "you@example.com",
              "type": "user"
            }
          }
        ]
        ```
    1.  View your active account details and confirm that the `tenantId` value matches
    the subscription you want to use:
        ```terminal
        $ az account show
        ```
        ```terminal title="Example output"
        {
{%- if not ash %}
          "environmentName": "AzureCloud",
{% endif %}
{% if ash %}
          "environmentName": AzureStackCloud",
{%- endif %}
          "id": "9bab1460-96d5-40b3-a78e-17b15e978a80",
          "isDefault": true,
          "name": "Subscription Name",
          "state": "Enabled",
          "tenantId": "6057c7e9-b3ae-489d-a54e-de3f6bf6a8ee",
          "user": {
            "name": "you@example.com",
            "type": "user"
          }
        }
        ```

        Ensure that the value of the `tenantId` parameter is the correct subscription ID.
    1.  If you are not using the right subscription, change the active subscription:
        ```terminal
        $ az account set -s <subscription_id>
        ```

        For `<subscription_id>`, specify the subscription ID.
    1.  Verify the subscription ID update:
        ```terminal
        $ az account show
        ```
        ```terminal title="Example output"
        {
{%- if not ash %}
          "environmentName": "AzureCloud",
{% endif %}
{% if ash %}
          "environmentName": AzureStackCloud",
{%- endif %}
          "id": "33212d16-bdf6-45cb-b038-f6565b61edda",
          "isDefault": true,
          "name": "Subscription Name",
          "state": "Enabled",
          "tenantId": "8049c7e9-c3de-762d-a54e-dc3f6be6a7ee",
          "user": {
            "name": "you@example.com",
            "type": "user"
          }
        }
        ```
1.  Record the `tenantId` and `id` parameter values from the output. You need these values during the {{ product_title }} installation.

{% if ash %}
1.  Create the service principal for your account:
    ```terminal
    $ az ad sp create-for-rbac --role Contributor --name <service_principal> \
      --scopes /subscriptions/<subscription_id> \
      --years <years>
    ```

    where:

    `<service_principal>`
    :   Specifies the service principal name.

    `<subscription_id>`
    :   Specifies the subscription ID.

    `<years>`
    :   Specifies the number of years. By default, a service principal expires in one year. By using the `--years` option you can extend the validity of your service principal.
    ```terminal title="Example output"
    Creating 'Contributor' role assignment under scope '/subscriptions/<subscription_id>'
    The output includes credentials that you must protect. Be sure that you do not
    include these credentials in your code or check the credentials into your source
    control. For more information, see https://aka.ms/azadsp-cli
    {
      "appId": "ac461d78-bf4b-4387-ad16-7e32e328aec6",
      "displayName": <service_principal>",
      "password": "00000000-0000-0000-0000-000000000000",
      "tenantId": "8049c7e9-c3de-762d-a54e-dc3f6be6a7ee"
    }
    ```
{% endif %}

{% if not ash %}
1.  Create the service principal for your account:
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
      "appId": "ac461d78-bf4b-4387-ad16-7e32e328aec6",
      "displayName": <service_principal>",
      "password": "00000000-0000-0000-0000-000000000000",
      "tenantId": "8049c7e9-c3de-762d-a54e-dc3f6be6a7ee"
    }
    ```
{% endif %}

1.  Record the values of the `appId` and `password` parameters from the previous
output. You need these values during {{ product_title }} installation.

{% if not ash %}
1.  If you applied the `Contributor` role to your service principal, assign the `User Administrator Access` role by running the following command:
    ```terminal
    $ az role assignment create --role "User Access Administrator" \
      --assignee-object-id $(az ad sp show --id <appId> --query id -o tsv)
    ```

    Specify the `appId` parameter value for your service principal.
{% endif %}

{% if context == "installing-azure-stack-hub-user-infra" %}
{%- set ash = false -%}
{% endif %}
{% if context == "installing-azure-stack-hub-account" %}
{%- set ash = false -%}
{% endif %}
{% if context == "installing-azure-account" %}
{%- set ipi = false -%}
{% endif %}
{% if context == "installing-azure-user-infra" %}
{%- set upi = false -%}
{% endif %}
{% if context == "installing-restricted-networks-azure-user-provisioned" %}
{%- set upi = false -%}
{% endif %}