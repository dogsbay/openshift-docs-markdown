{%- set _mod_docs_content_type = "CONCEPT" %}
# Migrate to a cluster with multi-architecture compute machines {id="migrate-to-a-multi-architecture-cluster-intro_{{ context }}"}

You can migrate your current cluster with single-architecture compute machines to a cluster with multi-architecture compute machines by updating to a multi-architecture, manifest-listed payload. This allows you to add mixed architecture compute nodes to your cluster. {._abstract}

For information about configuring your multi-architecture compute machines, see "Configuring multi-architecture compute machines on an {{ product_title }} cluster".

Before migrating your single-architecture cluster to a cluster with multi-architecture compute machines, it is recommended to install the Multiarch Tuning Operator, and deploy a `ClusterPodPlacementConfig` custom resource. For more information, see "Managing workloads on multi-architecture clusters by using the Multiarch Tuning Operator".


:::important

Migration from a multi-architecture payload to a single-architecture payload is not supported. Once a cluster has transitioned to using a multi-architecture payload, it can no longer accept a single-architecture update payload.

:::