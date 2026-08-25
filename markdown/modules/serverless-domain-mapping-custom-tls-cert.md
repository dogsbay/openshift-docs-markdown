{%- set _mod_docs_content_type = "PROCEDURE" %}
# Securing a service with a custom domain by using a TLS certificate {id="serverless-domain-mapping-custom-tls-cert_{{ context }}"}

After you have configured a custom domain for a Knative service, you can use a TLS certificate to secure the mapped service. To do this, you must create a Kubernetes TLS secret, and then update the `DomainMapping` CR to use the TLS secret that you
have created.


:::note

If you use `net-istio` for Ingress and enable mTLS via SMCP using `security.dataPlane.mtls: true`, Service Mesh deploys `DestinationRules` for the `*.local` host, which does not allow `DomainMapping` for {{ ServerlessProductName }}.

To work around this issue, enable mTLS by deploying `PeerAuthentication` instead of using `security.dataPlane.mtls: true`.

:::


**Prerequisites**

*   You configured a custom domain for a Knative service and have a working `DomainMapping` CR.
*   You have a TLS certificate from your Certificate Authority provider or a self-signed certificate.
*   You have obtained the `cert` and `key` files from your Certificate Authority provider, or a self-signed certificate.
*   Install the OpenShift CLI (`oc`).

**Procedure**

1.  Create a Kubernetes TLS secret:
    ```terminal
    $ oc create secret tls <tls_secret_name> --cert=<path_to_certificate_file> --key=<path_to_key_file>
    ```
1.  Add the `networking.internal.knative.dev/certificate-uid: <id>` label to the Kubernetes TLS secret:
    ```terminal
    $ oc label secret <tls_secret_name> networking.internal.knative.dev/certificate-uid="<id>"
    ```

    If you are using a third-party secret provider such as cert-manager, you can configure your secret manager to label the Kubernetes TLS secret automatically. Cert-manager users can use the secret template offered to automatically generate secrets with the correct label. In this case, secret filtering is done based on the key only, but this value can carry useful information such as the certificate ID that the secret contains.

    :::note

    The {{ cert_manager_operator }} is a Technology Preview feature. For more information, see the **Installing the {{ cert_manager_operator }}** documentation.
    
    :::

1.  Update the `DomainMapping` CR to use the TLS secret that you have created:
    ```yaml
    apiVersion: serving.knative.dev/v1alpha1
    kind: DomainMapping
    metadata:
      name: <domain_name>
      namespace: <namespace>
    spec:
      ref:
        name: <service_name>
        kind: Service
        apiVersion: serving.knative.dev/v1
    # TLS block specifies the secret to be used
      tls:
        secretName: <tls_secret_name>
    ```

**Verification**

1.  Verify that the `DomainMapping` CR status is `True`, and that the `URL` column of the output shows the mapped domain with the scheme `https`:
    ```terminal
    $ oc get domainmapping <domain_name>
    ```
    ```terminal title="Example output"
    NAME                      URL                               READY   REASON
    example.com               https://example.com               True
    ```
1.  Optional: If the service is exposed publicly, verify that it is available by running the following command:
    ```terminal
    $ curl https://<domain_name>
    ```

    If the certificate is self-signed, skip verification by adding the `-k` flag to the `curl` command.