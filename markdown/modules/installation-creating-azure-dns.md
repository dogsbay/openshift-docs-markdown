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
# Creating networking and load balancing components in {{ cp }} {id="installation-creating-azure-dns_{{ context }}"}

To enable cluster communication on Microsoft {{ cp }}, you must deploy networking and load balancing components by using the Azure Resource Manager (ARM) template. {._abstract}

{% if ash %}
Load balancing requires the following DNS records:

*   An `api` DNS record for the API public load balancer in the DNS zone.
*   An `api-int` DNS record for the API internal load balancer in the DNS zone.
{% endif %}


:::note

If you do not use the provided ARM template to create your {{ cp }} infrastructure,
you must review the provided information and manually create the infrastructure.
If your cluster does not initialize correctly, you might have to contact Red Hat
support with your installation logs.

:::


**Prerequisites**

*   Create and configure a VNet and associated subnets in {{ cp }}.

**Procedure**

1.  Copy the template from the **ARM template for the network and load balancers**
section of this topic and save it as `03_infra.json` in your cluster’s installation directory. This
template describes the networking and load balancing objects that your cluster
requires.
1.  Create the deployment by using the `az` CLI:
    {%- if azure %}
    ```terminal
    $ az deployment group create -g ${RESOURCE_GROUP} \
      --template-file "<installation_directory>/03_infra.json" \
      --parameters privateDNSZoneName="${CLUSTER_NAME}.${BASE_DOMAIN}" \
      --parameters baseName="${INFRA_ID}"
    ```

    where:

    `privateDNSZoneName`
    :   Specifies the name of the private DNS zone.

    `baseName`
    :   Specifies the base name to be used in resource names; this is usually the cluster’s infrastructure ID.
{% endif %}
{% if ash %}
        ```terminal
        $ az deployment group create -g ${RESOURCE_GROUP} \
          --template-file "<installation_directory>/03_infra.json" \
          --parameters baseName="${INFRA_ID}"
        ```
    The `baseName` specifies the base name to be used in resource names; this is usually the cluster’s infrastructure ID.
{% endif %}

{% if azure %}
1.  Create an `api` DNS record in the public zone for the API public load
balancer. The `${{ BASE_DOMAIN_RESOURCE_GROUP }}` variable must point to the
resource group where the public DNS zone exists.
{% endif %}

{% if ash %}
1.  Create an `api` DNS record and an `api-int` DNS record. When creating the API DNS records, the `${{ BASE_DOMAIN_RESOURCE_GROUP }}` variable must point to the resource group where the DNS zone exists.
    {% endif %}
    1.  Export the following variable:
        ```terminal
        $ export PUBLIC_IP=`az network public-ip list -g ${RESOURCE_GROUP} --query "[?name=='${INFRA_ID}-master-pip'] | [0].ipAddress" -o tsv`
        ```
{%- if ash %}
    1.  Export the following variable:
        ```terminal
        $ export PRIVATE_IP=`az network lb frontend-ip show -g "$RESOURCE_GROUP" --lb-name "${INFRA_ID}-internal" -n internal-lb-ip --query "privateIpAddress" -o tsv`
        ```
{% endif %}

{% if azure %}
    1.  Create the `api` DNS record in a new public zone:
        {% endif %}
        {% if ash %}
    1.  Create the `api` DNS record in a new DNS zone:
        {%- endif %}
        ```terminal
        $ az network dns record-set a add-record -g ${BASE_DOMAIN_RESOURCE_GROUP} -z ${CLUSTER_NAME}.${BASE_DOMAIN} -n api -a ${PUBLIC_IP} --ttl 60
        ```
{%- if azure %}

        If you are adding the cluster to an existing public zone, you can create the `api` DNS record in it instead:
{% endif %}
{% if ash %}
        If you are adding the cluster to an existing DNS zone, you can create the `api` DNS record in it instead:
{%- endif %}
        ```terminal
        $ az network dns record-set a add-record -g ${BASE_DOMAIN_RESOURCE_GROUP} -z ${BASE_DOMAIN} -n api.${CLUSTER_NAME} -a ${PUBLIC_IP} --ttl 60
        ```

{% if ash %}
    1.  Create the `api-int` DNS record in a new DNS zone:
        ```terminal
        $ az network dns record-set a add-record -g ${BASE_DOMAIN_RESOURCE_GROUP} -z "${CLUSTER_NAME}.${BASE_DOMAIN}" -n api-int -a ${PRIVATE_IP} --ttl 60
        ```

        If you are adding the cluster to an existing DNS zone, you can create the `api-int` DNS
        record in it instead:
        ```terminal
        $ az network dns record-set a add-record -g ${BASE_DOMAIN_RESOURCE_GROUP} -z ${BASE_DOMAIN} -n api-int.${CLUSTER_NAME} -a ${PRIVATE_IP} --ttl 60
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