---
title: "Preparing the hub cluster for {{ ztp }}"
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
# Preparing the hub cluster for {{ ztp }} {id="ztp-preparing-the-hub-cluster"}
{% include "./_attributes/common-attributes.md" %}
{%- set context = "ztp-preparing-the-hub-cluster" %}

To use {{ rh_rhacm }} in a disconnected environment, create a mirror registry that mirrors the {{ product_title }} release images and Operator Lifecycle Manager (OLM) catalog that contains the required Operator images. OLM manages, installs, and upgrades Operators and their dependencies in the cluster. You can also use a disconnected mirror host to serve the {{ op_system }} ISO and RootFS disk images that are used to provision the bare-metal hosts.

{% leveloffset +1 %}{% include "./modules/ztp-telco-ran-software-versions.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/ztp-gitops-ztp-max-spoke-clusters.md" %}{% endleveloffset %}

**Additional resources**

*   [Creating and managing {{ sno }} clusters with {{ rh_rhacm }}](https://access.redhat.com/documentation/en-us/red_hat_advanced_cluster_management_for_kubernetes/2.7/html/install/installing#single-node)

{% leveloffset +1 %}{% include "./modules/ztp-acm-installing-disconnected-rhacm.md" %}{% endleveloffset %}

**Additional resources**

*   [Installing OpenShift GitOps](https://docs.openshift.com/gitops/latest/installing_gitops/installing-openshift-gitops.html#installing-openshift-gitops)
*   [Installing {{ cgu_operator }}](/edge_computing/cnf-talm-for-cluster-upgrades#installing-topology-aware-lifecycle-manager-using-cli_cnf-topology-aware-lifecycle-manager)
*   [Mirroring an Operator catalog](/disconnected/using-olm#olm-mirror-catalog_olm-restricted-networks)

{% leveloffset +1 %}{% include "./modules/ztp-acm-adding-images-to-mirror-registry.md" %}{% endleveloffset %}

**Additional resources**

*   [Creating a mirror registry](/disconnected/installing-mirroring-creating-registry#installing-mirroring-creating-registry)
*   [Mirroring images for a disconnected installation](/disconnected/installing-mirroring-installation-images#installing-mirroring-installation-images)

{% leveloffset +1 %}{% include "./modules/ztp-enabling-assisted-installer-service-on-bare-metal.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/ztp-configuring-the-cluster-for-a-disconnected-environment.md" %}{% endleveloffset %}

**Additional resources**

*   [Mirroring the {{ product_title }} repository](/disconnected/installing-mirroring-installation-images#installation-mirror-repository_installing-mirroring-installation-images)

{% leveloffset +1 %}{% include "./modules/ztp-configuring-the-hub-cluster-to-use-unauthenticated-registries.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/ztp-preparing-the-hub-cluster-for-ztp.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/ztp-preparing-the-ztp-git-repository.md" %}{% endleveloffset %}

{% include "./snippets/pgt-deprecation-notice.md" %}

**Additional resources**

*   [Configuring managed cluster policies by using PolicyGenerator resources](/edge_computing/policygenerator_for_ztp/ztp-configuring-managed-clusters-policygenerator#ztp-configuring-managed-clusters-policygenerator)
*   [Comparing {{ rh_rhacm }} PolicyGenerator and PolicyGenTemplate resource patching](/edge_computing/policygenerator_for_ztp/ztp-configuring-managed-clusters-policygenerator#ztp-comparing-pgt-and-rhacm-pg-patching-strategies_ztp-configuring-managed-clusters-policygenerator)

{% leveloffset +1 %}{% include "./modules/ztp-preparing-the-ztp-git-repository-ver-ind.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/ztp-configuring-the-hub-cluster-for-backup-and-restore.md" %}{% endleveloffset %}

**Additional resources**

*   [Restoring managed cluster activation data](https://docs.redhat.com/en/documentation/red_hat_advanced_cluster_management_for_kubernetes/latest/html/business_continuity/business-cont-overview#managed-cluster-activation-data)
*   [Active-passive configuration](https://docs.redhat.com/en/documentation/red_hat_advanced_cluster_management_for_kubernetes/latest/html/business_continuity/business-cont-overview#active-passive-config)
*   [Restoring activation resources](https://docs.redhat.com/en/documentation/red_hat_advanced_cluster_management_for_kubernetes/latest/html/business_continuity/business-cont-overview#restore-activation-resources)