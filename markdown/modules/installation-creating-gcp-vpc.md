{%- set _mod_docs_content_type = "PROCEDURE" %}
# Creating a VPC in {{ gcp_short }} {id="installation-creating-gcp-vpc_{{ context }}"}

You must create a VPC in {{ gcp_first }} for your {{ product_title }} cluster to use. You can customize the VPC to meet your requirements. One way to create the VPC is to modify the provided Infrastructure Manager template. {._abstract}


:::note

If you do not use the provided Infrastructure Manager template to create your {{ gcp_short }} infrastructure, you must review the provided information and manually create the infrastructure. If your cluster does not initialize correctly, you might have to contact Red Hat support with your installation logs.

:::


**Prerequisites**

*   You have defined the variables in the _Exporting common variables_ section.

**Procedure**

1.  Copy the template from the **Infrastructure Manager template for the VPC** section of this topic and save it as `01_vpc.tf` in a directory called `01_vpc` on your computer. This template describes the VPC that your cluster requires.
1.  Create a VPC by running the following command:
    ```terminal
    $ gcloud infra-manager deployments apply <vpc_deployment_name> \
      --location=${REGION} \
      --input-values=infra_id=${INFRA_ID},project=${PROJECT_NAME},region=${REGION},master_subnet_cidr=${MASTER_SUBNET_CIDR},worker_subnet_cidr=${WORKER_SUBNET_CIDR} \
      --project=${PROJECT_NAME} \
      --local-source=./01_vpc \
      --service-account=${INSTALL_SERVICE_ACCOUNT}
    ```

    `<vpc_deployment_name>` specifies the name of the VPC deployment you create.
1.  Configure environment variables that will be used to create other cluster infrastructure.
    1.  Configure the `CLUSTER_NETWORK` environment variable by running the following command:
        ```terminal
        $ export CLUSTER_NETWORK=$(gcloud compute networks describe ${INFRA_ID}-network --format json | jq -r .selfLink)
        ```
    1.  Configure the `CONTROL_SUBNET` environment variable by running the following command:
        ```terminal
        $ export CONTROL_SUBNET=$(gcloud compute networks subnets describe ${INFRA_ID}-master-subnet --region=${REGION} --format json | jq -r .selfLink)
        ```
    1.  Configure the `COMPUTE_SUBNET` environment variable by running the following command:
        ```terminal
        $ export COMPUTE_SUBNET=$(gcloud compute networks subnets describe ${INFRA_ID}-worker-subnet --region=${REGION} --format json | jq -r .selfLink)
        ```

**Verification**

{% include "./snippets/gcp-infra-manager-deployment-verify.md" %}