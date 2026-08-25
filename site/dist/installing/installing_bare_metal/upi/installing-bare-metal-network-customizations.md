---
title: Installing a user-provisioned bare metal cluster with network customizations
---

# Installing a user-provisioned bare metal cluster with network customizations {#installing-bare-metal-network-customizations}

In OpenShift Container Platform 4.22, you can install a cluster on bare-metal infrastructure that you provision with customized network configuration options. By customizing your network configuration, your cluster can coexist with existing IP address allocations in your environment and integrate with existing MTU and VXLAN configurations.

When you customize OpenShift Container Platform networking, you must set most of the network configuration parameters during installation. You can modify only `kubeProxy` network configuration parameters in a running cluster.

## Prerequisites {#_prerequisites}

- You reviewed details about the [OpenShift Container Platform installation and update](/architecture/architecture-installation#architecture-installation) processes.
- You read the documentation on [selecting a cluster installation method and preparing it for users](/installing/overview/installing-preparing#installing-preparing).
- If you use a firewall and plan to use the Telemetry service, you [configured the firewall to allow the sites](/installing/install_config/configuring-firewall#configuring-firewall-module_configuring-firewall) that your cluster requires access to.

**Additional resources**

- See [Installing a user-provisioned bare metal cluster on a restricted network](/installing/installing_bare_metal/upi/installing-restricted-networks-bare-metal#installing-restricted-networks-bare-metal) for more information about performing a restricted network installation on bare metal infrastructure that you provision.

## Requirements for a cluster with user-provisioned infrastructure {#installation-requirements-user-infra_installing-bare-metal-network-customizations}

For a cluster that contains user-provisioned infrastructure, you must deploy all of the required machines.

This section describes the requirements for deploying OpenShift Container Platform on user-provisioned infrastructure.

**Additional resources**

- [Optimizing storage](/scalability_and_performance/optimization/optimizing-storage#optimizing-storage)

**Additional resources**

- See [Configuring a three-node cluster](/installing/installing_bare_metal/upi/installing-bare-metal#installation-three-node-cluster_installing-bare-metal) for details about deploying three-node clusters in bare metal environments.
- See [Approving the certificate signing requests for your machines](/installing/installing_bare_metal/upi/installing-bare-metal-network-customizations#installation-approve-csrs_installing-bare-metal-network-customizations) for more information about approving cluster certificate signing requests after installation.

**Additional resources**

- [Configuring chrony time service](/installing/install_config/installing-customizing#installation-special-config-chrony_installing-customizing)

- [Validating DNS resolution for user-provisioned infrastructure](/installing/installing_bare_metal/upi/installing-bare-metal-network-customizations#installation-user-provisioned-validating-dns_installing-bare-metal-network-customizations)

**Additional resources**

- [Converting to a dual-stack cluster network](/networking/ovn_kubernetes_network_provider/converting-to-dual-stack#nw-dual-stack-convert_converting-to-dual-stack)
- [Expanding the cluster](/installing/installing_bare_metal/bare-metal-expanding-the-cluster#bare-metal-expanding-the-cluster)

**Additional resources**

- [Installing {{ op_system }} and starting the OpenShift Container Platform bootstrap process](/installing/installing_bare_metal/upi/installing-bare-metal-network-customizations#creating-machines-bare-metal_installing-bare-metal-network-customizations)
- [Setting the cluster node hostnames through DHCP](/installing/installing_bare_metal/upi/installing-bare-metal-network-customizations#installation-host-names-dhcp-user-infra_installing-bare-metal-network-customizations)
- [Advanced RHCOS installation configuration](/installing/installing_bare_metal/upi/installing-bare-metal-network-customizations#installation-user-infra-machines-advanced_installing-bare-metal-network-customizations)
- [Networking requirements for user-provisioned infrastructure](/installing/installing_bare_metal/upi/installing-bare-metal-network-customizations#installation-network-user-infra_installing-bare-metal-network-customizations)
- [User-provisioned DNS requirements](/installing/installing_bare_metal/upi/installing-bare-metal-network-customizations#installation-dns-user-infra_installing-bare-metal-network-customizations)
- [Validating DNS resolution for user-provisioned infrastructure](/installing/installing_bare_metal/upi/installing-bare-metal-network-customizations#installation-user-provisioned-validating-dns_installing-bare-metal-network-customizations)
- [Load balancing requirements for user-provisioned infrastructure](/installing/installing_bare_metal/upi/installing-bare-metal-network-customizations#installation-load-balancing-user-infra_installing-bare-metal-network-customizations)

**Additional resources**

- [User-provisioned DNS requirements](/installing/installing_bare_metal/upi/installing-bare-metal-network-customizations#installation-dns-user-infra_installing-bare-metal-network-customizations)
- [Load balancing requirements for user-provisioned infrastructure](/installing/installing_bare_metal/upi/installing-bare-metal-network-customizations#installation-load-balancing-user-infra_installing-bare-metal-network-customizations)

**Additional resources**

- [Verifying node health](/support/troubleshooting/verifying-node-health#verifying-node-health)

**Additional resources**

- [Installation configuration parameters for bare metal](/installing/installing_bare_metal/upi/installation-config-parameters-bare-metal#installation-config-parameters-bare-metal)

**Additional resources**

- See [Load balancing requirements for user-provisioned infrastructure](/installing/installing_bare_metal/upi/installing-bare-metal-network-customizations#installation-load-balancing-user-infra_installing-bare-metal-network-customizations) for more information on the API and application ingress load balancing requirements.

**Additional resources**

- [coreos-installer image mirror](https://mirror.openshift.com/pub/openshift-v4/x86_64/clients/coreos-installer/)

**Additional resources**

- [Getting started with nmcli](https://access.redhat.com/documentation/en-us/red_hat_enterprise_linux/8/html-single/configuring_and_managing_networking/index#getting-started-with-nmcli_configuring-and-managing-networking)
- [Getting started with nmtui](https://access.redhat.com/documentation/en-us/red_hat_enterprise_linux/8/html-single/configuring_and_managing_networking/index#getting-started-with-nmtui_configuring-and-managing-networking)

**Additional resources**

- [`dracut.cmdline` manual page](https://www.man7.org/linux/man-pages/man7/dracut.cmdline.7.html)

**Additional resources**

- [`dracut.cmdline` manual page](https://www.man7.org/linux/man-pages/man7/dracut.cmdline.7.html)

**Additional resources**

- [`dracut.cmdline` manual page](https://www.man7.org/linux/man-pages/man7/dracut.cmdline.7.html)

**Additional resources**

- See [Monitoring installation progress](/support/troubleshooting/troubleshooting-installations#monitoring-installation-progress_troubleshooting-installations) for more information about monitoring the installation logs and retrieving diagnostic data if installation issues arise.

**Additional resources**

- See [Gathering logs from a failed installation](/support/troubleshooting/troubleshooting-installations#installation-bootstrap-gather_troubleshooting-installations) for details about gathering data in the event of a failed OpenShift Container Platform installation.
- See [Troubleshooting Operator issues](/support/troubleshooting/troubleshooting-operator-issues#troubleshooting-operator-issues) for steps to check Operator pod health across the cluster and gather Operator logs for diagnosis.

**Additional resources**

- See [About remote health monitoring](/support/remote_health_monitoring/about-remote-health-monitoring#about-remote-health-monitoring) for more information about the Telemetry service

## Next steps {#_next_steps}

- [Validating an installation](/installing/validation_and_troubleshooting/validating-an-installation#validating-an-installation).
- [Customize your cluster](/post_installation_configuration/cluster-tasks#available_cluster_customizations).
- If necessary, you can [Remote health reporting](/support/remote_health_monitoring/remote-health-reporting#remote-health-reporting).
- [Set up your registry and configure registry storage](/registry/configuring_registry_storage/configuring-registry-storage-baremetal#configuring-registry-storage-baremetal).
