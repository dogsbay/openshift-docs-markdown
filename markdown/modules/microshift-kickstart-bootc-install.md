{%- set _mod_docs_content_type = "PROCEDURE" %}
# Create a Kickstart file to install {{ microshift_short }} on image mode for RHEL {id="microshift-kickstart-bootc-install_{{ context }}"}

You can use the Kickstart file provided with {{ microshift_short }} for an image mode for RHEL installation. {._abstract}

**Prerequisites**

*   You set up the {{ microshift_short }} Kickstart file.
*   You have the information needed to set required and optional variables.

**Procedure**

1.  Set the required `BOOTC_IMAGE_URL` variable value to point to an image used in the RHEL Kickstart file installation process by running the following command:
    ```terminal
    $ export BOOTC_IMAGE_URL=_<myregistry>/<myorg>/<mypath>_/microshift-image:tag
    ```

    Replace _&lt;myregistry>_, _&lt;myorg>_, and _&lt;mypath>_ with your information.
    *   The `BOOTC_IMAGE_URL` variable contains a reference to the image that the `ostreecontainer` command installs. You can specify a z-stream release other than the latest by using the tag if required.
1.  Optional. Add variables and values for registry authentication and configuration by using the following commands:
    *   Set the `AUTH_CONFIG` variable to authenticate access to the `BOOTC_IMAGE_URL` image by running the following command:
        ```terminal
        $ export AUTH_CONFIG="$(cat ~/.quay-auth.json)"
        ```

        In this example, see the `containers-auth.json(5)` manual page for more information about this file format.
    *   Set the `REGISTRY_CONFIG` variable to configure access to the registry containing the `BOOTC_IMAGE_URL` image by running the following command:
        ```terminal
        $ export REGISTRY_CONFIG="$(cat ~/.quay-config.conf)"
        ```

        In this example, see the `containers-registries.conf(5)` manual page for more information about this file format.
1.  Create the `kickstart.ks` file to be used during the installation by running the following command:
    ```terminal
    envsubst < \
        /usr/share/microshift/kickstart/kickstart-bootc.ks.template > \
        "${HOME}/kickstart.ks"
    ```