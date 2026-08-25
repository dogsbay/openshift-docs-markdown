---
title: "Preparing an Agent-based installed cluster for the {{ mce }}"
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Preparing an Agent-based installed cluster for the {{ mce }} {id="preparing-an-agent-based-installed-cluster-for-mce"}
{%- set context = "preparing-an-agent-based-installed-cluster-for-mce" %}

You can install the {{ mce_short }} and deploy a hub cluster with the Agent-based Installer.

The following procedure is partially automated and requires manual steps after the initial cluster is deployed.

{% leveloffset +1 %}{% include "./modules/preparing-mce-prereqs.md" %}{% endleveloffset %}

**Additional resources**

*   [Cluster lifecycle with multicluster engine operator overview](https://access.redhat.com/documentation/en-us/red_hat_advanced_cluster_management_for_kubernetes/2.9/html/clusters/cluster_mce_overview)
*   [Persistent storage using local volumes](/storage/persistent_storage_local/persistent-storage-local#persistent-storage-using-local-volume)
*   [Using {{ ztp }} to provision clusters at the network far edge](/edge_computing/ztp-deploying-far-edge-clusters-at-scale#about-ztp_ztp-deploying-far-edge-clusters-at-scale)
*   [Preparing to install with the Agent-based Installer](/installing/installing_with_agent_based_installer/preparing-to-install-with-agent-based-installer#preparing-to-install-with-agent-based-installer)
*   [About disconnected installation mirroring](/disconnected/index#installing-mirroring-disconnected-about)

{% leveloffset +1 %}{% include "./modules/preparing-an-initial-cluster-deployment-for-mce-disconnected.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/preparing-an-initial-cluster-deployment-for-mce-connected.md" %}{% endleveloffset %}

**Additional resources**

*   [The Local Storage Operator](/storage/persistent_storage_local/persistent-storage-local#persistent-storage-using-local-volume)