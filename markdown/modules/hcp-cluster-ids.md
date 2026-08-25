{%- set _mod_docs_content_type = "CONCEPT" %}
# Customized hosted cluster identifiers {id="hcp-cluster-ids_{{ context }}"}

When you enable observability for {{ hcp }}, control plane metrics include an `_id` label that identifies the hosted cluster. You can set `spec.clusterID` in the `HostedCluster` custom resource (CR) at creation time to use a stable identifier instead of a randomly assigned UUID. {._abstract}

When you forward hosted cluster metrics to an external monitoring system, the `_id` label is commonly used to identify the cluster. If you reinstall a hosted cluster, specifying the same `clusterID` value preserves your external monitoring configuration.

Each hosted cluster has a unique cluster identifier. The HyperShift Operator uses this identifier in telemetry and in metrics that the control plane operators produce. The identifier is exposed on time series as the `_id` label.

If you do not specify `spec.clusterID` when you create a `HostedCluster` CR, the HyperShift controller generates a random RFC4122 UUID and sets the field for you.


:::note

The `spec.clusterID` specification is not the same as the `spec.infraID` specification. The `infraID` value identifies cloud infrastructure resources.

:::