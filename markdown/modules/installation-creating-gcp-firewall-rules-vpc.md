{% if context == "installing-gcp-user-infra-vpc" %}
{%- set shared_vpc = true -%}
{% endif %}

{%- set _mod_docs_content_type = "PROCEDURE" %}
# Creating firewall rules and IAM roles in {{ gcp_short }} {id="installation-creating-gcp-firewall-rules-vpc_{{ context }}"}

You must create firewall rules and IAM roles in {{ gcp_first }} for your {{ product_title }} cluster to use. One way to create these components is to modify the provided Infrastructure Manager template.
If you are installing a cluster into a shared VPC and the host project already has the necessary firewall rules and IAM roles, you can skip creating these resources. {._abstract}


:::note

If you do not use the provided Infrastructure Manager template to create your {{ gcp_short }} infrastructure, you must review the provided information and manually create the infrastructure. If your cluster does not initialize correctly, you might have to contact Red Hat support with your installation logs.

:::


**Prerequisites**

*   Ensure you defined the variables in the _Exporting common variables_ and _Creating load balancers in {{ gcp_short }}_ sections.

**Procedure**

1.  Copy the template from the **Infrastructure Manager template for firewall rules and IAM roles** section of this topic and save it as `03_security.tf` in a folder called `03_security` on your computer. This template describes the security groups that your cluster requires.
1.  Create the firewall rules and IAM roles by running the following command:
    ```terminal
    $ gcloud infra-manager deployments apply <security_deployment_name> \
      --location=${REGION} \
      --project=${PROJECT_NAME} \
      --local-source=./03_security \
      --input-values=infra_id=${INFRA_ID},project=${PROJECT_NAME},region=${REGION},cluster_network=${CLUSTER_NETWORK},network_cidr=${NETWORK_CIDR} \
      --service-account=${INSTALL_SERVICE_ACCOUNT}
    ```

    `<security_deployment_name>` specifies the name of the deployment of firewall rules and IAM roles.
1.  Configure service account variables based on the roles you created by running the following commands:
    ```terminal
    $ export MASTER_SERVICE_ACCOUNT=$(gcloud iam service-accounts list --filter "email~^${INFRA_ID}-m@${PROJECT_NAME}." --format json | jq -r '.[0].email')
    ```
    ```terminal
    $ export WORKER_SERVICE_ACCOUNT=$(gcloud iam service-accounts list --filter "email~^${INFRA_ID}-w@${PROJECT_NAME}." --format json | jq -r '.[0].email')
    ```

**Verification**

{% include "./snippets/gcp-infra-manager-deployment-verify.md" %}