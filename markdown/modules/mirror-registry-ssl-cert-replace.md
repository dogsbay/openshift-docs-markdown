{%- set _mod_docs_content_type = "PROCEDURE" %}
# Replacing mirror registry for Red Hat OpenShift SSL/TLS certificates {id="mirror-registry-ssl-cert-replace_{{ context }}"}

In some cases, you might want to update your SSL/TLS certificates for the _mirror registry for Red&#160;Hat OpenShift_. {._abstract}

Use the following procedure to replace SSL/TLS certificates for the _mirror registry for Red&#160;Hat OpenShift_ in the following scenarios:

*   If you are replacing the current _mirror registry for Red&#160;Hat OpenShift_ certificate.
*   If you are using the same certificate as the previous _mirror registry for Red&#160;Hat OpenShift_ installation.
*   If you are periodically updating the _mirror registry for Red&#160;Hat OpenShift_ certificate.

**Prerequisites**

*   You have downloaded and installed the `./mirror-registry` binary from the [OpenShift console **Downloads**](https://console.redhat.com/openshift/downloads#tool-mirror-registry) page.

**Procedure**

1.  Enter the following command to install the _mirror registry for Red&#160;Hat OpenShift_:
    ```terminal
    $ ./mirror-registry install \
    --quayHostname <host_example_com> \
    --quayRoot <example_directory_name>
    ```

    This installs the _mirror registry for Red&#160;Hat OpenShift_ to the `$HOME/quay-install` directory.
1.  Prepare a new certificate authority (CA) bundle and generate new `ssl.key` and `ssl.crt` key files. For more information, see [Configuring SSL and TLS for {{ quay }}](https://docs.redhat.com/en/documentation/red_hat_quay/3.15/html-single/securing_red_hat_quay/index#ssl-tls-quay-overview).
1.  Assign `/$HOME/quay-install` an environment variable, for example, `QUAY`, by entering the following command:
    ```terminal
    $ export QUAY=/$HOME/quay-install
    ```
1.  Copy the new `ssl.crt` file to the `/$HOME/quay-install` directory by entering the following command:
    ```terminal
    $ cp ~/ssl.crt $QUAY/quay-config
    ```
1.  Copy the new `ssl.key` file to the `/$HOME/quay-install` directory by entering the following command:
    ```terminal
    $ cp ~/ssl.key $QUAY/quay-config
    ```
1.  Restart the `quay-app` application pod by entering the following command:
    ```terminal
    $ systemctl --user restart quay-app
    ```