{%- set _mod_docs_content_type = "PROCEDURE" %}
# Using SPIRE federation with Automatic Certificate Management Environment protocol {id="zero-trust-manager-automatic-management_{{ context }}"}

Using SPIRE federation with Automatic Certificate Management Environment (ACME) protocol provides automatic certificate provisioning from Let’s Encrypt. ACME also enables automatic certificate renewal before expiration, eliminating manual certificate management overhead. {._abstract}

**Prerequisites**

*   You have installed the {{ zero_trust_full }} on all clusters that will participate in the federation.
*   You have installed the OpenShift CLI (`oc`).
*   You have `cluster-admin` privileges on all participating clusters.
*   Your federation endpoints must be publicly accessible for Let’s Encrypt HTTP-01 challenge validation.
*   You have network connectivity between all federated clusters.

**Procedure**

1.  Configure the `SpireServer` custom resource on each cluster to enable federation with ACME certificate management.

    Create or update your `SpireServer` resource with the federation configuration:
    ```yaml
    apiVersion: operator.openshift.io/v1alpha1
    kind: SpireServer
    metadata:
      name: cluster
    spec:
      trustDomain: cluster1.example.com
      federation:
        bundleEndpoint:
          profile: https_web
          refreshHint: 300
          httpsWeb:
            acme:
              directoryUrl: https://acme-v02.api.letsencrypt.org/directory
              domainName: federation.apps.cluster1.example.com
              email: admin@example.com
              tosAccepted: "true"
        managedRoute: "true"
    ```
    *   The `spec.trustDomain` field sets a unique trust domain for each cluster (for example, `cluster1.example.com`, `cluster2.example.com`).
    *   The `spec.federation.bundleEndpoint.profile` field uses the `https_web` profile for ACME-based certificate management.
    *   The `spec.federation.bundleEndpoint.httpsWeb.acme.directoryUrl` field contains the Let’s Encrypt production directory URL. For testing, use: `https://acme-staging-v02.api.letsencrypt.org/directory`.
    *   The `spec.federation.bundleEndpoint.httpsWeb.acme.domainName` field is the domain name where your federation endpoint is accessible. This automatically sets to `federation.<cluster-apps-domain>` if `managedRoute` is set to "true".
    *   The `spec.federation.bundleEndpoint.httpsWeb.acme.email` field is your email address for ACME account registration and certificate expiration notifications.
    *   The `spec.federation.bundleEndpoint.httpsWeb.acme.tosAccepted` field accepts the Let’s Encrypt Terms of Service.
    *   The `spec.federation.managedRoute` field enables an automatic route creation by the operator for the federation bundle endpoint.
1.  Apply the configuration to each cluster by running the following command:
    ```terminal
    $ oc apply -f spireserver.yaml
    ```
1.  Check the status of the SPIRE Server by entering the following command. Wait for the `Ready` status to be returned before proceeding to the next step.
    ```terminal
    $ oc get spireserver cluster -w
    ```
    ```terminal title="Example output"
    NAME      STATUS   AGE
    cluster   Ready    5m
    ```
1.  Verify that the federation route has been created by running the following command:
    ```terminal
    $ oc get route -n zero-trust-workload-identity-manager | grep federation
    ```
    ```terminal title="Example output"
    NAME                      HOST/PORT                                          PATH   SERVICES        PORT   TERMINATION
    spire-server-federation   federation.apps.cluster1.example.com                     spire-server     8443    passthrough
    ```
1.  On each cluster, fetch the trust bundle from the federation endpoint by running the following command:
    ```terminal
    $ curl https://federation.apps.cluster1.example.com > cluster1-bundle.json
    ```

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
1.  Create `ClusterFederatedTrustDomain` resources to establish federation relationships.
    1.  On Cluster 1, create resources to federate with Cluster 2 and Cluster 3:
        ```yaml
        apiVersion: spire.spiffe.io/v1alpha1
        kind: ClusterFederatedTrustDomain
        metadata:
          name: cluster2-federation
        spec:
          trustDomain: cluster2.example.com
          bundleEndpointURL: https://federation.apps.cluster2.example.com
          bundleEndpointProfile:
            type: https_web
          className: zero-trust-workload-identity-manager-spire
          trustDomainBundle: |
            {
              "keys": [...],
              "spiffe_sequence": 1
            }
        ---
        apiVersion: spire.spiffe.io/v1alpha1
        kind: ClusterFederatedTrustDomain
        metadata:
          name: cluster3-federation
        spec:
          trustDomain: cluster3.example.com
          bundleEndpointURL: https://federation.apps.cluster3.example.com
          bundleEndpointProfile:
            type: https_web
           className: zero-trust-workload-identity-manager-spire
          trustDomainBundle: |
            {
              "keys": [...],
              "spiffe_sequence": 1
            }
        ```
        *   The `spec.trustDomainBundle` field contains the complete trust bundle JSON that you fetched using `curl` in step 5.
        *   The `spec.className` field contains the name of a class to watch CRs for. Spire-controller-manager watches the resource only if `spec.className` is set to `zero-trust-workload-identity-manager-spire`.
1.  Apply the `ClusterFederatedTrustDomain` resources by running the following command:
    ```terminal
    $ oc apply -f cluster-federated-trust-domains.yaml
    ```
1.  Repeat steps 6 and 7 on each cluster to establish bidirectional federation. Each cluster needs `ClusterFederatedTrustDomain` resources for every other cluster it federates with.
1.  Update the `SpireServer` resource on each cluster to add the `federatesWith` configuration:
    ```yaml
    apiVersion: operator.openshift.io/v1alpha1
    kind: SpireServer
    metadata:
      name: cluster
    spec:
      # ... existing configuration ...
      federation:
        bundleEndpoint:
          # ... existing bundleEndpoint configuration ...
        federatesWith:
          - trustDomain: cluster2.example.com
            bundleEndpointUrl: https://federation.apps.cluster2.example.com
            bundleEndpointProfile: https_web
          - trustDomain: cluster3.example.com
            bundleEndpointUrl: https://federation.apps.cluster3.example.com
            bundleEndpointProfile: https_web
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
    NAME                  TRUST DOMAIN          ENDPOINT URL                                   AGE
    cluster2-federation   cluster2.example.com  https://federation.apps.cluster2.example.com   5m
    cluster3-federation   cluster3.example.com  https://federation.apps.cluster3.example.com   5m
    ```
1.  Check the status of a `ClusterFederatedTrustDomain` to ensure bundle synchronization is working by running the following command:
    ```terminal
    $ oc describe clusterfederatedtrustdomain cluster2-federation
    ```

    Look for `Successful` status conditions indicating that the trust bundle has been synchronized.
1.  Verify that the federation endpoint is accessible and serving the trust bundle by running the following command:
    ```terminal
    $ curl https://federation.apps.cluster1.example.com
    ```

    You should receive a JSON response containing the trust bundle.
1.  Check the SPIRE Server logs to confirm federation is active by running the following command:
    ```terminal
    $ oc logs -n zero-trust-workload-identity-manager deployment/spire-server -c spire-server --tail=50
    ```

    Look for log messages indicating successful bundle synchronization with federated trust domains.
1.  Verify that all SPIRE components are running by running the following command:
    ```terminal
    $ oc get pods -n zero-trust-workload-identity-manager
    ```
    ```terminal title="Example output"
    NAME                    READY   STATUS    RESTARTS   AGE
    spire-agent-abcde       1/1     Running   0          10m
    spire-server-0          2/2     Running   0          10m
    ```
1.  Optional: Test cross-cluster workload authentication by deploying workloads with SPIFFE identities on different clusters and verifying they can authenticate to each other using the federated trust.