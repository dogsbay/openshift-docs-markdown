{%- set _mod_docs_content_type = "PROCEDURE" %}
# Migrating from mirror registry for Red Hat OpenShift 2.0.x (PostgreSQL) {id="mirror-registry-migrate-postgresql_{{ context }}"}

If your _mirror registry for Red&#160;Hat OpenShift_ 2.0.x installation uses PostgreSQL, you can migrate to 3.0 by using the `mirror-registry migrate` command.  {._abstract}

The PostgreSQL migration path converts the PostgreSQL data to SQLite and installs the new registry. The `mirror-registry migrate` command handles the database connection automatically by re-executing itself inside the PostgreSQL container’s network namespace using `nsenter`.


:::important

*   The PostgreSQL migration path does not support the `-dry-run`, `-cleanup`, or `-skip-install` flags. These flags are available for SQLite source migrations only.
*   The target directory must be clean, that is, empty or non-existent. The PostgreSQL migration does not support resuming a previous attempt. If a previous attempt left partial data, remove the target directory before retrying.

:::


If the PostgreSQL migration fails at any point, the following actions are taken automatically:

*   Intermediate migration artifacts (`quay.db.partial`) are removed.
*   Any partially created 3.0 Quadlet installation is removed.
*   The old 2.0.x services (`quay-pod`, `quay-postgres`, `quay-redis`, `quay-app`) are restarted.

A failed PostgreSQL migration is safe to retry after addressing the root cause and providing a clean target directory.

**Prerequisites**

*   The 2.0.x `quay-postgres` container and `quay-pod` must be running. The migration connects to PostgreSQL through the pod’s network namespace.
*   The old `quay-app` service must be stoppable.
*   No existing 3.0 Quadlet installation may be present. Uninstall it first if needed.
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
1.  Run the migration, specifying your 2.0.x installation directory and the target data directory:
    ```terminal
    $ ./mirror-registry migrate \
      -source-root ~/quay-install \
      -data-dir /var/lib/quay \
      -image-archive image-archive.tar
    ```

    The `-source-root` flag points to the 2.0.x installation directory (typically `~/quay-install`). The migration reads `quay-config/config.yaml` within it to determine the database type and connection details.

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
1.  Push a new test image to verify write access by running the following commands:
    ```terminal
    $ podman tag docker.io/library/alpine:latest <host_example_com>:8443/admin/alpine:test
    ```
    ```terminal
    $ podman push <host_example_com>:8443/admin/alpine:test --tls-verify=false
    ```