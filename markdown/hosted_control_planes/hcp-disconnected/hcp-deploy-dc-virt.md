---
title: "Deploying {{ hcp }} on {{ VirtProductName }} in a disconnected environment"
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Deploying {{ hcp }} on {{ VirtProductName }} in a disconnected environment {id="hcp-deploy-dc-virt"}
{%- set context = "hcp-deploy-dc-virt" %}

When you deploy {{ hcp }} in a disconnected environment, some of the steps differ depending on whether you use bare metal or {{ VirtProductName }}. {._abstract}

To get started, you must meet the following requirements:

*   You have a disconnected {{ product_title }} environment serving as your management cluster.
*   You have an internal registry to mirror images on. For more information, see "About disconnected installation mirroring".


:::note

A known limitation exists for hosted clusters on an {{ product_title }} management cluster that is version 4.21 or later. To avoid issues, you must mirror the 4.20.10 release payload from the `quay.io/openshift-release-dev/ocp-release:4.20.10-multi` image to the target mirror registry. This temporary limitation is expected to be resolved in a later release.

:::


**Additional resources**
{._additional-resources}

*   [About disconnected installation mirroring](/disconnected/index#installing-mirroring-disconnected-about)

{% leveloffset +1 %}{% include "./modules/hcp-dc-image-mirror.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Mirroring an image set in a partially disconnected environment](/disconnected/about-installing-oc-mirror-v2#oc-mirror-workflows-partially-disconnected-v2_about-installing-oc-mirror-v2)
*   [Mirroring an image set in a fully disconnected environment](/disconnected/about-installing-oc-mirror-v2#oc-mirror-workflows-fully-disconnected-v2_about-installing-oc-mirror-v2)
*   [Install on disconnected networks](https://docs.redhat.com/en/documentation/red_hat_advanced_cluster_management_for_kubernetes/2.16/html/clusters/cluster_mce_overview#install-on-disconnected-networks)

{% leveloffset +1 %}{% include "./modules/hcp-dc-apply-objects.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Mirroring images for a disconnected installation by using the oc-mirror plugin v2](/disconnected/about-installing-oc-mirror-v2#about-installing-oc-mirror-v2)

{% leveloffset +1 %}{% include "./modules/hcp-dc-mce-virt.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [About cluster lifecycle with multicluster engine operator](https://docs.redhat.com/en/documentation/red_hat_advanced_cluster_management_for_kubernetes/latest/html/clusters/cluster_mce_overview#mce-intro)
*   [Installing and upgrading multicluster engine operator](https://docs.redhat.com/en/documentation/red_hat_advanced_cluster_management_for_kubernetes/latest/html/clusters/cluster_mce_overview#mce-install-intro)

{% leveloffset +1 %}{% include "./modules/hcp-dc-tls-virt.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/hcp-dc-tls-mgmt.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/hcp-dc-tls-hosted.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/hcp-dc-virt-hosted.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/hcp-virt-prereqs.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/hcp-virt-create-hc-cli.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Labeling management cluster nodes](/hosted_control_planes/hcp-prepare/hcp-distribute-workloads#hcp-labels-taints_hcp-distribute-workloads)

{% leveloffset +1 %}{% include "./modules/hcp-virt-ingress-dns.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/hcp-dc-virt-ingress-dns-custom.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/hcp-virt-hc-base-domain.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/hcp-virt-load-balancer.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/hcp-virt-wildcard-dns.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/hcp-dc-finish.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/hcp-monitor-cp.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/hcp-monitor-dp.md" %}{% endleveloffset %}