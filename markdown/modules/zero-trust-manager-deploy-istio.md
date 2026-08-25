{%- set _mod_docs_content_type = "PROCEDURE" %}
# Deploying {{ SMProductName }} for SPIRE integration {id="zero-trust-manager-deploy-istio_{{ context }}"}

Deploy {{ SMProductName }} by creating the `IstioCNI` and `Istio` CRs with SPIRE integration settings so Envoy sidecars obtain SPIRE-issued certificates for workload mTLS after the SPIRE stack is running. {._abstract}

**Prerequisites**

*   You have installed {{ zero_trust_full }}.
*   The {{ oc_first }} is configured with access to the cluster.
*   You have permissions to create namespaces and custom resources in the `istio-cni` and `istio-system` namespaces.
*   You have permissions to read secrets in the `zero-trust-workload-identity-manager` namespace.

**Procedure**

1.  Set the Istio environment variables by running the following commands:
    ```terminal
    $ export ZTWIM_NS=zero-trust-workload-identity-manager
    $ export TRUST_DOMAIN=ocp.one
    $ export JWT_ISSUER="https://oidc-discovery.$(oc get ingresses.config/cluster -o jsonpath={.spec.domain})"
    $ export OSSM_NS=istio-system
    $ export OSSM_CNI=istio-cni
    $ export VERIFY_NS=verify-ossm-ztwim
    $ export EXTRA_ROOT_CA="$(oc get secret oidc-serving-cert \
                             -n ${ZTWIM_NS} -o json | \
                             jq -r '.data."tls.crt"' | \
                             base64 -d | \
                             sed 's/^/        /')"
    ```
1.  Create the `IstioCNI` CR to deploy Istio CNI by running the following commands:
    ```terminal
    $ oc new-project "${OSSM_CNI}" 2>/dev/null || oc project "${OSSM_CNI}"
    ```
    ```yaml
    $ oc apply -f - <<EOF
    apiVersion: sailoperator.io/v1
    kind: IstioCNI
    metadata:
      name: default
    spec:
      version: <version>
      namespace: ${OSSM_CNI}
    EOF
    ```

    where:

    `spec.version`
    :   Replace `<version>` with the Istio version supported by your {{ SMProductName }} Operator. You can find supported versions by running `oc get IstioCNI -o jsonpath='{.items[*].spec.version}'` after the Operator is installed.

1.  Wait for Istio CNI to become ready by running the following commands:
    ```terminal
    $ until oc get daemonset/istio-cni-node -n "${OSSM_CNI}" &> /dev/null; do sleep 3; done
    ```
    ```terminal
    $ kubectl rollout status daemonset/istio-cni-node -n "${OSSM_CNI}" --timeout=300s
    ```

    The `until` loop waits for the {{ SMProductName }} Operator to create the `istio-cni-node` DaemonSet. The `oc rollout status` command waits for the DaemonSet pods to become ready.
1.  Install the Istio CR with SPIRE integration by running the following commands:
    ```terminal
    $ oc new-project "${OSSM_NS}" 2>/dev/null
    ```
    ```yaml
    $ cat <<EOF | oc apply -f -
    apiVersion: sailoperator.io/v1
    kind: Istio
    metadata:
      name: default
    spec:
      namespace: istio-system
      updateStrategy:
        type: InPlace
      values:
        pilot:
          jwksResolverExtraRootCA: |
    ${EXTRA_ROOT_CA}
          env:
            PILOT_JWT_ENABLE_REMOTE_JWKS: "true"
        meshConfig:
          trustDomain: $TRUST_DOMAIN
          defaultConfig:
            proxyMetadata:
              WORKLOAD_IDENTITY_SOCKET_FILE: "spire-agent.sock"
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
            spireGateway: |
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
    EOF
    ```
1.  Wait for all of the resources to become ready by running the following commands:
    ```terminal
    $ until oc get deployment istiod -n "${OSSM_NS}" &> /dev/null; do sleep 3; done
    ```
    ```terminal
    $ oc wait --for=condition=Available deployment/istiod -n "${OSSM_NS}" --timeout=300s
    ```

**Verification**

1.  Verify that Istio is integrated with SPIRE:
    1.  Create a test workload with the `spire` injection template by running the following commands:
        ```terminal
        $ oc new-project "${VERIFY_NS}" 2>/dev/null
        ```
    1.  Enable the sidecar injection by running the following command:
        ```terminal
        $ oc label namespace "${VERIFY_NS}" istio-injection=enabled
        ```
    1.  Create the `httpbin` workload:
        ```yaml
        $ cat <<EOF | oc apply -f -
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
        EOF
        ```
    1.  Wait for all of the resources to become ready by running the following commands:
        ```terminal
        $ until oc get deployment httpbin -n "${VERIFY_NS}" &> /dev/null; do sleep 3; done
        ```
        ```terminal
        $ oc wait --for=condition=Available deployment/httpbin -n "${VERIFY_NS}" --timeout=300s
        ```
    1.  Verify the SPIRE workload identity by running the following command:
        ```terminal
        $ HTTPBIN_POD=$(oc get pod -l app=httpbin -n "${VERIFY_NS}" -o jsonpath="{.items[0].metadata.name}")

        $ istioctl proxy-config secret "$HTTPBIN_POD" \
          -n "${VERIFY_NS}" -o json \
          | jq -r '.dynamicActiveSecrets[0].secret.tlsCertificate.certificateChain.inlineBytes' \
          | base64 --decode > chain.pem

        openssl x509 -in chain.pem -text | grep SPIRE
        ```
        ```terminal title="Example output"
         Issuer: C=US, O=RH, CN=<APP_DOMAIN>/serialNumber=...
                Subject: C=US, O=SPIRE
        ```

        If you see `SPIRE` in both `Issuer` and `Subject`, the integration is working. Envoy is getting its certificates from SPIRE, not from Istio’s built-in CA.
    1.  Remove the namespace by running the following command:
        ```terminal
        $ oc delete namespace "${VERIFY_NS}"
        ```