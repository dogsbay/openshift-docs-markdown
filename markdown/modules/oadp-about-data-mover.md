{%- set _mod_docs_content_type = "CONCEPT" %}
# About the OADP Data Mover {id="oadp-about-data-mover_{{ context }}"}

Use the built-in Data Mover to move Container Storage Interface (CSI) volume snapshots to remote object storage and restore stateful applications after cluster failures. This provides disaster recovery capabilities for both containerized and virtual machine workloads. {._abstract}

The Data Mover uses Kopia as the uploader mechanism to read the snapshot data and write to the unified repository.

{{ oadp_first }} supports CSI snapshots on the following:

*   {{ odf_full }}
*   Any other cloud storage provider with the Container Storage Interface (CSI) driver that supports the Kubernetes Volume Snapshot API