{%- set _mod_docs_content_type = "CONCEPT" %}
# LVMS deployment {id="microshift-lvms-deployment_{{ context }}"}

To ensure local storage is ready for use, {{ microshift_short }} automatically deploys LVMS into the `openshift-storage` namespace at startup. This automated process prepares the node for storage operations immediately, eliminating the need for manual installation. {._abstract}

LVMS uses `StorageCapacity` tracking to ensure that pods with an LVMS PVC are not scheduled if the requested storage is greater than the free storage of the volume group. For more information about `StorageCapacity` tracking, see "Storage Capacity".