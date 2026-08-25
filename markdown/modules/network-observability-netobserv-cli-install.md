{%- set _mod_docs_content_type = "PROCEDURE" %}
# Installing the Network Observability CLI {id="network-observability-cli-install_{{ context }}"}

The Network Observability CLI gives you a lightweight way to quickly debug and troubleshoot network observability. It must be installed separately. {._abstract}

Installing the Network Observability CLI (`oc netobserv`) is a separate procedure from the Network Observability Operator installation. This means that, even if the Operator is installed from the software catalog, the `CLI` must be installed separately.


:::note

Users can optionally use Krew to install the `netobserv` CLI plugin. For more information, see "Installing a CLI plugin with Krew".

:::


**Prerequisites**

*   You must install the {{ oc_first }}.
*   You must have a macOS or Linux operating system.
*   You must install either `docker` or `podman`.


:::note

You can use `podman` or `docker` to run the installation commands. This procedure uses `podman`.

:::


**Procedure**

1.  Log in to the **Red Hat registry** by running the following command:
    ```terminal
    $ podman login registry.redhat.io
    ```
1.  Extract the `oc-netobserv` file from the image by running the following commands:
    ```terminal
    $ podman create --name netobserv-cli registry.redhat.io/network-observability/network-observability-cli-rhel9:1.11
    $ podman cp netobserv-cli:/oc-netobserv .
    $ podman rm netobserv-cli
    ```
1.  Move the extracted file to a directory that is on the system’s `PATH`, such as `/usr/local/bin/`, by running the following command:
    ```terminal
    $ sudo mv oc-netobserv /usr/local/bin/
    ```

**Verification**

1.  Verify that `oc netobserv` is available:
    ```terminal
    $ oc netobserv version
    ```

    This command should produce an outcome similar to the following example:
    ```terminal
    Netobserv CLI version <version>
    ```