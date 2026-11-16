{%- set _mod_docs_content_type = "PROCEDURE" %}
# Installing mirror registry for Red Hat OpenShift {id="mirror-registry-localhost_{{ context }}"}

You can install the _mirror registry for Red&#160;Hat OpenShift_ on a local host by using the `mirror-registry install` command. This creates a registry running on port 8443 for the purpose of storing a mirror of {{ product_title }} images. {._abstract}


:::note

The `mirror-registry install` command is for new installations only. If a registry is already installed on the host, use `mirror-registry upgrade` to update it or `mirror-registry uninstall` to remove it.

:::


After installation, a systemd service (`quay.service`) is created and started. The registry runs as a Podman container managed by a systemd Quadlet unit file. All access credentials and the registry URL are printed at the end of the install routine.

**Prerequisites**

*   An {{ product_title }} subscription.
*   {{ op_system_base_full }} 9 or later.
*   Podman 4.4 or later.
*   A fully qualified domain name (FQDN) or IP address for the registry host. When using auto-detection, the hostname must be a FQDN. If you pass a hostname explicitly with `-hostname`, an IP address is also supported. The hostname or IP address must resolve by DNS or be present in `/etc/hosts` on each client machine that will access the registry.
*   About 50 GB or more of available disk space for mirrored {{ product_title }} images, depending on the number of releases you mirror.

    :::note

    Up to 1 TB per stream or more is suggested. Storage requirements can vary based on your organization’s needs. To remove unnecessary images and free up space, use `skopeo delete` to delete individual tags or `oc-mirror delete` for bulk cleanup of mirrored {{ product_title }} content. The registry reclaims space automatically through its built-in garbage collector.
    
    :::

*   A valid {{ product_title }} pull secret from [console.redhat.com](https://console.redhat.com/openshift/install/pull-secret).

**Procedure**

1.  Download the `mirror-registry` bundle for the latest version of the _mirror registry for Red&#160;Hat OpenShift_ found on the [OpenShift console **Downloads**](https://console.redhat.com/openshift/downloads#tool-mirror-registry) page.
1.  Extract the bundle and make the binary executable by running the following commands:
    ```terminal
    $ tar -xzf mirror-registry-amd64.tar.gz
    ```
    ```terminal
    $ chmod +x mirror-registry
    ```
1.  Install the _mirror registry for Red&#160;Hat OpenShift_ on your local host by using the `mirror-registry` tool. For a full list of available flags, see "Mirror registry for Red&#160;Hat OpenShift flags".
    *   For an air-gapped environment, specify the path to the included container image archive:
        ```terminal
        $ ./mirror-registry install \
          -data-dir /var/lib/quay \
          -image-archive image-archive.tar
        ```
    *   For a non-root installation, use a user-writable path for the data directory. 
        *   Non-root installations require cgroups v2. {{ op_system_base }} 9 uses cgroups v2 by default. Verify that cgroups v2 is enabled by running the following command:
            ```terminal
            $ podman info --format '{{.Host.CgroupsVersion}}'
            ```
        *   Install the registry as a non-root user by running the following command:
            ```terminal
            $ ./mirror-registry install \
              -data-dir ~/quay-data \
              -image-archive image-archive.tar
            ```
        *   Optional: The installation program automatically detects the system hostname. To specify a hostname, pass the `-hostname` flag by entering the following command:
            ```terminal
            $ ./mirror-registry install \
              -data-dir <data_dir> \
              -hostname <host_example_com> \
              -image-archive image-archive.tar
            ```
1.  Use the username and password generated during installation to log in to the registry by running the following command:
    ```terminal
    $ podman login -u admin \
      -p $(cat <data_dir>/auth/admin-password) \
      <host_example_com>:8443 \
      --tls-verify=false
    ```
    *   Substitute `<data_dir>` with the data directory you specified during installation.

        You can avoid running `--tls-verify=false` by adding `/ssl.cert` to your system’s trusted certificate store. For example:
        ```terminal
        $ sudo cp <data_dir>/ssl.cert /etc/pki/ca-trust/source/anchors/ && sudo update-ca-trust
        ```
1.  Mirror {{ product_title }} images after logging in. Depending on your needs, see either the "Mirroring the {{ product_title }} image repository" or the "Mirroring Operator catalogs for use with disconnected clusters" sections of this document.

    :::note

    If there are issues with images stored by the _mirror registry for Red&#160;Hat OpenShift_ due to storage layer problems, you can re-mirror the {{ product_title }} images, or reinstall the mirror registry on more stable storage.
    
    :::