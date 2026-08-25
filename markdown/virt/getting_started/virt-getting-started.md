---
title: "Getting started with {{ VirtProductName }}"
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
# Getting started with {{ VirtProductName }} {id="virt-getting-started"}
{% include "./_attributes/common-attributes.md" %}
{%- set context = "virt-getting-started" %}

Explore {{ VirtProductName }} by taking guided tours, installing the Operator, and configuring a basic environment. Learn how to migrate from your current platform, then learn more about how to deploy and manage virtual machines (VMs) by following the additional resources links.


:::note

Cluster configuration procedures require `cluster-admin` privileges.

:::


{% if not (openshift_rosa or openshift_dedicated or openshift_rosa_hcp) %}
{% leveloffset +1 %}{% include "./modules/virt-getting-started-tour.md" %}{% endleveloffset %}
{% leveloffset +1 %}{% include "./modules/virt-quick-starts.md" %}{% endleveloffset %}
{% endif %}

{% if not (openshift_rosa or openshift_dedicated or openshift_rosa_hcp or openshift_origin) %}
{% leveloffset +1 %}{% include "./modules/about-self-service-tsr.md" %}{% endleveloffset %}
{% endif %}

## Additional resources {id="_additional_resources"}
{%- if not (openshift_rosa or openshift_dedicated or openshift_rosa_hcp) %}
*   [Plan your bare-metal cluster for {{ VirtProductName }}](/installing/installing_bare_metal/preparing-to-install-on-bare-metal#virt-planning-bare-metal-cluster-for-ocp-virt_preparing-to-install-on-bare-metal)
{%- endif %}
*   [Prepare your cluster for {{ VirtProductName }}](/virt/install/preparing-cluster-for-virt#preparing-cluster-for-virt)
{%- if openshift_enterprise %}
*   [Learn about storage volumes for VM disks](/virt/install/preparing-cluster-for-virt#virt-about-storage-volumes-for-vm-disks_virt-requirements)
{%- endif %}
*   [Use a CSI-enabled storage provider](/storage/container_storage_interface/persistent-storage-csi#persistent-storage-csi)
*   [Configure local storage for virtual machines](/virt/storage/virt-configuring-local-storage-with-hpp#virt-configuring-local-storage-with-hpp)
*   [Install the {{ VirtProductName }} Operator](/virt/install/installing-virt#virt-installing-virt-operator_installing-virt)
{%- if not (openshift_rosa or openshift_dedicated or openshift_rosa_hcp) %}
*   [Install the Kubernetes NMState Operator](/networking/networking_operators/k8s-nmstate-about-the-k8s-nmstate-operator#installing-the-kubernetes-nmstate-operator-cli_k8s-nmstate-about-the-k8s-nmstate-operator)
{%- endif %}
*   [Specify nodes for virtual machines](/virt/managing_vms/advanced_vm_management/virt-specifying-nodes-for-vms#virt-specifying-nodes-for-vms)
*   [Install and use the `virtctl` command-line interface (CLI) tool](/virt/getting_started/virt-using-the-cli-tools#virt-using-the-cli-tools)
*   [Create a VM from a Red&#160;Hat image](/virt/creating_vm/virt-creating-vms-from-rh-images-overview#virt-creating-vms-from-rh-images-overview)
*   [Create a VM from an instance type](/virt/creating_vm/virt-creating-vms-from-instance-types#virt-creating-vms-from-instance-types)
*   [Import a custom image from a web page](/virt/creating_vm/virt-creating-vms-from-web-images#virt-creating-vms-from-web-images)
*   [Upload an image from your local machine](/virt/creating_vm/virt-creating-vms-uploading-images#virt-creating-vms-uploading-images)
*   [Clone a persistent volume claim (PVC)](/virt/creating_vm/virt-creating-vms-by-cloning-pvcs#virt-creating-vms-by-cloning-pvcs)
{%- if not (openshift_rosa or openshift_dedicated or openshift_rosa_hcp) %}
*   [Connect a VM to a Linux bridge network](/virt/vm_networking/virt-connecting-vm-to-linux-bridge#virt-connecting-vm-to-linux-bridge)
{% endif %}
{% if not openshift_dedicated %}
*   [Connect a VM to an Open Virtual Network (OVN)-Kubernetes secondary network](/virt/vm_networking/virt-connecting-vm-to-ovn-secondary-network#virt-connecting-vm-to-ovn-secondary-network)
{% endif %}
{% if not (openshift_rosa or openshift_dedicated or openshift_rosa_hcp) %}
*   [Connect a VM to a Single Root I/O Virtualization (SR-IOV) network](/virt/vm_networking/virt-connecting-vm-to-sriov#virt-connecting-vm-to-sriov)
{%- endif %}
*   [Connect to a virtual machine console](/virt/managing_vms/virt-accessing-vm-consoles#virt-accessing-vm-consoles)
{%- if not openshift_dedicated %}
*   [SSH access for virtual machines](/virt/managing_vms/ssh/virt-accessing-vm-ssh#virt-accessing-vm-ssh)
{%- endif %}
*   [Connect to the desktop viewer by using the web console](/virt/managing_vms/virt-accessing-vm-consoles#virt-connecting-desktop-viewer-web_virt-accessing-vm-consoles)
*   [Manage a VM by using the web console](/virt/managing_vms/virt-controlling-vm-states#virt-controlling-vm-states)
*   [Export a VM](/virt/managing_vms/virt-exporting-vms#virt-accessing-exported-vm-manifests_virt-exporting-vms)
*   [Review post-installation configuration options](/virt/post_installation_configuration/virt-post-install-config#virt-post-install-config)
*   [Configure storage options and automatic boot source updates](/virt/storage/virt-storage-config-overview#virt-storage-config-overview)
*   [Learn about monitoring and health checks](/virt/monitoring/virt-monitoring-overview#virt-monitoring-overview)
*   [Learn about live migration](/virt/live_migration/virt-about-live-migration#virt-about-live-migration)
{%- if not (openshift_rosa or openshift_dedicated or openshift_rosa_hcp) %}
*   [Back up and restore VMs by using the {{ oadp_first }}](/backup_and_restore/application_backup_and_restore/installing/installing-oadp-kubevirt#installing-oadp-kubevirt)
{% endif %}
{% if not openshift_dedicated %}
*   [Tune and scale your cluster](https://access.redhat.com/articles/6994974)
{% endif %}