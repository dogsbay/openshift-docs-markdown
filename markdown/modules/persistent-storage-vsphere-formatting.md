{%- set _mod_docs_content_type = "REFERENCE" %}
# Formatting VMware vSphere volumes {id="vsphere-formatting-volumes_{{ context }}"}

You can use unformatted vSphere volumes as PVs because {{ product_title }} formats them before the first use. {._abstract}

Before {{ product_title }} mounts the volume and passes it to a container, it checks that the volume contains a file system that is specified by the `fsType` parameter value in the `PersistentVolume` (PV) definition. If the device is not formatted with the file system, all data from the device is erased, and the device is automatically formatted with the specified file system.