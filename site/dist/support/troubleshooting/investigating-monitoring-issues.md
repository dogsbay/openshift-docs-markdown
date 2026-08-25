---
title: Investigating monitoring issues
---

# Investigating monitoring issues {#investigating-monitoring-issues}

OpenShift Container Platform includes a preconfigured, preinstalled, and self-updating monitoring stack that provides monitoring for core platform components. In OpenShift Container Platform 4.22, cluster administrators can optionally enable monitoring for user-defined projects.

Use these procedures if the following issues occur:

- Your own metrics are unavailable.
- Prometheus is consuming a lot of disk space.
- The `KubePersistentVolumeFillingUp` alert is firing for Prometheus.

## Additional resources {#_additional_resources}

- [Enabling monitoring for user-defined projects](https://docs.redhat.com/en/documentation/monitoring_stack_for_red_hat_openshift/latest/html/configuring_user_workload_monitoring/preparing-to-configure-the-monitoring-stack-uwm#enabling-monitoring-for-user-defined-projects-uwm_preparing-to-configure-the-monitoring-stack-uwm)
- [Specifying how a service is monitored](https://docs.redhat.com/en/documentation/monitoring_stack_for_red_hat_openshift/latest/html/configuring_user_workload_monitoring/configuring-metrics-uwm#specifying-how-a-service-is-monitored_configuring-metrics-uwm)
- [Getting detailed information about a metrics target](https://docs.redhat.com/en/documentation/monitoring_stack_for_red_hat_openshift/latest/html/accessing_metrics/accessing-metrics-as-an-administrator#getting-detailed-information-about-a-target_accessing-metrics-as-an-administrator)

## Additional resources {#_additional_resources}

- [Setting scrape intervals, evaluation intervals, and enforced limits for user-defined projects](https://docs.redhat.com/en/documentation/monitoring_stack_for_red_hat_openshift/latest/html/configuring_user_workload_monitoring/configuring-performance-and-scalability-uwm#setting-scrape-and-evaluation-intervals-limits-for-user-defined-projects_configuring-performance-and-scalability-uwm)
