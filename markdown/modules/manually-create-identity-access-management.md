{%- if context == "installing-azure-stack-hub-default" %}
{%- set ash = true -%}
{%- set cco_manual_mode = true -%}
{% endif %}
{% if context == "installing-azure-stack-hub-network-customizations" %}
{%- set ash = true -%}
{%- set cco_manual_mode = true -%}
{% endif %}

{%- if context == "installing-aws-customizations" %}
{%- set aws = true -%}
{%- set cco_multi_mode = true -%}
{% endif %}
{% if context == "installing-aws-network-customizations" %}
{%- set aws = true -%}
{%- set cco_multi_mode = true -%}
{% endif %}
{% if context == "installing-restricted-networks-aws-installer-provisioned" %}
{%- set aws = true -%}
{%- set cco_multi_mode = true -%}
{% endif %}
{% if context == "installing-aws-vpc" %}
{%- set aws = true -%}
{%- set cco_multi_mode = true -%}
{% endif %}
{% if context == "installing-aws-private" %}
{%- set aws = true -%}
{%- set cco_multi_mode = true -%}
{% endif %}
{% if context == "installing-aws-government-region" %}
{%- set aws = true -%}
{%- set cco_multi_mode = true -%}
{% endif %}
{% if context == "installing-aws-secret-region" %}
{%- set aws = true -%}
{%- set cco_multi_mode = true -%}
{% endif %}
{% if context == "installing-aws-specialized-region" %}
{%- set aws = true -%}
{%- set cco_multi_mode = true -%}
{% endif %}
{% if context == "installing-aws-china-region" %}
{%- set aws = true -%}
{%- set cco_multi_mode = true -%}
{% endif %}
{% if context == "installing-aws-outposts-remote-workers" %}
{%- set aws = true -%}
{%- set cco_multi_mode = true -%}
{% endif %}

{%- if context == "installing-gcp-customizations" %}
{%- set google_cloud_platform = true -%}
{%- set cco_multi_mode = true -%}
{% endif %}
{% if context == "installing-gcp-network-customizations" %}
{%- set google_cloud_platform = true -%}
{%- set cco_multi_mode = true -%}
{% endif %}
{% if context == "installing-restricted-networks-gcp-installer-provisioned" %}
{%- set google_cloud_platform = true -%}
{%- set cco_multi_mode = true -%}
{% endif %}
{% if context == "installing-gcp-vpc" %}
{%- set google_cloud_platform = true -%}
{%- set cco_multi_mode = true -%}
{% endif %}
{% if context == "installing-gcp-shared-vpc" %}
{%- set google_cloud_platform = true -%}
{%- set cco_multi_mode = true -%}
{% endif %}
{% if context == "installing-gcp-private" %}
{%- set google_cloud_platform = true -%}
{%- set cco_multi_mode = true -%}
{% endif %}

{%- if context == "installing-azure-customizations" %}
{%- set azure = true -%}
{%- set cco_multi_mode = true -%}
{% endif %}
{% if context == "installing-azure-government-region" %}
{%- set azure = true -%}
{%- set cco_multi_mode = true -%}
{% endif %}
{% if context == "installing-azure-network-customizations" %}
{%- set azure = true -%}
{%- set cco_multi_mode = true -%}
{% endif %}
{% if context == "installing-azure-private" %}
{%- set azure = true -%}
{%- set cco_multi_mode = true -%}
{% endif %}
{% if context == "installing-azure-vnet" %}
{%- set azure = true -%}
{%- set cco_multi_mode = true -%}
{% endif %}
{% if context == "installing-restricted-networks-azure-installer-provisioned" %}
{%- set azure = true -%}
{%- set cco_multi_mode = true -%}
{% endif %}

{%- set _mod_docs_content_type = "PROCEDURE" %}

{%- if cco_multi_mode %}
# Manually creating long-term credentials {id="manually-create-iam_{{ context }}"}

{% endif %}

{%- if cco_manual_mode %}
# Manually manage cloud credentials {id="_manually_manage_cloud_credentials"}

{% endif %}

{%- if cco_multi_mode %}
The Cloud Credential Operator (CCO) can be put into manual mode prior to installation in environments where the cloud identity and access management (IAM) APIs are not reachable, or the administrator prefers not to store an administrator-level credential secret in the cluster `kube-system` namespace.
{% endif %} {._abstract}

{%- if cco_manual_mode %}
The Cloud Credential Operator (CCO) only supports your cloud provider in manual mode. As a result, you must specify the identity and access management (IAM) secrets for your cloud provider.
{% endif %}

**Procedure**

{% if google_cloud_platform %}
1.  Add the following granular permissions to the {{ gcp_short }} account that the installation program uses:
    *   compute.machineTypes.list
    *   compute.regions.list
    *   compute.zones.list
    *   dns.changes.create
    *   dns.changes.get
    *   dns.managedZones.create
    *   dns.managedZones.delete
    *   dns.managedZones.get
    *   dns.managedZones.list
    *   dns.networks.bindPrivateDNSZone
    *   dns.resourceRecordSets.create
    *   dns.resourceRecordSets.delete
    *   dns.resourceRecordSets.list
{% endif %}

{% if cco_multi_mode %}
1.  If you did not set the `credentialsMode` parameter in the `install-config.yaml` configuration file to `Manual`, modify the value as shown:
    ```yaml title="Sample configuration file snippet"
    apiVersion: v1
    baseDomain: example.com
    credentialsMode: Manual
    # ...
    ```
{% endif %}
1.  If you have not previously created installation manifest files, do so by running the following command:
    ```terminal
    $ openshift-install create manifests --dir <installation_directory>
    ```

    where `<installation_directory>` is the directory in which the installation program creates files.
1.  Set a `$RELEASE_IMAGE` variable with the release image from your installation file by running the following command:
    ```terminal
    $ RELEASE_IMAGE=$(./openshift-install version | awk '/release image/ {print $3}')
    ```
1.  Extract the list of `CredentialsRequest` custom resources (CRs) from the {{ product_title }} release image by running the following command:
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
    :   Specifies only the manifests that your specific cluster configuration requires.

    `<path_to_directory_with_installation_configuration>`
    :   Specifies the location of the `install-config.yaml` file.

    `<path_to_directory_for_credentials_requests>`
    :   Specifies the path to the directory where you want to store the `CredentialsRequest` objects. If the specified directory does not exist, this command creates it.
    This command creates a YAML file for each `CredentialsRequest` object.
    ```yaml title="Sample CredentialsRequest object"
    apiVersion: cloudcredential.openshift.io/v1
    kind: CredentialsRequest
    metadata:
      name: <component_credentials_request>
      namespace: openshift-cloud-credential-operator
      ...
    spec:
      providerSpec:
        apiVersion: cloudcredential.openshift.io/v1
{%- if aws %}
        kind: AWSProviderSpec
        statementEntries:
        - effect: Allow
          action:
          - iam:GetUser
          - iam:GetUserPolicy
          - iam:ListAccessKeys
          resource: "*"
{% endif %}
{% if azure or ash %}
        kind: AzureProviderSpec
        roleBindings:
        - role: Contributor
          {% endif %}
          {% if google_cloud_platform %}
        kind: GCPProviderSpec
        predefinedRoles:
        - roles/storage.admin
        - roles/iam.serviceAccountUser
        skipServiceCheck: true
{%- endif %}
      ...
    ```

1.  Create YAML files for secrets in the `openshift-install` manifests directory that you generated previously. The secrets must be stored using the namespace and secret name defined in the `spec.secretRef` for each `CredentialsRequest` object.
    ```yaml title="Sample CredentialsRequest object with secrets"
    apiVersion: cloudcredential.openshift.io/v1
    kind: CredentialsRequest
    metadata:
      name: <component_credentials_request>
      namespace: openshift-cloud-credential-operator
      ...
    spec:
      providerSpec:
        apiVersion: cloudcredential.openshift.io/v1
{%- if aws %}
        kind: AWSProviderSpec
        statementEntries:
        - effect: Allow
          action:
          - s3:CreateBucket
          - s3:DeleteBucket
          resource: "*"
{% endif %}
{% if ash or azure %}
        kind: AzureProviderSpec
        roleBindings:
        - role: Contributor
          {% endif %}
          {% if gcp %}
        kind: GCPProviderSpec
          predefinedRoles:
          - roles/iam.securityReviewer
          - roles/iam.roleViewer
          skipServiceCheck: true
{%- endif %}
          ...
      secretRef:
        name: <component_secret>
        namespace: <component_namespace>
      ...
    ```
    ```yaml title="Sample Secret object"
    apiVersion: v1
    kind: Secret
    metadata:
      name: <component_secret>
      namespace: <component_namespace>
{%- if aws %}
    data:
      aws_access_key_id: <base64_encoded_aws_access_key_id>
      aws_secret_access_key: <base64_encoded_aws_secret_access_key>
{% endif %}
{% if azure or ash %}
    data:
      azure_subscription_id: <base64_encoded_azure_subscription_id>
      azure_client_id: <base64_encoded_azure_client_id>
      azure_client_secret: <base64_encoded_azure_client_secret>
      azure_tenant_id: <base64_encoded_azure_tenant_id>
      azure_resource_prefix: <base64_encoded_azure_resource_prefix>
      azure_resourcegroup: <base64_encoded_azure_resourcegroup>
      azure_region: <base64_encoded_azure_region>
{% endif %}
{% if google_cloud_platform %}
    data:
      service_account.json: <base64_encoded_gcp_service_account_file>
{%- endif %}
    ```

    :::important

    Before upgrading a cluster that uses manually maintained credentials, you must ensure that the CCO is in an upgradeable state.
    
    :::


{%- if context == "installing-azure-stack-hub-default" %}
{%- set ash = false -%}
{%- set cco_manual_mode = false -%}
{% endif %}
{% if context == "installing-azure-stack-hub-network-customizations" %}
{%- set ash = false -%}
{%- set cco_manual_mode = false -%}
{% endif %}

{%- if context == "installing-aws-customizations" %}
{%- set aws = false -%}
{%- set cco_multi_mode = false -%}
{% endif %}
{% if context == "installing-aws-network-customizations" %}
{%- set aws = false -%}
{%- set cco_multi_mode = false -%}
{% endif %}
{% if context == "installing-restricted-networks-aws-installer-provisioned" %}
{%- set aws = false -%}
{%- set cco_multi_mode = false -%}
{% endif %}
{% if context == "installing-aws-vpc" %}
{%- set aws = false -%}
{%- set cco_multi_mode = false -%}
{% endif %}
{% if context == "installing-aws-specialized-region" %}
{%- set aws = false -%}
{%- set cco_multi_mode = false -%}
{% endif %}
{% if context == "installing-aws-private" %}
{%- set aws = false -%}
{%- set cco_multi_mode = false -%}
{% endif %}
{% if context == "installing-aws-government-region" %}
{%- set aws = false -%}
{%- set cco_multi_mode = false -%}
{% endif %}
{% if context == "installing-aws-secret-region" %}
{%- set aws = false -%}
{%- set cco_multi_mode = false -%}
{% endif %}
{% if context == "installing-aws-china-region" %}
{%- set aws = false -%}
{%- set cco_multi_mode = false -%}
{% endif %}
{% if context == "installing-aws-outposts-remote-workers" %}
{%- set aws = false -%}
{%- set cco_multi_mode = false -%}
{% endif %}

{%- if context == "installing-gcp-customizations" %}
{%- set google_cloud_platform = false -%}
{%- set cco_multi_mode = false -%}
{% endif %}
{% if context == "installing-gcp-network-customizations" %}
{%- set google_cloud_platform = false -%}
{%- set cco_multi_mode = false -%}
{% endif %}
{% if context == "installing-restricted-networks-gcp-installer-provisioned" %}
{%- set google_cloud_platform = false -%}
{%- set cco_multi_mode = false -%}
{% endif %}
{% if context == "installing-gcp-vpc" %}
{%- set google_cloud_platform = false -%}
{%- set cco_multi_mode = false -%}
{% endif %}
{% if context == "installing-gcp-shared-vpc" %}
{%- set google_cloud_platform = false -%}
{%- set cco_multi_mode = false -%}
{% endif %}
{% if context == "installing-gcp-private" %}
{%- set google_cloud_platform = false -%}
{%- set cco_multi_mode = false -%}
{% endif %}

{%- if context == "manually-creating-iam-azure" %}
{%- set azure = false -%}
{%- set cco_multi_mode = false -%}
{% endif %}

{%- if context == "installing-azure-customizations" %}
{%- set azure = false -%}
{%- set cco_multi_mode = false -%}
{% endif %}
{% if context == "installing-azure-government-region" %}
{%- set azure = false -%}
{%- set cco_multi_mode = false -%}
{% endif %}
{% if context == "installing-azure-network-customizations" %}
{%- set azure = false -%}
{%- set cco_multi_mode = false -%}
{% endif %}
{% if context == "installing-azure-private" %}
{%- set azure = false -%}
{%- set cco_multi_mode = false -%}
{% endif %}
{% if context == "installing-azure-vnet" %}
{%- set azure = false -%}
{%- set cco_multi_mode = false -%}
{% endif %}
{% if context == "installing-restricted-networks-azure-installer-provisioned" %}
{%- set azure = false -%}
{%- set cco_multi_mode = false -%}
{% endif %}