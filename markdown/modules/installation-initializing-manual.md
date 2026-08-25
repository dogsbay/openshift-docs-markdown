{% if context == "installing-azure-government-region" %}
{%- set azure_gov = true -%}
{% endif %}
{% if context == "installing-azure-stack-hub-user-infra" %}
{%- set ash = true -%}
{% endif %}
{% if context == "installing-vsphere" %}
{%- set vsphere_upi_vsphere = true -%}
{% endif %}
{% if context == "installing-restricted-networks-vsphere" %}
{%- set restricted_upi = true -%}
{%- set vsphere_upi_vsphere = true -%}
{% endif %}
{% if context == "installing-restricted-networks-bare-metal" %}
{%- set restricted = true -%}
{% endif %}
{% if context == "installing-vsphere-network-customizations" %}
{%- set vsphere_upi = true -%}
{%- set vsphere_upi_vsphere = true -%}
{% endif %}
{% if context == "installing-aws-china-region" %}
{%- set aws_china = true -%}
{% endif %}
{% if context == "installing-aws-government-region" %}
{%- set aws_gov = true -%}
{% endif %}
{% if context == "installing-aws-secret-region" %}
{%- set aws_secret = true -%}
{% endif %}
{% if context == "installing-aws-private" %}
{%- set aws_private = true -%}
{% endif %}
{% if context == "installing-azure-private" %}
{%- set azure_private = true -%}
{% endif %}
{% if context == "installing-gcp-private" %}
{%- set gcp_private = true -%}
{% endif %}
{% if context == "installing-gcp-shared-vpc" %}
{%- set gcp_shared = true -%}
{% endif %}
{% if context == "installing-azure-stack-hub-default" %}
{%- set ash_default = true -%}
{% endif %}
{% if context == "installing-azure-stack-hub-network-customizations" %}
{%- set ash_network = true -%}
{% endif %}
{% if context == "installing-ibm-cloud-private" %}
{%- set ibm_cloud_private = true -%}
{% endif %}
{% if context == "installing-ibm-power-vs-private-cluster" %}
{%- set ibm_power_vs_private = true -%}
{% endif %}
{% if context == "installing-ibm-cloud-restricted" %}
{%- set ibm_cloud_restricted = true -%}
{% endif %}

{%- set _mod_docs_content_type = "PROCEDURE" %}
# Manually creating the installation configuration file {id="installation-initializing-manual_{{ context }}"}

Installing the cluster requires that you manually create the installation configuration file. {._abstract}

{% if vsphere_upi or restricted_upi %}

:::important

The Cloud Controller Manager Operator performs a connectivity check on a provided hostname or IP address. Ensure that you specify a hostname or an IP address to a reachable vCenter server. If you provide metadata to a non-existent vCenter server, installation of the cluster fails at the bootstrap stage.

:::

{% endif %}

**Prerequisites**

{% if aws_china or aws_secret %}
*   You have uploaded a custom RHCOS AMI.
{% endif %}
{% if not ibm_cloud_restricted %}
* You have an SSH public key on your local machine for use with the installation program. You can use the key for SSH authentication onto your cluster nodes for debugging and disaster recovery.
{%- endif %}
* You have obtained the {{ product_title }} installation program and the pull secret for your
cluster.
{%- if restricted or restricted_upi %}
* Obtain the `imageContentSources` section from the output of the command to
mirror the repository.
* Obtain the contents of the certificate for your mirror registry.
{%- endif %}
{%- if ibm_cloud_restricted %}
* You have the `imageContentSourcePolicy.yaml` file that was created when you mirrored your registry.
* You have obtained the contents of the certificate for your mirror registry.
{%- endif %}

**Procedure**

1.  Create an installation directory to store your required installation assets in:
    ```terminal
    $ mkdir <installation_directory>
    ```

    :::important

    You must create a directory. Some installation assets, such as bootstrap X.509 certificates have short expiration intervals, so you must not reuse an installation directory. If you want to reuse individual files from another cluster installation, you can copy them into your directory. However, the file names for the installation assets might change between releases. Use caution when copying installation files from an earlier {{ product_title }} version.
    
    :::


{% if gcp_private %}
1.  Edit the `install-config.yaml` file to set the `publish: Internal` parameter.
1.  Edit the `install-config.yaml` file to set the parameters necessary for installation into an existing VPC.
    1.  Define the network and subnets for the VPC to install the cluster in under the parent `platform.gcp` field:
        ```yaml
        platform:
          gcp:
            network: <existing_vpc>
            controlPlaneSubnet: <control_plane_subnet>
            computeSubnet: <compute_subnet>
        ```

        For the `platform.gcp.network` parameter, specify the name for the existing Google VPC. For the `platform.gcp.controlPlaneSubnet` and `platform.gcp.computeSubnet` parameters, specify the existing subnets to deploy the control plane machines and compute machines, respectively.
{% endif %}
{% if gcp_shared %}
1.  Edit the `install-config.yaml` file to set the parameters necessary for installation into a shared VPC.
    1.  Define the network, subnets, and project names for the shared VPC:
        ```yaml
        # ...
        platform:
          gcp:
            computeSubnet: <shared_vpc_compute_subnet>
            controlPlaneSubnet: <shared_vpc_control_plane_subnet>
            network: <shared_vpc_name>
            networkProjectID: <host_project_name>
            projectID: <service_project_name>
        ```

        where:

        `<shared_vpc_compute_subnet>`
        :   Specifies the name of the subnet in the shared VPC for compute machines to use.

        `<shared_vpc_control_plane_subnet>`
        :   Specifies the name of the subnet in the shared VPC for control plane machines to use.

        `<shared_vpc_name>`
        :   Specifies the name of the shared VPC.

        `<host_project_name>`
        :   Specifies the name of the host project where the shared VPC exists.

        `<service_project_name>`
        :   Specifies the name of the project where you want to install the cluster.
{% endif %}
1.  Customize the provided sample `install-config.yaml` file template and save the file in the `<installation_directory>`.
{%- if azure_private %}
    1.  Edit the `install-config.yaml` file to set the `publish: Internal` parameter.
    1.  If you use your own outbound routing to connect to the internet, set the `outboundType: UserDefinedRouting` parameter.
{%- endif %}
{%- if azure_gov %}
    1.  Edit the `install-config.yaml` file so that the value of the `platform.azure.cloudName` parameter is `AzureUSGovernmentCloud`.
{%- endif %}
{%- if ibm_cloud_restricted %}

    :::note

    You must name this configuration file `install-config.yaml`.
    
    :::


    When customizing the sample template, be sure to provide the information that is required for an installation in a restricted network:
    1.  Update the `pullSecret` value to contain the authentication information for your registry:
        ```yaml
        pullSecret: '{"auths":{"<mirror_host_name>:5000": {"auth": "<credentials>","email": "you@example.com"}}}'
        ```

        For `<mirror_host_name>`, specify the registry domain name that you specified in the certificate for your mirror registry, and for `<credentials>`, specify the base64-encoded user name and password for your mirror registry.
    1.  Add the `additionalTrustBundle` parameter and value.
        ```yaml
        additionalTrustBundle: |
          -----BEGIN CERTIFICATE-----
          ZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZ
          -----END CERTIFICATE-----
        ```

        The value must be the contents of the certificate file that you used for your mirror registry. The certificate file can be an existing, trusted certificate authority, or the self-signed certificate that you generated for the mirror registry.
    1.  Define the network and subnets for the VPC to install the cluster in under the parent `platform.ibmcloud` field:
        ```yaml
        vpcName: <existing_vpc>
        controlPlaneSubnets: <control_plane_subnet>
        computeSubnets: <compute_subnet>
        ```

        For `platform.ibmcloud.vpcName`, specify the name for the existing {{ ibm_cloud_title }} Virtual Private Cloud (VPC) network. For `platform.ibmcloud.controlPlaneSubnets` and `platform.ibmcloud.computeSubnets`, specify the existing subnets to deploy the control plane machines and compute machines, respectively.
    1.  Add the image content resources, which resemble the following YAML excerpt:
        ```yaml
        imageContentSources:
        - mirrors:
          - <mirror_host_name>:5000/<repo_name>/release
          source: quay.io/openshift-release-dev/ocp-release
        - mirrors:
          - <mirror_host_name>:5000/<repo_name>/release
          source: registry.redhat.io/ocp/release
        ```

        For these values, use the `imageContentSourcePolicy.yaml` file that was created when you mirrored the registry.
    1.  If network restrictions limit the use of public endpoints to access the required {{ ibm_cloud_name }} services, add the `serviceEndpoints` stanza to `platform.ibmcloud` to specify an alternate service endpoint.

        :::note

        You can specify only one alternate service endpoint for each service.
        
        :::

        ```yaml title="Example of using alternate services endpoints"
        # ...
        serviceEndpoints:
          - name: IAM
            url: <iam_alternate_endpoint_url>
          - name: VPC
            url: <vpc_alternate_endpoint_url>
          - name: ResourceController
            url: <resource_controller_alternate_endpoint_url>
          - name: ResourceManager
            url: <resource_manager_alternate_endpoint_url>
          - name: DNSServices
            url: <dns_services_alternate_endpoint_url>
          - name: COS
            url: <cos_alternate_endpoint_url>
          - name: GlobalSearch
            url: <global_search_alternate_endpoint_url>
          - name: GlobalTagging
            url: <global_tagging_alternate_endpoint_url>
        # ...
        ```
    1.  Optional: Set the publishing strategy to `Internal`:
        ```yaml
        publish: Internal
        ```

        By setting this option, you create an internal Ingress Controller and a private load balancer.

        :::note

        If you use the default value of `External`, your network must be able to access the public endpoint for {{ ibm_cloud_name }} Internet Services (CIS). CIS is not enabled for Virtual Private Endpoints.
        
        :::

{%- endif %}
{%- if not ibm_cloud_restricted %}

    :::note

    You must name this configuration file `install-config.yaml`.
    
    :::

{%- endif %}

{% if restricted or restricted_upi %}
    *   Unless you use a registry that {{ op_system }} trusts by default, such as `docker.io`, you must provide the contents of the certificate for your mirror repository in the `additionalTrustBundle` section. In most cases, you must provide the certificate for your mirror.
    *   You must include the `imageContentSources` section from the output of the command to
    mirror the repository.

        :::important

        *   The `ImageContentSourcePolicy` file is generated as an output of `oc mirror` after the mirroring process is finished.
        *   The `oc mirror` command generates an `ImageContentSourcePolicy` file which contains the YAML needed to define `ImageContentSourcePolicy`.
        Copy the text from this file and paste it into your `install-config.yaml` file.
        *   You must run the 'oc mirror' command twice. The first time you run the `oc mirror` command, you get a full `ImageContentSourcePolicy` file. The second time you run the `oc mirror` command, you only get the difference between the first and second run.
        Because of this behavior, you must always keep a backup of these files in case you need to merge them into one complete `ImageContentSourcePolicy` file. Keeping a backup of these two output files ensures that you have a complete `ImageContentSourcePolicy` file.
        
        :::

{% endif %}

{% if ash %}

    Make the following modifications for Azure Stack Hub:
    1.  Set the `replicas` parameter to `0` for the `compute` pool:
        ```yaml
        compute:
        - hyperthreading: Enabled
          name: worker
          platform: {}
          replicas: 0
        ```
        *   `replicas`: Set to `0`.

            The compute machines will be provisioned manually later.
    1.  Update the `platform.azure` section of the `install-config.yaml` file to configure your Azure Stack Hub configuration:
        ```yaml
        platform:
          azure:
            armEndpoint: <azurestack_arm_endpoint>
            baseDomainResourceGroupName: <resource_group>
            cloudName: AzureStackCloud
            region: <azurestack_region>
        ```

        where:

        `<azurestack_arm_endpoint>`
        :   Specifies the Azure Resource Manager endpoint of your Azure Stack Hub environment, like `https://management.local.azurestack.external`.

        `<resource_group>`
        :   Specifies the name of the resource group that contains the DNS zone for your base domain.

        `cloudName`
        :   Specifies the Azure Stack Hub environment, which is used to configure the Azure SDK with the appropriate Azure API endpoints.

        `region`
        :   Specifies the name of your Azure Stack Hub region.
{% endif %}

{% if ash_default or ash_network %}

    Make the following modifications:
    1.  Specify the required installation parameters.
    1.  Update the `platform.azure` section to specify the parameters that are specific to Azure Stack Hub.
    1.  Optional: Update one or more of the default configuration parameters to customize the installation.

        For more information about the parameters, see "Installation configuration parameters".
{% endif %}

{% if vsphere_upi_vsphere %}
1.  If you are installing a three-node cluster or a cluster with user-provisioned infrastructure, set the `compute.replicas` parameter to `0`. In a three-node cluster, this ensures that the cluster’s control planes are schedulable. For more information, see "Installing a three-node cluster". In a cluster with user-provisioned infrastructure, you must manually deploy compute machines before you finish installing {{ product_title }}.
{% endif %}
1.  Back up the `install-config.yaml` file so that you can use it to install many clusters.

    :::important

    Back up the `install-config.yaml` file now, because the installation process consumes the file in the next step.
    
    :::


{% if context == "installing-azure-government-region" %}
{%- set azure_gov = "" -%}
{% endif %}
{% if context == "installing-azure-stack-hub-user-infra" %}
{%- set ash = "" -%}
{% endif %}
{% if context == "installing-vsphere" %}
{%- set vsphere_upi_vsphere = "" -%}
{% endif %}
{% if context == "installing-restricted-networks-vsphere" %}
{%- set restricted_upi = "" -%}
{%- set vsphere_upi_vsphere = "" -%}
{% endif %}
{% if context == "installing-restricted-networks-bare-metal" %}
{%- set restricted = "" -%}
{% endif %}
{% if context == "installing-vsphere-network-customizations" %}
{%- set vsphere_upi = "" -%}
{%- set vsphere_upi_vsphere = "" -%}
{% endif %}
{% if context == "installing-aws-china-region" %}
{%- set aws_china = "" -%}
{% endif %}
{% if context == "installing-aws-government-region" %}
{%- set aws_gov = "" -%}
{% endif %}
{% if context == "installing-aws-secret-region" %}
{%- set aws_secret = "" -%}
{% endif %}
{% if context == "installing-aws-private" %}
{%- set aws_private = "" -%}
{% endif %}
{% if context == "installing-azure-private" %}
{%- set azure_private = "" -%}
{% endif %}
{% if context == "installing-gcp-private" %}
{%- set gcp_private = "" -%}
{% endif %}
{% if context == "installing-gcp-shared-vpc" %}
{%- set gcp_shared = "" -%}
{% endif %}
{% if context == "installing-azure-stack-hub-default" %}
{%- set ash_default = "" -%}
{% endif %}
{% if context == "installing-azure-stack-hub-network-customizations" %}
{%- set ash_network = "" -%}
{% endif %}
{% if context == "installing-ibm-cloud-private" %}
{%- set ibm_cloud_private = "" -%}
{% endif %}
{% if context == "installing-ibm-power-vs-private-cluster" %}
{%- set ibm_power_vs_private = "" -%}
{% endif %}
{% if context == "installing-ibm-cloud-restricted" %}
{%- set ibm_cloud_restricted = "" -%}
{% endif %}
{%- set platform = "" -%}