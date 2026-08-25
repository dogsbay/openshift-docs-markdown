---
title: Installing a cluster on any platform
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Installing a cluster on any platform {id="installing-platform-agnostic"}
{%- set context = "installing-platform-agnostic" %}

In {{ product_title }} version {{ product_version }}, you can install a cluster on any infrastructure that you provision, including virtualization and cloud environments. {._abstract}


:::important

See "Deploying OpenShift 4.x on non-tested platforms using the bare metal install method" before you try to install an {{ product_title }} cluster in virtualized or cloud environments.

:::


{% leveloffset +1 %}{% include "./modules/installing-ocp-agnostic-prereqs.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Installation and update](/architecture/architecture-installation#architecture-installation)
*   [Selecting a cluster installation method and preparing it for users](/installing/overview/installing-preparing#installing-preparing)
*   [Configuring your firewall](/installing/install_config/configuring-firewall#configuring-firewall)

{% leveloffset +1 %}{% include "./modules/cluster-entitlements.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/installation-upi-requirements.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/installation-machine-requirements.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/installation-minimum-resource-requirements.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/csr-management.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/installation-network-user-infra.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Configuring chrony time service](/installing/install_config/installing-customizing#installation-special-config-chrony_installing-customizing)

{% leveloffset +2 %}{% include "./modules/installation-dns-user-infra.md" %}{% endleveloffset %}

{% leveloffset +3 %}{% include "./modules/installation-dns-user-infra-example.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/installation-load-balancing-user-infra.md" %}{% endleveloffset %}

{% leveloffset +3 %}{% include "./modules/installation-load-balancing-user-infra-example.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/installation-infrastructure-user-infra.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/installation-user-provisioned-validating-dns.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/ssh-agent-using.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/installation-obtaining-installer.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/cli-installing-cli-linux.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/cli-installing-cli-windows.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/cli-installing-cli-macos.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/installation-initializing-manual.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/installation-bare-metal-config-yaml.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/installation-configure-proxy.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/installation-three-node-cluster.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/installation-user-infra-generate-k8s-manifest-ignition.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/creating-machines-bare-metal.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [coreos-installer image mirror](https://mirror.openshift.com/pub/openshift-v4/x86_64/clients/coreos-installer/)

{% leveloffset +2 %}{% include "./modules/installation-user-infra-machines-iso.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/installation-user-infra-machines-pxe.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/installation-user-infra-machines-advanced.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/installation-user-infra-machines-static-network.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [`dracut.cmdline` manual page](https://www.man7.org/linux/man-pages/man7/dracut.cmdline.7.html)

{% leveloffset +3 %}{% include "./modules/configuring-dhcp-or-static-ip-addresses.md" %}{% endleveloffset %}

{% leveloffset +3 %}{% include "./modules/configuring-ip-address-without-static-hostname.md" %}{% endleveloffset %}

{% leveloffset +3 %}{% include "./modules/specifying-multiple-network-interfaces.md" %}{% endleveloffset %}

{% leveloffset +3 %}{% include "./modules/configuring-default-gateway-route.md" %}{% endleveloffset %}

{% leveloffset +3 %}{% include "./modules/configuring-vlans-individual-interfaces.md" %}{% endleveloffset %}

{% leveloffset +3 %}{% include "./modules/bonding-multiple-network-interfaces-to-single-interface.md" %}{% endleveloffset %}

{% leveloffset +3 %}{% include "./modules/bonding-multiple-sriov-network-interfaces-to-dual-port.md" %}{% endleveloffset %}

{% leveloffset +3 %}{% include "./modules/installation-user-infra-machines-coreos-installer-options.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/installation-installing-bare-metal.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/cli-logging-in-kubeadmin.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/installation-approve-csrs.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/installation-operators-config.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/olm-restricted-networks-configuring-operatorhub.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/registry-removed.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/installation-registry-storage-config.md" %}{% endleveloffset %}

{% leveloffset +3 %}{% include "./modules/registry-configuring-storage-baremetal.md" %}{% endleveloffset %}

{% leveloffset +3 %}{% include "./modules/installation-registry-storage-non-production.md" %}{% endleveloffset %}

{% leveloffset +3 %}{% include "./modules/installation-registry-storage-block-recreate-rollout-bare-metal.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/installation-complete-user-infra.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/cluster-telemetry.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [About remote health monitoring](/support/remote_health_monitoring/about-remote-health-monitoring#about-remote-health-monitoring)

## Additional resources {id="additional-resources_{{ context }}" ._additional-resources}

*   [Deploying OpenShift 4.x on non-tested platforms using the bare metal install method](https://access.redhat.com/articles/4207611)
*   [Available cluster customizations](/post_installation_configuration/cluster-tasks#available_cluster_customizations)
*   [Remote health reporting](/support/remote_health_monitoring/remote-health-reporting#remote-health-reporting)
*   [Configuring the registry for bare metal](/registry/configuring_registry_storage/configuring-registry-storage-baremetal#configuring-registry-storage-baremetal)