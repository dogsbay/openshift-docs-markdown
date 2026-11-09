{%- set _mod_docs_content_type = "CONCEPT" %}
# Major versions (X.y.z) {id="rosa-major-versions_{{ context }}"}

Major versions of {{ product_title }}, for example version 4, are supported for one year following the release of a later major version or the retirement of the product. {._abstract}

For example, if version 5 was made available for {{ product_title }} on January 1, version 4 would be allowed to continue running on managed clusters for 12 months, until December 31. After this time, clusters would need to be upgraded or migrated to version 5.

{% if openshift_rosa_hcp %}

:::important

Starting with {{ product_title }} version 5.x, only {{ hcp }} architecture is supported. Classic cluster architecture is not available for version 5.x deployments or upgrades. You must migrate your workloads to a {{ hcp }} cluster if you are running version 4.x classic clusters and want to adopt version 5.x.

:::

{% endif %}

{% if openshift_rosa %}

:::important

Classic cluster architecture is not available for version 5.x deployments or upgrades. You must migrate your workloads to a {{ hcp }} cluster if you are running version 4.x {{ product_title }} clusters and want to adopt version 5.x.

:::

{% endif %}

{% if openshift_dedicated %}

:::important

Classic cluster architecture is not available for version 5.x deployments or upgrades. {{ product_title }} on hosted control planes architecture will be available in mid to late 2027.

:::

{% endif %}