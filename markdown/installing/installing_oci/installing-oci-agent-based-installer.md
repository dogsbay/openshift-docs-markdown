---
title: "Installing a cluster on {{ oci_distributed_no_rt }} by using the Agent-based Installer"
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Installing a cluster on {{ oci_distributed_no_rt }} by using the Agent-based Installer {id="installing-oci-agent-based-installer"}
{%- set context = "installing-oci-agent-based-installer" %}

You can use the Agent-based Installer to install a cluster on {{ oci_distributed }}, so that you can run cluster workloads on infrastructure that supports dedicated, hybrid, public, and multiple cloud environments.

Installing a cluster on {{ oci_distributed_no_rt }} is supported for virtual machines (VMs) and bare-metal machines.

{% leveloffset +1 %}{% include "./modules/installing-oci-distributed-infra-support.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/installing-oci-about-agent-based-installer.md" %}{% endleveloffset %}

**Additional resources**

*   [Installation process](/architecture/architecture-installation#installation-process_architecture-installation)
*   [Internet access for {{ product_title }}](/installing/installing_platform_agnostic/installing-platform-agnostic#cluster-entitlements_installing-platform-agnostic)
*   [Understanding the Agent-based Installer](/installing/installing_with_agent_based_installer/preparing-to-install-with-agent-based-installer#understanding-agent-install_preparing-to-install-with-agent-based-installer)
*   [Overview of the Compute Service (Oracle documentation)](https://docs.oracle.com/en-us/iaas/Content/Compute/Concepts/computeoverview.htm)
*   [Volume Performance Units (Oracle documentation)](https://docs.oracle.com/en-us/iaas/Content/Block/Concepts/blockvolumeperformance.htm#vpus)
*   [Instance Sizing Recommendations for {{ product_title }} Nodes (Oracle documentation)](https://docs.oracle.com/iaas/Content/openshift-on-oci/installing-agent-about-instance-configurations.htm)

{% leveloffset +1 %}{% include "./modules/installing-oci-agent-workflow.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/abi-oci-resources-services.md" %}{% endleveloffset %}

**Additional resources**

*   [Learn About Oracle Cloud Basics (Oracle documentation)](https://docs.oracle.com/en-us/iaas/Content/GSG/Concepts/concepts.htm)

{% leveloffset +1 %}{% include "./modules/creating-config-files-cluster-install-oci.md" %}{% endleveloffset %}

**Additional resources**

*   [About {{ product_title }} installation](/architecture/architecture-installation#installation-overview_architecture-installation)
*   [Selecting a cluster installation type](/installing/overview/installing-preparing#installing-preparing-selecting-cluster-type_installing-preparing)
*   [Preparing to install with the Agent-based Installer](/installing/installing_with_agent_based_installer/preparing-to-install-with-agent-based-installer#preparing-to-install-with-agent-based-installer)
*   [Downloading the Agent-based Installer](/installing/installing_with_agent_based_installer/installing-with-agent-based-installer#installing-ocp-agent-retrieve_installing-with-agent-based-installer)
*   [Creating a mirror registry with mirror registry for Red&#160;Hat OpenShift](/disconnected/installing-mirroring-creating-registry#installing-mirroring-creating-registry)
*   [Mirroring the {{ product_title }} image repository](/disconnected/installing-mirroring-installation-images#installation-mirror-repository_installing-mirroring-installation-images)
*   [Optional: Using ZTP manifests](/installing/installing_with_agent_based_installer/installing-with-agent-based-installer#installing-ocp-agent-ztp_installing-with-agent-based-installer)

{% leveloffset +1 %}{% include "./modules/configuring-firewall-module.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/running-cluster-oci-agent-based.md" %}{% endleveloffset %}

**Additional resources**

*   [Instance Sizing Recommendations for {{ product_title }} Nodes (Oracle documentation)](https://docs.oracle.com/iaas/Content/openshift-on-oci/installing-agent-about-instance-configurations.htm)
*   [Troubleshooting {{ product_title }} on {{ oci }} (Oracle documentation)](https://docs.oracle.com/iaas/Content/openshift-on-oci/openshift-troubleshooting.htm)

{% leveloffset +1 %}{% include "./modules/verifying-cluster-install-oci-agent-based.md" %}{% endleveloffset %}

## Additional resources {id="additional-resources_{{ context }}"}

*   [Gathering log data from a failed Agent-based installation](/installing/installing_with_agent_based_installer/installing-with-agent-based-installer#installing-ocp-agent-gather-log_installing-with-agent-based-installer)
*   [Adding worker nodes to an on-premise cluster](/nodes/nodes/nodes-nodes-adding-node-iso#adding-node-iso)