{%- set _mod_docs_content_type = "PROCEDURE" %}
# Access restored files through SSH {id="oadp-vmfr-accessing-files-ssh_{{ context }}"}

Access restored virtual machine (VM) files through SSH by using `rsync`, `scp`, or `sftp` with the `VirtualMachineFileRestore` (VMFR) custom resource (CR). You can transfer files from VM backups efficiently. {._abstract}

When you configure SSH access, the VMFR controller autogenerates an SSH key pair and stores it in a Kubernetes secret. The default SSH username is `oadp`. The SSH file server listens on port `2222`.

The remote path for restored files follows the format `/restores/<date>/<backup_name>/<vm_name>/<path_to_file>`.

**Prerequisites**

*   You are logged in to the cluster with the `cluster-admin` role.
*   You have created a `VirtualMachineFileRestore` (VMFR) CR with the `fileAccess.ssh` section configured.
*   The VMFR CR `status.phase` is `Completed`.

**Procedure**

1.  To retrieve the SSH access information, run the following command:
    ```terminal
    $ oc get vmfr <vmfr_cr_name> -o jsonpath='{.status.fileServingInfo.ssh}' | jq
    ```

    Replace `<vmfr_cr_name>` with the name of the VMFR CR. The output includes the `clusterAccess` URL and `credentialsSecretRef` containing the name and namespace of the generated SSH key secret.
1.  Retrieve the private key from the generated secret and save it to a file:
    ```terminal
    $ oc get secret <secret_name> -n <secret_namespace> -o jsonpath='{.data.privateKey}' | base64 -d > id-rsa
    ```

    Replace `<secret_name>` and `<secret_namespace>` with the values from the `status.fileServingInfo.ssh.credentialsSecretRef` field.
1.  Set the correct permissions on the private key file:
    ```terminal
    $ chmod 600 id-rsa
    ```
1.  Get the name of the file server service created in the VMFR namespace:
    ```terminal
    $ oc get svc -n <created_namespace> | grep fileserver
    ```

    Replace `<created_namespace>` with the value from the `status.createdNamespace` field of the VMFR CR.
1.  To copy a file from the backup by using `scp`, run the following command:
    ```terminal
    $ scp -P 2222 -i id-rsa \
      -o StrictHostKeyChecking=no \
      -o UserKnownHostsFile=/dev/null \
      oadp@<fileserver_svc>.<created_namespace>.svc.cluster.local:<remote_path> \
      <local_destination>
    ```

    where:

    `<fileserver_svc>`
    :   Specifies the name of the file server service.

    `<created_namespace>`
    :   Specifies the namespace from the `status.createdNamespace` field.

    `<remote_path>`
    :   Specifies the path to the file in the format `/restores/<date>/<backup_name>/<vm_name>/<path_to_file>`.

    `<local_destination>`
    :   Specifies the local file path to save the restored file.

1.  To start an interactive SFTP session, run the following command:
    ```terminal
    $ sftp -P 2222 -i id-rsa \
      -o StrictHostKeyChecking=no \
      oadp@<fileserver_svc>.<created_namespace>.svc.cluster.local
    ```