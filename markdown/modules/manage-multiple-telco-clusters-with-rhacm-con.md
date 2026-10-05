{%- set _mod_docs_content_type = "CONCEPT" %}
# Manage multiple telco clusters with {{ rh_rhacm }} {id="manage-multiple-telco-clusters-with-rhacm-con_{{ context }}"}

You can use {{ rh_rhacm_first }} and {{ cgu_operator_full }} ({{ cgu_operator }}) to manage the lifecycle of many spoke clusters from a single hub cluster. {._abstract}

You define policies on the hub, and {{ cgu_operator }} orchestrates their enforcement across the clusters you target, so that you operate a fleet at scale instead of administering each cluster individually.