{%- set _mod_docs_content_type = "PROCEDURE" %}
# Restoring to an earlier cluster state for a single node {id="dr-restoring-cluster-state-sno_{{ context }}"}

To restore your {{ product_title }} cluster on a single node, use a saved etcd snapshot to roll back to an earlier state after quorum loss or critical data deletion. {._abstract}


:::important

When you restore your cluster, you must use an etcd backup that was taken from the same z-stream release. For example, an {{ product_title }} {{ product_version }}.2 cluster must use an etcd backup that was taken from {{ product_version }}.2.

:::


**Prerequisites**

*   You have access to the cluster as a user with the `cluster-admin` role through a certificate-based `kubeconfig` file.
*   You have SSH access to control plane hosts.
*   You have a backup directory containing both the `etcd` snapshot and the resources for the static pods, which were from the same backup. The file names in the directory must be in the following formats: `snapshot_<datetimestamp>.db` and `static_kuberesources_<datetimestamp>.tar.gz`.

**Procedure**

1.  Use SSH to connect to the single node and copy the etcd backup to the `/home/core` directory by running the following command:
    ```terminal
    $ cp <etcd_backup_directory> /home/core
    ```
1.  To restore the cluster from an earlier backup on the single node, run the following command:
    ```terminal
    $ sudo -E /usr/local/bin/cluster-restore.sh /home/core/<etcd_backup_directory>
    ```
1.  Exit the SSH session.
1.  Monitor the recovery progress of the control plane by running the following command:
    ```terminal
    $ oc adm wait-for-stable-cluster
    ```

    :::note

    It can take up to 15 minutes for the control plane to recover.
    
    :::