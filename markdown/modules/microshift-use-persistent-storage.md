{%- set _mod_docs_content_type = "CONCEPT" %}
# Use persistent storage {id="microshift-use-persistent-storage_{{ context }}"}

Persistent storage on {{ microshift_short }} lets applications retain data across pod restarts and node reboots. You can create and manage persistent volume claims (PVCs), control access modes, and use LVMS-backed thin volumes to provide durable storage to your workloads.