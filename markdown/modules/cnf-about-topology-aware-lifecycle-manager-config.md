{%- set _mod_docs_content_type = "CONCEPT" %}
# About the {{ cgu_operator_full }} configuration {id="cnf-about-topology-aware-lifecycle-manager-config_{{ context }}"}

The {{ cgu_operator_first }} manages the deployment of {{ rh_rhacm_first }} policies for one or more {{ product_title }} clusters. Using {{ cgu_operator }} in a large network of clusters allows the phased rollout of policies to the clusters in limited batches. This helps to minimize possible service disruptions when updating. With {{ cgu_operator }}, you can control the following actions: {._abstract}

*   The timing of the update
*   The number of {{ rh_rhacm }}-managed clusters
*   The subset of managed clusters to apply the policies to
*   The update order of the clusters
*   The set of policies remediated to the cluster
*   The order of policies remediated to the cluster
*   The assignment of a canary cluster

For {{ sno }}, the {{ cgu_operator_first }} offers pre-caching images for clusters with limited bandwidth.

{{ cgu_operator }} supports the orchestration of the {{ product_title }} y-stream and z-stream updates, and day-two operations on y-streams and z-streams.