---
title: Configuring alert notifications
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Configuring alert notifications {id="configuring-alert-notifications"}
{%- set context = "configuring-alert-notifications" %}

You can configure alert notifications to send firing alerts from your cluster to external systems, helping ensure that administrators are notified of conditions that require attention. {._abstract}

In {{ product_title }}, an alert is fired when the conditions defined in an alerting rule are true. An alert provides a notification that a set of circumstances are apparent within a cluster. Firing alerts can be viewed in the Alerting UI in the {{ product_title }} web console by default. After an installation, you can configure {{ product_title }} to send alert notifications to external systems.

{% leveloffset +1 %}{% include "./modules/monitoring-sending-notifications-to-external-systems.md" %}{% endleveloffset %}

## Additional resources {id="additional-resources_{{ context }}" ._additional-resources}

*   [About {{ product_title }} monitoring](https://docs.redhat.com/en/documentation/monitoring_stack_for_red_hat_openshift/latest/html/about_monitoring/about-ocp-monitoring)
*   [Configuring alerts and notifications for core platform monitoring](https://docs.redhat.com/en/documentation/monitoring_stack_for_red_hat_openshift/latest/html/configuring_core_platform_monitoring/configuring-alerts-and-notifications)
*   [Configuring alerts and notifications for user workload monitoring](https://docs.redhat.com/en/documentation/monitoring_stack_for_red_hat_openshift/latest/html/configuring_user_workload_monitoring/configuring-alerts-and-notifications-uwm)