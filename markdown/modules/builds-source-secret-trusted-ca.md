{%- set _mod_docs_content_type = "PROCEDURE" %}
# Creating a secret from source code trusted certificate authorities {id="builds-source-secret-trusted-ca_{{ context }}"}

The set of Transport Layer Security (TLS) certificate authorities (CA) that are trusted during a Git clone operation are built into the {{ product_title }} infrastructure images. If your Git server uses a self-signed certificate or one signed by an authority not trusted by the image, you can create a secret that contains the certificate or disable TLS verification.

If you create a secret for the CA certificate, {{ product_title }} uses it to access your Git server during the Git clone operation. Using this method is significantly more secure than disabling Git SSL verification, which accepts any TLS certificate that is presented.

**Procedure**

Create a secret with a CA certificate file.

1.  If your CA uses Intermediate Certificate Authorities, combine the certificates for all CAs in a `ca.crt` file. Enter the following command:
    ```terminal
    $ cat intermediateCA.crt intermediateCA.crt rootCA.crt > ca.crt
    ```
1.  Create the secret by entering the following command:
    ```terminal
    $ oc create secret generic mycert --from-file=ca.crt=</path/to/file> (1)
    ```
    1.  You must use the key name `ca.crt`.