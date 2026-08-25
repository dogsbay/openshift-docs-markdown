{%- set _mod_docs_content_type = "PROCEDURE" %}
# Backing up etcd on a hosted cluster {id="hosted-cluster-etcd-backup-restore-on-premise_{{ context }}"}

Fix failures by taking a snapshot of etcd on a hosted cluster.  {._abstract}

**Prerequisites**

*   The `oc` and `jq` binaries have been installed.
*   For {{ hcp }} on {{ aws_short }}, the OIDC provider configuration must be accessible so that any necessary fixes can be completed after the restore process. See the following procedure for more information about applying any necessary fixes.
*   For {{ hcp }} on bare metal, the `InfraEnv` resource must reside in a different namespace from the hosted control plane namespace. Do not delete the `InfraEnv` resource during the backup or restore process.
*   Management cluster prerequisites:
    *   A valid `StorageClass` resource is configured in the management cluster.
    *   You have `cluster-admin` access to the management cluster.
    *   You have access to online storage that is compatible with {{ oadp_first }} cloud storage providers, such as {{ aws_first }} S3, {{ azure_first }}, {{ gcp_first }}, or MinIO. If you use S3 for backup storage, ensure that IAM roles and policies are configured. For more information, see "Configuring Amazon Web Services".
    *   Hosted control plane pods are accessible and functioning properly.
    *   You have access to the `openshift-adp` subscription through a `CatalogSource` object.
*   Service publishing strategy prerequisites for hosted clusters:
    *   The `APIServer` service must have a fixed hostname. Otherwise, the restore process fails and nodes cannot rejoin the cluster. For {{ hcp }} on {{ aws_short }}, the `APIServer` service can also use a `Route` service publishing strategy with a fixed hostname.
    *   For production environments, it is strongly recommended to configure all services with fixed hostnames. By having fixed hostnames, you can ensure full service continuity and DNS consistency during the restore process on a different management cluster.
    *   When you restore a hosted cluster to a different management cluster, all services in the hosted cluster must be configured with a fixed hostname in its `servicePublishingStrategy` property. This requirement applies to all platforms. Restoring a hosted cluster to a different management cluster is a Technology Preview feature. Restoring a hosted cluster to its original management cluster is supported.


    :::important

    After you back up the hosted cluster, you must back up workloads in the data cluster and then delete the original hosted cluster so that the restore process can begin.
    
    :::


**Procedure**

1.  Set up environment variables for your hosted cluster by entering the following commands, replacing values as necessary:
    ```terminal
    $ CLUSTER_NAME=my-cluster
    ```
    ```terminal
    $ HOSTED_CLUSTER_NAMESPACE=clusters
    ```
    ```terminal
    $ CONTROL_PLANE_NAMESPACE="${HOSTED_CLUSTER_NAMESPACE}-${CLUSTER_NAME}"
    ```
1.  Pause reconciliation of the hosted cluster by entering the following command, replacing values as necessary:
    ```terminal
    $ oc patch -n ${HOSTED_CLUSTER_NAMESPACE} hostedclusters/${CLUSTER_NAME} \
      -p '{"spec":{"pausedUntil":"true"}}' --type=merge
    ```
1.  Take a snapshot of etcd by using one of the following methods:
    *   Use a previously backed-up snapshot of etcd.
    *   If you have an available etcd pod, take a snapshot from the active etcd pod by completing the following steps:
        1.  List etcd pods by entering the following command:
            ```terminal
            $ oc get -n ${CONTROL_PLANE_NAMESPACE} pods -l app=etcd
            ```
        1.  Take a snapshot of the pod database and save it locally to your machine by entering the following commands:
            ```terminal
            $ ETCD_POD=etcd-0
            ```
            ```terminal
            $ oc exec -n ${CONTROL_PLANE_NAMESPACE} -c etcd -t ${ETCD_POD} -- \
              env ETCDCTL_API=3 /usr/bin/etcdctl \
              --cacert /etc/etcd/tls/etcd-ca/ca.crt \
              --cert /etc/etcd/tls/client/etcd-client.crt \
              --key /etc/etcd/tls/client/etcd-client.key \
              --endpoints=https://localhost:2379 \
              snapshot save /var/lib/snapshot.db
            ```
        1.  Verify that the snapshot is successful by entering the following command:
            ```terminal
            $ oc exec -n ${CONTROL_PLANE_NAMESPACE} -c etcd -t ${ETCD_POD} -- \
              env ETCDCTL_API=3 /usr/bin/etcdctl -w table snapshot status \
              /var/lib/snapshot.db
            ```
    *   Make a local copy of the snapshot:
        1.  Copy the snapshot by entering the following command:
            ```terminal
            $ oc cp -c etcd ${CONTROL_PLANE_NAMESPACE}/${ETCD_POD}:/var/lib/snapshot.db \
              /tmp/etcd.snapshot.db
            ```
        1.  Copy the snapshot database from etcd persistent storage:
            1.  List etcd pods by entering the following command:
                ```terminal
                $ oc get -n ${CONTROL_PLANE_NAMESPACE} pods -l app=etcd
                ```
            1.  Find a pod that is running and set its name as the value of `ETCD_POD: ETCD_POD=etcd-0`, and then copy its snapshot database by entering the following command:
                ```terminal
                $ oc cp -c etcd \
                  ${CONTROL_PLANE_NAMESPACE}/${ETCD_POD}:/var/lib/data/member/snap/db \
                  /tmp/etcd.snapshot.db
                ```