{%- set _mod_docs_content_type = "PROCEDURE" %}
# Backing up etcd data by using the etcd snapshot method {id="hcp-backup-etcd-snapshot-backup_{{ context }}"}

You can start the etcd snapshot backup process from the {{ hcp }} command-line interface (CLI). {._abstract}

**Prerequisite**

*   You completed the steps in "Configuring the etcd snapshot method".

**Procedure**

*   Start the backup process by entering the following command:
    ```terminal
    $ hcp create oadp-backup \
      --hc-name <my_hosted_cluster> \
      --hc-namespace <my_hosted_cluster_namespace> \
      --name <my_backup> \
      --storage-location default \
      --use-etcd-snapshot
    ```

    The command generates an `oadp-backup` custom resource (CR) that includes the namespaces of the hosted cluster and the hosted control plane, a platform-aware resource list that excludes etcd-related resources, and snapshot settings.

    Next, the {{ oadp_short }} HyperShift plugin and the `HCPEtcdBackup` CR work to complete the backup process.