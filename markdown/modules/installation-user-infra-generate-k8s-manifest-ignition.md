{% if context == "installing-aws-user-infra" %}
{%- set aws = true -%}
{%- set three_node_cluster = true -%}
{% endif %}
{% if context == "installing-restricted-networks-aws" %}
{%- set aws = true -%}
{%- set restricted = true -%}
{% endif %}
{% if context == "installing-azure-user-infra" %}
{%- set azure = true -%}
{%- set azure_user_infra = true -%}
{%- set three_node_cluster = true -%}
{% endif %}
{% if context == "installing-azure-stack-hub-user-infra" %}
{%- set ash = true -%}
{%- set azure_user_infra = true -%}
{% endif %}
{% if context == "installing-bare-metal" %}
{%- set baremetal = true -%}
{% endif %}
{% if context == "installing-restricted-networks-bare-metal" %}
{%- set baremetal_restricted = true -%}
{% endif %}
{% if context == "installing-gcp-user-infra" %}
{%- set gcp = true -%}
{%- set three_node_cluster = true -%}
{% endif %}
{% if context == "installing-gcp-user-infra-vpc" %}
{%- set gcp = true -%}
{%- set user_infra_vpc = true -%}
{% endif %}
{% if context == "installing-restricted-networks-gcp" %}
{%- set gcp = true -%}
{%- set restricted = true -%}
{% endif %}
{% if context == "installing-osp-user" %}
{%- set osp = true -%}
{% endif %}
{% if context == "installing-openstack-user" %}
{%- set osp = true -%}
{% endif %}
{% if context == "installing-openstack-user-sr-iov" %}
{%- set osp = true -%}
{% endif %}
{% if context == "installing-vsphere" %}
{%- set vsphere = true -%}
{%- set three_node_cluster = true -%}
{% endif %}
{% if context == "installing-vsphere-installer-provisioned-customizations" %}
{%- set vsphere = true -%}
{% endif %}
{% if context == "installing-restricted-networks-vsphere" %}
{%- set vsphere = true -%}
{%- set restricted = true -%}
{% endif %}
{% if context == "installing-platform-agnostic" %}
{%- set baremetal = true -%}
{% endif %}
{% if context == "installing-ibm-z" %}
{%- set ibm_z = true -%}
{% endif %}
{% if context == "installing-ibm-z-kvm" %}
{%- set ibm_z = true -%}
{% endif %}
{% if context == "installing-ibm-z-lpar" %}
{%- set ibm_z = true -%}
{% endif %}
{% if context == "installing-restricted-networks-ibm-z" %}
{%- set ibm_z = true -%}
{%- set restricted = true -%}
{% endif %}
{% if context == "installing-restricted-networks-ibm-z-kvm" %}
{%- set ibm_z = true -%}
{%- set restricted = true -%}
{% endif %}
{% if context == "installing-restricted-networks-ibm-z-lpar" %}
{%- set ibm_z = true -%}
{%- set restricted = true -%}
{% endif %}
{% if context == "installing-ibm-power" %}
{%- set ibm_power = true -%}
{% endif %}
{% if context == "installing-restricted-networks-ibm-power" %}
{%- set ibm_power = true -%}
{%- set restricted = true -%}
{% endif %}
{% if context == "installing-restricted-networks-azure-user-provisioned" %}
{%- set azure = true -%}
{%- set azure_user_infra = true -%}
{% endif %}

{%- set _mod_docs_content_type = "PROCEDURE" %}
# Creating the Kubernetes manifest and Ignition config files {id="installation-user-infra-generate-k8s-manifest-ignition_{{ context }}"}

Because you manually provision infrastructure, you must generate the Kubernetes manifest and Ignition config files that the cluster requires. {._abstract}

The installation program converts the installation configuration into Kubernetes manifests and then wraps them into Ignition configuration files. You use these Ignition files to configure the cluster machines.


:::important

*   The Ignition config files that the {{ product_title }} installation program generates contain certificates that expire after 24 hours, which the system then renews. If you shut down the cluster before the system renews the certificates and you later restart the cluster after the 24 hours have elapsed, the cluster automatically recovers the expired certificates. The exception is that you must manually approve the pending `node-bootstrapper` certificate signing requests (CSRs) to recover kubelet certificates. See the documentation for _Recovering from expired control plane certificates_ for more information.
*   Use Ignition config files within 12 hours after you generate them, because the 24-hour certificate rotates from 16 to 22 hours after you install the cluster. By using the Ignition config files within 12 hours, you can avoid installation failure if the certificate update runs during installation.

:::


{% if ibm_z %}

:::note

The installation program that generates the manifest and Ignition files is architecture specific. You can obtain it from the [client image mirror](https://mirror.openshift.com/pub/openshift-v4/s390x/clients/ocp/latest/). The Linux version of the installation program runs on s390x only. This installation program is also available as a macOS version.

:::

{% endif %}
{% if ibm_power %}

:::note

The installation program that generates the manifest and Ignition files is architecture specific. You can obtain it from the [client image mirror](https://mirror.openshift.com/pub/openshift-v4/ppc64le/clients/ocp/latest/). The Linux version of the installation program (without an architecture postfix) runs on ppc64le only. This installation program is also available as a macOS version.

:::

{% endif %}

{% if not gcp %}

**Prerequisites**

*   You obtained the {{ product_title }} installation program.
{%- if restricted or baremetal_restricted %}
For a restricted network installation, these files are on your mirror host.
{%- endif %}
*   You created the `install-config.yaml` installation configuration file.
{% endif %}

**Procedure**

1.  Change to the directory that contains the {{ product_title }} installation program and generate the Kubernetes manifests for the cluster:
    ```terminal
    $ ./openshift-install create manifests --dir <installation_directory>
    ```

    where:

    `<installation_directory>`
    :   Specifies the installation directory that contains the `install-config.yaml` file you created.

{% if aws or azure or ash or gcp %}
1.  Remove the Kubernetes manifest files that define the control plane machines:
    ```terminal
    $ rm -f <installation_directory>/openshift/99_openshift-cluster-api_master-machines-*.yaml
    ```

    By removing these files, you prevent the cluster from automatically generating control plane machines.
{% endif %}

{% if aws or ash or azure or gcp %}
1.  Remove the Kubernetes manifest files that define the control plane machine set:
    ```terminal
    $ rm -f <installation_directory>/openshift/99_openshift-machine-api_master-control-plane-machine-set.yaml
    ```
{% endif %}

{% if gcp %}
{% if not user_infra_vpc %}
1.  Optional: If you do not want the cluster to provision compute machines, remove the Kubernetes manifest files that define the worker machines:
{% endif %}
{% endif %}
{% if aws or azure or ash or user_infra_vpc %}
1.  Remove the Kubernetes manifest files that define the worker machines:
    {% endif %}
    {% if aws or azure or ash or gcp %}
    ```terminal
    $ rm -f <installation_directory>/openshift/99_openshift-cluster-api_worker-machineset-*.yaml
    ```
{%- if not user_infra_vpc %}

    :::important

    If you disabled the `MachineAPI` capability when installing a cluster on user-provisioned infrastructure, you must remove the Kubernetes manifest files that define the worker machines. Otherwise, your cluster fails to install.
    
    :::

{%- endif %}

    Because you create and manage the worker machines yourself, you do not need to initialize these machines.
{% endif %}

{% if osp or vsphere %}
1.  Remove the Kubernetes manifest files that define the control plane machines, compute machine sets, and control plane machine sets:
    ```terminal
    $ rm -f openshift/99_openshift-cluster-api_master-machines-*.yaml openshift/99_openshift-cluster-api_worker-machineset-*.yaml openshift/99_openshift-machine-api_master-control-plane-machine-set.yaml
    ```

    Because you create and manage these resources yourself, you do not have to initialize them. You can preserve the compute machine set files to create compute machines by using the machine API, but you must update references to them to match your environment.
{% endif %}
{% if baremetal or baremetal_restricted or ibm_z or ibm_power or three_node_cluster %}

    :::warning

    If you are installing a three-node cluster, skip the following step to allow the control plane nodes to be schedulable.
    
    :::


    :::important

    When you configure control plane nodes from the default unschedulable to schedulable, you require additional subscriptions because control plane nodes then become compute nodes.
    
    :::

{% endif %}
1.  Verify that the `mastersSchedulable` parameter in the `<installation_directory>/manifests/cluster-scheduler-02-config.yml` Kubernetes manifest file is set to `false`. This setting prevents pods from being scheduled on the control plane machines:
    1.  Open the `<installation_directory>/manifests/cluster-scheduler-02-config.yml` file.
    1.  Locate the `mastersSchedulable` parameter and verify that it is set to `false`.
    1.  Save and exit the file.

{% if gcp or aws or azure or ash %}
{% if not user_infra_vpc %}
1.  Optional: If you do not want [the Ingress Operator](https://github.com/openshift/cluster-ingress-operator) to create DNS records on your behalf, remove the `privateZone` and `publicZone` sections from the `<installation_directory>/manifests/cluster-dns-02-config.yml` DNS configuration file:
{% endif %}
{% if user_infra_vpc %}
1.  Remove the `privateZone` sections from the `<installation_directory>/manifests/cluster-dns-02-config.yml` DNS configuration file:
    {%- endif %}
    ```yaml
    apiVersion: config.openshift.io/v1
    kind: DNS
    metadata:
      creationTimestamp: null
      name: cluster
    spec:
      baseDomain: example.openshift.com
      privateZone:
        id: mycluster-100419-private-zone
{%- if not user_infra_vpc %}
      publicZone:
        id: example.openshift.com
{%- endif %}
    status: {}
    ```

    `spec.privateZone`: Remove this section completely.
{%- if not user_infra_vpc %}

    If you do so, you must add ingress DNS records manually in a later step.
{% endif %}
{% endif %}

{% if user_infra_vpc %}
1.  Configure the cloud provider for your VPC.
    1.  Open the `<installation_directory>/manifests/cloud-provider-config.yaml` file.
    1.  Add the `network-project-id` parameter and set its value to the ID of project that hosts the shared VPC network.
    1.  Add the `network-name` parameter and set its value to the name of the shared VPC network that hosts the {{ product_title }} cluster.
    1.  Replace the value of the `subnetwork-name` parameter with the value of the shared VPC subnet that hosts your compute machines.

        The contents of the `<installation_directory>/manifests/cloud-provider-config.yaml` resemble the following example:
        ```yaml
        config: |+
          [global]
          project-id      = example-project
          regional        = true
          multizone       = true
          node-tags       = opensh-ptzzx-master
          node-tags       = opensh-ptzzx-worker
          node-instance-prefix = opensh-ptzzx
          external-instance-groups-prefix = opensh-ptzzx
          network-project-id = example-shared-vpc
          network-name    = example-network
          subnetwork-name = example-worker-subnet
        ```
1.  If you deploy a cluster that is not on a private network, open the `<installation_directory>/manifests/cluster-ingress-default-ingresscontroller.yaml` file and replace the value of the `scope` parameter with `External`. The contents of the file resemble the following example:
    ```yaml
    apiVersion: operator.openshift.io/v1
    kind: IngressController
    metadata:
      creationTimestamp: null
      name: default
      namespace: openshift-ingress-operator
    spec:
      endpointPublishingStrategy:
        loadBalancer:
          scope: External
        type: LoadBalancerService
    status:
      availableReplicas: 0
      domain: ''
      selector: ''
    ```
{% endif %}

{% if ash %}
1.  Optional: If your Azure Stack Hub environment uses an internal certificate authority (CA), you must update the `.spec.trustedCA.name` field in the `<installation_directory>/manifests/cluster-proxy-01-config.yaml` file to use `user-ca-bundle`:
    ```yaml
    ...
    spec:
      trustedCA:
        name: user-ca-bundle
    ...
    ```

    Later, you must update your bootstrap ignition to include the CA.
{% endif %}

{% if azure_user_infra %}
1.  When you configure Azure on user-provisioned infrastructure, you must export some common variables defined in the manifest files to use later in the Azure Resource Manager (ARM) templates:
    1.  Export the infrastructure ID by using the following command:
        ```terminal
        $ export INFRA_ID=<infra_id>
        ```

        where:

        `<infra_id>`
        :   Specifies the {{ product_title }} cluster identifier (`INFRA_ID`) in the form of `<cluster_name>-<random_string>`. Most resources that the provided ARM templates create use this identifier as the base name. This is the value of the `.status.infrastructureName` attribute from the `manifests/cluster-infrastructure-02-config.yml` file.
    1.  Export the resource group by using the following command:
        ```terminal
        $ export RESOURCE_GROUP=<resource_group>
        ```

        where:

        `<resource_group>`
        :   Specifies the [resource group](https://docs.microsoft.com/en-us/azure/azure-resource-manager/management/overview#resource-groups) that contains all resources in this Azure deployment. The resource group name is also based on the `INFRA_ID`, in the form of `<cluster_name>-<random_string>-rg`. This is the value of the `.status.platformStatus.azure.resourceGroupName` attribute from the `manifests/cluster-infrastructure-02-config.yml` file.
{% endif %}

{% if ash %}
1.  Manually create your cloud credentials.
    1.  From the directory that contains the installation program, obtain details of the {{ product_title }} release image that your `openshift-install` binary is built to use:
        ```terminal
        $ openshift-install version
        ```
        ```text title="Example output"
        release image quay.io/openshift-release-dev/ocp-release:4.y.z-x86_64
        ```
    1.  Set a `$RELEASE_IMAGE` variable with the release image from your installation file by running the following command:
        ```terminal
        $ RELEASE_IMAGE=$(./openshift-install version | awk '/release image/ {print $3}')
        ```
    1.  Extract the list of `CredentialsRequest` custom resources (CRs) from the {{ product_title }} release image by running the following command:
        ```terminal
        $ oc adm release extract \
          --from=$RELEASE_IMAGE \
          --credentials-requests \
          --included \//
          --install-config=<path_to_directory_with_installation_configuration>/install-config.yaml \//
          --to=<path_to_directory_for_credentials_requests>
        ```

        where:

        `--included`
        :    Specifies to include only the manifests that your specific cluster configuration requires.

        `<path_to_directory_with_installation_configuration>`
        :   Specifies the location of the `install-config.yaml` file.

        `<path_to_directory_for_credentials_requests>`
        :   Specifies the path to the directory where you want to store the `CredentialsRequest` objects. If the specified directory does not exist, this command creates it.
        This command creates a YAML file for each `CredentialsRequest` object.
        ```yaml title="Sample CredentialsRequest object"
        apiVersion: cloudcredential.openshift.io/v1
        kind: CredentialsRequest
        metadata:
          labels:
            controller-tools.k8s.io: "1.0"
          name: openshift-image-registry-azure
          namespace: openshift-cloud-credential-operator
        spec:
          secretRef:
            name: installer-cloud-credentials
            namespace: openshift-image-registry
          providerSpec:
            apiVersion: cloudcredential.openshift.io/v1
            kind: AzureProviderSpec
            roleBindings:
            - role: Contributor
        ```
    1.  Create YAML files for secrets in the `openshift-install` manifests directory that you generated previously. Store the secrets by using the namespace and secret name defined in the `spec.secretRef` for each `CredentialsRequest` object. The format for the secret data varies for each cloud provider.
        ```yaml title="Sample secrets.yaml file"
        apiVersion: v1
        kind: Secret
        metadata:
            name: ${secret_name}
            namespace: ${secret_namespace}
        stringData:
          azure_subscription_id: ${subscription_id}
          azure_client_id: ${app_id}
          azure_client_secret: ${client_secret}
          azure_tenant_id: ${tenant_id}
          azure_resource_prefix: ${cluster_name}
          azure_resourcegroup: ${resource_group}
          azure_region: ${azure_region}
        ```
    1.  Create a `cco-configmap.yaml` file in the manifests directory with the Cloud Credential Operator (CCO) disabled:
        ```yaml title="Sample ConfigMap object"
        apiVersion: v1
        kind: ConfigMap
        metadata:
        name: cloud-credential-operator-config
        namespace: openshift-cloud-credential-operator
          annotations:
            release.openshift.io/create-only: "true"
        data:
          disabled: "true"
        ```
{% endif %}
1.  To create the Ignition configuration files, run the following command from the directory that contains the installation program:
    ```terminal
    $ ./openshift-install create ignition-configs --dir <installation_directory>
    ```

    where:

    `<installation_directory>`
    :   Specifies the same installation directory.
    The installation program creates Ignition config files for the bootstrap, control plane, and compute nodes in the installation directory. The program also creates the `kubeadmin-password` and `kubeconfig` files in the `./<installation_directory>/auth` directory:
    ```
    .
    ├── auth
    │   ├── kubeadmin-password
    │   └── kubeconfig
    ├── bootstrap.ign
    ├── master.ign
    ├── metadata.json
    └── worker.ign
    ```

{% if osp %}
1.  Export the metadata file’s `infraID` key as an environment variable:
    ```terminal
    $ export INFRA_ID=$(jq -r .infraID metadata.json)
    ```

    :::tip

    Extract the `infraID` key from `metadata.json` and use it as a prefix for all of the {{ rh_openstack }} resources that you create. By doing so, you avoid name conflicts when making multiple deployments in the same project.
{%- endif %}
    
    :::


{% if context == "installing-restricted-networks-aws" %}
{%- set aws = false -%}
{%- set restricted = false -%}
{% endif %}
{% if context == "installing-aws-user-infra" %}
{%- set aws = false -%}
{%- set three_node_cluster = false -%}
{% endif %}
{% if context == "installing-azure-user-infra" %}
{%- set azure = false -%}
{%- set azure_user_infra = false -%}
{%- set three_node_cluster = false -%}
{% endif %}
{% if context == "installing-azure-stack-hub-user-infra" %}
{%- set ash = false -%}
{%- set azure_user_infra = false -%}
{% endif %}
{% if context == "installing-gcp-user-infra" %}
{%- set gcp = false -%}
{%- set three_node_cluster = false -%}
{% endif %}
{% if context == "installing-gcp-user-infra-vpc" %}
{%- set gcp = false -%}
{%- set user_infra_vpc = false -%}
{% endif %}
{% if context == "installing-bare-metal" %}
{%- set baremetal = false -%}
{% endif %}
{% if context == "installing-restricted-networks-bare-metal" %}
{%- set baremetal_restricted = false -%}
{% endif %}
{% if context == "installing-restricted-networks-gcp" %}
{%- set gcp = false -%}
{%- set restricted = false -%}
{% endif %}
{% if context == "installing-osp-user" %}
{%- set osp = false -%}
{% endif %}
{% if context == "installing-openstack-user" %}
{%- set osp = false -%}
{% endif %}
{% if context == "installing-openstack-user-sr-iov" %}
{%- set osp = false -%}
{% endif %}
{% if context == "installing-vsphere" %}
{%- set vsphere = false -%}
{%- set three_node_cluster = false -%}
{% endif %}
{% if context == "installing-vsphere-installer-provisioned-customizations" %}
{%- set vsphere = false -%}
{% endif %}
{% if context == "installing-restricted-networks-vsphere" %}
{%- set vsphere = false -%}
{%- set restricted = false -%}
{% endif %}
{% if context == "installing-platform-agnostic" %}
{%- set baremetal = false -%}
{% endif %}
{% if context == "installing-ibm-z" %}
{%- set ibm_z = false -%}
{% endif %}
{% if context == "installing-ibm-z-kvm" %}
{%- set ibm_z = false -%}
{% endif %}
{% if context == "installing-ibm-z-lpar" %}
{%- set ibm_z = false -%}
{% endif %}
{% if context == "installing-restricted-networks-ibm-z" %}
{%- set ibm_z = false -%}
{%- set restricted = false -%}
{% endif %}
{% if context == "installing-restricted-networks-ibm-z-kvm" %}
{%- set ibm_z = false -%}
{%- set restricted = false -%}
{% endif %}
{% if context == "installing-restricted-networks-ibm-z-lpar" %}
{%- set ibm_z = false -%}
{%- set restricted = false -%}
{% endif %}
{% if context == "installing-ibm-power" %}
{%- set ibm_power = false -%}
{% endif %}
{% if context == "installing-restricted-networks-ibm-power" %}
{%- set ibm_power = false -%}
{%- set restricted = false -%}
{% endif %}
{% if context == "installing-restricted-networks-azure-user-provisioned" %}
{%- set azure = false -%}
{%- set azure_user_infra = false -%}
{% endif %}