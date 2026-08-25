{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# User workload monitoring first steps {id="user-workload-monitoring-first-steps"}
{%- set context = "user-workload-monitoring-first-steps" %}

As a cluster administrator, you can optionally enable monitoring for user-defined projects in addition to core platform monitoring.
Non-administrator users such as developers can then monitor their own projects outside of core platform monitoring.

Cluster administrators typically complete the following activities to configure user-defined projects so that users can view collected metrics, query these metrics, and receive alerts for their own projects:

*   [Enable user workload monitoring](/observability/monitoring/configuring-user-workload-monitoring/preparing-to-configure-the-monitoring-stack-uwm#enabling-monitoring-for-user-defined-projects-uwm_preparing-to-configure-the-monitoring-stack-uwm).
*   [Grant non-administrator users permissions to monitor user-defined projects](/observability/monitoring/configuring-user-workload-monitoring/preparing-to-configure-the-monitoring-stack-uwm#granting-users-permission-to-monitor-user-defined-projects_preparing-to-configure-the-monitoring-stack-uwm) by assigning the `monitoring-rules-view`, `monitoring-rules-edit`, or `monitoring-edit` cluster roles.
*   [Assign the `user-workload-monitoring-config-edit` role](/observability/monitoring/configuring-user-workload-monitoring/preparing-to-configure-the-monitoring-stack-uwm#granting-users-permission-to-configure-alert-routing-for-user-defined-projects_preparing-to-configure-the-monitoring-stack-uwm) to grant non-administrator users permission to configure user-defined projects.
*   [Enable alert routing for user-defined projects](/observability/monitoring/configuring-user-workload-monitoring/preparing-to-configure-the-monitoring-stack-uwm#enabling-alert-routing-for-user-defined-projects_preparing-to-configure-the-monitoring-stack-uwm) so that developers and other users can configure custom alerts and alert routing for their projects.
*   If needed, configure alert routing for user-defined projects to [use an optional Alertmanager instance dedicated for use only by user-defined projects](/observability/monitoring/configuring-user-workload-monitoring/preparing-to-configure-the-monitoring-stack-uwm#enabling-a-separate-alertmanager-instance-for-user-defined-alert-routing_preparing-to-configure-the-monitoring-stack-uwm).
*   [Configure notifications for user-defined alerts](/observability/monitoring/configuring-user-workload-monitoring/configuring-alerts-and-notifications-uwm#configuring-alert-notifications_configuring-alerts-and-notifications-uwm).
*   If you use the platform Alertmanager instance for user-defined alert routing, [configure different alert receivers](/observability/monitoring/configuring-user-workload-monitoring/configuring-alerts-and-notifications-uwm#configuring-different-alert-receivers-for-default-platform-alerts-and-user-defined-alerts_configuring-alerts-and-notifications-uwm) for default platform alerts and user-defined alerts.