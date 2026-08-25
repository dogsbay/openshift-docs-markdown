---
title: "{{ gcp_first }} Filestore CSI Driver Operator"
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
# {{ gcp_first }} Filestore CSI Driver Operator {id="persistent-storage-csi-google-cloud-file"}
{% include "./_attributes/common-attributes.md" %}
{%- set context = "persistent-storage-csi-google-cloud-file" %}

The Google Cloud Platform (GCP) Filestore Container Storage Interface (CSI) Driver Operator provisions and manages GCP Filestore Storage in {{ product_title }} with dynamic volume provisioning, eliminating the need to pre-provision storage.

{% leveloffset +1 %}{% include "./modules/persistent-storage-csi-google-cloud-file-overview.md" %}{% endleveloffset %}
**Additional resources**

*   [Understanding persistent storage](/storage/understanding-persistent-storage#understanding-persistent-storage)
*   [Configuring CSI volumes](/storage/container_storage_interface/persistent-storage-csi#persistent-storage-csi)
*   [Creating a storage class for GCP Filestore storage](/storage/container_storage_interface/persistent-storage-csi-google-cloud-file#persistent-storage-csi-google-cloud-file-create-sc_persistent-storage-csi-google-cloud-file)

{% leveloffset +1 %}{% include "./modules/persistent-storage-csi-about.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/persistent-storage-csi-gcp-file-install-overview.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/persistent-storage-csi-gcp-filestore-wif.md" %}{% endleveloffset %}

{% if not openshift_dedicated %}
<a name="installing-the-gcp-filestore-csi-driver-operator"></a>**Additional resources**

*   [Creating {{ gcp_short }} resources with the Cloud Credential Operator utility](/installing/installing_gcp/installing-gcp-customizations#cco-ccoctl-creating-at-once_installing-gcp-customizations)
{% endif %}

{% leveloffset +2 %}{% include "./modules/persistent-storage-csi-gcp-file-install.md" %}{% endleveloffset %}

<a name="installing-the-gcp-filestore-csi-driver-operator"></a>**Additional resources**

*   [Enabling an API in your Google Cloud](https://cloud.google.com/endpoints/docs/openapi/enable-api)
*   [Enabling an API using the Google Cloud web console](https://support.google.com/googleapi/answer/6158841?hl=en)

{% leveloffset +1 %}{% include "./modules/persistent-storage-csi-google-cloud-file-create-sc.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/persistent-storage-csi-gcp-filestore-nfs-export-options.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/persistent-storage-csi-google-cloud-file-delete-instances.md" %}{% endleveloffset %}

## Additional resources {id="additional-resources_{{ context }}"}
*   [Configuring CSI volumes](/storage/container_storage_interface/persistent-storage-csi#persistent-storage-csi)
{%- if not openshift_dedicated %}
*   [CCO-based workflow for OLM-managed Operators with {{ gcp_short }} Workload Identity](/operators/operator_sdk/token_auth/osdk-cco-gcp)
{% endif %}