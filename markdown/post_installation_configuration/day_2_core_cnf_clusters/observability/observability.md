---
title: Observability in OpenShift Container Platform clusters
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
# Observability in {{ product_title }} clusters {id="observability"}
{% include "./_attributes/common-attributes.md" %}
{%- set context = "observability" -%}
{%- set imagesdir = "images" %}

{{ product_title }} generates a large amount of data, such as performance metrics and logs from both the platform and the workloads running on it. 
As an administrator, you can use various tools to collect and analyze all the data available.
What follows is an outline of best practices for system engineers, architects, and administrators configuring the observability stack.

Unless explicitly stated, the material in this document refers to both Edge and Core deployments.

{% leveloffset +1 %}{% include "./modules/observability-monitoring-stack.md" %}{% endleveloffset %}

**Additional resources**

*   [About {{ product_title }} monitoring](https://docs.redhat.com/en/documentation/monitoring_stack_for_red_hat_openshift/latest/html/about_monitoring/about-ocp-monitoring)
*   [Core platform monitoring first steps](https://docs.redhat.com/en/documentation/monitoring_stack_for_red_hat_openshift/latest/html/getting_started/core-platform-monitoring-first-steps)

{% leveloffset +1 %}{% include "./modules/observability-key-performance-metrics.md" %}{% endleveloffset %}

**Additional resources**

*   [Accessing metrics as an administrator](https://docs.redhat.com/en/documentation/monitoring_stack_for_red_hat_openshift/latest/html/accessing_metrics/accessing-metrics-as-an-administrator)
*   [Persistent storage using local volumes](/storage/persistent_storage_local/persistent-storage-local#local-storage-install_persistent-storage-local)

{% leveloffset +1 %}{% include "./modules/observability-monitoring-the-edge.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/observability-alerting.md" %}{% endleveloffset %}

**Additional resources**

*   [Managing alerts](https://docs.redhat.com/en/documentation/monitoring_stack_for_red_hat_openshift/latest/html/managing_alerts/index)

{% leveloffset +1 %}{% include "./modules/observability-workload-monitoring.md" %}{% endleveloffset %}

**Additional resources**

*   [ServiceMonitor[monitoring.coreos.com/v1](/rest_api/monitoring_apis/servicemonitor-monitoring-coreos-com-v1#servicemonitor-monitoring-coreos-com-v1)]
*   [Enabling monitoring for user-defined projects](https://docs.redhat.com/en/documentation/monitoring_stack_for_red_hat_openshift/latest/html/configuring_user_workload_monitoring/preparing-to-configure-the-monitoring-stack-uwm#enabling-monitoring-for-user-defined-projects-uwm_preparing-to-configure-the-monitoring-stack-uwm)
*   [Managing alerting rules for user-defined projects](https://docs.redhat.com/en/documentation/monitoring_stack_for_red_hat_openshift/latest/html/managing_alerts/managing-alerts-as-a-developer#managing-alerting-rules-for-user-defined-projects-uwm_managing-alerts-as-a-developer)