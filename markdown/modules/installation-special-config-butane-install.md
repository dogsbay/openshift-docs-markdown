{%- set _mod_docs_content_type = "PROCEDURE" %}
# Installing Butane {id="installation-special-config-butane-install_{{ context }}"}

You can install the Butane tool (`butane`) to create {{ product_title }} machine configs from a command-line interface. You can install `butane` on Linux, Windows, or macOS by downloading the corresponding binary file. {._abstract}


:::tip

Butane releases are backwards-compatible with older releases and with the Fedora CoreOS Config Transpiler (FCCT).

:::


**Procedure**

1.  Navigate to the Butane image download page at https://mirror.openshift.com/pub/openshift-v4/clients/butane/.
1.  Get the `butane` binary:
    1.  To save the latest version of Butane, save the `butane` image to your current directory:
        ```terminal
        $ curl https://mirror.openshift.com/pub/openshift-v4/clients/butane/latest/butane --output butane
        ```
    1.  Optional: For a specific architecture, such as aarch64 or ppc64le, indicate the appropriate URL:
        ```terminal
        $ curl https://mirror.openshift.com/pub/openshift-v4/clients/butane/latest/butane-aarch64 --output butane
        ```
1.  Make the downloaded binary file executable:
    ```terminal
    $ chmod +x butane
    ```
1.  Move the `butane` binary file to a directory on your `PATH`.

    To check your `PATH`, open a terminal and execute the following command:
    ```terminal
    $ echo $PATH
    ```

**Verification**

*   You can now use the Butane tool by running the `butane` command:
    ```terminal
    $ butane <butane_file>
    ```