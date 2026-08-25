---
title: Pods crash or restart due to lack of memory or CPU
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
# Pods crash or restart due to lack of memory or CPU {id="pods-crash-or-restart-due-to-lack-of-memory-or-cpu"}
{%- set toc = true %}

{% include "./_attributes/common-attributes.md" %}
{% include "./_attributes/attributes-openshift-dedicated.md" %}
{%- set context = "pods-crash-or-restart-due-to-lack-of-memory-or-cpu" -%}
{%- set namespace = "openshift-adp" -%}
{%- set local_product = "OADP" -%}
{%- set must_gather_v1_3 = "registry.redhat.io/oadp/oadp-mustgather-rhel9:v1.3" -%}
{%- set must_gather_v1_4 = "registry.redhat.io/oadp/oadp-mustgather-rhel9:v1.4" %}

Resolve Velero or Restic pod crashes caused by insufficient memory or CPU by configuring resource requests in the `DataProtectionApplication` custom resource (CR). This helps you allocate adequate CPU and memory resources to prevent pod restarts and ensure stable backup and restore operations.

Ensure that the values for the resource request fields follow the same format as Kubernetes resource requirements.

If you do not specify `configuration.velero.podConfig.resourceAllocations` or `configuration.restic.podConfig.resourceAllocations`, see the following default `resources` specification configuration for a Velero or Restic pod:

```yaml
requests:
  cpu: 500m
  memory: 128Mi
```

**Additional resources**

*   [Velero CPU and memory requirements based on collected data](/backup_and_restore/application_backup_and_restore/installing/about-installing-oadp#oadp-velero-cpu-memory-requirements_about-installing-oadp)

{% leveloffset +1 %}{% include "./modules/oadp-pod-crash-set-resource-request-velero.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/velero-oomkilled-large-kopia-repos.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/oadp-pod-crash-set-resource-request-restic.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/setting-resource-requests-for-a-nodeagent-pod.md" %}{% endleveloffset %}