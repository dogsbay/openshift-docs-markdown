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
# Wait for bootstrap completion and remove bootstrap resources in {{ cp }} {id="installation-azure-user-infra-wait-for-bootstrap_{{ context }}"}

To complete cluster initialization on Microsoft {{ cp }}, you can wait for the bootstrap process to finish and then delete bootstrap resources. {._abstract}

**Prerequisites**

*   Create the control plane machines.

**Procedure**

1.  Change to the directory that contains the installation program and run the
following command:
    ```terminal
    $ ./openshift-install wait-for bootstrap-complete --dir <installation_directory> \
        --log-level info
    ```

    where:

    `<installation_directory>`
    :   Specifies the path to the directory that you stored the installation files in.

    `--log-level info`
    :   Specifies the installation details. Specify `warn`, `debug`, or `error` instead of `info` to view different installation details.
    If the command exits without a `FATAL` warning, your production control plane
    has initialized.

1.  Delete the bootstrap resources:
    ```terminal
    $ az network nsg rule delete -g ${RESOURCE_GROUP} --nsg-name ${INFRA_ID}-nsg --name bootstrap_ssh_in
    ```
    ```terminal
    $ az vm stop -g ${RESOURCE_GROUP} --name ${INFRA_ID}-bootstrap
    ```
    ```terminal
    $ az vm deallocate -g ${RESOURCE_GROUP} --name ${INFRA_ID}-bootstrap
    ```
    ```terminal
    $ az vm delete -g ${RESOURCE_GROUP} --name ${INFRA_ID}-bootstrap --yes
    ```
    ```terminal
    $ az disk delete -g ${RESOURCE_GROUP} --name ${INFRA_ID}-bootstrap_OSDisk --no-wait --yes
    ```
    ```terminal
    $ az network nic delete -g ${RESOURCE_GROUP} --name ${INFRA_ID}-bootstrap-nic --no-wait
    ```
    ```terminal
    $ az storage blob delete --account-key ${ACCOUNT_KEY} --account-name ${CLUSTER_NAME}sa --container-name files --name bootstrap.ign
    ```
    ```terminal
    $ az network public-ip delete -g ${RESOURCE_GROUP} --name ${INFRA_ID}-bootstrap-ssh-pip
    ```

    :::note

    If you do not delete the bootstrap server, installation may not succeed due to API traffic being routed to the bootstrap server.
    
    :::


{% if context == "installing-azure-user-infra" %}
{%- set azure = false -%}
{% endif %}
{% if context == "installing-azure-stack-hub-user-infra" %}
{%- set ash = false -%}
{% endif %}
{% if context == "installing-restricted-networks-azure-user-provisioned" %}
{%- set azure = false -%}
{% endif %}