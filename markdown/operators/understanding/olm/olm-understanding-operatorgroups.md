---
title: Operator groups
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Operator groups {id="olm-understanding-operatorgroups"}
{%- set context = "olm-understanding-operatorgroups" %}

Operator groups control which namespaces an Operator watches and how Operator Lifecycle Manager (OLM) manages related Operators in {{ product_title }}. You can use them to configure install modes, target namespaces, and access for OLM-managed Operators. {._abstract}

{% leveloffset +1 %}{% include "./modules/olm-operatorgroups-about.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/olm-operatorgroups-membership.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/olm-operatorgroups-target-namespace.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/olm-operatorgroups-csv-annotations.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/olm-operatorgroups-provided-apis-annotations.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/olm-operatorgroups-rbac.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/olm-operatorgroups-copied-csvs.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/olm-operatorgroups-static.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/olm-operatorgroups-intersections.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/olm-operatorgroups-limitations.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

{%- if not (openshift_dedicated or openshift_rosa or openshift_rosa_hcp) %}
*   [Operator Lifecycle Manager (OLM) → Multitenancy and Operator colocation](/operators/understanding/olm/olm-colocation#olm-colocation)
{%- endif %}
*   [Operators in multitenant clusters](/operators/understanding/olm-multitenancy#olm-multitenancy)
{%- if not (openshift_dedicated or openshift_rosa or openshift_rosa_hcp) %}
*   [Allowing non-cluster administrators to install Operators](/operators/admin/olm-creating-policy#olm-creating-policy)
{%- endif %}

{% leveloffset +1 %}{% include "./modules/olm-operatorgroups-troubleshooting.md" %}{% endleveloffset %}