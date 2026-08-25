{%- set _mod_docs_content_type = "PROCEDURE" %}
# Recording the subscription and tenant IDs {id="installation-azure-subscription-tenant-id_{{ context }}"}

To record the subscription and tenant IDs that the installation program requires for your {{ azure_short }} account, you can use the {{ azure_short }} CLI. {._abstract}

**Prerequisites**

*   You have installed or updated the [{{ azure_short }} CLI](https://docs.microsoft.com/en-us/cli/azure/install-azure-cli-yum?view=azure-cli-latest).

**Procedure**

1.  Log in to the {{ azure_short }} CLI by running the following command:
    ```terminal
    $ az login
    ```
1.  Ensure that you are using the right subscription:
    1.  View a list of available subscriptions by running the following command:
        ```terminal
        $ az account list --refresh
        ```
        ```terminal title="Example output"
        [
          {
            "cloudName": "AzureCloud",
            "id": "8xxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
            "isDefault": true,
            "name": "Subscription Name 1",
            "state": "Enabled",
            "tenantId": "6xxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
            "user": {
              "name": "you@example.com",
              "type": "user"
            }
          },
          {
            "cloudName": "AzureCloud",
            "id": "9xxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
            "isDefault": false,
            "name": "Subscription Name 2",
            "state": "Enabled",
            "tenantId": "7xxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
            "user": {
              "name": "you2@example.com",
              "type": "user"
            }
          }
        ]
        ```
    1.  View the details of the active account, and confirm that this is the subscription you want to use, by running the following command:
        ```terminal
        $ az account show
        ```
        ```terminal title="Example output"
        {
          "environmentName": "AzureCloud",
          "id": "8xxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
          "isDefault": true,
          "name": "Subscription Name 1",
          "state": "Enabled",
          "tenantId": "6xxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
          "user": {
            "name": "you@example.com",
            "type": "user"
          }
        }
        ```
1.  If you are not using the right subscription:
    1.  Change the active subscription by running the following command:
        ```terminal
        $ az account set -s <subscription_id>
        ```
    1.  Verify that you are using the subscription you need by running the following command:
        ```terminal
        $ az account show
        ```
        ```terminal title="Example output"
        {
          "environmentName": "AzureCloud",
          "id": "9xxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
          "isDefault": true,
          "name": "Subscription Name 2",
          "state": "Enabled",
          "tenantId": "7xxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
          "user": {
            "name": "you2@example.com",
            "type": "user"
          }
        }
        ```
1.  Record the `id` and `tenantId` parameter values from the output. You require these values to install an {{ product_title }} cluster.