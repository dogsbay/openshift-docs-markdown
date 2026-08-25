{%- set _mod_docs_content_type = "PROCEDURE" %}
# Add registry authentication to prepare for image building {id="microshift-embed-registry-auth-image-building_{{ context }}"}

After you have updated the blueprint, you must add authentication for the container registries to build the image with embedded {{ microshift_short }} containers. To do this, update one of the systemd service files that are part of the image builder configuration. {._abstract}

**Prerequisites**

*   You have root-user access to your build host.
*   Your build host meets the image builder system requirements.
*   You have installed and set up image builder and the `composer-cli` tool.

**Procedure**

1.  Create an `/etc/osbuild-worker/osbuild-worker.toml` directory and configuration file if they do not exist.
1.  Add a pull secret for authenticating to the registry by setting the `auth_file_path` in the `[containers]` section of the `/etc/osbuild-worker/osbuild-worker.toml` configuration file:
    ```terminal
    [containers]
    auth_file_path = "/etc/osbuild-worker/pull-secret.json"
    ```
1.  Restart the host to apply configuration changes.