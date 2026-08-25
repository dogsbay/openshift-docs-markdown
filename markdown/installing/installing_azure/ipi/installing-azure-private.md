---
title: Installing a private cluster on Azure
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Installing a private cluster on Azure {id="installing-azure-private"}
{%- set context = "installing-azure-private" %}

In {{ product_title }} version {{ product_version }}, you can install a private cluster into an existing {{ azure_short }} Virtual Network (VNet) on {{ azure_full }}. The installation program provisions the rest of the required infrastructure, which you can further customize. To customize the installation, you modify parameters in the `install-config.yaml` file before you install the cluster. {._abstract}

{% leveloffset +1 %}{% include "./modules/private-clusters-default.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/private-clusters-about-azure.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/installation-azure-user-defined-routing.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/installation-about-custom-azure-vnet.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/installation-about-custom-azure-vnet-requirements.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/installation-about-custom-azure-permissions.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/installation-about-custom-azure-vnet-isolation.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [About the OVN-Kubernetes network plugin](/networking/ovn_kubernetes_network_provider/about-ovn-kubernetes#about-ovn-kubernetes)
*   [Configuring your firewall](/installing/install_config/configuring-firewall#configuring-firewall-module_configuring-firewall)
*   [Availability zones](https://azure.microsoft.com/en-us/global-infrastructure/availability-zones/)
*   [Regions](https://azure.microsoft.com/en-us/global-infrastructure/regions/)

{% leveloffset +1 %}{% include "./modules/installation-initializing-manual.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Installation configuration parameters for Azure](/installing/installing_azure/installation-config-parameters-azure#installation-config-parameters-azure)

{% leveloffset +2 %}{% include "./modules/installation-minimum-resource-requirements.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Optimizing storage](/scalability_and_performance/optimization/optimizing-storage#optimizing-storage)

{% leveloffset +2 %}{% include "./modules/installation-azure-tested-machine-types.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/installation-azure-arm-tested-machine-types.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/installation-azure-trusted-launch.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/installation-azure-confidential-vms.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/installing-azure-managing-dns-solution.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/installation-azure-config-yaml-simple.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Installation configuration parameters for Azure](/installing/installing_azure/installation-config-parameters-azure#installation-config-parameters-azure)

{% leveloffset +2 %}{% include "./modules/installation-configure-proxy.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   For more details about Accelerated Networking, see [Accelerated Networking for Microsoft Azure VMs](/machine_management/creating_machinesets/creating-machineset-azure#machineset-azure-accelerated-networking_creating-machineset-azure).

## Alternatives to storing administrator-level secrets in the kube-system project {id="installing-azure-manual-modes_{{ context }}" ._additional-resources}

By default, administrator secrets are stored in the `kube-system` project. If you configured the `credentialsMode` parameter in the `install-config.yaml` file to `Manual`, you must use one of the following alternatives:

*   To manage long-term cloud credentials manually, follow the procedure in [Manually creating long-term credentials](/installing/installing_azure/ipi/installing-azure-private#manually-create-iam_installing-azure-private).
*   To implement short-term credentials that are managed outside the cluster for individual components, follow the procedures in [Configuring an Azure cluster to use short-term credentials](/installing/installing_azure/ipi/installing-azure-private#installing-azure-with-short-term-creds_installing-azure-private).

{% leveloffset +2 %}{% include "./modules/manually-create-identity-access-management.md" %}{% endleveloffset %}

### Configuring an Azure cluster to use short-term credentials {id="installing-azure-with-short-term-creds_{{ context }}"}

To install a cluster that uses {{ entra_first }}, you must configure the Cloud Credential Operator utility and create the required Azure resources for your cluster.

{% leveloffset +3 %}{% include "./modules/cco-ccoctl-configuring.md" %}{% endleveloffset %}

{% leveloffset +3 %}{% include "./modules/cco-ccoctl-creating-at-once.md" %}{% endleveloffset %}

{% leveloffset +3 %}{% include "./modules/cco-ccoctl-install-creating-manifests.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/installing-private-image-registry-private-azure.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   For the list of permissions needed to create a private storage endpoint, see [Required Azure permissions for installer-provisioned infrastructure](/installing/installing_azure/installing-azure-account#minimum-required-permissions-ipi-azure_installing-azure-account).

{% leveloffset +1 %}{% include "./modules/installation-launching-installer.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/installing-azure-provisioning-dns-records.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/cli-logging-in-kubeadmin.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Accessing the web console](/web_console/web-console#web-console)

## Next steps {id="_next_steps" ._additional-resources}

*   [Customize your cluster](/post_installation_configuration/cluster-tasks#available_cluster_customizations).
*   If necessary, you can
[Remote health reporting](/support/remote_health_monitoring/remote-health-reporting#remote-health-reporting).