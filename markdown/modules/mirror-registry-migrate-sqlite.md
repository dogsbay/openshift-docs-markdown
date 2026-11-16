{%- set _mod_docs_content_type = "PROCEDURE" %}
# Migrating from mirror registry for Red Hat OpenShift 2.0.x (SQLite) {id="mirror-registry-migrate-sqlite_{{ context }}"}

If you are running _mirror registry for Red&#160;Hat OpenShift_ 2.0.x with the default SQLite backend, you can migrate to 3.0 by using the `mirror-registry migrate` command. The command auto-detects the existing installation, copies all data to the new data directory, upgrades the database schema, and installs the new registry. {._abstract}


:::important

Use `mirror-registry migrate` only to migrate from a 2.0.x installation to 3.0. For 3.0 z-stream updates, use `mirror-registry upgrade` instead. The `migrate` command exits with an error if a 3.0 installation already exists on the host.

:::



:::note

Do not run `mirror-registry migrate` and `mirror-registry install` separately. The `migrate` command calls `install` internally after copying data.

:::


**Prerequisites**

*   The 2.0.x registry is running and healthy before migration.
*   You can pull images from the old registry.
*   Sufficient free disk space is available for the new data directory. The migration copies data rather than moving it.

**Procedure**

1.  Download the new `mirror-registry` bundle for the latest version of the _mirror registry for Red&#160;Hat OpenShift_ from the [OpenShift console **Downloads**](https://console.redhat.com/openshift/downloads#tool-mirror-registry) page.
1.  Extract the bundle and make the binary executable by running the following commands:
    ```terminal
    $ tar -xzf mirror-registry-amd64.tar.gz
    ```
    ```terminal
    $ chmod +x mirror-registry
    ```
1.  Run the migration by entering the following command. The `mirror-registry migrate` command auto-detects your 2.0.x installation by probing systemd units, Podman volumes, and the default `~/quay-install/` path:
    ```terminal
    $ ./mirror-registry migrate -image-archive image-archive.tar
    ```

    If auto-detection fails, or if you installed 2.0.x in a non-default location, specify the source root explicitly:
    ```terminal
    $ ./mirror-registry migrate \
      -source-root ~/quay-install \
      -data-dir /var/lib/quay \
      -image-archive image-archive.tar
    ```

    Alternatively, specify individual paths:
    ```terminal
    $ ./mirror-registry migrate \
      -source-db ~/quay-install/sqlite-storage/quay_sqlite.db \
      -source-storage ~/quay-install/quay-storage \
      -source-certs ~/quay-install/quay-config \
      -data-dir /var/lib/quay \
      -hostname <host_example_com> \
      -image-archive image-archive.tar
    ```
1.  Optional: Preview the migration plan without making any changes by running the following command:
    ```terminal
    $ ./mirror-registry migrate -source-root ~/quay-install -dry-run
    ```

    The output shows the detected source paths, hostname, and target directory.

**Verification**

1.  Log in to the new registry by entering the following command:
    ```terminal
    $ podman login -u admin \
      -p $(cat /var/lib/quay/auth/admin-password) \
      --tls-verify=false \
      <host_example_com>:8443
    ```
1.  Pull an image that existed before migration to verify the data was copied successfully:
    ```terminal
    $ podman pull <host_example_com>:8443/<repository>/<image>:<tag> --tls-verify=false
    ```
1.  Push a new test image to verify write access:
    ```terminal
    $ podman tag docker.io/library/alpine:latest <host_example_com>:8443/admin/alpine:test
    ```
    ```terminal
    $ podman push <host_example_com>:8443/admin/alpine:test --tls-verify=false
    ```
1.  After verifying the migration, remove the old 2.0.x services and Podman volumes by running the following command:
    ```terminal
    $ ./mirror-registry migrate -source-root ~/quay-install -cleanup
    ```

    :::note

    The `~/quay-install` directory itself is preserved after cleanup because it may contain the `quay-rootCA/` directory that clients trust.
    
    :::