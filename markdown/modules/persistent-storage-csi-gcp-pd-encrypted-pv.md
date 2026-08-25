{%- set _mod_docs_content_type = "PROCEDURE" %}
# Creating a custom-encrypted persistent volume {id="persistent-storage-csi-gcp-pd-encrypted-pv_{{ context }}"}

To enhance data security beyond default encryption, create persistent volumes with customer-managed encryption keys (CMEK) that use Google Cloud Key Management Service for encryption control. {._abstract}

When you create a `PersistentVolumeClaim` object, {{ product_title }} provisions a new persistent volume (PV) and creates a `PersistentVolume` object. You can add a custom encryption key in Google Cloud Platform (GCP) to protect a PV in your cluster by encrypting the newly created PV.

For encryption, the newly attached PV that you create uses customer-managed encryption keys (CMEK) on a cluster by using a new or existing Google Cloud Key Management Service (KMS) key.

**Prerequisites**

*   You are logged in to a running {{ product_title }} cluster.
*   You have created a Cloud KMS key ring and key version.

For more information about CMEK and Cloud KMS resources, see Google Cloud documentation "Using customer-managed encryption keys (CMEK)".

**Procedure**

1.  Create a storage class with the Cloud KMS key. The following example enables dynamic provisioning of encrypted volumes:
    ```yaml title="Example"
    apiVersion: storage.k8s.io/v1
    kind: StorageClass
    metadata:
      name: csi-gce-pd-cmek
    provisioner: pd.csi.storage.gke.io
    volumeBindingMode: "WaitForFirstConsumer"
    allowVolumeExpansion: true
    parameters:
      type: pd-standard
      disk-encryption-kms-key: projects/<key-project-id>/locations/<location>/keyRings/<key-ring>/cryptoKeys/<key>
    ```

    The `parameters.disk-encryption-kms-key` field must be the resource identifier for the key that will be used to encrypt new disks. Values are case-sensitive. For more information about providing key ID values, see Google Cloud documentation "Retrieving a resource’s ID" and "Getting a Cloud KMS resource ID".

    :::note

    You cannot add the `disk-encryption-kms-key` parameter to an existing storage class. However, you can delete the storage class and re-create it with the same name and a different set of parameters. If you do this, the provisioner of the existing class must be `pd.csi.storage.gke.io`.
    
    :::

1.  Deploy the storage class on your {{ product_title }} cluster by using the `oc` command:
    ```terminal
    $ oc describe storageclass csi-gce-pd-cmek
    ```
    ```terminal title="Example output"
    Name:                  csi-gce-pd-cmek
    IsDefaultClass:        No
    Annotations:           None
    Provisioner:           pd.csi.storage.gke.io
    Parameters:            disk-encryption-kms-key=projects/key-project-id/locations/location/keyRings/ring-name/cryptoKeys/key-name,type=pd-standard
    AllowVolumeExpansion:  true
    MountOptions:          none
    ReclaimPolicy:         Delete
    VolumeBindingMode:     WaitForFirstConsumer
    Events:                none
    ```
1.  Create a file named `pvc.yaml` that matches the name of your storage class object that you created in the previous step:
    ```yaml
    kind: PersistentVolumeClaim
    apiVersion: v1
    metadata:
      name: podpvc
    spec:
      accessModes:
        - ReadWriteOnce
      storageClassName: csi-gce-pd-cmek
      resources:
        requests:
          storage: 6Gi
    ```

    :::note

    If you marked the new storage class as default, you can omit the `storageClassName` field.
    
    :::

1.  Apply the PVC on your cluster:
    ```terminal
    $ oc apply -f pvc.yaml
    ```
1.  Get the status of your PVC and verify that it is created and bound to a newly provisioned PV:
    ```terminal
    $ oc get pvc
    ```
    ```terminal title="Example output"
    NAME      STATUS    VOLUME                                     CAPACITY   ACCESS MODES   STORAGECLASS     AGE
    podpvc    Bound     pvc-e36abf50-84f3-11e8-8538-42010a800002   10Gi       RWO            csi-gce-pd-cmek  9s
    ```

    :::note

    If your storage class has the `volumeBindingMode` field set to `WaitForFirstConsumer`, you must create a pod to use the PVC before you can verify it.
    
    :::


    Your CMEK-protected PV is now ready to use with your {{ product_title }} cluster.