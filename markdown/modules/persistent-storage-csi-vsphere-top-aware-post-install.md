{%- set _mod_docs_content_type = "PROCEDURE" %}
# Creating vSphere storage topology postinstallation {id="persistent-storage-csi-vsphere-top-aware-post-install_{{ context }}"}

To enable topology-aware storage provisioning after cluster installation, configure vCenter tags, create failure domains, and define storage classes that target datastores in specific zones and regions. {._abstract}

**Procedure**

1.  In the VMware vCenter vSphere client GUI, define appropriate zone and region categories and tags.

    While vSphere allows you to create categories with any arbitrary name, {{ product_title }} strongly recommends use of `openshift-region` and `openshift-zone` names for defining topology categories.

    For more information about vSphere categories and tags, see the "VMware vCenter documentation".
1.  In {{ product_title }}, create failure domains. For more information, see "Specifying multiple regions and zones for your cluster on vSphere".
1.  Create a tag to assign to datastores across failure domains:

    When an {{ product_title }} spans more than one failure domain, the datastore might not be shared across those failure domains, which is where topology-aware provisioning of persistent volumes (PVs) is useful. 
    1.  In vCenter, create a category for tagging the datastores. For example, `openshift-zonal-datastore-cat`. You can use any other category name, provided the category uniquely is used for tagging datastores participating in {{ product_title }} cluster. Also, ensure that `StoragePod`, `Datastore`, and `Folder` are selected as Associable Entities for the created category. 
    1.  In vCenter, create a tag that uses the previously created category. This example uses the tag name `openshift-zonal-datastore`.
    1.  Assign the previously created tag (in this example `openshift-zonal-datastore`) to each datastore in a failure domain that would be considered for dynamic provisioning.

        :::note

        You can use any names you like for datastore categories and tags. The names used in this example are provided as recommendations. Ensure that the tags and categories that you define uniquely identify only datastores that are shared with all hosts in the {{ product_title }} cluster.
        
        :::

1.  As needed, create a storage policy that targets the tag-based datastores in each failure domain:
    1.  In vCenter, from the main menu, click **Policies and Profiles**.
    1.  On the **Policies and Profiles** page, in the navigation pane, click **VM Storage Policies**.
    1.  Click **CREATE**.
    1.  Type a name for the storage policy.
    1.  For the rules, choose Tag Placement rules and select the tag and category that targets the desired datastores (in this example, the `openshift-zonal-datastore` tag).

        The datastores are listed in the storage compatibility table.
1.  Create a new storage class that uses the new zoned storage policy:
    1.  Click **Storage** > **StorageClasses**.
    1.  On the **StorageClasses** page, click **Create StorageClass**.
    1.  Type a name for the new storage class in **Name**.
    1.  Under **Provisioner**, select **csi.vsphere.vmware.com**. 
    1.  Under **Additional parameters**, for the StoragePolicyName parameter, set **Value** to the name of the new zoned storage policy that you created earlier.
    1.  Click **Create**.
        ```yaml title="Example output"
        kind: StorageClass
        apiVersion: storage.k8s.io/v1
        metadata:
          name: zoned-sc
        provisioner: csi.vsphere.vmware.com
        parameters:
          StoragePolicyName: zoned-storage-policy
        reclaimPolicy: Delete
        allowVolumeExpansion: true
        volumeBindingMode: WaitForFirstConsumer
        ```
        *   `metadata.name`: New topology aware storage class name.
        *   `parameters.StoragePolicyName`: Specify zoned storage policy.

            :::note

            You can also create the storage class by editing the preceding YAML file and running the command `oc create -f $FILE`.
            
            :::