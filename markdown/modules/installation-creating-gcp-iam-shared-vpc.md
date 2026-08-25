{% if context == "installing-gcp-user-infra-vpc" %}
{%- set shared_vpc = true -%}
{% endif %}

{%- set _mod_docs_content_type = "PROCEDURE" %}
# Creating IAM policy bindings in {{ gcp_short }} {id="installation-creating-gcp-iam-shared-vpc_{{ context }}"}

You must create IAM policy bindings in {{ gcp_first }} for your {{ product_title }} cluster to use. {._abstract}

**Prerequisites**

*   You have defined the variables in the _Exporting common variables_ section.

**Procedure**

{% if not shared_vpc %}
1.  Export the variable for the subnet that hosts the compute machines by running the following command:
    ```terminal
    $ export COMPUTE_SUBNET=(`gcloud compute networks subnets describe ${INFRA_ID}-worker-subnet --region=${REGION} --format json | jq -r .selfLink`)
    ```
{% endif %}

{% if shared_vpc %}
1.  Assign the permissions that the installation program requires to the service accounts for the subnets that host the control plane and compute subnets:
    1.  Grant the `networkViewer` role of the project that hosts your shared VPC to the master service account by running the following command:
        ```terminal
        $ gcloud --account=${HOST_PROJECT_ACCOUNT} --project=${HOST_PROJECT} projects add-iam-policy-binding ${HOST_PROJECT} --member "serviceAccount:${MASTER_SERVICE_ACCOUNT}" --role "roles/compute.networkViewer"
        ```
    1.  Grant the `networkUser` role to the master service account for the control plane subnet by running the following command:
        ```terminal
        $ gcloud --account=${HOST_PROJECT_ACCOUNT} --project=${HOST_PROJECT} compute networks subnets add-iam-policy-binding "${HOST_PROJECT_CONTROL_SUBNET}" --member "serviceAccount:${MASTER_SERVICE_ACCOUNT}" --role "roles/compute.networkUser" --region ${REGION}
        ```
    1.  Grant the `networkUser` role to the worker service account for the control plane subnet by running the following command:
        ```terminal
        $ gcloud --account=${HOST_PROJECT_ACCOUNT} --project=${HOST_PROJECT} compute networks subnets add-iam-policy-binding "${HOST_PROJECT_CONTROL_SUBNET}" --member "serviceAccount:${WORKER_SERVICE_ACCOUNT}" --role "roles/compute.networkUser" --region ${REGION}
        ```
    1.  Grant the `networkUser` role to the master service account for the compute subnet by running the following command:
        ```terminal
        $ gcloud --account=${HOST_PROJECT_ACCOUNT} --project=${HOST_PROJECT} compute networks subnets add-iam-policy-binding "${HOST_PROJECT_COMPUTE_SUBNET}" --member "serviceAccount:${MASTER_SERVICE_ACCOUNT}" --role "roles/compute.networkUser" --region ${REGION}
        ```
    1.  Grant the `networkUser` role to the worker service account for the compute subnet by running the following command:
        ```terminal
        $ gcloud --account=${HOST_PROJECT_ACCOUNT} --project=${HOST_PROJECT} compute networks subnets add-iam-policy-binding "${HOST_PROJECT_COMPUTE_SUBNET}" --member "serviceAccount:${WORKER_SERVICE_ACCOUNT}" --role "roles/compute.networkUser" --region ${REGION}
        ```
{% endif %}
1.  The templates do not create the policy bindings due to limitations of Infrastructure Manager, so you must create them manually by running the following commands:
    ```terminal
    $ gcloud projects add-iam-policy-binding ${PROJECT_NAME} --member "serviceAccount:${MASTER_SERVICE_ACCOUNT}" --role "roles/compute.instanceAdmin"
    ```
    ```terminal
    $ gcloud projects add-iam-policy-binding ${PROJECT_NAME} --member "serviceAccount:${MASTER_SERVICE_ACCOUNT}" --role "roles/compute.networkAdmin"
    ```
    ```terminal
    $ gcloud projects add-iam-policy-binding ${PROJECT_NAME} --member "serviceAccount:${MASTER_SERVICE_ACCOUNT}" --role "roles/compute.securityAdmin"
    ```
    ```terminal
    $ gcloud projects add-iam-policy-binding ${PROJECT_NAME} --member "serviceAccount:${MASTER_SERVICE_ACCOUNT}" --role "roles/iam.serviceAccountUser"
    ```
    ```terminal
    $ gcloud projects add-iam-policy-binding ${PROJECT_NAME} --member "serviceAccount:${MASTER_SERVICE_ACCOUNT}" --role "roles/storage.admin"
    ```
    ```terminal
    $ gcloud projects add-iam-policy-binding ${PROJECT_NAME} --member "serviceAccount:${WORKER_SERVICE_ACCOUNT}" --role "roles/compute.viewer"
    ```
    ```terminal
    $ gcloud projects add-iam-policy-binding ${PROJECT_NAME} --member "serviceAccount:${WORKER_SERVICE_ACCOUNT}" --role "roles/storage.admin"
    ```
1.  Create a service account key and store it locally for later use by running the following command:
    ```terminal
    $ gcloud iam service-accounts keys create service-account-key.json --iam-account=${MASTER_SERVICE_ACCOUNT}
    ```

{% if context == "installing-gcp-user-infra-vpc" %}
{%- set shared_vpc = false -%}
{% endif %}