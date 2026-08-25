---
title: "Updating {{ ztp }}"
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
# Updating {{ ztp }} {id="ztp-updating-gitops"}
{% include "./_attributes/common-attributes.md" %}
{%- set context = "ztp-updating-gitops" %}

You can update the {{ ztp_first }} infrastructure independently from the hub cluster, {{ rh_rhacm_first }}, and the managed {{ product_title }} clusters.


:::note

You can update the {{ gitops_title }} Operator when new versions become available. When updating the {{ ztp }} plugin, review the updated files in the reference configuration and ensure that the changes meet your requirements.

:::


{% include "./snippets/pgt-deprecation-notice.md" %}

**Additional resources**

*   [Configuring managed cluster policies by using PolicyGenerator resources](/edge_computing/policygenerator_for_ztp/ztp-configuring-managed-clusters-policygenerator#ztp-configuring-managed-clusters-policygenerator)
*   [Comparing {{ rh_rhacm }} PolicyGenerator and PolicyGenTemplate resource patching](/edge_computing/policygenerator_for_ztp/ztp-configuring-managed-clusters-policygenerator#ztp-comparing-pgt-and-rhacm-pg-patching-strategies_ztp-configuring-managed-clusters-policygenerator)

{% leveloffset +1 %}{% include "./modules/ztp-updating-gitops-ztp.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/ztp-preparing-for-the-gitops-ztp-upgrade.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/ztp-labeling-the-existing-clusters.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/ztp-stopping-the-existing-gitops-ztp-applications.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/ztp-required-changes-to-the-git-repository.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/ztp-installing-the-new-gitops-ztp-applications.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/ztp-pulling-ocp-images.md" %}{% endleveloffset %}

**Additional resources**

*   [Enabling the assisted service](/edge_computing/ztp-preparing-the-hub-cluster#enabling-assisted-installer-service-on-bare-metal_ztp-preparing-the-hub-cluster)

{% leveloffset +1 %}{% include "./modules/ztp-roll-out-the-configuration-changes.md" %}{% endleveloffset %}

**Additional resources**

*   [About the {{ cgu_operator_full }} configuration](/edge_computing/cnf-talm-for-cluster-upgrades#cnf-about-topology-aware-lifecycle-manager-config_cnf-topology-aware-lifecycle-manager)
*   [About the auto-created ClusterGroupUpgrade CR for {{ ztp }}](/edge_computing/policygentemplate_for_ztp/ztp-talm-updating-managed-policies#talo-precache-autocreated-cgu-for-ztp_ztp-talm)