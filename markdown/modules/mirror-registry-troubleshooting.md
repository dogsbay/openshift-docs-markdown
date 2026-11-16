{%- set _mod_docs_content_type = "PROCEDURE" %}
# Troubleshooting mirror registry for Red Hat OpenShift {id="mirror-registry-troubleshooting_{{ context }}"}

To assist in troubleshooting the _mirror registry for Red&#160;Hat OpenShift_, you can check the status of the systemd service, view registry logs, and verify the registry health endpoint. {._abstract}

**Prerequisites**

*   You have installed the _mirror registry for Red&#160;Hat OpenShift_.

**Procedure**

*   Check the status of the `quay.service` systemd service:
    *   For a root installation, enter the following command:
        ```terminal
        $ systemctl status quay.service
        ```
    *   For a non-root installation, enter the following command:
        ```terminal
        $ systemctl --user status quay.service
        ```
*   View the registry container logs by entering the following command:
    ```terminal
    $ podman logs systemd-quay
    ```
*   Verify that the registry is healthy by querying the health endpoint:
    ```terminal
    $ curl -k https://<host_example_com>:8443/healthz
    ```
*   If the registry is unresponsive or corrupted, you can reset it by uninstalling and reinstalling:
    ```terminal
    $ ./mirror-registry uninstall -data-dir /var/lib/quay -auto-approve
    $ ./mirror-registry install -data-dir /var/lib/quay -image-archive image-archive.tar
    ```