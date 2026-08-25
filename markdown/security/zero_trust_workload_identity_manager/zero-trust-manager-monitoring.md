---
title: "Monitoring {{ zero_trust_full }}git"
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
# Monitoring {{ zero_trust_full }}git {id="zero-trust-manager-monitoring_{{ context }}"}
{% include "./_attributes/common-attributes.md" %}
{%- set context = "zero-trust-manager-monitoring" %}

Track the performance of the {{ zero_trust_full }} by collecting metrics. Configure monitoring to collect metrics from the Security Production Identity Framework for Everyone (SPIRE) Server and SPIRE Agent components.

{% leveloffset +1 %}{% include "./modules/zero-trust-manager-enable-monitoring.md" %}{% endleveloffset %}

**Additional resources**

*   [Setting up metrics collection for user-defined projects](https://docs.redhat.com/en/documentation/monitoring_stack_for_red_hat_openshift/latest/html/configuring_user_workload_monitoring/configuring-metrics-uwm#setting-up-metrics-collection-for-user-defined-projects_configuring-metrics-uwm)

{% leveloffset +1 %}{% include "./modules/zero-trust-manager-enable-metrics-server.md" %}{% endleveloffset %}

**Additional resources**

*   [Configuring user workload monitoring](https://docs.redhat.com/en/documentation/monitoring_stack_for_red_hat_openshift/latest/html/configuring_user_workload_monitoring/preparing-to-configure-the-monitoring-stack-uwm)

{% leveloffset +1 %}{% include "./modules/zero-trust-manager-enable-metrics-agent.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/zero-trust-manager-enable-metrics-operator.md" %}{% endleveloffset %}

**Additional resources**

*   [Configuring user workload monitoring](https://docs.redhat.com/en/documentation/monitoring_stack_for_red_hat_openshift/latest/html/configuring_user_workload_monitoring/preparing-to-configure-the-monitoring-stack-uwm)

{% leveloffset +1 %}{% include "./modules/zero-trust-manager-query-metrics.md" %}{% endleveloffset %}

**Additional resources**

*   [Accessing metrics](https://docs.redhat.com/en/documentation/monitoring_stack_for_red_hat_openshift/latest/html/accessing_metrics/index)

{% leveloffset +1 %}{% include "./modules/zero-trust-manager-available-metrics.md" %}{% endleveloffset %}