{%- set _mod_docs_content_type = "PROCEDURE" %}
# Create bring your own (BYO) firewall rules {id="cloud-experts-osd-gcp-byo-firewall-creating-byo-rules_{{ context }}"}

Create eight service-account-targeted rules that mirror the platform-managed rules and cover ingress. These rules coexist safely with the existing tag-targeted rules. {._abstract}

**Procedure**

1.  Create the API server rule for external access:

    :::note

    The `--source-ranges=0.0.0.0/0` value allows access from any IP address. If you restrict API access to specific networks, replace this value with a comma-separated list of your CIDR ranges.
    
    :::

    ```terminal
    $ gcloud compute firewall-rules create ${BYO_PREFIX}-api \
      --project=${GCP_PROJECT} \
      --network=${VPC_NETWORK} \
      --direction=INGRESS \
      --action=ALLOW \
      --rules=tcp:6443 \
      --source-ranges=0.0.0.0/0 \
      --target-service-accounts=${CP_SA} \
      --priority=1000
    ```
1.  Create the etcd rule for control plane internal communication:
    ```terminal
    $ gcloud compute firewall-rules create ${BYO_PREFIX}-etcd \
      --project=${GCP_PROJECT} \
      --network=${VPC_NETWORK} \
      --direction=INGRESS \
      --action=ALLOW \
      --rules=tcp:2379-2380 \
      --source-service-accounts=${CP_SA} \
      --target-service-accounts=${CP_SA} \
      --priority=1000
    ```
1.  Create the {{ GCP }} load balancer health checks rule for the control plane:
    ```terminal
    $ gcloud compute firewall-rules create ${BYO_PREFIX}-health-checks \
      --project=${GCP_PROJECT} \
      --network=${VPC_NETWORK} \
      --direction=INGRESS \
      --action=ALLOW \
      --rules=tcp:6080,tcp:6443,tcp:22624 \
      --source-ranges=${LB_CIDRS} \
      --target-service-accounts=${CP_SA} \
      --priority=1000
    ```
1.  Create the control plane services rule:
    ```terminal
    $ gcloud compute firewall-rules create ${BYO_PREFIX}-control-plane \
      --project=${GCP_PROJECT} \
      --network=${VPC_NETWORK} \
      --direction=INGRESS \
      --action=ALLOW \
      --rules=tcp:2379-2380,tcp:6443,tcp:9258-9259,tcp:10257-10259,tcp:22623-22624 \
      --source-service-accounts=${CP_SA} \
      --target-service-accounts=${CP_SA} \
      --priority=1000
    ```
1.  Create the internal network rule for node-to-node services:
    ```terminal
    $ gcloud compute firewall-rules create ${BYO_PREFIX}-internal-network \
      --project=${GCP_PROJECT} \
      --network=${VPC_NETWORK} \
      --direction=INGRESS \
      --action=ALLOW \
      --rules=tcp:9000-9999,tcp:10250-10259,tcp:22623-22624,tcp:30000-32767,udp:4789,udp:6081,udp:9000-9999,udp:500,udp:4500 \
      --source-service-accounts=${CP_SA},${WORKER_SA} \
      --target-service-accounts=${CP_SA},${WORKER_SA} \
      --priority=1000
    ```
1.  Create the internal cluster rule for all traffic between nodes:
    ```terminal
    $ gcloud compute firewall-rules create ${BYO_PREFIX}-internal-cluster \
      --project=${GCP_PROJECT} \
      --network=${VPC_NETWORK} \
      --direction=INGRESS \
      --action=ALLOW \
      --rules=tcp,udp,icmp \
      --source-service-accounts=${CP_SA},${WORKER_SA} \
      --target-service-accounts=${CP_SA},${WORKER_SA} \
      --priority=1000
    ```
1.  Create the ingress rule for external HTTP and HTTPS traffic to workers:
    ```terminal
    $ gcloud compute firewall-rules create ${BYO_PREFIX}-ingress-k8s-fw \
      --project=${GCP_PROJECT} \
      --network=${VPC_NETWORK} \
      --direction=INGRESS \
      --action=ALLOW \
      --rules=tcp:80,tcp:443 \
      --source-ranges=0.0.0.0/0 \
      --target-service-accounts=${WORKER_SA} \
      --priority=1000
    ```
1.  Create the ingress health checks rule for {{ GCP }} load balancer to worker node ports:
    ```terminal
    $ gcloud compute firewall-rules create ${BYO_PREFIX}-ingress-k8s-http-hc \
      --project=${GCP_PROJECT} \
      --network=${VPC_NETWORK} \
      --direction=INGRESS \
      --action=ALLOW \
      --rules=tcp:30000-32767 \
      --source-ranges=${LB_CIDRS} \
      --target-service-accounts=${WORKER_SA} \
      --priority=1000
    ```

**Verification**

1.  Confirm that all eight rules exist:
    ```terminal
    $ gcloud compute firewall-rules list \
      --project=${GCP_PROJECT} \
      --filter="network=${VPC_NETWORK} AND name~${BYO_PREFIX}" \
      --format="table(
        name,
        direction,
        allowed[].map().firewall_rule().list():label=ALLOWED,
        targetServiceAccounts.list():label=TARGET_SVC_ACCT
      )"
    ```
    ```terminal title="Example output"
    NAME                                 DIRECTION  ALLOWED                                                               TARGET_SVC_ACCT
    my-cluster-byo-api                   INGRESS    tcp:6443                                                              my-cluster-abcde-m@my-gcp-project.iam.gserviceaccount.com
    my-cluster-byo-control-plane         INGRESS    tcp:2379-2380,tcp:6443,tcp:9258-9259,tcp:10257-10259,tcp:22623-22624  my-cluster-abcde-m@my-gcp-project.iam.gserviceaccount.com
    my-cluster-byo-etcd                  INGRESS    tcp:2379-2380                                                         my-cluster-abcde-m@my-gcp-project.iam.gserviceaccount.com
    my-cluster-byo-health-checks         INGRESS    tcp:6080,tcp:6443,tcp:22624                                           my-cluster-abcde-m@my-gcp-project.iam.gserviceaccount.com
    my-cluster-byo-ingress-k8s-fw        INGRESS    tcp:80,tcp:443                                                        my-cluster-abcde-w@my-gcp-project.iam.gserviceaccount.com
    my-cluster-byo-ingress-k8s-http-hc   INGRESS    tcp:30000-32767                                                       my-cluster-abcde-w@my-gcp-project.iam.gserviceaccount.com
    my-cluster-byo-internal-cluster      INGRESS    tcp,udp,icmp                                                          my-cluster-abcde-m@my-gcp-project.iam.gserviceaccount.com,my-cluster-abcde-w@my-gcp-project.iam.gserviceaccount.com
    my-cluster-byo-internal-network      INGRESS    tcp:9000-9999,udp:4789,udp:6081                                       my-cluster-abcde-m@my-gcp-project.iam.gserviceaccount.com,my-cluster-abcde-w@my-gcp-project.iam.gserviceaccount.com
    ```
1.  Verify that the cluster is still healthy:
    ```terminal
    $ oc get --raw /healthz
    ```
    ```terminal title="Example output"
    ok
    ```