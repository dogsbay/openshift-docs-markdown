{%- set _mod_docs_content_type = "PROCEDURE" %}
# Gathering network logs {id="gathering-data-network-logs_{{ context }}"}

You can gather network logs on all nodes in a cluster. {._abstract}

**Procedure**

1.  Run the `oc adm must-gather` command with `-- gather_network_logs`:
    ```terminal
    $ oc adm must-gather -- gather_network_logs
    ```

    :::note

    By default, the `must-gather` tool collects the OVN `nbdb` and `sbdb` databases from all of the nodes in the cluster. Adding the `-- gather_network_logs` option to include additional logs that contain OVN-Kubernetes transactions for OVN `nbdb` database.
    
    :::

1.  Create a compressed file from the `must-gather` directory that was just created in your working directory. Make sure you provide the date and cluster ID for the unique must-gather data. For more information about how to find the cluster ID, see [How to find the cluster-id or name on OpenShift cluster](https://access.redhat.com/solutions/5280291). For example, on a computer that uses a Linux operating system, run the following command:
    ```terminal
    $ tar cvaf must-gather-`date +"%m-%d-%Y-%H-%M-%S"`-<cluster_id>.tar.gz <must_gather_local_dir>
    ```

    Replace the `<must_gather_local_dir>` placeholder with the actual directory name.
1.  Attach the compressed file to your support case on the [the **Customer Support** page](https://access.redhat.com/support/cases/#/case/list) of the Red Hat Customer Portal.