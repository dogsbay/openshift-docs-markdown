{%- set _mod_docs_content_type = "PROCEDURE" %}
# Optional: Preparing a private Microsoft Azure cluster for a private image registry {id="installing-private-image-registry-private-azure"}

By installing a private image registry on a private Microsoft Azure cluster, you can create private storage endpoints. {._abstract}

Private storage endpoints disable public facing endpoints to the registry’s storage account, adding an extra layer of security to your {{ product_title }} deployment.


:::important

Do not install a private image registry on {{ azure_first }} Red&#160;Hat OpenShift (ARO), because the endpoint can put your {{ azure_first }} Red&#160;Hat OpenShift cluster in an unrecoverable state.

:::


Use the following guide to prepare your private Microsoft Azure cluster for installation with a private image registry.

**Prerequisites**

*   You have access to an {{ product_title }} account with cluster administrator access.
*   You have installed the OpenShift CLI (oc).
*   You have prepared an `install-config.yaml` that includes the following information:
    *   The `publish` field is set to `Internal`
*   You have set the permissions for creating a private storage endpoint. For more information, see "Azure permissions for installer-provisioned infrastructure".

**Procedure**

1.  If you have not previously created installation manifest files, do so by running the following command:
    ```terminal
    $ ./openshift-install create manifests --dir <installation_directory>
    ```

    This command displays the following messages:
    ```terminal title="Example output"
    INFO Consuming Install Config from target directory
    INFO Manifests created in: <installation_directory>/manifests and <installation_directory>/openshift
    ```
1.  Create an image registry configuration object and pass in the `networkResourceGroupName`, `subnetName`, and `vnetName` provided by Microsoft Azure. For example:
    ```terminal
    $ touch imageregistry-config.yaml
    ```
    ```yaml
    apiVersion: imageregistry.operator.openshift.io/v1
    kind: Config
    metadata:
      name: cluster
    spec:
      managementState: "Managed"
      replicas: 2
      rolloutStrategy: RollingUpdate
      storage:
        azure:
          networkAccess:
            internal:
              networkResourceGroupName: <vnet_resource_group>
              subnetName: <subnet_name>
              vnetName: <vnet_name>
            type: Internal 
    ```

    where:

    `spec.storage.azure.networkAccess.internal.networkResourceGroupName`
    :   Specifies the resource group name that contains the existing virtual network (VNet), if you have an existing VNet and subnet setup. This field is optional.


`spec.storage.azure.networkAccess.internal.subnetName`
:   Specifies the name of the existing compute subnet within the specified resource group, if you have an existing VNet and subnet setup. This field is optional.


`spec.storage.azure.networkAccess.internal.vnetName`
:   Specifies the name of the existing virtual network (VNet) in the specified resource group, if you have an existing VNet and subnet setup. This field is optional.

    :::note

    The `imageregistry-config.yaml` file is consumed during the installation process. If desired, you must back it up before installation.
    
    :::


1.  Move the `imageregistry-config.yaml` file to the `<installation_directory/manifests>` folder by running the following command:
    ```terminal
    $ mv imageregistry-config.yaml <installation_directory/manifests/>
    ```

**Next steps**

*   After you have moved the `imageregistry-config.yaml` file to the `<installation_directory/manifests>` folder and set the required permissions, proceed to "Deploying the cluster".