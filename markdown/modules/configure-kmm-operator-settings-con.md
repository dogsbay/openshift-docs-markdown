{%- set _mod_docs_content_type = "CONCEPT" %}
# Configure KMM Operator settings {id="configure-kmm-operator-settings-con_{{ context }}"}

You can tune how the Kernel Module Management (KMM) Operator behaves by editing its config map and the `Module` resources that it reconciles. Use these settings to set the firmware search path, control garbage collection, and match KMM to the requirements of your environment.