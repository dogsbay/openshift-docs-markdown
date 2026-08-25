{%- set _mod_docs_content_type = "PROCEDURE" %}
# Customizing Manila share access rules {id="persistent-storage-csi-manila-share-access-rules_{{ context }}"}

To improve storage security by controlling which clients can mount volumes, create custom Manila storage classes that limit access to specific IP addresses or subnets. {._abstract}

By default, {{ product_title }} creates Manila storage classes that provide access to all IPv4 clients. To limit client access, you can define custom storage classes that use specific client IP addresses or subnets by using the `nfs-ShareClient` parameter.


:::important

When using custom storage classes with restricted access rules, ensure that:

*   The specified IP addresses or subnets include all {{ product_title }} nodes that need to access the storage.
*   The Manila service in {{ rh_openstack }} supports the share type specified in the storage class.
*   Network connectivity exists between the allowed clients and the Manila share servers.

:::


**Prerequisites**

*   {{ rh_openstack_first }} is deployed with appropriate Manila share infrastructure.
*   Access to a cluster with administrator privileges.

**Procedure**

1.  Create a YAML file for your custom storage class based on the following example:
    ```yaml title="Example custom storage class file"
    apiVersion: storage.k8s.io/v1
    kind: StorageClass
    metadata:
      name: csi-manila-gold-restricted
    provisioner: manila.csi.openstack.org
    parameters:
      type: gold
      nfs-ShareClient: "10.0.0.0/24,192.168.1.100"
      csi.storage.k8s.io/provisioner-secret-name: manila-csi-secret
      csi.storage.k8s.io/provisioner-secret-namespace: openshift-manila-csi-driver
      csi.storage.k8s.io/controller-expand-secret-name: manila-csi-secret
      csi.storage.k8s.io/controller-expand-secret-namespace: openshift-manila-csi-driver
      csi.storage.k8s.io/node-stage-secret-name: manila-csi-secret
      csi.storage.k8s.io/node-stage-secret-namespace: openshift-manila-csi-driver
      csi.storage.k8s.io/node-publish-secret-name: manila-csi-secret
      csi.storage.k8s.io/node-publish-secret-namespace: openshift-manila-csi-driver
    allowVolumeExpansion: true
    ```
    *   `metadata.name`: Specifies a descriptive name for your custom storage class.
    *   `parameters.type`: Specifies the Manila share type. This type must match an existing share type in your {{ rh_openstack }} environment.
    *   `parameters.nfs.ShareClient`: Comma-separated list of IP addresses or CIDR subnets allowed to access the NFS shares. The `nfs-ShareClient` parameter accepts various formats:
        *   Single IP address: `192.168.1.100`
        *   CIDR subnet: `10.0.0.0/24`
        *   Multiple entries: `10.0.0.0/24,192.168.1.100,172.16.0.0/16`

            Ensure that the specified IP addresses or subnets include the {{ product_title }} cluster nodes to allow proper mounting of the persistent volumes.

            In this example, access is restricted to the `10.0.0.0/24` subnet, and the specific IP address is `192.168.1.100`.
1.  Apply the storage class from the file by running the following command:
    ```terminal
    $ oc apply -f custom-manila-storageclass.yaml
    ```
1.  Verify that the storage class was created by running the following command:
    ```terminal
    $ oc get storageclass csi-manila-gold-restricted
    ```
    ```terminal title="Example output"
    NAME                 		    PROVISIONER                RECLAIMPOLICY   VOLUMEBINDINGMODE   ALLOWVOLUMEEXPANSION   AGE
    csi-manila-gold-restricted	manila.csi.openstack.org   Delete          Immediate           true                   43m
    ```
1.  Create a persistent volume claim (PVC) that uses the custom storage class based on the following example:
    ```yaml title="Example PVC file"
    apiVersion: v1
    kind: PersistentVolumeClaim
    metadata:
      name: pvc-manila-restricted
    spec:
      accessModes:
        - ReadWriteMany
      resources:
        requests:
          storage: 10Gi
      storageClassName: csi-manila-gold-restricted
    ```

    `spec.storageClassName` is the name of your custom storage class that has restricted access. In this example, the name is `csi-manila-gold-restricted`.
1.  Apply the PVC from the file by running the following command:
    ```terminal
    $ oc apply -f pvc-manila-restricted.yaml
    ```