{%- set _mod_docs_content_type = "CONCEPT" %}
# Overview {id="persistent-storage-csi-google-cloud-file-overview_{{ context }}"}

{{ product_title }} is capable of provisioning persistent volumes (PVs) using the Container Storage Interface (CSI) driver for Google Compute Platform (GCP) Filestore Storage. {._abstract}

Familiarity with persistent storage and configuring CSI volumes is recommended when working with a CSI Operator and driver. For more information, see "Understanding persistent storage" and "Configuring CSI volumes".

To create CSI-provisioned PVs that mount to {{ gcp_short }} Filestore Storage assets, you install the {{ gcp_short }} Filestore CSI Driver Operator and the {{ gcp_short }} Filestore CSI driver in the `openshift-cluster-csi-drivers` namespace.

*   The _{{ gcp_short }} Filestore CSI Driver Operator_ does not provide a storage class by default, but you can create one if needed (for more information, see "Creating a storage class for GCP Filestore storage"). The {{ gcp_short }} Filestore CSI Driver Operator supports dynamic volume provisioning by allowing storage volumes to be created on-demand, eliminating the need for cluster administrators to pre-provision storage.
*   The _{{ gcp_short }} Filestore CSI driver_ enables you to create and mount {{ gcp_short }} Filestore PVs.

{{ product_title }} {{ gcp_short }} Filestore supports Workload Identity. This allows users to access Google Cloud resources using federated identities instead of a service account key. {{ gcp_wid_short }} must be enabled globally during installation, and then configured for the {{ gcp_short }} Filestore CSI Driver Operator.