{%- set _mod_docs_content_type = "PROCEDURE" %}
# Create a Kickstart file for a {{ microshift_short }} {{ op_system_ostree }} installation {id="microshift-kickstart-ostree-install_{{ context }}"}

You can use the Kickstart file provided with {{ microshift_short }} to provision a {{ op_system_ostree }}-based virtual machine. {._abstract}

**Prerequisites**

*   You set up the {{ microshift_short }} Kickstart file.
*   You have the information needed to set required and optional variables.

**Procedure**

1.  Add the following required variables to create an {{ op_system_ostree }} Kickstart file:
    *   The `OSTREE_SERVER_URL` variable contains an `rpm-ostree` server URL that is passed to the `ostreesetup` Kickstart command.
        ```terminal
        $ export OSTREE_SERVER_URL="_<http://my_ostree_server_url>_"
        ```

        Replace _&lt;http://my_ostree_server_url>_ with your server URL.
    *   The `OSTREE_COMMIT_REF` variable contains an `rpm-ostree` commit reference that is installed from the server.
        ```terminal
        $ export OSTREE_COMMIT_REF="_<myostree_commit_reference>_"
        ```

        Replace _&lt;myostree_commit_reference>_ with the `rpm-ostree` commit reference.
1.  Optional. Add the following variable for server authentication:
    *   The `AUTH_CONFIG` contents are copied to `/etc/ostree/auth.json` at the pre-install stage to authenticate access to the `OSTREE_SERVER_URL` server. If no server authentication is required, skip this setting.
        ```terminal
        $ export AUTH_CONFIG="$(cat ~/.ostree-auth.json)"
        ```
1.  Run the following command to create the `kickstart.ks` file to be used during the installation:
    ```terminal
    envsubst < \
        /usr/share/microshift/kickstart/kickstart-ostree.ks.template > \
        "${HOME}/kickstart.ks"
    ```

    :::note

    The {{ microshift_short }} version specified in the `rpm-ostree` commit is installed. To change the version of {{ microshift_short }}, you must create a new commit.
    
    :::