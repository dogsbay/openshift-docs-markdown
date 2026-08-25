{%- set _mod_docs_content_type = "CONCEPT" %}
# About LVM volume cloning {id="microshift-storage-volume-cloning_{{ context }}"}

You can use the logical volume manager storage (LVMS) for persistent volume claim (PVC) cloning of the logical volume manager (LVM) thin volumes. A clone is a duplicate of an existing volume that can be used like any other volume.  {._abstract}

When you provision the clone, an exact duplicate of the original volume is created if the data source references a source PVC in the same namespace. After a cloned PVC is created, the cloned VPC is considered a new object and completely separate from the source PVC. The clone represents a snapshot of the data from the source at the moment in time.


:::note

Cloning is only possible when the source and destination PVCs are in the same namespace. To create PVC clones, you must configure thin volumes on the {{ op_system_ostree }} host.

:::