{%- set _mod_docs_content_type = "PROCEDURE" %}
# Preparing the environment for multi-cluster {{ spire_full }} federation {id="zero-trust-manager-prepare-spire-multi-cluster_{{ context }}"}

Export kubeconfig paths, trust domains, federation endpoints, and JWT issuer URLs for Cluster A and Cluster B before you deploy federated {{ spire_full }} (SPIRE) operands on both clusters. {._abstract}

**Prerequisites**

*   You have two {{ product_title }} clusters (4.x) with network connectivity between them.
*   You have installed {{ zero_trust_full }} on both clusters.
*   The {{ oc_first }} is configured with access to both clusters.
*   You have installed the `istioctl` CLI tool.
*   You have installed `helm`. This is used for gateway deployment.
*   You have Istio version 1.29.2 or later.

**Procedure**

1.  Export the namespace variables by running the following commands:
    ```terminal
    $ export ZTWIM_NS=zero-trust-workload-identity-manager
    ```
    ```terminal
    $ export OSSM_NS=istio-system
    ```
    ```terminal
    $ export OSSM_CNI=istio-cni
    ```
1.  Export the kubeconfig file paths for Cluster A and Cluster B by running the following commands:
    ```terminal
    $ export CLUSTER_A_KUBECONFIG="/path/to/cluster-a/kubeconfig"
    ```
    ```terminal
    $ export CLUSTER_B_KUBECONFIG="/path/to/cluster-b/kubeconfig"
    ```
1.  Set the base domain environment variables for Cluster A and Cluster B by running the following commands:
    ```terminal
    $ export CLUSTER_A_BASE_DOMAIN=$(oc get ingresses.config/cluster \
      -o jsonpath='{.spec.domain}' --kubeconfig "${CLUSTER_A_KUBECONFIG}")
    ```
    ```terminal
    $ export CLUSTER_B_BASE_DOMAIN=$(oc get ingresses.config/cluster \
      -o jsonpath='{.spec.domain}' --kubeconfig "${CLUSTER_B_KUBECONFIG}")
    ```
1.  Export the trust domain environment variables from the base domain of each cluster by running the following commands:
    ```terminal
    $ export CLUSTER_A_TRUST_DOMAIN="${CLUSTER_A_BASE_DOMAIN}"
    ```
    ```terminal
    $ export CLUSTER_B_TRUST_DOMAIN="${CLUSTER_B_BASE_DOMAIN}"
    ```
1.  Define the cluster and network environment variables by running the following commands:
    ```terminal
    $ export CLUSTER_A=cluster-a
    ```
    ```terminal
    $ export CLUSTER_B=cluster-b
    ```
    ```terminal
    $ export NETWORK_A=network-a
    ```
    ```terminal
    $ export NETWORK_B=network-b
    ```
1.  Export the federation endpoint URLs for Cluster A and Cluster B by running the following commands:
    ```terminal
    $ export FEDERATION_ENDPOINT_A="https://federation.${CLUSTER_A_BASE_DOMAIN}"
    ```
    ```terminal
    $ export FEDERATION_ENDPOINT_B="https://federation.${CLUSTER_B_BASE_DOMAIN}"
    ```
1.  Set the JWT issuer environment variables for Cluster A and Cluster B by running the following commands:
    ```terminal
    $ export JWT_ISSUER_A="https://oidc-discovery.${CLUSTER_A_BASE_DOMAIN}"
    ```
    ```terminal
    $ export JWT_ISSUER_B="https://oidc-discovery.${CLUSTER_B_BASE_DOMAIN}"
    ```