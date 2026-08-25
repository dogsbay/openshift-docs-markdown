---
title: Installing the OADP Operator
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Installing the OADP Operator {id="oadp-installing-operator-doc"}
{%- set context = "installing-oadp-operator" %}

Install the {{ oadp_first }} Operator on {{ product_title }} {{ product_version }} by using Operator Lifecycle Manager (OLM). {._abstract}

The {{ oadp_short }} Operator installs Velero {{ velero_version }}.

{% leveloffset +1 %}{% include "./modules/installing-operator-oadp.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/velero-oadp-version-relationship.md" %}{% endleveloffset %}

## Additional resources {id="additional-resources_{{ context }}" ._additional-resources}

*   [Velero {{ velero_version }}](https://{{ velero_domain }}/docs/v{{ velero_version }}/)