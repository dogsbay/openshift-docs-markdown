---
title: Exposing custom metrics for virtual machines
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
{% include "./_attributes/attributes-openshift-dedicated.md" %}
# Exposing custom metrics for virtual machines {id="virt-exposing-custom-metrics-for-vms"}
{%- set context = "virt-exposing-custom-metrics-for-vms" %}

Monitor core platform components by using the {{ product_title }} monitoring stack based on the Prometheus monitoring system. Additionally, enable monitoring for user-defined projects by using the CLI and query custom metrics exposed for virtual machines through the `node-exporter` service. {._abstract}

{% leveloffset +1 %}{% include "./modules/virt-configuring-node-exporter-service.md" %}{% endleveloffset %}
{% leveloffset +1 %}{% include "./modules/virt-configuring-vm-with-node-exporter-service.md" %}{% endleveloffset %}
{% leveloffset +1 %}{% include "./modules/virt-creating-custom-monitoring-label-for-vms.md" %}{% endleveloffset %}
{% leveloffset +2 %}{% include "./modules/virt-querying-the-node-exporter-service-for-metrics.md" %}{% endleveloffset %}
{% leveloffset +1 %}{% include "./modules/virt-creating-servicemonitor-resource-for-node-exporter.md" %}{% endleveloffset %}
{% leveloffset +2 %}{% include "./modules/virt-accessing-node-exporter-outside-cluster.md" %}{% endleveloffset %}

## Additional resources {id="additional-resources_virt-exposing-custom-metrics-for-vms" ._additional-resources}
{%- if not (openshift_rosa or openshift_dedicated or openshift_rosa_hcp) %}
*   [Core platform monitoring first steps](https://docs.redhat.com/en/documentation/monitoring_stack_for_red_hat_openshift/latest/html/getting_started/core-platform-monitoring-first-steps)
*   [Enabling monitoring for user-defined projects](https://docs.redhat.com/en/documentation/monitoring_stack_for_red_hat_openshift/latest/html/configuring_user_workload_monitoring/preparing-to-configure-the-monitoring-stack-uwm#enabling-monitoring-for-user-defined-projects-uwm_preparing-to-configure-the-monitoring-stack-uwm)
*   [Accessing metrics as a developer](https://docs.redhat.com/en/documentation/monitoring_stack_for_red_hat_openshift/latest/html/accessing_metrics/accessing-metrics-as-a-developer)
*   [Reviewing monitoring dashboards as a developer](https://docs.redhat.com/en/documentation/monitoring_stack_for_red_hat_openshift/latest/html/accessing_metrics/accessing-metrics-as-a-developer#reviewing-monitoring-dashboards-developer_accessing-metrics-as-a-developer)
*   [Monitoring application health by using health checks](/applications/application-health#application-health)
{%- endif %}
*   [Creating and using config maps](/nodes/pods/nodes-pods-configmaps#nodes-pods-configmap-overview_configmaps)
*   [Controlling virtual machine states](/virt/managing_vms/virt-controlling-vm-states#virt-controlling-vm-states)