---
title: Monitoring the External Secrets Operator for Red Hat OpenShift
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Monitoring the External Secrets Operator for Red Hat OpenShift {id="external-secrets-monitoring"}
{%- set context = "external-secrets-monitoring" %}

By default, the {{ external_secrets_operator }} exposes metrics for the Operator and the operands. You can configure OpenShift Monitoring to collect these metrics by using the Prometheus Operator format. {._abstract}

{% leveloffset +1 %}{% include "./modules/external-secrets-enable-user-workload-monitor.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Setting up metrics collection for user-defined projects](https://docs.redhat.com/en/documentation/monitoring_stack_for_red_hat_openshift/latest/html/configuring_user_workload_monitoring/configuring-metrics-uwm#setting-up-metrics-collection-for-user-defined-projects_configuring-metrics-uwm)

{% leveloffset +1 %}{% include "./modules/external-secrets-enable-operator-metrics.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Configurable monitoring components](https://docs.redhat.com/en/documentation/monitoring_stack_for_red_hat_openshift/latest/html/configuring_user_workload_monitoring/preparing-to-configure-the-monitoring-stack-uwm#configurable-monitoring-components_preparing-to-configure-the-monitoring-stack-uwm)

{% leveloffset +1 %}{% include "./modules/external-secrets-query-operator-metrics.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Accessing metrics](https://docs.redhat.com/en/documentation/monitoring_stack_for_red_hat_openshift/latest/html/accessing_metrics/index)

{% leveloffset +1 %}{% include "./modules/external-secrets-enable-metrics.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Configuring user workload monitoring](https://docs.redhat.com/en/documentation/monitoring_stack_for_red_hat_openshift/latest/html/configuring_user_workload_monitoring/preparing-to-configure-the-monitoring-stack-uwm)

{% leveloffset +1 %}{% include "./modules/external-secrets-query-metrics.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Accessing metrics](https://docs.redhat.com/en/documentation/monitoring_stack_for_red_hat_openshift/latest/html/accessing_metrics/index)