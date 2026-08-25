---
title: Updating managed clusters with the {{ cgu_operator_full }}
---

# Updating managed clusters with the {{ cgu_operator_full }} {#cnf-talm-for-cluster-updates}

You can use the {{ cgu_operator_first }} to manage the software lifecycle of multiple clusters. {{ cgu_operator }} uses {{ rh_rhacm_first }} policies to perform changes on the target clusters.

Using {{ rh_rhacm }} and `{{ policy_gen_cr }}` CRs is the recommended approach for managing policies and deploying them to managed clusters. This replaces the use of `PolicyGenTemplate` CRs for this purpose. For more information about `{{ policy_gen_cr }}` resources, see the {{ rh_rhacm }} \[Policy Generator\](https://docs.redhat.com/en/documentation/red_hat_advanced_cluster_management_for_kubernetes/{{ rh_rhacm_version }}/html/governance/policy-deployment#integrate-policy-generator) documentation.

**Additional resources**

- [About the PolicyGenerator CRD](/openshift-docs-markdown/edge_computing/policygenerator_for_ztp/ztp-configuring-managed-clusters-policygenerator#ztp-the-policygentemplate_ztp-configuring-managed-clusters-policygenerator)

**Additional resources**

- [About the PolicyGenerator CRD](/openshift-docs-markdown/edge_computing/policygenerator_for_ztp/ztp-configuring-managed-clusters-policygenerator#ztp-the-policygentemplate_ztp-configuring-managed-clusters-policygenerator)

**Additional resources**

- [OpenShift Container Platform Troubleshooting Operator Issues](/openshift-docs-markdown/support/troubleshooting/troubleshooting-operator-issues#troubleshooting-operator-issues)
- [Updating managed policies with {{ cgu_operator_full }}](/openshift-docs-markdown/edge_computing/policygenerator_for_ztp/ztp-talm-updating-managed-policies-pg#ztp-topology-aware-lifecycle-manager)
- [About the PolicyGenerator CRD](/openshift-docs-markdown/edge_computing/policygenerator_for_ztp/ztp-configuring-managed-clusters-policygenerator#ztp-the-policygentemplate_ztp-configuring-managed-clusters-policygenerator)
