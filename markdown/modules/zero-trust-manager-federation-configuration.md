{%- set _mod_docs_content_type = "PROCEDURE" %}
# Configuring SPIRE federation with the https_spiffe profile {id="zero-trust-manager-federation-configuration_{{ context }}"}

The {{ zero_trust_full }} includes SPIRE Federation support, allowing multiple independent SPIRE deployments to establish trust relationships. This procedure demonstrates how to configure federation using the `https_spiffe` profile, which uses SPIFFE-based TLS authentication between SPIRE servers. {._abstract}

**Prerequisites**

*   You have installed the OpenShift CLI (`oc`).
*   You have installed the {{ zero_trust_full }} on all clusters that will participate in the federation.
*   You have `cluster-admin` privileges on all participating clusters.
*   You have network connectivity between the clusters you intend to federate.

**Procedure**

1.  Configure the `SpireServer` custom resource on each cluster to enable federation with the `https_spiffe` profile. The `https_spiffe` profile uses SPIFFE-based TLS authentication, where SPIRE servers authenticate to each other using their own SPIFFE Verifiable Identity Documents (SVIDs).
    ```yaml
    apiVersion: operator.openshift.io/v1alpha1
    kind: SpireServer
    metadata:
      name: cluster
    spec:
      trustDomain: cluster1.example.com
      federation:
        bundleEndpoint:
          profile: https_spiffe
          refreshHint: 300
        managedRoute: "true"
    ```
    *   The `spec.trustDomain` field sets a unique trust domain for each cluster.
    *   The `spec.federation.bundleEnpoint.profile` field uses the `https_spiffe` profile for SPIFFE-based TLS authentication.
    *   The `spec.federation.bundleEndpoint.refreshHint` field suggests intervals (in seconds) for remote servers to refresh the trust bundle. Range: 60-3600 seconds.
    *   The `spec.federation.managedRoute` field enables automatic route creation by the Operator.
1.  Apply the configuration changes by running the following command:
    ```terminal
    $ oc apply -f spire-server.yaml
    ```
1.  Check the status of the SPIRE Server by entering the following command. Wait for the `Ready` status to be returned.
    ```terminal
    $ oc get spireserver cluster -w
    ```
1.  Verify that the federation route has been created:
    ```terminal
    $ oc get route -n zero-trust-workload-identity-manager | grep federation
    ```
    ```terminal title="Example output"
    NAME                      HOST/PORT                                    PATH   SERVICES        PORT    TERMINATION
    spire-server-federation   federation.apps.cluster1.example.com               spire-server     8443    passthrough
    ```
1.  Fetch the trust bundle from each remote cluster’s federation endpoint:
    ```terminal
    $  curl -k https://federation.apps.cluster2.example.com > cluster2-bundle.json
    ```

    :::note

    For `https_spiffe` profile, you might need to use the `-k` flag if the certificate is not trusted by your system’s CA bundle:
    
    :::


    The response contains the trust bundle in JSON Web Key Set (JWKS) format:
    ```json title="Example trust bundle"
    {
      "keys": [
        {
          "use": "x509-svid",
          "kty": "RSA",
          "n": "...",
          "e": "AQAB",
          "x5c": ["..."]
        }
      ],
      "spiffe_sequence": 1,
      "refresh_hint": 300
    }
    ```
1.  Create `ClusterFederatedTrustDomain` resources for each remote trust domain.
    1.  On Cluster 1, create a resource to federate with Cluster 2:
        ```yaml
        apiVersion: spire.spiffe.io/v1alpha1
        kind: ClusterFederatedTrustDomain
        metadata:
          name: federation-to-cluster2
        spec:
          trustDomain: <CLUSTER2_APPS_DOMAIN>
          bundleEndpointURL: https://federation.<CLUSTER2_APPS_DOMAIN>
          bundleEndpointProfile:
            type: https_spiffe
            endpointSPIFFEID: spiffe://<CLUSTER2_APPS_DOMAIN>/spire/server
          className: zero-trust-workload-identity-manager-spire
          trustDomainBundle: |
            {
              "keys": [
                {
                  "use": "x509-svid",
                  "kty": "RSA",
                  "n": "...",
                  "e": "AQAB",
                  "x5c": ["..."]
                }
              ],
              "spiffe_sequence": 1
            }
        ```

        where

        `<CLUSTER2_APPS_DOMAIN>`
        :   Specifies the trust domain of the external cluster you are federating with.


`spec.bundleEndpointProfile.endpointSPIFFEID`
:   Specifies the SPIFFE ID of the remote SPIRE server. Required for `https_spiffe` profile to validate the remote server’s identity.


`spec.trustDomainBundle`
:   Specifies the complete trust bundle JSON that you fetched in the previous step.


`spec.className`
:   Specifies the name of a class to watch CRs for. Spire-controller-manager watches the resource only if `spec.className` is set to `zero-trust-workload-identity-manager-spire`.

1.  Apply the `ClusterFederatedTrustDomain` resource by running the following command:
    ```terminal
    $ oc apply -f clusterfederatedtrustdomain.yaml
    ```
1.  Repeat steps 5-7 on each cluster for every remote cluster it should federate with. For bidirectional federation, each cluster needs a `ClusterFederatedTrustDomain` resource for every other cluster.
1.  Update the `SpireServer` resource on each cluster to add the `federatesWith` configuration:
    ```yaml
    apiVersion: operator.openshift.io/v1alpha1
    kind: SpireServer
    metadata:
      name: cluster
    spec:
      trustDomain: cluster1.example.com
      federation:
        bundleEndpoint:
          profile: https_spiffe
          refreshHint: 300
        federatesWith:
          - trustDomain: cluster2.example.com
            bundleEndpointUrl: https://federation.apps.cluster2.example.com
            bundleEndpointProfile: https_spiffe
            endpointSpiffeId: spiffe://cluster2.example.com/spire/server
          - trustDomain: cluster3.example.com
            bundleEndpointUrl: https://federation.apps.cluster3.example.com
            bundleEndpointProfile: https_spiffe
            endpointSpiffeId: spiffe://cluster3.example.com/spire/server
        managedRoute: "true"
    ```
    *   The `spec.federation.federatesWith` field lists all remote trust domains this cluster should federate with.
1.  Apply the updated configuration by running the following command:
    ```terminal
    $ oc apply -f spireserver.yaml
    ```

**Verification**

1.  Verify that the `ClusterFederatedTrustDomain` resources have been created by running the following command:
    ```terminal
    $ oc get clusterfederatedtrustdomains
    ```
    ```terminal title="Example output"
    NAME                  TRUST DOMAIN           ENDPOINT URL                                      AGE
    cluster2-federation   cluster2.example.com   https://federation.apps.cluster2.example.com     5m
    cluster3-federation   cluster3.example.com   https://federation.apps.cluster3.example.com     5m
    ```
1.  Check the status of a `ClusterFederatedTrustDomain` to ensure bundle synchronization is working by running the following command:
    ```terminal
    $ oc describe clusterfederatedtrustdomain cluster2-federation
    ```

    Look for successful status conditions indicating that the trust bundle has been synchronized.
1.  Verify that the federation endpoint is accessible by running the following command:
    ```terminal
    $ curl https://federation.apps.cluster1.example.com
    ```

    You should receive a JSON response containing the trust bundle.
1.  Check the SPIRE Server logs to confirm federation is active by running the following command:
    ```terminal
    $ oc logs -n zero-trust-workload-identity-manager \
        statefulset/spire-server -c spire-server --tail=50
    ```

    Look for log messages indicating successful bundle synchronization with federated trust domains.