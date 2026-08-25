{%- set _mod_docs_content_type = "PROCEDURE" %}
# Enable sigstore attachments for mirror registries {id="microshift-enable-sigstore-mirror-registries_{{ context }}"}

If you are using mirror registries, you must apply additional configuration to enable sigstore attachments and mirroring by digest. {._abstract}

**Prerequisites**

*   You have admin access to the {{ microshift_short }} host.
*   You completed the steps in "Verifying container signatures using sigstore."

**Procedure**

1.  Enable sigstore attachments by creating the `/etc/containers/registries.d/mirror.registry.local.yaml` file.
    ```terminal
    $ cat /etc/containers/registries.d/_<mirror.registry.local.yaml>_
    docker:
       mirror.registry.local:
            use-sigstore-attachments: true
    ```

    Name the `_<mirror.registry.local.yaml>_` file after your mirror registry URL.
1.  Enable mirroring by digest by creating the `/etc/containers/registries.conf.d/999-microshift-mirror.conf` with the following contents:
    ```terminal
    $ cat /etc/containers/registries.conf.d/999-microshift-mirror.conf
    [[registry]]
        prefix = "quay.io/openshift-release-dev"
        location = "mirror.registry.local"
        mirror-by-digest-only = true

    [[registry]]
        prefix = "registry.redhat.io"
        location = "mirror.registry.local"
        mirror-by-digest-only = true
    ```

**Next steps**

1.  Wipe the local container storage clean.