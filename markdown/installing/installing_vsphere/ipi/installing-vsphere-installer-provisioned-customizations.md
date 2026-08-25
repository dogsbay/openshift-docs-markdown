---
title: Installing a cluster on vSphere with customizations
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
# Installing a cluster on vSphere with customizations {id="installing-vsphere-installer-provisioned-customizations"}
{% include "./_attributes/common-attributes.md" %}
{%- set context = "installing-vsphere-installer-provisioned-customizations" -%}
{%- set platform = "vSphere" %}

In {{ product_title }} version {{ product_version }}, you can install a cluster on your
{{ vmw_first }} instance by using installer-provisioned infrastructure with customizations, including network configuration options. In each, you modify parameters in the `install-config.yaml` file before you install the cluster.

By customizing your network configuration, your cluster can coexist with existing IP address allocations in your environment and integrate with existing MTU and VXLAN configurations.

You must set most of the network configuration parameters during installation, and you can modify only `kubeProxy` configuration parameters in a running cluster.

## Prerequisites {id="prerequisites_installing-vsphere-installer-provisioned-customizations"}

*   You have completed the tasks in "Preparing to install a cluster using installer-provisioned infrastructure".
*   You reviewed your {{ vmw_short }} platform licenses. Red&#160;Hat does not place any restrictions on your {{ vmw_short }} licenses, but some {{ vmw_short }} infrastructure components require licensing.
*   You reviewed details about the {{ product_title }} installation and update processes.
*   You read the documentation on selecting a cluster installation method and preparing it for users.
*   You provisioned persistent storage for your cluster. To deploy a private image registry, your storage must provide `ReadWriteMany` access modes.
*   The {{ product_title }} installer requires access to port 443 on the vCenter and ESXi hosts. You verified that port 443 is accessible.
*   If you use a firewall, you confirmed with the administrator that port 443 is accessible. Control plane nodes must be able to reach vCenter and ESXi hosts on port 443 for the installation to succeed.
*   If you use a firewall, you configured it to allow the sites that your cluster requires access to.

    :::note

    Be sure to also review this site list if you are configuring a proxy.
    
    :::


{% leveloffset +1 %}{% include "./modules/cluster-entitlements.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/installation-vsphere-regions-zones.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/installation-vsphere-regions-zones-host-groups.md" %}{% endleveloffset %}

**Additional resources**

*   [Additional {{ vmw_full }} configuration parameters](/installing/installing_vsphere/installation-config-parameters-vsphere#installation-configuration-parameters-additional-vsphere_installation-config-parameters-vsphere)
*   [Deprecated {{ vmw_full }} configuration parameters](/installing/installing_vsphere/installation-config-parameters-vsphere#deprecated-parameters-vsphere_installation-config-parameters-vsphere)
*   [{{ vmw_short }} automatic migration](/storage/container_storage_interface/persistent-storage-csi-migration#persistent-storage-csi-migration-sc-vsphere_persistent-storage-csi-migration)
*   [{{ vmw_full }} CSI Driver Operator](/storage/container_storage_interface/persistent-storage-csi-vsphere#persistent-storage-csi-vsphere-top-aware_persistent-storage-csi-vsphere)

{% leveloffset +1 %}{% include "./modules/installation-initializing.md" %}{% endleveloffset %}

**Additional resources**

*   [Installation configuration parameters](/installing/installing_vsphere/installation-config-parameters-vsphere#installation-config-parameters-vsphere)

{% leveloffset +2 %}{% include "./modules/installation-vsphere-config-yaml.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/installation-configure-proxy.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/ipi-install-modifying-install-config-for-dual-stack-network.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/configuring-vsphere-regions-zones.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/configuring-vsphere-host-groups.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/installation-vsphere-multiple-nics.md" %}{% endleveloffset %}

**Additional resources**

*   [Network configuration parameters](/installing/installing_vsphere/installation-config-parameters-vsphere#installation-configuration-parameters-network_installation-config-parameters-vsphere)

{% leveloffset +1 %}{% include "./modules/nw-network-config.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/nw-modifying-operator-install-config.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/nw-operator-vsphere-multiple-subnets.md" %}{% endleveloffset %}

**Additional resources**

*   [`.spec.platformSpec.vsphere.nodeNetworking`](/rest_api/config_apis/infrastructure-config-openshift-io-v1#spec-platformspec-vsphere-nodenetworking)

{% leveloffset +1 %}{% include "./modules/nw-operator-cr.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/nw-osp-services-external-load-balancer.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/nw-osp-configuring-external-load-balancer.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/installation-launching-installer.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/cli-logging-in-kubeadmin.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/registry-removed.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/installation-registry-storage-config.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/registry-configuring-storage-vsphere.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/installation-registry-storage-block-recreate-rollout.md" %}{% endleveloffset %}

**Additional resources**

*   [Configuring the registry for vSphere](/registry/configuring_registry_storage/configuring-registry-storage-vsphere#registry-configuring-storage-vsphere_configuring-registry-storage-vsphere)

{% leveloffset +1 %}{% include "./modules/cluster-telemetry.md" %}{% endleveloffset %}

**Additional resources**

*   [About remote health monitoring](/support/remote_health_monitoring/about-remote-health-monitoring#about-remote-health-monitoring)

{% leveloffset +1 %}{% include "./modules/ipi-install-configure-network-components-to-run-on-the-control-plane.md" %}{% endleveloffset %}

**Additional resources**

*   [Preparing to install a cluster using installer-provisioned infrastructure](/installing/installing_vsphere/ipi/ipi-vsphere-preparing-to-install#ipi-vsphere-preparing-to-install)
*   [{{ product_title }} installation and update processes](/architecture/architecture-installation#architecture-installation)
*   [Selecting a cluster installation method and preparing it for users](/installing/overview/installing-preparing#installing-preparing)
*   [Persistent storage](/storage/understanding-persistent-storage#understanding-persistent-storage)
*   [Configuring your firewall to allow required sites](/installing/install_config/configuring-firewall#configuring-firewall-module_configuring-firewall)
*   [Customize your cluster](/post_installation_configuration/cluster-tasks#available_cluster_customizations)
*   [Remote health reporting](/support/remote_health_monitoring/remote-health-reporting#remote-health-reporting)
*   [Set up your registry and configure registry storage](/registry/configuring_registry_storage/configuring-registry-storage-vsphere#configuring-registry-storage-vsphere)
*   [View the events from the {{ vmw_short }} Problem Detector Operator to determine if the cluster has permission or storage configuration issues](/installing/installing_vsphere/using-vsphere-problem-detector-operator#vsphere-problem-detector-viewing-events_vsphere-problem-detector)