{%- set _mod_docs_content_type = "PROCEDURE" %}
# Create a Kickstart file for a {{ microshift_short }} RPM installation {id="microshift-kickstart-rpm-install_{{ context }}"}

You can use the Kickstart file provided with {{ microshift_short }} to provision an RPM-based virtual machine. {._abstract}

**Prerequisites**

*   You set up the {{ microshift_short }} Kickstart file.
*   You know the [Activation Keys](https://console.redhat.com/insights/connector/activation-keys) and organization ID to activate your Red&#160;Hat subscription.
*   You have the information needed to set the `BOOTC_IMAGE_URL`, `AUTH_CONFIG`, and `REGISTRY_CONFIG` required variables.


:::important

The subscription must include access to the `rhocp-4.x-for-rhel-{{ op_system_version_major }}-$(uname -m)-rpms` and `fast-datapath-for-rhel-{{ op_system_version_major }}-$(uname -m)-rpms` RPM repositories.

:::


**Procedure**

1.  Add the following variables to create an RPM Kickstart file:
    *   The `RHSM_ORG` variable contains a Red&#160;Hat Subscription Manager organization ID for the subscription registration command in the Kickstart file.
        ```terminal
        $ export RHSM_ORG="$(cat ~/.rhsm-activation-org)"
        ```
    *   The `RHSM_KEY` variable contains a Red&#160;Hat Subscription Manager activation key for the subscription registration command in the Kickstart file.
        ```terminal
        $ export RHSM_KEY="$(cat ~/.rhsm-activation-key)"
        ```
    *   The `MICROSHIFT_VER` variable references the {{ microshift_short }} version to install using the `4.y` format. The latest available `.z` version of the `4.y` version set in this variable is automatically installed.
        ```terminal
        $ export MICROSHIFT_VER={product-version}
        ```

        In this example, the latest `.z` of the minor version that you set is installed.
1.  Run the following command to create the `kickstart.ks` file to be used during the virtual machine installation:
    ```terminal
    envsubst < \
        /usr/share/microshift/kickstart/kickstart-rpm.ks.template > \
        "${HOME}/kickstart.ks"
    ```