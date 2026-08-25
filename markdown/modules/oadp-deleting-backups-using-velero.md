{%- set _mod_docs_content_type = "PROCEDURE" %}
# Deleting a backup by using the OADP CLI {id="oadp-deleting-backups-using-velero_{{ context }}"}

Delete a backup by using the OADP CLI to run the `oc oadp backup delete` command. This helps you to quickly remove backups and their associated volume artifacts from storage. {._abstract}

**Prerequisites**

*   You have run a backup of your application.
*   You have downloaded the OADP CLI binary from your cluster and can access the `oc oadp` commands.

**Procedure**

*   To delete the backup, run the following command:
    ```terminal
    $ oc oadp backup delete <backup_name> -n openshift-adp
    ```

    Replace `<backup_name>` with the name of the backup.