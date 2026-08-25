---
title: Pods crash or restart due to lack of memory or CPU
---

# Pods crash or restart due to lack of memory or CPU {#pods-crash-or-restart-due-to-lack-of-memory-or-cpu}

Resolve Velero or Restic pod crashes caused by insufficient memory or CPU by configuring resource requests in the `DataProtectionApplication` custom resource (CR). This helps you allocate adequate CPU and memory resources to prevent pod restarts and ensure stable backup and restore operations.

Ensure that the values for the resource request fields follow the same format as Kubernetes resource requirements.

If you do not specify `configuration.velero.podConfig.resourceAllocations` or `configuration.restic.podConfig.resourceAllocations`, see the following default `resources` specification configuration for a Velero or Restic pod:

```yaml
requests:
  cpu: 500m
  memory: 128Mi
```

**Additional resources**

- [Velero CPU and memory requirements based on collected data](/backup_and_restore/application_backup_and_restore/installing/about-installing-oadp#oadp-velero-cpu-memory-requirements_about-installing-oadp)
