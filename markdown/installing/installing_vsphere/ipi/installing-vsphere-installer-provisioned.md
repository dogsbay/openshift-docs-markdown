---
title: Installing a cluster on vSphere
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Installing a cluster on vSphere {id="installing-vsphere-installer-provisioned"}
{%- set context = "installing-vsphere-installer-provisioned" %}

In {{ product_title }} version {{ product_version }}, you can install a cluster on your
VMware vSphere instance by using installer-provisioned infrastructure. {._abstract}

## Prerequisites {id="prerequisites_installing-vsphere-installer-provisioned_{{ context }}"}

*   You have completed the tasks in "Preparing to install a cluster using installer-provisioned infrastructure".
*   You reviewed your VMware platform licenses. Red&#160;Hat does not place any restrictions on your VMware licenses, but some VMware infrastructure components require licensing.
*   You reviewed details about the {{ product_title }} installation and update processes.
*   You read the documentation on selecting a cluster installation method and preparing it for users.
*   You provisioned persistent storage for your cluster. To deploy a private image registry, your storage must provide
`ReadWriteMany` access modes.
*   The {{ product_title }} installer requires access to port 443 on the vCenter and ESXi hosts. You verified that port 443 is accessible.
*   If you use a firewall, you confirmed with the administrator that port 443 is accessible. Control plane nodes must be able to reach vCenter and ESXi hosts on port 443 for the installation to succeed.
*   If you use a firewall, you configured it to allow the sites that your cluster requires access to.

    :::note

    Be sure to also review this site list if you are configuring a proxy.
    
    :::


{% leveloffset +1 %}{% include "./modules/cluster-entitlements.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/installation-launching-installer.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/cli-logging-in-kubeadmin.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/registry-removed.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/installation-registry-storage-config.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/registry-configuring-storage-vsphere.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/installation-registry-storage-block-recreate-rollout.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Configuring the registry for vSphere](/registry/configuring_registry_storage/configuring-registry-storage-vsphere#registry-configuring-storage-vsphere_configuring-registry-storage-vsphere)

{% leveloffset +1 %}{% include "./modules/cluster-telemetry.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Preparing to install a cluster using installer-provisioned infrastructure](/installing/installing_vsphere/ipi/ipi-vsphere-preparing-to-install#ipi-vsphere-preparing-to-install)
*   [{{ product_title }} installation and update processes](/architecture/architecture-installation#architecture-installation)
*   [Selecting a cluster installation method and preparing it for users](/installing/overview/installing-preparing#installing-preparing)
*   [Persistent storage](/storage/understanding-persistent-storage#understanding-persistent-storage)
*   [Configuring your firewall to allow required sites](/installing/install_config/configuring-firewall#configuring-firewall-module_configuring-firewall)
*   [About remote health monitoring](/support/remote_health_monitoring/about-remote-health-monitoring#about-remote-health-monitoring)
*   [Customize your cluster](/post_installation_configuration/cluster-tasks#available_cluster_customizations)
*   [Remote health reporting](/support/remote_health_monitoring/remote-health-reporting#remote-health-reporting)
*   [Set up your registry and configure registry storage](/registry/configuring_registry_storage/configuring-registry-storage-vsphere#configuring-registry-storage-vsphere)
*   [View the events from the vSphere Problem Detector Operator to determine if the cluster has permission or storage configuration issues](/installing/installing_vsphere/using-vsphere-problem-detector-operator#vsphere-problem-detector-viewing-events_vsphere-problem-detector)