{%- if context == "changing-cloud-credentials-configuration" %}
{%- set postinstall = true -%}
{% endif %}
{% if context == "preparing-manual-creds-update" %}
{%- set update = true -%}
{% endif %}

{%- if context == "configuring-iam-ibm-cloud" %}
{%- set ibm_cloud = true -%}
{% endif %}
{% if context == "preparing-to-install-on-nutanix" %}
{%- set nutanix = true -%}
{% endif %}
{% if context == "preparing-to-install-on-ibm-power-vs" %}
{%- set ibm_power_vs = true -%}
{% endif %}

{%- if context == "installing-aws-customizations" %}
{%- set aws_sts = true -%}
{% endif %}
{% if context == "installing-restricted-networks-aws-installer-provisioned" %}
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
{% if context == "installing-aws-specialized-region" %}
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
{% if not update %}
# Configuring the Cloud Credential Operator utility {id="cco-ccoctl-configuring_{{ context }}"}
{% endif %}
{% if update %}
# Configuring the Cloud Credential Operator utility for a cluster update {id="_configuring_the_cloud_credential_operator_utility_for_a_cluster_update"}
{% endif %}

{%- if nutanix %}
The Cloud Credential Operator (CCO) manages cloud provider credentials as Kubernetes custom resource definitions (CRDs). To install a cluster on Nutanix, you must set the CCO to `manual` mode as part of the installation process.
{% endif %}
{% if ibm_power_vs %}
The Cloud Credential Operator (CCO) manages cloud provider credentials as Kubernetes custom resource definitions (CRDs). To install a cluster on {{ ibm_power_server_name }}, you must set the CCO to `manual` mode as part of the installation process.
{% endif %} {._abstract}

{%- if not (update or postinstall) %}
To create and manage cloud credentials from outside of the cluster when the Cloud Credential Operator (CCO) is operating in manual mode, extract and prepare the CCO utility (`ccoctl`) binary.
{% endif %}

{%- if postinstall %}
To configure an existing cluster to create and manage cloud credentials from outside of the cluster, extract and prepare the Cloud Credential Operator utility (`ccoctl`) binary.
{% endif %}

{%- if update %}
To upgrade a cluster that uses the Cloud Credential Operator (CCO) in manual mode to create and manage cloud credentials from outside of the cluster, extract and prepare the CCO utility (`ccoctl`) binary.
{% endif %}


:::note

The `ccoctl` utility is a Linux binary that must run in a Linux environment.

:::


**Prerequisites**

*   You have access to an {{ product_title }} account with cluster administrator access.
*   You have installed the {{ oc_first }}.

{%- if update %}
*   Your cluster was configured using the `ccoctl` utility to create and manage cloud credentials from outside of the cluster.
*   You have extracted the `CredentialsRequest` custom resources (CRs) from the {{ product_title }} release image and ensured that a namespace that matches the text in the `spec.secretRef.namespace` field exists in the cluster.
{% endif %}

{% include "./snippets/ccoctl-provider-permissions-requirements.md" %}

**Procedure**

1.  Set a variable for the {{ product_title }} release image by running the following command:
    {%- if not (update or postinstall) %}
    ```terminal
    $ RELEASE_IMAGE=$(./openshift-install version | awk '/release image/ {print $3}')
    ```
{% endif %}
{% if update or postinstall %}
    ```
    $ RELEASE_IMAGE=$(oc get clusterversion -o jsonpath={..desired.image})
    ```
{% endif %}
1.  Obtain the CCO container image from the {{ product_title }} release image by running the following command:
    ```terminal
    $ CCO_IMAGE=$(oc adm release info --image-for='cloud-credential-operator' $RELEASE_IMAGE -a ~/.pull-secret)
    ```

    :::note

    Ensure that the architecture of the `$RELEASE_IMAGE` matches the architecture of the environment in which you will use the `ccoctl` tool.
    
    :::

1.  Extract the `ccoctl` binary from the CCO container image within the {{ product_title }} release image by running the following command:
    ```terminal
    $ oc image extract $CCO_IMAGE \
      --file="/usr/bin/ccoctl.<rhel_version>" \
      -a ~/.pull-secret
    ```

    For `<rhel_version>`, specify the value that corresponds to the version of {{ op_system_base_full }} that the host uses.
    If no value is specified, `ccoctl.rhel8` is used by default.
    The following values are valid:
    *   `rhel8`: Specify this value for hosts that use {{ op_system_base }} 8.
    *   `rhel9`: Specify this value for hosts that use {{ op_system_base }} 9.


        :::note

        The `ccoctl` binary is created in the directory from where you executed the command and not in `/usr/bin/`. You must rename the directory or move the `ccoctl.<rhel_version>` binary to `ccoctl`.
        
        :::

1.  Change the permissions to make `ccoctl` executable by running the following command:
    ```terminal
    $ chmod 775 ccoctl
    ```

**Verification**

*   To verify that `ccoctl` is ready to use, display the help file. Use a relative file name when you run the command, for example:
    ```terminal
    $ ./ccoctl
    ```
    ```terminal title="Example output"
    OpenShift credentials provisioning tool

    Usage:
      ccoctl [command]

    Available Commands:
      aws          Manage credentials objects for AWS cloud
      azure        Manage credentials objects for Azure
      gcp          Manage credentials objects for Google cloud
      help         Help about any command
      ibmcloud     Manage credentials objects for IBM Cloud
      nutanix      Manage credentials objects for Nutanix

    Flags:
      -h, --help   help for ccoctl

    Use "ccoctl [command] --help" for more information about a command.
    ```

{%- if context == "changing-cloud-credentials-configuration" %}
{%- set postinstall = false -%}
{% endif %}
{% if context == "preparing-manual-creds-update" %}
{%- set update = false -%}
{% endif %}

{%- if context == "configuring-iam-ibm-cloud" %}
{%- set ibm_cloud = false -%}
{% endif %}
{% if context == "preparing-to-install-on-nutanix" %}
{%- set nutanix = false -%}
{% endif %}
{% if context == "preparing-to-install-on-ibm-power-vs" %}
{%- set ibm_power_vs = false -%}
{% endif %}

{%- if context == "installing-aws-customizations" %}
{%- set aws_sts = false -%}
{% endif %}
{% if context == "installing-restricted-networks-aws-installer-provisioned" %}
{%- set aws_sts = false -%}
{% endif %}
{% if context == "installing-aws-vpc" %}
{%- set aws_sts = false -%}
{% endif %}
{% if context == "installing-aws-specialized-region" %}
{%- set aws_sts = true -%}
{% endif %}
{% if context == "installing-aws-private" %}
{%- set aws_sts = false -%}
{% endif %}
{% if context == "installing-aws-government-region" %}
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