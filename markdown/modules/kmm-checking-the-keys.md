{%- set _mod_docs_content_type = "PROCEDURE" %}
# Checking the keys {id="kmm-checking-the-keys_{{ context }}"}

To verify that your secure boot signing keys are configured correctly in {{ product_title }}, you can inspect the public certificate and private key secrets with the OpenShift CLI. {._abstract}

**Procedure**

1.  Check to ensure the public key secret is set correctly:
    ```terminal
    $ oc get secret -o yaml <certificate secret name> | awk '/cert/{print $2; exit}' | base64 -d  | openssl x509 -inform der -text
    ```

    This should display a certificate with a Serial Number, Issuer, Subject, and more.
1.  Check to ensure the private key secret is set correctly:
    ```terminal
    $ oc get secret -o yaml <private key secret name> | awk '/key/{print $2; exit}' | base64 -d
    ```

    This should display the key enclosed in the `-----BEGIN PRIVATE KEY-----` and `-----END PRIVATE KEY-----` lines.