{%- set _mod_docs_content_type = "PROCEDURE" %}
# Configuring {{ SMProductName }} for multi-cluster {{ spire_full }} integration {id="zero-trust-manager-configure-spire-mesh-multi-cluster_{{ context }}"}

Configure {{ SMProductName }} on each cluster with federation settings, east-west gateways, and remote secrets to enable cross-cluster service communication by using SPIRE-issued certificates. {._abstract}

**Prerequisites**

*   You deployed {{ spire_full }} (SPIRE) with federation for multi-cluster integration. For more information, see "Deploying {{ spire_full }} with federation on both clusters".

**Procedure**

1.  Verify that the federation routes are created on Cluster A by running the following command:
    ```terminal
    $ oc get route -n ${ZTWIM_NS} --kubeconfig="${CLUSTER_A_KUBECONFIG}" | grep federation
    ```
1.  Verify that the federation routes are created on Cluster B by running the following command:
    ```terminal
    $ oc get route -n ${ZTWIM_NS} --kubeconfig="${CLUSTER_B_KUBECONFIG}" | grep federation
    ```
1.  On Cluster A, create a `ClusterFederatedTrustDomain` object pointing to Cluster B by running the following command:
    1.  Create a YAML file that defines the `ClusterFederatedTrustDomain` CR on Cluster A:
        ```yaml
        apiVersion: spire.spiffe.io/v1alpha1
        kind: ClusterFederatedTrustDomain
        metadata:
          name: federation-to-cluster-b
        spec:
          trustDomain: ${CLUSTER_B_TRUST_DOMAIN}
          bundleEndpointURL: ${FEDERATION_ENDPOINT_B}
          bundleEndpointProfile:
            type: https_spiffe
            endpointSPIFFEID: spiffe://${CLUSTER_B_TRUST_DOMAIN}/spire/server
        ```
    1.  Apply the YAML file on Cluster A by running the following command:
        ```terminal
        $ oc apply --kubeconfig="${CLUSTER_A_KUBECONFIG}" -f <filename>
        ```
1.  On Cluster B, create a `ClusterFederatedTrustDomain` object pointing to Cluster A by running the following command:
    1.  Create a YAML file that defines the `ClusterFederatedTrustDomain` CR on Cluster B:
        ```yaml
        apiVersion: spire.spiffe.io/v1alpha1
        kind: ClusterFederatedTrustDomain
        metadata:
          name: federation-to-cluster-a
        spec:
          trustDomain: ${CLUSTER_A_TRUST_DOMAIN}
          bundleEndpointURL: ${FEDERATION_ENDPOINT_A}
          bundleEndpointProfile:
            type: https_spiffe
            endpointSPIFFEID: spiffe://${CLUSTER_A_TRUST_DOMAIN}/spire/server
        ```
    1.  Apply the YAML file on Cluster B by running the following command:
        ```terminal
        $ oc apply --kubeconfig="${CLUSTER_B_KUBECONFIG}" -f <filename>
        ```

**Verification**

1.  Verify that the SPIRE Server on Cluster A has the trust bundle from Cluster B by running the following command:
    ```terminal
    $ oc exec --kubeconfig="${CLUSTER_A_KUBECONFIG}" -n ${ZTWIM_NS} spire-server-0 -c spire-server -- \
      spire-server bundle list -socketPath /tmp/spire-server/private/api.sock -format spiffe 2>&1 | head -5
    ```

    The output must show public keys for `${{ CLUSTER_B_TRUST_DOMAIN }}`{minja}.
    ```text title="Example output"
    {
      "trust_domains": {
        "${CLUSTER_B_TRUST_DOMAIN}": {
          "keys": [
    ```
1.  Verify that the SPIRE Server on Cluster B has the trust bundle from Cluster A by running the following command:
    ```terminal
    $ oc exec --kubeconfig="${CLUSTER_B_KUBECONFIG}" -n ${ZTWIM_NS} spire-server-0 -c spire-server -- \
      spire-server bundle list -socketPath /tmp/spire-server/private/api.sock -format spiffe 2>&1 | head -5
    ```

    The output must show public keys for `${{ CLUSTER_A_TRUST_DOMAIN }}`{minja}.
    ```text title="Example output"
    {
      "trust_domains": {
        "${CLUSTER_A_TRUST_DOMAIN}": {
          "keys": [
    ```
1.  Verify that the federation endpoint on Cluster A is reachable by running the following command:
    ```terminal
    $ curl -sk "${FEDERATION_ENDPOINT_A}" | python3 -c "import sys,json; print(f'Keys: {len(json.load(sys.stdin).get(\"keys\",[]))}')"
    ```

    The output must show at least one `x509-svid` key and one `jwt-svid` key.
    ```text title="Example output"
    Keys: 2
    ```
1.  Verify that the federation endpoint on Cluster B is reachable by running the following command:
    ```terminal
    $ curl -sk "${FEDERATION_ENDPOINT_B}" | python3 -c "import sys,json; print(f'Keys: {len(json.load(sys.stdin).get(\"keys\",[]))}')"
    ```

    The output must show at least one `x509-svid` key and one `jwt-svid` key.
    ```text title="Example output"
    Keys: 2
    ```