---
title: Setting up the environment for an OpenShift installation
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
# Setting up the environment for an OpenShift installation {id="ipi-install-installation-workflow"}
{% include "./_attributes/common-attributes.md" %}
{%- set context = "ipi-install-installation-workflow" %}

Before you can install an {{ product_title }} cluster on bare metal, you must set up your environment for installation.

{% leveloffset +1 %}{% include "./modules/ipi-install-installing-rhel-on-the-provisioner-node.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/ipi-install-preparing-the-provisioner-node-for-openshift-install.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/ipi-install-checking-ntp-sync.md" %}{% endleveloffset %}

**Additional resources**

*   [Network Time Protocol (NTP)](/installing/installing_bare_metal/ipi/ipi-install-prerequisites#network-requirements-ntp_ipi-install-prerequisites)
*   [Optional: Configuring NTP for disconnected clusters](/installing/installing_bare_metal/ipi/ipi-install-installation-workflow#configuring-ntp-for-disconnected-clusters_ipi-install-installation-workflow)

{% leveloffset +1 %}{% include "./modules/ipi-install-configuring-networking.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/ipi-install-baremetal-runtimecfg-ip-assignment.md" %}{% endleveloffset %}

**Additional resources**

*   [Optional: Overriding the default node IP selection logic](/support/troubleshooting/troubleshooting-network-issues#overriding-default-node-ip-selection-logic_troubleshooting-network-issues)

{% leveloffset +1 %}{% include "./modules/creating-manifest-file-customized-br-ex-bridge.md" %}{% endleveloffset %}

**Additional resources**

*   [Converting to a dual-stack cluster network](/networking/ovn_kubernetes_network_provider/converting-to-dual-stack#nw-dual-stack-convert_converting-to-dual-stack)
*   [Expanding the cluster](/installing/installing_bare_metal/bare-metal-expanding-the-cluster#bare-metal-expanding-the-cluster)

{% leveloffset +2 %}{% include "./modules/creating-scaling-machine-sets-compute-nodes-networking.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/ipi-install-establishing-communication-between-subnets.md" %}{% endleveloffset %}

**Additional resources**

*   [Configuring host network interfaces](/installing/installing_bare_metal/ipi/ipi-install-installation-workflow#modifying-install-config-for-dual-stack-network_ipi-install-installation-workflow)

{% leveloffset +1 %}{% include "./modules/ipi-install-retrieving-the-openshift-installer.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/ipi-install-extracting-the-openshift-installer.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/ipi-install-creating-an-rhcos-images-cache.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/nw-osp-services-external-load-balancer.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/nw-osp-configuring-external-load-balancer.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/ipi-install-setting-cluster-node-hostnames-dhcp.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/local-arbiter-node-config-prerequisites.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/ipi-install-config-local-arbiter-node.md" %}{% endleveloffset %}

**Additional resources**

*   [Installing a cluster](/installing/installing_bare_metal/ipi/ipi-install-installing-a-cluster#ipi-install-installing-a-cluster)
*   [Understanding feature gates](/nodes/clusters/nodes-cluster-enabling-features#nodes-cluster-enabling-features-about_nodes-cluster-enabling-features)

{% leveloffset +1 %}{% include "./modules/ipi-install-configuring-the-install-config-file.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/ipi-install-additional-install-config-parameters.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/ipi-install-bmc-addressing.md" %}{% endleveloffset %}

**Additional resources**

*   [Understanding virtualized control planes](/vcp/vcp-overview#vcp-overview)
*   [Editing a BareMetalHost resource](/installing/installing_bare_metal/bare-metal-postinstallation-configuration#bmo-editing-a-baremetalhost-resource_bare-metal-postinstallation-configuration)

{% leveloffset +2 %}{% include "./modules/ipi-install-verifying-support-for-redfish-apis.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/ipi-install-bmc-addressing-for-dell-idrac.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/ipi-install-bmc-addressing-for-hpe-ilo.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/ipi-install-bmc-addressing-for-fujitsu-irmc.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/ipi-install-bmc-addressing-for-cisco-cimc.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/ipi-install-root-device-hints.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/ipi-install-setting-proxy-settings-within-install-config.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/ipi-install-modifying-install-config-for-no-provisioning-network.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/ipi-install-modifying-install-config-for-dual-stack-network.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/ipi-install-configuring-host-network-interfaces-in-the-install-config.yaml-file.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/ipi-install-configuring-host-network-interfaces-for-subnets.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/ipi-install-modifying-install-config-for-slaac-dual-stack-network.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/ipi-install-configuring-host-dual-network-interfaces-in-the-install-config.yaml-file.md" %}{% endleveloffset %}

**Additional resources**

*   [Configuring network bonding](https://access.redhat.com/documentation/en-us/red_hat_enterprise_linux/9/html/configuring_and_managing_networking/configuring-network-bonding_configuring-and-managing-networking)

{% leveloffset +2 %}{% include "./modules/ipi-install-configure-multiple-cluster-nodes.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/ipi-install-configuring-managed-secure-boot-in-the-install-config-file.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/ipi-install-manifest-config-files.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/ipi-install-creating-the-openshift-manifests.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/ipi-install-configuring-ntp-for-disconnected-clusters.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/ipi-install-configure-network-components-to-run-on-the-control-plane.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/ipi-install-deploying-routers-on-worker-nodes.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/ipi-install-configuring-the-bios.md" %}{% endleveloffset %}

<a name="additional-resources_bare_metal_config"></a>**Additional resources**

*   [Configuration using the Bare Metal Operator](/installing/installing_bare_metal/bare-metal-postinstallation-configuration#bmo-config-using-bare-metal-operator_bare-metal-postinstallation-configuration)

{% leveloffset +2 %}{% include "./modules/ipi-install-configuring-the-raid.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/ipi-install-configuring-storage-on-nodes.md" %}{% endleveloffset %}

<a name="additional-resources_raid_config"></a>**Additional resources**

*   [Configuration using the Bare Metal Operator](/installing/installing_bare_metal/bare-metal-postinstallation-configuration#bmo-config-using-bare-metal-operator_bare-metal-postinstallation-configuration)
*   [Partition naming scheme](https://access.redhat.com/documentation/en-us/red_hat_enterprise_linux/9/html-single/managing_storage_devices/index#partition-naming-scheme_disk-partitions)

{% leveloffset +1 %}{% include "./modules/ipi-install-creating-a-disconnected-registry.md" %}{% endleveloffset %}

<a name="additional-resources_raid_config"></a>**Additional resources**

*   [Mirroring images for a disconnected installation](/disconnected/installing-mirroring-installation-images#prerequisites_installing-mirroring-installation-images)

{% leveloffset +2 %}{% include "./modules/ipi-install-preparing-a-disconnected-registry.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/ipi-install-mirroring-for-disconnected-registry.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/ipi-modify-install-config-for-a-disconnected-registry.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/ipi-install-validation-checklist-for-installation.md" %}{% endleveloffset %}