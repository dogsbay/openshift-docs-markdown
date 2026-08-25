---
title: Configuring Operator Lifecycle Manager features
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Configuring Operator Lifecycle Manager features {id="olm-config"}
{%- set context = "olm-config" %}

Cluster administrators can enable or disable Operator Lifecycle Manager (OLM) cluster features by editing the `OLMConfig` custom resource (CR) named `cluster` in {{ product_title }}. {._abstract}

{% leveloffset +1 %}{% include "./modules/olm-disabling-copied-csvs.md" %}{% endleveloffset %}

**Additional resources**

*   [Install modes](/operators/understanding/olm/olm-understanding-operatorgroups#olm-operatorgroups-membership_olm-understanding-operatorgroups)