{%- set _mod_docs_content_type = "CONCEPT" %}
# Configuring managed clusters with policies and {{ policy_gen_cr }} resources {id="ztp-configuring-cluster-policies_{{ context }}"}

{{ ztp_first }} uses {{ rh_rhacm_first }} to configure clusters by using a policy-based governance approach to applying the configuration. {._abstract}

The policy generator is a plugin for the GitOps Operator that enables the creation of {{ rh_rhacm }} policies from a concise template. The tool can combine multiple CRs into a single policy, and you can generate multiple policies that apply to various subsets of clusters in your fleet.


:::note

For scalability and to reduce the complexity of managing configurations across the fleet of clusters, use configuration CRs with as much commonality as possible.

*   Where possible, apply configuration CRs using a fleet-wide common policy.
*   The next preference is to create logical groupings of clusters to manage as much of the remaining configurations as possible under a group policy.
*   When a configuration is unique to an individual site, use {{ rh_rhacm }} templating on the hub cluster to inject the site-specific data into a common or group policy. Alternatively, apply an individual site policy for the site.

:::


The following diagram shows how the policy generator interacts with GitOps and {{ rh_rhacm }} in the configuration phase of cluster deployment.

![Policy generator](/_assets/images/217_OpenShift_Zero_Touch_Provisioning_updates_1022_3.png)

For large fleets of clusters, it is typical for there to be a high-level of consistency in the configuration of those clusters.

The following recommended structuring of policies combines configuration CRs to meet several goals:

*   Describe common configurations once and apply to the fleet.
*   Minimize the number of maintained and managed policies.
*   Support flexibility in common configurations for cluster variants.

**Recommended {{ policy_gen_cr }} policy categories**

| Policy category | Description |
| --- | --- |
| Common | A policy that exists in the common category is applied to all clusters in the fleet. Use common `{{ policy_gen_cr }}`{minja} CRs to apply common installation settings across all cluster types. |
| Groups | A policy that exists in the groups category is applied to a group of clusters in the fleet. Use group `{{ policy_gen_cr }}`{minja} CRs to manage specific aspects of single-node, three-node, and standard cluster installations. Cluster groups can also follow geographic region, hardware variant, etc. |
| Sites | A policy that exists in the sites category is applied to a specific cluster site. Any cluster can have its own specific policies maintained. |