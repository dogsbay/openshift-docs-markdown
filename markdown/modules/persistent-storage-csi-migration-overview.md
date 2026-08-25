{%- set _mod_docs_content_type = "CONCEPT" %}
# Overview {id="persistent-storage-csi-migration-overview_{{ context }}"}

Container Storage Interface (CSI) migration transparently translates in-tree storage volumes to CSI equivalents in memory without data migration or API changes.  {._abstract}

This process does not perform any data migration; {{ product_title }} only translates the persistent volume object in memory. As a result, the translated persistent volume object is not stored on disk, nor is its contents changed. CSI automatic migration should be seamless. This feature does not change how you use all existing API objects: for example, `PersistentVolumes`, `PersistentVolumeClaims`, and `StorageClasses`.

The following in-tree to CSI drivers are automatically migrated:

*   Azure Disk
*   OpenStack Cinder
*   Amazon Web Services (AWS) Elastic Block Storage (EBS)
*   Google Compute Engine Persistent Disk (GCP PD)
*   Azure File
*   VMware vSphere

CSI migration for these volume types is considered generally available (GA), and requires no manual intervention.

CSI automatic migration of in-tree persistent volumes (PVs) or persistent volume claims (PVCs) does not enable any new CSI driver features, such as snapshots or expansion, if the original in-tree storage plugin did not support it.