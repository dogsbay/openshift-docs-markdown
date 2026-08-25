{%- set _mod_docs_content_type = "CONCEPT" %}
# Migrating CNS volumes between datastores for vSphere {id="persistent-storage-csi-vsphere-migrating-cns-vols-between-datastores_{{ context }}"}

To optimize storage performance or free up capacity, you can migrate vSphere Cloud Native Storage (CNS) volumes between datastores without data loss. {._abstract}

If you are running out of space in your current datastore, or want to move to a more performant datastore, you can migrate VMware CNS volumes between datastores. This applies to both attached and detached volumes.

## Limitations {id="persistent-storage-csi-vsphere-migrating-cns-vols-between-datastores-limitations_{{ context }}"}
*   Requires VMware vSphere 8.0.2 or later, or VMware vSphere Foundation (VVF) 9, or VMware Cloud Foundation (VCF) 9
*   Only one volume can be migrated at a time.
*   RWX volumes are not supported.
*   CNS volume should only be migrated to a datastore that is shared with all hosts that make up the {{ product_title }} cluster.
*   Migrating volumes between different datastore in different datacenters is not supported.
*   VMware HCX is not supported.

## Additional limitations {id="persistent-storage-csi-vsphere-migrating-cns-vols-between-datastores-add-limitations_{{ context }}"}
For additional limitations, see "For vSphere 8", "For VCF 9", "For vSphere v8.0, more general information", and "For VCF 9, more general information".