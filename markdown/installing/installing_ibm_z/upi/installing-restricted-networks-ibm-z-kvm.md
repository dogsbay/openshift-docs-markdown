---
title: "Installing a cluster with {{ op_system_base }} KVM on {{ ibm_z_title }} and {{ ibm_linuxone_title }} in a disconnected environment"
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Installing a cluster with {{ op_system_base }} KVM on {{ ibm_z_title }} and {{ ibm_linuxone_title }} in a disconnected environment {id="installing-restricted-networks-ibm-z-kvm"}
{%- set context = "installing-restricted-networks-ibm-z-kvm" %}

You can install {{ product_title }} on {{ ibm_z_name }} or {{ ibm_linuxone_name }} by using {{ op_system_base }} KVM on infrastructure that you provision in a disconnected environment, using an internal mirror of the installation release content. {._abstract}


:::note

While this document refers to only {{ ibm_z_name }}, all information in it also applies to {{ ibm_linuxone_name }}.

:::


{% leveloffset +1 %}{% include "./modules/prereqs-ibm-z-kvm-upi-disconnected.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Preparing to install a cluster on {{ ibm_z_title }} using user-provisioned infrastructure](/installing/installing_ibm_z/upi/upi-ibm-z-preparing-to-install#upi-ibm-z-preparing-to-install)
*   [{{ product_title }} installation and update](/architecture/architecture-installation#architecture-installation)
*   [Selecting a cluster installation method and preparing it for users](/installing/overview/installing-preparing#installing-preparing)
*   [Mirroring images for a disconnected installation](/disconnected/installing-mirroring-installation-images#installing-mirroring-installation-images)
*   [Persistent storage using {{ rh_storage }}](/storage/persistent_storage/persistent-storage-ocs#persistent-storage-ocs)
*   [Configuring your firewall](/installing/install_config/configuring-firewall#configuring-firewall-module_configuring-firewall)

{% leveloffset +1 %}{% include "./modules/installation-about-restricted-network.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/installation-infrastructure-user-infra.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/installation-load-balancing-user-infra-example.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/installation-initializing-manual.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Installation configuration parameters for {{ ibm_z_name }}](/installing/installing_ibm_z/installation-config-parameters-ibm-z#installation-config-parameters-ibm-z)

{% leveloffset +2 %}{% include "./modules/installation-bare-metal-config-yaml.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/installation-configure-proxy.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/installation-three-node-cluster.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/nw-operator-cr.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/installation-user-infra-generate-k8s-manifest-ignition.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/installation-ibm-z-kvm-user-infra-installing-rhcos.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/ibm-z-configure-encryption-kvm.md" %}{% endleveloffset %}

{% leveloffset +3 %}{% include "./modules/ibm-z-secure-execution.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Introducing {{ ibm_name }} Secure Execution for Linux](https://www.ibm.com/docs/en/linux-on-systems?topic=virtualization-secure-execution)
*   [Linux as an {{ ibm_name }} Secure Execution host or guest](https://www.ibm.com/docs/en/linux-on-systems?topic=ibmz-secure-execution)
*   [Setting up {{ ibm_name }} Secure Execution on {{ ibm_z_title }}](https://access.redhat.com/documentation/en-us/red_hat_enterprise_linux/9/html/configuring_and_managing_virtualization/securing-virtual-machines-in-rhel_configuring-and-managing-virtualization#setting-up-secure-execution-on-ibm-z_securing-virtual-machines-in-rhel)

{% leveloffset +3 %}{% include "./modules/ibm-z-configure-hw-based-cex-encryption.md" %}{% endleveloffset %}

{% leveloffset +3 %}{% include "./modules/ibm-z-configure-nbde-with-static-ip.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Creating machine configs with Butane](/installing/install_config/installing-customizing#installation-special-config-butane_installing-customizing)

{% leveloffset +2 %}{% include "./modules/installation-ibm-z-kvm-user-infra-machines-iso.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/installation-full-ibm-z-kvm-user-infra-machines-iso.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/installation-user-infra-machines-static-network.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [`dracut.cmdline` manual page](https://www.man7.org/linux/man-pages/man7/dracut.cmdline.7.html)

{% leveloffset +3 %}{% include "./modules/configuring-dhcp-or-static-ip-addresses.md" %}{% endleveloffset %}

{% leveloffset +3 %}{% include "./modules/configuring-ip-address-without-static-hostname.md" %}{% endleveloffset %}

{% leveloffset +3 %}{% include "./modules/specifying-multiple-network-interfaces.md" %}{% endleveloffset %}

{% leveloffset +3 %}{% include "./modules/configuring-default-gateway-route.md" %}{% endleveloffset %}

{% leveloffset +3 %}{% include "./modules/configuring-vlans-individual-interfaces.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/installation-installing-bare-metal.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/cli-logging-in-kubeadmin.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/installation-approve-csrs.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/installation-operators-config.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/olm-restricted-networks-configuring-operatorhub.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/installation-registry-storage-config.md" %}{% endleveloffset %}

{% leveloffset +3 %}{% include "./modules/registry-configuring-storage-baremetal.md" %}{% endleveloffset %}

{% leveloffset +3 %}{% include "./modules/installation-registry-storage-non-production.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/installation-complete-user-infra.md" %}{% endleveloffset %}

## Additional resources {id="additional-resources_{{ context }}" ._additional-resources}

*   [How to generate SOSREPORT within {{ product_title }} version 4 nodes without SSH](https://access.redhat.com/solutions/4387261)
*   [Image configuration resources (Classic)](/openshift_images/image-configuration#images-configuration-cas_image-configuration)
*   [Remote health reporting](/support/remote_health_monitoring/remote-health-reporting#remote-health-reporting)
*   [Customize your cluster](/post_installation_configuration/cluster-tasks#available_cluster_customizations)