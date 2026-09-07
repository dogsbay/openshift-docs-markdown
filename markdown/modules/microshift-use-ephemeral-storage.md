{%- set _mod_docs_content_type = "CONCEPT" %}
# Use ephemeral storage {id="microshift-use-ephemeral-storage_{{ context }}"}

{{ microshift_short }} supports ephemeral storage for workloads that require temporary, pod-local data storage. Ephemeral storage is tied to the lifecycle of the pod and is automatically released when the pod terminates. You can configure ephemeral storage limits and use generic ephemeral volumes backed by LVMS for workloads that need more flexible temporary storage.