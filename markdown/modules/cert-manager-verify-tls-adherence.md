{%- set _mod_docs_content_type = "PROCEDURE" %}
# Verifying TLS security profile adherence for cert-manager components {id="cert-manager-verify-tls-adherence_{{ context }}"}

After configuring the cluster TLS security profile adherence, you can verify that the TLS configuration is applied to the cert-manager controller, webhook, and CA injector deployments. {._abstract}

**Prerequisites**

*   You have access to the cluster with `cluster-admin` privileges.
*   You installed the {{ cert_manager_operator }}.
*   You enabled the `TechPreviewNoUpgrade` feature set. For more information, see "Enabling features using feature gates".
*   You configured the cluster TLS security profile adherence for cert-manager components. For more information, see "Configuring cluster TLS security profile adherence for cert-manager components".

**Procedure**

1.  Verify that the cert-manager controller deployment has the TLS configuration applied by running the following command:
    ```terminal
    $ oc get deployment -n cert-manager cert-manager -o yaml | grep -A 15 "args:"
    ```
    ```terminal title="Example output"
    args:
    - --v=2
    - --cluster-resource-namespace=$(POD_NAMESPACE)
    - --leader-election-namespace=kube-system
    - --acme-http01-solver-image=registry.redhat.io/cert-manager/cert-manager-acmesolver-rhel9@sha256:...
    - --max-concurrent-challenges=60
    - --metrics-tls-min-version=VersionTLS12
    - --metrics-tls-cipher-suites=TLS_ECDHE_ECDSA_WITH_AES_128_GCM_SHA256,TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256
    ```

    The `--metrics-tls-min-version` flag shows the minimum TLS version configured based on the cluster TLS security profile. The `--metrics-tls-cipher-suites` flag shows TLS cipher suites configured based on the cluster TLS security profile.
1.  Verify that the webhook deployment has the TLS configuration applied by running the following command:
    ```terminal
    $ oc get deployment -n cert-manager cert-manager-webhook -o yaml | grep -A 20 "args:"
    ```
    ```terminal title="Example output"
    args:
    - --v=2
    - --dynamic-serving-ca-secret-namespace=$(POD_NAMESPACE)
    - --dynamic-serving-ca-secret-name=cert-manager-webhook-ca
    - --dynamic-serving-dns-names=cert-manager-webhook
    - --tls-min-version=VersionTLS12
    - --tls-cipher-suites=TLS_ECDHE_ECDSA_WITH_AES_128_GCM_SHA256,TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256
    - --metrics-tls-min-version=VersionTLS12
    - --metrics-tls-cipher-suites=TLS_ECDHE_ECDSA_WITH_AES_128_GCM_SHA256,TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256
    ```

    The webhook deployment includes serving TLS flags (`--tls-min-version` and `--tls-cipher-suites`) for the webhook HTTPS endpoint, and TLS flags for the metrics endpoint.
1.  Verify that the CA injector deployment has the TLS configuration applied by running the following command:
    ```terminal
    $ oc get deployment -n cert-manager cert-manager-cainjector -o yaml | grep -A 10 "args:"
    ```
    ```terminal title="Example output"
    args:
    - --v=2
    - --leader-election-namespace=kube-system
    - --metrics-tls-min-version=VersionTLS12
    - --metrics-tls-cipher-suites=TLS_ECDHE_ECDSA_WITH_AES_128_GCM_SHA256,TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256
    ```

    The CA injector deployment includes metrics endpoint TLS flags.

    :::note

    TLS profile enforcement is not available for the IstioCSR and TrustManager operands.

    When the cluster TLS security profile is set to `Modern` (TLS 1.3), the cipher suite flags are automatically omitted.
    
    :::