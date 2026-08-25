{%- set _mod_docs_content_type = "REFERENCE" %}
# Red Hat Advanced Cluster Management {id="telco-core-red-hat-advanced-cluster-management_{{ context }}"}

{{ rh_rhacm }} provides Multi Cluster Engine (MCE) installation and ongoing lifecycle management for deployed clusters. {._abstract}


New in this release
:   *   There are no reference design updates in this release.

Description
:   {{ rh_rhacm }} provides Multi Cluster Engine (MCE) installation and ongoing {{ ztp }} lifecycle management for deployed clusters.
    You manage cluster configuration and upgrades declaratively by applying `Policy` custom resources (CRs) to clusters during maintenance windows.


    You apply policies with the {{ rh_rhacm }} policy controller as managed by {{ cgu_operator }}.
    Configuration, upgrades, and cluster status are managed through the policy controller.


    When installing managed clusters, {{ rh_rhacm }} applies labels and initial ignition configuration to individual nodes in support of custom disk partitioning, allocation of roles, and allocation to machine config pools.
    You define these configurations with `SiteConfig` or `ClusterInstance` CRs.


Limits and requirements

:   *   Hub cluster sizing is discussed in [Sizing your cluster](https://docs.redhat.com/en/documentation/red_hat_advanced_cluster_management_for_kubernetes/2.15/html-single/install/index#sizing-your-cluster).
    *   {{ rh_rhacm }} scaling limits are described in [Performance and Scalability](https://docs.redhat.com/en/documentation/red_hat_advanced_cluster_management_for_kubernetes/2.15/html-single/install/index#performance-and-scalability).

Engineering considerations
:   *   When managing multiple clusters with unique content per installation, site, or deployment, using {{ rh_rhacm }} hub templating is strongly recommended.
    With {{ rh_rhacm }} hub templating, you can apply a consistent set of policies to clusters while providing unique values per installation.