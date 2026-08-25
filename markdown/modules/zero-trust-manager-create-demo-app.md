{%- set _mod_docs_content_type = "PROCEDURE" %}
# Creating the demonstration application {id="zero-trust-manager-create-demo-app_{{ context }}"}

Create the demonstration application to verify that the entire system functions correctly. This process validates the configuration of your application secrets and namespaces. {._abstract}

**Procedure**

1.  Set the application name and namespace by running the following commands:
    ```terminal
    $ export APP_NAME=workload-app
    ```
    ```terminal
    $ export APP_NAMESPACE=demo
    ```
1.  Create the namespace by running the following command:
    ```terminal
    $ oc create namespace $APP_NAMESPACE
    ```
1.  Create the application Secret by running the following command:
    ```terminal
    $ oc apply -f - << EOF
    apiVersion: v1
    kind: Secret
    metadata:
      name: $APP_NAME
      namespace: $APP_NAMESPACE
    stringData:
      AAD_AUTHORITY: https://login.microsoftonline.com/
      AZURE_AUDIENCE: "api://AzureADTokenExchange"
      AZURE_TENANT_ID: "${TENANT_ID}"
      AZURE_CLIENT_ID: "${IDENTITY_CLIENT_ID}"
      BLOB_STORE_ACCOUNT: "${STORAGE_ACCOUNT}"
      BLOB_STORE_CONTAINER: "${STORAGE_CONTAINER}"
    EOF
    ```