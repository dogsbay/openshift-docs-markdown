---
title: Optimizing CPU usage with mount namespace encapsulation
---

# Optimizing CPU usage with mount namespace encapsulation {#optimizing-cpu-usage}

You can optimize CPU usage in OpenShift Container Platform clusters by using mount namespace encapsulation to provide a private namespace for kubelet and CRI-O processes. This reduces the cluster CPU resources used by systemd with no difference in functionality.

## Additional resources {#optimizing-cpu-usage-additional-resources}

- [What are namespaces](https://access.redhat.com/documentation/en-us/red_hat_enterprise_linux/9/html/monitoring_and_managing_system_status_and_performance/setting-limits-for-applications_monitoring-and-managing-system-status-and-performance#what-namespaces-are_setting-limits-for-applications)
- [Manage containers in namespaces by using nsenter](https://www.redhat.com/sysadmin/container-namespaces-nsenter)
- [MachineConfig](/rest_api/machine_apis/machineconfig-machineconfiguration-openshift-io-v1)
