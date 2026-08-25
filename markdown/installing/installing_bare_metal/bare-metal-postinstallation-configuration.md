---
title: Postinstallation configuration
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Postinstallation configuration {id="bare-metal-post-installation-configuration"}
{%- set context = "bare-metal-postinstallation-configuration" %}

After successfully deploying a bare-metal cluster, you can perform post installation procedures such as configuring NTP, enabling a provisioning network, and configuring a user-managed load balancer. Customizing your cluster can help you prepare the cluster for specific workloads and deployment requirements. {._abstract}

{% leveloffset +1 %}{% include "./modules/bare-metal-about-the-cluster-api.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [About the Cluster API](/machine_management/cluster_api_machine_management/cluster-api-about#luster-api-about)
*   [Getting started with the Cluster API](/machine_management/cluster_api_machine_management/cluster-api-getting-started#cluster-api-getting-started)

{% leveloffset +1 %}{% include "./modules/ipi-install-configuring-ntp-for-disconnected-clusters.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/bare-metal-self-signed-cert-post-install.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/bare-metal-replace-existing-bmc-ca.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/bare-metal-install-new-bmc-ca.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Editing a `BareMetalHost` resource](/installing/installing_bare_metal/bare-metal-postinstallation-configuration#bmo-editing-a-baremetalhost-resource_bare-metal-postinstallation-configuration)

{% leveloffset +1 %}{% include "./modules/nw-enabling-a-provisioning-network-after-installation.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/creating-manifest-file-customized-br-ex-bridge-post.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Converting to IPv4/IPv6 dual-stack networking](/networking/ovn_kubernetes_network_provider/converting-to-dual-stack#nw-dual-stack-convert_converting-to-dual-stack)
*   [Expanding the cluster](/installing/installing_bare_metal/bare-metal-expanding-the-cluster#bare-metal-expanding-the-cluster)

{% leveloffset +1 %}{% include "./modules/making-disruptive-changes-br-ex-bridge.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/migrating-br-ex-bridge-nmstate.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Installer-provisioned infrastructure: Creating a manifest object that includes a customized `br-ex` bridge](/installing/installing_bare_metal/ipi/ipi-install-installation-workflow#creating-manifest-file-customized-br-ex-bridge_ipi-install-installation-workflow)
*   [User-provisioned infrastructure: Creating a manifest object that includes a customized `br-ex` bridge](/installing/installing_bare_metal/upi/installing-bare-metal#creating-manifest-file-customized-br-ex-bridge_installing-bare-metal)

{% leveloffset +1 %}{% include "./modules/nw-osp-services-external-load-balancer.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/nw-osp-configuring-external-load-balancer.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/bm-about-ipe.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/bm-configuring-ipe.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Enabling features using feature gates](/nodes/clusters/nodes-cluster-enabling-features#nodes-cluster-enabling-features)

{% leveloffset +1 %}{% include "./modules/bmo-config-using-bare-metal-operator.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/bmo-bare-metal-operator-architecture.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/bmo-about-the-baremetalhost-resource.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [NICs](/rest_api/provisioning_apis/hardwaredata-metal3-io-v1alpha1#spec-hardware-nics-2)

{% leveloffset +2 %}{% include "./modules/bmo-getting-the-baremetalhost-resource.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/bmo-editing-a-baremetalhost-resource.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/bmo-troubleshooting-latency-when-deleting-a-baremetalhost-resource.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/bmo-attaching-a-non-bootable-iso-to-a-bare-metal-node.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/bmo-configuring-ncsi-disable-poweroff.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/bmo-about-the-hostfirmwaresettings-resource.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/bmo-getting-the-hostfirmwaresettings-resource.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/bmo-editing-the-hostfirmwaresettings-resource-of-a-provisioned-host.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/bmo-performing-a-live-update-to-the-hostfirmwaresettings-resource.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/bmo-verifying-the-hostfirmware-settings-resource-is-valid.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/bmo-about-the-firmwareschema-resource.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/bmo-getting-the-firmwareschema-resource.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/bmo-about-the-hostfirmwarecomponents-resource.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/bmo-getting-the-hostfirmwarecomponents-resource.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/bmo-editing-the-hostfirmwarecomponents-resource-of-a-provisioned-host.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/bmo-performing-a-live-update-to-the-hostfirmwarecomponents-resource.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/bmo-getting-the-hostfirmwarecomponents-resource_nic.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/bmo-about-the-hostupdatepolicy-resource.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/bmo-setting-the-hostupdatepolicy-resource.md" %}{% endleveloffset %}