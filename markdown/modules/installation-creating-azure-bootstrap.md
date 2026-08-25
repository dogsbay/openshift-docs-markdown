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
# Creating the bootstrap machine in {{ cp }} {id="installation-creating-azure-bootstrap_{{ context }}"}

To initialize your {{ product_title }} cluster on Microsoft {{ cp }}, you must deploy the bootstrap machine by using the `04_bootstrap.json` ARM template. {._abstract}


:::note

If you do not use the provided ARM template to create your bootstrap machine,
you must review the provided information and manually create the infrastructure.
If your cluster does not initialize correctly, you might have to contact Red Hat
support with your installation logs.

:::


**Prerequisites**

*   Create and configure networking and load balancers in {{ cp }}.
{%- if not ash %}
*   Create the {{ cp }} identity and grant the appropriate roles.
{% endif %}

**Procedure**

1.  Copy the template from the **ARM template for the bootstrap machine** section of
this topic and save it as `04_bootstrap.json` in your cluster’s installation directory. This template
describes the bootstrap machine that your cluster requires.
1.  Export the bootstrap URL variable:
    ```terminal
    $ bootstrap_url_expiry=`date -u -d "10 hours" '+%Y-%m-%dT%H:%MZ'`
    ```
    ```terminal
    $ export BOOTSTRAP_URL=`az storage blob generate-sas -c 'files' -n 'bootstrap.ign' --https-only --full-uri --permissions r --expiry $bootstrap_url_expiry --account-name ${CLUSTER_NAME}sa --account-key ${ACCOUNT_KEY} -o tsv`
    ```
1.  Export the bootstrap ignition variable:
    {%- if azure %}
    ```terminal
    $ export BOOTSTRAP_IGNITION=`jq -rcnM --arg v "3.2.0" --arg url ${BOOTSTRAP_URL} '{ignition:{version:$v,config:{replace:{source:$url}}}}' | base64 | tr -d '\n'`
    ```
{% endif %}
{% if ash %}
    1.  If your environment uses a public certificate authority (CA), run this command:
        ```terminal
        $ export BOOTSTRAP_IGNITION=`jq -rcnM --arg v "3.2.0" --arg url ${BOOTSTRAP_URL} '{ignition:{version:$v,config:{replace:{source:$url}}}}' | base64 | tr -d '\n'`
        ```
    1.  If your environment uses an internal CA, you must add your PEM encoded bundle to the bootstrap ignition stub so that your bootstrap virtual machine can pull the bootstrap ignition from the storage account. Run the following commands, which assume your CA is in a file called `CA.pem`:
        ```terminal
        $ export CA="data:text/plain;charset=utf-8;base64,$(cat CA.pem |base64 |tr -d '\n')"
        ```
        ```terminal
        $ export BOOTSTRAP_IGNITION=`jq -rcnM --arg v "3.2.0" --arg url "$BOOTSTRAP_URL" --arg cert "$CA" '{ignition:{version:$v,security:{tls:{certificateAuthorities:[{source:$cert}]}},config:{replace:{source:$url}}}}' | base64 | tr -d '\n'`
        ```
{% endif %}
1.  Create the deployment by using the `az` CLI:
    {%- if azure %}
    ```terminal
    $ az deployment group create -g ${RESOURCE_GROUP} \
      --template-file "<installation_directory>/04_bootstrap.json" \
      --parameters bootstrapIgnition="${BOOTSTRAP_IGNITION}" \
      --parameters baseName="${INFRA_ID}" \
      --parameter bootstrapVMSize="Standard_D4s_v3"
    ```

    where:

    `bootstrapIgnition`
    :   Specifies the bootstrap Ignition content for the bootstrap cluster.

    `baseName`
    :   Specifies the base name to be used in resource names; this is usually the cluster’s infrastructure ID.

    `bootstrapVMSize`
    :   Specifies the size of the bootstrap VM. Use a VM size compatible with your specified architecture. If this value is not defined, the default value from the template is set. This parameter is optional.
{% endif %}
{% if ash %}
        ```terminal
        $ az deployment group create --verbose -g ${RESOURCE_GROUP} \
          --template-file "<installation_directory>/04_bootstrap.json" \
          --parameters bootstrapIgnition="${BOOTSTRAP_IGNITION}" \
          --parameters baseName="${INFRA_ID}" \
          --parameters diagnosticsStorageAccountName="${CLUSTER_NAME}sa"
        ```
    where:


`bootstrapIgnition`
:   Specifies the bootstrap Ignition content for the bootstrap cluster.

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