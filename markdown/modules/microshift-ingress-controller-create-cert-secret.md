{%- set _mod_docs_content_type = "PROCEDURE" %}
# Creating a secret for the ingress controller certificateSecret {id="microshift-ingress-controller-create-cert-secret_{{ context }}"}

To secure network traffic with your own certificate, you must create a TLS secret and update the configuration file. This process configures a custom default certificate for the {{ microshift_short }} ingress router. {._abstract}


:::note

Any in-use certificates automatically integrate with the {{ microshift_short }} built-in OAuth server.

:::


To configure application-level certificates for a Kubernetes Ingress object by using the `spec.tls` field, follow the procedure in "Creating a route through an Ingress object".

**Prerequisites**

*   Root access to the {{ microshift_short }} host.
*   Installation of the {{ oc_first }}.
*   A decrypted, non-password-protected TLS private key in Privacy-Enhanced Mail (PEM) format.
*   A PEM-encoded TLS certificate.
*   A valid certificate for the {{ microshift_short }} apps wildcard where the `subjectAltName` extension includes DNS names covering `*.apps.<nodename>.<domain>`.


:::note

This procedure only applies to the default ingress router certificate, `ingress.certificateSecret`.

:::


**Procedure**

1.  Create a secret that contains the wildcard certificate chain and key:
    ```terminal
    $ oc create secret tls <secret> \
         --cert=</path/to/cert.crt> \
         --key=</path/to/cert.key> \
         -n openshift-ingress
    ```
    *   Replace `<secret>` with the name of the secret that contains the certificate chain and private key.
    *   Replace `</path/to/cert.crt>` with the path to the certificate chain on your local file system.
    *   Replace `</path/to/cert.key>` with the path to the private key associated with this certificate.

        :::important

        The certificate must include the `subjectAltName` extension showing `*.apps.<nodename>.<domain>`.
        
        :::

1.  Update the `certificateSecret` parameter value in the {{ microshift_short }} configuration YAML with the newly created secret.
1.  Complete any other configurations you require, then start or restart {{ microshift_short }} by running one of the following commands:
    ```terminal
    $ sudo systemctl start microshift
    ```
    ```terminal
    $ sudo systemctl restart microshift
    ```