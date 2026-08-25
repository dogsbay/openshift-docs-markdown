---
title: Configuring Operator Lifecycle Manager features
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
# Configuring Operator Lifecycle Manager features {id="olm-config"}
{% include "./_attributes/common-attributes.md" %}
{%- set context = "olm-config" %}

Cluster administrators can enable or disable Operator Lifecycle Manager (OLM) cluster features by editing the `OLMConfig` custom resource (CR) named `cluster` in {{ product_title }}.

{% leveloffset +1 %}{% include "./modules/olm-disabling-copied-csvs.md" %}{% endleveloffset %}

**Additional resources**

*   [Install modes](/operators/understanding/olm/olm-understanding-operatorgroups#olm-operatorgroups-membership_olm-understanding-operatorgroups)