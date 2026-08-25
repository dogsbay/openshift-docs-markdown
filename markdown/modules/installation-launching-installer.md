{% if context == "installing-aws-private" %}
{%- set custom_config = true -%}
{%- set aws = true -%}
{% endif %}
{% if context == "installing-aws-customizations" %}
{%- set custom_config = true -%}
{%- set aws = true -%}
{% endif %}
{% if context == "installing-aws-china-region" %}
{%- set custom_config = true -%}
{%- set aws = true -%}
{% endif %}
{% if context == "installing-aws-government-region" %}
{%- set custom_config = true -%}
{%- set aws = true -%}
{% endif %}
{% if context == "installing-aws-specialized-region" %}
{%- set custom_config = true -%}
{%- set aws = true -%}
{% endif %}
{% if context == "installing-aws-secret-region" %}
{%- set custom_config = true -%}
{%- set aws = true -%}
{% endif %}
{% if context == "installing-aws-vpc" %}
{%- set custom_config = true -%}
{%- set aws = true -%}
{% endif %}
{% if context == "installing-restricted-networks-aws-installer-provisioned" %}
{%- set custom_config = true -%}
{%- set aws = true -%}
{% endif %}
{% if context == "installing-aws-default" %}
{%- set no_config = true -%}
{%- set aws = true -%}
{% endif %}
{% if context == "installing-aws-localzone" %}
{%- set custom_config = true -%}
{%- set aws = true -%}
{% endif %}
{% if context == "installing-aws-wavelength-zone" %}
{%- set custom_config = true -%}
{%- set aws = true -%}
{% endif %}
{% if context == "installing-aws-outposts-remote-workers" %}
{%- set custom_config = true -%}
{%- set aws = true -%}
{% endif %}
{% if context == "installing-azure-default" %}
{%- set no_config = true -%}
{%- set azure = true -%}
{%- set azure_default = true -%}
{% endif %}
{% if context == "installing-gcp-customizations" %}
{%- set custom_config = true -%}
{%- set gcp = true -%}
{% endif %}
{% if context == "installing-gcp-vpc" %}
{%- set custom_config = true -%}
{%- set gcp = true -%}
{% endif %}
{% if context == "installing-gcp-shared-vpc" %}
{%- set custom_config = true -%}
{%- set gcp = true -%}
{% endif %}
{% if context == "installing-gcp-default" %}
{%- set no_config = true -%}
{%- set gcp = true -%}
{% endif %}
{% if context == "installing-restricted-networks-gcp-installer-provisioned" %}
{%- set custom_config = true -%}
{%- set gcp = true -%}
{% endif %}
{% if context == "installing-gcp-network-customizations" %}
{%- set custom_config = true -%}
{%- set gcp = true -%}
{% endif %}
{% if context == "installing-gcp-private" %}
{%- set custom_config = true -%}
{%- set gcp = true -%}
{% endif %}
{% if context == "installing-azure-customizations" %}
{%- set custom_config = true -%}
{%- set azure = true -%}
{%- set single_step = true -%}
{% endif %}
{% if context == "installing-azure-government-region" %}
{%- set custom_config = true -%}
{%- set azure = true -%}
{%- set azure_gov = true -%}
{% endif %}
{% if context == "installing-azure-vnet" %}
{%- set custom_config = true -%}
{%- set azure = true -%}
{%- set single_step = true -%}
{% endif %}
{% if context == "installing-azure-private" %}
{%- set custom_config = true -%}
{%- set azure = true -%}
{%- set azure_private = true -%}
{% endif %}
{% if context == "installing-azure-stack-hub-default" %}
{%- set custom_config = true -%}
{%- set ash = true -%}
{%- set single_step = true -%}
{% endif %}
{% if context == "installing-azure-stack-hub-network-customizations" %}
{%- set custom_config = true -%}
{%- set ash = true -%}
{%- set single_step = true -%}
{% endif %}
{% if context == "installing-openstack-installer-custom" %}
{%- set osp = true -%}
{%- set custom_config = true -%}
{%- set single_step = true -%}
{% endif %}
{% if context == "installing-openstack-installer-restricted" %}
{%- set osp = true -%}
{%- set custom_config = true -%}
{%- set single_step = true -%}
{% endif %}
{% if context == "installing-openstack-installer" %}
{%- set osp = true -%}
{% endif %}
{% if context == "installing-vsphere-installer-provisioned" %}
{%- set no_config = true -%}
{%- set vsphere = true -%}
{% endif %}
{% if context == "installing-vsphere-installer-provisioned-customizations" %}
{%- set custom_config = true -%}
{%- set vsphere = true -%}
{%- set single_step = true -%}
{% endif %}
{% if context == "installing-restricted-networks-installer-provisioned-vsphere" %}
{%- set custom_config = true -%}
{%- set vsphere = true -%}
{%- set single_step = true -%}
{% endif %}
{% if context == "installing-ibm-cloud-customizations" %}
{%- set custom_config = true -%}
{%- set ibm_cloud = true -%}
{%- set single_step = true -%}
{% endif %}
{% if context == "installing-ibm-cloud-vpc" %}
{%- set custom_config = true -%}
{%- set ibm_cloud = true -%}
{%- set single_step = true -%}
{% endif %}
{% if context == "installing-ibm-cloud-private" %}
{%- set custom_config = true -%}
{%- set ibm_cloud = true -%}
{%- set single_step = true -%}
{% endif %}
{% if context == "installing-ibm-cloud-restricted" %}
{%- set custom_config = true -%}
{%- set ibm_cloud_restricted = true -%}
{% endif %}
{% if context == "installing-nutanix-installer-provisioned" %}
{%- set custom_config = true -%}
{%- set nutanix = true -%}
{%- set single_step = true -%}
{% endif %}
{% if context == "installing-restricted-networks-nutanix-installer-provisioned" %}
{%- set custom_config = true -%}
{%- set nutanix = true -%}
{%- set single_step = true -%}
{% endif %}
{% if context == "installing-ibm-powervc-installer-custom" %}
{%- set custom_config = true -%}
{%- set single_step = true -%}
{% endif %}
{% if context == "installing-ibm-power-vs-customizations" %}
{%- set custom_config = true -%}
{%- set single_step = true -%}
{% endif %}
{% if context == "installing-ibm-power-vs-private-cluster" %}
{%- set custom_config = true -%}
{%- set single_step = true -%}
{% endif %}
{% if context == "installing-restricted-networks-ibm-power-vs" %}
{%- set custom_config = true -%}
{%- set single_step = true -%}
{% endif %}
{% if context == "installing-ibm-powervs-vpc" %}
{%- set custom_config = true -%}
{%- set single_step = true -%}
{% endif %}
{% if context == "installing-restricted-networks-azure-installer-provisioned" %}
{%- set custom_config = true -%}
{%- set azure = true -%}
{%- set single_step = true -%}
{% endif %}

{%- set _mod_docs_content_type = "PROCEDURE" %}
# Deploying the cluster {id="installation-launching-installer_{{ context }}"}

To deploy your {{ product_title }} cluster, you can initialize installation by running the `openshift-install create cluster` command from the directory that contains the installation program. The installation program provisions infrastructure and completes cluster setup. {._abstract}


:::important

You can run the `create cluster` command of the installation program only once, during initial installation.

:::


**Prerequisites**

{% if not (osp or vsphere or nutanix) %}
*   You have configured an account with the cloud platform that hosts your cluster.
{% endif %}

*   You have the {{ product_title }} installation program and the pull secret for your cluster.
{%- if ibm_cloud_restricted %}

    If the {{ op_system_first }} image is available locally, the host running the installation program does not require internet access.
{%- endif %}
{%- if azure %}
*   You have an Azure subscription ID and tenant ID.
{%- endif %}
{%- if azure_default %}
*   You have the application ID and password of a service principal.
{%- endif %}
{%- if azure_gov or azure_private %}
*   If you are installing the cluster using a service principal, you have its application ID and password.
*   If you are installing the cluster using a system-assigned managed identity, you have enabled it on the virtual machine that you will run the installation program from.
*   If you are installing the cluster using a user-assigned managed identity, you have met these prerequisites:
    *   You have its client ID.
    *   You have assigned it to the virtual machine that you will run the installation program from.
{%- endif %}
{%- if not azure %}
*   You have verified that the cloud provider account on your host has the correct permissions to deploy the cluster. An account with incorrect permissions causes the installation process to fail with an error message that displays the missing permissions.
{%- endif %}
{%- if vsphere %}
*   Optional: Before you create the cluster, you configured an external load balancer in place of the default load balancer.

    :::important

    You do not need to specify API and Ingress static addresses for your installation program. If you choose this configuration, you must take additional actions to define network targets that accept an IP address from each referenced vSphere subnet. See the section "Configuring a user-managed load balancer".
    
    :::

{%- endif %}

**Procedure**

{%- if gcp %}
1.  Remove any existing {{ gcp_short }} credentials that do not use the service account key
for the {{ gcp_short }} account that you configured for your cluster and that are stored in the
following locations:
    *   The `GOOGLE_CREDENTIALS`, `GOOGLE_CLOUD_KEYFILE_JSON`, or `GCLOUD_KEYFILE_JSON`
    environment variables
    *   The `~/.gcp/osServiceAccount.json` file
    *   The `gcloud cli` default credentials
{%- endif %}

{% if aws or azure_gov or azure_private or gcp or ibm_cloud_restricted or no_config %}
{% if azure_default %}
1.  Optional: If you have run the installation program on this computer before, and want to use an alternative service principal, go to the `~/.azure/` directory and delete the `osServicePrincipal.json` configuration file.

    Deleting this file prevents the installation program from automatically reusing subscription and authentication values from a previous installation.
{% endif %}
{% if azure_gov or azure_private %}
    . Optional: If you have run the installation program on this computer before, and want to use an alternative service principal or managed identity, go to the `~/.azure/` directory and delete the `osServicePrincipal.json` configuration file.
   \
    Deleting this file prevents the installation program from automatically reusing subscription and authentication values from a previous installation.
{% endif %}
{% if ibm_cloud_restricted %}
    . Export the `OPENSHIFT_INSTALL_OS_IMAGE_OVERRIDE` variable to specify the location of the {{ op_system_first }} image by running the following command:
    +
    ```terminal
    $ export OPENSHIFT_INSTALL_OS_IMAGE_OVERRIDE="<path_to_image>/rhcos-<image_version>-ibmcloud.x86_64.qcow2.gz"
    ```
{%- endif %}
1.  In the directory that contains the installation program, initialize the cluster deployment by running the following command:
{% endif %}
{% if single_step or azure_restricted %}
* In the directory that contains the installation program, initialize the cluster deployment by running the following command:
{% endif %}

```terminal
$ ./openshift-install create cluster --dir <installation_directory> \
    --log-level=info
```
*   For `<installation_directory>`, specify the
{%- if custom_config %}
location of your customized `./install-config.yaml` file.
{%- endif %}
{%- if no_config %}
directory name to store the files that the installation program creates.
{%- endif %}
*   To view different installation details, specify `warn`, `debug`, or
`error` instead of `info`.

{% if azure_gov or azure_private %}

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
*   If you are using a user-assigned managed identity,leave this value blank.

    :::note

    If previously not detected, the installation program creates an `osServicePrincipal.json` configuration file and stores this file in the `~/.azure/` directory on your computer. This ensures that the installation program can load the profile when it is creating an {{ product_title }} cluster on the target platform.
    
    :::

{% endif %}

{% if no_config %}

    When specifying the directory:
    *   Verify that the directory has the `execute` permission. This permission is required to run Terraform binaries under the installation directory.
    *   Use an empty directory. Some installation assets, such as bootstrap X.509 certificates, have short expiration intervals, therefore you must not reuse an installation directory. If you want to reuse individual files from another cluster installation, you can copy them into your directory. However, the file names for the installation assets might change between releases. Use caution when copying installation files from an earlier {{ product_title }} version.
        1.  Provide values at the prompts:
            1.  Optional: Select an SSH key to use to access your cluster machines.

                :::note

                For production {{ product_title }} clusters on which you want to perform installation debugging or disaster recovery, specify an SSH key that your `ssh-agent` process uses.
                
                :::

{% if aws %}
            1.  Select **aws** as the platform to target.
            1.  If you do not have an Amazon Web Services (AWS) profile stored on your computer, enter the AWS access key ID and secret access key for the user that you configured to run the
            installation program.

                :::note

                The AWS access key ID and secret access key are stored in `~/.aws/credentials` in the home directory of the current user on the installation host. You are prompted for the credentials by the installation program if the credentials for the exported profile are not present in the file. Any credentials that you provide to the installation program are stored in the file.
                
                :::

            1.  Select the AWS region to deploy the cluster to.
            1.  Select the base domain for the Route 53 service that you configured for your cluster.
{% endif %}
{% if azure %}
            1.  Select **azure** as the platform to target.

                If the installation program cannot locate the `osServicePrincipal.json` configuration file from a previous installation, you are prompted for Azure subscription and authentication values.
            1.  Specify the following Azure parameter values for your subscription and service principal:
                *   **azure subscription id**: Enter the subscription ID to use for the cluster.
                *   **azure tenant id**: Enter the tenant ID.
                *   **azure service principal client id**: Enter its application ID.
                *   **azure service principal client secret**: Enter its password.
            1.  Select the region to deploy the cluster to.
            1.  Select the base domain to deploy the cluster to. The base domain corresponds to the Azure DNS Zone that you created for your cluster.
{% endif %}
{% if gcp %}
            1.  Select **gcp** as the platform to target.
            1.  If you have not configured the service account key for your {{ gcp_short }} account on
            your host, you must obtain it from {{ gcp_short }} and paste the contents of the file
            or enter the absolute path to the file.
            1.  Select the project ID to provision the cluster in. The default value is
            specified by the service account that you configured.
            1.  Select the region to deploy the cluster to.
            1.  Select the base domain to deploy the cluster to. The base domain corresponds
            to the public DNS zone that you created for your cluster.
{% endif %}
{% if ibm_cloud %}
            1.  test
{% endif %}
{% if osp %}
            1.  Select **openstack** as the platform to target.
            1.  Specify the {{ rh_openstack_first }} external network name to use for installing the cluster.
            1.  Specify the Floating IP address to use for external access to the OpenShift API.
            1.  Specify the {{ rh_openstack }} flavor with at least 16 GB RAM to use for control plane
            and compute nodes.
            1.  Select the base domain to deploy the cluster to. All DNS records will be
            sub-domains of this base and will also include the cluster name.
{% endif %}
{% if vsphere %}
            1.  Select **vsphere** as the platform to target.
            1.  Specify the name of your vCenter instance.
            1.  Specify the user name and password for the vCenter account that has the required permissions to create the cluster.

                The installation program connects to your vCenter instance.

                :::important

                Some VMware vCenter Single Sign-On (SSO) environments with Active Directory (AD) integration might primarily require you to use the traditional login method, which requires the `<domain>\` construct.

                To ensure that vCenter account permission checks complete properly, consider using the User Principal Name (UPN) login method, such as `<username>@<fully_qualified_domainname>`.
                
                :::

            1.  Select the data center in your vCenter instance to connect to.
            1.  Select the default vCenter datastore to use.

                :::note

                Datastore and cluster names cannot exceed 60 characters; therefore, ensure the combined string length does not exceed the 60 character limit.
                
                :::

            1.  Select the vCenter cluster to install the {{ product_title }} cluster in. The installation program uses the root resource pool of the vSphere cluster as the default resource pool.
            1.  Select the network in the vCenter instance that contains the virtual IP addresses and DNS records that you configured.
            1.  Enter the virtual IP address that you configured for control plane API access.
            1.  Enter the virtual IP address that you configured for cluster ingress.
            1.  Enter the base domain. This base domain must be the same one that you used in the DNS records that you configured.
{%- endif %}
            1.  Enter a descriptive name for your cluster.
{%- if vsphere %}
            The cluster name must be the same one that you used in the DNS records that you configured.

                :::note

                Datastore and cluster names cannot exceed 60 characters; therefore, ensure the combined string length does not exceed the 60 character limit.
                
                :::

{%- endif %}
{%- if azure %}

                :::important

                All {{ azure_short }} resources that are available through public endpoints are subject to resource name restrictions, and you cannot create resources that use certain terms. For a list of terms that Azure restricts, see
                [Resolve errors for reserved resource names](https://learn.microsoft.com/en-us/azure/azure-resource-manager/troubleshooting/error-reserved-resource-name) in the {{ azure_short }} documentation.
                
                :::

{%- endif %}
{%- if gcp %}

                If you provide a name that is longer
                than 6 characters, only the first 6 characters will be used in the infrastructure
                ID that is generated from the cluster name.
{%- endif %}
{%- if not openshift_origin %}
            1.  Paste the {{ cluster_manager_url_pull }}.
{%- endif %}
{%- if openshift_origin %}
            1.  Paste the {{ cluster_manager_url_pull }}.
    *   If you do not have a {{ cluster_manager_url_pull }}, you can paste the pull secret another private registry.
    *   If you do not need the cluster to pull images from a private registry, you can paste `{"auths":{"fake":{"auth":"aWQ6cGFzcwo="}}}` as the pull secret.
{%- endif %}

{% if azure %}

        :::note

        If previously not detected, the installation program creates an `osServicePrincipal.json` configuration file and stores this file in the `~/.azure/` directory on your computer. This ensures that the installation program can load the profile when it is creating an {{ product_title }} cluster on the target platform.
        
        :::

{% endif %}

{% endif %}

{% if aws %}
    1.  Optional: Remove or disable the `AdministratorAccess` policy from the IAM
    account that you used to install the cluster.

        :::note

        The elevated permissions provided by the `AdministratorAccess` policy are required only during installation.
        
        :::

{% endif %}

{% if gcp %}
    1.  Optional: You can reduce the number of permissions for the service account that you used to install the cluster.
*   If you assigned the `Owner` role to your service account, you can remove that role and replace it with the `Viewer` role.
*   If you included the `Service Account Key Admin` role,
you can remove it.
{% endif %}

**Verification**

When the cluster deployment completes successfully:

*   The terminal displays directions for accessing your cluster, including a link to the web console and credentials for the `kubeadmin` user.
*   Credential information also outputs to `<installation_directory>/.openshift_install.log`.

    :::important

    Do not delete the installation program or the files that the installation program creates. Both are required to delete the cluster.
    
    :::

    ```terminal title="Example output"
    ...
    INFO Install complete!
    INFO To access the cluster as the system:admin user when using 'oc', run 'export KUBECONFIG=/home/myuser/install_dir/auth/kubeconfig'
    INFO Access the OpenShift web-console here: https://console-openshift-console.apps.mycluster.example.com
    INFO Login to the console with user: "kubeadmin", and password: "password"
    INFO Time elapsed: 36m22s
    ```

    :::important

    *   The Ignition config files that the installation program generates contain certificates that expire after 24 hours, which are then renewed at that time. If the cluster is shut down before renewing the certificates and the cluster is later restarted after the 24 hours have elapsed, the cluster automatically recovers the expired certificates. The exception is that you must manually approve the pending `node-bootstrapper` certificate signing requests (CSRs) to recover kubelet certificates. See the documentation for _Recovering from expired control plane certificates_ for more information.
    *   It is recommended that you use Ignition config files within 12 hours after they are generated because the 24-hour certificate rotates from 16 to 22 hours after the cluster is installed. By using the Ignition config files within 12 hours, you can avoid installation failure if the certificate update runs during installation.
    
    :::


{% if context == "installing-aws-private" %}
{%- set custom_config = "" -%}
{%- set aws = "" -%}
{% endif %}
{% if context == "installing-aws-customizations" %}
{%- set custom_config = "" -%}
{%- set aws = "" -%}
{% endif %}
{% if context == "installing-aws-china-region" %}
{%- set custom_config = "" -%}
{%- set aws = "" -%}
{% endif %}
{% if context == "installing-aws-government-region" %}
{%- set custom_config = "" -%}
{%- set aws = "" -%}
{% endif %}
{% if context == "installing-aws-secret-region" %}
{%- set custom_config = "" -%}
{%- set aws = "" -%}
{% endif %}
{% if context == "installing-aws-specialized-region" %}
{%- set custom_config = "" -%}
{%- set aws = "" -%}
{% endif %}
{% if context == "installing-aws-vpc" %}
{%- set custom_config = "" -%}
{%- set aws = "" -%}
{% endif %}
{% if context == "installing-restricted-networks-aws-installer-provisioned" %}
{%- set custom_config = "" -%}
{%- set aws = "" -%}
{% endif %}
{% if context == "installing-aws-default" %}
{%- set no_config = "" -%}
{%- set aws = "" -%}
{% endif %}
{% if context == "installing-aws-localzone" %}
{%- set custom_config = "" -%}
{%- set aws = "" -%}
{% endif %}
{% if context == "installing-aws-wavelength-zone" %}
{%- set custom_config = "" -%}
{%- set aws = "" -%}
{% endif %}
{% if context == "installing-aws-outposts-remote-workers" %}
{%- set custom_config = "" -%}
{%- set aws = "" -%}
{% endif %}
{% if context == "installing-azure-default" %}
{%- set no_config = "" -%}
{%- set azure = "" -%}
{%- set azure_default = "" -%}
{% endif %}
{% if context == "installing-gcp-customizations" %}
{%- set custom_config = "" -%}
{%- set gcp = "" -%}
{% endif %}
{% if context == "installing-gcp-vpc" %}
{%- set custom_config = "" -%}
{%- set gcp = "" -%}
{% endif %}
{% if context == "installing-gcp-shared-vpc" %}
{%- set custom_config = "" -%}
{%- set gcp = "" -%}
{% endif %}
{% if context == "installing-gcp-default" %}
{%- set no_config = "" -%}
{%- set gcp = "" -%}
{% endif %}
{% if context == "installing-restricted-networks-gcp-installer-provisioned" %}
{%- set custom_config = "" -%}
{%- set gcp = "" -%}
{% endif %}
{% if context == "installing-gcp-network-customizations" %}
{%- set custom_config = "" -%}
{%- set gcp = "" -%}
{% endif %}
{% if context == "installing-gcp-private" %}
{%- set custom_config = "" -%}
{%- set gcp = "" -%}
{% endif %}
{% if context == "installing-azure-customizations" %}
{%- set custom_config = "" -%}
{%- set azure = "" -%}
{%- set single_step = "" -%}
{% endif %}
{% if context == "installing-azure-government-region" %}
{%- set custom_config = "" -%}
{%- set azure = "" -%}
{%- set azure_gov = "" -%}
{% endif %}
{% if context == "installing-azure-vnet" %}
{%- set custom_config = "" -%}
{%- set azure = "" -%}
{%- set single_step = "" -%}
{% endif %}
{% if context == "installing-azure-private" %}
{%- set custom_config = "" -%}
{%- set azure = "" -%}
{%- set azure_private = "" -%}
{% endif %}
{% if context == "installing-azure-stack-hub-default" %}
{%- set custom_config = "" -%}
{%- set ash = "" -%}
{%- set single_step = "" -%}
{% endif %}
{% if context == "installing-azure-stack-hub-network-customizations" %}
{%- set custom_config = "" -%}
{%- set ash = "" -%}
{%- set single_step = "" -%}
{% endif %}
{% if context == "installing-openstack-installer-custom" %}
{%- set osp = "" -%}
{%- set custom_config = "" -%}
{%- set single_step = "" -%}
{% endif %}
{% if context == "installing-openstack-installer-restricted" %}
{%- set osp = "" -%}
{%- set custom_config = "" -%}
{%- set single_step = "" -%}
{% endif %}
{% if context == "installing-openstack-installer" %}
{%- set osp = "" -%}
{% endif %}
{% if context == "installing-vsphere-installer-provisioned" %}
{%- set no_config = "" -%}
{%- set vsphere = "" -%}
{% endif %}
{% if context == "installing-vsphere-installer-provisioned-customizations" %}
{%- set custom_config = "" -%}
{%- set vsphere = "" -%}
{%- set single_step = "" -%}
{% endif %}
{% if context == "installing-restricted-networks-installer-provisioned-vsphere" %}
{%- set custom_config = "" -%}
{%- set vsphere = "" -%}
{%- set single_step = "" -%}
{% endif %}
{% if context == "installing-ibm-cloud-customizations" %}
{%- set custom_config = "" -%}
{%- set ibm_cloud = "" -%}
{%- set single_step = "" -%}
{% endif %}
{% if context == "installing-ibm-cloud-vpc" %}
{%- set custom_config = "" -%}
{%- set ibm_cloud = "" -%}
{%- set single_step = "" -%}
{% endif %}
{% if context == "installing-ibm-cloud-private" %}
{%- set custom_config = "" -%}
{%- set ibm_cloud = "" -%}
{%- set single_step = "" -%}
{% endif %}
{% if context == "installing-ibm-cloud-restricted" %}
{%- set custom_config = "" -%}
{%- set ibm_cloud_restricted = "" -%}
{% endif %}
{% if context == "installing-nutanix-installer-provisioned" %}
{%- set custom_config = "" -%}
{%- set nutanix = "" -%}
{%- set single_step = "" -%}
{% endif %}
{% if context == "installing-restricted-networks-nutanix-installer-provisioned" %}
{%- set custom_config = "" -%}
{%- set nutanix = "" -%}
{%- set single_step = "" -%}
{% endif %}
{% if context == "installing-ibm-powervc-installer-custom" %}
{%- set custom_config = "" -%}
{%- set single_step = "" -%}
{% endif %}
{% if context == "installing-ibm-power-vs-customizations" %}
{%- set custom_config = "" -%}
{%- set single_step = "" -%}
{% endif %}
{% if context == "installing-ibm-power-vs-private-cluster" %}
{%- set custom_config = "" -%}
{%- set single_step = "" -%}
{% endif %}
{% if context == "installing-restricted-networks-ibm-power-vs" %}
{%- set custom_config = "" -%}
{%- set single_step = "" -%}
{% endif %}
{% if context == "installing-ibm-powervs-vpc" %}
{%- set custom_config = "" -%}
{%- set single_step = "" -%}
{% endif %}
{% if context == "installing-restricted-networks-azure-installer-provisioned" %}
{%- set custom_config = "" -%}
{%- set azure = "" -%}
{%- set single_step = "" -%}
{% endif %}