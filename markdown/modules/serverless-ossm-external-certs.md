{%- set _mod_docs_content_type = "PROCEDURE" %}
# Creating a certificate to encrypt incoming external traffic {id="serverlesss-ossm-external-certs_{{ context }}"}

By default, the {{ SMProductShortName }} mTLS feature only secures traffic inside of the {{ SMProductShortName }} itself, between the ingress gateway and individual pods that have sidecars. To encrypt traffic as it flows into the {{ product_title }} cluster, you must generate a certificate before you enable the {{ ServerlessProductName }} and {{ SMProductShortName }} integration.

**Prerequisites**

{% if openshift_enterprise %}
*   You have access to an {{ product_title }} account with cluster administrator access.
{% endif %}

{% if openshift_dedicated or openshift_rosa %}
*   You have access to an {{ product_title }} account with cluster or dedicated administrator access.
{% endif %}
*   You have installed the {{ ServerlessOperatorName }} and Knative Serving.
*   Install the OpenShift CLI (`oc`).
*   You have created a project or have access to a project with the appropriate roles and permissions to create applications and other workloads in {{ product_title }}.

**Procedure**

1.  Create a root certificate and private key that signs the certificates for your Knative services:
    ```terminal
    $ openssl req -x509 -sha256 -nodes -days 365 -newkey rsa:2048 \
        -subj '/O=Example Inc./CN=example.com' \
        -keyout root.key \
        -out root.crt
    ```
1.  Create a wildcard certificate:
    ```terminal
    $ openssl req -nodes -newkey rsa:2048 \
        -subj "/CN=*.apps.openshift.example.com/O=Example Inc." \
        -keyout wildcard.key \
        -out wildcard.csr
    ```
1.  Sign the wildcard certificate:
    ```terminal
    $ openssl x509 -req -days 365 -set_serial 0 \
        -CA root.crt \
        -CAkey root.key \
        -in wildcard.csr \
        -out wildcard.crt
    ```
1.  Create a secret by using the wildcard certificate:
    ```terminal
    $ oc create -n istio-system secret tls wildcard-certs \
        --key=wildcard.key \
        --cert=wildcard.crt
    ```

    This certificate is picked up by the gateways created when you integrate {{ ServerlessProductName }} with {{ SMProductShortName }}, so that the ingress gateway serves traffic with this certificate.