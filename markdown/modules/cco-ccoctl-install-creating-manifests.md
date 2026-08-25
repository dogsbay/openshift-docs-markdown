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

{%- set _mod_docs_content_type = "PROCEDURE" %}
# Incorporating the Cloud Credential Operator utility manifests {id="cco-ccoctl-install-creating-manifests_{{ context }}"}

To implement short-term security credentials managed outside the cluster for individual components, you must move the manifest files that the Cloud Credential Operator utility (`ccoctl`) created to the correct directories for the installation program. {._abstract}

**Prerequisites**

*   You have configured an account with the cloud platform that hosts your cluster.
*   You have configured the Cloud Credential Operator utility (`ccoctl`).
*   You have created the cloud provider resources that are required for your cluster with the `ccoctl` utility.

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

1.  If you did not set the `credentialsMode` parameter in the `install-config.yaml` configuration file to `Manual`, modify the value as shown:
    ```yaml title="Sample configuration file snippet"
    apiVersion: v1
    baseDomain: example.com
    credentialsMode: Manual
    # ...
    ```

{% if azure_workload_id %}
1.  If you used the `ccoctl` utility to create a new Azure resource group instead of using an existing resource group, modify the `resourceGroupName` parameter in the `install-config.yaml` as shown:
    ```yaml title="Sample configuration file snippet"
    apiVersion: v1
    baseDomain: example.com
    # ...
    platform:
      azure:
        resourceGroupName: <azure_infra_name>
    # ...
    ```

    The `<azure_infra_name>` value must match the user-defined name for Azure resources that was specified with the `--name` argument of the `ccoctl azure create-all` command.
{% endif %}
1.  If you have not previously created installation manifest files, do so by running the following command:
    ```terminal
    $ openshift-install create manifests --dir <installation_directory>
    ```

    where `<installation_directory>` is the directory in which the installation program creates files.
1.  Copy the manifests that the `ccoctl` utility generated to the `manifests` directory that the installation program created by running the following command:
    ```terminal
    $ cp /<path_to_ccoctl_output_dir>/manifests/* ./manifests/
    ```
1.  Copy the `tls` directory that contains the private key to the installation directory:
    ```terminal
    $ cp -a /<path_to_ccoctl_output_dir>/tls .
    ```

{%- if context == "installing-azure-customizations" %}
{%- set azure_workload_id = "" -%}
{% endif %}
{% if context == "installing-azure-government-region" %}
{%- set azure_workload_id = "" -%}
{% endif %}
{% if context == "installing-azure-private" %}
{%- set azure_workload_id = "" -%}
{% endif %}
{% if context == "installing-azure-vnet" %}
{%- set azure_workload_id = "" -%}
{% endif %}
{% if context == "installing-restricted-networks-azure-installer-provisioned" %}
{%- set azure_workload_id = "" -%}
{% endif %}

{%- if context == "installing-gcp-customizations" %}
{%- set google_cloud_platform = "" -%}
{% endif %}
{% if context == "installing-gcp-network-customizations" %}
{%- set google_cloud_platform = "" -%}
{% endif %}
{% if context == "installing-restricted-networks-gcp-installer-provisioned" %}
{%- set google_cloud_platform = "" -%}
{% endif %}
{% if context == "installing-gcp-vpc" %}
{%- set google_cloud_platform = "" -%}
{% endif %}
{% if context == "installing-gcp-shared-vpc" %}
{%- set google_cloud_platform = "" -%}
{% endif %}
{% if context == "installing-gcp-private" %}
{%- set google_cloud_platform = "" -%}
{% endif %}