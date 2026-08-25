{%- set _mod_docs_content_type = "CONCEPT" %}
# Storage {id="sdpolicy-storage_{{ context }}"}

Review the storage options available for {{ product_title }} clusters. {._abstract}

## Encrypted-at-rest OS/node storage {id="encrypt-rest-node_{{ context }}"}
Control plane nodes use encrypted-at-rest-EBS storage.

## Encrypted-at-rest PV {id="encrypt-rest-pv_{{ context }}"}
EBS volumes used for persistent volumes (PVs) are encrypted-at-rest by default.

## Block storage (RWO) {id="block-storage_{{ context }}"}
Persistent volumes (PVs) are backed by AWS EBS and {{ gcp_full }} persistent disk block storage, which uses the ReadWriteOnce (RWO) access mode. On a non-CCS {{ product_title }} base cluster, 100 GB of block storage is provided for PVs, which is dynamically provisioned and recycled based on application requests. Additional persistent storage can be purchased in 500 GB increments.

PVs can only be attached to a single node at a time and are specific to the availability zone in which they were provisioned, but they can be attached to any node in the availability zone.

Each cloud provider has its own limits for how many PVs can be attached to a single node. See [AWS instance type limits](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/volume_limits.html#instance-type-volume-limits) or [{{ gcp_full }} custom machine types ](https://cloud.google.com/compute/docs/machine-types#custom_machine_types) for details.

## Shared storage (RWX) {id="shared-storage_{{ context }}"}

The AWS CSI Driver can be used to provide RWX support for {{ product_title }} on AWS. A community Operator is provided to simplify setup. For more information, see [AWS EFS Setup for OpenShift Dedicated and Red Hat OpenShift Service on AWS](https://access.redhat.com/articles/5025181).