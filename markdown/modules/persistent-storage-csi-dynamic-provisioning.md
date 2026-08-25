{%- set _mod_docs_content_type = "PROCEDURE" %}
# Dynamic provisioning {id="csi-dynamic-provisioning_{{ context }}"}

Dynamic provisioning creates persistent volumes on-demand from storage class configurations. Container Storage Interface (CSI) drivers support specific parameters determining behavior. Create a default storage class to enable provisioning for claims without a specified class. {._abstract}

Dynamic provisioning of persistent storage depends on the capabilities of the CSI driver and underlying storage back end. The provider of the CSI driver should document how to create a storage class in {{ product_title }} and the parameters available for configuration.

The created storage class can be configured to enable dynamic provisioning.

**Procedure**

*   Create a default storage class that ensures all PVCs that do not require any special storage class are provisioned by the installed CSI driver.
    ```shell
    # oc create -f - << EOF
    apiVersion: storage.k8s.io/v1
    kind: StorageClass
    metadata:
      name: <storage-class>
      annotations:
        storageclass.kubernetes.io/is-default-class: "true"
    provisioner: <provisioner-name>
    parameters:
      csi.storage.k8s.io/fstype: xfs
    EOF
    ```
*   `metadata.name`: Specifies the name of the storage class that will be created.
*   `provisioner`: Specifies the name of the CSI driver that has been installed.
*   `parameters.csi.storage.k8s.io/fstype`: The vSphere CSI driver supports all of the file systems supported by the underlying Red Hat Core operating system release, including XFS and Ext4.