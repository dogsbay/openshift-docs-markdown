{%- set _mod_docs_content_type = "PROCEDURE" %}
# Replacing mirror registry for Red Hat OpenShift SSL/TLS certificates {id="mirror-registry-ssl-cert-replace_{{ context }}"}

In some cases, you might want to update your SSL/TLS certificates for the _mirror registry for Red&#160;Hat OpenShift_. You can replace certificates at installation time or during an upgrade by passing the `-ssl-cert` and `-ssl-key` flags. {._abstract}

**Prerequisites**

*   You have downloaded the `mirror-registry` binary from the [OpenShift console **Downloads**](https://console.redhat.com/openshift/downloads#tool-mirror-registry) page.
*   You have a valid TLS certificate (PEM format) and its corresponding private key.

**Procedure**

*   To use custom TLS certificates at installation time, pass the `-ssl-cert` and `-ssl-key` flags to the `mirror-registry install` command:
    ```terminal
    $ ./mirror-registry install \
      -data-dir /var/lib/quay \
      -image-archive image-archive.tar \
      -ssl-cert /path/to/cert.pem \
      -ssl-key /path/to/key.pem
    ```
*   To replace TLS certificates on an existing installation, pass the `-ssl-cert` and `-ssl-key` flags to the `mirror-registry upgrade` command:
    ```terminal
    $ ./mirror-registry upgrade \
      -image-archive image-archive.tar \
      -ssl-cert /path/to/new-cert.pem \
      -ssl-key /path/to/new-key.pem
    ```

    :::note

    You must provide `-ssl-cert` and `-ssl-key` together. Passing only one of these flags causes the command to fail.
    
    :::


    If the certificate hostname does not match the registry hostname, for example when using a wildcard or internal CA certificate, add the `-ssl-skip-hostname-verification` flag:
    ```terminal
    $ ./mirror-registry upgrade \
      -image-archive image-archive.tar \
      -ssl-cert /path/to/cert.pem \
      -ssl-key /path/to/key.pem \
      -ssl-skip-hostname-verification
    ```