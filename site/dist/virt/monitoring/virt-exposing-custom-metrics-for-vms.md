---
title: Exposing custom metrics for virtual machines
---

# Exposing custom metrics for virtual machines {#virt-exposing-custom-metrics-for-vms}

Monitor core platform components by using the OpenShift Container Platform monitoring stack based on the Prometheus monitoring system. Additionally, enable monitoring for user-defined projects by using the CLI and query custom metrics exposed for virtual machines through the `node-exporter` service.

{% include "./modules/virt-configuring-node-exporter-service.md" %} {% include "./modules/virt-configuring-vm-with-node-exporter-service.md" %} {% include "./modules/virt-creating-custom-monitoring-label-for-vms.md" %} {% include "./modules/virt-querying-the-node-exporter-service-for-metrics.md" %}

## Additional resources {#additional-resources_virt-exposing-custom-metrics-for-vms}

- [Core platform monitoring first steps](https://docs.redhat.com/en/documentation/monitoring_stack_for_red_hat_openshift/latest/html/getting_started/core-platform-monitoring-first-steps)
- [Enabling monitoring for user-defined projects](https://docs.redhat.com/en/documentation/monitoring_stack_for_red_hat_openshift/latest/html/configuring_user_workload_monitoring/preparing-to-configure-the-monitoring-stack-uwm#enabling-monitoring-for-user-defined-projects-uwm_preparing-to-configure-the-monitoring-stack-uwm)
- [Accessing metrics as a developer](https://docs.redhat.com/en/documentation/monitoring_stack_for_red_hat_openshift/latest/html/accessing_metrics/accessing-metrics-as-a-developer)
- [Reviewing monitoring dashboards as a developer](https://docs.redhat.com/en/documentation/monitoring_stack_for_red_hat_openshift/latest/html/accessing_metrics/accessing-metrics-as-a-developer#reviewing-monitoring-dashboards-developer_accessing-metrics-as-a-developer)
- [Monitoring application health by using health checks](/openshift-docs-markdown/applications/application-health#application-health)
- [Creating and using config maps](/openshift-docs-markdown/nodes/pods/nodes-pods-configmaps#nodes-pods-configmap-overview_configmaps)
- [Controlling virtual machine states](/openshift-docs-markdown/virt/managing_vms/virt-controlling-vm-states#virt-controlling-vm-states)
