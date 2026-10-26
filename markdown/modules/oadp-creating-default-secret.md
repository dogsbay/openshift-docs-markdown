{%- set _mod_docs_content_type = "PROCEDURE" %}
# Create a default Secret {id="oadp-creating-default-secret_{{ context }}"}

You create a default `Secret` if your backup and snapshot locations use the same credentials or if you do not require a snapshot location. {._abstract}

The default name of the `Secret` depends on your storage provider:

*   AWS, Multicloud Object Gateway (MCG), {{ rh_storage_first }} (ODF), {{ ibm_cloud_title }}, or KubeVirt: `cloud-credentials`
*   Azure: `cloud-credentials-azure`
*   GCP: `cloud-credentials-gcp`


:::note

The `DataProtectionApplication` custom resource (CR) requires a default `Secret`.  Otherwise, the installation will fail. If the name of the backup location `Secret` is not specified, the default name is used.

If you do not want to use the backup location credentials during the installation, you can create a `Secret` with the default name by using an empty `credentials-velero` file.

:::


**Prerequisites**

*   Your object storage and cloud storage, if any, must use the same credentials.
*   You must configure object storage for Velero.

**Procedure**

1.  Create a `credentials-velero` file for the backup storage location in the appropriate format for your cloud provider.


    The format depends on your cloud provider. For AWS, MCG, or {{ rh_storage }}, use the following format:
    ```terminal
    [default]
    aws_access_key_id=<AWS_ACCESS_KEY_ID>
    aws_secret_access_key=<AWS_SECRET_ACCESS_KEY>
    ```

    For Azure, you can use one of the following two methods to authenticate {{ oadp_short }}:
    *   Use the service principal with secret-based authentication:
        ```terminal
        AZURE_SUBSCRIPTION_ID=<azure_subscription_id>
        AZURE_TENANT_ID=<azure_tenant_id>
        AZURE_CLIENT_ID=<azure_client_id>
        AZURE_CLIENT_SECRET=<azure_client_secret>
        AZURE_RESOURCE_GROUP=<azure_resource_group>
        AZURE_CLOUD_NAME=<azure_cloud_name>
        ```
    *   Use a storage account access key:
        ```terminal
        AZURE_STORAGE_ACCOUNT_ACCESS_KEY=<azure_storage_account_access_key>
        AZURE_SUBSCRIPTION_ID=<azure_subscription_id>
        AZURE_RESOURCE_GROUP=<azure_resource_group>
        AZURE_CLOUD_NAME=<azure_cloud_name>
        ```
1.  Create a `Secret` custom resource (CR) with the default name for your provider:
    ```terminal
    $ oc create secret generic <default_secret_name> -n openshift-adp --from-file cloud=credentials-velero
    ```

    Replace `<default_secret_name>` with the default `Secret` name for your storage provider: `cloud-credentials` for AWS, MCG, {{ rh_storage }}, {{ ibm_cloud_title }}, or KubeVirt; `cloud-credentials-azure` for Azure; or `cloud-credentials-gcp` for GCP.

    The `Secret` is referenced in the `spec.backupLocations.credential` block of the `DataProtectionApplication` CR when you install the Data Protection Application.