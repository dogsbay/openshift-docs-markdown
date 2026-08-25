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
# Creating the control plane machines in {{ cp }} {id="installation-creating-azure-control-plane_{{ context }}"}

To form the control plane for your cluster on Microsoft {{ cp }}, you must deploy control plane machines by using the Azure
Resource Manager (ARM) template. {._abstract}

{% if azure %}

:::note

By default, Microsoft {{ cp }} places control plane machines and compute machines in a pre-set availability zone. You can manually set an availability zone for a compute node or control plane node. To do this, modify a vendor’s Azure Resource Manager (ARM) template by specifying each of your availability zones in the `zones` parameter of the virtual machine resource.

:::

{% endif %}

If you do not use the provided ARM template to create your control plane machines, you must review the provided information and manually create the infrastructure. If your cluster does not initialize correctly, consider contacting Red Hat support with your installation logs.

**Prerequisites**

*   Create the bootstrap machine.

**Procedure**

1.  Copy the template from the **ARM template for control plane machines**
section of this topic and save it as `05_masters.json` in your cluster’s installation directory.
This template describes the control plane machines that your cluster requires.
1.  Export the following variable needed by the control plane machine deployment:
    ```terminal
    $ export MASTER_IGNITION=`cat <installation_directory>/master.ign | base64 | tr -d '\n'`
    ```
1.  Create the deployment by using the `az` CLI:
    {%- if azure %}
    ```terminal
    $ az deployment group create -g ${RESOURCE_GROUP} \
      --template-file "<installation_directory>/05_masters.json" \
      --parameters masterIgnition="${MASTER_IGNITION}" \
      --parameters baseName="${INFRA_ID}" \
      --parameters masterVMSize="Standard_D8s_v3"
    ```

    where:

    `masterIgnition`
    :   Specifies the Ignition content for the control plane nodes.

    `baseName`
    :   Specifies the base name to be used in resource names; this is usually the cluster’s infrastructure ID.

    `masterVMSize`
    :   Specifies the size of the Control Plane VM. Use a VM size compatible with your specified architecture. If this value is not defined, the default value from the template is set. This parameter is optional.
{% endif %}
{% if ash %}
        ```terminal
        $ az deployment group create -g ${RESOURCE_GROUP} \
          --template-file "<installation_directory>/05_masters.json" \
          --parameters masterIgnition="${MASTER_IGNITION}" \
          --parameters baseName="${INFRA_ID}" \
          --parameters diagnosticsStorageAccountName="${CLUSTER_NAME}sa"
        ```
    where:


`masterIgnition`
:   Specifies the Ignition content for the control plane nodes (also known as the master nodes).

`baseName`
:   Specifies the base name to be used in resource names; this is usually the cluster’s infrastructure ID.

`diagnosticsStorageAccountName`
:   Specifies the name of the storage account for your cluster.
{% endif %}

{% if context == "installing-azure-user-infra" %}
{%- set azure = false -%}
{% endif %}
{% if context == "installing-azure-stack-hub-user-infra" %}
{%- set ash = false -%}
{% endif %}
{% if context == "installing-restricted-networks-azure-user-provisioned" %}
{%- set azure = false -%}
{% endif %}