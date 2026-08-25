{%- set _mod_docs_content_type = "CONCEPT" %}
# Policy-based cluster updates with {{ rh_rhacm }} and {{ cgu_operator }} {id="core-cluster-upgrade-gitops-talm-overview_{{ context }}"}

You can use {{ rh_rhacm_first }} and {{ cgu_operator_first }} to automate cluster updates across spoke clusters managed from a hub cluster. {._abstract}

Optionally, you can manage {{ rh_rhacm }} policies through a GitOps workflow, storing them in a Git repository for versioning, review, and auditability.

{{ rh_rhacm }} provides the policy framework for managing cluster configuration across a fleet of spoke clusters from a central hub cluster.
You define {{ rh_rhacm }} policies that declare the target cluster version, and {{ rh_rhacm }} evaluates compliance across target clusters.

{{ cgu_operator }} orchestrates the rollout of {{ rh_rhacm }} policies to target clusters according to your batching strategy.
{{ cgu_operator }} uses `ClusterGroupUpgrade` custom resources (CRs) to coordinate which clusters to update, which policies to apply, and how to manage concurrency.
A `ClusterGroupUpgrade` CR progresses through several states during an update:

*   `Preparing`: Cluster readiness and policy compliance are being evaluated.
*   `InProgress`: Policies are being applied to clusters in batches.
*   `Complete`: All clusters are successfully updated and compliant.
*   `Failed`: One or more clusters failed to update.