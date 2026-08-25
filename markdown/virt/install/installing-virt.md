---
title: "Installing {{ VirtProductName }}"
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Installing {{ VirtProductName }} {id="installing-virt"}
{%- set context = "installing-virt" %}

Install {{ VirtProductName }} to add virtualization functionality to your {{ product_title }} cluster.

{% if not (openshift_rosa or openshift_dedicated or openshift_rosa_hcp) %}

:::important

If you install {{ VirtProductName }} in a restricted environment with no internet connectivity, you must configure {{ olm_first }} for a disconnected environment.

If you have limited internet connectivity, you can configure proxy support in {{ olm }} to access the software catalog.

:::


{% leveloffset +1 %}{% include "./modules/virt-about-installation-methods.md" %}{% endleveloffset %}
{% endif %}

{% leveloffset +1 %}{% include "./modules/virt-installing-virt-operator.md" %}{% endleveloffset %}
{% leveloffset +1 %}{% include "./modules/virt-subscribing-cli.md" %}{% endleveloffset %}
{% leveloffset +1 %}{% include "./modules/virt-deploying-operator-cli.md" %}{% endleveloffset %}

## Additional resources {id="additional-resources_{{ context }}"}
{%- if openshift_enterprise %}
*   [Installing a cluster for {{ VirtProductName }} using the Agent-based Installer](/installing/installing_with_agent_based_installer/installing-ove#installing-ove)
*   [Installing with the virtualization operator bundle (Assisted Installer)](https://docs.redhat.com/en/documentation/assisted_installer_for_openshift_container_platform/2026/html/installing_openshift_container_platform_with_the_assisted_installer/customizing-with-bundles-and-operators#openshift-virtualization-operator_customizing-with-bundles-and-operators)
*   [Using Operator Lifecycle Manager in disconnected environments](/disconnected/using-olm#olm-restricted-networks)
*   [Configuring proxy support in Operator Lifecycle Manager](/operators/admin/olm-configuring-proxy-support#olm-configuring-proxy-support)
*   [Self validation checkup](/virt/post_installation_configuration/virt-self-validation-checkups#virt-self-validation-checkups)
{% endif %}
{% if openshift_rosa or openshift_rosa_hcp %}
*   [Creating a machine pool](/rosa_cluster_admin/rosa_nodes/rosa-managing-worker-nodes#creating_a_machine_pool_rosa-managing-worker-nodes)
{% endif %}
{% if openshift_dedicated %}
*   [Creating a machine pool](/osd_cluster_admin/osd_nodes/osd-managing-worker-nodes#creating_machine_pools_ocm_osd-managing-worker-nodes)
{%- endif %}
*   [Configure certificate rotation](/virt/post_installation_configuration/virt-configuring-certificate-rotation#virt-configuring-certificate-rotation)
*   [Creating a hostpath provisioner with a basic storage pool](/virt/storage/virt-configuring-local-storage-with-hpp#virt-creating-hpp-basic-storage-pool_virt-configuring-local-storage-with-hpp)