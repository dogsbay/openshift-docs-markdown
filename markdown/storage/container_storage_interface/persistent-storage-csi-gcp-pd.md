---
title: GCP PD CSI Driver Operator
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
# GCP PD CSI Driver Operator {id="persistent-storage-csi-gcp-pd"}
{% include "./_attributes/common-attributes.md" %}
{% include "./_attributes/attributes-openshift-dedicated.md" %}
{%- set context = "persistent-storage-csi-gcp-pd" %}

You can provision and manage Google Cloud Platform (GCP) persistent disk (PD) storage in {{ product_title }} by using the GCP PD Container Storage Interface (CSI) Driver Operator and driver, which provide dynamic volume provisioning and eliminate the need to pre-provision storage.

{% leveloffset +1 %}{% include "./modules/persistent-storage-csi-gcp-pd-overview.md" %}{% endleveloffset %}

**Additional resources**

*   [Understanding persistent storage](/storage/understanding-persistent-storage#understanding-persistent-storage)
*   [Configuring CSI volumes](/storage/container_storage_interface/persistent-storage-csi#persistent-storage-csi)
*   [Managing the default storage class](/storage/container_storage_interface/persistent-storage-csi-sc-manage#persistent-storage-csi-sc-manage)
*   [Persistent storage using GCE Persistent Disk](/storage/persistent_storage/persistent-storage-gce#persistent-storage-using-gce)
*   [C3 instance type for bare metal and N4 machine series](/storage/container_storage_interface/persistent-storage-csi-gcp-pd#persistent-storage-csi-gcp-hyperdisk-overview_persistent-storage-csi-gcp-pd)
{%- if not openshift_dedicated %}
*   [CSI automatic migration](/storage/container_storage_interface/persistent-storage-csi-migration#persistent-storage-csi-migration)
{% endif %}

{% leveloffset +1 %}{% include "./modules/persistent-storage-csi-about.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/persistent-storage-csi-gcp-pd-reduce-permissions.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/persistent-storage-csi-gcp-pd-storage-class-ref.md" %}{% endleveloffset %}

**Additional resources**

*   [C3 and N4 instance type limitations](/storage/container_storage_interface/persistent-storage-csi-gcp-pd#persistent-storage-csi-gcp-hyperdisk-limitations_persistent-storage-csi-gcp-pd)

{% leveloffset +1 %}{% include "./modules/persistent-storage-csi-gcp-hyperdisk-overview.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/persistent-storage-csi-gcp-hyperdisk-limitations.md" %}{% endleveloffset %}

{% if not openshift_dedicated %}
**Additional resources**

*   [Setting up hyperdisk-balanced disk](/storage/container_storage_interface/persistent-storage-csi-gcp-pd#persistent-storage-csi-gcp-hyperdisk-storage-pools-procedure_persistent-storage-csi-gcp-pd)
*   [OCPBUGS-39258](https://issues.redhat.com/browse/OCPBUGS-39258)
*   [Limitations for Hyperdisk](https://cloud.google.com/compute/docs/disks/hyperdisks#limitations)
{% endif %}

{% leveloffset +2 %}{% include "./modules/persistent-storage-csi-gcp-hyperdisk-ha-overview.md" %}{% endleveloffset %}

**Additional resources**

*   [Setting up hyperdisk-balanced disk](/storage/container_storage_interface/persistent-storage-csi-gcp-pd#persistent-storage-csi-gcp-hyperdisk-storage-pools-procedure_persistent-storage-csi-gcp-pd)

{% leveloffset +2 %}{% include "./modules/persistent-storage-csi-gcp-hyperdisk-storage-pools-overview.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/persistent-storage-csi-gcp-hyperdisk-storage-pools-procedure.md" %}{% endleveloffset %}

**Additional resources**

*   [Create a Hyperdisk Storage Pool](https://cloud.google.com/compute/docs/disks/create-storage-pools#create-pool)
{%- if not openshift_dedicated %}
*   [Installing a cluster on GCP with customizations](/installing/installing_gcp/installing-gcp-customizations#installing-gcp-customizations)
{% endif %}

{% leveloffset +1 %}{% include "./modules/persistent-storage-csi-gcp-pd-encrypted-pv.md" %}{% endleveloffset %}

**Additional resources**

*   [Using customer-managed encryption keys (CMEK)](https://cloud.google.com/kubernetes-engine/docs/how-to/using-cmek)
*   [Retrieving a resource’s ID](https://cloud.google.com/kms/docs/resource-hierarchy#retrieve_resource_id)
*   [Getting a Cloud KMS resource ID](https://cloud.google.com/kms/docs/getting-resource-ids)

{% if not (openshift_rosa or openshift_dedicated) %}
{% leveloffset +1 %}{% include "./modules/persistent-storage-byok.md" %}{% endleveloffset %}

**Additional resources**

*   [Additional Google Cloud configuration parameters](/installing/installing_gcp/installation-config-parameters-gcp#installation-configuration-parameters-additional-gcp_installation-config-parameters-gcp)
{% endif %}

{% if not (openshift_rosa or openshift_dedicated) %}
{% leveloffset +1 %}{% include "./modules/persistent-storage-csi-gcp-images-snapshot-class-overview.md" %}{% endleveloffset %}

**Additional resources**

*   [Volume snapshots CRD: VolumeSnapshotClass](/storage/container_storage_interface/persistent-storage-csi-snapshots#volume-snapshot-crds)
{% endif %}

## Additional resources {id="resources-for-gcp_{{ context }}"}
*   [Persistent storage using GCE Persistent Disk](/storage/persistent_storage/persistent-storage-gce#persistent-storage-using-gce)