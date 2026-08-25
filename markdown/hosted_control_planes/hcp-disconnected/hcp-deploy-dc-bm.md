---
title: "Deploying {{ hcp }} on bare metal in a disconnected environment"
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Deploying {{ hcp }} on bare metal in a disconnected environment {id="hcp-deploy-dc-bm"}
{%- set context = "hcp-deploy-dc-bm" %}

In the context of {{ hcp }}, a disconnected environment is an {{ product_title }} deployment that is not connected to the internet and that uses {{ hcp }} as a base. You can deploy {{ hcp }} in a disconnected environment on bare metal.

When you provision {{ hcp }} on bare metal, you use the Agent platform. The Agent platform and {{ mce }} work together to enable disconnected deployments. The Agent platform uses the central infrastructure management service to add worker nodes to a hosted cluster. For an introduction to the central infrastructure management service, see "Enabling the central infrastructure management service".

{% leveloffset +1 %}{% include "./modules/hcp-dc-bm-arch.md" %}{% endleveloffset %}

**Additional resources**

*   [Adding the registry CA to the management cluster](/hosted_control_planes/hcp-disconnected/hcp-deploy-dc-bm#hcp-dc-tls-mgmt_hcp-deploy-dc-bm)
*   [Adding the registry CA to the compute nodes for the hosted cluster](/hosted_control_planes/hcp-disconnected/hcp-deploy-dc-bm#hcp-dc-tls-hosted_hcp-deploy-dc-bm)

{% leveloffset +1 %}{% include "./modules/hcp-dc-bm-reqs.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/hcp-dc-extract.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/hcp-bm-dns.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/hcp-dc-registry.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/hcp-dc-mgmt-cluster.md" %}{% endleveloffset %}

**Additional resources**

*   [Installing and upgrading multicluster engine operator](https://docs.redhat.com/en/documentation/red_hat_advanced_cluster_management_for_kubernetes/latest/html/clusters/cluster_mce_overview#mce-install-intro)
*   [Manually enabling the hypershift-addon managed cluster add-on for local-cluster](/hosted_control_planes/hcp-prepare/hcp-enable-disable.html#hcp-enable-manual-addon_hcp-enable-disable)
*   [Cluster lifecycle with multicluster engine operator overview](https://docs.redhat.com/en/documentation/red_hat_advanced_cluster_management_for_kubernetes/latest/html/clusters/cluster_mce_overview#mce-intro)

{% leveloffset +1 %}{% include "./modules/hcp-dc-web-server.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/hcp-dc-image-mirror.md" %}{% endleveloffset %}

**Additional resources**

*   [Mirroring an image set in a partially disconnected environment](/disconnected/about-installing-oc-mirror-v2#oc-mirror-workflows-partially-disconnected-v2_about-installing-oc-mirror-v2)
*   [Mirroring an image set in a fully disconnected environment](/disconnected/about-installing-oc-mirror-v2#oc-mirror-workflows-fully-disconnected-v2_about-installing-oc-mirror-v2)
*   [Install on disconnected networks](https://docs.redhat.com/en/documentation/red_hat_advanced_cluster_management_for_kubernetes/latest/html/clusters/cluster_mce_overview#install-on-disconnected-networks)

{% leveloffset +1 %}{% include "./modules/hcp-dc-apply-objects.md" %}{% endleveloffset %}

**Additional resources**

*   [Mirroring images for a disconnected installation by using the oc-mirror plugin v2](/disconnected/about-installing-oc-mirror-v2#about-installing-oc-mirror-v2)

{% leveloffset +1 %}{% include "./modules/hcp-agentserviceconfig.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/hcp-dc-tls-mgmt.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/hcp-dc-tls-hosted.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/hcp-dc-bm-hosted.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/hcp-hc-objects.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/hcp-nodepool-hc.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/hcp-dc-infraenv.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/hcp-bm-hosts.md" %}{% endleveloffset %}

**Additional resources**

*   [Provisioning new hosts in a user-provisioned cluster by using the BMO](/installing/installing_bare_metal/upi/scaling-a-user-provisioned-cluster-with-the-bare-metal-operator#upi-provisioning-new-hosts-in-a-upi-cluster_scaling-a-user-provisioned-cluster-with-the-bare-metal-operator)
*   [Understanding secrets](/nodes/pods/nodes-pods-secrets#nodes-pods-secrets-about_nodes-pods-secrets)

{% leveloffset +2 %}{% include "./modules/hcp-dc-scale-np.md" %}{% endleveloffset %}

## Additional resources {id="_additional_resources"}

*   [Enabling the central infrastructure management service](https://docs.redhat.com/en/documentation/red_hat_advanced_cluster_management_for_kubernetes/latest/html/clusters/cluster_mce_overview#enable-cim)