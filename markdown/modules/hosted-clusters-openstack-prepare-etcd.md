{%- set _mod_docs_content_type = "PROCEDURE" %}
# Preparing the management cluster for etcd local storage {id="hosted-clusters-openstack-prepare-etcd_{{ context }}"}

In a {{ hcp }} deployment on {{ rh_openstack_first }}, you can improve etcd performance by using local ephemeral storage that is provisioned with the TopoLVM CSI driver instead of relying on the default Cinder-based Persistent Volume Claims (PVCs). {._abstract}

**Prerequisites**

*   You have access to a management cluster with HyperShift installed.
*   You can create and manage {{ rh_openstack }} flavors and machine sets.
*   You have the `oc` and `openstack` CLI tools installed and configured.
*   You are familiar with TopoLVM and Logical Volume Manager (LVM) storage concepts.
*   You installed the {{ lvms }} Operator on the management cluster. For more information, see "Installing {{ lvms }}
 by using the CLI" in the Storage section of the {{ product_title }} documentation.

**Procedure**

1.  Create a Nova flavor with an additional ephemeral disk by using the `openstack` CLI. For example:
    ```terminal
    $ openstack flavor create \
      --id auto \
      --ram 8192 \
      --disk 0 \
      --ephemeral 100 \
      --vcpus 4 \
      --public \
      hcp-etcd-ephemeral
    ```

    :::note

    Nova automatically attaches the ephemeral disk to the instance and formats it as `vfat` when a server is created with
     that flavor.
    
    :::

1.  Create a compute machine set that uses the new flavor. For more information, see "Creating a compute machine set
on OpenStack" in the {{ product_title }} documentation.
1.  Scale the machine set to meet your requirements. If clusters are deployed for high availability, a minimum of 3 workers must be deployed so the pods can be distributed accordingly.
1.  Label the new worker nodes to identify them for etcd use. For example:
    ```terminal
    $ oc label node <node_name> hypershift-capable=true
    ```

    This label is arbitrary; you can update it later.
1.  In a file called `lvmcluster.yaml`, create the following `LVMCluster` custom resource to the local storage
configuration for etcd:
    ```yaml
    apiVersion: lvm.topolvm.io/v1alpha1
    kind: LVMCluster
    metadata:
      name: etcd-hcp
      namespace: openshift-storage
    spec:
      storage:
        deviceClasses:
        - name: etcd-class
          default: true
          nodeSelector:
             nodeSelectorTerms:
             - matchExpressions:
               - key: hypershift-capable
                operator: In
                values:
                - "true"
          deviceSelector:
            forceWipeDevicesAndDestroyAllData: true
            paths:
            - /dev/vdb
    ```

    In this example resource:
    *   The ephemeral disk location is `/dev/vdb`, which is the case in most situations. Verify that this location is true in your case, and note that symlinks are not supported.
    *   The parameter `forceWipeDevicesAndDestroyAllData` is set to a `True` value because the default Nova ephemeral disk
    comes formatted in VFAT.
1.  Apply the `LVMCluster` resource by running the following command:
    ```terminal
    oc apply -f lvmcluster.yaml
    ```
1.  Verify the `LVMCluster` resource by running the following command:
    ```terminal
    $ oc get lvmcluster -A
    ```
    ```terminal title="Example output"
    NAMESPACE           NAME    STATUS
    openshift-storage   etcd-hcp   Ready
    ```
1.  Verify the `StorageClass` resource by running the following command:
    ```terminal
    $ oc get storageclass
    ```
    ```terminal title="Example output"
    NAME                    PROVISIONER               RECLAIMPOLICY   VOLUMEBINDINGMODE     ALLOWVOLUMEEXPANSION   AGE
    lvms-etcd-class         topolvm.io                Delete          WaitForFirstConsumer  true                   23m
    standard-csi (default)  cinder.csi.openstack.org  Delete          WaitForFirstConsumer  true                   56m
    ```

    You can now deploy a hosted cluster with a performant etcd configuration. The deployment process is described in "Creating a hosted cluster on OpenStack".