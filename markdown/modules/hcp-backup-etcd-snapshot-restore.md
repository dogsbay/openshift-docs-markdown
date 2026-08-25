{%- set _mod_docs_content_type = "PROCEDURE" %}
# Restoring etcd data by using the etcd snapshot method {id="hcp-backup-etcd-snapshot-restore_{{ context }}"}

You can specify a backup to recover from or set a schedule to run the recovery process on. {._abstract}

The process to recover a hosted control plane from an etcd snapshot backup involves the {{ oadp_short }} HyperShift plugin, the Control Plane Operator, and the etcd init container.

**Prerequisites**

*   You completed the steps in "Configuring the etcd snapshot method".
*   No running pods or persistent volume claims (PVCs) are in the hosted control plane namespace. If you are restoring on the same management cluster, delete the hosted cluster and node pools first.
*   The status of the Velero backup is `status.phase: Completed`.
*   The {{ oadp_short }} components are running and the `DataProtectionApplication` (DPA) custom resource (CR) is reconciled.
*   For {{ hcp }} on {{ aws_short }}, your backup storage location (BSL) credentials are valid and have permission to read the snapshot from S3.
*   For bare metal on the Agent platform, your `InfraEnv` objects are preserved. Do not delete them.

**Procedure**

*   Start the restore process by entering the following command:
    ```terminal
    $ hcp create oadp-restore \
      --hc-name <my_hosted_cluster> \
      --hc-namespace <my_hosted_cluster_namespace> \
      --name <my_restore> \
      --from-backup <my_backup>
    ```

    where:

    `<my_backup>`
    :   Specifies the name of the backup to use. If you run the restore process on a schedule, replace the `--from-backup` flag with the `--from-schedule` flag and specify the name of the schedule to use.

**Verification**

1.  Check that the etcd pods are running and that the cluster is functioning as expected by entering the following command:
    ```terminal
    $ oc get pods -n <my_hosted_cluster_namespace>-<my_hosted_cluster> -l app=etcd
    ```
1.  Check the restore conditions by entering the following command:
    ```terminal
    $ oc get hostedcluster <my_hosted_cluster> -n <my_hosted_cluster_namespace> -o jsonpath='{.status.conditions}' | jq '.[] | select(.type | test("Restore|Etcd"))'
    ```
1.  On {{ aws_short }} deployments, when you restore to a different management cluster, the OIDC provider might need to be updated. Enter the following command:
    ```terminal
    $ hcp fix dr-oidc-iam --hc-name <my_hosted_cluster> --hc-namespace <my_hosted_cluster_namespace>
    ```
1.  Confirm that the API server of the hosted cluster is accessible by entering the following command:
    ```terminal
    $ oc --kubeconfig <hosted_cluster_kubeconfig> get nodes
    ```
1.  Confirm that workloads are running by entering the following command:
    ```terminal
    $ oc --kubeconfig <hosted_cluster_kubeconfig> get clusteroperators
    ```