---
title: Deploying {{ hcp }} on {{ VirtProductName }} in a disconnected environment
---

# Deploying {{ hcp }} on {{ VirtProductName }} in a disconnected environment {#hcp-deploy-dc-virt}

When you deploy {{ hcp }} in a disconnected environment, some of the steps differ depending on whether you use bare metal or {{ VirtProductName }}.

To get started, you must meet the following requirements:

- You have a disconnected OpenShift Container Platform environment serving as your management cluster.
- You have an internal registry to mirror images on. For more information, see "About disconnected installation mirroring".

> [!NOTE]
> A known limitation exists for hosted clusters on an OpenShift Container Platform management cluster that is version 4.21 or later. To avoid issues, you must mirror the 4.20.10 release payload from the `quay.io/openshift-release-dev/ocp-release:4.20.10-multi` image to the target mirror registry. This temporary limitation is expected to be resolved in a later release.

**Additional resources**

- [About disconnected installation mirroring](/disconnected/index#installing-mirroring-disconnected-about)

**Additional resources**

- [Mirroring an image set in a partially disconnected environment](/disconnected/about-installing-oc-mirror-v2#oc-mirror-workflows-partially-disconnected-v2_about-installing-oc-mirror-v2)
- [Mirroring an image set in a fully disconnected environment](/disconnected/about-installing-oc-mirror-v2#oc-mirror-workflows-fully-disconnected-v2_about-installing-oc-mirror-v2)
- [Install on disconnected networks](https://docs.redhat.com/en/documentation/red_hat_advanced_cluster_management_for_kubernetes/2.16/html/clusters/cluster_mce_overview#install-on-disconnected-networks)

**Additional resources**

- [Mirroring images for a disconnected installation by using the oc-mirror plugin v2](/disconnected/about-installing-oc-mirror-v2#about-installing-oc-mirror-v2)

**Additional resources**

- [About cluster lifecycle with multicluster engine operator](https://docs.redhat.com/en/documentation/red_hat_advanced_cluster_management_for_kubernetes/latest/html/clusters/cluster_mce_overview#mce-intro)
- [Installing and upgrading multicluster engine operator](https://docs.redhat.com/en/documentation/red_hat_advanced_cluster_management_for_kubernetes/latest/html/clusters/cluster_mce_overview#mce-install-intro)

**Additional resources**

- [Labeling management cluster nodes](/hosted_control_planes/hcp-prepare/hcp-distribute-workloads#hcp-labels-taints_hcp-distribute-workloads)
