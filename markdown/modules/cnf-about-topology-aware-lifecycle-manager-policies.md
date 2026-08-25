{%- set _mod_docs_content_type = "CONCEPT" %}
# About managed policies used with {{ cgu_operator_full }} {id="cnf-about-topology-aware-lifecycle-manager-about-policies_{{ context }}"}

The {{ cgu_operator_first }} uses {{ rh_rhacm }} policies for cluster updates. {._abstract}

{{ cgu_operator }} can be used to manage the rollout of any policy CR where the `remediationAction` field is set to `inform`.
Supported use cases include the following:

*   Manual user creation of policy CRs
*   Automatically generated policies from the `PolicyGenerator` or `PolicyGentemplate` custom resource definition (CRD)


:::note

Using the `PolicyGentemplate` CRD is the recommended method for automatic policy generation.

:::


For policies that update an Operator subscription with manual approval, {{ cgu_operator }} provides additional functionality that approves the installation of the updated Operator.

For more information about managed policies, see [Policy Overview](https://access.redhat.com/documentation/en-us/red_hat_advanced_cluster_management_for_kubernetes/{{ rh_rhacm_version }}/html-single/governance/index#policy-overview) in the {{ rh_rhacm }} documentation.