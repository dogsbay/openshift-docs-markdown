{%- set _mod_docs_content_type = "PROCEDURE" %}
# Verifying that the application workload can access the content in the Azure Blob Storage {id="zero-trust-manager-verify-blob-access_{{ context }}"}

Verify that your application workload can connect to the Azure Blob Storage. By uploading a test file, you validate the authentication token and ensure that the workload has the correct permissions. {._abstract}

**Prerequisites**

*   An Azure Blob Storage has been created.

**Procedure**

1.  Retrieve a JWT token from the SPIFFE Workload API by running the following command:
    ```terminal
    $ oc rsh -n $APP_NAMESPACE deployment/$APP_NAME
    ```
1.  Create and export an environment variable named `TOKEN` by running the following command:
    ```terminal
    $ export TOKEN=$(/opt/app-root/src/get-spiffe-token.py --audience=$AZURE_AUDIENCE)
    ```
1.  Log in to {{ azure_short }} CLI included within the pod by running the following command:
    ```terminal
    $ az login --service-principal \
      -t ${AZURE_TENANT_ID} \
      -u ${AZURE_CLIENT_ID} \
      --federated-token ${TOKEN}
    ```
1.  Create a new file with the application workload pod and upload the file to the Blob Storage by running the following command:
    ```terminal
    $ echo “Hello from OpenShift” > openshift-spire-federated-identities.txt
    ```
1.  Upload a file to the {{ azure_short }} Blog Storage by running the following command:
    ```terminal
    $ az storage blob upload \
      --account-name ${BLOB_STORE_ACCOUNT} \
      --container-name ${BLOB_STORE_CONTAINER} \
      --name openshift-spire-federated-identities.txt \
      --file openshift-spire-federated-identities.txt \
      --auth-mode login
    ```

**Verification**

*   Confirm the file uploaded successfully by listing the files contained by running the following command:
    ```terminal
    $ az storage blob list \
      --account-name ${BLOB_STORE_ACCOUNT} \
      --container-name ${BLOB_STORE_CONTAINER} \
      --auth-mode login \
      -o table
    ```