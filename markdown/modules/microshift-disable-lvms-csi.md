{%- set _mod_docs_content_type = "CONCEPT" %}
# Disable the LVMS CSI provider and CSI snapshot {id="microshift-disable-lvms-csi_{{ context }}"}

If your {{ microshift_short }} deployment uses external or pre-provisioned storage and does not require dynamic local provisioning, you can disable the LVMS CSI driver and CSI snapshot controller. Disabling these components reduces resource usage on constrained devices.