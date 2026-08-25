{%- set _mod_docs_content_type = "CONCEPT" %}
# {{ sno_caps }} differences {id="virt-sno-differences_{{ context }}"}

You can install {{ VirtProductName }} on {{ sno }}. {._abstract}

However, you should be aware that {{ sno_caps }} does not support the following features:

*   High availability
*   Pod disruption
*   Live migration
*   Virtual machines or templates that have an eviction strategy configured