---
title: Installing a cluster on vSphere in a disconnected environment
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Installing a cluster on vSphere in a disconnected environment {id="installing-restricted-networks-installer-provisioned-vsphere"}
{%- set context = "installing-restricted-networks-installer-provisioned-vsphere" %}

In {{ product_title }} {{ product_version }}, you can install a cluster on VMware vSphere infrastructure in a restricted network by creating an internal mirror of the installation release content. {._abstract}

## Prerequisites {id="prerequisites_installing-restricted-networks-installer-provisioned-vsphere"}

*   You have completed the tasks in "Preparing to install a cluster using installer-provisioned infrastructure".
*   You reviewed your VMware platform licenses. Red&#160;Hat does not place any restrictions on your VMware licenses, but some VMware infrastructure components require licensing.
*   You reviewed details about the {{ product_title }} installation and update processes.
*   You read the documentation on selecting a cluster installation method and preparing it for users.
*   You created a registry on your mirror host and obtained the `imageContentSources` data for your version of {{ product_title }}.

    :::important

    Because the installation media is on the mirror host, you can use that computer to complete all installation steps.
    
    :::

*   You provisioned persistent storage for your cluster. To deploy a private image registry, your storage must provide the ReadWriteMany access mode.
*   The {{ product_title }} installer requires access to port 443 on the vCenter and ESXi hosts. You verified that port 443 is accessible.
*   If you use a firewall, you confirmed with the administrator that port 443 is accessible. Control plane nodes must be able to reach vCenter and ESXi hosts on port 443 for the installation to succeed.
*   If you use a firewall and plan to use the Telemetry service, you configured the firewall to allow the sites that your cluster requires access to.

    :::note

    If you are configuring a proxy, be sure to also review this site list.
    
    :::


{% leveloffset +1 %}{% include "./modules/installation-about-restricted-network.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/cluster-entitlements.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/installation-creating-image-restricted.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/installation-vsphere-regions-zones.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/installation-vsphere-regions-zones-host-groups.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Additional VMware vSphere configuration parameters](/installing/installing_vsphere/installation-config-parameters-vsphere#installation-configuration-parameters-additional-vsphere_installation-config-parameters-vsphere)
*   [Deprecated VMware vSphere configuration parameters](/installing/installing_vsphere/installation-config-parameters-vsphere#deprecated-parameters-vsphere_installation-config-parameters-vsphere)
*   [vSphere automatic migration](/storage/container_storage_interface/persistent-storage-csi-migration#persistent-storage-csi-migration-sc-vsphere_persistent-storage-csi-migration)
*   [VMware vSphere CSI Driver Operator](/storage/container_storage_interface/persistent-storage-csi-vsphere#persistent-storage-csi-vsphere-top-aware_persistent-storage-csi-vsphere)

{% leveloffset +1 %}{% include "./modules/installation-initializing.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Installation configuration parameters](/installing/installing_vsphere/installation-config-parameters-vsphere#installation-config-parameters-vsphere)

{% leveloffset +2 %}{% include "./modules/installation-vsphere-config-yaml.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/installation-configure-proxy.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/configuring-vsphere-regions-zones.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/configuring-vsphere-host-groups.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/nw-osp-services-external-load-balancer.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/nw-osp-configuring-external-load-balancer.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/installation-launching-installer.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/cli-logging-in-kubeadmin.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/olm-restricted-networks-configuring-operatorhub.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/registry-removed.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/installation-registry-storage-config.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/registry-configuring-storage-vsphere.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/cluster-telemetry.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Preparing to install a cluster using installer-provisioned infrastructure](/installing/installing_vsphere/ipi/ipi-vsphere-preparing-to-install#ipi-vsphere-preparing-to-install)
*   [{{ product_title }} installation and update processes](/architecture/architecture-installation#architecture-installation)
*   [Selecting a cluster installation method and preparing it for users](/installing/overview/installing-preparing#installing-preparing)
*   [Creating a registry on your mirror host](/disconnected/installing-mirroring-installation-images#installing-mirroring-installation-images)
*   [Persistent storage](/storage/understanding-persistent-storage#understanding-persistent-storage)
*   [Configuring the firewall to allow required sites](/installing/install_config/configuring-firewall#configuring-firewall-module_configuring-firewall)
*   [About remote health monitoring](/support/remote_health_monitoring/about-remote-health-monitoring#about-remote-health-monitoring)
*   [Customize your cluster](/installing/install_config/installing-customizing#installing-customizing)
*   [Remote health reporting](/support/remote_health_monitoring/remote-health-reporting#remote-health-reporting)
*   [Registering your disconnected cluster](/support/remote_health_monitoring/remote-health-reporting#insights-operator-register-disconnected-cluster_remote-health-reporting)
*   [Set up your registry and configure registry storage](/registry/configuring_registry_storage/configuring-registry-storage-vsphere#configuring-registry-storage-vsphere)