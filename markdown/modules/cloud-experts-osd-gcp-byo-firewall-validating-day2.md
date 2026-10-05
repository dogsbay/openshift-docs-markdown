{%- set _mod_docs_content_type = "PROCEDURE" %}
# Validate Day 2 operations (optional) {id="cloud-experts-osd-gcp-byo-firewall-validating-day2_{{ context }}"}

Optionally validate that bring your own (BYO) rules and the `firewall-rules-management` flag survive worker scale-up and z-stream upgrades. {._abstract}

**Prerequisites**

*   You set the environment variables for this tutorial in the same terminal session.
*   You disabled Cloud Controller Manager (CCM) firewall management.

**Procedure**

1.  Scale a machine pool to verify that BYO rules cover new nodes. The following command scales the `worker` machine pool from the default of 2 replicas to 3 replicas:
    ```terminal
    $ ocm edit machinepool worker --cluster=${CLUSTER_NAME} --replicas=3
    ```

    Service-account-targeted rules apply to any instance that runs with the matching Workload Identity Federation (WIF) service account, so new nodes require no firewall changes.
1.  Watch for the new node to reach the `Ready` state:
    ```terminal
    $ oc get nodes -w
    ```
    ```terminal title="Example output"
    NAME                                                STATUS   ROLES    AGE   VERSION
    my-cluster-abcde-worker-c-zzzzz.c.example.internal  Ready    worker   92s   v1.31.5
    ```
1.  Scale the machine pool back down when the validation is complete:
    ```terminal
    $ ocm edit machinepool worker --cluster=${CLUSTER_NAME} --replicas=2
    ```
1.  To validate a z-stream upgrade, list the available upgrade versions:
    ```terminal
    $ ocm describe cluster ${CLUSTER_NAME} --json | jq -r '.version.available_upgrades[]'
    ```
1.  Schedule an upgrade, replacing `<target_version>` with a version from the earlier command:

    :::important

    On {{ product_title }}, you must start upgrades through {{ cluster_manager }} rather than by using `oc adm upgrade`. The `Upgradeable=False` gate that the cloud-credential annotation sets blocks minor version upgrades only. It does not block z-stream upgrades.
    
    :::

    ```terminal
    $ CLUSTER_ID=$(ocm describe cluster ${CLUSTER_NAME} --json | jq -r '.id')
    $ TARGET_VERSION="<target_version>"
    $ NEXT_TS=$(date -u -d '+10 minutes' '+%Y-%m-%dT%H:%M:%SZ')
    $ echo '{"version":"'${TARGET_VERSION}'","schedule_type":"manual","next_run":"'${NEXT_TS}'"}' \
      > /tmp/upgrade-policy.json
    $ ocm post /api/clusters_mgmt/v1/clusters/${CLUSTER_ID}/upgrade_policies \
      --body=/tmp/upgrade-policy.json
    $ rm /tmp/upgrade-policy.json
    ```


    :::note

    On Linux, use `date -u -d '\+10 minutes' '\+%Y-%m-%dT%H:%M:%SZ'` instead.
    
    :::

1.  Check the upgrade progress:
    ```terminal
    $ ocm list upgradepolicies --cluster=${CLUSTER_NAME}
    ```

**Verification**

After the upgrade completes, perform the following checks:

1.  Verify the cluster version:
    ```terminal
    $ oc get clusterversion
    ```
    ```terminal title="Example output"
    NAME      VERSION   AVAILABLE   PROGRESSING   SINCE   STATUS
    version   4.18.2    True        False         12m     Cluster version is 4.18.2
    ```
1.  Verify that all nodes are in the `Ready` state:
    ```terminal
    $ oc get nodes
    ```
    ```terminal title="Example output"
    NAME                                                STATUS   ROLES                  AGE   VERSION
    my-cluster-abcde-master-0.c.example.internal        Ready    control-plane,master   3d    v1.31.6
    my-cluster-abcde-master-1.c.example.internal        Ready    control-plane,master   3d    v1.31.6
    my-cluster-abcde-master-2.c.example.internal        Ready    control-plane,master   3d    v1.31.6
    my-cluster-abcde-worker-a-xxxxx.c.example.internal  Ready    worker                 3d    v1.31.6
    my-cluster-abcde-worker-b-yyyyy.c.example.internal  Ready    worker                 3d    v1.31.6
    ```
1.  Verify that all cluster Operators are healthy:
    ```terminal
    $ oc get co
    ```
    ```terminal title="Example output"
    NAME                     VERSION   AVAILABLE   PROGRESSING   DEGRADED   SINCE
    authentication           4.18.2    True        False         False      10m
    cloud-controller-manager 4.18.2    True        False         False      11m
    dns                      4.18.2    True        False         False      10m
    etcd                     4.18.2    True        False         False      11m
    ingress                  4.18.2    True        False         False      10m
    kube-apiserver           4.18.2    True        False         False      9m
    network                  4.18.2    True        False         False      11m
    ```
1.  Confirm that the BYO firewall rules are still present:
    ```terminal
    $ gcloud compute firewall-rules list \
      --project=${GCP_PROJECT} \
      --filter="network=${VPC_NETWORK} AND name~${BYO_PREFIX}" \
      --format="table(name)"
    ```
    ```terminal title="Example output"
    NAME
    my-cluster-byo-api
    my-cluster-byo-control-plane
    my-cluster-byo-etcd
    my-cluster-byo-health-checks
    my-cluster-byo-ingress-k8s-fw
    my-cluster-byo-ingress-k8s-http-hc
    my-cluster-byo-internal-cluster
    my-cluster-byo-internal-network
    ```
1.  Confirm that the platform-managed rules are still not present:
    ```terminal
    $ gcloud compute firewall-rules list \
      --project=${GCP_PROJECT} \
      --filter="network=${VPC_NETWORK} AND name~${INFRA_ID}" \
      --format="table(name)"
    ```

    The command returns no platform-managed rules.
1.  Confirm that the flag persisted through the upgrade:
    ```terminal
    $ oc get cm cloud-conf -n openshift-cloud-controller-manager \
      -o jsonpath='{.data.cloud\.conf}' | grep firewall
    ```
    ```terminal title="Example output"
    firewall-rules-management = Disabled
    ```