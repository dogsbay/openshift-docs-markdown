{%- set _mod_docs_content_type = "PROCEDURE" %}
# Creating a re-encrypt route with a custom certificate {id="nw-ingress-creating-a-reencrypt-route-with-a-custom-certificate_{{ context }}"}

To secure traffic by using a custom certificate, configure a route with re-encrypt TLS termination by running the `oc create route` command. This configuration enables the Ingress Controller to decrypt traffic, and then re-encrypt traffic before forwarding the traffic to the destination pod. {._abstract}

The procedure creates a `Route` resource with a custom certificate and reencrypt TLS termination. The procedure assumes that the certificate/key pair are in the `tls.crt` and `tls.key` files in the current working directory. You must also specify a destination CA certificate to enable the Ingress Controller to trust the service’s certificate. You may also specify a CA certificate if needed to complete the certificate chain. Substitute the actual path names for `tls.crt`, `tls.key`, `cacert.crt`, and (optionally) `ca.crt`. Substitute the name of the `Service` resource that you want to expose for `frontend`. Substitute the appropriate hostname for `www.example.com`.

**Prerequisites**

*   You must have a certificate/key pair in PEM-encoded files, where the certificate is valid for the route host.
*   You may have a separate CA certificate in a PEM-encoded file that completes the certificate chain.
*   You must have a separate destination CA certificate in a PEM-encoded file.
*   You must have a service that you want to expose.


:::note

Password protected key files are not supported. To remove a passphrase from a key file, use the following command:

```terminal
$ openssl rsa -in password_protected_tls.key -out tls.key
```

:::


**Procedure**

*   Create a secure `Route` resource using reencrypt TLS termination and a custom certificate:
    ```terminal
    $ oc create route reencrypt --service=frontend --cert=tls.crt --key=tls.key --dest-ca-cert=destca.crt --ca-cert=ca.crt --hostname=www.example.com
    ```

    If you examine the resulting `Route` resource, the resource should have a configuration similar to the following example:
    ```yaml title="YAML Definition of the Secure Route"
    apiVersion: route.openshift.io/v1
    kind: Route
    metadata:
      name: frontend
    spec:
      host: www.example.com
      to:
        kind: Service
        name: frontend
      tls:
        termination: reencrypt
        key: |-
          -----BEGIN PRIVATE KEY-----
          [...]
          -----END PRIVATE KEY-----
        certificate: |-
          -----BEGIN CERTIFICATE-----
          [...]
          -----END CERTIFICATE-----
        caCertificate: |-
          -----BEGIN CERTIFICATE-----
          [...]
          -----END CERTIFICATE-----
        destinationCACertificate: |-
          -----BEGIN CERTIFICATE-----
          [...]
          -----END CERTIFICATE-----
    # ...
    ```

    See `oc create route reencrypt --help` for more options.