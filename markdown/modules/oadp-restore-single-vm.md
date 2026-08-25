{%- set _mod_docs_content_type = "PROCEDURE" %}
# Restoring a single VM {id="oadp-restore-single-vm_{{ context }}"}

After you have backed up a single virtual machine (VM) by using the label selector in the `Backup` custom resource (CR), you can create a `Restore` CR and point it to the backup. This restore operation restores a single VM. {._abstract}

**Prerequisites**

*   You have installed the {{ oadp_short }} Operator.
*   You have backed up a single VM by using the label selector.

**Procedure**

1.  Configure the `Restore` CR as shown in the following example:
    ```yaml title="Example Restore CR"
    apiVersion: velero.io/v1
    kind: Restore
    metadata:
      name: vmrestoresingle
      namespace: openshift-adp
    spec:
      backupName: vmbackupsingle
      restorePVs: true
    ```

    where:

    `vmbackupsingle`
    :   Specifies the name of the backup of a single VM.

1.  To restore the single VM, run the following command:
    ```terminal
    $ oc apply -f <restore_cr_file_name>
    ```

    where:

    `restore_cr_file_name`
    :   Specifies the name of the `Restore` CR file.

    :::note

    When you restore a backup of VMs, you might notice that the Ceph storage capacity allocated for the restore is higher than expected. This behavior is observed only during the `kubevirt` restore and if the volume type of the VM is `block`.

    Use the `rbd sparsify` tool to reclaim space on target volumes. For more details, see [Reclaiming space on target volumes](https://access.redhat.com/documentation/en-us/red_hat_openshift_data_foundation/latest/html-single/managing_and_allocating_storage_resources/index#reclaiming-space-on-target-volumes_rhodf).
    
    :::