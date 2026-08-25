{%- set _mod_docs_content_type = "CONCEPT" %}
# Monitoring targets for user-defined projects {id="monitoring-targets-for-user-defined-projects_{{ context }}"}

{% if not (openshift_dedicated or openshift_rosa) %}
When monitoring is enabled for user-defined projects, you can monitor:
{% endif %}

{% if openshift_dedicated or openshift_rosa %}
Monitoring is enabled by default for {{ product_title }} user-defined projects. You can monitor:
{% endif %}

*   Metrics provided through service endpoints in user-defined projects.
*   Pods running in user-defined projects.