{%- set _mod_docs_content_type = "PROCEDURE" %}
# Delete platform-managed firewall rules {id="cloud-experts-osd-gcp-byo-firewall-deleting-platform-rules_{{ context }}"}

With bring your own (BYO) rules in place, remove the original tag-targeted rules. Leave the `k8s-*` rules that the Cloud Controller Manager (CCM) manages for existing `LoadBalancer` services in place. {._abstract}


:::warning

Verify that the BYO firewall rules are active and the cluster is healthy before deleting the platform-managed rules. Deleting these rules without BYO replacements in place disrupts cluster networking.

:::


**Procedure**

*   Delete the six platform-managed firewall rules:
    ```terminal
    $ gcloud compute firewall-rules delete \
      ${INFRA_ID}-api \
      ${INFRA_ID}-control-plane \
      ${INFRA_ID}-etcd \
      ${INFRA_ID}-health-checks \
      ${INFRA_ID}-internal-cluster \
      ${INFRA_ID}-internal-network \
      --project=${GCP_PROJECT} --quiet
    ```

**Verification**

1.  Verify that the API server is healthy:
    ```terminal
    $ oc get --raw /healthz
    ```
    ```terminal title="Example output"
    ok
    ```
1.  Verify that all nodes are in the `Ready` state:
    ```terminal
    $ oc get nodes
    ```
    ```terminal title="Example output"
    NAME                                             STATUS   ROLES                  AGE   VERSION
    my-cluster-abcde-master-0.c.example.internal     Ready    control-plane,master   3d    v1.31.5
    my-cluster-abcde-master-1.c.example.internal     Ready    control-plane,master   3d    v1.31.5
    my-cluster-abcde-master-2.c.example.internal     Ready    control-plane,master   3d    v1.31.5
    my-cluster-abcde-worker-a-xxxxx.c.example.internal   Ready    worker             3d    v1.31.5
    my-cluster-abcde-worker-b-yyyyy.c.example.internal   Ready    worker             3d    v1.31.5
    ```
1.  Verify that all cluster Operators are healthy:
    ```terminal
    $ oc get co
    ```
1.  If you deployed the baseline workload, verify that the ingress route is responding:
    ```terminal
    $ curl -s http://$(oc get route hello -n byo-fw-test -o jsonpath='{.spec.host}')
    ```
    ```terminal title="Example output"
    Hello OpenShift!
    ```