{%- set _mod_docs_content_type = "PROCEDURE" %}
# Add an API server default certificate {id="add-default-api-server_{{ context }}"}

To allow clients outside the cluster to validate the API server’s
certificate, you can replace the default certificate
with one that is issued by a public or organizational CA.

**Prerequisites**

*   You must have a valid certificate and key in the PEM format.

**Procedure**

1.  Create a secret that contains the certificate and key in the
`openshift-config` namespace.
    ```
    $ oc create secret tls <certificate> \//<1>
         --cert=</path/to/cert.crt> \//<2>
         --key=</path/to/cert.key> \//<3>
         -n openshift-config
    ```
    1.  `<certificate>` is the name of the secret that will contain
    the certificate.
    1.  `</path/to/cert.crt>` is the path to the certificate on your
    local file system.
    1.  `</path/to/cert.key>` is the path to the private key associated
    with this certificate.
1.  Update the API server to reference the created secret.
    ```
    $ oc patch apiserver cluster \
         --type=merge -p \
         '{"spec": {"servingCerts": {"defaultServingCertificate":
         {"name": "<certificate>"}}}}' (1)
    ```
    1.  Replace `<certificate>` with the name used for the secret in
    the previous step.
1.  Examine the `apiserver/cluster` object and confirm the secret is now
referenced.
    ```
    $ oc get apiserver cluster -o yaml
    ...
    spec:
      servingCerts:
        defaultServingCertificate:
          name: <certificate>
    ...
    ```