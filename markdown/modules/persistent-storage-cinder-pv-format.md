{%- set _mod_docs_content_type = "CONCEPT" %}
# Persistent volume formatting {id="persistent-storage-cinder-pv-format_{{ context }}"}

You can use unformatted Cinder volumes as PVs because {{ product_title }} formats them before the first use. {._abstract}

Before {{ product_title }} mounts the volume and passes it to a container, the system checks that it contains a file system as specified by the `fsType` parameter in the PV definition. If the device is not formatted with the file system, all data from the device is erased and the device is automatically formatted with the given file system.