{%- set _mod_docs_content_type = "PROCEDURE" %}
# Restoring a hosted cluster into the same management cluster by using {{ oadp_short }} {id="hcp-dr-oadp-restore_{{ context }}"}

You can restore the hosted cluster by creating the `Restore` custom resource (CR). {._abstract}

*   If you are using an _in-place_ update, the `InfraEnv` resource does not need spare nodes. You need to re-provision the worker nodes from the new management cluster.
*   If you are using a _replace_ update, you need some spare nodes for the `InfraEnv` resource to deploy the worker nodes.


:::important

After you back up your hosted cluster, you must delete it to start the restoring process. To start node provisioning, you must back up workloads in the data plane before deleting the hosted cluster.

:::


**Prerequisites**

*   You completed the steps in [Removing a cluster by using the console](https://docs.redhat.com/en/documentation/red_hat_advanced_cluster_management_for_kubernetes/2.16/html/clusters/cluster_mce_overview#remove-a-cluster-by-using-the-console) to delete your hosted cluster.
*   You completed the steps in [Removing remaining resources after removing a cluster](https://docs.redhat.com/en/documentation/red_hat_advanced_cluster_management_for_kubernetes/2.16/html/clusters/cluster_mce_overview#removing-a-cluster-from-management-in-special-cases).

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
    ```yaml title="Example restore-hosted-cluster.yaml file"
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
    *   `metadata.name` specifies the name of your `Restore` resource.
    *   `spec.backupName` specifies the name of your `Backup` resource.
    *   `spec.restorePVs: true` starts the recovery of persistent volumes (PVs) and its pods.
    *   `spec.existingResourcePolicy: update` ensures that the existing objects are overwritten with the backed up content.

        :::important

        You must create the `infraenv` resource in a separate namespace. Do not delete the `infraenv` resource during the restore process. The `infraenv` resource is mandatory for the new nodes to be reprovisioned.
        
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
1.  After the restore process is complete, start the reconciliation of the `HostedCluster` and `NodePool` resources that you paused during backing up of the control plane workload:
    1.  Start the reconciliation of the `HostedCluster` resource by running the following command:
        ```terminal
        $ oc --kubeconfig <management_cluster_kubeconfig_file> \
          patch hostedcluster -n <hosted_cluster_namespace> <hosted_cluster_name> \
          --type json \
          -p '[{"op": "add", "path": "/spec/pausedUntil", "value": "false"}]'
        ```
    1.  Start the reconciliation of the `NodePool` resource by running the following command:
        ```terminal
        $ oc --kubeconfig <management_cluster_kubeconfig_file> \
          patch nodepool -n <hosted_cluster_namespace> <node_pool_name> \
          --type json \
          -p '[{"op": "add", "path": "/spec/pausedUntil", "value": "false"}]'
        ```
1.  Start the reconciliation of the Agent provider resources that you paused during backing up of the control plane workload:
    1.  Start the reconciliation of the `AgentCluster` resource by running the following command:
        ```terminal
        $ oc --kubeconfig <management_cluster_kubeconfig_file> \
          annotate agentcluster -n <hosted_control_plane_namespace>  \
          cluster.x-k8s.io/paused- --overwrite=true --all
        ```
    1.  Start the reconciliation of the `AgentMachine` resource by running the following command:
        ```terminal
        $ oc --kubeconfig <management_cluster_kubeconfig_file> \
          annotate agentmachine -n <hosted_control_plane_namespace>  \
          cluster.x-k8s.io/paused- --overwrite=true --all
        ```
1.  Remove the `hypershift.openshift.io/skip-delete-hosted-controlplane-namespace-` annotation in the `HostedCluster` resource to avoid manually deleting the hosted control plane namespace by running the following command:
    ```terminal
    $ oc --kubeconfig <management_cluster_kubeconfig_file> \
      annotate hostedcluster -n <hosted_cluster_namespace> <hosted_cluster_name> \
      hypershift.openshift.io/skip-delete-hosted-controlplane-namespace- \
      --overwrite=true --all
    ```