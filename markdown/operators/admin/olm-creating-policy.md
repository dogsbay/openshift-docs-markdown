---
title: Allowing non-cluster administrators to install Operators
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
# Allowing non-cluster administrators to install Operators {id="olm-creating-policy"}
{% include "./_attributes/common-attributes.md" %}
{%- set context = "olm-creating-policy" %}

Cluster administrators can use _Operator groups_ to allow regular users to install Operators.

**Additional resources**

*   [Operator groups](/operators/understanding/olm/olm-understanding-operatorgroups#olm-understanding-operatorgroups)

{% leveloffset +1 %}{% include "./modules/olm-policy-understanding.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/olm-policy-scenarios.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/olm-policy-workflow.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/olm-policy-scoping-operator-install.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/olm-policy-fine-grained-permissions.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/olm-policy-catalog-access.md" %}{% endleveloffset %}

**Additional resources**

*   [Disabling the default OperatorHub catalog sources](/operators/admin/olm-managing-custom-catalogs#olm-restricted-networks-operatorhub_olm-managing-custom-catalogs)
*   [Adding a catalog source to a cluster](/operators/admin/olm-managing-custom-catalogs#olm-creating-catalog-from-index_olm-managing-custom-catalogs)

{% leveloffset +1 %}{% include "./modules/olm-policy-troubleshooting.md" %}{% endleveloffset %}