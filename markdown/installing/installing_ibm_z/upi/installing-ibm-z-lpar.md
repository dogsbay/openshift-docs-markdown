---
title: "Installing a cluster in an LPAR on {{ ibm_z_title }} and {{ ibm_linuxone_title }}"
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Installing a cluster in an LPAR on {{ ibm_z_title }} and {{ ibm_linuxone_title }} {id="installing-ibm-z-lpar"}
{%- set context = "installing-ibm-z-lpar" %}

In {{ product_title }} version {{ product_version }}, you can install a cluster directly in a logical partition (LPAR) on {{ ibm_z_name }} or {{ ibm_linuxone_name }} infrastructure that you provision, without using a hypervisor layer.


:::note

While this document refers only to {{ ibm_z_name }}, all information in it also applies to {{ ibm_linuxone_name }}.

:::


{% leveloffset +1 %}{% include "./modules/prereqs-ibm-z-upi.md" %}{% endleveloffset %}

**Additional resources**

*   [Preparing to install a cluster on {{ ibm_z_title }} using user-provisioned infrastructure](/installing/installing_ibm_z/upi/upi-ibm-z-preparing-to-install#upi-ibm-z-preparing-to-install)
*   [{{ product_title }} installation and update](/architecture/architecture-installation#architecture-installation)
*   [Selecting a cluster installation method and preparing it for users](/installing/overview/installing-preparing#installing-preparing)
*   [Persistent storage using {{ rh_storage }}](/storage/persistent_storage/persistent-storage-ocs#persistent-storage-ocs)
*   [Configuring your firewall](/installing/install_config/configuring-firewall#configuring-firewall-module_configuring-firewall)

{% leveloffset +1 %}{% include "./modules/installation-infrastructure-user-infra.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/installation-load-balancing-user-infra-example.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/installation-initializing-manual.md" %}{% endleveloffset %}

**Additional resources**

*   [Installation configuration parameters for {{ ibm_z_name }}](/installing/installing_ibm_z/installation-config-parameters-ibm-z#installation-config-parameters-ibm-z)

{% leveloffset +2 %}{% include "./modules/installation-bare-metal-config-yaml.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/installation-configure-proxy.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/installation-three-node-cluster.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/nw-operator-cr.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/installation-user-infra-generate-k8s-manifest-ignition.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/ibm-z-configure-boot-volume-encryption.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/ibm-z-configure-hw-based-cex-encryption.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/ibm-z-configure-nbde-with-static-ip.md" %}{% endleveloffset %}

**Additional resources**

*   [Creating machine configs with Butane](/installing/install_config/installing-customizing#installation-special-config-butane_installing-customizing)

{% leveloffset +1 %}{% include "./modules/installation-ibm-z-user-infra-machines-iso.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/installation-user-infra-machines-static-network.md" %}{% endleveloffset %}

**Additional resources**

*   [`dracut.cmdline` manual page](https://www.man7.org/linux/man-pages/man7/dracut.cmdline.7.html)

{% leveloffset +3 %}{% include "./modules/configuring-dhcp-or-static-ip-addresses.md" %}{% endleveloffset %}

{% leveloffset +3 %}{% include "./modules/configuring-ip-address-without-static-hostname.md" %}{% endleveloffset %}

{% leveloffset +3 %}{% include "./modules/specifying-multiple-network-interfaces.md" %}{% endleveloffset %}

{% leveloffset +3 %}{% include "./modules/configuring-default-gateway-route.md" %}{% endleveloffset %}

{% leveloffset +3 %}{% include "./modules/configuring-vlans-individual-interfaces.md" %}{% endleveloffset %}

{% leveloffset +3 %}{% include "./modules/bonding-multiple-network-interfaces-to-single-interface.md" %}{% endleveloffset %}

{% leveloffset +3 %}{% include "./modules/bonding-multiple-sriov-network-interfaces-to-dual-port.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/installation-installing-bare-metal.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/cli-logging-in-kubeadmin.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/installation-approve-csrs.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/installation-operators-config.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/installation-registry-storage-config.md" %}{% endleveloffset %}

{% leveloffset +3 %}{% include "./modules/registry-configuring-storage-baremetal.md" %}{% endleveloffset %}

{% leveloffset +3 %}{% include "./modules/installation-registry-storage-non-production.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/installation-complete-user-infra.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/cluster-telemetry.md" %}{% endleveloffset %}

## Additional resources {id="additional-resources_{{ context }}"}

*   [About remote health monitoring](/support/remote_health_monitoring/about-remote-health-monitoring#about-remote-health-monitoring)
*   [How to generate SOSREPORT within {{ product_title }} version 4 nodes without SSH](https://access.redhat.com/solutions/4387261)
*   [Remote health reporting](/support/remote_health_monitoring/remote-health-reporting#remote-health-reporting)
*   [Enabling multipathing with kernel arguments on {{ op_system }}](/machine_configuration/machine-configs-configure#rhcos-enabling-multipath-day-2_machine-configs-configure)
*   [Customize your cluster](/post_installation_configuration/cluster-tasks#available_cluster_customizations)