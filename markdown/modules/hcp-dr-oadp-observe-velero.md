{%- set _mod_docs_content_type = "PROCEDURE" %}
# Using the OADP CLI to describe the Backup and Restore resources {id="hcp-dr-oadp-observe-velero_{{ context }}"}

When you use {{ oadp_full }}, you can get more details of the `Backup` and `Restore` resources by using the OADP command-line interface (CLI). {._abstract}

**Procedure**

1.  Get details of your `Restore` custom resource (CR) by running the following command:
    ```terminal
    $ oc oadp restore describe <restore_resource_name> --details
    ```

    Replace `<restore_resource_name>` with the name of your `Restore` resource.
1.  Get details of your `Backup` CR by running the following command:
    ```terminal
    $ oc oadp backup describe <backup_resource_name> --details
    ```

    Replace `<backup_resource_name>` with the name of your `Backup` resource.