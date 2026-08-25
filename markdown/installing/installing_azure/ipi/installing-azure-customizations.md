---
title: Installing a cluster on Azure with customizations
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
# Installing a cluster on Azure with customizations {id="installing-azure-customizations"}
{% include "./_attributes/common-attributes.md" %}
{%- set context = "installing-azure-customizations" -%}
{%- set platform = "Azure" %}

In {{ product_title }} version {{ product_version }}, you can install a cluster with a customized configuration or a customized network configuration on infrastructure that the installation program provisions on {{ azure_first }}. To install a cluster with customizations or with network customizations, modify parameters in the `install-config.yaml` file before you install the cluster. By customizing your network configuration, your cluster can coexist with existing IP address allocations in your environment and integrate with existing MTU and VXLAN configurations. You must set most of the network configuration parameters during installation, and you can modify only the `kubeProxy` configuration parameters in a running cluster.

{% leveloffset +1 %}{% include "./modules/installation-azure-marketplace-subscribe.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/installation-initializing.md" %}{% endleveloffset %}

**Additional resources**

*   [Installation configuration parameters for Azure](/installing/installing_azure/installation-config-parameters-azure#installation-config-parameters-azure)

{% leveloffset +2 %}{% include "./modules/installation-minimum-resource-requirements.md" %}{% endleveloffset %}

**Additional resources**

*   [Optimizing storage](/scalability_and_performance/optimization/optimizing-storage#optimizing-storage)

{% leveloffset +2 %}{% include "./modules/installation-azure-tested-machine-types.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/installation-azure-arm-tested-machine-types.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/installation-azure-trusted-launch.md" %}{% endleveloffset %}

**Additional resources**

*   [Secure Boot (Microsoft Azure documentation)](https://learn.microsoft.com/en-us/azure/virtual-machines/trusted-launch#secure-boot)
*   [virtualized Trusted Platform Modules (Microsoft Azure documentation)](https://learn.microsoft.com/en-us/windows/security/hardware-security/tpm/trusted-platform-module-overview)
*   [Virtual machine sizes (Microsoft Azure documentation)](https://learn.microsoft.com/en-us/azure/virtual-machines/trusted-launch#virtual-machines-sizes)

{% leveloffset +2 %}{% include "./modules/installation-azure-confidential-vms.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/installation-azure-dedicated-disks.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/installing-azure-managing-dns-solution.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/installation-azure-config-yaml-simple.md" %}{% endleveloffset %}

**Additional resources**

*   [Installation configuration parameters for Azure](/installing/installing_azure/installation-config-parameters-azure#installation-config-parameters-azure)

{% leveloffset +2 %}{% include "./modules/installation-configure-proxy.md" %}{% endleveloffset %}

**Additional resources**

*   For more details about Accelerated Networking, see [Accelerated Networking for Microsoft Azure VMs](/machine_management/creating_machinesets/creating-machineset-azure#machineset-azure-accelerated-networking_creating-machineset-azure).

{% leveloffset +1 %}{% include "./modules/nw-network-config.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/nw-modifying-operator-install-config.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/nw-operator-cr.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/configuring-hybrid-ovnkubernetes.md" %}{% endleveloffset %}


:::note

For more information about using Linux and Windows nodes in the same cluster, see [Understanding Windows container workloads](/windows_containers/understanding-windows-container-workloads#understanding-windows-container-workloads).

:::


**Additional resources**

*   For more details about Accelerated Networking, see [Accelerated Networking for Microsoft Azure VMs](/machine_management/creating_machinesets/creating-machineset-azure#machineset-azure-accelerated-networking_creating-machineset-azure).

{% leveloffset +1 %}{% include "./modules/installation-user-defined-tags-azure.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/installation-creating-user-defined-tags-azure.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/installation-user-defined-tags-requirements-azure.md" %}{% endleveloffset %}

## Alternatives to storing administrator-level secrets in the kube-system project {id="installing-azure-manual-modes_{{ context }}"}

By default, administrator secrets are stored in the `kube-system` project. If you configured the `credentialsMode` parameter in the `install-config.yaml` file to `Manual`, you must use one of the following alternatives:

*   To manage long-term cloud credentials manually, follow the procedure in [Manually creating long-term credentials](/installing/installing_azure/ipi/installing-azure-customizations#manually-create-iam_installing-azure-customizations).
*   To implement short-term credentials that are managed outside the cluster for individual components, follow the procedures in [Configuring an Azure cluster to use short-term credentials](/installing/installing_azure/ipi/installing-azure-customizations#installing-azure-with-short-term-creds_installing-azure-customizations).

{% leveloffset +2 %}{% include "./modules/manually-create-identity-access-management.md" %}{% endleveloffset %}

### Configuring an Azure cluster to use short-term credentials {id="installing-azure-with-short-term-creds_{{ context }}"}

To install a cluster that uses {{ entra_first }}, you must configure the Cloud Credential Operator utility and create the required Azure resources for your cluster.

{% leveloffset +3 %}{% include "./modules/cco-ccoctl-configuring.md" %}{% endleveloffset %}

{% leveloffset +3 %}{% include "./modules/cco-ccoctl-creating-at-once.md" %}{% endleveloffset %}

{% leveloffset +3 %}{% include "./modules/cco-ccoctl-install-creating-manifests.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/installation-launching-installer.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/installing-azure-provisioning-dns-records.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/cli-logging-in-kubeadmin.md" %}{% endleveloffset %}

**Additional resources**

*   [Accessing the web console](/web_console/web-console#web-console)

## Next steps {id="_next_steps"}

*   [Customize your cluster](/post_installation_configuration/cluster-tasks#available_cluster_customizations).
*   If necessary, you can
[Remote health reporting](/support/remote_health_monitoring/remote-health-reporting#remote-health-reporting).