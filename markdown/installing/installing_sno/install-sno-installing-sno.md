---
title: Installing OpenShift on a single node
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
# Installing OpenShift on a single node {id="install-sno-installing-sno"}
{%- set context = "install-sno-installing-sno-with-the-assisted-installer" %}
{% include "./_attributes/common-attributes.md" %}

{% if openshift_origin %}
You can install {{ sno_okd }} using the Assisted Service or you can generate an installation ISO using `openshift-installer`.
{% endif %}

{% if not openshift_origin %}
You can install {{ sno }} by using either the web-based Assisted Installer or the `coreos-installer` tool to generate a discovery ISO image.

The discovery ISO image writes the {{ op_system_first }} system configuration to the target installation disk, so that you can run a single-cluster node to meet your needs.

Consider using {{ sno }} when you want to run a cluster in a low-resource or an isolated environment for testing, troubleshooting, training, or small-scale project purposes.

{% leveloffset +1 %}{% include "./modules/install-sno-assisted-installer.md" %}{% endleveloffset %}

**Additional resources**

*   [Installing {{ product_title }} with the Assisted Installer](https://docs.redhat.com/en/documentation/assisted_installer_for_openshift_container_platform/2026/html/installing_openshift_container_platform_with_the_assisted_installer/index)

{% leveloffset +2 %}{% include "./modules/install-sno-generating-the-discovery-iso-with-the-assisted-installer.md" %}{% endleveloffset %}

**Additional resources**

*   [Persistent storage using logical volume manager storage](/storage/persistent_storage_local/persistent-storage-using-lvms#persistent-storage-using-lvms_logical-volume-manager-storage)
*   [What you can do with OpenShift Virtualization](/virt/about_virt/about-virt#virt-what-you-can-do-with-virt_about-virt)

{% leveloffset +2 %}{% include "./modules/install-sno-installing-with-the-assisted-installer.md" %}{% endleveloffset %}

{% endif %}

{% if openshift_origin %}
{% leveloffset +1 %}{% include "./modules/install-sno-okd-assisted-service.md" %}{% endleveloffset %}

{% endif %}

{% if openshift_origin %}

**Additional resources**

*   [Install OKD using Assisted Service](https://github.com/openshift/assisted-service/tree/master/deploy/podman#okd-configuration)
*   [Creating a bootable ISO image on a USB drive](/installing/installing_sno/install-sno-installing-sno#installing-with-usb-media_install-sno-installing-sno-with-the-assisted-installer)
*   [Adding worker nodes to {{ sno_okd }} clusters](/nodes/nodes/nodes-sno-worker-nodes#nodes-sno-worker-nodes)
{% endif %}

{% if not openshift_origin %}

**Additional resources**

*   [Creating a bootable ISO image on a USB drive](/installing/installing_sno/install-sno-installing-sno#installing-with-usb-media_install-sno-installing-sno-with-the-assisted-installer)
*   [Booting from an HTTP-hosted ISO image using the Redfish API](/installing/installing_sno/install-sno-installing-sno#install-booting-from-an-iso-over-http-redfish_install-sno-installing-sno-with-the-assisted-installer)
*   [Adding worker nodes to {{ sno }} clusters](/nodes/nodes/nodes-sno-worker-nodes#nodes-sno-worker-nodes)
{% endif %}

{% if not openshift_origin %}
{% leveloffset +1 %}{% include "./modules/install-sno-manual.md" %}{% endleveloffset %}
{% endif %}
{% if openshift_origin %}
{% leveloffset +1 %}{% include "./modules/install-sno-okd-manual.md" %}{% endleveloffset %}
{% endif %}

**Additional resources**

*   [Networking requirements for user-provisioned infrastructure](/installing/installing_bare_metal/upi/installing-bare-metal-network-customizations#installation-network-user-infra_installing-bare-metal-network-customizations)
*   [User-provisioned DNS requirements](/installing/installing_bare_metal/upi/installing-bare-metal-network-customizations#installation-dns-user-infra_installing-bare-metal-network-customizations)
*   [Configuring DHCP or static IP addresses](/installing/installing_bare_metal/upi/installing-bare-metal-network-customizations#configuring-dhcp-or-static-ip-addresses_installing-bare-metal-network-customizations)

{% leveloffset +2 %}{% include "./modules/install-sno-generating-the-install-iso-manually.md" %}{% endleveloffset %}

**Additional resources**

*   [Requirements for installing OpenShift on a single node](/installing/installing_sno/install-sno-preparing-to-install-sno#preparing-to-install-sno)
*   [Cluster capabilities](/installing/overview/cluster-capabilities#cluster-capabilities)
*   [Optional cluster capabilities in {{ product_title }} {{ product_version }}](/installing/overview/cluster-capabilities#explanation_of_capabilities_cluster-capabilities)

{% leveloffset +2 %}{% include "./modules/install-sno-monitoring-the-installation-manually.md" %}{% endleveloffset %}

**Additional resources**

*   [Creating a bootable ISO image on a USB drive](/installing/installing_sno/install-sno-installing-sno#installing-with-usb-media_install-sno-installing-sno-with-the-assisted-installer)
{%- if openshift_origin %}
*   [Adding worker nodes to {{ sno_okd }} clusters](/nodes/nodes/nodes-sno-worker-nodes#nodes-sno-worker-nodes)
{% endif %}
{% if not openshift_origin %}
*   [Booting from an HTTP-hosted ISO image using the Redfish API](/installing/installing_sno/install-sno-installing-sno#install-booting-from-an-iso-over-http-redfish_install-sno-installing-sno-with-the-assisted-installer)
*   [Adding worker nodes to {{ sno }} clusters](/nodes/nodes/nodes-sno-worker-nodes#nodes-sno-worker-nodes)

{% leveloffset +1 %}{% include "./modules/install-sno-agent.md" %}{% endleveloffset %}

**Additional resources**

*   [Preparing to install with the Agent-based Installer](/installing/installing_with_agent_based_installer/preparing-to-install-with-agent-based-installer#preparing-to-install-with-agent-based-installer)

{% leveloffset +2 %}{% include "./modules/install-sno-installing-with-agent-based-installer.md" %}{% endleveloffset %}
{% endif %}

{% leveloffset +1 %}{% include "./modules/install-sno-additional-requirements-for-installing-sno-on-a-cloud-provider.md" %}{% endleveloffset %}

**Additional resources**

*   [Cluster capabilities](/installing/overview/cluster-capabilities#cluster-capabilities)

{% leveloffset +1 %}{% include "./modules/install-sno-supported-cloud-providers-for-single-node-openshift.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/installation-aws_con_installing-sno-on-aws.md" %}{% endleveloffset %}

**Additional resources**

*   [Installing a cluster on AWS with customizations](/installing/installing_aws/ipi/installing-aws-customizations#installing-aws-customizations)

{% leveloffset +1 %}{% include "./modules/install-sno-installing-sno-on-azure.md" %}{% endleveloffset %}

**Additional resources**

*   [Installing a cluster on Azure with customizations](/installing/installing_azure/ipi/installing-azure-customizations#installing-azure-customizations)

{% leveloffset +1 %}{% include "./modules/install-sno-installing-sno-on-gcp.md" %}{% endleveloffset %}

**Additional resources**

*   [Installing a cluster on {{ gcp_short }} with customizations](/installing/installing_gcp/installing-gcp-customizations#installing-gcp-customizations)

{% leveloffset +1 %}{% include "./modules/install-sno-installing-with-usb-media.md" %}{% endleveloffset %}

{% if not openshift_origin %}
{% leveloffset +1 %}{% include "./modules/install-booting-from-an-iso-over-http-redfish.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/creating-custom-live-rhcos-iso.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/install-sno-ibm-z-linuxone.md" %}{% endleveloffset %}

**Additional resources**

*   [Installing a cluster with z/VM on {{ ibm_z_name }} and {{ ibm_linuxone_name }}](/installing/installing_ibm_z/upi/installing-ibm-z#installing-ibm-z)
*   [Installing a cluster with {{ op_system_base }} KVM on {{ ibm_z_name }} and {{ ibm_linuxone_name }}](/installing/installing_ibm_z/upi/installing-ibm-z-kvm#installing-ibm-z-kvm)
*   [Installing a cluster in an LPAR on {{ ibm_z_name }} and {{ ibm_linuxone_name }}](/installing/installing_ibm_z/upi/installing-ibm-z-lpar#installing-ibm-z-lpar)

{% leveloffset +2 %}{% include "./modules/install-sno-ibm-z.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/install-sno-ibm-z-kvm.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/install-sno-ibm-z-lpar.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/install-sno-ibm-power-stub.md" %}{% endleveloffset %}

**Additional resources**

*   [Installing a cluster on {{ ibm_power_name }}](/installing/installing_ibm_power/installing-ibm-power#installing-ibm-power)

{% leveloffset +2 %}{% include "./modules/setting-up-bastion-for-sno.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/install-sno-ibm-power.md" %}{% endleveloffset %}

{% endif %}