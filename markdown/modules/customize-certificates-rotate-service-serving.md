{%- set _mod_docs_content_type = "PROCEDURE" %}
# Manually rotate the generated service certificate {id="rotate-service-serving_{{ context }}"}

To replace a generated service serving certificate in {{ product_title }}, you can delete the TLS secret named in the service `serving-cert-secret-name` annotation. A new secret and certificate pair are created automatically. {._abstract}

**Prerequisites**

*   A secret containing the certificate and key pair must
have been generated for the service.

**Procedure**

1.  Examine the service to determine the secret containing the
certificate. This is found in the `serving-cert-secret-name`
annotation, as seen below.
    ```terminal
    $ oc describe service <service_name>
    ```
    ```terminal title="Example output"
    ...
    service.beta.openshift.io/serving-cert-secret-name: <secret>
    ...
    ```
1.  Delete the generated secret for the service. This process
will automatically recreate the secret.
    ```terminal
    $ oc delete secret <secret>
    ```
    *   Replace `<secret>` with the name of the secret from the previous step.
1.  Confirm that the certificate has been recreated
by obtaining the new secret and examining the `AGE`.
    ```terminal
    $ oc get secret <service_name>
    ```
    ```terminal title="Example output"
    NAME              TYPE                DATA   AGE
    <service.name>    kubernetes.io/tls   2      1s
    ```