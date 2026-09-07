{%- set _mod_docs_content_type = "CONCEPT" %}
# Expand persistent volumes {id="microshift-expand-persistent-volumes_{{ context }}"}

You can expand persistent volumes on {{ microshift_short }} to increase storage capacity for running workloads without interrupting access to the data. {{ microshift_short }} supports expansion of CSI volumes, local volumes, and filesystem-backed PVCs through LVMS.