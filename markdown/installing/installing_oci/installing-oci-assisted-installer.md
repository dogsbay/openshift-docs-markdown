---
title: "Installing a cluster on {{ oci_distributed_no_rt }} by using the {{ ai_full }}"
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Installing a cluster on {{ oci_distributed_no_rt }} by using the {{ ai_full }} {id="installing-oci-assisted-installer"}
{%- set context = "installing-oci-assisted-installer" %}

You can use the {{ ai_full }} to install a cluster on {{ oci_distributed }}. This method is recommended for most users, and requires an internet connection.

If you want to set up the cluster manually or using other automation tools, or if you are working in a disconnected environment, you can use the Red Hat Agent-based Installer for the installation. For details, see "Installing a cluster on {{ oci_distributed_no_rt }} by using the Agent-based Installer".

{% leveloffset +1 %}{% include "./modules/installing-oci-distributed-infra-support.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/installing-oci-about-assisted-installer.md" %}{% endleveloffset %}

**Additional resources**

*   [Cloud instance types (Red&#160;Hat Ecosystem Catalog portal)](https://catalog.redhat.com/cloud/detail/216977)
*   [Volume Performance Units (Oracle documentation)](https://docs.oracle.com/en-us/iaas/Content/Block/Concepts/blockvolumeperformance.htm#vpus)
*   [Instance Sizing Recommendations for {{ product_title }} Nodes (Oracle documentation)](https://docs.oracle.com/en-us/iaas/Content/openshift-on-oci/installing-agent-about-instance-configurations.htm)
*   [{{ ai_full }} for {{ product_title }}](https://access.redhat.com/documentation/en-us/assisted_installer_for_openshift_container_platform/)
*   [Installing a Cluster with Red Hat’s {{ ai_full }} (Oracle documentation)](https://docs.oracle.com/en-us/iaas/Content/openshift-on-oci/installing-assisted.htm)
*   [Internet access for {{ product_title }}](/installing/installing_platform_agnostic/installing-platform-agnostic#cluster-entitlements_installing-platform-agnostic)

{% leveloffset +1 %}{% include "./modules/creating-oci-resources-services.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/using-assisted-installer-oci-discovery-iso.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/using-assisted-installer-oci-create-cluster.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/using-assisted-installer-oci-agent-iso.md" %}{% endleveloffset %}

**Additional resources**

*   [Installation and update](/architecture/architecture-installation#architecture-installation)
*   [Configuring your firewall](/installing/install_config/configuring-firewall#configuring-firewall-module_configuring-firewall)

{% leveloffset +1 %}{% include "./modules/provision-oci-infrastructure-ocp-cluster.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/complete-assisted-installer-remaining-steps.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/complete-assisted-installer-oci-node-roles.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/complete-assisted-installer-oci-custom-manifests.md" %}{% endleveloffset %}

**Additional resources**

*   [{{ ai_full }} for {{ product_title }}](https://access.redhat.com/documentation/en-us/assisted_installer_for_openshift_container_platform/)

{% leveloffset +1 %}{% include "./modules/verifying-cluster-install-ai-oci.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/installing-oci-adding-hosts-day-two.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/installing-troubleshooting-assisted-installer-oci.md" %}{% endleveloffset %}

## Additional resources {id="additional-resources_{{ context }}"}

*   [Installing a cluster on {{ oci_distributed_no_rt }} by using the Agent-based Installer](/installing/installing_oci/installing-oci-agent-based-installer#installing-oci-agent-based-installer)
*   [{{ hybrid_console }}](https://console.redhat.com/openshift/assisted-installer/clusters/~new)
*   [Troubleshooting {{ product_title }} on {{ oci }} (Oracle documentation)](https://docs.oracle.com/iaas/Content/openshift-on-oci/openshift-troubleshooting.htm)
*   [Installing an on-premise cluster using the {{ ai_full }}](/installing/installing_on_prem_assisted/installing-on-prem-assisted#installing-on-prem-assisted)