{%- set _mod_docs_content_type = "PROCEDURE" %}
# Exchanging remote secrets {id="zero-trust-manager-exchange-remote-secrets_{{ context }}"}

Create remote secrets on both clusters so `Istiod` can discover services in the peer cluster and route cross-cluster traffic through the east-west gateways. {._abstract}

**Prerequisites**

*   You have deployed the east-west gateway, including the cross-network `Gateway` CR on both clusters. For more information, see "Deploying east-west gateways".
*   The environment variables from the "Preparing the environment for multi-cluster {{ spire_full }} federation" and "Deploying {{ spire_full }} with federation on both clusters" procedures are set.
*   The `istioctl` CLI is available and configured for both clusters.

**Procedure**

1.  Create an Istio remote secret on Cluster A by running the following command:
    ```terminal
    $ istioctl create-remote-secret \
      --kubeconfig="${CLUSTER_A_KUBECONFIG}" \
      --name="${CLUSTER_A}" \
      --istioNamespace=istio-system | \
      oc apply --kubeconfig="${CLUSTER_B_KUBECONFIG}" -f -
    ```
1.  Create an Istio remote secret on Cluster B by running the following command:
    ```terminal
    $ istioctl create-remote-secret \
      --kubeconfig="${CLUSTER_B_KUBECONFIG}" \
      --name="${CLUSTER_B}" \
      --istioNamespace=istio-system | \
      oc apply --kubeconfig="${CLUSTER_A_KUBECONFIG}" -f -
    ```
1.  Verify that the remote cluster is synced on Cluster A by running the following command:
    ```terminal
    $ istioctl remote-clusters --kubeconfig="${CLUSTER_A_KUBECONFIG}"
    ```

    The output must show `${{ CLUSTER_B }}` with status `synced`.
    ```text title="Example output"
    NAME         STATUS   SECRET
    cluster-b    synced   istio-remote-secret-cluster-b
    ```
1.  Verify that the remote cluster is synced on Cluster B by running the following command:
    ```terminal
    $ istioctl remote-clusters --kubeconfig="${CLUSTER_B_KUBECONFIG}"
    ```

    The output must show `${{ CLUSTER_A }}` with status `synced`.
    ```text title="Example output"
    NAME         STATUS   SECRET
    cluster-a    synced   istio-remote-secret-cluster-a
    ```