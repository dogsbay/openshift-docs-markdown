---
title: Installing {{ VirtProductName }}
---

# Installing {{ VirtProductName }} {#installing-virt}

Install {{ VirtProductName }} to add virtualization functionality to your OpenShift Container Platform cluster.

> [!IMPORTANT]
> If you install {{ VirtProductName }} in a restricted environment with no internet connectivity, you must configure {{ olm_first }} for a disconnected environment.
>
> If you have limited internet connectivity, you can configure proxy support in {{ olm }} to access the software catalog.

{% include "./modules/virt-installing-virt-operator.md" %}

## Additional resources {#additional-resources_installing-virt}

- [Installing a cluster for {{ VirtProductName }} using the Agent-based Installer](/openshift-docs-markdown/installing/installing_with_agent_based_installer/installing-ove#installing-ove)
- [Installing with the virtualization operator bundle (Assisted Installer)](https://docs.redhat.com/en/documentation/assisted_installer_for_openshift_container_platform/2026/html/installing_openshift_container_platform_with_the_assisted_installer/customizing-with-bundles-and-operators#openshift-virtualization-operator_customizing-with-bundles-and-operators)
- [Using Operator Lifecycle Manager in disconnected environments](/openshift-docs-markdown/disconnected/using-olm#olm-restricted-networks)
- [Configuring proxy support in Operator Lifecycle Manager](/openshift-docs-markdown/operators/admin/olm-configuring-proxy-support#olm-configuring-proxy-support)
- [Self validation checkup](/openshift-docs-markdown/virt/post_installation_configuration/virt-self-validation-checkups#virt-self-validation-checkups)
- [Configure certificate rotation](/openshift-docs-markdown/virt/post_installation_configuration/virt-configuring-certificate-rotation#virt-configuring-certificate-rotation)
- [Creating a hostpath provisioner with a basic storage pool](/openshift-docs-markdown/virt/storage/virt-configuring-local-storage-with-hpp#virt-creating-hpp-basic-storage-pool_virt-configuring-local-storage-with-hpp)
