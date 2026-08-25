{%- set _mod_docs_content_type = "CONCEPT" %}
# Gathering ClusterVersion history {id="gathering-clusterversion-history_{{ context }}"}

The Cluster Version Operator (CVO) records updates made to a cluster, known as the ClusterVersion history. The entries can reveal correlation between changes in cluster behavior with potential triggers, although correlation does not imply causation. {._abstract}


:::note

The initial, minor, and z-stream version updates are stored by the ClusterVersion history. However, the ClusterVersion history has a size limit. If the limit is reached, the oldest z-stream updates in previous minor versions are pruned to accommodate the limit.

:::


You can view the ClusterVersion history by using the {{ product_title }} web console or by using the {{ oc_first }}.