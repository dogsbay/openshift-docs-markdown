{%- set _mod_docs_content_type = "REFERENCE" %}
# Prerequisites for mirroring Operator catalogs {id="olm-mirror-catalog-prerequisites_{{ context }}"}

You must meet several prerequisites before you can mirror Operator catalogs for use with disconnected clusters. {._abstract}

Mirroring Operator catalogs for use with disconnected clusters has several prerequisites.

The following prerequisites must be met:

*   Workstation with unrestricted network access.
*   `podman` version 1.9.3 or later.
*   If you want to filter, or _prune_, an existing catalog and selectively mirror only a subset of Operators, see the following sections:
    *   [Installing the opm CLI](/cli_reference/opm/cli-opm-install#cli-opm-install)
    *   [Updating or filtering a file-based catalog image](/operators/admin/olm-managing-custom-catalogs#olm-filtering-fbc_olm-managing-custom-catalogs)
{%- if not openshift_origin %}
*   If you want to mirror a Red Hat-provided catalog, run the following command on your workstation with unrestricted network access to authenticate with `registry.redhat.io`:
    ```terminal
    $ podman login registry.redhat.io
    ```
{%- endif %}
*   Access to a mirror registry that supports [Docker v2-2](https://docs.docker.com/registry/spec/manifest-v2-2/).
*   On your mirror registry, decide which repository, or namespace, to use for storing mirrored Operator content. For example, you might create an `olm-mirror` repository.
*   If your mirror registry does not have internet access, connect removable media to your workstation with unrestricted network access.
*   If you are working with private registries, including `registry.redhat.io`, set the `REG_CREDS` environment variable to the file path of your registry credentials for use in later steps. For example, for the `podman` CLI:
    ```terminal
    $ REG_CREDS=${XDG_RUNTIME_DIR}/containers/auth.json
    ```