---
title: Custom resource definition (CRD) upgrade safety
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Custom resource definition (CRD) upgrade safety {id="crd-upgrade-safety"}
{%- set context = "crd-upgrade-safety" %}

When you update a custom resource definition (CRD) provided by a cluster extension, {{ olmv1_first }} runs a CRD upgrade safety preflight check to ensure compatibility with earlier versions. {._abstract}

The CRD update must pass the validation checks before the change is allowed to progress on a cluster.

**Additional resources**
{._additional-resources}

*   [Updating a cluster extension](/extensions/ce/managing-ce#olmv1-updating-an-operator_managing-ce)

{% leveloffset +1 %}{% include "./modules/prohibited-crd-upgrades.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/allowed-crd-upgrades.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/disabling-crd-preflight.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/examples-unsafe-crd-upgrades.md" %}{% endleveloffset %}