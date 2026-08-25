{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Maintenance and support for monitoring {id="maintenance-and-support-for-monitoring"}
{%- set context = "maintenance-and-support-for-monitoring" %}

You can configure {{ product_title }} monitoring by using supported configuration options in the {{ cmo_full }}. Using only supported options ensures your monitoring configuration persists across cluster upgrades and Prometheus version changes. {._abstract}

Configuration paradigms might change across Prometheus releases, and such cases can only be handled gracefully if all configuration possibilities are controlled. If you use unsupported configurations, your changes will disappear because the {{ cmo_short }} automatically reconciles any differences and resets any unsupported changes back to the originally defined state by default and by design.

{% if openshift_dedicated or openshift_rosa or openshift_rosa_hcp %}

:::important

Installing another Prometheus instance is not supported by the Red Hat Site Reliability Engineers (SRE).

:::

{% endif %}

{% leveloffset +1 %}{% include "./modules/monitoring-support-considerations.md" %}{% endleveloffset %}

{% if not (openshift_dedicated or openshift_rosa) %}
{% leveloffset +1 %}{% include "./modules/monitoring-support-policy-for-monitoring-operators.md" %}{% endleveloffset %}
{% endif %}

{% leveloffset +1 %}{% include "./modules/monitoring-support-version-matrix-for-monitoring-components.md" %}{% endleveloffset %}

## Additional resources {id="additional-resources_{{ context }}" ._additional-resources}
*   [Config map reference for the {{ cmo_full }}](/observability/monitoring/config-map-reference-for-the-cluster-monitoring-operator#cluster-monitoring-operator-configuration-reference)