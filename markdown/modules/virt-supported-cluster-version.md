{%- set _mod_docs_content_type = "CONCEPT" %}
# Supported cluster versions for {{ VirtProductName }} {id="virt-supported-cluster-version_{{ context }}"}

{{ VirtProductName }} {{ VirtVersion }} is supported for use on {{ product_title }} {{ product_version }} clusters. To use the latest z-stream release of {{ VirtProductName }}, you must first upgrade to the latest version of {{ product_title }}. {._abstract}

The latest stable release of {{ VirtProductName }} {{ VirtVersion }} is {{ HCOVersion }}.

{% if openshift_rosa or openshift_rosa_hcp %}

:::note

{{ VirtProductName }} is currently available on x86-64 CPUs. Arm-based nodes are not yet supported.

:::

{% endif %}