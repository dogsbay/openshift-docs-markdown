{%- set _mod_docs_content_type = "CONCEPT" %}
# Shared storage {id="security-network-storage-shared_{{ context }}"}

For shared storage providers such as Network File System (NFS), the persistent volume (PV) registers its group ID (GID) as an annotation on the PV resource.
 
Then, when the PV is claimed by the pod, the annotated GID is added to the supplemental groups of the pod, giving that pod access to the contents of the shared storage.