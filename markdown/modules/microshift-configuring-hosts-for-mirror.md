{%- set _mod_docs_content_type = "PROCEDURE" %}
# Configure hosts for mirror registry access {id="microshift-configuring-hosts-for-mirror_{{ context }}"}

To configure a {{ microshift_short }} host to use a mirror registry, you must give the {{ microshift_short }} host access to the registry by creating a configuration file that maps the Red Hat registry host names to the mirror. {._abstract}

**Prerequisites**

*   Your mirror host has access to the internet.
*   The mirror host can access the mirror registry.
*   You configured the mirror registry for use in your restricted network.
*   You downloaded the pull secret and modified it to include authentication to your mirror repository.

**Procedure**

1.  Log in to your {{ microshift_short }} host.
1.  Enable the SSL certificate trust on any host accessing the mirror registry by completing the following steps:
    1.  Copy the `rootCA.pem` file from the mirror registry, for example, `<registry_path>/quay-rootCA`, to the {{ microshift_short }} host at the `/etc/pki/ca-trust/source/anchors` directory.
    1.  Enable the certificate in the system-wide truststore configuration by running the following command:
        ```terminal
        $ sudo update-ca-trust
        ```
1.  Create the `/etc/containers/registries.conf.d/999-microshift-mirror.conf` configuration file that maps the Red Hat registry host names to the mirror registry:
    ```terminal title="Example mirror configuration file"
    [[registry]]
        prefix = ""
        location = "<registry_host>:<port>"
        mirror-by-digest-only = true
        insecure = false

    [[registry]]
        prefix = ""
        location = "quay.io"
        mirror-by-digest-only = true
    [[registry.mirror]]
        location = "<registry_host>:<port>"
        insecure = false

    [[registry]]
        prefix = ""
        location = "registry.redhat.io"
        mirror-by-digest-only = true
    [[registry.mirror]]
        location = "<registry_host>:<port>"
        insecure = false

    [[registry]]
        prefix = ""
        location = "registry.access.redhat.com"
        mirror-by-digest-only = true
    [[registry.mirror]]
        location = "<registry_host>:<port>"
        insecure = false
    ```
    *   Replace `<registry_host>:<port>` with the hostname and port of your mirror registry server, for example, `<microshift-quay:8443>`.
1.  Enable the {{ microshift_short }} service by running the following command:
    ```terminal
    $ sudo systemctl enable microshift
    ```
1.  Reboot the host by running the following command:
    ```terminal
    $ sudo reboot
    ```