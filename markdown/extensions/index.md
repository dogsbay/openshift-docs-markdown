---
title: Extensions overview
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
# Extensions overview {id="extensions-overview"}
{% include "./_attributes/common-attributes.md" %}
{%- set context = "extensions-overview" %}

You can configure the operating system of your nodes and extend capabilities to your cluster by using pre-packaged software extensions. These extensions include ready-to-use tools that customize your environment for your requirements.

{{ olm_first }} has been included with {{ product_title }} 4 since its initial release. {{ product_title }} {{ product_version }} includes components for a next-generation iteration of {{ olm }} as a Generally Available (GA) feature, known during this phase as _{{ olmv1 }}_. This updated framework evolves many of the concepts that have been part of previous versions of {{ olm }} and adds new capabilities.

{% include "./snippets/olmv1-cli-only.md" %}

{% leveloffset +1 %}{% include "./modules/olmv1-highlights.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/olmv1-about-purpose.md" %}{% endleveloffset %}

**Additional resources**

*   [Operator Controller](/extensions/arch/operator-controller#operator-controller)
*   [Catalogd](/extensions/arch/catalogd#catalogd)
*   [Updating a cluster extension](/extensions/ce/managing-ce#olmv1-updating-an-operator_managing-ce)
*   [Installing extensions](/extensions/ce/managing-ce#managing-ce)