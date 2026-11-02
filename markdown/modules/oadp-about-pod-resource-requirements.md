{%- set _mod_docs_content_type = "CONCEPT" %}
# About Velero and Restic pod resource requirements {id="oadp-about-pod-resource-requirements_{{ context }}"}

Resolve Velero or Restic pod crashes caused by insufficient memory or CPU by configuring resource requests in the `DataProtectionApplication` custom resource (CR). This helps you allocate adequate CPU and memory resources to prevent pod restarts and ensure stable backup and restore operations. {._abstract}

Ensure that the values for the resource request fields follow the same format as Kubernetes resource requirements.

If you do not specify `configuration.velero.podConfig.resourceAllocations` or `configuration.restic.podConfig.resourceAllocations`, the following default `resources` specification is used for a Velero or Restic pod:

```yaml
requests:
  cpu: 500m
  memory: 128Mi
```