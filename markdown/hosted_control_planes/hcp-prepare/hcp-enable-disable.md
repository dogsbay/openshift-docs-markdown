---
title: "Enabling or disabling the {{ hcp }} feature"
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Enabling or disabling the {{ hcp }} feature {id="hcp-enable-disable"}
{%- set context = "hcp-enable-disable" %}

The {{ hcp }} feature, as well as the `hypershift-addon` managed cluster add-on, are enabled by default. If needed, you can disable the feature, or if you disabled it, you can manually enable it. {._abstract}

You can uninstall the HyperShift Operator and disable the {{ hcp }} feature. When you disable the {{ hcp }} feature, you must destroy the hosted cluster and the managed cluster resource on {{ mce_short }}, as described in the _Destroying a hosted cluster_ section.

**Additional resources**
{._additional-resources}

*   [Destroying a hosted cluster](/hosted_control_planes/hcp-destroy/hcp-destroy-aws#hcp-destroy-aws)

{% leveloffset +1 %}{% include "./modules/hcp-enable-manual.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/hcp-enable-manual-addon.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/hcp-uninstall-operator.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/hcp-disable-feature.md" %}{% endleveloffset %}