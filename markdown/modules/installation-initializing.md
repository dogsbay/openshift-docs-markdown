{% if context == "installing-aws-customizations" %}
{%- set aws = true -%}
{%- set three_node_cluster = true -%}
{% endif %}
{% if context == "installing-aws-vpc" %}
{%- set aws = true -%}
{% endif %}
{% if context == "installing-restricted-networks-aws-installer-provisioned" %}
{%- set aws = true -%}
{%- set restricted = true -%}
{% endif %}
{% if context == "installing-aws-outposts-remote-workers" %}
{%- set aws = true -%}
{%- set aws_outposts = true -%}
{% endif %}
{% if context == "installing-azure-customizations" %}
{%- set azure = true -%}
{%- set three_node_cluster = true -%}
{% endif %}
{% if context == "installing-azure-vnet" %}
{%- set azure = true -%}
{%- set azure_vnet = true -%}
{% endif %}
{% if context == "installing-azure-user-infra" %}
{%- set azure = true -%}
{%- set three_node_cluster = true -%}
{% endif %}
{% if context == "installing-gcp-customizations" %}
{%- set gcp = true -%}
{%- set three_node_cluster = true -%}
{% endif %}
{% if context == "installing-gcp-vpc" %}
{%- set gcp = true -%}
{%- set gcp_vpc = true -%}
{% endif %}
{% if context == "installing-gcp-shared-vpc" %}
{%- set gcp = true -%}
{% endif %}
{% if context == "installing-gcp-network-customizations" %}
{%- set gcp = true -%}
{% endif %}
{% if context == "installing-gcp-user-infra" %}
{%- set gcp = true -%}
{%- set three_node_cluster = true -%}
{% endif %}
{% if context == "installing-gcp-user-infra-vpc" %}
{%- set gcp = true -%}
{% endif %}
{% if context == "installing-restricted-networks-gcp" %}
{%- set gcp = true -%}
{%- set restricted = true -%}
{% endif %}
{% if context == "installing-restricted-networks-gcp-installer-provisioned" %}
{%- set gcp = true -%}
{%- set gcp_restricted = true -%}
{%- set restricted = true -%}
{% endif %}
{% if context == "installing-ibm-cloud-customizations" %}
{%- set ibm_cloud = true -%}
{% endif %}
{% if context == "installing-ibm-powervc-installer-custom" %}
{%- set ibm_power_vc_platform = true -%}
{% endif %}
{% if context == "installing-ibm-power-vs-customizations" %}
{%- set ibm_power_vs = true -%}
{% endif %}
{% if context == "installing-ibm-powervs-vpc" %}
{%- set ibm_power_vs = true -%}
{% endif %}
{% if context == "installing-restricted-networks-ibm-power-vs" %}
{%- set ibm_power_vs = true -%}
{%- set restricted = true -%}
{% endif %}
{% if context == "installing-ibm-cloud-vpc" %}
{%- set ibm_cloud = true -%}
{% endif %}
{% if context == "installing-ibm-cloud-private" %}
{%- set ibm_cloud = true -%}
{% endif %}
{% if context == "installing-ibm-cloud-restricted" %}
{%- set ibm_cloud = true -%}
{%- set restricted = true -%}
{% endif %}
{% if context == "installing-openstack-installer-custom" %}
{%- set osp = true -%}
{% endif %}
{% if context == "installing-openstack-user" %}
{%- set osp = true -%}
{%- set osp_user = true -%}
{% endif %}
{% if context == "installing-openstack-user-sr-iov" %}
{%- set osp = true -%}
{%- set osp_user = true -%}
{% endif %}
{% if context == "installing-vsphere-installer-provisioned-customizations" %}
{%- set vsphere = true -%}
{%- set three_node_cluster = true -%}
{% endif %}
{% if context == "installing-openstack-installer-restricted" %}
{%- set osp = true -%}
{%- set restricted = true -%}
{% endif %}
{% if context == "installing-restricted-networks-installer-provisioned-vsphere" %}
{%- set vsphere = true -%}
{%- set restricted = true -%}
{% endif %}
{% if context == "installing-nutanix-installer-provisioned" %}
{%- set nutanix = true -%}
{% endif %}
{% if context == "installing-restricted-networks-nutanix-installer-provisioned" %}
{%- set nutanix = true -%}
{%- set restricted = true -%}
{% endif %}
{% if context == "installing-restricted-networks-azure-installer-provisioned" %}
{%- set azure = true -%}
{%- set restricted = true -%}
{% endif %}
{% if context == "installing-restricted-networks-azure-user-provisioned" %}
{%- set azure = true -%}
{%- set restricted = true -%}
{% endif %}

{%- set _mod_docs_content_type = "PROCEDURE" %}
# Creating the installation configuration file {id="installation-initializing_{{ context }}"}

You can customize the {{ product_title }} cluster you install on
{%- if aws %}
Amazon Web Services (AWS).
{% endif %}
{% if gcp %}
{{ gcp_first }}.
{% endif %}
{% if ibm_cloud %}
{{ ibm_cloud_name }}.
{% endif %}
{% if osp %}
{{ rh_openstack_first }}.
{% endif %}
{% if vsphere %}
VMware vSphere.
{% endif %}
{% if nutanix %}
Nutanix.
{% endif %}
{% if ibm_power_vc_platform %}
{{ ibm_power_vc_name }}.
{% endif %}
{% if azure %}
Microsoft Azure. {._abstract}


:::important

Do not specify `windows`, `microsoft`, or other variants of these words in the `metadata.name` parameter of the `install-config.yaml` file. Specifying one of these words for the cluster name causes the installation program to generate an error message like the following example message:

```terminal
The resource name 'windows-xxxx-identity' or a part of the name is a trademarked or reserved word.
```

Additionally, specifying `login` at the beginning of the name in the `metadata.name` parameter of the `install-config.yaml` file results in the generation of an error message. You can specify `login` in the middle or end of the name.

:::

{% endif %}

**Prerequisites**

*   You have the {{ product_title }} installation program and the pull secret for your cluster.
{%- if restricted %}
For a restricted network installation, these files are on your mirror host.
{%- if not (nutanix or ibm_cloud) %}
*   You have the `imageContentSources` values that were generated during mirror registry creation.
{% endif %}
{% if (nutanix and restricted) %}
*   You have the `imageContentSourcePolicy.yaml` file that was created when you mirrored your registry.
*   You have the location of the {{ op_system_first }} image you download.
{% endif %}
{% if (ibm_cloud and restricted) %}
*   You have the `imageContentSourcePolicy.yaml` file that was created when you mirrored your registry.
{%- endif %}
*   You have obtained the contents of the certificate for your mirror registry.
{%- if not (aws or gcp or ibm_cloud) %}
*   You have retrieved a {{ op_system_first }} image and uploaded it to an accessible location.
{% endif %}
{% endif %}
{% if azure %}
*   You have an Azure subscription ID and tenant ID.
*   If you are installing the cluster using a service principal, you have its application ID and password.
*   If you are installing the cluster using a system-assigned managed identity, you have enabled it on the virtual machine that you will run the installation program from.
*   If you are installing the cluster using a user-assigned managed identity, you have met these prerequisites:
    *   You have its client ID.
    *   You have assigned it to the virtual machine that you will run the installation program from.
{% endif %}
{% if nutanix %}
*   You have verified that you have met the Nutanix networking requirements. For more information, see "Preparing to install on Nutanix".
{% endif %}
{% if gcp %}
*   Configure a {{ gcp_short }} account.
{% endif %}

**Procedure**

{% if azure %}
1.  Optional: If you have run the installation program on this computer before, and want to use an alternative service principal or managed identity, go to the `~/.azure/` directory and delete the `osServicePrincipal.json` configuration file.

    Deleting this file prevents the installation program from automatically reusing subscription and authentication values from a previous installation.
{% endif %}
1.  Create the `install-config.yaml` file.
    1.  Change to the directory that contains the installation program and run the following command:
        ```terminal
        $ ./openshift-install create install-config --dir <installation_directory>
        ```
        *   `<installation_directory>`: For `<installation_directory>`, specify the directory name to store the
        files that the installation program creates.

            When specifying the directory:
{%- if not ibm_power_vs %}
        *   Verify that the directory has the `execute` permission. This permission is required to run Terraform binaries under the installation directory.
            {%- endif %}
        *   Use an empty directory. Some installation assets, such as bootstrap X.509 certificates, have short expiration intervals, therefore you must not reuse an installation directory. If you want to reuse individual files from another cluster installation, you can copy them into your directory. However, the file names for the installation assets might change between releases. Use caution when copying installation files from an earlier {{ product_title }} version.
{%- if ibm_power_vs %}

            :::note

            Always delete the `~/.powervs` directory to avoid reusing a stale configuration. Run the following command:
            ```terminal
            $ rm -rf ~/.powervs
            ```
            
            :::

{%- endif %}
    1.  At the prompts, provide the configuration details for your cloud:
        1.  Optional: Select an SSH key to use to access your cluster machines.

            :::note

            For production {{ product_title }} clusters on which you want to perform installation debugging or disaster recovery, specify an SSH key that your `ssh-agent` process uses.
            
            :::

{%- if aws %}
        1.  Select **AWS** as the platform to target.
        1.  If you do not have an Amazon Web Services (AWS) profile stored on your computer, enter the AWS
        access key ID and secret access key for the user that you configured to run the
        installation program.
        1.  Select the AWS region to deploy the cluster to.
        1.  Select the base domain for the Route 53 service that you configured for your cluster.
            {% endif %}
            {% if azure %}
        1.  Select **azure** as the platform to target.

            If the installation program cannot locate the `osServicePrincipal.json` configuration file from a previous installation, you are prompted for Azure subscription and authentication values.
        1.  Enter the following Azure parameter values for your subscription:
            *   **azure subscription id**: Enter the subscription ID to use for the cluster.
            *   **azure tenant id**: Enter the tenant ID.
        1.  Depending on the Azure identity you are using to deploy the cluster, do one of the following when prompted for the **azure service principal client id**:
            *   If you are using a service principal, enter its application ID.
            *   If you are using a system-assigned managed identity, leave this value blank.
            *   If you are using a user-assigned managed identity, specify its client ID.
        1.  Depending on the Azure identity you are using to deploy the cluster, do one of the following when prompted for the **azure service principal client secret**:
            *   If you are using a service principal, enter its password.
            *   If you are using a system-assigned managed identity, leave this value blank.
            *   If you are using a user-assigned managed identity, leave this value blank.
        1.  Select the region to deploy the cluster to.
        1.  Select the base domain to deploy the cluster to. The base domain corresponds
        to the Azure DNS Zone that you created for your cluster.
{% endif %}
{% if gcp %}
        1.  Select **gcp** as the platform to target.
        1.  If you have not configured the service account key for your {{ gcp_short }} account on
        your computer, you must obtain it from {{ gcp_short }} and paste the contents of the file
        or enter the absolute path to the file.
        1.  Select the project ID to provision the cluster in. The default value is
        specified by the service account that you configured.
        1.  Select the region to deploy the cluster to.
        1.  Select the base domain to deploy the cluster to. The base domain corresponds
        to the public DNS zone that you created for your cluster.
{% endif %}
{% if ibm_cloud %}
        1.  Select **ibmcloud** as the platform to target.
        1.  Select the region to deploy the cluster to.
        1.  Select the base domain to deploy the cluster to. The base domain corresponds
        to the public DNS zone that you created for your cluster.
{% endif %}
{% if ibm_power_vs %}
        1.  Select **powervs** as the platform to target.
        1.  Select the region to deploy the cluster to.
        1.  Select the zone to deploy the cluster to.
        1.  Select the base domain to deploy the cluster to. The base domain corresponds
        to the public DNS zone that you created for your cluster.
{% endif %}
{% if osp %}
        1.  Select **openstack** as the platform to target.
        1.  Specify the {{ rh_openstack_first }} external network name to use for installing the cluster.
        1.  Specify the floating IP address to use for external access to the OpenShift API.
        1.  Specify a {{ rh_openstack }} flavor with at least 16 GB RAM to use for control plane nodes
        and 8 GB RAM for compute nodes.
        1.  Select the base domain to deploy the cluster to. All DNS records will be
        sub-domains of this base and will also include the cluster name.
{% endif %}
{% if vsphere %}
        1.  Select **vsphere** as the platform to target.
        1.  Specify the name of your vCenter instance.
        1.  Specify the user name and password for the vCenter account that has the required permissions to create the cluster.

            The installation program connects to your vCenter instance.
        1.  Select the data center in your vCenter instance to connect to.

            :::note

            After you create the installation configuration file, you can modify the file to create a multiple vSphere data center environment. This means that you can deploy an {{ product_title }} cluster to multiple vSphere data centers. For more information about creating this environment, see the section named _VMware vSphere region and zone enablement_.
            
            :::

        1.  Select the default vCenter datastore to use.

            :::warning

            You can specify the path of any datastore that exists in a datastore cluster. By default, Storage Distributed Resource Scheduler (SDRS), which uses Storage vMotion, is automatically enabled for a datastore cluster. Red Hat does not support Storage vMotion, so you must disable Storage DRS to avoid data loss issues for your {{ product_title }} cluster.

            You cannot specify more than one datastore path. If you must specify VMs across multiple datastores, use a `datastore` object to specify a failure domain in your cluster’s `install-config.yaml` configuration file. For more information, see "VMware vSphere region and zone enablement".
            
            :::

        1.  Select the vCenter cluster to install the {{ product_title }} cluster in. The installation program uses the root resource pool of the vSphere cluster as the default resource pool.
        1.  Select the network in the vCenter instance that contains the virtual IP addresses and DNS records that you configured.
        1.  Enter the virtual IP address that you configured for control plane API access.
        1.  Enter the virtual IP address that you configured for cluster ingress.
        1.  Enter the base domain. This base domain must be the same one that you used in the DNS records that you configured.
            {% endif %}
            {% if nutanix %}
        1.  Select **nutanix** as the platform to target.
        1.  Enter the Prism Central domain name or IP address.
        1.  Enter the port that is used to log into Prism Central.
        1.  Enter the credentials that are used to log into Prism Central.

            The installation program connects to Prism Central.
        1.  Select the Prism Element that will manage the {{ product_title }} cluster.
        1.  Select the network subnet to use.
        1.  Enter the virtual IP address that you configured for control plane API access.
        1.  Enter the virtual IP address that you configured for cluster ingress.
        1.  Enter the base domain. This base domain must be the same one that you configured in the DNS records.
            {% endif %}
            {% if not osp %}
        1.  Enter a descriptive name for your cluster.
{%- if azure %}

            :::important

            All Azure resources that are available through public endpoints are subject to resource name restrictions, and you cannot create resources that use certain terms. For a list of terms that Azure restricts, see [Resolve reserved resource name errors](https://docs.microsoft.com/en-us/azure/azure-resource-manager/resource-manager-reserved-resource-name) in the Azure documentation.
            
            :::

{%- endif %}
{%- if (azure and restricted) %}
        1.  Paste the {{ cluster_manager_url_pull }}.
            {% endif %}
            {% if vsphere or nutanix %}
        The cluster name you enter must match the cluster name you specified when configuring the DNS records.
{% endif %}
{% endif %}
{% if osp %}
        1.  Enter a name for your cluster. The name must be 14 or fewer characters long.
{% endif %}

{% if aws_outposts %}
1.  Modify the `install-config.yaml` file. The AWS Outposts installation has the following limitations which require manual modification of the `install-config.yaml` file:
    *   Unlike AWS Regions, which offer near-infinite scale, AWS Outposts are limited by their provisioned capacity, EC2 family and generations, configured instance sizes, and availability of compute capacity that is not already consumed by other workloads. Therefore, when creating new {{ product_title }} cluster, you need to provide the supported instance type in the `compute.platform.aws.type` section in the configuration file.
    *   When deploying {{ product_title }} cluster with remote workers running in AWS Outposts, only one Availability Zone can be used for the compute instances - the Availability Zone in which the Outpost instance was created in. Therefore, when creating new {{ product_title }} cluster, it recommended to provide the relevant Availability Zone in the `compute.platform.aws.zones` section in the configuration file, in order to limit the compute instances to this Availability Zone.
    *   Amazon Elastic Block Store (EBS) gp3 volumes are not supported by the AWS Outposts service. This volume type is the default type used by the {{ product_title }} cluster. Therefore, when creating new {{ product_title }} cluster, you must change the volume type in the `compute.platform.aws.rootVolume.type` section to gp2.
    You will find more information about how to change these values below.
{% endif %}

{% if not (restricted or nutanix or aws_outposts) %}
1.  Modify the `install-config.yaml` file. You can find more information about the available parameters in the "Installation configuration parameters" section.
    {% endif %}
    {% if gcp_vpc %}
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
{% if azure_vnet %}
    1.  Define the network and subnets for the VNet to install the cluster under the `platform.azure` field:
        ```yaml
        networkResourceGroupName: <vnet_resource_group>
        virtualNetwork: <vnet>
        controlPlaneSubnet: <control_plane_subnet>
        computeSubnet: <compute_subnet>
        ```

        where:

        `<vnet_resource_group>`
        :   Specifies the resource group name that contains the existing virtual network (VNet).

        `<vnet>`
        :   Specifies the existing virtual network name.

        `<control_plane_subnet>`
        :   Specifies the existing subnet name to deploy the control plane machines.

        `<compute_subnet>`
        :   Specifies the existing subnet name to deploy compute machines.
{% endif %}
{% if three_node_cluster %}

        :::note

        If you are installing a three-node cluster, be sure to set the `compute.replicas` parameter to `0`. This ensures that the cluster’s control planes are schedulable. For more information, see "Installing a three-node cluster on {{ platform }}".
        
        :::

{% endif %}

{% if (osp and restricted) %}
1.  In the `install-config.yaml` file, set the value of `platform.openstack.clusterOSImage` to the image location or name. For example:
    ```yaml
    platform:
      openstack:
          clusterOSImage: http://mirror.example.com/images/rhcos-43.81.201912131630.0-openstack.x86_64.qcow2.gz?sha256=ffebbd68e8a1f2a245ca19522c16c86f67f9ac8e4e0c1f0a812b068b16f7265d
    ```
{% endif %}

{% if (vsphere and restricted) %}
1.  Choose one of the following methods to speficy an {{ op_system }} image for your cluster than runs in a {{ vmw_full }} vCenter environment.
    1.  The `clusterOSImage` parameter method: In the `install-config.yaml` file, set the value of `platform.vsphere.clusterOSImage` to the image location or name. For example:
        ```yaml
        platform:
          vsphere:
              clusterOSImage: http://mirror.example.com/images/rhcos-43.81.201912131630.0-vmware.x86_64.ova?sha256=ffebbd68e8a1f2a245ca19522c16c86f67f9ac8e4e0c1f0a812b068b16f7265d
        ```
    1.  The `topology.template` parameter method:
        1.  Download the **{{ op_system_first }} - vSphere** image in Open Virtual Appliance (OVA) format to your local system. For more information, see "Creating the RHCOS image for restricted network installations".
        1.  From the **Hosts and Clusters** tab on the {{ vmw_short }} Client, right-click your cluster name and select **Deploy OVF Template**.
        1.  On the **Select an OVF** tab, specify the name of the {{ op_system }} OVA file that you downloaded.
        1.  On the **Select a name and folder** tab, set a **Virtual machine name** for your template, such as `Template-{{ op_system }}`.
        1.  Click the name of your vSphere cluster and select the folder you created in the previous step.
        1.  On the **Select a compute resource** tab, click the name of your vSphere cluster.
        1.  On the **Select storage** tab, configure the storage options for your VM.
        1.  When creating the OVF template, do not specify values on the **Customize template** tab or configure the template any further.
        1.  In the `install-config.yaml` file, set the value of `topology.template` to the path where you imported the image to your {{ vmw_short }} vCenter instance.
{% endif %}
{% if (nutanix and restricted) %}
1.  In the `install-config.yaml` file, set the value of `platform.nutanix.clusterOSImage` to the image location or name. For example:
    ```yaml
    platform:
      nutanix:
          clusterOSImage: http://mirror.example.com/images/rhcos-47.83.202103221318-0-nutanix.x86_64.qcow2
    ```
{% endif %}
{% if restricted %}
1.  Edit the `install-config.yaml` file to give the additional information that is required for an installation in a restricted network.
    1.  Update the `pullSecret` value to contain the authentication information for
    your registry:
        ```yaml
        pullSecret: '{"auths":{"<mirror_host_name>:5000": {"auth": "<credentials>","email": "you@example.com"}}}'
        ```

        For `<mirror_host_name>`, specify the registry domain name
        that you specified in the certificate for your mirror registry, and for
        `<credentials>`, specify the base64-encoded user name and password for
        your mirror registry.
    1.  Add the `additionalTrustBundle` parameter and value.
        ```yaml
        additionalTrustBundle: |
          -----BEGIN CERTIFICATE-----
          ZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZ
          -----END CERTIFICATE-----
        ```

        The value must be the contents of the certificate file that you used for your mirror registry. The certificate file can be an existing, trusted certificate authority, or the self-signed certificate that you generated for the mirror registry.
{%- if (aws and restricted) %}
    1.  Define the subnets for the VPC to install the cluster in, as in the following example:
        ```yaml
        platform:
          aws:
            vpc:
              subnets:
                - id: subnet-<id_1>
                - id: subnet-<id_2>
                - id: subnet-<id_3>
        ```
{% endif %}
{% if (azure and restricted) %}
    1.  Define the network and subnets for the VNet to install the cluster under the `platform.azure` field:
        ```yaml
        networkResourceGroupName: <vnet_resource_group>
        virtualNetwork: <vnet>
        controlPlaneSubnet: <control_plane_subnet>
        computeSubnet: <compute_subnet>
        ```

        where:

        `<vnet_resource_group>`
        :   Specifies the resource group name that contains the existing virtual network (VNet).

        `<vnet>`
        :   Specifies the existing virtual network name.

        `<control_plane_subnet>`
        :   Specifies the existing subnet name to deploy the control plane machines.

        `<compute_subnet>`
        :   Specifies the existing subnet name to deploy compute machines.
{% endif %}
{% if gcp_restricted %}
    1.  Define the network and subnets for the VPC to install the cluster in under the parent `platform.gcp` field:
        ```yaml
        platform:
          gcp:
            network: <existing_vpc>
            controlPlaneSubnet: <control_plane_subnet>
            computeSubnet: <compute_subnet>
        ```

        For `platform.gcp.network`, specify the name for the existing Google VPC. For `platform.gcp.controlPlaneSubnet` and `platform.gcp.computeSubnet`, specify the existing subnets to deploy the control plane machines and compute machines, respectively.
{% endif %}
{% if (ibm_power_vs and restricted) %}
    1.  Define the network for the VPC to install the cluster in under the parent `platform.powervs` field:
        ```yaml
        vpcName: <existing_vpc>
        ```

        For `platform.powervs.vpcName`, specify the name for the existing {{ ibm_cloud_name }} VPC.
{% endif %}
{% if (ibm_cloud and restricted) %}
    1.  Define the network and subnets for the VPC to install the cluster in under the parent `platform.ibmcloud` field:
        ```yaml
        vpcName: <existing_vpc>
        controlPlaneSubnets: <control_plane_subnet>
        computeSubnets: <compute_subnet>
        ```

        For `platform.ibmcloud.vpcName`, specify the name for the existing {{ ibm_cloud_title }} Virtual Private Cloud (VPC) network. For `platform.ibmcloud.controlPlaneSubnets` and `platform.ibmcloud.computeSubnets`, specify the existing subnets to deploy the control plane machines and compute machines, respectively.
{%- endif %}
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
{%- if not (nutanix or ibm_cloud) %}

        For these values, use the `imageContentSources` that you recorded during mirror registry creation.
{% endif %}
{% if nutanix or ibm_cloud %}
        For these values, use the `imageContentSourcePolicy.yaml` file that was created when you mirrored the registry.
{% endif %}
{% if ibm_cloud %}
    1.  If your Virtual Private Cloud (VPC) network is unable to access the public endpoints for the required {{ ibm_cloud_name }} service endpoints, add the following stanza to `platform.ibmcloud` to override them using {{ ibm_cloud_name }} Virtual Private Endpoints (VPE).
        ```yaml
        # ...
        serviceEndpoints:
          - name: IAM
            url: <iam_private_endpoint_url>
          - name: VPC
            url: <vpc_private_endpoint_url>
          - name: ResourceController
            url: <resource_controller_private_endpoint_url>
          - name: ResourceManager
            url: <resource_manager_private_endpoint_url>
          - name: DNSServices
            url: <dns_services_private_endpoint_url>
          - name: COS
            url: <cos_private_endpoint_url>
          - name: GlobalSearch
            url: <global_search_private_endpoint_url>
          - name: GlobalTagging
            url: <global_tagging_private_endpoint_url>
        # ...
        ```

        :::note

        Only one VPE can be specified per service.
        
        :::

{% endif %}
{% if restricted %}
{% if not (vsphere or osp or nutanix) %}
    1.  Optionally, set the publishing strategy to `Internal`:
        ```yaml
        publish: Internal
        ```

        By setting this option, you create an internal Ingress Controller and a private load balancer.
{% endif %}
{% if azure %}

        :::important

        Azure Firewall [does not work seamlessly](https://learn.microsoft.com/en-us/azure/firewall/integrate-lb) with Azure Public Load balancers. Thus, when using Azure Firewall for restricting internet access, the `publish` field in `install-config.yaml` should be set to `Internal`.
        
        :::

{% endif %}
{% if ibm_cloud %}

        :::note

        If you use the default value of `External`, your network must be able to access the public endpoint for {{ ibm_cloud_name }} Internet Services (CIS). CIS is not enabled for Virtual Private Endpoints.
        
        :::

{% endif %}
{% endif %}

{% if not nutanix %}
1.  Make any other modifications to the `install-config.yaml` file that you require.

    For more information about the parameters, see "Installation configuration parameters".
{% endif %}
{% endif %}

{% if nutanix %}
1.  Optional: Update one or more of the default configuration parameters in the `install.config.yaml` file to customize the installation.

    For more information about the parameters, see "Installation configuration parameters".

    :::note

    If you are installing a three-node cluster, be sure to set the `compute.replicas` parameter to `0`. This ensures that cluster’s control planes are schedulable. For more information, see "Installing a three-node cluster on {{ platform }}".
    
    :::

{% endif %}
1.  Back up the `install-config.yaml` file so that you can use
it to install multiple clusters.

    :::important

    The `install-config.yaml` file is consumed during the installation process. If
    you want to reuse the file, you must back it up now.
    
    :::

{%- if azure %}

    If previously not detected, the installation program creates an `osServicePrincipal.json` configuration file and stores this file in the `~/.azure/` directory on your computer. This ensures that the installation program can load the profile when it is creating an {{ product_title }} cluster on the target platform.
{% endif %}

{% if osp_user %}
You now have the file `install-config.yaml` in the directory that you specified.
{% endif %}

{% if context == "installing-aws-customizations" %}
{%- set aws = false -%}
{%- set three_node_cluster = false -%}
{% endif %}
{% if context == "installing-aws-vpc" %}
{%- set aws = false -%}
{% endif %}
{% if context == "installing-restricted-networks-aws-installer-provisioned" %}
{%- set aws = false -%}
{%- set restricted = false -%}
{% endif %}
{% if context == "installing-aws-outposts-remote-workers" %}
{%- set aws = false -%}
{%- set aws_outposts = false -%}
{% endif %}
{% if context == "installing-azure-customizations" %}
{%- set azure = false -%}
{%- set three_node_cluster = false -%}
{% endif %}
{% if context == "installing-azure-vnet" %}
{%- set azure = false -%}
{%- set azure_vnet = false -%}
{% endif %}
{% if context == "installing-azure-user-infra" %}
{%- set azure = false -%}
{%- set three_node_cluster = false -%}
{% endif %}
{% if context == "installing-gcp-customizations" %}
{%- set gcp = false -%}
{%- set three_node_cluster = false -%}
{% endif %}
{% if context == "installing-gcp-network-customizations" %}
{%- set gcp = false -%}
{% endif %}
{% if context == "installing-gcp-vpc" %}
{%- set gcp = false -%}
{%- set gcp_vpc = false -%}
{% endif %}
{% if context == "installing-gcp-shared-vpc" %}
{%- set gcp = false -%}
{% endif %}
{% if context == "installing-gcp-user-infra" %}
{%- set gcp = false -%}
{%- set three_node_cluster = false -%}
{% endif %}
{% if context == "installing-gcp-user-infra-vpc" %}
{%- set gcp = false -%}
{% endif %}
{% if context == "installing-restricted-networks-gcp" %}
{%- set gcp = false -%}
{%- set restricted = false -%}
{% endif %}
{% if context == "installing-restricted-networks-gcp-installer-provisioned" %}
{%- set gcp = false -%}
{%- set gcp_restricted = false -%}
{%- set restricted = false -%}
{% endif %}
{% if context == "installing-ibm-cloud-customizations" %}
{%- set ibm_cloud = false -%}
{% endif %}
{% if context == "installing-ibm-powervc-installer-custom" %}
{%- set ibm_power_vc_platform = false -%}
{% endif %}
{% if context == "installing-ibm-power-vs-customizations" %}
{%- set ibm_power_vs = false -%}
{% endif %}
{% if context == "installing-ibm-powervs-vpc" %}
{%- set ibm_power_vs = false -%}
{% endif %}
{% if context == "installing-restricted-networks-ibm-power-vs" %}
{%- set ibm_power_vs = false -%}
{%- set restricted = false -%}
{% endif %}
{% if context == "installing-ibm-cloud-vpc" %}
{%- set ibm_cloud = false -%}
{% endif %}
{% if context == "installing-ibm-cloud-private" %}
{%- set ibm_cloud = false -%}
{% endif %}
{% if context == "installing-ibm-cloud-restricted" %}
{%- set ibm_cloud = false -%}
{%- set restricted = false -%}
{% endif %}
{% if context == "installing-openstack-installer-custom" %}
{%- set osp = false -%}
{% endif %}
{% if context == "installing-openstack-user" %}
{%- set osp = false -%}
{%- set osp_user = false -%}
{% endif %}
{% if context == "installing-openstack-user-sr-iov" %}
{%- set osp = false -%}
{%- set osp_user = false -%}
{% endif %}
{% if context == "installing-vsphere-installer-provisioned-customizations" %}
{%- set vsphere = false -%}
{%- set three_node_cluster = false -%}
{% endif %}
{% if context == "installing-openstack-installer-restricted" %}
{%- set osp = false -%}
{%- set restricted = false -%}
{% endif %}
{% if context == "installing-restricted-networks-installer-provisioned-vsphere" %}
{%- set vsphere = false -%}
{%- set restricted = false -%}
{% endif %}
{% if context == "installing-nutanix-installer-provisioned" %}
{%- set nutanix = false -%}
{% endif %}
{% if context == "installing-restricted-networks-nutanix-installer-provisioned" %}
{%- set nutanix = false -%}
{%- set restricted = false -%}
{% endif %}
{%- set platform = false -%}
{% if context == "installing-restricted-networks-azure-installer-provisioned" %}
{%- set azure = false -%}
{%- set restricted = false -%}
{% endif %}
{% if context == "installing-restricted-networks-azure-user-provisioned" %}
{%- set azure = false -%}
{%- set restricted = false -%}
{% endif %}