{%- set _mod_docs_content_type = "PROCEDURE" %}
# Creating a route using the destination CA certificate in the Ingress annotation {id="nw-ingress-re-encrypt-route-custom-cert_{{ context }}"}

To define a route with a custom destination CA certificate, apply the `route.openshift.io/destination-ca-certificate-secret` annotation to an Ingress object. This configuration ensures the Ingress Controller uses the specified secret to verify the identity of the destination service. {._abstract}

**Prerequisites**

*   You have a certificate/key pair in PEM-encoded files, where the certificate is valid for the route host.
*   You have a separate CA certificate in a PEM-encoded file that completes the certificate chain.
*   You have a separate destination CA certificate in a PEM-encoded file.
*   You have a service that you want to expose.

**Procedure**

1.  Create a secret for the destination CA certificate by entering the following command:
    ```terminal
    $ oc create secret generic dest-ca-cert --from-file=tls.crt=<file_path>
    ```

    For example:
    ```terminal
    $ oc -n test-ns create secret generic dest-ca-cert --from-file=tls.crt=tls.crt
    ```
    ```terminal title="Example output"
    secret/dest-ca-cert created
    ```
1.  Add the `route.openshift.io/destination-ca-certificate-secret` to the Ingress annotations:
    ```yaml
    apiVersion: networking.k8s.io/v1
    kind: Ingress
    metadata:
      name: frontend
      annotations:
        route.openshift.io/termination: "reencrypt"
        route.openshift.io/destination-ca-certificate-secret: secret-ca-cert
    ...
    ```

    where:

    `destination-ca-certificate-secret`
    :   Specifies the `route.openshift.io/destination-ca-certificate-secret` annotation. The annotation references a Kubernetes secret.
    The Ingress Controller inserts a secret that is referenced in the annotation into the generated route.
    ```yaml title="Example output"
    apiVersion: route.openshift.io/v1
    kind: Route
    metadata:
      name: frontend
      annotations:
        route.openshift.io/termination: reencrypt
        route.openshift.io/destination-ca-certificate-secret: secret-ca-cert
    spec:
    ...
      tls:
        insecureEdgeTerminationPolicy: Redirect
        termination: reencrypt
        destinationCACertificate: |
          -----BEGIN CERTIFICATE-----
          [...]
          -----END CERTIFICATE-----
    ...
    ```