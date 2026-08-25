{%- set _mod_docs_content_type = "PROCEDURE" %}
# Configuring the Image Registry Operator to use CephFS storage with Red Hat OpenShift Data Foundation {id="registry-configuring-registry-storage-rhodf-cephfs_{{ context }}"}

{{ rh_storage_first }} integrates multiple storage types that you can use with the {{ product_registry }}: {._abstract}

*   Ceph, a shared and distributed file system and on-premise object storage
*   NooBaa, providing a Multicloud Object Gateway

Use the following procedure to configure the image registry to use CephFS storage.


:::note

CephFS uses persistent volume claim (PVC) storage. It is not recommended to use PVCs for image registry storage if there are other options are available, such as Ceph RGW or Noobaa.

:::


**Prerequisites**

*   You have access to the cluster as a user with the `cluster-admin` role.
*   You have access to the {{ product_title }} web console.
*   You installed the `oc` CLI.
*   You installed the [{{ rh_storage }} Operator](https://access.redhat.com/documentation/en-us/red_hat_openshift_data_foundation/latest) to provide object storage and CephFS file storage.

**Procedure**

1.  Create a PVC to use the `cephfs` storage class. For example:
    ```terminal
    cat <<EOF | oc apply -f -
    apiVersion: v1
    kind: PersistentVolumeClaim
    metadata:
     name: registry-storage-pvc
     namespace: openshift-image-registry
    spec:
     accessModes:
     - ReadWriteMany
     resources:
       requests:
         storage: 100Gi
     storageClassName: ocs-storagecluster-cephfs
    EOF
    ```
1.  Configure the image registry to use the CephFS file system storage by entering the following command:
    ```terminal
    $ oc patch config.image/cluster -p '{"spec":{"managementState":"Managed","replicas":2,"storage":{"managementState":"Unmanaged","pvc":{"claim":"registry-storage-pvc"}}}}' --type=merge
    ```