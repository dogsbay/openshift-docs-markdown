{%- set _mod_docs_content_type = "PROCEDURE" %}
# Backing up data from one cluster and restoring it to another cluster {id="oadp-backing-and-restoring-from-cluster-to-cluster_{{ context }}"}

Review the specific prerequisites and procedure differences to successfully back up data on one cluster and restore it to another. This helps you adapt standard {{ oadp_short }} tasks for cross-cluster data recovery. {._abstract}

**Prerequisites**

*   All relevant prerequisites for backing up and restoring on your platform (for example, AWS, Microsoft Azure, {{ gcp_short }}, and so on), especially the prerequisites for the Data Protection Application (DPA), are described in the relevant sections of this guide.

**Procedure**

1.  Make the following additions to the procedures given for your platform:
    *   Ensure that the backup store location (BSL) and volume snapshot location have the same names and paths to restore resources to another cluster.
    *   Share the same object storage location credentials across the clusters.
    *   For best results, use OADP to create the namespace on the destination cluster.
    *   If you use the Velero `file-system-backup` option, enable the `--default-volumes-to-fs-backup` flag for use during backup by running the following command:
        ```terminal
        $ velero backup create <backup_name> --default-volumes-to-fs-backup <any_other_options>
        ```

        :::note

        In OADP 1.2 and later, the Velero Restic option is called `file-system-backup`.
        
        :::


        :::important

        Before restoring a CSI back up, edit the `VolumeSnapshotClass` custom resource (CR), and set the  `snapshot.storage.kubernetes.io/is-default-class parameter` to false. 
        Otherwise, the restore will partially fail due to the same value in the `VolumeSnapshotClass` in the target cluster for the same drive.
        
        :::