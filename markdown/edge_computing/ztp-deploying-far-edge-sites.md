---
title: "Installing managed clusters with {{ rh_rhacm }} and ClusterInstance resources"
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
# Installing managed clusters with {{ rh_rhacm }} and ClusterInstance resources {id="ztp-deploying-far-edge-sites"}
{% include "./_attributes/common-attributes.md" %}
{%- set context = "ztp-deploying-far-edge-sites" %}

You can provision {{ product_title }} clusters at scale with {{ rh_rhacm_first }} using the assisted service and the GitOps plugin policy generator with core-reduction technology enabled. The {{ ztp_first }} pipeline performs the cluster installations. {{ ztp }} can be used in a disconnected environment.

{% include "./snippets/pgt-deprecation-notice.md" %}

**Additional resources**

*   [Configuring managed cluster policies by using PolicyGenerator resources](/edge_computing/policygenerator_for_ztp/ztp-configuring-managed-clusters-policygenerator#ztp-configuring-managed-clusters-policygenerator)
*   [Comparing {{ rh_rhacm }} PolicyGenerator and PolicyGenTemplate resource patching](/edge_computing/policygenerator_for_ztp/ztp-configuring-managed-clusters-policygenerator#ztp-comparing-pgt-and-rhacm-pg-patching-strategies_ztp-configuring-managed-clusters-policygenerator)

{% leveloffset +1 %}{% include "./modules/ztp-talo-integration.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/ztp-ztp-building-blocks.md" %}{% endleveloffset %}

**Additional resources**

*   [Understanding virtualized control planes](/vcp/vcp-overview#vcp-overview)

{% leveloffset +1 %}{% include "./modules/ztp-overview-managed-site-installation-process.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/ztp-creating-the-site-secrets.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/ztp-configuring-kernel-arguments-for-discovery-iso.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/ztp-deploying-a-site.md" %}{% endleveloffset %}

**Additional resources**

*   [{{ sno_caps }} ClusterInstance CR installation reference](/edge_computing/ztp-deploying-far-edge-sites#ztp-clusterinstance-config-reference_ztp-deploying-far-edge-sites)

{% leveloffset +2 %}{% include "./modules/ztp-configuring-ipsec-using-ztp-and-siteconfig.md" %}{% endleveloffset %}

**Additional resources**

*   [Verifying the IPsec encryption](/edge_computing/ztp-deploying-far-edge-sites#ztp-verifying-ipsec_ztp-deploying-far-edge-sites)
*   [Configuring IPsec encryption](/networking/network_security/configuring-ipsec-ovn#configuring-ipsec-ovn)
*   [Encryption protocol and IPsec mode](/networking/network_security/configuring-ipsec-ovn#nw-ovn-ipsec-encryption_configuring-ipsec-ovn)
*   [Installing managed clusters with {{ rh_rhacm }} and ClusterInstance resources](/edge_computing/ztp-deploying-far-edge-sites#ztp-deploying-far-edge-sites)

{% leveloffset +2 %}{% include "./modules/ztp-configuring-ipsec-using-ztp-and-siteconfig-for-mno.md" %}{% endleveloffset %}

**Additional resources**

*   [Verifying the IPsec encryption](/edge_computing/ztp-deploying-far-edge-sites#ztp-verifying-ipsec_ztp-deploying-far-edge-sites)
*   [Configuring IPsec encryption](/networking/network_security/configuring-ipsec-ovn#configuring-ipsec-ovn)
*   [Encryption protocol and IPsec mode](/networking/network_security/configuring-ipsec-ovn#nw-ovn-ipsec-encryption_configuring-ipsec-ovn)
*   [Installing managed clusters with {{ rh_rhacm }} and ClusterInstance resources](/edge_computing/ztp-deploying-far-edge-sites#ztp-deploying-far-edge-sites)

{% leveloffset +2 %}{% include "./modules/ztp-verifying-ipsec.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/ztp-clusterinstance-config-reference.md" %}{% endleveloffset %}

**Additional resources**

*   [Customizing extra installation manifests in the {{ ztp }} pipeline](/edge_computing/ztp-advanced-install-ztp#ztp-customizing-the-install-extra-manifests_ztp-advanced-install-ztp)
*   [Preparing the {{ ztp }} site configuration repository](/edge_computing/ztp-preparing-the-hub-cluster#ztp-preparing-the-ztp-git-repository_ztp-preparing-the-hub-cluster)
*   [Configuring the hub cluster with ArgoCD](/edge_computing/ztp-preparing-the-hub-cluster#ztp-configuring-hub-cluster-with-argocd_ztp-preparing-the-hub-cluster)
*   [Signalling {{ ztp }} cluster deployment completion with validator inform policies](/edge_computing/policygenerator_for_ztp/ztp-advanced-policygenerator-config#ztp-creating-a-validator-inform-policy_ztp-advanced-policy-config)
*   [Creating the managed bare-metal host secrets](/edge_computing/ztp-manual-install#ztp-creating-the-site-secrets_ztp-manual-install)
*   [BMC addressing](/installing/installing_bare_metal/ipi/ipi-install-installation-workflow#bmc-addressing_ipi-install-installation-workflow)
*   [About root device hints](/installing/installing_with_agent_based_installer/preparing-to-install-with-agent-based-installer#root-device-hints_preparing-to-install-with-agent-based-installer)

{% leveloffset +1 %}{% include "./modules/ztp-configuring-host-firmware-with-gitops-ztp.md" %}{% endleveloffset %}

**Additional resources**

*   [Recommended firmware configuration for vDU cluster hosts](/edge_computing/ztp-vdu-validating-cluster-tuning#ztp-du-firmware-config-reference_vdu-config-ref)

{% leveloffset +2 %}{% include "./modules/ztp-retrieving-the-host-firmware-schema.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/ztp-retrieving-the-host-firmware-settings.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/ztp-deploying-user-defined-firmware-configuration-with-gitops-ztp.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/ztp-monitoring-installation-progress.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/ztp-troubleshooting-ztp-gitops-installation-crs.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/ztp-troubleshooting-ztp-gitops-supermicro-tls.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/ztp-site-cleanup.md" %}{% endleveloffset %}

**Additional resources**

*   [Removing a cluster from management](https://access.redhat.com/documentation/en-us/red_hat_advanced_cluster_management_for_kubernetes/2.9/html/clusters/cluster_mce_overview#remove-managed-cluster)
*   [Deprovisioning clusters](https://docs.redhat.com/en/documentation/red_hat_advanced_cluster_management_for_kubernetes/2.15/html/multicluster_engine_operator_with_red_hat_advanced_cluster_management/ibio-intro#deprovision-clusters)

{% leveloffset +1 %}{% include "./modules/ztp-removing-obsolete-content.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/ztp-tearing-down-the-pipeline.md" %}{% endleveloffset %}