{%- set _mod_docs_content_type = "CONCEPT" %}
# Maintenance and support for monitoring {id="maintenance-and-support_{{ context }}"}

Not all configuration options for the monitoring stack are exposed. The only supported way of configuring {{ product_title }} monitoring is by configuring the {{ cmo_first }} using the options described in the "Config map reference for the {{ cmo_short }}". _Do not use other configurations, as they are unsupported._

Configuration paradigms might change across Prometheus releases, and such cases can only be handled gracefully if all configuration possibilities are controlled. If you use configurations other than those described in the "Config map reference for the {{ cmo_full }}", your changes will disappear because the {{ cmo_short }} automatically reconciles any differences and resets any unsupported changes back to the originally defined state by default and by design.

{% if openshift_dedicated or openshift_rosa %}

:::important

Installing another Prometheus instance is not supported by the Red Hat Site Reliability Engineers (SRE).

:::

{% endif %}