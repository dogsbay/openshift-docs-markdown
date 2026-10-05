{%- set _mod_docs_content_type = "PROCEDURE" %}
# Record the existing platform-managed firewall rules {id="cloud-experts-osd-gcp-byo-firewall-recording-existing-rules_{{ context }}"}

Before making any changes, capture a snapshot of the current firewall rules. {._abstract}

**Procedure**

1.  List all firewall rules in the cluster virtual private cloud (VPC):
    ```terminal
    $ gcloud compute firewall-rules list \
      --project=${GCP_PROJECT} \
      --filter="network=${VPC_NETWORK}" \
      --format="table(
        name,
        direction,
        allowed[].map().firewall_rule().list():label=ALLOWED,
        sourceRanges.list():label=SOURCE_RANGES,
        targetTags.list():label=TARGET_TAGS,
        targetServiceAccounts.list():label=TARGET_SVC_ACCT
      )"
    ```

    :::note

    Any additional `k8s-*` rules are {{ GCP }} firewall rules that Kubernetes creates automatically when you provision a `LoadBalancer` service or an ingress on your cluster.
    
    :::

1.  Save the output to a file so that you can review it later:
    ```terminal
    $ gcloud compute firewall-rules list \
      --project=${GCP_PROJECT} \
      --filter="network=${VPC_NETWORK}" \
      --format=json > firewall-rules-backup.json
    ```

**Verification**

*   Verify that the snapshot file has the current rules:
    ```terminal
    $ jq -r '.[].name' firewall-rules-backup.json
    ```
    ```terminal title="Example output"
    my-cluster-abcde-api
    my-cluster-abcde-control-plane
    my-cluster-abcde-etcd
    my-cluster-abcde-health-checks
    my-cluster-abcde-internal-cluster
    my-cluster-abcde-internal-network
    ```