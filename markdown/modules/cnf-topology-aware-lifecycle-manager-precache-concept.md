{%- set _mod_docs_content_type = "CONCEPT" %}
# Using the container image pre-cache feature {id="talo-precache-feature-concept_{{ context }}"}

{{ sno_caps }} clusters might have limited bandwidth to access the container image registry, which can cause a timeout before the updates are completed. {._abstract}


:::note

The time of the update is not set by {{ cgu_operator }}. You can apply the `ClusterGroupUpgrade` CR at the beginning of the update by manual application or by external automation.

:::


The container image pre-caching starts when the `preCaching` field is set to `true` in the `ClusterGroupUpgrade` CR.

{{ cgu_operator }} uses the `PrecacheSpecValid` condition to report status information as follows:

*   `true`

    The pre-caching spec is valid and consistent.
*   `false`

    The pre-caching spec is incomplete.

{{ cgu_operator }} uses the `PrecachingSucceeded` condition to report status information as follows:

*   `true`

    {{ cgu_operator }} has concluded the pre-caching process. If pre-caching fails for any cluster, the update fails for that cluster but proceeds for all other clusters. A message informs you if pre-caching has failed for any clusters.
*   `false`

    Pre-caching is still in progress for one or more clusters or has failed for all clusters.

After a successful pre-caching process, you can start remediating policies. The remediation actions start when the `enable` field is set to `true`. If there is a pre-caching failure on a cluster, the upgrade fails for that cluster. The upgrade process continues for all other clusters that have a successful pre-cache.

The pre-caching process can be in the following statuses:

*   `NotStarted`

    This is the initial state all clusters are automatically assigned to on the first reconciliation pass of the `ClusterGroupUpgrade` CR. In this state, {{ cgu_operator }} deletes any pre-caching namespace and hub view resources of spoke clusters that remain from previous incomplete updates. {{ cgu_operator }} then creates a new `ManagedClusterView` resource for the spoke pre-caching namespace to verify its deletion in the `PrecachePreparing` state.
*   `PreparingToStart`

    Cleaning up any remaining resources from previous incomplete updates is in progress.
*   `Starting`

    Pre-caching job prerequisites and the job are created.
*   `Active`

    The job is in "Active" state.
*   `Succeeded`

    The pre-cache job succeeded.
*   `PrecacheTimeout`

    The artifact pre-caching is partially done.
*   `UnrecoverableError`

    The job ends with a non-zero exit code.