{%- set _mod_docs_content_type = "PROCEDURE" %}
# Backing up a single VM {id="oadp-backup-single-vm_{{ context }}"}

If you have a namespace with multiple virtual machines (VMs), and want to back up only one of them, you can use the label selector to filter the VM that needs to be included in the backup. You can filter the VM by using the `app: vmname` label. {._abstract}

**Prerequisites**

*   You have installed the {{ oadp_short }} Operator.
*   You have multiple VMs running in a namespace.
*   You have added the `kubevirt` plugin in the `DataProtectionApplication` (DPA) custom resource (CR).
*   You have configured the `BackupStorageLocation` CR in the `DataProtectionApplication` CR and `BackupStorageLocation` is available.

**Procedure**

1.  Configure the `Backup` CR as shown in the following example:
    ```yaml title="Example Backup CR"
    apiVersion: velero.io/v1
    kind: Backup
    metadata:
      name: vmbackupsingle
      namespace: openshift-adp
    spec:
      snapshotMoveData: true
      includedNamespaces:
      - <vm_namespace>
      labelSelector:
        matchLabels:
          app: <vm_app_name>
      storageLocation: <backup_storage_location_name>
    ```

    where:

    `vm_namespace`
    :   Specifies the name of the namespace where you have created the VMs.

    `vm_app_name`
    :   Specifies the VM name that needs to be backed up.

    `backup_storage_location_name`
    :   Specifies the name of the `BackupStorageLocation` CR.

1.  To create a `Backup` CR, run the following command:
    ```terminal
    $ oc apply -f <backup_cr_file_name>
    ```

    where:

    `backup_cr_file_name`
    :   Specifies the name of the `Backup` CR file.