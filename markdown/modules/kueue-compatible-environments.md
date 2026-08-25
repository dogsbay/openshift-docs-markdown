{%- set _mod_docs_content_type = "REFERENCE" %}
# Compatible environments {id="compatible-environments_{{ context }}"}

Your cluster must meet specific architecture and platform requirements before you can install {{ kueue_name }}. {._abstract}

## Supported architectures {id="compatible-environments-arch_{{ context }}"}

{{ kueue_name }} version 1.1 and later is supported on the following architectures:

*   ARM64
*   64-bit x86
*   ppc64le ({{ ibm_power_name }})
*   s390x ({{ ibm_z_name }})

## Supported platforms {id="compatible-environments-platforms_{{ context }}"}

{{ kueue_name }} version 1.1 and later is supported on the following platforms:

*   {{ product_title }}
*   {{ hcp_capital }} for {{ product_title }}


:::important

Currently, {{ kueue_name }} is not supported on {{ ms }}.

:::