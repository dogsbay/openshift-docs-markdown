---
title: "Installing a cluster on {{ oci_edge_no_rt }} by using the Agent-based Installer"
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Installing a cluster on {{ oci_edge_no_rt }} by using the Agent-based Installer {id="installing-c3-agent-based-installer"}
{%- set context = "installing-c3-agent-based-installer" %}

You can use the Agent-based Installer to install a cluster on {{ oci_edge }}, so that you can run cluster workloads on on-premise infrastructure while still using {{ oci_first }} services.

The following procedures describe a cluster installation on {{ oci_c3 }} as an example.

{% leveloffset +1 %}{% include "./modules/installing-oci-edge-infra-support.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/installing-oci-edge-agent-workflow.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/abi-c3-resources-services.md" %}{% endleveloffset %}

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

{% leveloffset +1 %}{% include "./modules/running-cluster-oci-c3-agent-based.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/verifying-cluster-install-oci-agent-based.md" %}{% endleveloffset %}

## Additional resources {id="additional-resources_{{ context }}"}

*   [Gathering log data from a failed Agent-based installation](/installing/installing_with_agent_based_installer/installing-with-agent-based-installer#installing-ocp-agent-gather-log_installing-with-agent-based-installer)
*   [Adding worker nodes to an on-premise cluster](/nodes/nodes/nodes-nodes-adding-node-iso#adding-node-iso)