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
# Creating a VNet in {{ cp }} {id="installation-creating-azure-vnet_{{ context }}"}

To provide network connectivity for your cluster on Microsoft {{ cp }}, you can create a virtual network (VNet) by using the Azure Resource Manager (ARM) template. {._abstract}


:::note

If you do not use the provided ARM template to create your {{ cp }} infrastructure,
you must review the provided information and manually create the infrastructure.
If your cluster does not initialize correctly, you might have to contact Red Hat
support with your installation logs.

:::


**Procedure**

1.  Copy the template from the **ARM template for the VNet** section of this topic
and save it as `01_vnet.json` in your cluster’s installation directory. This template describes the
VNet that your cluster requires.
1.  Create the deployment by using the `az` CLI:
    ```terminal
    $ az deployment group create -g ${RESOURCE_GROUP} \
      --template-file "<installation_directory>/01_vnet.json" \
      --parameters baseName="${INFRA_ID}"
    ```

    `baseName` specifies the base name to be used in resource names; this is usually the cluster’s infrastructure ID.

{% if not ash %}
1.  Link the VNet template to the private DNS zone:
    ```terminal
    $ az network private-dns link vnet create -g ${RESOURCE_GROUP} -z ${CLUSTER_NAME}.${BASE_DOMAIN} -n ${INFRA_ID}-network-link -v "${INFRA_ID}-vnet" -e false
    ```
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