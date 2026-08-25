---
title: Installing a user-provisioned bare metal cluster on a disconnected environment
---

# Installing a user-provisioned bare metal cluster on a disconnected environment {#installing-restricted-networks-bare-metal}

In OpenShift Container Platform 4.22, you can install a cluster on bare metal infrastructure that you provision in a restricted network.

> [!IMPORTANT]
> While you might be able to follow this procedure to deploy a cluster on virtualized or cloud environments, you must be aware of additional considerations for non-bare metal platforms. Review the information in the [guidelines for deploying OpenShift Container Platform on non-tested platforms](https://access.redhat.com/articles/4207611) before you attempt to install an OpenShift Container Platform cluster in such an environment.

## Prerequisites {#_prerequisites}

- You reviewed details about the [OpenShift Container Platform installation and update](/openshift-docs-markdown/architecture/architecture-installation#architecture-installation) processes.
- You read the documentation on [selecting a cluster installation method and preparing it for users](/openshift-docs-markdown/installing/overview/installing-preparing#installing-preparing).
- You [created a registry on your mirror host](/openshift-docs-markdown/disconnected/installing-mirroring-installation-images#installing-mirroring-installation-images) and obtained the `imageContentSources` data for your version of OpenShift Container Platform.

  > [!IMPORTANT]
  > Because the installation media is on the mirror host, you can use that computer to complete all installation steps.
- You provisioned [persistent storage](/openshift-docs-markdown/storage/understanding-persistent-storage#understanding-persistent-storage) for your cluster. To deploy a private image registry, your storage must provide ReadWriteMany access modes.
- If you use a firewall and plan to use the Telemetry service, you [configured the firewall to allow the sites](/openshift-docs-markdown/installing/install_config/configuring-firewall#configuring-firewall-module_configuring-firewall) that your cluster requires access to.

  > [!NOTE]
  > Be sure to also review this site list if you are configuring a proxy.

## Requirements for a cluster with user-provisioned infrastructure {#installation-requirements-user-infra_installing-restricted-networks-bare-metal}

For a cluster that contains user-provisioned infrastructure, you must deploy all of the required machines.

This section describes the requirements for deploying OpenShift Container Platform on user-provisioned infrastructure.

**Additional resources**

- [Optimizing storage](/openshift-docs-markdown/scalability_and_performance/optimization/optimizing-storage#optimizing-storage)

**Additional resources**

- See [Configuring a three-node cluster](/openshift-docs-markdown/installing/installing_bare_metal/upi/installing-restricted-networks-bare-metal#installation-three-node-cluster_installing-restricted-networks-bare-metal) for details about deploying three-node clusters in bare metal environments.
- See [Approving the certificate signing requests for your machines](/openshift-docs-markdown/installing/installing_bare_metal/upi/installing-restricted-networks-bare-metal#installation-approve-csrs_installing-restricted-networks-bare-metal) for more information about approving cluster certificate signing requests after installation.

**Additional resources**

- [Configuring chrony time service](/openshift-docs-markdown/installing/install_config/installing-customizing#installation-special-config-chrony_installing-customizing)

**Additional resources**

- [Validating DNS resolution for user-provisioned infrastructure](/openshift-docs-markdown/installing/installing_bare_metal/upi/installing-restricted-networks-bare-metal#installation-user-provisioned-validating-dns_installing-restricted-networks-bare-metal)

**Additional resources**

- [Converting to a dual-stack cluster network](/openshift-docs-markdown/networking/ovn_kubernetes_network_provider/converting-to-dual-stack#nw-dual-stack-convert_converting-to-dual-stack)
- [Expanding the cluster](/openshift-docs-markdown/installing/installing_bare_metal/bare-metal-expanding-the-cluster#bare-metal-expanding-the-cluster)

**Additional resources**

- [Requirements for a cluster with user-provisioned infrastructure](/openshift-docs-markdown/installing/installing_bare_metal/upi/installing-restricted-networks-bare-metal#installation-requirements-user-infra_installing-restricted-networks-bare-metal)
- [Installing {{ op_system }} and starting the OpenShift Container Platform bootstrap process](/openshift-docs-markdown/installing/installing_bare_metal/upi/installing-restricted-networks-bare-metal#creating-machines-bare-metal_installing-restricted-networks-bare-metal)
- [Setting the cluster node hostnames through DHCP](/openshift-docs-markdown/installing/installing_bare_metal/upi/installing-restricted-networks-bare-metal#installation-host-names-dhcp-user-infra_installing-restricted-networks-bare-metal)
- [Advanced RHCOS installation configuration](/openshift-docs-markdown/installing/installing_bare_metal/upi/installing-restricted-networks-bare-metal#installation-user-infra-machines-advanced_installing-restricted-networks-bare-metal)
- [Networking requirements for user-provisioned infrastructure](/openshift-docs-markdown/installing/installing_bare_metal/upi/installing-restricted-networks-bare-metal#installation-network-user-infra_installing-restricted-networks-bare-metal)
- [User-provisioned DNS requirements](/openshift-docs-markdown/installing/installing_bare_metal/upi/installing-restricted-networks-bare-metal#installation-dns-user-infra_installing-restricted-networks-bare-metal)
- [Validating DNS resolution for user-provisioned infrastructure](/openshift-docs-markdown/installing/installing_bare_metal/upi/installing-restricted-networks-bare-metal#installation-user-provisioned-validating-dns_installing-restricted-networks-bare-metal)
- [Load balancing requirements for user-provisioned infrastructure](/openshift-docs-markdown/installing/installing_bare_metal/upi/installing-restricted-networks-bare-metal#installation-load-balancing-user-infra_installing-restricted-networks-bare-metal)

**Additional resources**

- [User-provisioned DNS requirements](/openshift-docs-markdown/installing/installing_bare_metal/upi/installing-restricted-networks-bare-metal#installation-dns-user-infra_installing-restricted-networks-bare-metal)
- [Load balancing requirements for user-provisioned infrastructure](/openshift-docs-markdown/installing/installing_bare_metal/upi/installing-restricted-networks-bare-metal#installation-load-balancing-user-infra_installing-restricted-networks-bare-metal)

**Additional resources**

- [Verifying node health](/openshift-docs-markdown/support/troubleshooting/verifying-node-health#verifying-node-health)

**Additional resources**

- [Installation configuration parameters for bare metal](/openshift-docs-markdown/installing/installing_bare_metal/upi/installation-config-parameters-bare-metal#installation-config-parameters-bare-metal)

**Additional resources**

- See [Load balancing requirements for user-provisioned infrastructure](/openshift-docs-markdown/installing/installing_bare_metal/upi/installing-restricted-networks-bare-metal#installation-load-balancing-user-infra_installing-restricted-networks-bare-metal) for more information on the API and application ingress load balancing requirements.

**Additional resources**

- See [Recovering from expired control plane certificates](/openshift-docs-markdown/backup_and_restore/control_plane_backup_and_restore/disaster_recovery/scenario-3-expired-certs#dr-recovering-expired-certs) for more information about recovering kubelet certificates.

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

- See [Monitoring installation progress](/openshift-docs-markdown/support/troubleshooting/troubleshooting-installations#monitoring-installation-progress_troubleshooting-installations) for more information about monitoring the installation logs and retrieving diagnostic data if installation issues arise.

**Additional resources**

- See [Gathering logs from a failed installation](/openshift-docs-markdown/support/troubleshooting/troubleshooting-installations#installation-bootstrap-gather_troubleshooting-installations) for details about gathering data in the event of a failed OpenShift Container Platform installation.
- See [Troubleshooting Operator issues](/openshift-docs-markdown/support/troubleshooting/troubleshooting-operator-issues#troubleshooting-operator-issues) for steps to check Operator pod health across the cluster and gather Operator logs for diagnosis.

**Additional resources**

- See [About remote health monitoring](/openshift-docs-markdown/support/remote_health_monitoring/about-remote-health-monitoring#about-remote-health-monitoring) for more information about the Telemetry service

## Next steps {#_next_steps}

- [Validating an installation](/openshift-docs-markdown/installing/validation_and_troubleshooting/validating-an-installation#validating-an-installation).
- [Customize your cluster](/openshift-docs-markdown/post_installation_configuration/cluster-tasks#available_cluster_customizations).
- [Configure image streams](/openshift-docs-markdown/post_installation_configuration/cluster-tasks#post-install-must-gather-disconnected) for the Cluster Samples Operator and the `must-gather` tool.
- Learn how to [use Operator Lifecycle Manager in disconnected environments](/openshift-docs-markdown/disconnected/using-olm#olm-restricted-networks).
- If the mirror registry that you used to install your cluster has a trusted CA, add it to the cluster by [configuring additional trust stores](/openshift-docs-markdown/openshift_images/image-configuration#images-configuration-cas_image-configuration).
- If necessary, you can [Remote health reporting](/openshift-docs-markdown/support/remote_health_monitoring/remote-health-reporting#remote-health-reporting).
- If necessary, see [Registering your disconnected cluster](/openshift-docs-markdown/support/remote_health_monitoring/remote-health-reporting#insights-operator-register-disconnected-cluster_remote-health-reporting)
