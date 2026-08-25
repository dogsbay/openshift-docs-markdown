{% if context == "installing-azure-user-infra" %}
{%- set azure = true -%}
{% endif %}
{% if context == "installing-azure-stack-hub-user-infra" %}
{%- set ash = true -%}
{% endif %}
{% if context == "installing-restricted-networks-azure-user-provisioned" %}
{%- set azure = true -%}
{% endif %}

{%- set _mod_docs_content_type = "PROCEDURE" %}
# Creating the Azure resource group {id="installation-azure-create-resource-group-and-identity_{{ context }}"}

{% if azure %}
You must create a Microsoft Azure resource group and an identity for that resource group. Both are used when you install your {{ product_title }} cluster on Azure. {._abstract}

For more information, see "Azure resource groups".
{% endif %}
{% if ash %}
You must create a Microsoft Azure resource group. The resource group is used when you install your {{ product_title }} cluster on Azure Stack Hub. {._abstract}

For more information, see "Azure resource groups".
{% endif %}

**Procedure**

{% if azure %}
1.  Create the resource group in a supported Azure region:
    {% endif %}
    {% if ash %}
    *   Create the resource group in a supported Azure region:
        {%- endif %}
    ```terminal
    $ az group create --name ${RESOURCE_GROUP} --location ${AZURE_REGION}
    ```

{% if azure %}
1.  Create an Azure identity for the resource group:
    ```terminal
    $ az identity create -g ${RESOURCE_GROUP} -n ${INFRA_ID}-identity
    ```

    This is used to grant the required access to Operators in your cluster. For
    example, this allows the Ingress Operator to create a public IP and its load
    balancer. You must assign the Azure identity to a role.
1.  Grant the Contributor role to the Azure identity:
    1.  Export the following variables required by the Azure role assignment:
        ```terminal
        $ export PRINCIPAL_ID=`az identity show -g ${RESOURCE_GROUP} -n ${INFRA_ID}-identity --query principalId --out tsv`
        ```
        ```terminal
        $ export RESOURCE_GROUP_ID=`az group show -g ${RESOURCE_GROUP} --query id --out tsv`
        ```
    1.  Assign the Contributor role to the identity:
        ```terminal
        $ az role assignment create --assignee "${PRINCIPAL_ID}" --role 'Contributor' --scope "${RESOURCE_GROUP_ID}"
        ```

        :::note

        If you want to assign a custom role with all the required permissions to the identity, run the following command:
        ```terminal
        $ az role assignment create --assignee "${PRINCIPAL_ID}" --role <custom_role> \
        --scope "${RESOURCE_GROUP_ID}"
        ```
        Replace `<custom_role>` with the custom role name.
        
        :::

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