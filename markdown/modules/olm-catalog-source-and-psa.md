{%- set _mod_docs_content_type = "CONCEPT" %}
# Catalog sources and pod security admission {id="olm-catalog-sources-and-psa_{{ context }}"}

_Pod security admission_ was introduced in {{ product_title }} 4.11 to ensure pod security standards. Catalog sources built using the SQLite-based catalog format and a version of the `opm` CLI tool released before {{ product_title }} 4.11 cannot run under restricted pod security enforcement. {._abstract}

{% if not (openshift_rosa or openshift_rosa_hcp or openshift_dedicated) %}
In {{ product_title }} {{ product_version }}, 
{% endif %}
{% if openshift_rosa or openshift_rosa_hcp or openshift_dedicated %}
In {{ product_title }}, 
{%- endif %}
namespaces do not have restricted pod security enforcement by default and the default catalog source security mode is set to `legacy`.

Default restricted enforcement for all namespaces is planned for inclusion in a future {{ product_title }} release. When restricted enforcement occurs, the security context of the pod specification for catalog source pods must match the restricted pod security standard. If your catalog source image requires a different pod security standard, the pod security admissions label for the namespace must be explicitly set.


:::note

If you do not want to run your SQLite-based catalog source pods as restricted, you do not need to update your catalog source in 
{%- if not (openshift_rosa or openshift_rosa_hcp or openshift_dedicated) %}
{{ product_title }} {{ product_version }}.
{%- endif %}
{%- if openshift_rosa or openshift_rosa_hcp or openshift_dedicated %}
{{ product_title }}. 
{%- endif %}

However, it is recommended that you take action now to ensure your catalog sources run under restricted pod security enforcement. If you do not take action to ensure your catalog sources run under restricted pod security enforcement, your catalog sources might not run in future {{ product_title }} releases.

:::


As a catalog author, you can enable compatibility with restricted pod security enforcement by completing either of the following actions:

*   Migrate your catalog to the file-based catalog format.
*   Update your catalog image with a version of the `opm` CLI tool released with {{ product_title }} 4.11 or later.


:::note

The SQLite database catalog format is deprecated, but still supported by Red Hat. In a future release, the SQLite database format will not be supported, and catalogs will need to migrate to the file-based catalog format. As of {{ product_title }} 4.11, the default Red Hat-provided Operator catalog is released in the file-based catalog format. File-based catalogs are compatible with restricted pod security enforcement.

:::


If you do not want to update your SQLite database catalog image or migrate your catalog to the file-based catalog format, you can configure your catalog to run with elevated permissions.