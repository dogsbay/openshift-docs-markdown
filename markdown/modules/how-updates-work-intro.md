{%- set _mod_docs_content_type = "CONCEPT" %}
# How cluster updates work {id="how-updates-work_{{ context }}"}

The Cluster Version Operator (CVO) is the primary component that orchestrates the {{ product_title }} update process.
During standard cluster operation, the CVO compares manifests of cluster Operators to in-cluster resources and reconciles discrepancies between the actual state of these resources and their desired state. {._abstract}

The following sections describe each major aspect of the {{ product_title }} (OCP) update process in detail. For a general overview of how updates work, see "Introduction to OpenShift updates".