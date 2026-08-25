{%- set _mod_docs_content_type = "PROCEDURE" %}
# Creating machines on Ephemeral OS disks by using compute machine sets {id="machineset-creating-azure-ephemeral-os_{{ context }}"}

To improve performance and reduce storage costs, you can host the OS disk directly on the local storage of the virtual machines (VMs) rather than on remote {{ azure_first }} Storage. {._abstract}

You launch machines on Ephemeral OS disks on {{ azure_short }} by editing your compute machine set YAML file.

**Prerequisites**

*   Have an existing {{ azure_short }} cluster.

**Procedure**

1.  Edit the custom resource (CR) by running the following command:
    ```terminal
    $ oc edit machineset <machine-set-name>
    ```

    where `<machine-set-name>` is the compute machine set that you want to provision machines on Ephemeral OS disks.
1.  Add the following to the `providerSpec` field:
    ```yaml
    providerSpec:
      value:
        ...
        osDisk:
           ...
           diskSettings:
             ephemeralStorageLocation: Local
           cachingType: ReadOnly
           managedDisk:
             storageAccountType: Standard_LRS
           ...
    ```

    where:

    `providerSpec.value.osDisk.diskSettings`, `providerSpec.value.osDisk.diskSettings.ephemeralStorageLocation`, and `providerSpec.value.osDisk.cachingType`
    :   Enables the use of Ephemeral OS disks.

    `providerSpec.value.osDisk.managedDisk.storageAccountType`
    :   Ephemeral OS disks are only supported for VMs or scale set instances that use the Standard LRS storage account type.

    :::important

    The implementation of Ephemeral OS disk support in {{ product_title }} only supports the `CacheDisk` placement type. Do not change the `placement` configuration setting.
    
    :::

1.  Create a compute machine set using the updated configuration:
    ```terminal
    $ oc create -f <machine-set-config>.yaml
    ```

**Verification**

*   On the {{ azure_short }} portal, review the **Overview** page for a machine deployed by the compute machine set, and verify that the `Ephemeral OS disk` field is set to `OS cache placement`.