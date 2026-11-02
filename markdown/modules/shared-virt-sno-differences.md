{%- set _mod_docs_content_type = "CONCEPT" %}
# Single-node OpenShift feature support {id="shared-virt-sno-differences_{{ context }}"}

You can install {{ VirtProductName }} on single-node OpenShift. The topology does not support high availability, pod disruption, live migration, or eviction strategies. {._abstract}

However, you should be aware that Single-node OpenShift does not support the following features:

*   High availability
*   Pod disruption
*   Live migration
*   Virtual machines or templates that have an eviction strategy configured