{%- set _mod_docs_content_type = "PROCEDURE" %}
# Restoring a hosted cluster into a new management cluster by using {{ oadp_short }} {id="hcp-dr-oadp-restore-new-mgmt_{{ context }}"}

You can restore the hosted cluster into a new management cluster by creating the `Restore` custom resource (CR). {._abstract}

*   If you are using an in-place update, the `InfraEnv` resource does not need spare nodes. Instead, you need to re-provision the worker nodes from the new management cluster.
*   If you are using a replace update, you need some spare nodes for the `InfraEnv` resource to deploy the worker nodes.

{%- set FeatureName = "Restoring a hosted cluster to a new management cluster" %}
{% include "./snippets/technology-preview.md" %}

**Prerequisites**

*   You configured the new management cluster to use {{ oadp_first }}. The new management cluster must have the same Data Protection Application (DPA) as the management cluster that you backed up from so that the `Restore` CR can access the backup storage.
*   You configured the networking settings of the new management cluster to resolve the DNS of the hosted cluster.
    *   The DNS of the host must resolve to the IP of both the new management cluster and the hosted cluster.
    *   The hosted cluster must resolve to the IP of the new management cluster. 

To monitor and observe the backup process, see "Observing the backup and restore process".


:::important

Complete the following steps on the new management cluster that you are restoring the hosted cluster to, not on the management cluster that you created the backup from.

:::


**Procedure**

1.  Create a YAML file that defines the `Restore` CR:
    ```yaml title="Example restore-hosted-cluster.yaml file"
    apiVersion: velero.io/v1
    kind: Restore
    metadata:
      name: <restore_resource_name>
      namespace: openshift-adp
    spec:
      includedNamespaces:
      - <hosted_cluster_namespace>
      - <hosted_control_plane_namespace>
      - <agent_namespace>
      backupName: <backup_resource_name>
      cleanupBeforeRestore: CleanupRestored
      veleroManagedClustersBackupName: <managed_cluster_name>
      veleroCredentialsBackupName: <credentials_backup_name>
      veleroResourcesBackupName: <resources_backup_name>
      restorePVs: true
      preserveNodePorts: true
      existingResourcePolicy: update
      excludedResources:
      - pod
      - nodes
      - events
      - events.events.k8s.io
      - backups.velero.io
      - restores.velero.io
      - resticrepositories.velero.io
      - pv
      - pvc
    ```
    *   `metadata.name` specifies the name of your `Restore` resource.
    *   `spec.includedNamespaces` specifies namespaces to back up objects from them. Replace `<hosted_cluster_namespace>` with the name of the hosted cluster namespace, replace `<hosted_control_plane_namespace>` with the name of the hosted control plane namespace, and replace `<agent_namespace>` with the namespace where your `Agent`, `BMH`, and `InfraEnv` CRs are located.
    *   `spec.backupName` specifies the name of your `Backup` resource.
    *   `spec.veleroManagedClustersBackupName` can be omitted if you are not using {{ rh_rhacm_title }}.
    *   `spec.restorePVs: true` starts the recovery of persistent volumes (PVs) and its pods.
    *   `spec.existingResourcePolicy: update` ensures that the existing objects are overwritten with the backed up content.
1.  Apply the `Restore` CR by running the following command:
    ```terminal
    $ oc --kubeconfig <restore_management_kubeconfig> apply -f restore-hosted-cluster.yaml
    ```
1.  Verify that the value of the `status.phase` is `Completed` by running the following command:
    ```terminal
    $ oc --kubeconfig <restore_management_kubeconfig> \
      get restore.velero.io <restore_resource_name> \
      -n openshift-adp -o jsonpath='{.status.phase}'
    ```
1.  Verify that all CRs are restored by running the following commands:
    ```terminal
    $ oc --kubeconfig <restore_management_kubeconfig> get infraenv -n <agent_namespace>
    ```
    ```terminal
    $ oc --kubeconfig <restore_management_kubeconfig> get agent -n <agent_namespace>
    ```
    ```terminal
    $  oc --kubeconfig <restore_management_kubeconfig> get bmh -n <agent_namespace>
    ```
    ```terminal
    $ oc --kubeconfig <restore_management_kubeconfig> get hostedcluster -n <hosted_cluster_namespace>
    ```
    ```terminal
    $ oc --kubeconfig <restore_management_kubeconfig> get nodepool -n <hosted_cluster_namespace>
    ```
    ```terminal
    $ oc --kubeconfig <restore_management_kubeconfig> get agentmachine -n <hosted_controlplane_namespace>
    ```
    ```terminal
    $ oc --kubeconfig <restore_management_kubeconfig> get agentcluster -n <hosted_controlplane_namespace>
    ```
1.  If you plan to use the new management cluster as your main management cluster going forward, complete the following steps. Otherwise, if you plan to use the management cluster that you backed up from as your main management cluster, complete steps 5 - 8 in "Restoring a hosted cluster into the same management cluster by using {{ oadp_short }}".
    1.  Remove the Cluster API deployment from the management cluster that you backed up from by running the following command:
        ```terminal
        $ oc --kubeconfig <backup_management_kubeconfig> delete deploy cluster-api \
          -n <hosted_control_plane_namespace>
        ```

        Because only one Cluster API can access a cluster at a time, this step ensures that the Cluster API for the new management cluster functions correctly.
    1.  After the restore process is complete, start the reconciliation of the `HostedCluster` and `NodePool` resources that you paused during backing up of the control plane workload:
        1.  Start the reconciliation of the `HostedCluster` resource by running the following command:
            ```terminal
            $ oc --kubeconfig <restore_management_kubeconfig> \
              patch hostedcluster -n <hosted_cluster_namespace> <hosted_cluster_name> \
              --type json \
              -p '[{"op": "replace", "path": "/spec/pausedUntil", "value": "false"}]'
            ```
        1.  Start the reconciliation of the `NodePool` resource by running the following command:
            ```terminal
            $ oc --kubeconfig <restore_management_kubeconfig> \
              patch nodepool -n <hosted_cluster_namespace> <node_pool_name> \
              --type json \
              -p '[{"op": "replace", "path": "/spec/pausedUntil", "value": "false"}]'
            ```
        1.  Verify that the hosted cluster is reporting that the hosted control plane is available by running the following command:
            ```terminal
            $ oc --kubeconfig <restore_management_kubeconfig> get hostedcluster
            ```
        1.  Verify that the hosted cluster is reporting that the cluster operators are available by running the following command:
            ```terminal
            $ oc get co --kubeconfig <hosted_cluster_kubeconfig>
            ```
    1.  Start the reconciliation of the Agent provider resources that you paused during backing up of the control plane workload:
        1.  Start the reconciliation of the `AgentCluster` resource by running the following command:
            ```terminal
            $ oc --kubeconfig <restore_management_kubeconfig> \
              annotate agentcluster -n <hosted_control_plane_namespace>  \
              cluster.x-k8s.io/paused- --overwrite=true --all
            ```
        1.  Start the reconciliation of the `AgentMachine` resource by running the following command:
            ```terminal
            $ oc --kubeconfig <restore_management_kubeconfig> \
              annotate agentmachine -n <hosted_control_plane_namespace>  \
              cluster.x-k8s.io/paused- --overwrite=true --all
            ```
        1.  Start the reconciliation of the `Cluster` resource by running the following command:
            ```terminal
            $ oc --kubeconfig <restore_management_kubeconfig> \
              annotate cluster -n <hosted_control_plane_namespace> \
              cluster.x-k8s.io/paused- --overwrite=true --all
            ```
    1.  Verify that the node pool is working as expected by running the following command:
        ```terminal
        $ oc --kubeconfig <restore_management_kubeconfig> \
          get nodepool -n <hosted_cluster_namespace> 
        ```
        ```terminal title="Example output"
        NAME       CLUSTER    DESIRED NODES   CURRENT NODES   AUTOSCALING   AUTOREPAIR   VERSION   UPDATINGVERSION   UPDATINGCONFIG   MESSAGE
        hosted-0   hosted-0   3               3               False         False        4.17.11   False             False
        ```
    1.  Optional: To ensure that no conflicts exist and that the new management cluster has continued functionality, remove the `HostedCluster` resources from the backup management cluster by completing the following steps:
        1.  In the management cluster that you backed up from, in the `ClusterDeployment` resource, set the `spec.preserveOnDelete` parameter to `true` by running the following command:
            ```terminal
            $ oc --kubeconfig <backup_management_kubeconfig> patch \
              -n <hosted_control_plane_namespace> \
              ClusterDeployment/<hosted_cluster_name> -p \
              '{"spec":{"preserveOnDelete":'true'}}' \
              --type=merge
            ```

            This step ensures that the hosts are not deprovisioned.
        1.  Delete the machines by running the following commands:
            ```terminal
            $ oc --kubeconfig <backup_management_kubeconfig> patch \
              <machine_name> -n <hosted_control_plane_namespace> -p \
              '[{"op":"remove","path":"/metadata/finalizers"}]' \
              --type=merge
            ```
            ```terminal
            $ oc --kubeconfig <backup_management_kubeconfig> \
              delete machine <machine_name> \
              -n <hosted_control_plane_namespace>
            ```
        1.  Delete the `AgentCluster` and `Cluster` resources by running the following commands:
            ```terminal
            $ oc --kubeconfig <backup_management_kubeconfig> \
              delete agentcluster <hosted_cluster_name> \
              -n <hosted_control_plane_namespace>
            ```
            ```terminal
            $ oc --kubeconfig <backup_management_kubeconfig> \
              patch cluster <cluster_name> \
              -n <hosted_control_plane_namespace> \
              -p '[{"op":"remove","path":"/metadata/finalizers"}]' \
              --type=json
            ```
            ```terminal
            $ oc --kubeconfig <backup_management_kubeconfig> \
              delete cluster <cluster_name> \
              -n <hosted_control_plane_namespace> 
            ```
        1.  If you use {{ rh_rhacm_title }}, delete the managed cluster by running the following commands:
            ```terminal
            $ oc --kubeconfig <backup_management_kubeconfig> \
              patch managedcluster <hosted_cluster_name> \
              -n <hosted_cluster_namespace> \
              -p '[{"op":"remove","path":"/metadata/finalizers"}]' \
              --type=json
            ```
            ```terminal
            $ oc --kubeconfig <backup_management_kubeconfig> \
              delete managedcluster <hosted_cluster_name> \
              -n <hosted_cluster_namespace>
            ```
        1.  Delete the `HostedCluster` resource by running the following command:
            ```terminal
            $ oc --kubeconfig <backup_management_kubeconfig> \
              delete hostedcluster \
              -n <hosted_cluster_namespace> <hosted_cluster_name>
            ```