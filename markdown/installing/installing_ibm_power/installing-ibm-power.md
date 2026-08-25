---
title: "Installing a cluster on {{ ibm_power_title }}"
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Installing a cluster on {{ ibm_power_title }} {id="installing-ibm-power"}
{%- set context = "installing-ibm-power" %}

To install a cluster on {{ ibm_power_name }} infrastructure that you provision, review the prerequisites and complete the installation steps. {._abstract}


:::important

Additional considerations exist for non-bare metal platforms. Review the guidelines for deploying {{ product_title }} on non-tested platforms before you install an {{ product_title }} cluster.

:::


{% leveloffset +1 %}{% include "./modules/prereqs-ibm-power-upi.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [{{ product_title }} installation and update](/architecture/architecture-installation#architecture-installation)
*   [Selecting a cluster installation method and preparing it for users](/installing/overview/installing-preparing#installing-preparing)
*   [Persistent storage using {{ rh_storage }}](/storage/persistent_storage/persistent-storage-ocs#persistent-storage-ocs)
*   [Configuring your firewall](/installing/install_config/configuring-firewall#configuring-firewall-module_configuring-firewall)

{% leveloffset +1 %}{% include "./modules/cluster-entitlements.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/ibm-power-upi-requirements-intro.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/installation-machine-requirements.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/installation-minimum-resource-requirements.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Optimizing storage](/scalability_and_performance/optimization/optimizing-storage#optimizing-storage)

{% leveloffset +2 %}{% include "./modules/minimum-ibm-power-system-requirements.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/recommended-ibm-power-system-requirements.md" %}{% endleveloffset %}

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

**Additional resources**
{._additional-resources}

*   [Installation configuration parameters for {{ ibm_power_name }}](/installing/installing_ibm_power/installation-config-parameters-ibm-power#installation-config-parameters-ibm-power)

{% leveloffset +2 %}{% include "./modules/installation-bare-metal-config-yaml.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/installation-configure-proxy.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/installation-three-node-cluster.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/nw-operator-cr.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/installation-user-infra-generate-k8s-manifest-ignition.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/ibm-power-upi-installing-rhcos-intro.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/installation-user-infra-machines-iso.md" %}{% endleveloffset %}

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

{% leveloffset +2 %}{% include "./modules/installation-user-infra-machines-pxe.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/rhcos-enabling-multipath-day-1-power.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/installation-installing-bare-metal.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/cli-logging-in-kubeadmin.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/installation-approve-csrs.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/installation-operators-config.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/installation-registry-storage-config.md" %}{% endleveloffset %}

{% leveloffset +3 %}{% include "./modules/registry-configuring-storage-baremetal.md" %}{% endleveloffset %}

{% leveloffset +3 %}{% include "./modules/installation-registry-storage-non-production.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/installation-complete-user-infra.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/cluster-telemetry.md" %}{% endleveloffset %}

## Additional resources {id="additional-resources_{{ context }}" ._additional-resources}

*   [Guidelines for deploying {{ product_title }} on non-tested platforms](https://access.redhat.com/articles/4207611)
*   [About remote health monitoring](/support/remote_health_monitoring/about-remote-health-monitoring#about-remote-health-monitoring)
*   [Enabling multipathing with kernel arguments on {{ op_system }}](/machine_configuration/machine-configs-configure#rhcos-enabling-multipath-day-2_machine-configs-configure)
*   [Customize your cluster](/post_installation_configuration/cluster-tasks#available_cluster_customizations)
*   [Remote health reporting](/support/remote_health_monitoring/remote-health-reporting#remote-health-reporting)