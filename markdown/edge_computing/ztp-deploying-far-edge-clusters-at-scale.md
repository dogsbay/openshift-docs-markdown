---
title: Challenges of the network far edge
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Challenges of the network far edge {id="ztp-deploying-far-edge-clusters-at-scale"}
{%- set context = "ztp-deploying-far-edge-clusters-at-scale" -%}
{%- set policy_gen_cr = "PolicyGenerator" %}

Edge computing presents complex challenges when managing many sites in geographically displaced locations. Use {{ ztp_first }} to provision and manage sites at the far edge of the network.

{% leveloffset +1 %}{% include "./modules/ztp-challenges-of-far-edge-deployments.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/about-ztp.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/ztp-creating-ztp-crs-for-multiple-managed-clusters.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/ztp-configuring-cluster-policies.md" %}{% endleveloffset %}

{% include "./snippets/pgt-deprecation-notice.md" %}

**Additional resources**
{._additional-resources}

*   [Configuring managed cluster policies by using PolicyGenerator resources](/edge_computing/policygenerator_for_ztp/ztp-configuring-managed-clusters-policygenerator#ztp-configuring-managed-clusters-policygenerator)
*   [Comparing {{ rh_rhacm }} PolicyGenerator and PolicyGenTemplate resource patching](/edge_computing/policygenerator_for_ztp/ztp-configuring-managed-clusters-policygenerator#ztp-comparing-pgt-and-rhacm-pg-patching-strategies_ztp-configuring-managed-clusters-policygenerator)
*   [Preparing the {{ ztp }} Git repository](/edge_computing/ztp-preparing-the-hub-cluster#ztp-preparing-the-ztp-git-repository_ztp-preparing-the-hub-cluster)

{%- set policy_gen_cr = "" -%}