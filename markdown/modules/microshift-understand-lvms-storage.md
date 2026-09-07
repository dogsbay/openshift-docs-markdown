{%- set _mod_docs_content_type = "CONCEPT" %}
# Understand LVMS storage {id="microshift-understand-lvms-storage_{{ context }}"}

{{ microshift_short }} uses the Logical Volume Manager Storage (LVMS) plugin to provide dynamic, persistent storage for workloads. LVMS provisions local storage on the device and manages storage classes, device classes, and thin volumes. Understanding how LVMS works and what resources it manages helps you plan and configure storage for your {{ microshift_short }} deployments.