---
title: Operator conditions
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
# Operator conditions {id="olm-operatorconditions"}
{% include "./_attributes/common-attributes.md" %}
{%- set context = "olm-operatorconditions" %}

Operator Lifecycle Manager (OLM) uses Operator conditions to communicate additional lifecycle information about an Operator that OLM cannot infer on its own.

{% leveloffset +1 %}{% include "./modules/olm-operatorconditions-about.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/olm-supported-operatorconditions.md" %}{% endleveloffset %}

## Additional resources {id="olm-operatorconditions-addtl-resources"}

*   [Managing Operator conditions](/operators/admin/olm-managing-operatorconditions#olm-operatorconditions)
{%- if not (openshift_dedicated or openshift_rosa or openshift_rosa_hcp) %}
*   [Understanding how to use pod disruption budgets to specify the number of pods that must be up](/nodes/pods/nodes-pods-configuring#nodes-pods-pod-disruption-about_nodes-pods-configuring)
*   [Graceful termination](/applications/deployments/route-based-deployment-strategies#deployments-graceful-termination_route-based-deployment-strategies)
{% endif %}