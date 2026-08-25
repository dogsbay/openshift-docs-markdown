{%- set _mod_docs_content_type = "PROCEDURE" %}
# Create a valid TLS certificate for each component route {id="cloud-experts-update-component-routes-create-tls-certificates_{{ context }}"}

In this section, we create three separate self-signed certificate key pairs and then trust them to verify that we can access our new component routes using a real web browser. {._abstract}


:::warning

This is for demonstration purposes only, and is not recommended as a solution for production workloads. Consult your certificate authority to understand how to create certificates with similar attributes for your production workloads.

:::



:::important

To prevent issues with HTTP/2 connection coalescing, you must use a separate individual certificate for each endpoint. Using a wildcard or SAN certificate is not supported.

:::


**Procedure**

1.  Generate a certificate for each component route, taking care to set our certificate’s subject (`-subj`) to the custom domain of the component route we want to use: 

    **Example**:
    ```bash
    $ openssl req -newkey rsa:2048 -new -nodes -x509 -days 365 -keyout key-console.pem -out cert-console.pem -subj "/CN=console.my-new-domain.dev"
    $ openssl req -newkey rsa:2048 -new -nodes -x509 -days 365 -keyout key-downloads.pem -out cert-downloads.pem -subj "/CN=downloads.my-new-domain.dev"
    $ openssl req -newkey rsa:2048 -new -nodes -x509 -days 365 -keyout key-oauth.pem -out cert-oauth.pem -subj "/CN=oauth.my-new-domain.dev"
    ```

    This generates three pairs of `.pem` files, `key-<component>.pem` and `cert-<component>.pem`.