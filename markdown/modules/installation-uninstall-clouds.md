{% if context == "uninstalling-cluster-aws" %}
{%- set aws = true -%}
{% endif %}
{% if context == "uninstalling-cluster-gcp" %}
{%- set gcp = true -%}
{% endif %}
{% if context == "uninstalling-cluster-ibm-cloud" %}
{%- set ibm_cloud = true -%}
{% endif %}
{% if context == "uninstalling-cluster-ibm-power-vs" %}
{%- set ibm_power_vs = true -%}
{% endif %}
{% if context == "uninstalling-cluster-openstack" %}
{%- set osp = true -%}
{% endif %}

{%- set _mod_docs_content_type = "PROCEDURE" %}
# Removing a cluster that uses installer-provisioned infrastructure {id="installation-uninstall-clouds_{{ context }}"}

To remove an {{ product_title }} cluster that uses installer-provisioned infrastructure, you can use the installation program and the installation files from your original deployment to uninstall the cluster from your cloud platform. {._abstract}

{% if aws %}

:::note

If you deployed your cluster to the AWS C2S Secret Region, the installation program does not support destroying the cluster; you must manually remove the cluster resources.

:::

{% endif %}


:::note

After uninstallation, check your cloud provider for any resources that were not removed properly, especially with user-provisioned infrastructure clusters. Some resources might exist because either the installation program did not create the resource or could not access the resource.
{%- if gcp %}
For example, some {{ gcp_full }} resources require [IAM permissions](https://cloud.google.com/iam/docs/overview#concepts_related_to_access_management) in shared VPC host projects, or there might be unused [health checks that must be deleted](https://cloud.google.com/sdk/gcloud/reference/compute/health-checks/delete).
{%- endif %}

:::


**Prerequisites**

*   You have a copy of the installation program that you used to deploy the cluster.
*   You have the files that the installation program generated when you created your
cluster.
{%- if osp %}
*   You installed the `core-installer` tool by entering the `sudo dnf install coreos-installer` command in your CLI.
{% endif %}
{% if ibm_cloud or ibm_power_vs %}
*   You have configured the `ccoctl` binary.
*   You have installed the {{ ibm_cloud_name }} CLI and installed or updated the VPC infrastructure service plugin. For more information see "Prerequisites" in the [{{ ibm_cloud_name }} CLI documentation](https://cloud.ibm.com/docs/vpc?topic=vpc-infrastructure-cli-plugin-vpc-reference&interface=ui#cli-ref-prereqs).
{% endif %}

**Procedure**

{%- if ibm_cloud or ibm_power_vs %}
1.  If the following conditions are met, this step is required:
    *   The installer created a resource group as part of the installation process.
    *   You or one of your applications created persistent volume claims (PVCs) after the cluster was deployed.

        In which case, the PVCs are not removed when uninstalling the cluster, which might prevent the resource group from being successfully removed. To prevent a failure:
        1.  Log in to the {{ ibm_cloud_name }} using the CLI.
        1.  To list the PVCs, run the following command:
            ```terminal
            $ ibmcloud is volumes --resource-group-name <infrastructure_id>
            ```

            For more information about listing volumes, see the [{{ ibm_cloud_name }} CLI documentation](https://cloud.ibm.com/docs/vpc?topic=vpc-infrastructure-cli-plugin-vpc-reference&interface=ui#volume-cli).
        1.  To delete the PVCs, run the following command:
            ```terminal
            $ ibmcloud is volume-delete --force <volume_id>
            ```

            For more information about deleting volumes, see the [{{ ibm_cloud_name }} CLI documentation](https://cloud.ibm.com/docs/vpc?topic=vpc-infrastructure-cli-plugin-vpc-reference&interface=ui#volume-delete).
1.  Export the API key that was created as part of the installation process.
    {% endif %}
    {% if ibm_cloud %}
    ```terminal
    $ export IC_API_KEY=<api_key>
    ```
{% endif %}
{% if ibm_power_vs %}
    ```terminal
    $ export IBMCLOUD_API_KEY=<api_key>
    ```
{% endif %}
{% if ibm_cloud or ibm_power_vs %}

    :::note

    You must set the variable name exactly as specified. The installation program expects the variable name to be present to remove the service IDs that were created when the cluster was installed.
    
    :::

{% endif %}
1.  From the directory that has the installation program on the computer that you used to install the cluster, run the following command:
    ```terminal
    $ ./openshift-install destroy cluster \
    --dir <installation_directory> --log-level info
    ```

    where:

    `<installation_directory>`
    :   Specify the path to the directory that you stored the installation files in.

    `--log-level info`
    :   To view different details, specify `warn`, `debug`, or `error` instead of `info`.
{%- if not ibm_power_vs %}

    :::note

    You must specify the directory that includes the cluster definition files for your cluster. The installation program requires the `metadata.json` file in this directory to delete the cluster.
    
    :::

{% endif %}
{% if ibm_power_vs %}

    :::note

    *   You must specify the directory that has the cluster definition files for your cluster. The installation program requires the `metadata.json` file in this directory to delete the cluster.
    *   You might have to run the `openshift-install destroy` command up to three times to ensure a proper cleanup.
    
    :::

{% endif %}

{% if ibm_cloud or ibm_power_vs %}
1.  Remove the manual CCO credentials that were created for the cluster:
    ```terminal
    $ ccoctl ibmcloud delete-service-id \
        --credentials-requests-dir <path_to_credential_requests_directory> \
        --name <cluster_name>
    ```

    :::note

    If your cluster uses Technology Preview features that are enabled by the `TechPreviewNoUpgrade` feature set, you must include the `--enable-tech-preview` parameter.
    
    :::

{% endif %}

{% if osp %}
1.  Optional: Use the `coreos-installer` tool to add the `coreos.inst.wipe=yes` flag to the Preboot Execution Environment (PXE) boot configuration. This operation wipes the disk on your system so that if you create a new cluster, you have a clean installation environment. For more detailed instructions, see [How to wipe OpenStack disks in {{ product_title }} 4 reinstallation](https://access.redhat.com/solutions/7128657) (Knowledgebase article).
{% endif %}
1.  Optional: Delete the `<installation_directory>` directory and the {{ product_title }} installation program.

{% if context == "uninstalling-cluster-aws" %}
{%- set aws = false -%}
{% endif %}
{% if context == "uninstalling-cluster-gcp" %}
{%- set gcp = false -%}
{% endif %}
{% if context == "uninstalling-cluster-ibm-cloud" %}
{%- set ibm_cloud = false -%}
{% endif %}
{% if context == "uninstalling-cluster-ibm-power-vs" %}
{%- set ibm_power_vs = false -%}
{% endif %}
{% if context == "uninstalling-cluster-openstack" %}
{%- set osp = false -%}
{% endif %}