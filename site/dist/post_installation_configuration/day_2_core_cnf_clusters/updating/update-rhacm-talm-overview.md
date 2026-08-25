---
title: About cluster updates with {{ rh_rhacm }} and {{ cgu_operator }}
---

# About cluster updates with {{ rh_rhacm }} and {{ cgu_operator }} {#core-cluster-upgrades-overview}

You can use {{ rh_rhacm_first }} and {{ cgu_operator_full }} ({{ cgu_operator }}) to perform z-stream, y-stream, and EUS-to-EUS updates on spoke clusters managed from a hub cluster.

The policy-based update workflow uses update policies that you define on the {{ rh_rhacm }} hub while {{ cgu_operator }} orchestrates their enforcement across target clusters.

If you are managing a single cluster or troubleshooting a specific cluster directly, see "Updating an OpenShift Container Platform cluster" for manual updates of individual clusters.

## Additional resources {#additional-resources_core-cluster-upgrades-overview}

- [Updating an OpenShift Container Platform cluster](/openshift-docs-markdown/post_installation_configuration/day_2_core_cnf_clusters/updating/update-welcome#update-welcome)
- [Verifying cluster API versions between update versions](/openshift-docs-markdown/post_installation_configuration/day_2_core_cnf_clusters/updating/update-api#update-api)
- [Using the {{ cgu_operator_full }} for cluster updates](/openshift-docs-markdown/edge_computing/cnf-talm-for-cluster-upgrades#cnf-talm-for-cluster-updates)
- [Bare metal Core reference design specifications](/openshift-docs-markdown/scalability_and_performance/telco-core-rds#telco-core-ref-design-specs)
- [How to use the {{ cgu_operator_full }}](https://www.redhat.com/en/blog/how-to-use-the-topology-aware-lifecycle-manager)
- [The ultimate guide to OpenShift release and update process for cluster administrators](https://www.redhat.com/en/blog/the-ultimate-guide-to-openshift-release-and-upgrade-process-for-cluster-administrators)
- [OpenShift Container Platform update documentation](https://docs.redhat.com/en/documentation/openshift_container_platform/)
- [OpenShift Container Platform update lifecycle and support policy](https://access.redhat.com/support/policy/updates/openshift)
