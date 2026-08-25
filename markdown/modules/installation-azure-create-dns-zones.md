{% if context == "installing-azure-stack-hub-user-infra" %}
{%- set ash = true -%}
{% endif %}

{%- set _mod_docs_content_type = "PROCEDURE" %}
# Example for creating DNS zones {id="installation-azure-create-dns-zones_{{ context }}"}

To create the required DNS zones for a user-provisioned cluster, you can add public and private DNS zones that resolve your cluster domain. You should choose the DNS strategy that fits your scenario. {._abstract}

{% if not ash %}
For this example, [Azure’s DNS solution](https://docs.microsoft.com/en-us/azure/dns/dns-overview)
is used, so you will create a new public DNS zone for external (internet)
visibility and a private DNS zone for internal cluster resolution.
{% endif %}
{% if ash %}
For this example, [Azure Stack Hub’s datacenter DNS integration](https://docs.microsoft.com/en-us/azure-stack/operator/azure-stack-integrate-dns?view=azs-2102) is used, so you will create a DNS zone.
{% endif %}

{% if not ash %}

:::note

The public DNS zone is not required to exist in the same resource group as the
cluster deployment and might already exist in your organization for the desired base domain. If that is the case, you can skip creating the public DNS zone; be sure the installation config you generated earlier reflects that scenario.

:::

{% endif %}

{% if ash %}

:::note

The DNS zone is not required to exist in the same resource group as the
cluster deployment and might already exist in your organization for the desired base domain. If that is the case, you can skip creating the DNS zone; be sure the installation config you generated earlier reflects that scenario.

:::

{% endif %}

**Procedure**

{% if not ash %}
1.  Create the new public DNS zone in the resource group exported in the
`BASE_DOMAIN_RESOURCE_GROUP` environment variable:
{% endif %}
{% if ash %}
* Create the new DNS zone in the resource group exported in the
`BASE_DOMAIN_RESOURCE_GROUP` environment variable:
{% endif %}

```terminal
$ az network dns zone create -g ${BASE_DOMAIN_RESOURCE_GROUP} -n ${CLUSTER_NAME}.${BASE_DOMAIN}
```

{% if not ash %}
You can skip this step if you are using a public DNS zone that already exists.
{% endif %}
{% if ash %}
You can skip this step if you are using a DNS zone that already exists.
{% endif %}

{% if not ash %}
1.  Create the private DNS zone in the same resource group as the rest of this
deployment:
    ```terminal
    $ az network private-dns zone create -g ${RESOURCE_GROUP} -n ${CLUSTER_NAME}.${BASE_DOMAIN}
    ```
{% endif %}

{% if context == "installing-azure-user-infra" %}
{%- set ash = "" -%}
{% endif %}