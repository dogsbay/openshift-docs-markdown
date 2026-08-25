{%- set _mod_docs_content_type = "PROCEDURE" %}
# Setting up the {{ microshift_short }} Kickstart file {id="microshift-kickstart-prep_{{ context }}"}

To provision a host with a {{ microshift_short }} Kickstart file, you can install the sample templates and set environment variables for pull secrets and user credentials. {._abstract}

You can use the Kickstart file provided with {{ microshift_short }} to provision a host by following the instructions for your install type. The ISO you created in the previous steps then runs on the host that you provision with your Kickstart file.

**Prerequisites**

*   The host you are provisioning must meet the system requirements for installing {{ microshift_short }}.
*   A pull secret from `~/.pull-secret.json` must be present and have read permissions for the current user.

**Procedure**

1.  Install the `microshift-release-info` RPM package containing the sample Kickstart files that are in the `/usr/share/microshift/kickstart` directory by running the following command:
    ```terminal
    $ sudo dnf install -y microshift-release-info
    ```
1.  Install the utilities used during the Kickstart file creation by running the following command:
    ```terminal
    $ sudo dnf install -y openssl gettext
    ```
1.  Set the variables pointing to secrets included in `kickstart.ks`.
    *   The `PULL_SECRET` file contents are copied to the `/etc/crio/openshift-pull-secret` directory at the post-installation stage to authenticate {{ ocp }} container registry access.
        ```terminal title="Example command setting the PULL_SECRET variable:"
        $ export PULL_SECRET="$(cat ~/.pull-secret.json)"
        ```
    *   Set a password in the `PASSWD_TEXT` variable to use in the`USER_PASSWD` setting by running the following command:
        ```terminal title="Example command setting the PASSWD_TEXT variable."
        $ PASSWD_TEXT=_<redhat_user_plain_text_password>_
        ```

        Replace _&lt;redhat_user_plain_text_password>_ with the password you want to use.
    *   The `USER_PASSWD` setting is used as an encrypted password for the `redhat` user for logging into the host. Encrypt your password string using the SHA-512 encryption standard.
        ```terminal title="Example command setting the USER_PASSWD variable."
        $ export USER_PASSWD="$(openssl passwd -6 "${PASSWD_TEXT}")"
        ```

        In this example, only the encrypted password is included in the Kickstart file. The plain text password is not.

**Next steps**

*   Follow the instructions for your installation type to create a working Kickstart file from the provided template. Instructions for RPM-based, {{ op_system_ostree }}, and {{ op_system_image }} installations follow this procedure.
*   Optional. Create a virtual machine (VM) using the Kickstart file. You can use a VM to test and validate the values in your Kickstart file.