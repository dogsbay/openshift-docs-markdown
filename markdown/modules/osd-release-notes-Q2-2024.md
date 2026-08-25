{%- set _mod_docs_content_type = "REFERENCE" %}
# Q2 2024 {id="osd-q2-2024_{{ context }}"}

The following items were added during the second quarter of 2024. {._abstract}


Cluster delete protection
:   {{ product_title }} on {{ GCP }}  users can now enable the cluster delete protection option, which helps to prevent users from accidentally deleting a cluster.


CSI Operator update
:   {{ product_title }} is capable of provisioning persistent volumes (PVs) using the Container Storage Interface (CSI) driver for Google Compute Platform (GCP) Filestore Storage. For more information, see [Google Cloud Filestore CSI Driver Operator](https://docs.redhat.com/en/documentation/openshift_dedicated/4/html/storage/using-container-storage-interface-csi#persistent-storage-csi-google-cloud-file).


Support for new {{ gcp_short }} instances
:   {{ product_title }} now supports more worker node types and sizes on {{ gcp_full }}. For more information, see [{{ gcp_full }} instance types](https://docs.redhat.com/en/documentation/openshift_dedicated/4/html/introduction_to_openshift_dedicated/policies-and-service-definition#gcp-compute-types_osd-service-definition).