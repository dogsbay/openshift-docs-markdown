{%- set _mod_docs_content_type = "PROCEDURE" %}
# Rebuilding SQLite database catalog images {id="olm-updating-sqlite-catalog-to-a-new-opm-version_{{ context }}"}

You can rebuild your SQLite database catalog image with the latest version of the `opm` CLI tool that is released with your version of {{ product_title }}. {._abstract}

**Prerequisites**

*   You have a SQLite database catalog source.
{%- if not (openshift_dedicated or openshift_rosa or openshift_rosa_hcp) %}
*   You have access to the cluster as a user with the `cluster-admin` role.
{%- endif %}
{%- if openshift_dedicated or openshift_rosa or openshift_rosa_hcp %}
*   You have access to the cluster as a user with the `dedicated-admin` role.
{%- endif %}
*   You have the latest version of the `opm` CLI tool released with {{ product_title }} 
{%- if not (openshift_dedicated or openshift_rosa or openshift_rosa_hcp) %}
{{ product_version }} 
{%- endif %}
on your workstation.

**Procedure**

*   Run the following command to rebuild your catalog with a more recent version of the `opm` CLI tool:
    ```terminal {minja}
    $ opm index add --binary-image \
      registry.redhat.io/openshift4/ose-operator-registry-rhel9:v{{ product_version }} \
      --from-index <your_registry_image> \
      --bundles "" -t \<your_registry_image>
    ```