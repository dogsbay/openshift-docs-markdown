{%- set _mod_docs_content_type = "PROCEDURE" %}
# Creating TLS certificates for each component route {id="cloud-experts-osd-update-component-routes-create-tls-certificates_{{ context }}"}

Create three self-signed certificates, one for each component route. Trust them on your system so you can open each new hostname in a browser. {._abstract}


:::warning

Use this flow for learning only, not for production. For live systems, request valid certificates from your certificate authority (CA).

:::



:::important

Use one certificate per route to prevent issues with HTTP/2 connection coalescing. Wildcard certificates and subject alternative names (SAN) certificates are not supported.

:::


This example uses the following custom component routes:

*   `console.example.com` for Console
*   `downloads.console.example.com` for Downloads
*   `oauth.console.example.com` for OAuth

**Procedure**

*   For each route, run the example `openssl` commands. Set `-subj` to that route’s domain name:
    ```bash title="Example output:"
    $ openssl req -newkey rsa:2048 -new -nodes -x509 -days 365 -keyout key-console.pem -out cert-console.pem -subj "/CN=console.example.com"
    $ openssl req -newkey rsa:2048 -new -nodes -x509 -days 365 -keyout key-downloads.pem -out cert-downloads.pem -subj "/CN=downloads.console.example.com"
    $ openssl req -newkey rsa:2048 -new -nodes -x509 -days 365 -keyout key-oauth.pem -out cert-oauth.pem -subj "/CN=oauth.console.example.com"
    ```

**Verification**

*   Check that the `.pem` certificate and key files exist:
    ```bash
    $ ls -1 *.pem
    ```
    ```text title="Example output"
    cert-console.pem
    cert-downloads.pem
    cert-oauth.pem
    key-console.pem
    key-downloads.pem
    key-oauth.pem
    ```