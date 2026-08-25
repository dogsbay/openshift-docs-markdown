{%- set _mod_docs_content_type = "PROCEDURE" %}
# Creating a hostpath provisioner with a basic storage pool {id="virt-creating-hpp-basic-storage-pool_{{ context }}"}

You configure a hostpath provisioner (HPP) with a basic storage pool by creating an HPP custom resource (CR) with a `storagePools` stanza. The storage pool specifies the name and path used by the CSI driver. {._abstract}


:::important

Do not create storage pools in the same partition as the operating system. Otherwise, the operating system partition might become filled to capacity, which will impact performance or cause the node to become unstable or unusable.

:::


**Prerequisites**

*   The directories specified in `spec.storagePools.path` must have read/write access.
*   You have installed the {{ oc_first }}.

**Procedure**

1.  Create an `hpp_cr.yaml` file with a `storagePools` stanza as in the following example:
    ```yaml
    apiVersion: hostpathprovisioner.kubevirt.io/v1beta1
    kind: HostPathProvisioner
    metadata:
      name: hostpath-provisioner
    spec:
      imagePullPolicy: IfNotPresent
      storagePools:
      - name: any_name
        path: "/var/myvolumes"
      workload:
        nodeSelector:
          kubernetes.io/os: linux
    ```
    *   `spec.storagePools.name` defines the name to identify the source to use. It must be the same as the `storagePools` name in the `StorageClass.yaml`.
    *   `spec.storagePools.path` defines the storage pool directories under this node path. Ensure that the path `/var/myvolumes` value specifies a directory that exists on each worker node.
1.  Save the file and exit.
1.  Create the HPP by running the following command:
    ```terminal
    $ oc create -f hpp_cr.yaml
    ```