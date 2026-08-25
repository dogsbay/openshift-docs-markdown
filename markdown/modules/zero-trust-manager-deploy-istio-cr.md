{%- set _mod_docs_content_type = "PROCEDURE" %}
# Deploying the Istio custom resource with the federation configuration {id="zero-trust-manager-deploy-istio-cr_{{ context }}"}

Deploy the Istio custom resource on Cluster A and Cluster B with {{ spire_full }} (SPIRE) federation and multi-cluster {{ SMProductName }} settings. This configures Istiod to obtain workload certificates from SPIRE and to trust SPIFFE bundles from both clusters for cross-cluster mTLS. {._abstract}

The Istio CR must include the following fields and values:

*   A `meshConfig.trustDomain` value that matches the SPIRE trust domain.
*   A `meshConfig.caCertificates` value with bundle URLs for both clusters. This handles cross-trust-domain validation.
*   A `WORKLOAD_IDENTITY_SOCKET_FILE` value for SPIRE SDS integration.
*   A `jwksResolverExtraRootCA` value for OIDC validation.
*   A multi-cluster configuration that includes `meshID`, `clusterName`, and `network`.
*   A SPIRE injection template configuration.


:::note

Do not use `meshConfig.trustDomainAliases`. Use `meshConfig.caCertificates` with `spiffeBundleUrl` instead.

:::


**Prerequisites**

*   You have completed deploying the Istio Container Network Interface (CNI) on both clusters. For more information, see "Deploying {{ SMProductName }} CNI on both clusters".
*   The environment variables from the "Preparing the environment for multi-cluster {{ spire_full }} federation" and "Deploying {{ spire_full }} with federation on both clusters" procedures are set.

**Procedure**

1.  Extract the OpenID Connect (OIDC) certificate on Cluster A by running the following command:
    ```terminal
    $ export EXTRA_ROOT_CA_A="$(oc get secret oidc-serving-cert \
      --kubeconfig="${CLUSTER_A_KUBECONFIG}" -n ${ZTWIM_NS} -o json | \
      jq -r '.data."tls.crt"' | base64 -d | sed 's/^/        /')"
    ```
1.  Extract the OpenID Connect (OIDC) certificate on Cluster B by running the following command:
    ```terminal
    $ export EXTRA_ROOT_CA_B="$(oc get secret oidc-serving-cert \
      --kubeconfig="${CLUSTER_B_KUBECONFIG}" -n ${ZTWIM_NS} -o json | \
      jq -r '.data."tls.crt"' | base64 -d | sed 's/^/        /')"
    ```
1.  Get the bundle endpoint URL for Cluster A by running the following command:
    ```terminal
    $ export BUNDLE_URL_A="${FEDERATION_ENDPOINT_A}"
    ```
1.  Get the bundle endpoint URL for Cluster B by running the following command:
    ```terminal
    $ export BUNDLE_URL_B="${FEDERATION_ENDPOINT_B}"
    ```
1.  Create the `Istio` custom resource (CR) on Cluster A by running the following command:
    ```terminal
    $ oc new-project "${OSSM_NS}" --kubeconfig="${CLUSTER_A_KUBECONFIG}" 2>/dev/null || true
    ```
1.  Apply the `Istio` CR on Cluster A by running the following command:
    1.  Create a YAML file that defines the `Istio` CR on Cluster A:
        ```yaml
        apiVersion: sailoperator.io/v1
        kind: Istio
        metadata:
          name: default
        spec:
          namespace: istio-system
          updateStrategy:
            type: InPlace
          values:
            meshConfig:
              trustDomain: ${CLUSTER_A_TRUST_DOMAIN}
              defaultConfig:
                proxyMetadata:
                  WORKLOAD_IDENTITY_SOCKET_FILE: "spire-agent.sock"
              caCertificates:
                - spiffeBundleUrl: ${BUNDLE_URL_A}
                  trustDomains:
                    - ${CLUSTER_A_TRUST_DOMAIN}
                - spiffeBundleUrl: ${BUNDLE_URL_B}
                  trustDomains:
                    - ${CLUSTER_B_TRUST_DOMAIN}
            global:
              meshID: mesh1
              multiCluster:
                clusterName: ${CLUSTER_A}
              network: ${NETWORK_A}
            pilot:
              jwksResolverExtraRootCA: |
                ${EXTRA_ROOT_CA_A}
              env:
                ENABLE_CA_SERVER: "true"
            sidecarInjectorWebhook:
              templates:
                spire: |
                  spec:
                    initContainers:
                    - name: istio-proxy
                      volumeMounts:
                      - name: workload-socket
                        mountPath: /run/secrets/workload-spiffe-uds
                        readOnly: true
                    volumes:
                      - name: workload-socket
                        csi:
                          driver: "csi.spiffe.io"
                          readOnly: true
                spireGw: |
                  spec:
                    containers:
                    - name: istio-proxy
                      volumeMounts:
                      - name: workload-socket
                        mountPath: /run/secrets/workload-spiffe-uds
                        readOnly: true
                    volumes:
                      - name: workload-socket
                        csi:
                          driver: "csi.spiffe.io"
                          readOnly: true
        ```
    1.  Apply the YAML file on Cluster A by running the following command:
        ```terminal
        $ oc apply --kubeconfig="${CLUSTER_A_KUBECONFIG}" -f <filename>
        ```
1.  Create the `Istio` CR on Cluster B by running the following command:
    ```terminal
    $ oc new-project "${OSSM_NS}" --kubeconfig="${CLUSTER_B_KUBECONFIG}" 2>/dev/null || true
    ```
1.  Apply the `Istio` CR on Cluster B by running the following command:
    1.  Create a YAML file that defines the `Istio` CR on Cluster B:
        ```yaml
        apiVersion: sailoperator.io/v1
        kind: Istio
        metadata:
          name: default
        spec:
          namespace: istio-system
          updateStrategy:
            type: InPlace
          values:
            meshConfig:
              trustDomain: ${CLUSTER_B_TRUST_DOMAIN}
              defaultConfig:
                proxyMetadata:
                  WORKLOAD_IDENTITY_SOCKET_FILE: "spire-agent.sock"
              caCertificates:
                - spiffeBundleUrl: ${BUNDLE_URL_B}
                  trustDomains:
                    - ${CLUSTER_B_TRUST_DOMAIN}
                - spiffeBundleUrl: ${BUNDLE_URL_A}
                  trustDomains:
                    - ${CLUSTER_A_TRUST_DOMAIN}
            global:
              meshID: mesh1
              multiCluster:
                clusterName: ${CLUSTER_B}
              network: ${NETWORK_B}
            pilot:
              jwksResolverExtraRootCA: |
                ${EXTRA_ROOT_CA_B}
              env:
                ENABLE_CA_SERVER: "true"
            sidecarInjectorWebhook:
              templates:
                spire: |
                  spec:
                    initContainers:
                    - name: istio-proxy
                      volumeMounts:
                      - name: workload-socket
                        mountPath: /run/secrets/workload-spiffe-uds
                        readOnly: true
                    volumes:
                      - name: workload-socket
                        csi:
                          driver: "csi.spiffe.io"
                          readOnly: true
                spireGw: |
                  spec:
                    containers:
                    - name: istio-proxy
                      volumeMounts:
                      - name: workload-socket
                        mountPath: /run/secrets/workload-spiffe-uds
                        readOnly: true
                    volumes:
                      - name: workload-socket
                        csi:
                          driver: "csi.spiffe.io"
                          readOnly: true
        ```
    1.  Apply the YAML file on Cluster B by running the following command:
        ```terminal
        $ oc apply --kubeconfig="${CLUSTER_B_KUBECONFIG}" -f <filename>
        ```
1.  Wait for the `istiod` deployment to be created on Cluster A by running the following command:
    ```terminal
    $ until oc get deployment istiod --kubeconfig="${CLUSTER_A_KUBECONFIG}" -n "${OSSM_NS}" &> /dev/null; do
      sleep 3
    done
    ```
1.  Wait for `Istiod` to become ready on Cluster A by running the following command:
    ```terminal
    $ oc wait --for=condition=Available deployment/istiod \
      --kubeconfig="${CLUSTER_A_KUBECONFIG}" -n "${OSSM_NS}" --timeout=300s
    ```
1.  Wait for the `istiod` deployment to be created on Cluster B by running the following command:
    ```terminal
    $ until oc get deployment istiod --kubeconfig="${CLUSTER_B_KUBECONFIG}" -n "${OSSM_NS}" &> /dev/null; do
      sleep 3
    done
    ```
1.  Wait for `Istiod` to become ready on Cluster B by running the following command:
    ```terminal
    $ oc wait --for=condition=Available deployment/istiod \
      --kubeconfig="${CLUSTER_B_KUBECONFIG}" -n "${OSSM_NS}" --timeout=300s
    ```