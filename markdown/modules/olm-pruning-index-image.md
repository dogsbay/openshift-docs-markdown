{% if openshift_origin %}
{%- set catalog_name = "catalog" -%}
{%- set index_image_pullspec = "quay.io/operatorhubio/catalog:latest" -%}
{%- set index_image = "catalog:latest" -%}
{%- set registry_image = "quay.io/openshift/origin-operator-registry:{{ product_version }}" -%}
{%- set package1 = "couchdb-operator" -%}
{%- set package2 = "eclipse-che" -%}
{%- set package3 = "etcd" -%}
{% endif %}
{% if not openshift_origin %}
{%- set catalog_name = "redhat-operators" -%}
{%- set index_image_pullspec = "registry.redhat.io/redhat/redhat-operator-index:v{{ product_version }}" -%}
{%- set index_image = "redhat-operator-index:v{{ product_version }}" -%}
{%- set registry_image = "registry.redhat.io/openshift4/ose-operator-registry-rhel9:v{{ product_version }}" -%}
{%- set package1 = "advanced-cluster-management" -%}
{%- set package2 = "jaeger-product" -%}
{%- set package3 = "quay-operator" -%}
{% endif %}

{%- set _mod_docs_content_type = "PROCEDURE" %}
# Filtering a SQLite-based index image {id="olm-pruning-index-image_{{ context }}"}

An index image, based on the Operator bundle format, is a containerized snapshot of an Operator catalog. You can filter, or _prune_, an index of all but a specified list of packages, which creates a copy of the source index containing only the Operators that you want. {._abstract}

{% if context != "olm-managing-custom-catalogs" %}
When configuring Operator Lifecycle Manager (OLM) to use mirrored content on restricted network {{ product_title }} clusters, use this pruning method if you want to only mirror a subset of Operators from the default catalogs.

For the steps in this procedure, the target registry is an existing mirror registry that is accessible by your workstation with unrestricted network access. This example also shows pruning the index image for the default `{{ catalog_name }}` catalog, but the process is the same for any index image.
{% endif %}

**Prerequisites**

{% if context != "olm-managing-custom-catalogs" %}
*   A workstation with unrestricted network access.
{%- endif %}
*   You have `podman` version 1.9.3+.
*   You have [`grpcurl`](https://github.com/fullstorydev/grpcurl) (third-party command-line tool).
*   You have installed the `opm` CLI.
*   You have access to a registry that supports
[Docker v2-2](https://docs.docker.com/registry/spec/manifest-v2-2/).

**Procedure**

{% if not openshift_origin %}
{% if context != "olm-managing-custom-catalogs" %}
1.  Authenticate with `registry.redhat.io`:
    ```terminal
    $ podman login registry.redhat.io
    ```
{% endif %}
{% endif %}
1.  Authenticate with your target registry:
    ```terminal
    $ podman login <target_registry>
    ```
1.  Determine the list of packages you want to include in your pruned index.
    1.  Run the source index image that you want to prune in a container. For example:
        ```terminal
        $ podman run -p50051:50051 \
            -it {{ index_image_pullspec }}
        ```
        ```terminal title="Example output"
        Trying to pull {{ index_image_pullspec }}...
        Getting image source signatures
        Copying blob ae8a0c23f5b1 done
        ...
        INFO[0000] serving registry                              database=/database/index.db port=50051
        ```
    1.  In a separate terminal session, use the `grpcurl` command to get a list of the packages provided by the index:
        ```terminal
        $ grpcurl -plaintext localhost:50051 api.Registry/ListPackages > packages.out
        ```
    1.  Inspect the `packages.out` file and identify which package names from this list you want to keep in your pruned index. For example:
        ```text title="Example snippets of packages list"
        ...
        {
          "name": "{{ package1 }}"
        }
        ...
        {
          "name": "{{ package2 }}"
        }
        ...
        {
        {
          "name": "{{ package3 }}"
        }
        ...
        ```
    1.  In the terminal session where you executed the `podman run` command, press <kbd>Ctrl</kbd> and <kbd>C</kbd> to stop the container process.
1.  Run the following command to prune the source index of all but the specified packages:
    ```text
    $ opm index prune \
        -f {{ index_image_pullspec }} \// (1)
        -p {{ package1 }},{{ package2 }},{{ package3 }} \// (2)
        [-i {{ registry_image }}] \// (3)
        -t <target_registry>:<port>/<namespace>/{{ index_image }} (4)
    ```
    1.  Index to prune.
    1.  Comma-separated list of packages to keep.
    1.  Required only for {{ ibm_power_name }} and {{ ibm_z_name }} images: Operator Registry base image with the tag that matches the target {{ product_title }} cluster major and minor version.
    1.  Custom tag for new index image being built.
1.  Run the following command to push the new index image to your target registry:
    ```text
    $ podman push <target_registry>:<port>/<namespace>/{{ index_image }}
    ```

    where `<namespace>` is any existing namespace on the registry.
{%- if context != "olm-managing-custom-catalogs" %}
    For example, you might create an `olm-mirror` namespace to push all mirrored content to.
{% endif %}

{%- set catalog_name = false -%}
{%- set index_image_pullspec = false -%}
{%- set index_image = false -%}
{%- set registry_image = false -%}
{%- set package1 = false -%}
{%- set package2 = false -%}
{%- set package3 = false -%}