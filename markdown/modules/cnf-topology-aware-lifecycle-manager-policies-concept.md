{%- set _mod_docs_content_type = "CONCEPT" %}
# Update policies on managed clusters {id="talo-policies-concept_{{ context }}"}

The {{ cgu_operator_first }} remediates a set of `inform` policies for the clusters specified in the `ClusterGroupUpgrade` custom resource (CR). {{ cgu_operator }} remediates `inform` policies by controlling the `remediationAction` specification in a `Policy` CR through the `bindingOverrides.remediationAction` and `subFilter` specifications in the `PlacementBinding` CR. Each policy has its own corresponding {{ rh_rhacm }} placement rule and {{ rh_rhacm }} placement binding. {._abstract}

One by one, {{ cgu_operator }} adds each cluster from the current batch to the placement rule that corresponds with the applicable managed policy. If a cluster is already compliant with a policy, {{ cgu_operator }} skips applying that policy on the compliant cluster. {{ cgu_operator }} then moves on to applying the next policy to the non-compliant cluster. After {{ cgu_operator }} completes the updates in a batch, all clusters are removed from the placement rules associated with the policies. Then, the update of the next batch starts.

If a spoke cluster does not report any compliant state to {{ rh_rhacm }}, the managed policies on the hub cluster can be missing status information that {{ cgu_operator }} needs. {{ cgu_operator }} handles these cases in the following ways:

*   If a policy’s `status.compliant` field is missing, {{ cgu_operator }} ignores the policy and adds a log entry. Then, {{ cgu_operator }} continues looking at the policy’s `status.status` field.
*   If a policy’s `status.status` is missing, {{ cgu_operator }} produces an error.
*   If a cluster’s compliance status is missing in the policy’s `status.status` field, {{ cgu_operator }} considers that cluster to be non-compliant with that policy.

The `ClusterGroupUpgrade` CR’s `batchTimeoutAction` determines what happens if an upgrade fails for a cluster. You can specify `continue` to skip the failing cluster and continue to upgrade other clusters, or specify `abort` to stop the policy remediation for all clusters. Once the timeout elapses, {{ cgu_operator }} removes all the resources it created to ensure that no further updates are made to clusters.

{% include "./snippets/cnf-example-upgrade-policy.md" %}

For more information about {{ rh_rhacm }} policies, see [Policy overview](https://access.redhat.com/documentation/en-us/red_hat_advanced_cluster_management_for_kubernetes/{{ rh_rhacm_version }}/html-single/governance/index#policy-overview).