---
title: Day 2 operations for OpenShift Container Platform clusters
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Day 2 operations for {{ product_title }} clusters {id="telco-day-2-welcome"}
{%- set context = "telco-day-2-welcome" %}

You can use the following Day 2 operations to manage {{ product_title }} clusters. {._abstract}


Updating an {{ product_title }} cluster
:   Updating your cluster is a critical task that ensures that bugs and potential security vulnerabilities are patched.


Upgrading {{ product_title }} clusters with {{ rh_rhacm }} and {{ cgu_operator }}
:   You can use {{ rh_rhacm_first }} and the {{ cgu_operator_full }} ({{ cgu_operator }}) to update spoke clusters that are managed from a hub cluster, including z-stream, y-stream, and EUS-to-EUS updates.


Troubleshooting and maintaining {{ product_title }} clusters
:   To maintain and troubleshoot a bare-metal environment where high-bandwidth network throughput is required.


Observability in {{ product_title }} clusters
:   {{ product_title }} generates a large amount of data, such as performance metrics and logs from the platform and the workloads running on it.
    As an administrator, you can use tools to collect and analyze the available data.


Security
:   You can enhance security for high-bandwidth network deployments by following key security considerations.

## Additional resources {id="additional-resources_telco-day-2-welcome" ._additional-resources}

*   [Updating an {{ product_title }} cluster](/post_installation_configuration/day_2_core_cnf_clusters/updating/update-welcome#update-welcome)
*   [About cluster updates with {{ rh_rhacm }} and {{ cgu_operator }}](/post_installation_configuration/day_2_core_cnf_clusters/updating/update-rhacm-talm-overview#core-cluster-upgrades-overview)
*   [Troubleshooting and maintaining {{ product_title }} clusters](/post_installation_configuration/day_2_core_cnf_clusters/troubleshooting/troubleshooting-intro#troubleshooting-intro)
*   [Observability in {{ product_title }}](/post_installation_configuration/day_2_core_cnf_clusters/observability/observability#observability)
*   [Security basics](/post_installation_configuration/day_2_core_cnf_clusters/security/security-basics#security-basics)