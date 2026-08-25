{%- set _mod_docs_content_type = "PROCEDURE" %}
# Creating a default Secret {id="oadp-creating-default-secret_{{ context }}"}

You create a default `Secret` if your backup and snapshot locations use the same credentials or if you do not require a snapshot location. {._abstract}

{% if installing_oadp_aws or installing_oadp_azure or installing_oadp_gcp or installing_oadp_mcg %}
The default name of the `Secret` is `{{ credentials }}`{minja}.
{% endif %}
{% if installing_oadp_ocs %}
The default name of the `Secret` is `{{ credentials }}`{minja}, unless your backup storage provider has a default plugin, such as `aws`, `azure`, or `gcp`. In that case, the default name is specified in the provider-specific OADP installation procedure.
{% endif %}


:::note

The `DataProtectionApplication` custom resource (CR) requires a default `Secret`.  Otherwise, the installation will fail. If the name of the backup location `Secret` is not specified, the default name is used.

If you do not want to use the backup location credentials during the installation, you can create a `Secret` with the default name by using an empty `credentials-velero` file.

:::


**Prerequisites**

*   Your object storage and cloud storage, if any, must use the same credentials.
*   You must configure object storage for Velero.

**Procedure**

1.  Create a `credentials-velero` file for the backup storage location in the appropriate format for your cloud provider.

{% if installing_oadp_aws or installing_oadp_mcg or installing_oadp_ocs %}

    See the following example:
    ```terminal
    [default]
    aws_access_key_id=<AWS_ACCESS_KEY_ID>
    aws_secret_access_key=<AWS_SECRET_ACCESS_KEY>
    ```
{% endif %}
{% if installing_oadp_azure %}

    You can use one of the following two methods to authenticate {{ oadp_short }} with Azure.
    *   Use the service principal with secret-based authentication. See the following example:
        ```terminal
        AZURE_SUBSCRIPTION_ID=<azure_subscription_id>
        AZURE_TENANT_ID=<azure_tenant_id>
        AZURE_CLIENT_ID=<azure_client_id>
        AZURE_CLIENT_SECRET=<azure_client_secret>
        AZURE_RESOURCE_GROUP=<azure_resource_group>
        AZURE_CLOUD_NAME=<azure_cloud_name>
        ```
    *   Use a storage account access key. See the following example:
        ```terminal
        AZURE_STORAGE_ACCOUNT_ACCESS_KEY=<azure_storage_account_access_key>
        AZURE_SUBSCRIPTION_ID=<azure_subscription_id> 
        AZURE_RESOURCE_GROUP=<azure_resource_group>
        AZURE_CLOUD_NAME=<azure_cloud_name> 
        ```
{% endif %}
1.  Create a `Secret` custom resource (CR) with the default name:
    ```terminal {minja}
    $ oc create secret generic {{ credentials }} -n openshift-adp --from-file cloud=credentials-velero
    ```

    The `Secret` is referenced in the `spec.backupLocations.credential` block of the `DataProtectionApplication` CR when you install the Data Protection Application.