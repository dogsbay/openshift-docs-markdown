{%- set _mod_docs_content_type = "PROCEDURE" %}
# Using datastore URL {id="persistent-storage-csi-vsphere-encryption-datastore-url_{{ context }}"}

To encrypt persistent volumes by targeting a specific datastore, create a storage class that references an encryption-enabled storage policy and datastore URL. {._abstract}

**Procedure**

1.  Find out the name of the default storage policy in your datastore that supports encryption. 

    This is same policy that was used for encrypting your VMs. 
1.  Create a storage class that uses this storage policy:
    ```yaml
    kind: StorageClass
    apiVersion: storage.k8s.io/v1
    metadata:
     name: encryption
    provisioner: csi.vsphere.vmware.com
    parameters:
     storagePolicyName: <storage-policy-name>
     datastoreurl: "ds:///vmfs/volumes/vsan:522e875627d-b090c96b526bb79c/"
    ```

    `parameters.storagePolicyName` is the name of the default storage policy in your datastore that supports encryption.