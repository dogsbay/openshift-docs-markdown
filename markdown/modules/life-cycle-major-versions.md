{%- set _mod_docs_content_type = "CONCEPT" %}
# Major versions (X.y.z) {id="rosa-major-versions_{{ context }}"}

Major versions of {{ product_title }} are supported for at least 18 months following the release of a later major version. See the _Life cycle dates_ section for specific dates and support types. {._abstract}

{% if openshift_rosa_hcp %}

:::important

Starting with {{ product_title }} version 5.x, only {{ hcp }} architecture is supported. New installations of {{ OCP_short }} 5.x and in-place upgrades from {{ OCP_short }} 4.x to 5.x are only available on hosted control planes.

:::

{% endif %}

{% if openshift_rosa %}

:::important

{{ product_title }} is not available for version 5.x deployments or upgrades. New installations of {{ OCP_short }} 5.x and in-place upgrades from {{ OCP_short }} 4.x to 5.x are only available on hosted control planes.

:::

{% endif %}

{% if openshift_dedicated %}

:::important

Classic cluster architecture is not available for version 5.x deployments or upgrades. {{ product_title }} on hosted control planes architecture will be available in mid to late 2027.

:::

{% endif %}