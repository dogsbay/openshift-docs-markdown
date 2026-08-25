---
title: Installing the OADP Operator
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
# Installing the OADP Operator {id="oadp-installing-operator-doc"}
{% include "./_attributes/common-attributes.md" %}
{%- set context = "installing-oadp-operator" %}

Install the {{ oadp_first }} Operator on {{ product_title }} {{ product_version }} by using Operator Lifecycle Manager (OLM).

The {{ oadp_short }} Operator installs Velero {{ velero_version }}.

{% leveloffset +1 %}{% include "./modules/installing-operator-oadp.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/velero-oadp-version-relationship.md" %}{% endleveloffset %}

## Additional resources {id="additional-resources_{{ context }}"}

*   [Velero {{ velero_version }}](https://{{ velero_domain }}/docs/v{{ velero_version }}/)