---
title: "About cluster updates with {{ rh_rhacm }} and {{ cgu_operator }}"
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# About cluster updates with {{ rh_rhacm }} and {{ cgu_operator }} {id="core-cluster-upgrades-overview"}
{%- set context = "core-cluster-upgrades-overview" %}

You can use {{ rh_rhacm_first }} and {{ cgu_operator_full }} ({{ cgu_operator }}) to perform z-stream, y-stream, and EUS-to-EUS updates on spoke clusters managed from a hub cluster. {._abstract}

The policy-based update workflow uses update policies that you define on the {{ rh_rhacm }} hub while {{ cgu_operator }} orchestrates their enforcement across target clusters.

If you are managing a single cluster or troubleshooting a specific cluster directly, see "Updating an {{ product_title }} cluster" for manual updates of individual clusters.

{% leveloffset +1 %}{% include "./modules/core-cluster-upgrade-gitops-talm-overview.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/core-cluster-upgrade-talm-benefits.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/core-cluster-upgrade-gitops-workflow.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/core-cluster-upgrade-scenarios.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/core-cluster-upgrade-scenario-z-stream.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/core-cluster-upgrade-scenario-y-stream.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/core-cluster-upgrade-scenario-eus.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/core-cluster-upgrade-scenario-selection.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/core-cluster-upgrade-scenario-policy-changes.md" %}{% endleveloffset %}

## Additional resources {id="additional-resources_core-cluster-upgrades-overview" ._additional-resources}

*   [Updating an {{ product_title }} cluster](/post_installation_configuration/day_2_core_cnf_clusters/updating/update-welcome#update-welcome)
*   [Verifying cluster API versions between update versions](/post_installation_configuration/day_2_core_cnf_clusters/updating/update-api#update-api)
*   [Using the {{ cgu_operator_full }} for cluster updates](/edge_computing/cnf-talm-for-cluster-upgrades#cnf-talm-for-cluster-updates)
*   [Bare metal Core reference design specifications](/scalability_and_performance/telco-core-rds#telco-core-ref-design-specs)
*   [How to use the {{ cgu_operator_full }}](https://www.redhat.com/en/blog/how-to-use-the-topology-aware-lifecycle-manager)
*   [The ultimate guide to OpenShift release and update process for cluster administrators](https://www.redhat.com/en/blog/the-ultimate-guide-to-openshift-release-and-upgrade-process-for-cluster-administrators)
*   [{{ product_title }} update documentation](https://docs.redhat.com/en/documentation/openshift_container_platform/)
*   [{{ product_title }} update lifecycle and support policy](https://access.redhat.com/support/policy/updates/openshift)