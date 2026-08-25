{% if context == "installing-gcp-user-infra-vpc" %}
{%- set shared_vpc = true -%}
{% endif %}

{%- set _mod_docs_content_type = "PROCEDURE" %}
# Creating a private DNS zone in {{ gcp_short }} {id="installation-creating-gcp-private-dns_{{ context }}"}

You must configure a private DNS zone in {{ gcp_first }} for your {{ product_title }} cluster to use. One way to create this component is to modify the provided Infrastructure Manager template. {._abstract}


:::note

If you do not use the provided template to create your {{ gcp_short }} infrastructure, you must review the provided information and manually create the infrastructure.
If your cluster does not initialize correctly, you might have to contact Red Hat support with your installation logs.

:::


**Prerequisites**

*   Ensure you defined the variables in the _Exporting common variables_ and _Creating load balancers in {{ gcp_short }}_ sections.

**Procedure**

1.  Copy the template from the **Infrastructure Manager template for the private DNS** section of this topic and save it as `02_dns.tf` in a folder called `02_dns` on your computer. This template describes the private DNS objects that your cluster requires.
1.  If you are installing a cluster into a shared VPC, and the host project already has a private DNS zone, skip this step. Create the DNS zone by running the following command:
    ```terminal
    $ gcloud infra-manager deployments apply <dns_zone_deployment_name> \
      --location=${REGION} \
      --input-values=infra_id=${INFRA_ID},project=${PROJECT_NAME},region=${REGION},cluster_domain=${CLUSTER_DOMAIN},cluster_network=${CLUSTER_NETWORK} \
      --project=${PROJECT_NAME} \
      --local-source=./02_dns \
      --service-account=${INSTALL_SERVICE_ACCOUNT}
    ```

    `<dns_zone_deployment_name>` specifies the name of the DNS zone deployment you create.
1.  The templates do not create DNS entries due to limitations of Infrastructure Manager, so you must create them manually:
    1.  Add the internal DNS entries by running the following commands:
        {%- if shared_vpc %}
        ```terminal
        $ if [ -f transaction.yaml ]; then rm transaction.yaml; fi
        ```
        ```terminal
        $ gcloud dns record-sets transaction start --zone ${INFRA_ID}-private-zone --project ${HOST_PROJECT} --account ${HOST_PROJECT_ACCOUNT}
        ```
        ```terminal
        $ gcloud dns record-sets transaction add ${CLUSTER_IP} --name api.${CLUSTER_NAME}.${BASE_DOMAIN}. --ttl 60 --type A --zone ${INFRA_ID}-private-zone --project ${HOST_PROJECT} --account ${HOST_PROJECT_ACCOUNT}
        ```
        ```terminal
        $ gcloud dns record-sets transaction add ${CLUSTER_IP} --name api-int.${CLUSTER_NAME}.${BASE_DOMAIN}. --ttl 60 --type A --zone ${INFRA_ID}-private-zone --project ${HOST_PROJECT} --account ${HOST_PROJECT_ACCOUNT}
        ```
        ```terminal
        $ gcloud dns record-sets transaction execute --zone ${INFRA_ID}-private-zone --project ${HOST_PROJECT} --account ${HOST_PROJECT_ACCOUNT}
        ```
{% endif %}
{% if not shared_vpc %}
        ```terminal
        $ if [ -f transaction.yaml ]; then rm transaction.yaml; fi
        ```
        ```terminal
        $ gcloud dns record-sets transaction start --zone ${INFRA_ID}-private-zone
        ```
        ```terminal
        $ gcloud dns record-sets transaction add ${CLUSTER_IP} --name api.${CLUSTER_NAME}.${BASE_DOMAIN}. --ttl 60 --type A --zone ${INFRA_ID}-private-zone
        ```
        ```terminal
        $ gcloud dns record-sets transaction add ${CLUSTER_IP} --name api-int.${CLUSTER_NAME}.${BASE_DOMAIN}. --ttl 60 --type A --zone ${INFRA_ID}-private-zone
        ```
        ```terminal
        $ gcloud dns record-sets transaction execute --zone ${INFRA_ID}-private-zone
        ```
{%- endif %}
    1.  For an external cluster, also add the external DNS entries by running the following commands:
        {%- if shared_vpc %}
        ```terminal
        $ if [ -f transaction.yaml ]; then rm transaction.yaml; fi
        ```
        ```terminal
        $ gcloud --account=${HOST_PROJECT_ACCOUNT} --project=${HOST_PROJECT} dns record-sets transaction start --zone ${BASE_DOMAIN_ZONE_NAME}
        ```
        ```terminal
        $ gcloud --account=${HOST_PROJECT_ACCOUNT} --project=${HOST_PROJECT} dns record-sets transaction add ${CLUSTER_PUBLIC_IP} --name api.${CLUSTER_NAME}.${BASE_DOMAIN}. --ttl 60 --type A --zone ${BASE_DOMAIN_ZONE_NAME}
        ```
        ```terminal
        $ gcloud --account=${HOST_PROJECT_ACCOUNT} --project=${HOST_PROJECT} dns record-sets transaction execute --zone ${BASE_DOMAIN_ZONE_NAME}
        ```
{% endif %}
{% if not shared_vpc %}
        ```terminal
        $ if [ -f transaction.yaml ]; then rm transaction.yaml; fi
        ```
        ```terminal
        $ gcloud dns record-sets transaction start --zone ${BASE_DOMAIN_ZONE_NAME}
        ```
        ```terminal
        $ gcloud dns record-sets transaction add ${CLUSTER_PUBLIC_IP} --name api.${CLUSTER_NAME}.${BASE_DOMAIN}. --ttl 60 --type A --zone ${BASE_DOMAIN_ZONE_NAME}
        ```
        ```terminal
        $ gcloud dns record-sets transaction execute --zone ${BASE_DOMAIN_ZONE_NAME}
        ```
{% endif %}

**Verification**

{% include "./snippets/gcp-infra-manager-deployment-verify.md" %}

{% if context == "installing-gcp-user-infra-vpc" %}
{%- set shared_vpc = false -%}
{% endif %}