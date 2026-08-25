{%- if context == "installing-aws-customizations" %}
{%- set aws_sts = true -%}
{% endif %}
{% if context == "installing-aws-customizations" %}
{%- set aws_sts = true -%}
{% endif %}
{% if context == "installing-restricted-networks-aws-installer-provisioned" %}
{%- set aws_sts = true -%}
{% endif %}
{% if context == "installing-aws-specialized-region" %}
{%- set aws_sts = true -%}
{% endif %}
{% if context == "installing-aws-vpc" %}
{%- set aws_sts = true -%}
{% endif %}
{% if context == "installing-aws-private" %}
{%- set aws_sts = true -%}
{% endif %}
{% if context == "installing-aws-government-region" %}
{%- set aws_sts = true -%}
{% endif %}
{% if context == "installing-aws-secret-region" %}
{%- set aws_sts = true -%}
{% endif %}
{% if context == "installing-aws-china-region" %}
{%- set aws_sts = true -%}
{% endif %}
{% if context == "installing-aws-outposts-remote-workers" %}
{%- set aws_sts = true -%}
{% endif %}

{%- if context == "installing-gcp-customizations" %}
{%- set google_cloud_platform = true -%}
{% endif %}
{% if context == "installing-gcp-network-customizations" %}
{%- set google_cloud_platform = true -%}
{% endif %}
{% if context == "installing-restricted-networks-gcp-installer-provisioned" %}
{%- set google_cloud_platform = true -%}
{% endif %}
{% if context == "installing-gcp-vpc" %}
{%- set google_cloud_platform = true -%}
{% endif %}
{% if context == "installing-gcp-shared-vpc" %}
{%- set google_cloud_platform = true -%}
{% endif %}
{% if context == "installing-gcp-private" %}
{%- set google_cloud_platform = true -%}
{% endif %}

{%- if context == "installing-azure-customizations" %}
{%- set azure_workload_id = true -%}
{% endif %}
{% if context == "installing-azure-government-region" %}
{%- set azure_workload_id = true -%}
{% endif %}
{% if context == "installing-azure-private" %}
{%- set azure_workload_id = true -%}
{% endif %}
{% if context == "installing-azure-vnet" %}
{%- set azure_workload_id = true -%}
{% endif %}
{% if context == "installing-restricted-networks-azure-installer-provisioned" %}
{%- set azure_workload_id = true -%}
{% endif %}

{%- set _mod_docs_content_type = "PROCEDURE" %}
{%- if aws_sts %}
# Creating AWS resources with a single command {id="cco-ccoctl-creating-at-once_{{ context }}"}

If the process the `ccoctl` tool uses to create AWS resources automatically meets the requirements of your organization, you can use the `ccoctl aws create-all` command to automate the creation of AWS resources. {._abstract}

Otherwise, you can create the AWS resources individually. For more information, see "Creating AWS resources individually".

{% endif %}
{% if google_cloud_platform %}
# Creating {{ gcp_short }} resources with the Cloud Credential Operator utility {id="_creating_gcp_short_resources_with_the_cloud_credential_operator_utility"}

You can use the `ccoctl gcp create-all` command to automate the creation of {{ gcp_short }} resources.
{% endif %}
{% if azure_workload_id %}
= Creating Azure resources with the Cloud Credential Operator utility {._abstract}

You can use the `ccoctl azure create-all` command to automate the creation of Azure resources.
{% endif %} {._abstract}


:::note

By default, `ccoctl` creates objects in the directory in which the commands are run. To create the objects in a different directory, use the `--output-dir` flag. This procedure uses `<path_to_ccoctl_output_dir>` to refer to this directory.

:::


**Prerequisites**

You must have:

*   Extracted and prepared the `ccoctl` binary.

{% if azure_workload_id %}
*   Access to your Microsoft Azure account by using the Azure CLI.
{% endif %}

**Procedure**

1.  Set a `$RELEASE_IMAGE` variable with the release image from your installation file by running the following command:
    ```terminal
    $ RELEASE_IMAGE=$(./openshift-install version | awk '/release image/ {print $3}')
    ```
1.  Extract the list of `CredentialsRequest` objects from the {{ product_title }} release image by running the following command:
    ```terminal
    $ oc adm release extract \
      --from=$RELEASE_IMAGE \
      --credentials-requests \
      --included \
      --install-config=<path_to_directory_with_installation_configuration>/install-config.yaml \
      --to=<path_to_directory_for_credentials_requests>
    ```

    where:

    `--included`
    :   Specifies to include only the manifests that your specific cluster configuration requires.

    `<path_to_directory_with_installation_configuration>`
    :   Specifies the location of the `install-config.yaml` file.

    `<path_to_directory_for_credentials_requests>`
    :   Specifies the path to the directory where you want to store the `CredentialsRequest` objects. If the specified directory does not exist, this command creates it.

    :::note

    This command might take a few moments to run.
    
    :::


{% if azure_workload_id %}
1.  To enable the `ccoctl` utility to detect your Azure credentials automatically, log in to the Azure CLI by running the following command:
    ```terminal
    $ az login
    ```
{% endif %}

{% if aws_sts or google_cloud_platform or azure_workload_id %}
1.  Use the `ccoctl` tool to process all `CredentialsRequest` objects by running the following command:
    {% endif %}
    {% if aws_sts %}
    ```terminal
    $ ccoctl aws create-all \
      --name=<name> \
      --region=<aws_region> \
      --credentials-requests-dir=<path_to_credentials_requests_directory> \
      --output-dir=<path_to_ccoctl_output_dir> \
      --create-private-s3-bucket \
      --permissions-boundary-arn=<policy_arn>
    ```

    where:

    `<name>`
    :   Specifies the name used to tag any cloud resources that are created for tracking.

    `<aws_region>`
    :   Specifies the AWS region in which cloud resources will be created.

    `<path_to_credentials_requests_directory>`
    :   Specifies the directory containing the files for the component `CredentialsRequest` objects.

    `<path_to_ccoctl_output_dir>`
    :   Specifies the directory in which you want the `ccoctl` utility to create objects. By default, the utility creates objects in the directory in which the commands are run. This parameter is optional.

    `--create-private-s3-bucket`
    :   Specifies that the OpenID Connect (OIDC) configuration files should be stored in a private S3 bucket that is accessed by the IAM identity provider through a public CloudFront distribution URL. Note that by default, the `ccoctl` utility stores the OIDC configuration files in a public S3 bucket and uses the S3 URL as the public OIDC endpoint. This parameter is optional.

    `<policy_arn>`
    :   Specifies the Amazon Resource Name (ARN) of the {{ aws_short }} IAM policy to use as the permissions boundary for the IAM roles created by the `ccoctl` utility. This parameter is optional.

    :::note

    If your cluster uses Technology Preview features that are enabled by the `TechPreviewNoUpgrade` feature set, you must include the `--enable-tech-preview` parameter.
    
    :::

{% endif %}
{% if google_cloud_platform %}
    ```terminal
    $ ccoctl gcp create-all \
      --name=<name> \
      --region=<gcp_region> \
      --project=<gcp_project_id> \
      --credentials-requests-dir=<path_to_credentials_requests_directory> \
      --key-storage-method=<key_storage_method>
    ```
    where:
    `<name>`:: Specifies the user-defined name for all created {{ gcp_short }} resources used for tracking. If you plan to install the {{ gcp_short }} Filestore Container Storage Interface (CSI) Driver Operator, retain this value.
    `<gcp_region>`:: Specifies the {{ gcp_short }} region in which cloud resources will be created.
    `<gcp_project_id>`:: Specifies the {{ gcp_short }} project ID in which cloud resources will be created.
    `<path_to_credentials_requests_directory>`:: Specifies the directory containing the files of `CredentialsRequest` manifests to create {{ gcp_short }} service accounts.
    `<key_storage_method>`:: Specifies the method for storing OIDC JWK files. Accepted values are `public-bucket` and `pool-jwk-file`. The default value `public-bucket` creates a public GCS bucket to host the OIDC configuration and JWK files. The `pool-jwk-file` value attaches the JWK directly to the workload identity pool provider without creating a public bucket. This parameter is optional.

    :::note

    If your cluster uses Technology Preview features that are enabled by the `TechPreviewNoUpgrade` feature set, you must include the `--enable-tech-preview` parameter.
    
    :::

{% endif %}
{% if azure_workload_id %}
    ```terminal
    $ ccoctl azure create-all \
      --name=<azure_infra_name> \
      --output-dir=<ccoctl_output_dir> \
      --region=<azure_region> \
      --subscription-id=<azure_subscription_id> \
      --credentials-requests-dir=<path_to_credentials_requests_directory> \
      --dnszone-resource-group-name=<azure_dns_zone_resource_group_name> \
      --tenant-id=<azure_tenant_id> \
      --network-resource-group-name <azure_resource_group> \
      --preserve-existing-roles
    ```
    where:
    `<azure_infra_name>`:: Specifies the user-defined name for all created Azure resources used for tracking.
    `<ccoctl_output_dir>`:: Specifies the directory in which you want the `ccoctl` utility to create objects. By default, the utility creates objects in the directory in which the commands are run. This parameter is optional.
    `<azure_region>`:: Specifies the Azure region in which cloud resources will be created.
    `<azure_subscription_id>`:: Specifies the Azure subscription ID to use.
    `<path_to_credentials_requests_directory>`:: Specifies the directory containing the files for the component `CredentialsRequest` objects.
    `<azure_dns_zone_resource_group_name>`:: Specifies the name of the resource group containing the cluster’s base domain Azure DNS zone.
    `<azure_tenant_id>`:: Specifies the Azure tenant ID to use.
    `<azure_resource_group>`:: Specifies the virtual network resource group if it is different from the cluster resource group. This parameter is optional.
    `--preserve-existing-roles`:: Specifies that any custom role assignments you define on managed identities are not removed during {{ product_title }} updates. This parameter is optional.

    :::note

    If your cluster uses Technology Preview features that are enabled by the `TechPreviewNoUpgrade` feature set, you must include the `--enable-tech-preview` parameter.

    To see additional optional parameters and explanations of how to use them, run the `azure create-all --help` command.
    
    :::

{% endif %}

{% if aws_sts or google_cloud_platform or azure_workload_id %}

**Verification**

*   To verify that the {{ product_title }} secrets are created, list the files in the `<path_to_ccoctl_output_dir>/manifests` directory:
    ```terminal
    $ ls <path_to_ccoctl_output_dir>/manifests
    ```
{% endif %}
{% if aws_sts %}
    ```text title="Example output"
    cluster-authentication-02-config.yaml
    openshift-cloud-credential-operator-cloud-credential-operator-iam-ro-creds-credentials.yaml
    openshift-cloud-network-config-controller-cloud-credentials-credentials.yaml
    openshift-cluster-api-capa-manager-bootstrap-credentials-credentials.yaml
    openshift-cluster-csi-drivers-ebs-cloud-credentials-credentials.yaml
    openshift-image-registry-installer-cloud-credentials-credentials.yaml
    openshift-ingress-operator-cloud-credentials-credentials.yaml
    openshift-machine-api-aws-cloud-credentials-credentials.yaml
    ```

    You can verify that the IAM roles are created by querying AWS. For more information, refer to AWS documentation on listing IAM roles.
{% endif %}
{% if google_cloud_platform %}
    ```text title="Example output"
    cluster-authentication-02-config.yaml
    openshift-cloud-controller-manager-gcp-ccm-cloud-credentials-credentials.yaml
    openshift-cloud-credential-operator-cloud-credential-operator-gcp-ro-creds-credentials.yaml
    openshift-cloud-network-config-controller-cloud-credentials-credentials.yaml
    openshift-cluster-api-capg-manager-bootstrap-credentials-credentials.yaml
    openshift-cluster-csi-drivers-gcp-pd-cloud-credentials-credentials.yaml
    openshift-image-registry-installer-cloud-credentials-credentials.yaml
    openshift-ingress-operator-cloud-credentials-credentials.yaml
    openshift-machine-api-gcp-cloud-credentials-credentials.yaml
    ```

    You can verify that the IAM service accounts are created by querying {{ gcp_short }}. For more information, refer to {{ gcp_short }} documentation on listing IAM service accounts.
{% endif %}
{% if azure_workload_id %}
    ```text title="Example output"
    azure-ad-pod-identity-webhook-config.yaml
    cluster-authentication-02-config.yaml
    openshift-cloud-controller-manager-azure-cloud-credentials-credentials.yaml
    openshift-cloud-network-config-controller-cloud-credentials-credentials.yaml
    openshift-cluster-api-capz-manager-bootstrap-credentials-credentials.yaml
    openshift-cluster-csi-drivers-azure-disk-credentials-credentials.yaml
    openshift-cluster-csi-drivers-azure-file-credentials-credentials.yaml
    openshift-image-registry-installer-cloud-credentials-credentials.yaml
    openshift-ingress-operator-cloud-credentials-credentials.yaml
    openshift-machine-api-azure-cloud-credentials-credentials.yaml
    ```

    You can verify that the Microsoft Entra ID service accounts are created by querying Azure. For more information, refer to Azure documentation on listing Entra ID service accounts.
{% endif %}

{%- if context == "installing-aws-customizations" %}
{%- set aws_sts = false -%}
{% endif %}
{% if context == "installing-aws-network-customizations" %}
{%- set aws_sts = false -%}
{% endif %}
{% if context == "installing-restricted-networks-aws-installer-provisioned" %}
{%- set aws_sts = false -%}
{% endif %}
{% if context == "installing-aws-vpc" %}
{%- set aws_sts = false -%}
{% endif %}
{% if context == "installing-aws-private" %}
{%- set aws_sts = false -%}
{% endif %}
{% if context == "installing-aws-government-region" %}
{%- set aws_sts = false -%}
{% endif %}
{% if context == "installing-aws-specialized-region" %}
{%- set aws_sts = false -%}
{% endif %}
{% if context == "installing-aws-secret-region" %}
{%- set aws_sts = false -%}
{% endif %}
{% if context == "installing-aws-china-region" %}
{%- set aws_sts = false -%}
{% endif %}
{% if context == "installing-aws-outposts-remote-workers" %}
{%- set aws_sts = false -%}
{% endif %}

{%- if context == "installing-gcp-customizations" %}
{%- set google_cloud_platform = false -%}
{% endif %}
{% if context == "installing-gcp-network-customizations" %}
{%- set google_cloud_platform = false -%}
{% endif %}
{% if context == "installing-restricted-networks-gcp-installer-provisioned" %}
{%- set google_cloud_platform = false -%}
{% endif %}
{% if context == "installing-gcp-vpc" %}
{%- set google_cloud_platform = false -%}
{% endif %}
{% if context == "installing-gcp-shared-vpc" %}
{%- set google_cloud_platform = false -%}
{% endif %}
{% if context == "installing-gcp-private" %}
{%- set google_cloud_platform = false -%}
{% endif %}

{%- if context == "installing-azure-customizations" %}
{%- set azure_workload_id = false -%}
{% endif %}
{% if context == "installing-azure-government-region" %}
{%- set azure_workload_id = false -%}
{% endif %}
{% if context == "installing-azure-private" %}
{%- set azure_workload_id = false -%}
{% endif %}
{% if context == "installing-azure-vnet" %}
{%- set azure_workload_id = false -%}
{% endif %}
{% if context == "installing-restricted-networks-azure-installer-provisioned" %}
{%- set azure_workload_id = false -%}
{% endif %}