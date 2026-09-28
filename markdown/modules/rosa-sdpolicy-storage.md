{%- set _mod_docs_content_type = "CONCEPT" %}
# Storage {id="rosa-sdpolicy-storage_{{ context }}"}

This section provides information about the service definition for {{ product_title }} storage.

## Encrypted-at-rest OS and node storage {id="rosa-sdpolicy-encrytpted-at-rest-storage_{{ context }}"}

{% if openshift_rosa_hcp %}
Worker
{% endif %}
{% if not openshift_rosa_hcp %}
Control plane, infrastructure, and worker
{%- endif %}
nodes use encrypted-at-rest Amazon Elastic Block Store (Amazon EBS) storage.

## Encrypted-at-rest PV {id="rosa-sdpolicy-encrytpted-at-rest-pv_{{ context }}"}
EBS volumes that are used for PVs are encrypted-at-rest by default.

## Block storage (RWO) {id="rosa-sdpolicy-block-storage_{{ context }}"}
Persistent volumes (PVs) are backed by Amazon Elastic Block Store (Amazon EBS), which is Read-Write-Once.

PVs can be attached only to a single node at a time and are specific to the availability zone in which they were provisioned. However, PVs can be attached to any node in the availability zone.

Each cloud provider has its own limits for how many PVs can be attached to a single node. 

## Shared Storage (RWX) {id="_shared_storage_rwx"}

The AWS CSI Driver can be used to provide RWX support for {{ product_title }}. A community Operator is provided to simplify setup.