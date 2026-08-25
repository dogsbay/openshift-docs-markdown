{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/attributes-openshift-dedicated.md" %}
# Disable monitoring for user-defined projects {id="sd-disabling-monitoring-for-user-defined-projects"}
{%- set context = "sd-disabling-monitoring-for-user-defined-projects" %}

You can disable monitoring for user-defined projects to reduce resource consumption or exclude specific projects when they have custom monitoring solutions. This provides flexibility in managing cluster monitoring resources for your workloads. {._abstract}

{% leveloffset +1 %}{% include "./modules/monitoring-for-user-defined-projects.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/sd-disabling-monitoring-for-user-defined-projects.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/monitoring-excluding-a-user-defined-project-from-monitoring.md" %}{% endleveloffset %}

## Additional resources {id="additional-resources_{{ context }}" ._additional-resources}
*   [Config map reference for the Cluster Monitoring Operator](/observability/monitoring/config-map-reference-for-the-cluster-monitoring-operator#cluster-monitoring-operator-configuration-reference)