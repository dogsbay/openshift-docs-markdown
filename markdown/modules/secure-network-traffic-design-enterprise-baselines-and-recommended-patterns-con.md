{%- set _mod_docs_content_type = "CONCEPT" %}
# Design enterprise baselines and recommended patterns {id="secure-network-traffic-design-enterprise-baselines-and-recommended-patterns-con_{{ context }}"}

Cluster-wide network policy is easiest to maintain when it follows a consistent design. Recommended practices for `AdminNetworkPolicy` and `BaselineAdminNetworkPolicy` cover how to assign priorities, choose actions, and write selectors that do not accidentally capture system namespaces.