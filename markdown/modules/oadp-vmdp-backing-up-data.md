{%- set _mod_docs_content_type = "PROCEDURE" %}
# Backing up data from a virtual machine by using the VMDP CLI {id="oadp-vmdp-backing-up-data_{{ context }}"}

Back up files and directories from within your virtual machine (VM) by using the {{ oadp_full }} VM data protection (VMDP) command-line interface (CLI). This helps you to protect user data, including data accessible over network file systems such as CIFS and NFS shares. {._abstract}

VMDP uses data deduplication to store data efficiently. If the same data exists in multiple locations, subsequent backups complete faster because only unique data blocks are stored.

**Prerequisites**

*   You are connected to your virtual machine (VM) by using SSH.
*   You have installed the VMDP CLI inside your VM.
*   You have created an alias called `oadp-vmdp` for the VMDP CLI binary.
*   You have created and connected to a backup storage location.

**Procedure**

1.  To create a backup of a directory, run the following command:
    ```terminal
    $ oadp-vmdp backup create <path_to_data>
    ```

    Replace `<path_to_data>` with the path to the directory or files to back up.
1.  To list all available backups, run the following command:
    ```terminal
    $ oadp-vmdp backup list
    ```
1.  To delete a specific backup, run the following command:
    ```terminal
    $ oadp-vmdp backup delete <backup_id>
    ```

    Replace `<backup_id>` with the ID of the backup to delete.

    :::important

    After you delete backups, orphaned data objects such as pack blobs are not automatically cleaned up from the underlying storage backend. You must manually remove these orphaned objects directly from your storage backend, for example, by deleting them from your S3 bucket.
    
    :::