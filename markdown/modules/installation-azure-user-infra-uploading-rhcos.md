{% if context == "installing-azure-user-infra" %}
{%- set azure = true -%}
{% endif %}
{% if context == "installing-azure-stack-hub-user-infra" %}
{%- set ash = true -%}
{% endif %}
{% if context == "installing-azure-stack-hub-default" %}
{%- set ash_ipi = true -%}
{% endif %}
{% if context == "installing-azure-stack-hub-network-customizations" %}
{%- set ash_ipi = true -%}
{% endif %}
{% if context == "installing-restricted-networks-azure-user-provisioned" %}
{%- set azure = true -%}
{% endif %}

{%- set _mod_docs_content_type = "PROCEDURE" %}
{% if not ash_ipi %}
# Uploading the {{ op_system }} cluster image and bootstrap Ignition config file {id="installation-azure-user-infra-uploading-rhcos_{{ context }}"}

To make the {{ op_system }} cluster image and bootstrap Ignition config accessible during deployment, you can upload them to an Azure storage container. {._abstract}

{% endif %}
{% if ash_ipi %}
# Uploading the {{ op_system }} cluster image {id="_uploading_the_op_system_cluster_image"}

To make the {{ op_system }} cluster image accessible during deployment, you can download and upload the image to your Azure Stack Hub environment. {._abstract}

{% endif %}

{% if not ash_ipi %}
The Azure client does not support deployments based on files existing locally. You
must copy and store the {{ op_system }} virtual hard disk (VHD) cluster image and bootstrap Ignition config file in a storage container so they are accessible during deployment.
{% endif %}

{% if ash_ipi %}
You must download the {{ op_system }} virtual hard disk (VHD) cluster image and upload it to your Azure Stack Hub environment so that it is accessible during deployment.
{% endif %}

**Prerequisites**

*   Generate the Ignition config files for your cluster.

**Procedure**

{% if not ash_ipi %}
1.  Create an Azure storage account to store the VHD cluster image:
    ```terminal
    $ az storage account create -g ${RESOURCE_GROUP} --location ${AZURE_REGION} --name ${CLUSTER_NAME}sa --kind Storage --sku Standard_LRS
    ```

    :::warning

    The Azure storage account name must be between 3 and 24 characters in length and
    use numbers and lower-case letters only. If your `CLUSTER_NAME` variable does
    not follow these restrictions, you must manually define the Azure storage
    account name. For more information on Azure storage account name restrictions,
    see [Resolve errors for storage account names](https://docs.microsoft.com/en-us/azure/azure-resource-manager/templates/error-storage-account-name)
    in the Azure documentation.
    
    :::

1.  Export the storage account key as an environment variable:
    ```terminal
    $ export ACCOUNT_KEY=`az storage account keys list -g ${RESOURCE_GROUP} --account-name ${CLUSTER_NAME}sa --query "[0].value" -o tsv`
    ```
1.  Export the URL of the {{ op_system }} VHD to an environment variable:
{% if azure %}
    ```terminal
    $ export VHD_URL=`openshift-install coreos print-stream-json | jq -r '.architectures.<architecture>."rhel-coreos-extensions"."azure-disk".url'`
    ```

    where:

    `<architecture>`
    :   Specifies the architecture, valid values include `x86_64` or `aarch64`.
{% endif %}
{% if ash %}
    ```terminal
    $ export COMPRESSED_VHD_URL=$(openshift-install coreos print-stream-json | jq -r '.architectures.x86_64.artifacts.azurestack.formats."vhd.gz".disk.location')
    ```
{% endif %}

    :::important

    The {{ op_system }} images might not change with every release of {{ product_title }}.
    You must specify an image with the highest version that is
    less than or equal to the {{ product_title }} version that you install. Use the image version
    that matches your {{ product_title }} version if it is available.
    
    :::

1.  Create the storage container for the VHD:
    ```terminal
    $ az storage container create --name vhd --account-name ${CLUSTER_NAME}sa --account-key ${ACCOUNT_KEY}
    ```
{% if ash %}
1.  Download the compressed {{ op_system }} VHD file locally:
    ```terminal
    $ curl -O -L ${COMPRESSED_VHD_URL}
    ```
1.  Decompress the VHD file.

    :::note

    The decompressed VHD file is approximately 16 GB, so be sure that your host system has 16 GB of free space available. You can delete the VHD file after you upload it.
    
    :::

{% endif %}
1.  Copy the local VHD to a blob:
{% if azure %}
    ```terminal
    $ az storage blob copy start --account-name ${CLUSTER_NAME}sa --account-key ${ACCOUNT_KEY} --destination-blob "rhcos.vhd" --destination-container vhd --source-uri "${VHD_URL}"
    ```
{% endif %}
{% if ash %}
    ```terminal
    $ az storage blob upload --account-name ${CLUSTER_NAME}sa --account-key ${ACCOUNT_KEY} -c vhd -n "rhcos.vhd" -f rhcos-<rhcos_version>-azurestack.x86_64.vhd
    ```
{% endif %}
1.  Create a blob storage container and upload the generated `bootstrap.ign` file:
    ```terminal
    $ az storage container create --name files --account-name ${CLUSTER_NAME}sa --account-key ${ACCOUNT_KEY}
    ```
    ```terminal
    $ az storage blob upload --account-name ${CLUSTER_NAME}sa --account-key ${ACCOUNT_KEY} -c "files" -f "<installation_directory>/bootstrap.ign" -n "bootstrap.ign"
    ```
{% endif %}

{% if ash_ipi %}
1.  Obtain the {{ op_system }} VHD cluster image:
    1.  Export the URL of the {{ op_system }} VHD to an environment variable.
        ```terminal
        $ export COMPRESSED_VHD_URL=$(openshift-install coreos print-stream-json | jq -r '.architectures.x86_64.artifacts.azurestack.formats."vhd.gz".disk.location')
        ```
    1.  Download the compressed {{ op_system }} VHD file locally.
        ```terminal
        $ curl -O -L ${COMPRESSED_VHD_URL}
        ```
1.  Decompress the VHD file.

    :::note

    The decompressed VHD file is approximately 16 GB, so be sure that your host system has 16 GB of free space available. The VHD file can be deleted once you have uploaded it.
    
    :::

1.  Upload the local VHD to the Azure Stack Hub environment, making sure that the blob is publicly available. For example, you can upload the VHD to a blob using the `az` cli or the web portal.
{% endif %}

{% if context == "installing-azure-user-infra" %}
{%- set azure = "" -%}
{% endif %}
{% if context == "installing-azure-stack-hub-user-infra" %}
{%- set ash = "" -%}
{% endif %}
{% if context == "installing-azure-stack-hub-default" %}
{%- set ash_ipi = "" -%}
{% endif %}
{% if context == "installing-azure-stack-hub-network-customizations" %}
{%- set ash_ipi = "" -%}
{% endif %}
{% if context == "installing-restricted-networks-azure-user-provisioned" %}
{%- set azure = "" -%}
{% endif %}