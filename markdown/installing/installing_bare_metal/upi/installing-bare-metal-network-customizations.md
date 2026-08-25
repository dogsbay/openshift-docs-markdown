---
title: Installing a user-provisioned bare metal cluster with network customizations
---

{% if context == "installing-with-agent-based-installer" %}
{%- set agent = true -%}
{% endif %}

{%- set _mod_docs_content_type = "ASSEMBLY" %}
# Installing a user-provisioned bare metal cluster with network customizations {id="installing-bare-metal-network-customizations"}
{% include "./_attributes/common-attributes.md" %}
{%- set context = "installing-bare-metal-network-customizations" %}

In {{ product_title }} {{ product_version }}, you can install a cluster on bare-metal infrastructure that you provision with customized network configuration options. By customizing your network configuration, your cluster can coexist
with existing IP address allocations in your environment and integrate with existing MTU and VXLAN configurations.

When you customize {{ product_title }} networking, you must set most of the network configuration parameters during installation. You can modify only `kubeProxy` network configuration parameters in a running cluster.

## Prerequisites {id="_prerequisites"}

*   You reviewed details about the [{{ product_title }} installation and update](/architecture/architecture-installation#architecture-installation) processes.
*   You read the documentation on [selecting a cluster installation method and preparing it for users](/installing/overview/installing-preparing#installing-preparing).
*   If you use a firewall and plan to use the Telemetry service, you [configured the firewall to allow the sites](/installing/install_config/configuring-firewall#configuring-firewall-module_configuring-firewall) that your cluster requires access to.

{% leveloffset +1 %}{% include "./modules/cluster-entitlements.md" %}{% endleveloffset %}

**Additional resources**

*   See [Installing a user-provisioned bare metal cluster on a restricted network](/installing/installing_bare_metal/upi/installing-restricted-networks-bare-metal#installing-restricted-networks-bare-metal) for more information about performing a restricted network installation on bare metal infrastructure that you provision.

## Requirements for a cluster with user-provisioned infrastructure {id="installation-requirements-user-infra_{{ context }}"}

For a cluster that contains user-provisioned infrastructure, you must deploy all
of the required machines.

This section describes the requirements for deploying {{ product_title }} on user-provisioned infrastructure.

{% leveloffset +2 %}{% include "./modules/installation-machine-requirements.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/installation-minimum-resource-requirements.md" %}{% endleveloffset %}

**Additional resources**

*   [Optimizing storage](/scalability_and_performance/optimization/optimizing-storage#optimizing-storage)

{% leveloffset +2 %}{% include "./modules/csr-management.md" %}{% endleveloffset %}

**Additional resources**

*   See [Configuring a three-node cluster](/installing/installing_bare_metal/upi/installing-bare-metal#installation-three-node-cluster_installing-bare-metal) for details about deploying three-node clusters in bare metal environments.
*   See [Approving the certificate signing requests for your machines](/installing/installing_bare_metal/upi/installing-bare-metal-network-customizations#installation-approve-csrs_installing-bare-metal-network-customizations) for more information about approving cluster certificate signing requests after installation.

{% leveloffset +2 %}{% include "./modules/installation-network-user-infra.md" %}{% endleveloffset %}

**Additional resources**

*   [Configuring chrony time service](/installing/install_config/installing-customizing#installation-special-config-chrony_installing-customizing)

{% leveloffset +2 %}{% include "./modules/installation-dns-user-infra.md" %}{% endleveloffset %}

{% leveloffset +3 %}{% include "./modules/installation-dns-user-infra-example.md" %}{% endleveloffset %}
*   [Validating DNS resolution for user-provisioned infrastructure](/installing/installing_bare_metal/upi/installing-bare-metal-network-customizations#installation-user-provisioned-validating-dns_installing-bare-metal-network-customizations)

{% leveloffset +2 %}{% include "./modules/installation-bare-metal-dns-record-type.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/installation-load-balancing-user-infra.md" %}{% endleveloffset %}

{% leveloffset +3 %}{% include "./modules/installation-load-balancing-user-infra-example.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/creating-manifest-file-customized-br-ex-bridge.md" %}{% endleveloffset %}

**Additional resources**

*   [Converting to a dual-stack cluster network](/networking/ovn_kubernetes_network_provider/converting-to-dual-stack#nw-dual-stack-convert_converting-to-dual-stack)
*   [Expanding the cluster](/installing/installing_bare_metal/bare-metal-expanding-the-cluster#bare-metal-expanding-the-cluster)

{% leveloffset +2 %}{% include "./modules/creating-scaling-machine-sets-compute-nodes-networking.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/installation-infrastructure-user-infra.md" %}{% endleveloffset %}

**Additional resources**

*   [Installing {{ op_system }} and starting the {{ product_title }} bootstrap process](/installing/installing_bare_metal/upi/installing-bare-metal-network-customizations#creating-machines-bare-metal_installing-bare-metal-network-customizations)
*   [Setting the cluster node hostnames through DHCP](/installing/installing_bare_metal/upi/installing-bare-metal-network-customizations#installation-host-names-dhcp-user-infra_installing-bare-metal-network-customizations)
*   [Advanced RHCOS installation configuration](/installing/installing_bare_metal/upi/installing-bare-metal-network-customizations#installation-user-infra-machines-advanced_installing-bare-metal-network-customizations)
*   [Networking requirements for user-provisioned infrastructure](/installing/installing_bare_metal/upi/installing-bare-metal-network-customizations#installation-network-user-infra_installing-bare-metal-network-customizations)
*   [User-provisioned DNS requirements](/installing/installing_bare_metal/upi/installing-bare-metal-network-customizations#installation-dns-user-infra_installing-bare-metal-network-customizations)
*   [Validating DNS resolution for user-provisioned infrastructure](/installing/installing_bare_metal/upi/installing-bare-metal-network-customizations#installation-user-provisioned-validating-dns_installing-bare-metal-network-customizations)
*   [Load balancing requirements for user-provisioned infrastructure](/installing/installing_bare_metal/upi/installing-bare-metal-network-customizations#installation-load-balancing-user-infra_installing-bare-metal-network-customizations)

{% leveloffset +1 %}{% include "./modules/installation-user-provisioned-validating-dns.md" %}{% endleveloffset %}

**Additional resources**

*   [User-provisioned DNS requirements](/installing/installing_bare_metal/upi/installing-bare-metal-network-customizations#installation-dns-user-infra_installing-bare-metal-network-customizations)
*   [Load balancing requirements for user-provisioned infrastructure](/installing/installing_bare_metal/upi/installing-bare-metal-network-customizations#installation-load-balancing-user-infra_installing-bare-metal-network-customizations)

{% leveloffset +1 %}{% include "./modules/ssh-agent-using.md" %}{% endleveloffset %}

**Additional resources**

*   [Verifying node health](/support/troubleshooting/verifying-node-health#verifying-node-health)

{% leveloffset +1 %}{% include "./modules/installation-obtaining-installer.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/cli-installing-cli-linux.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/cli-installing-cli-windows.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/cli-installing-cli-macos.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/installation-initializing-manual.md" %}{% endleveloffset %}

**Additional resources**

*   [Installation configuration parameters for bare metal](/installing/installing_bare_metal/upi/installation-config-parameters-bare-metal#installation-config-parameters-bare-metal)

{% leveloffset +2 %}{% include "./modules/installation-bare-metal-config-yaml.md" %}{% endleveloffset %}

**Additional resources**

*   See [Load balancing requirements for user-provisioned infrastructure](/installing/installing_bare_metal/upi/installing-bare-metal-network-customizations#installation-load-balancing-user-infra_installing-bare-metal-network-customizations) for more information on the API and application ingress load balancing requirements.

{% leveloffset +1 %}{% include "./modules/nw-network-config.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/nw-modifying-operator-install-config.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/nw-operator-cr.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/installation-generate-ignition-configs.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/creating-machines-bare-metal.md" %}{% endleveloffset %}

**Additional resources**

*   [coreos-installer image mirror](https://mirror.openshift.com/pub/openshift-v4/x86_64/clients/coreos-installer/)

{% leveloffset +2 %}{% include "./modules/installation-user-infra-machines-iso.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/installation-user-infra-machines-pxe.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/installation-user-infra-machines-advanced.md" %}{% endleveloffset %}

{% leveloffset +3 %}{% include "./modules/installation-user-infra-machines-advanced-network.md" %}{% endleveloffset %}

{% leveloffset +3 %}{% include "./modules/installation-user-infra-machines-advanced-disk.md" %}{% endleveloffset %}

{% leveloffset +3 %}{% include "./modules/installation-user-infra-machines-advanced-retain-disk.md" %}{% endleveloffset %}

{% leveloffset +3 %}{% include "./modules/installation-user-infra-machines-advanced-ignition.md" %}{% endleveloffset %}

**Additional resources**

*   [Getting started with nmcli](https://access.redhat.com/documentation/en-us/red_hat_enterprise_linux/8/html-single/configuring_and_managing_networking/index#getting-started-with-nmcli_configuring-and-managing-networking)
*   [Getting started with nmtui](https://access.redhat.com/documentation/en-us/red_hat_enterprise_linux/8/html-single/configuring_and_managing_networking/index#getting-started-with-nmtui_configuring-and-managing-networking)

{% leveloffset +3 %}{% include "./modules/installation-user-infra-machines-advanced-console-configuration.md" %}{% endleveloffset %}

{% leveloffset +3 %}{% include "./modules/installation-user-infra-machines-advanced-enabling-serial-console.md" %}{% endleveloffset %}

{% leveloffset +3 %}{% include "./modules/installation-user-infra-machines-advanced-customizing-iso-or-pxe.md" %}{% endleveloffset %}

{%- set boot_media = "ISO image" -%}
{%- set boot = "iso" %}
{% leveloffset +3 %}{% include "./modules/installation-user-infra-machines-advanced-customizing-live.md" %}{% endleveloffset %}

{% leveloffset +4 %}{% include "./modules/installation-user-infra-machines-advanced-customizing-live-serial-console.md" %}{% endleveloffset %}

{% leveloffset +4 %}{% include "./modules/installation-user-infra-machines-advanced-customizing-live-ca-certs.md" %}{% endleveloffset %}

{% leveloffset +4 %}{% include "./modules/installation-user-infra-machines-advanced-customizing-live-network-config.md" %}{% endleveloffset %}

{% leveloffset +4 %}{% include "./modules/installation-user-infra-machines-advanced-customizing-live-iscsi-manual.md" %}{% endleveloffset %}

**Additional resources**

*   [`dracut.cmdline` manual page](https://www.man7.org/linux/man-pages/man7/dracut.cmdline.7.html)

{% leveloffset +4 %}{% include "./modules/installation-user-infra-machines-advanced-customizing-live-iscsi-ibft.md" %}{% endleveloffset %}

**Additional resources**

*   [`dracut.cmdline` manual page](https://www.man7.org/linux/man-pages/man7/dracut.cmdline.7.html)

{%- set boot_media = "PXE environment" -%}
{%- set boot = "pxe" %}
{% leveloffset +3 %}{% include "./modules/installation-user-infra-machines-advanced-customizing-live.md" %}{% endleveloffset %}

{% leveloffset +4 %}{% include "./modules/installation-user-infra-machines-advanced-customizing-live-serial-console.md" %}{% endleveloffset %}

{% leveloffset +4 %}{% include "./modules/installation-user-infra-machines-advanced-customizing-live-ca-certs.md" %}{% endleveloffset %}

{% leveloffset +4 %}{% include "./modules/installation-user-infra-machines-advanced-customizing-live-network-config.md" %}{% endleveloffset %}

{% leveloffset +4 %}{% include "./modules/installation-user-infra-machines-advanced-customizing-live-iscsi-manual.md" %}{% endleveloffset %}

{% leveloffset +4 %}{% include "./modules/installation-user-infra-machines-advanced-customizing-live-iscsi-ibft.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/installation-user-infra-machines-static-network.md" %}{% endleveloffset %}

**Additional resources**

*   [`dracut.cmdline` manual page](https://www.man7.org/linux/man-pages/man7/dracut.cmdline.7.html)

{% leveloffset +3 %}{% include "./modules/configuring-dhcp-or-static-ip-addresses.md" %}{% endleveloffset %}

{% leveloffset +3 %}{% include "./modules/configuring-ip-address-without-static-hostname.md" %}{% endleveloffset %}

{% leveloffset +3 %}{% include "./modules/specifying-multiple-network-interfaces.md" %}{% endleveloffset %}

{% leveloffset +3 %}{% include "./modules/configuring-default-gateway-route.md" %}{% endleveloffset %}

{% leveloffset +3 %}{% include "./modules/configuring-vlans-individual-interfaces.md" %}{% endleveloffset %}

{% leveloffset +3 %}{% include "./modules/bonding-multiple-network-interfaces-to-single-interface.md" %}{% endleveloffset %}

{% leveloffset +3 %}{% include "./modules/bonding-multiple-sriov-network-interfaces-to-dual-port.md" %}{% endleveloffset %}

{% leveloffset +3 %}{% include "./modules/installation-user-infra-machines-coreos-installer-options.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/rhcos-enabling-multipath.md" %}{% endleveloffset %}

{% leveloffset +3 %}{% include "./modules/rhcos-multipath-secondary-disk.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/rhcos-install-iscsi-manual.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/rhcos-install-iscsi-ibft.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/installation-installing-bare-metal.md" %}{% endleveloffset %}

**Additional resources**

*   See [Monitoring installation progress](/support/troubleshooting/troubleshooting-installations#monitoring-installation-progress_troubleshooting-installations) for more information about monitoring the installation logs and retrieving diagnostic data if installation issues arise.

{% leveloffset +1 %}{% include "./modules/cli-logging-in-kubeadmin.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/installation-approve-csrs.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/installation-operators-config.md" %}{% endleveloffset %}

**Additional resources**

*   See [Gathering logs from a failed installation](/support/troubleshooting/troubleshooting-installations#installation-bootstrap-gather_troubleshooting-installations) for details about gathering data in the event of a failed {{ product_title }} installation.
*   See [Troubleshooting Operator issues](/support/troubleshooting/troubleshooting-operator-issues#troubleshooting-operator-issues) for steps to check Operator pod health across the cluster and gather Operator logs for diagnosis.

{% leveloffset +2 %}{% include "./modules/registry-removed.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/installation-registry-storage-config.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/installation-registry-storage-block-recreate-rollout-bare-metal.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/installation-complete-user-infra.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/cluster-telemetry.md" %}{% endleveloffset %}

**Additional resources**

*   See [About remote health monitoring](/support/remote_health_monitoring/about-remote-health-monitoring#about-remote-health-monitoring) for more information about the Telemetry service

## Next steps {id="_next_steps"}

*   [Validating an installation](/installing/validation_and_troubleshooting/validating-an-installation#validating-an-installation).
*   [Customize your cluster](/post_installation_configuration/cluster-tasks#available_cluster_customizations).
*   If necessary, you can
[Remote health reporting](/support/remote_health_monitoring/remote-health-reporting#remote-health-reporting).
*   [Set up your registry and configure registry storage](/registry/configuring_registry_storage/configuring-registry-storage-baremetal#configuring-registry-storage-baremetal).

{% if context == "installing-with-agent-based-installer" %}
{%- set agent = false -%}
{% endif %}