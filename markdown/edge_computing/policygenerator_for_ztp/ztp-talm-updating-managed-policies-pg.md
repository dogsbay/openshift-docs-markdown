---
title: "Updating managed clusters in a disconnected environment with PolicyGenerator resources and {{ cgu_operator }}"
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Updating managed clusters in a disconnected environment with PolicyGenerator resources and {{ cgu_operator }} {id="ztp-topology-aware-lifecycle-manager-pg"}
{%- set context = "ztp-talm-pg" -%}
{%- set policy_gen_cr = "PolicyGenerator" -%}
{%- set policy_prefix = "acm-" -%}
{%- set rangen_yaml_path = "policies.manifests" %}

You can use the {{ cgu_operator_first }} to manage the software lifecycle of managed clusters that you have deployed using {{ ztp_first }} and {{ cgu_operator_first }}.
{{ cgu_operator }} uses {{ rh_rhacm_first }} {{ policy_gen_cr }} policies to manage and control changes applied to target clusters. {._abstract}

{% leveloffset +1 %}{% include "./modules/cnf-topology-aware-lifecycle-manager-preparing-for-updates.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [About the {{ cgu_operator_full }}](/edge_computing/cnf-talm-for-cluster-upgrades#cnf-about-topology-aware-lifecycle-manager-config_cnf-topology-aware-lifecycle-manager)
*   [Upgrading {{ ztp }}](/edge_computing/ztp-updating-gitops#ztp-updating-gitops)
*   [Mirroring the {{ product_title }} image repository](/disconnected/installing-mirroring-installation-images#installation-mirror-repository_installing-mirroring-installation-images)
*   [Mirroring Operator catalogs for use with disconnected clusters](/disconnected/installing-mirroring-installation-images#olm-mirror-catalog_installing-mirroring-installation-images)
*   [Preparing the disconnected environment](/edge_computing/ztp-preparing-the-hub-cluster#ztp-preparing-the-hub-cluster)
*   [Understanding update channels and releases](/updating/understanding_updates/understanding-update-channels-release#understanding-update-channels-releases)

{% leveloffset +1 %}{% include "./modules/cnf-topology-aware-lifecycle-manager-platform-update.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Preparing the disconnected environment](/edge_computing/ztp-preparing-the-hub-cluster#ztp-acm-adding-images-to-mirror-registry_ztp-preparing-the-hub-cluster)

{% leveloffset +1 %}{% include "./modules/cnf-topology-aware-lifecycle-manager-operator-update.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Upgrading {{ ztp }}](/edge_computing/ztp-updating-gitops#ztp-updating-gitops)

{% leveloffset +1 %}{% include "./modules/cnf-topology-aware-lifecycle-manager-operator-troubleshooting.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/cnf-topology-aware-lifecycle-manager-operator-and-platform-update.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/cnf-topology-aware-lifecycle-manager-pao-update.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/cnf-topology-aware-lifecycle-manager-precache-user-spec-images.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/cnf-topology-aware-lifecycle-manager-creating-custom-resources.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Using the container image precache feature](/edge_computing/cnf-talm-for-cluster-upgrades#talo-precache-feature-concept_cnf-topology-aware-lifecycle-manager)

{% leveloffset +1 %}{% include "./modules/cnf-topology-aware-lifecycle-manager-autocreate-cgu-cr-ztp.md" %}{% endleveloffset %}

{%- set policy_gen_cr = "" -%}
{%- set policy_prefix = "" -%}
{%- set rangen_yaml_path = "" -%}