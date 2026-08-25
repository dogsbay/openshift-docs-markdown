{%- set _mod_docs_content_type = "CONCEPT" %}
# Enabling alert routing for user-defined projects {id="enabling-alert-routing-for-user-defined-projects_{{ context }}"}

In {{ product_title }}, an administrator can enable alert routing for user-defined projects.
This process consists of the following steps:

{% if not (openshift_dedicated or openshift_rosa) %}
*   Enable alert routing for user-defined projects:
    *   Use the default platform Alertmanager instance.
    *   Use a separate Alertmanager instance only for user-defined projects.
{% endif %}
{% if openshift_dedicated or openshift_rosa %}
*   Enable alert routing for user-defined projects to use a separate Alertmanager instance.
{%- endif %}
*   Grant users permission to configure alert routing for user-defined projects.

After you complete these steps, developers and other users can configure custom alerts and alert routing for their user-defined projects.