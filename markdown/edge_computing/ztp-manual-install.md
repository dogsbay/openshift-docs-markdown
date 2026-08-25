---
title: "Manually installing a {{ sno }} cluster with {{ ztp }}"
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
# Manually installing a {{ sno }} cluster with {{ ztp }} {id="ztp-manual-install"}
{% include "./_attributes/common-attributes.md" %}
{%- set context = "ztp-manual-install" -%}
{%- set policy_gen_cr = "PolicyGenerator" -%}
{%- set policy_prefix = "acm-" %}

You can deploy a managed {{ sno }} cluster by using {{ rh_rhacm_first }} and the assisted service.


:::note

If you are creating multiple managed clusters, use the `ClusterInstance` method described in [Deploying far edge sites with ZTP](/edge_computing/ztp-deploying-far-edge-sites#ztp-deploying-far-edge-sites).

:::



:::important

The target bare-metal host must meet the networking, firmware, and hardware requirements listed in [Recommended cluster configuration for vDU application workloads](/edge_computing/ztp-reference-cluster-configuration-for-vdu#sno-configure-for-vdu).

:::


{% leveloffset +1 %}{% include "./modules/ztp-generating-install-and-config-crs-manually.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/ztp-creating-the-site-secrets.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/ztp-configuring-kernel-arguments-for-discovery-iso-in-manual-installations.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/ztp-manually-install-a-single-managed-cluster.md" %}{% endleveloffset %}

**Additional resources**

*   [BMC addressing](/installing/installing_bare_metal/ipi/ipi-install-installation-workflow#bmc-addressing_ipi-install-installation-workflow)
*   [About root device hints](/installing/installing_with_agent_based_installer/preparing-to-install-with-agent-based-installer#root-device-hints_preparing-to-install-with-agent-based-installer)
*   [{{ sno_caps }} ClusterInstance CR installation reference](/edge_computing/ztp-deploying-far-edge-sites#ztp-clusterinstance-config-reference_ztp-deploying-far-edge-sites)
*   [Connectivity prerequisites for managed cluster networks](/edge_computing/ztp-reference-cluster-configuration-for-vdu#ztp-managed-cluster-network-prereqs_sno-configure-for-vdu)
*   [Deploying {{ lvms }} on {{ sno }} clusters](/storage/persistent_storage_local/persistent-storage-using-lvms#lvms-preface-sno-ran_logical-volume-manager-storage)
*   [Configuring {{ lvms }} using {{ policy_gen_cr }} CRs](/edge_computing/policygenerator_for_ztp/ztp-advanced-policygenerator-config#ztp-provisioning-lvm-storage_ztp-advanced-policy-config)
*   [Configuring managed cluster policies by using PolicyGenerator resources](/edge_computing/policygenerator_for_ztp/ztp-configuring-managed-clusters-policygenerator#ztp-configuring-managed-clusters-policygenerator)

{% leveloffset +1 %}{% include "./modules/ztp-late-binding-bare-metal-host-pools.md" %}{% endleveloffset %}

**Additional resources**

*   [Bind bare-metal hosts to clusters using the cluster-reference annotation in {{ ztp }} deployments](/edge_computing/ztp-manual-install#ztp-binding-bmh-to-cluster-using-annotation_ztp-manual-install)
*   [`BareMetalHost` cluster-reference annotation reference](/edge_computing/ztp-manual-install#ztp-bmh-cluster-reference-annotation-ref_ztp-manual-install)
*   [Binding and unbinding hosts in the {{ rh_rhacm }} documentation](https://docs.redhat.com/en/documentation/red_hat_advanced_cluster_management_for_kubernetes/2.17/html/clusters/cluster_mce_overview#bind-unbind-hosts)

{% leveloffset +1 %}{% include "./modules/ztp-binding-bmh-to-cluster-using-annotation.md" %}{% endleveloffset %}

**Additional resources**

*   [Late binding for bare-metal host pools in {{ ztp }} deployments](/edge_computing/ztp-manual-install#ztp-late-binding-bare-metal-host-pools_ztp-manual-install)
*   [`BareMetalHost` cluster-reference annotation reference](/edge_computing/ztp-manual-install#ztp-bmh-cluster-reference-annotation-ref_ztp-manual-install)
*   [Binding and unbinding hosts in the {{ rh_rhacm }} documentation](https://docs.redhat.com/en/documentation/red_hat_advanced_cluster_management_for_kubernetes/2.16/html/clusters/cluster_mce_overview#binding-and-unbinding-hosts)

{% leveloffset +1 %}{% include "./modules/ztp-bmh-cluster-reference-annotation-ref.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/ztp-checking-the-managed-cluster-status.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/ztp-troubleshooting-the-managed-cluster.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/ztp-installation-crs.md" %}{% endleveloffset %}

{%- set policy_gen_cr = false -%}
{%- set policy_prefix = false -%}