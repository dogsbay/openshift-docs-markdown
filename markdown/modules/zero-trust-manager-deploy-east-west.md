{%- set _mod_docs_content_type = "PROCEDURE" %}
# Deploying east-west gateways {id="zero-trust-manager-deploy-east-west_{{ context }}"}

Deploy SPIRE-enabled east-west gateways on both clusters using Helm. {{ SMProductName }} uses east-west gateways to connect cluster networks and enable secure cross-cluster communication in a multi-cluster mesh. {._abstract}

**Prerequisites**

*   You deployed the Istio custom resource with the federation configuration. For more information, see "Deploying the Istio custom resource with the federation configuration".
*   The environment variables from the "Preparing the environment for multi-cluster {{ spire_full }} federation" and "Deploying {{ spire_full }} with federation on both clusters" procedures are set.
*   Federated `ClusterSPIFFEID` resources exist on both clusters.

**Procedure**

1.  Add the Istio Helm repository by running the following command:
    ```terminal
    $ helm repo add istio https://istio-release.storage.googleapis.com/charts
    ```
1.  Update the Istio Helm repository by running the following command:
    ```terminal
    $ helm repo update
    ```
1.  Grant security context constraints (SCC) permissions on Cluster A by running the following command:
    ```terminal
    $ oc adm policy add-scc-to-user anyuid \
      -z istio-eastwestgateway -n istio-system --kubeconfig="${CLUSTER_A_KUBECONFIG}"
    ```
1.  Grant security context constraints (SCC) permissions on Cluster B by running the following command:
    ```terminal
    $ oc adm policy add-scc-to-user anyuid \
      -z istio-eastwestgateway -n istio-system --kubeconfig="${CLUSTER_B_KUBECONFIG}"
    ```
1.  Install the Istio gateway on Cluster A by running the following command:
    ```terminal
    $ helm upgrade --install istio-eastwestgateway istio/gateway \
      -n istio-system \
      --set-json 'podAnnotations={"inject.istio.io/templates":"gateway,spireGw"}' \
      --set name=istio-eastwestgateway \
      --set networkGateway="${NETWORK_A}" \
      --kubeconfig="${CLUSTER_A_KUBECONFIG}"
    ```
1.  Install the Istio gateway on Cluster B by running the following command:
    ```terminal
    $ helm upgrade --install istio-eastwestgateway istio/gateway \
      -n istio-system \
      --set-json 'podAnnotations={"inject.istio.io/templates":"gateway,spireGw"}' \
      --set name=istio-eastwestgateway \
      --set networkGateway="${NETWORK_B}" \
      --kubeconfig="${CLUSTER_B_KUBECONFIG}"
    ```
1.  Wait for the east-west gateway to become available on Cluster A by running the following command:
    ```terminal
    $ oc wait --for=condition=Available deployment/istio-eastwestgateway \
      --kubeconfig="${CLUSTER_A_KUBECONFIG}" -n istio-system --timeout=300s
    ```
1.  Wait for the east-west gateway to become available on Cluster B by running the following command:
    ```terminal
    $ oc wait --for=condition=Available deployment/istio-eastwestgateway \
      --kubeconfig="${CLUSTER_B_KUBECONFIG}" -n istio-system --timeout=300s
    ```
1.  Create the cross-network `Gateway` custom resource (CR) on Cluster A by running the following command:
    1.  Create a YAML file that defines the `Gateway` CR on Cluster A:
        ```yaml
        apiVersion: networking.istio.io/v1alpha3
        kind: Gateway
        metadata:
          name: cross-network-gateway
          namespace: istio-system
        spec:
          selector:
            istio: eastwestgateway
          servers:
            - port:
                number: 15443
                name: tls
                protocol: TLS
              tls:
                mode: AUTO_PASSTHROUGH
              hosts:
                - "*.local"
        ```
    1.  Apply the YAML file on Cluster A by running the following command:
        ```terminal
        $ oc apply --kubeconfig="${CLUSTER_A_KUBECONFIG}" -f <filename>
        ```
1.  Create the cross-network `Gateway` CR on Cluster B by running the following command:
    1.  Create a YAML file that defines the `Gateway` CR on Cluster B:
        ```yaml
        apiVersion: networking.istio.io/v1alpha3
        kind: Gateway
        metadata:
          name: cross-network-gateway
          namespace: istio-system
        spec:
          selector:
            istio: eastwestgateway
          servers:
            - port:
                number: 15443
                name: tls
                protocol: TLS
              tls:
                mode: AUTO_PASSTHROUGH
              hosts:
                - "*.local"
        ```
    1.  Apply the YAML file on Cluster B by running the following command:
        ```terminal
        $ oc apply --kubeconfig="${CLUSTER_B_KUBECONFIG}" -f <filename>
        ```

        The `Gateway` CRs configure the east-west gateway deployment to accept cross-cluster TLS traffic on port 15443 using `AUTO_PASSTHROUGH` mode. This preserves SPIRE-issued certificates for end-to-end mTLS.

**Verification**

1.  Verify that the cross-network `Gateway` exists on Cluster A by running the following command:
    ```terminal
    $ oc get gateway cross-network-gateway -n istio-system \
      --kubeconfig="${CLUSTER_A_KUBECONFIG}" \
      -o jsonpath='{.spec.servers[0].tls.mode}{"\n"}'
    ```
    ```text title="Example output"
    AUTO_PASSTHROUGH
    ```
1.  Verify that the cross-network `Gateway` exists on Cluster B by running the following command:
    ```terminal
    $ oc get gateway cross-network-gateway -n istio-system \
      --kubeconfig="${CLUSTER_B_KUBECONFIG}" \
      -o jsonpath='{.spec.servers[0].tls.mode}{"\n"}'
    ```
    ```text title="Example output"
    AUTO_PASSTHROUGH
    ```