{%- set _mod_docs_content_type = "CONCEPT" %}
# How the LVMS plugin provisions storage {id="microshift-lvms-provisioning-behavior_{{ context }}"}

LVMS provisions new LVM logical volumes for container workloads with appropriately configured persistent volume claims (PVCs). Each PVC references a storage class that represents an LVM Volume Group (VG) on the host node. LVs are only provisioned for scheduled pods.