{%- set _mod_docs_content_type = "PROCEDURE" %}
# Restoring a hosted cluster by using {{ oadp_short }} {id="hcp-dr-oadp-restore-auto_{{ context }}"}

You can restore the hosted cluster by creating the `Restore` custom resource (CR). {._abstract}

*   If you are using an in-place update, the `InfraEnv` resource does not need spare nodes. You need to re-provision the worker nodes from the new management cluster.
*   If you are using a replace update, you need some spare nodes for the `InfraEnv` resource to deploy the worker nodes.


:::important

After you back up your hosted cluster, you must delete it to start the restoring process. To start node provisioning, you must back up workloads in the data plane before deleting the hosted cluster.

:::


**Prerequisites**

*   You completed the steps in [Removing a cluster by using the console](https://docs.redhat.com/en/documentation/red_hat_advanced_cluster_management_for_kubernetes/2.13/html/clusters/cluster_mce_overview#remove-a-cluster-by-using-the-console) ({{ rh_rhacm }} documentation) to delete your hosted cluster.
*   You completed the steps in [Removing remaining resources after removing a cluster](https://docs.redhat.com/en/documentation/red_hat_advanced_cluster_management_for_kubernetes/2.13/html/clusters/cluster_mce_overview#removing-a-cluster-from-management-in-special-cases) ({{ rh_rhacm }} documentation).

To monitor and observe the backup process, see "Observing the backup and restore process".

**Procedure**

1.  Verify that no pods and persistent volume claims (PVCs) are present in the hosted control plane namespace by running the following command:
    ```terminal
    $ oc get pod pvc -n <hosted_control_plane_namespace>
    ```
    ```terminal title="Expected output"
    No resources found
    ```
1.  Create a YAML file that defines the `Restore` CR:
    ```yaml
    apiVersion: velero.io/v1
    kind: Restore
    metadata:
      name: <restore_resource_name>
      namespace: openshift-adp
    spec:
      backupName: <backup_resource_name>
      restorePVs: true
      existingResourcePolicy: update
      excludedResources:
      - nodes
      - events
      - events.events.k8s.io
      - backups.velero.io
      - restores.velero.io
      - resticrepositories.velero.io
    ```
    *   `metadata.name` specifies the name for your `Restore` resource.
    *   `spec.backupName` specifies the name of your `Backup` resource.
    *   `spec.restorePVs: true` indicates the recovery of persistent volumes (PVs) and their pods.
    *   `spec.existingResourcePolicy: update` ensures that the existing objects are overwritten with the backed up content.

        :::important

        You must create the `InfraEnv` resource in a separate namespace. Do not delete the `InfraEnv` resource during the restore process. The `InfraEnv` resource is mandatory for the new nodes to be reprovisioned.
        
        :::

1.  Apply the `Restore` CR by running the following command:
    ```terminal
    $ oc apply -f restore-hosted-cluster.yaml
    ```
1.  Verify if the value of the `status.phase` is `Completed` by running the following command:
    ```terminal
    $ oc get hostedcluster <hosted_cluster_name> -n <hosted_cluster_namespace> \
      -o jsonpath='{.status.phase}'
    ```