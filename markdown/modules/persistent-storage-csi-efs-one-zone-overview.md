{%- set _mod_docs_content_type = "CONCEPT" %}
# One Zone file systems overview {id="efs-one-zone-overview_{{ context }}"}

AWS Elastic File System (EFS) One Zone contrasts with the default EFS storage option, which stores data redundantly across multiple AZs within a region. {._abstract}

Clusters upgraded from {{ product_title }} 4.19 are compatible with the regional EFS volumes.


:::note

Dynamic provisioning of One Zone volumes is supported only in single-zone clusters. All nodes in the cluster must be in the same AZ as the EFS volume that is used for the dynamic provisioning.

Manually provisioned One Zone volumes in regional clusters is supported, assuming that the persistent volumes (PVs) have correct `spec.nodeAffinity` that indicates the zone that the volume is in.

:::


For Cloud Credential Operator (CCO) Mint mode or Passthrough, no extra configuration is required. However, for Security Token Service (STS), use the procedure in Section _Setting up One Zone file systems with STS_.