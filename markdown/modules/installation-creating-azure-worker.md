{% if context == "installing-azure-user-infra" %}
{%- set azure = true -%}
{%- set cp = "Azure" -%}
{%- set three_node_cluster = true -%}
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
# Creating additional worker machines in {{ cp }} {id="installation-creating-azure-worker_{{ context }}"}

To add compute capacity on Microsoft {{ cp }}, you can create worker machines in Microsoft {{ cp }} for your cluster to use by launching individual instances discretely or by automated processes outside the cluster, such as auto scaling groups. {._abstract}

You can also take advantage of
the built-in cluster scaling mechanisms and the machine API in {{ product_title }}.

{% if three_node_cluster %}

:::note

If you are installing a three-node cluster, skip this step. A three-node cluster consists of three control plane machines, which also act as compute machines.

:::

{% endif %}

In this example, you manually launch one instance by using the Azure Resource
Manager (ARM) template. Additional instances can be launched by including
additional resources of type `06_workers.json` in the file.

{% if azure %}

:::note

By default, Microsoft {{ cp }} places control plane machines and compute machines in a pre-set availability zone. You can manually set an availability zone for a compute node or control plane node. To do this, modify a vendor’s ARM template by specifying each of your availability zones in the `zones` parameter of the virtual machine resource.

:::

{% endif %}

If you do not use the provided ARM template to create your control plane machines, you must review the provided information and manually create the infrastructure. If your cluster does not initialize correctly, consider contacting Red Hat support with your installation logs.

**Procedure**

1.  Copy the template from the **ARM template for worker machines**
section of this topic and save it as `06_workers.json` in your cluster’s installation directory. This
template describes the worker machines that your cluster requires.
1.  Export the following variable needed by the worker machine deployment:
    ```terminal
    $ export WORKER_IGNITION=`cat <installation_directory>/worker.ign | base64 | tr -d '\n'`
    ```
1.  Create the deployment by using the `az` CLI:
    {%- if azure %}
    ```terminal
    $ az deployment group create -g ${RESOURCE_GROUP} \
      --template-file "<installation_directory>/06_workers.json" \
      --parameters workerIgnition="${WORKER_IGNITION}" \
      --parameters baseName="${INFRA_ID}" \
      --parameters nodeVMSize="Standard_D4s_v3"
    ```

    where:

    `workerIgnition`
    :   Specifies the Ignition content for the worker nodes.

    `baseName`
    :   Specifies the base name to be used in resource names; this is usually the cluster’s infrastructure ID.

    `nodeVMSize`
    :   Specifies the size of the compute node VM. Use a VM size compatible with your specified architecture. If this value is not defined, the default value from the template is set. This parameter is optional.
{% endif %}
{% if ash %}
        ```terminal
        $ az deployment group create -g ${RESOURCE_GROUP} \
          --template-file "<installation_directory>/06_workers.json" \
          --parameters workerIgnition="${WORKER_IGNITION}" \
          --parameters baseName="${INFRA_ID}" \
          --parameters diagnosticsStorageAccountName="${CLUSTER_NAME}sa"
        ```
    where:


`workerIgnition`
:   Specifies the Ignition content for the worker nodes.

`baseName`
:   Specifies the base name to be used in resource names; this is usually the cluster’s infrastructure ID.

`diagnosticsStorageAccountName`
:   Specifies the name of the storage account for your cluster.
{% endif %}

{% if context == "installing-azure-user-infra" %}
{%- set azure = false -%}
{%- set three_node_cluster = false -%}
{% endif %}
{% if context == "installing-azure-stack-hub-user-infra" %}
{%- set ash = false -%}
{% endif %}
{% if context == "installing-restricted-networks-azure-user-provisioned" %}
{%- set azure = false -%}
{% endif %}