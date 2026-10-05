{%- set _mod_docs_content_type = "PROCEDURE" %}
# Set environment variables {id="cloud-experts-osd-gcp-byo-firewall-setting-environment-variables_{{ context }}"}

Set the cluster name and {{ GCP }} project manually. The procedure derives all other values dynamically. {._abstract}

**Prerequisites**

*   You have an existing {{ product_title }} on {{ GCP }} cluster deployed with Workload Identity Federation (WIF).
*   You have the `gcloud` CLI installed with permissions to manage firewall rules in the {{ GCP }} project.
*   You have the `oc` CLI authenticated to the cluster with `cluster-admin` privileges.
*   You have the `ocm` CLI logged in to {{ cluster_manager }}.
*   You have the `jq` CLI installed.


:::important

The remaining procedures in this tutorial use the environment variables that you set here. Shell variables do not persist across terminal sessions. Run the remaining procedures in the same terminal session, or repeat this procedure in each new session.

:::


**Procedure**

1.  Set the cluster name and {{ GCP }} project:
    ```terminal
    $ export CLUSTER_NAME="<your_cluster_name>"
    $ export GCP_PROJECT="<your_gcp_project>"
    ```
1.  Derive the infrastructure ID from {{ cluster_manager }}:
    ```terminal
    $ export INFRA_ID=$(ocm describe cluster ${CLUSTER_NAME} --json | jq -r '.infra_id')
    $ echo "INFRA_ID: ${INFRA_ID}"
    ```
1.  Derive the virtual private cloud (VPC) network and bring your own (BYO) rule prefix:
    ```terminal
    $ export VPC_NETWORK="${INFRA_ID}-network"
    $ export BYO_PREFIX="${CLUSTER_NAME}-byo"
    ```
1.  Derive the WIF service accounts from the cluster compute instances:
    ```terminal
    $ export CP_SA=$(gcloud compute instances list \
      --project=${GCP_PROJECT} \
      --filter="name~${INFRA_ID}-master" \
      --format="value(serviceAccounts.email)" \
      --limit=1)
    $ export WORKER_SA=$(gcloud compute instances list \
      --project=${GCP_PROJECT} \
      --filter="name~${INFRA_ID}-worker" \
      --format="value(serviceAccounts.email)" \
      --limit=1)
    $ echo "CP_SA: ${CP_SA}"
    $ echo "WORKER_SA: ${WORKER_SA}"
    ```

    :::note

    The `--limit=1` option returns the service account of a single instance. All control plane instances in a cluster share one service account, and all worker instances share another, so a single instance is representative of its machine type.
    
    :::

1.  Set the {{ GCP }} health check probe IP ranges. These ranges are the {{ GCP }} global health check source ranges that all {{ GCP }} load balancers use:
    ```terminal
    $ export LB_CIDRS="35.191.0.0/16,130.211.0.0/22,209.85.152.0/22,209.85.204.0/22"
    ```

**Verification**

*   Verify that each variable has a value:
    ```terminal
    $ echo "CLUSTER_NAME:  ${CLUSTER_NAME}"
    $ echo "GCP_PROJECT:   ${GCP_PROJECT}"
    $ echo "INFRA_ID:      ${INFRA_ID}"
    $ echo "VPC_NETWORK:   ${VPC_NETWORK}"
    $ echo "BYO_PREFIX:    ${BYO_PREFIX}"
    $ echo "CP_SA:         ${CP_SA}"
    $ echo "WORKER_SA:     ${WORKER_SA}"
    $ echo "LB_CIDRS:      ${LB_CIDRS}"
    ```
    ```terminal title="Example output"
    CLUSTER_NAME:  my-cluster
    GCP_PROJECT:   my-gcp-project
    INFRA_ID:      my-cluster-abcde
    VPC_NETWORK:   my-cluster-abcde-network
    BYO_PREFIX:    my-cluster-byo
    CP_SA:         my-cluster-abcde-m@my-gcp-project.iam.gserviceaccount.com
    WORKER_SA:     my-cluster-abcde-w@my-gcp-project.iam.gserviceaccount.com
    LB_CIDRS:      35.191.0.0/16,130.211.0.0/22,209.85.152.0/22,209.85.204.0/22
    ```

    Each variable must have a non-empty value before you continue.