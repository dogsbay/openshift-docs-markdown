{%- set _mod_docs_content_type = "PROCEDURE" %}
# Migrating SQLite database catalogs to the file-based catalog format {id="olm-migrating-sqlite-catalog-to-fbc_{{ context }}"}

You can update your deprecated SQLite database format catalogs to the file-based catalog format by using the `opm migrate` command. {._abstract}

**Prerequisites**

*   You have a SQLite database catalog source.
{%- if not (openshift_dedicated or openshift_rosa or openshift_rosa_hcp) %}
*   You have access to the cluster as a user with the `cluster-admin` role.
{%- endif %}
{%- if openshift_dedicated or openshift_rosa or openshift_rosa_hcp %}
*   You have access to the cluster as a user with the `dedicated-admin` role.
{%- endif %}
*   You have the latest version of the `opm` CLI tool released with {{ product_title }} 
{%- if not (openshift_rosa or openshift_rosa_hcp or openshift_dedicated) %}
{{ product_version }} 
{%- endif %}
on your workstation.

**Procedure**

1.  Migrate your SQLite database catalog to a file-based catalog by running the following command:
    ```terminal
    $ opm migrate <registry_image> <fbc_directory>
    ```
1.  Generate a Dockerfile for your file-based catalog by running the following command:
    ```terminal {minja}
    $ opm generate dockerfile <fbc_directory> \
      --binary-image \
      registry.redhat.io/openshift4/ose-operator-registry-rhel9:v{{ product_version }}
    ```

**Next steps**

*   The generated Dockerfile can be built, tagged, and pushed to your registry.