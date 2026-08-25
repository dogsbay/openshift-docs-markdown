{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Monitoring stack architecture {id="monitoring-stack-architecture"}
{%- set context = "monitoring-stack-architecture" %}

{% if not (openshift_dedicated or openshift_rosa) %}
The {{ product_title }} monitoring stack is based on the [Prometheus](https://prometheus.io/) open source project and its wider ecosystem. 
{%- endif %}
You can learn about the monitoring stack architecture, which includes default monitoring components and components for monitoring user-defined projects.

{% leveloffset +1 %}{% include "./modules/monitoring-understanding-the-monitoring-stack.md" %}{% endleveloffset %}

{% if not (openshift_dedicated or openshift_rosa) %}
{% leveloffset +1 %}{% include "./modules/monitoring-default-monitoring-components.md" %}{% endleveloffset %}
{% endif %}

{% leveloffset +2 %}{% include "./modules/monitoring-default-monitoring-targets.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Getting detailed information about a metrics target](/observability/monitoring/accessing-metrics/accessing-metrics-as-an-administrator#getting-detailed-information-about-a-target_accessing-metrics-as-an-administrator)

{% leveloffset +1 %}{% include "./modules/monitoring-components-for-monitoring-user-defined-projects.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/monitoring-targets-for-user-defined-projects.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/monitoring-monitoring-stack-in-ha-clusters.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

{% if not (openshift_dedicated or openshift_rosa) %}
*   [Configuring persistent storage](/observability/monitoring/configuring-core-platform-monitoring/storing-and-recording-data#configuring-persistent-storage_storing-and-recording-data)
*   [Configuring performance and scalability](/observability/monitoring/configuring-core-platform-monitoring/configuring-performance-and-scalability#configuring-performance-and-scalability)
{% endif %}

{% if openshift_dedicated or openshift_rosa %}
*   [Configuring persistent storage](/observability/monitoring/configuring-user-workload-monitoring/storing-and-recording-data-uwm#configuring-persistent-storage_storing-and-recording-data-uwm)
*   [Configuring performance and scalability](/observability/monitoring/configuring-user-workload-monitoring/configuring-performance-and-scalability-uwm#configuring-performance-and-scalability-uwm)
{% endif %}

{% leveloffset +1 %}{% include "./modules/monitoring-tls-security-and-rotation.md" %}{% endleveloffset %}

{% if not (openshift_dedicated or openshift_rosa or openshift_rosa_hcp) %}
**Additional resources**
{._additional-resources}

*   [Configuring TLS security profiles](/security/tls-security-profiles#tls-security-profiles)
{% endif %}

{% leveloffset +1 %}{% include "./modules/monitoring-common-terms.md" %}{% endleveloffset %}

## Additional resources {id="additional-resources_{{ context }}" ._additional-resources}
*   [About remote health monitoring](/support/remote_health_monitoring/about-remote-health-monitoring#about-remote-health-monitoring)
{%- if not (openshift_dedicated or openshift_rosa) %}
*   [Granting users permissions for monitoring for user-defined projects](/observability/monitoring/configuring-user-workload-monitoring/preparing-to-configure-the-monitoring-stack-uwm#granting-users-permission-to-monitor-user-defined-projects_preparing-to-configure-the-monitoring-stack-uwm)
{% endif %}
{% if not (openshift_dedicated or openshift_rosa or openshift_rosa_hcp) %}
*   [Configuring TLS security profiles](/security/tls-security-profiles#tls-security-profiles)
{% endif %}