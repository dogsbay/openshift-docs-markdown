{%- set _mod_docs_content_type = "REFERENCE" %}
# Release notes for Kernel Module Management Operator 2.3 {id="kmm-2-3-RN_{{ context }}"}

Review what is new, changed, or fixed in Kernel Module Management Operator 2.3 on {{ product_title }}. {._abstract}

The following new features are included in this release:

*   In this release, KMM uses version 1.23 of the Golang programming language to ensure test continuity for partners.

*   You can now schedule KMM pods by defining taints and tolerations. For more information, see [Using tolerations for kernel module scheduling](/hardware_enablement/kmm-kernel-module-management#kmm-using-tolerations-for-kernel-module-scheduling_kernel-module-management-operator).