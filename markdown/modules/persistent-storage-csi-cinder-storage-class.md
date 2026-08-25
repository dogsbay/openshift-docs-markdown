{%- set _mod_docs_content_type = "PROCEDURE" %}
# Making OpenStack Cinder CSI the default storage class {id="persistent-storage-csi-cinder_{{ context }}"}

To use the OpenStack Cinder Container Storage Interface (CSI) driver for dynamic provisioning instead of the in-tree driver, change the default storage class from `standard` to `standard-csi` by updating storage class annotations. {._abstract}

The OpenStack Cinder CSI driver uses the `cinder.csi.openstack.org` parameter key to support dynamic provisioning.

To enable OpenStack Cinder CSI provisioning in {{ product_title }}, it is recommended that you overwrite the default in-tree storage class with `standard-csi`. Alternatively, you can create the persistent volume claim (PVC) and specify the storage class as "standard-csi".

In {{ product_title }}, the default storage class references the in-tree Cinder driver. However, with CSI automatic migration enabled, volumes created using the default storage class actually use the CSI driver.

Use the following steps to apply the `standard-csi` storage class by overwriting the default in-tree storage class.

**Procedure**

1.  List the storage class by running the following command:
    ```terminal
    $ oc get storageclass
    ```
    ```terminal title="Example output"
    NAME                   PROVISIONER                RECLAIMPOLICY   VOLUMEBINDINGMODE      ALLOWVOLUMEEXPANSION   AGE
    standard(default)      cinder.csi.openstack.org   Delete          WaitForFirstConsumer   true                   46h
    standard-csi           kubernetes.io/cinder       Delete          WaitForFirstConsumer   true                   46h
    ```
1.  Change the value of the annotation `storageclass.kubernetes.io/is-default-class` to `false` for the default storage class, as shown in the following example:
    ```terminal
    $ oc patch storageclass standard -p '{"metadata": {"annotations": {"storageclass.kubernetes.io/is-default-class": "false"}}}'
    ```
1.  Make another storage class the default by adding or modifying the annotation as `storageclass.kubernetes.io/is-default-class=true`.
    ```terminal
    $ oc patch storageclass standard-csi -p '{"metadata": {"annotations": {"storageclass.kubernetes.io/is-default-class": "true"}}}'
    ```
1.  Verify that the PVC is now referencing the CSI storage class by default:
    ```terminal
    $ oc get storageclass
    ```
    ```terminal title="Example output"
    NAME                   PROVISIONER                RECLAIMPOLICY   VOLUMEBINDINGMODE      ALLOWVOLUMEEXPANSION   AGE
    standard               kubernetes.io/cinder       Delete          WaitForFirstConsumer   true                   46h
    standard-csi(default)  cinder.csi.openstack.org   Delete          WaitForFirstConsumer   true                   46h
    ```
1.  Optional: You can define a new PVC without having to specify the storage class:
    ```yaml
    apiVersion: v1
    kind: PersistentVolumeClaim
    metadata:
      name: cinder-claim
    spec:
      accessModes:
        - ReadWriteOnce
      resources:
        requests:
          storage: 1Gi
    ```

    A PVC that does not specify a specific storage class is automatically provisioned by using the default storage class.
1.  Optional: After the new file has been configured, create it in your cluster:
    ```terminal
    $ oc create -f cinder-claim.yaml
    ```