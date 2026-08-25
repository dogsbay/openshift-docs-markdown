{%- set _mod_docs_content_type = "PROCEDURE" %}
# Provisioning local volumes without the Local Storage Operator {id="local-create-cr-manual_{{ context }}"}

Provision local volumes manually by defining `PersistentVolume` objects without using the Local Storage Operator (LSO), though this approach includes risk of potential data leaks and the operator is recommended for automating device lifecycle. {._abstract}


:::important

Manual provisioning of persistent volumes (PVs) includes the risk of potential data leaks across PV reuse when persistent volume claims (PVCs) are deleted.
The Local Storage Operator is recommended for automating the life cycle of devices when provisioning local PVs.

:::


**Prerequisites**

*   Local disks are attached to the {{ product_title }} nodes.

**Procedure**

1.  Define the PV. Create a file, such as `example-pv-filesystem.yaml` or `example-pv-block.yaml`, with the `PersistentVolume` object definition. This resource must define the nodes and paths to the local volumes.

    :::note

    Do not use different storage class names for the same device. Doing so creates multiple PVs.
    
    :::

    ```yaml title="Example-pv-filesystem.yaml"
    apiVersion: v1
    kind: PersistentVolume
    metadata:
      name: example-pv-filesystem
    spec:
      capacity:
        storage: 100Gi
      volumeMode: Filesystem
      accessModes:
      - ReadWriteOnce
      persistentVolumeReclaimPolicy: Delete
      storageClassName: local-sc 
      local:
        path: /dev/xvdf
      nodeAffinity:
        required:
          nodeSelectorTerms:
          - matchExpressions:
            - key: kubernetes.io/hostname
              operator: In
              values:
              - example-node
    ```
    *   `spec.volumeMode`: Specifies the volume mode, either `Filesystem` or `Block`, that defines the type of PVs.
    *   `spec.storageClassName`: Specifies the name of the storage class to use when creating PV resources. Use a storage class that uniquely identifies this set of PVs.
    *   `spec.local.path`: Specifies the path containing a list of local storage devices to choose from, or a directory. You can only specify a directory with `Filesystem` `volumeMode`.

        :::note

        A raw block volume (`volumeMode: block`) is not formatted with a file system. Use this mode only if any application running on the pod can use raw block devices.
        
        :::

        ```yaml title="Example-pv-block.yaml"
        apiVersion: v1
        kind: PersistentVolume
        metadata:
          name: example-pv-block
        spec:
          capacity:
            storage: 100Gi
          volumeMode: Block
          accessModes:
          - ReadWriteOnce
          persistentVolumeReclaimPolicy: Delete
          storageClassName: local-sc
          local:
            path: /dev/xvdf
          nodeAffinity:
            required:
              nodeSelectorTerms:
              - matchExpressions:
                - key: kubernetes.io/hostname
                  operator: In
                  values:
                  - example-node
        ```
    *   spe`c.volumeMode`: Specifies the volume mode, either `Filesystem` or `Block`, that defines the type of PVs.
    *   `spec.storageClassName`: Specifies the name of the storage class to use when creating PV resources. Be sure to use a storage class that uniquely identifies this set of PVs.
    *   `spec.local.path`: Specifies the path containing a list of local storage devices to choose from.
1.  Specifying the file that you just created, create the PV resource in your {{ product_title }} cluster by running the following command:
    ```terminal
    $ oc create -f <example-pv>.yaml
    ```
1.  Verify that the local PV was created:
    ```terminal
    $ oc get pv
    ```
    ```terminal title="Example output"
    NAME                    CAPACITY   ACCESS MODES   RECLAIM POLICY   STATUS      CLAIM                STORAGECLASS    REASON   AGE
    example-pv-filesystem   100Gi      RWO            Delete           Available                        local-sc            3m47s
    example-pv1             1Gi        RWO            Delete           Bound       local-storage/pvc1   local-sc            12h
    example-pv2             1Gi        RWO            Delete           Bound       local-storage/pvc2   local-sc            12h
    example-pv3             1Gi        RWO            Delete           Bound       local-storage/pvc3   local-sc            12h
    ```