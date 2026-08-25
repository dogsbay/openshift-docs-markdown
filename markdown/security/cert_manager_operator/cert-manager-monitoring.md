---
title: "Monitoring {{ cert_manager_operator }}"
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
# Monitoring {{ cert_manager_operator }} {id="cert-manager-monitoring"}
{% include "./_attributes/common-attributes.md" %}
{%- set context = "cert-manager-monitoring" %}

By default, the {{ cert_manager_operator }} exposes metrics for the three core components: controller, cainjector, and webhook. You can configure OpenShift Monitoring to collect these metrics by using the Prometheus Operator format.

{% leveloffset +1 %}{% include "./modules/cert-manager-enable-user-workload-monitor.md" %}{% endleveloffset %}

**Additional resources**

*   [Setting up metrics collection for user-defined projects](https://docs.redhat.com/en/documentation/monitoring_stack_for_red_hat_openshift/latest/html/configuring_user_workload_monitoring/configuring-metrics-uwm#setting-up-metrics-collection-for-user-defined-projects_configuring-metrics-uwm)

{% leveloffset +1 %}{% include "./modules/cert-manager-enable-metrics.md" %}{% endleveloffset %}

**Additional resources**

*   [Configuring user workload monitoring](https://docs.redhat.com/en/documentation/monitoring_stack_for_red_hat_openshift/latest/html/configuring_user_workload_monitoring/preparing-to-configure-the-monitoring-stack-uwm)

{% leveloffset +1 %}{% include "./modules/cert-manager-query-metrics.md" %}{% endleveloffset %}

**Additional resources**

*   [Accessing metrics as an administrator](https://docs.redhat.com/en/documentation/monitoring_stack_for_red_hat_openshift/latest/html/accessing_metrics/accessing-metrics-as-an-administrator)

{% leveloffset +1 %}{% include "./modules/cert-manager-config-metrics-collection.md" %}{% endleveloffset %}

**Additional resources**

*   [Configuring user workload monitoring](https://docs.redhat.com/en/documentation/monitoring_stack_for_red_hat_openshift/latest/html/configuring_user_workload_monitoring/preparing-to-configure-the-monitoring-stack-uwm)

{% leveloffset +1 %}{% include "./modules/cert-manager-query-metrics-for-istio-csr-operand.md" %}{% endleveloffset %}

**Additional resources**

*   [Accessing metrics as an administrator](https://docs.redhat.com/en/documentation/monitoring_stack_for_red_hat_openshift/latest/html/accessing_metrics/accessing-metrics-as-an-administrator)