{%- set _mod_docs_content_type = "PROCEDURE" %}
# Viewing automatically created storage profiles {id="virt-viewing-automatically-created-storage-profiles_{{ context }}"}

The system creates storage profiles for each storage class automatically. You can view these storage class profiles by using the `oc` command. {._abstract}

**Prerequisites**

*   You have installed the {{ oc_first }}.

**Procedure**

1.  To view the list of storage profiles, run the following command:
    ```terminal
    $ oc get storageprofile
    ```
1.  To fetch the details of a particular storage profile, run the following command:
    ```terminal
    $ oc describe storageprofile <name>
    ```

    Example storage profile details:
    ```yaml
    Name:         ocs-storagecluster-ceph-rbd-virtualization
    Namespace:
    Labels:       app=containerized-data-importer
                  app.kubernetes.io/component=storage
                  app.kubernetes.io/managed-by=cdi-controller
                  app.kubernetes.io/part-of=hyperconverged-cluster
                  app.kubernetes.io/version=4.17.2
                  cdi.kubevirt.io=
    Annotations:  <none>
    API Version:  cdi.kubevirt.io/v1beta1
    Kind:         StorageProfile
    Metadata:
      Creation Timestamp:  2023-11-13T07:58:02Z
      Generation:          2
      Owner References:
        API Version:           cdi.kubevirt.io/v1beta1
        Block Owner Deletion:  true
        Controller:            true
        Kind:                  CDI
        Name:                  cdi-kubevirt-hyperconverged
        UID:                   2d6f169a-382c-4caf-b614-a640f2ef8abb
      Resource Version:        4186799537
      UID:                     14aef804-6688-4f2e-986b-0297fd3aaa68
    Spec:
    Status:
      Claim Property Sets:
{%- if not openshift_dedicated %}
        accessModes:
          ReadWriteMany
        volumeMode:  Block
{%- endif %}
        accessModes:
          ReadWriteOnce
        volumeMode:  Block
        accessModes:
          ReadWriteOnce
        volumeMode:                   Filesystem
      Clone Strategy:                  csi-clone
      Data Import Cron Source Format:  snapshot
      Provisioner:                     openshift-storage.rbd.csi.ceph.com
      Snapshot Class:                  ocs-storagecluster-rbdplugin-snapclass
      Storage Class:                   ocs-storagecluster-ceph-rbd-virtualization
    Events:                            <none>
    ```

    `status.claimPropertySets`
    :   `Claim Property Sets` is an ordered list of `AccessMode`/`VolumeMode` pairs, which describe the PVC modes that are used to provision VM disks.

    `status.cloneStrategy`
    :   The `Clone Strategy` line indicates the clone strategy to be used.

    `status.dataImportCronSourceFormat`
    :   `Data Import Cron Source Format` indicates whether boot source images on this storage are stored as PVCs or volume snapshots.