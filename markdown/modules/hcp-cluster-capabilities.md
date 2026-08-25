{%- set _mod_docs_content_type = "CONCEPT" %}
# Capabilities for hosted clusters {id="hcp-cluster-capabilities_{{ context }}"}

To reduce resource consumption and prevent unnecessary Operators and operands from being deployed, administrators can enable or disable optional {{ product_title }} components when they create a hosted cluster. {._abstract}

When capabilities are not specified on a `HostedCluster` resource, the cluster uses the {{ product_title }} version’s `DefaultCapabilitySet` settings, excluding the `baremetal` capability. As a result, most optional components are enabled by default. 


:::important

Capabilities are immutable after cluster creation. You cannot change them after you create the `HostedCluster` resource.

:::