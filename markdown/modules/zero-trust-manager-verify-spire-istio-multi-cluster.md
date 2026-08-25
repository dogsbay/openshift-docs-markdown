{%- set _mod_docs_content_type = "PROCEDURE" %}
# Verifying SPIRE integration with Istio on each cluster {id="zero-trust-manager-verify-spire-istio-multi-cluster_{{ context }}"}

Verify that {{ SMProductName }} on Cluster A and Cluster B obtains workload certificates from {{ spire_full }} (SPIRE). This confirms Istio sidecars use SPIRE-issued identities rather than the built-in Istio certificate authority (CA) before you proceed with cross-cluster mesh verification. {._abstract}

**Prerequisites**

*   You have deployed the Istio custom resource (CR) with the federation configuration. For more information, see "Deploying the Istio custom resource with the federation configuration".
*   The environment variables from the "Preparing the environment for multi-cluster {{ spire_full }} federation" and "Deploying {{ spire_full }} with federation on both clusters" procedures are set.
*   Istiod is running and ready on Cluster A and Cluster B.

**Procedure**

1.  Set the verification namespace variable by running the following command:
    ```terminal
    $ export VERIFY_NS=verify-ossm-ztwim
    ```
1.  Prepare the verification namespace on both clusters by running the following commands:
    1.  Create the verification namespace on Cluster A:
        ```terminal
        $ oc create namespace ${VERIFY_NS} --kubeconfig="${CLUSTER_A_KUBECONFIG}" 2>/dev/null || true
        ```
    1.  Enable Istio injection for the verification namespace on Cluster A:
        ```terminal
        $ oc label namespace ${VERIFY_NS} istio-injection=enabled \
          --kubeconfig="${CLUSTER_A_KUBECONFIG}" --overwrite
        ```
    1.  Create the verification namespace on Cluster B:
        ```terminal
        $ oc create namespace ${VERIFY_NS} --kubeconfig="${CLUSTER_B_KUBECONFIG}" 2>/dev/null || true
        ```
    1.  Enable Istio injection for the verification namespace on Cluster B:
        ```terminal
        $ oc label namespace ${VERIFY_NS} istio-injection=enabled \
          --kubeconfig="${CLUSTER_B_KUBECONFIG}" --overwrite
        ```
1.  Deploy the `httpbin` workload on Cluster A by running the following command:
    1.  Create a YAML file that defines the `httpbin` `Deployment` on Cluster A:
        ```yaml
        apiVersion: apps/v1
        kind: Deployment
        metadata:
          name: httpbin
          namespace: ${VERIFY_NS}
        spec:
          replicas: 1
          selector:
            matchLabels:
              app: httpbin
              version: v1
          template:
            metadata:
              annotations:
                inject.istio.io/templates: "sidecar,spire"
                spiffe.io/audience: "test-audience"
              labels:
                app: httpbin
                version: v1
            spec:
              containers:
              - image: docker.io/mccutchen/go-httpbin:v2.15.0
                imagePullPolicy: IfNotPresent
                name: httpbin
                ports:
                - containerPort: 8080
        ```
    1.  Apply the YAML file on Cluster A by running the following command:
        ```terminal
        $ oc apply --kubeconfig="${CLUSTER_A_KUBECONFIG}" -f <filename>
        ```
1.  Deploy the `httpbin` workload on Cluster B by running the following command:
    1.  Create a YAML file that defines the `httpbin` `Deployment` on Cluster B:
        ```yaml
        apiVersion: apps/v1
        kind: Deployment
        metadata:
          name: httpbin
          namespace: ${VERIFY_NS}
        spec:
          replicas: 1
          selector:
            matchLabels:
              app: httpbin
              version: v1
          template:
            metadata:
              annotations:
                inject.istio.io/templates: "sidecar,spire"
                spiffe.io/audience: "test-audience"
              labels:
                app: httpbin
                version: v1
            spec:
              containers:
              - image: docker.io/mccutchen/go-httpbin:v2.15.0
                imagePullPolicy: IfNotPresent
                name: httpbin
                ports:
                - containerPort: 8080
        ```
    1.  Apply the YAML file on Cluster B by running the following command:
        ```terminal
        $ oc apply --kubeconfig="${CLUSTER_B_KUBECONFIG}" -f <filename>
        ```
1.  Wait for the `httpbin` deployment to become available on Cluster A by running the following command:
    ```terminal
    $ oc rollout status deployment/httpbin \
      -n "${VERIFY_NS}" --kubeconfig="${CLUSTER_A_KUBECONFIG}" --timeout=300s
    ```
1.  Wait for the `httpbin` deployment to become available on Cluster B by running the following command:
    ```terminal
    $ oc rollout status deployment/httpbin \
      -n "${VERIFY_NS}" --kubeconfig="${CLUSTER_B_KUBECONFIG}" --timeout=300s
    ```
1.  Verify the Envoy sidecar certificate on Cluster A by running the following commands:
    1.  Get the `httpbin` pod name on Cluster A:
        ```terminal
        $ HTTPBIN_POD=$(oc get pod -l app=httpbin -n "${VERIFY_NS}" \
          --kubeconfig="${CLUSTER_A_KUBECONFIG}" -o jsonpath="{.items[0].metadata.name}")
        ```
    1.  Export the Envoy sidecar certificate chain for the `httpbin` pod on Cluster A:
        ```terminal
        $ istioctl --kubeconfig="${CLUSTER_A_KUBECONFIG}" proxy-config secret "${HTTPBIN_POD}" \
          -n "${VERIFY_NS}" -o json \
          | jq -r '.dynamicActiveSecrets[0].secret.tlsCertificate.certificateChain.inlineBytes' \
          | base64 --decode > chain-a.pem
        ```
    1.  Confirm the certificate was issued by SPIRE on Cluster A:
        ```terminal
        $ openssl x509 -in chain-a.pem -text | grep SPIRE
        ```
1.  Verify the Envoy sidecar certificate on Cluster B by running the following commands:
    1.  Get the `httpbin` pod name on Cluster B:
        ```terminal
        $ HTTPBIN_POD=$(oc get pod -l app=httpbin -n "${VERIFY_NS}" \
          --kubeconfig="${CLUSTER_B_KUBECONFIG}" -o jsonpath="{.items[0].metadata.name}")
        ```
    1.  Export the Envoy sidecar certificate chain for the `httpbin` pod on Cluster B:
        ```terminal
        $ istioctl --kubeconfig="${CLUSTER_B_KUBECONFIG}" proxy-config secret "${HTTPBIN_POD}" \
          -n "${VERIFY_NS}" -o json \
          | jq -r '.dynamicActiveSecrets[0].secret.tlsCertificate.certificateChain.inlineBytes' \
          | base64 --decode > chain-b.pem
        ```
    1.  Confirm the certificate was issued by SPIRE on Cluster B:
        ```terminal
        $ openssl x509 -in chain-b.pem -text | grep SPIRE
        ```
        ```text title="Example output"
         Issuer: C=US, O=RH, CN=<APP_DOMAIN>/serialNumber=...
                Subject: C=US, O=SPIRE
        ```

        If you see `SPIRE` in both `Issuer` and `Subject` on each cluster, {{ SMProductName }} is obtaining workload certificates from SPIRE rather than the Istio built-in CA.
1.  Remove the verification namespace from both clusters by running the following commands:
    1.  Remove the verification namespace from Cluster A:
        ```terminal
        $ oc delete namespace ${VERIFY_NS} --kubeconfig="${CLUSTER_A_KUBECONFIG}" --ignore-not-found
        ```
    1.  Remove the verification namespace from Cluster B:
        ```terminal
        $ oc delete namespace ${VERIFY_NS} --kubeconfig="${CLUSTER_B_KUBECONFIG}" --ignore-not-found
        ```