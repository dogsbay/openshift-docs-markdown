{%- set _mod_docs_content_type = "PROCEDURE" %}
# Creating vSphere storage topology without an infra topology {id="persistent-storage-csi-vsphere-top-aware-infra-top_{{ context }}"}

To configure topology-aware storage provisioning without using the `infrastructure` object, define vCenter categories and tags, then configure the `ClusterCSIDriver` object to recognize topology zones and regions. {._abstract}


:::note

{{ product_title }} recommends using the infrastructure object for specifying failure domains in a topology aware setup. Specifying failure domains in the infrastructure object and specify topology-categories in the `ClusterCSIDriver` object at the same time is an unsupported operation.

:::


**Procedure**

1.  In the VMware vCenter vSphere client GUI, define appropriate zone and region categories and tags.

    While vSphere allows you to create categories with any arbitrary name, {{ product_title }} strongly recommends use of `openshift-region` and `openshift-zone` names for defining topology.

    For more information about vSphere categories and tags, see the "VMware vCenter documentation".
1.  To allow the container storage interface (CSI) driver to detect this topology, edit the `clusterCSIDriver` object YAML file `driverConfig` section:
    *   Specify the `openshift-zone` and `openshift-region` categories that you created earlier.
    *   Set `driverType` to `vSphere`.
        ```terminal
        ~ $ oc edit clustercsidriver csi.vsphere.vmware.com -o yaml
        ```
        ```terminal title="Example output"
        apiVersion: operator.openshift.io/v1
        kind: ClusterCSIDriver
        metadata:
          name: csi.vsphere.vmware.com
        spec:
          logLevel: Normal
          managementState: Managed
          observedConfig: null
          operatorLogLevel: Normal
          unsupportedConfigOverrides: null
          driverConfig:
            driverType: vSphere
              vSphere:
                topologyCategories:
                - openshift-zone
                - openshift-region
        ```
        *   `spec.driverConfig.driverType`: Ensure that `driverType` is set to `vSphere`.
        *   `spec.driverConfig.driverType.vSphere.topologyCategories`: `openshift-zone` and `openshift-region` categories created earlier in vCenter.
1.  Verify that `CSINode` object has topology keys by running the following commands:
    ```terminal
    ~ $ oc get csinode
    ```
    ```terminal title="Example output"
    NAME DRIVERS AGE
    co8-4s88d-infra-2m5vd 1 27m
    co8-4s88d-master-0 1 70m
    co8-4s88d-master-1 1 70m
    co8-4s88d-master-2 1 70m
    co8-4s88d-worker-j2hmg 1 47m
    co8-4s88d-worker-mbb46 1 47m
    co8-4s88d-worker-zlk7d 1 47m
    ```
    ```terminal
    ~ $ oc get csinode co8-4s88d-worker-j2hmg -o yaml
    ```
    ```terminal title="Example output"
    ...
    spec:
      drivers:
      - allocatable:
          count: 59
      name: csi-vsphere.vmware.com
      nodeID: co8-4s88d-worker-j2hmg
      topologyKeys: 
      - topology.csi.vmware.com/openshift-zone
      - topology.csi.vmware.com/openshift-region
    ```

    `spec.topologyKeys` lists the topology keys from vSphere `openshift-zone` and `openshift-region` categories.

    :::note

    `CSINode` objects might take some time to receive updated topology information. After the driver is updated, `CSINode` objects should have topology keys in them.
    
    :::

1.  Create a tag to assign to datastores across failure domains:

    When an {{ product_title }} spans more than one failure domain, the datastore might not be shared across those failure domains, which is where topology-aware provisioning of persistent volumes (PVs) is useful.
    1.  In vCenter, create a category for tagging the datastores. For example, `openshift-zonal-datastore-cat`. You can use any other category name, provided the category uniquely is used for tagging datastores participating in {{ product_title }} cluster. Also, ensure that `StoragePod`, `Datastore`, and `Folder` are selected as Associable Entities for the created category.
    1.  In vCenter, create a tag that uses the previously created category. This example uses the tag name `openshift-zonal-datastore`.
    1.  Assign the previously created tag (in this example `openshift-zonal-datastore`) to each datastore in a failure domain that would be considered for dynamic provisioning.

        :::note

        You can use any names you like for categories and tags. The names used in this example are provided as recommendations. Ensure that the tags and categories that you define uniquely identify only datastores that are shared with all hosts in the {{ product_title }} cluster.
        
        :::

1.  Create a storage policy that targets the tag-based datastores in each failure domain:
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