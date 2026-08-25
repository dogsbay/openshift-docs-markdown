---
title: Installing a cluster on vSphere in a disconnected environment with user-provisioned infrastructure
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Installing a cluster on vSphere in a disconnected environment with user-provisioned infrastructure {id="installing-restricted-networks-vsphere"}
{%- set context = "installing-restricted-networks-vsphere" %}

In {{ product_title }} version {{ product_version }}, you can install a cluster on
VMware vSphere infrastructure that you provision in a restricted network. {._abstract}


:::important

The steps for performing a user-provisioned infrastructure installation are provided as an example only. Installing a cluster with infrastructure you provide requires knowledge of the vSphere platform and the installation process of {{ product_title }}. Use the user-provisioned infrastructure installation instructions as a guide; you are free to create the required resources through other methods.

:::


## Prerequisites {id="prerequisites_installing-restricted-networks-vsphere_{{ context }}"}

*   You have completed the tasks in "Preparing to install a cluster using user-provisioned infrastructure".
*   You reviewed your VMware platform licenses. Red&#160;Hat does not place any restrictions on your VMware licenses, but some VMware infrastructure components require licensing.
*   You reviewed details about the {{ product_title }} installation and update processes.
*   You read the documentation on selecting a cluster installation method and preparing it for users.
*   You created a registry on your mirror host and obtained the `imageContentSources` data for your version of {{ product_title }}.

    :::important

    Because the installation media is on the mirror host, you can use that computer to complete all installation steps.
    
    :::

*   You provisioned persistent storage for your cluster. To deploy a private image registry, your storage must provide
`ReadWriteMany` access modes.
*   Completing the installation requires that you upload the {{ op_system_first }} OVA on vSphere hosts. The machine from which you complete this process requires access to port 443 on the vCenter and ESXi hosts. You verified that port 443 is accessible.
*   If you use a firewall, you confirmed with the administrator that port 443 is accessible. Control plane nodes must be able to reach vCenter and ESXi hosts on port 443 for the installation to succeed.
*   If you use a firewall and plan to use the Telemetry service, you configured the firewall to allow the sites that your cluster requires access to.

    :::note

    Be sure to also review this site list if you are configuring a proxy.
    
    :::


{% leveloffset +1 %}{% include "./modules/installation-about-restricted-network.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/cluster-entitlements.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/installation-vsphere-regions-zones.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Additional VMware vSphere configuration parameters](/installing/installing_vsphere/installation-config-parameters-vsphere#installation-configuration-parameters-additional-vsphere_installation-config-parameters-vsphere)
*   [Deprecated VMware vSphere configuration parameters](/installing/installing_vsphere/installation-config-parameters-vsphere#deprecated-parameters-vsphere_installation-config-parameters-vsphere)
*   [vSphere automatic migration](/storage/container_storage_interface/persistent-storage-csi-migration#persistent-storage-csi-migration-sc-vsphere_persistent-storage-csi-migration)
*   [VMware vSphere CSI Driver Operator](/storage/container_storage_interface/persistent-storage-csi-vsphere#persistent-storage-csi-vsphere-top-aware_persistent-storage-csi-vsphere)

{% leveloffset +1 %}{% include "./modules/installation-initializing-manual.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Installation configuration parameters](/installing/installing_vsphere/installation-config-parameters-vsphere#installation-config-parameters-vsphere)

{% leveloffset +2 %}{% include "./modules/installation-vsphere-config-yaml.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/installation-configure-proxy.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/configuring-vsphere-regions-zones.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/installation-user-infra-generate-k8s-manifest-ignition.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/installation-special-config-chrony.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/installation-extracting-infraid.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/installation-vsphere-machines.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/machine-vsphere-machines.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/installation-disk-partitioning.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/installation-installing-bare-metal.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/cli-logging-in-kubeadmin.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/installation-approve-csrs.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/installation-operators-config.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/olm-restricted-networks-configuring-operatorhub.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/installation-registry-storage-config.md" %}{% endleveloffset %}

{% leveloffset +3 %}{% include "./modules/registry-configuring-storage-vsphere.md" %}{% endleveloffset %}

{% leveloffset +3 %}{% include "./modules/installation-registry-storage-non-production.md" %}{% endleveloffset %}

{% leveloffset +3 %}{% include "./modules/installation-registry-storage-block-recreate-rollout.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Configuring the registry for vSphere](/registry/configuring_registry_storage/configuring-registry-storage-vsphere#registry-configuring-storage-vsphere_configuring-registry-storage-vsphere)

{% leveloffset +1 %}{% include "./modules/installation-complete-user-infra.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Adding compute machines to vSphere](/machine_management/user_infra/adding-vsphere-compute-user-infra#adding-vsphere-compute-user-infra)

{% leveloffset +1 %}{% include "./modules/vsphere-anti-affinity.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/cluster-telemetry.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Preparing to install a cluster using user-provisioned infrastructure](/installing/installing_vsphere/upi/upi-vsphere-preparing-to-install#upi-vsphere-preparing-to-install)
*   [{{ product_title }} installation and update processes](/architecture/architecture-installation#architecture-installation)
*   [Selecting a cluster installation method and preparing it for users](/installing/overview/installing-preparing#installing-preparing)
*   [Creating a registry on your mirror host](/disconnected/installing-mirroring-installation-images#installing-mirroring-installation-images)
*   [Persistent storage](/storage/understanding-persistent-storage#understanding-persistent-storage)
*   [Configuring the firewall to allow required sites](/installing/install_config/configuring-firewall#configuring-firewall-module_configuring-firewall)
*   [About remote health monitoring](/support/remote_health_monitoring/about-remote-health-monitoring#about-remote-health-monitoring)
*   [Customize your cluster](/post_installation_configuration/cluster-tasks#available_cluster_customizations)
*   [Configuring additional trust stores for the mirror registry’s CA](/openshift_images/image-configuration#images-configuration-cas_image-configuration)
*   [Remote health reporting](/support/remote_health_monitoring/remote-health-reporting#remote-health-reporting)
*   [View the events from the vSphere Problem Detector Operator to determine if the cluster has permission or storage configuration issues](/installing/installing_vsphere/using-vsphere-problem-detector-operator#vsphere-problem-detector-viewing-events_vsphere-problem-detector)
*   [Creating an encrypted storage class for encrypted virtual machines](/storage/container_storage_interface/persistent-storage-csi-vsphere#vsphere-pv-encryption)