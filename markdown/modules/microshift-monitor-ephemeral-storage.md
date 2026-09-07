{%- set _mod_docs_content_type = "CONCEPT" %}
# Monitor ephemeral storage usage to prevent pod eviction {id="microshift-monitor-ephemeral-storage_{{ context }}"}

Monitor ephemeral storage usage on your {{ microshift_short }} node to track disk space consumption on the `/var/lib/kubelet` and `/var/lib/containers` paths. Regular monitoring helps you identify storage-hungry workloads and adjust resource limits before the kubelet evicts pods because of storage exhaustion.