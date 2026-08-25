---
title: Preflight validation for Kernel Module Management (KMM) Modules
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
# Preflight validation for Kernel Module Management (KMM) Modules {id="kmm-preflight-validation"}
{% include "./_attributes/common-attributes.md" %}
{%- set context = "kmm-preflight-validation" %}

Before you upgrade a cluster that uses Kernel Module Management (KMM) modules, verify that the kernel modules can be installed on the nodes after the upgrade. This preflight validation helps you avoid unexpected module failures caused by kernel changes.

Preflight attempts to validate every `Module` loaded in the cluster, in parallel. Preflight does not wait for validation of one `Module` to complete before starting validation of another `Module`.

{%- set FeatureName = "Kernel Module Management Operator Preflight validation" %}

{% leveloffset +1 %}{% include "./modules/kmm-validation-kickoff.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/kmm-validation-lifecycle.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/kmm-validation-status.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/kmm-image-validation-stage.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/kmm-example-cr.md" %}{% endleveloffset %}