{%- set _mod_docs_content_type = "REFERENCE" %}
# Cluster Version Operator {id="cluster-version-operator_{{ context }}"}

Cluster Operators manage specific areas of cluster functionality. The Cluster Version Operator (CVO) manages the lifecycle of cluster Operators, many of which are installed in {{ product_title }} by default.

The CVO also checks with the OpenShift Update Service to see the valid updates and update paths based on current component versions and information in the graph by collecting the status of both the cluster version and its cluster Operators. This status includes the condition type, which informs you of the health and current state of the {{ product_title }} cluster.

For more information regarding cluster version condition types, see "Understanding cluster version condition types".

## Project {id="_project"}

[cluster-version-operator](https://github.com/openshift/cluster-version-operator)