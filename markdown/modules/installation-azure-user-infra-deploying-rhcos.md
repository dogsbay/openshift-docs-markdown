{% if context == "installing-azure-user-infra" %}
{%- set azure = true -%}
{%- set cp = "Azure" -%}
{% endif %}
{% if context == "installing-azure-stack-hub-user-infra" %}
{%- set ash = true -%}
{%- set cp = "Azure Stack Hub" -%}
{% endif %}
{% if context == "installing-restricted-networks-azure-user-provisioned" %}
{%- set azure = true -%}
{%- set cp = "Azure" -%}
{% endif %}

{%- set _mod_docs_content_type = "PROCEDURE" %}
# Deploying the {{ op_system }} cluster image for the {{ cp }} infrastructure {id="installation-azure-user-infra-deploying-rhcos_{{ context }}"}

To provision cluster nodes on Microsoft {{ cp }}, you must use a valid {{ op_system_first }} image for Microsoft {{ cp }} for your
{{ product_title }} nodes. {._abstract}

**Prerequisites**

*   Store the {{ op_system }} virtual hard disk (VHD) cluster image in an Azure storage container.
*   Store the bootstrap Ignition config file in an Azure storage container.

**Procedure**

1.  Copy the template from the **ARM template for image storage** section of
this topic and save it as `02_storage.json` in your cluster’s installation directory. This template
describes the image storage that your cluster requires.
1.  Export the {{ op_system }} VHD blob URL as a variable:
    ```terminal
    $ export VHD_BLOB_URL=`az storage blob url --account-name ${CLUSTER_NAME}sa --account-key ${ACCOUNT_KEY} -c vhd -n "rhcos.vhd" -o tsv`
    ```
1.  Deploy the cluster image:
    ```terminal
    $ az deployment group create -g ${RESOURCE_GROUP} \
      --template-file "<installation_directory>/02_storage.json" \
      --parameters vhdBlobURL="${VHD_BLOB_URL}" \
      --parameters baseName="${INFRA_ID}" \
      --parameters storageAccount="${CLUSTER_NAME}sa" \
      --parameters architecture="<architecture>"
    ```

    where:

    `vhdBlobURL`
    :   Specifies the blob URL of the {{ op_system }} VHD to be used to create master and worker machines.

    `baseName`
    :   Specifies the base name to be used in resource names; this is usually the cluster’s infrastructure ID.

    `storageAccount`
    :   Specifies the name of your Azure storage account.

    `architecture`
    :   Specifies the system architecture. Valid values are `x64` (default) or `Arm64`.

{% if context == "installing-azure-user-infra" %}
{%- set azure = "" -%}
{% endif %}
{% if context == "installing-azure-stack-hub-user-infra" %}
{%- set ash = "" -%}
{% endif %}
{% if context == "installing-restricted-networks-azure-user-provisioned" %}
{%- set azure = "" -%}
{% endif %}