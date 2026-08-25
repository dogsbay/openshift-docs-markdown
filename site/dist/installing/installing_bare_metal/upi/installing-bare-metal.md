---
title: Installing a user-provisioned cluster on bare metal
---

# Installing a user-provisioned cluster on bare metal {#installing-bare-metal}

To optimize performance and maintain more control over your hardware in OpenShift Container Platform 4.22, you can install a cluster on bare-metal infrastructure that you provision.

> [!IMPORTANT]
> While you might be able to follow this procedure to deploy a cluster on virtualized or cloud environments, you must be aware of additional considerations for non-bare-metal platforms. Review the information in the [guidelines for deploying OpenShift Container Platform on non-tested platforms](https://access.redhat.com/articles/4207611) before you attempt to install an OpenShift Container Platform cluster in such an environment.

## Prerequisites {#_prerequisites}

- You reviewed details about the [OpenShift Container Platform installation and update](/openshift-docs-markdown/architecture/architecture-installation#architecture-installation) processes.
- You read the documentation on [selecting a cluster installation method and preparing it for users](/openshift-docs-markdown/installing/overview/installing-preparing#installing-preparing).
- If you use a firewall, you [configured it to allow the sites](/openshift-docs-markdown/installing/install_config/configuring-firewall#configuring-firewall-module_configuring-firewall) that your cluster requires access to.

  > [!NOTE]
  > Be sure to also review this site list if you are configuring a proxy.

**Additional resources**

- [Installing a user-provisioned bare metal cluster on a restricted network](/openshift-docs-markdown/installing/installing_bare_metal/upi/installing-restricted-networks-bare-metal#installing-restricted-networks-bare-metal)

**Additional resources**

- [Optimizing storage](/openshift-docs-markdown/scalability_and_performance/optimization/optimizing-storage#optimizing-storage)

**Additional resources**

- [Configuring a three-node cluster](/openshift-docs-markdown/installing/installing_bare_metal/upi/installing-bare-metal#installation-three-node-cluster_installing-bare-metal)
- [Approving the certificate signing requests for your machines](/openshift-docs-markdown/installing/installing_bare_metal/upi/installing-bare-metal#installation-approve-csrs_installing-bare-metal)
- [Installing RHCOS and starting the OpenShift Container Platform bootstrap process](/openshift-docs-markdown/installing/installing_vsphere/upi/installing-vsphere#installation-vsphere-machines_installing-vsphere)

**Additional resources**

- [Configuring chrony time service](/openshift-docs-markdown/installing/install_config/installing-customizing#installation-special-config-chrony_installing-customizing)

**Additional resources**

- [Validating DNS resolution for user-provisioned infrastructure](/openshift-docs-markdown/installing/installing_bare_metal/upi/installing-bare-metal#installation-user-provisioned-validating-dns_installing-bare-metal)

**Additional resources**

- [Converting to a dual-stack cluster network](/openshift-docs-markdown/networking/ovn_kubernetes_network_provider/converting-to-dual-stack#nw-dual-stack-convert_converting-to-dual-stack)
- [Expanding the cluster](/openshift-docs-markdown/installing/installing_bare_metal/bare-metal-expanding-the-cluster#bare-metal-expanding-the-cluster)

**Additional resources**

- [Installing {{ op_system }} and starting the OpenShift Container Platform bootstrap process](/openshift-docs-markdown/installing/installing_bare_metal/upi/installing-bare-metal#creating-machines-bare-metal_installing-bare-metal)
- [Setting the cluster node hostnames through DHCP](/openshift-docs-markdown/installing/installing_bare_metal/upi/installing-bare-metal#installation-host-names-dhcp-user-infra_installing-bare-metal)
- [Advanced RHCOS installation configuration](/openshift-docs-markdown/installing/installing_bare_metal/upi/installing-bare-metal#installation-user-infra-machines-advanced_installing-bare-metal)
- [Networking requirements for user-provisioned infrastructure](/openshift-docs-markdown/installing/installing_bare_metal/upi/installing-bare-metal#installation-network-user-infra_installing-bare-metal)
- [User-provisioned DNS requirements](/openshift-docs-markdown/installing/installing_bare_metal/upi/installing-bare-metal#installation-dns-user-infra_installing-bare-metal)
- [Validating DNS resolution for user-provisioned infrastructure](/openshift-docs-markdown/installing/installing_bare_metal/upi/installing-bare-metal#installation-user-provisioned-validating-dns_installing-bare-metal)
- [Load balancing requirements for user-provisioned infrastructure](/openshift-docs-markdown/installing/installing_bare_metal/upi/installing-bare-metal#installation-load-balancing-user-infra_installing-bare-metal)

**Additional resources**

- [User-provisioned DNS requirements](/openshift-docs-markdown/installing/installing_bare_metal/upi/installing-bare-metal#installation-dns-user-infra_installing-bare-metal)
- [Load balancing requirements for user-provisioned infrastructure](/openshift-docs-markdown/installing/installing_bare_metal/upi/installing-bare-metal#installation-load-balancing-user-infra_installing-bare-metal)

**Additional resources**

- [Verifying node health](/openshift-docs-markdown/support/troubleshooting/verifying-node-health#verifying-node-health)

**Additional resources**

- [Installation configuration parameters for bare metal](/openshift-docs-markdown/installing/installing_bare_metal/upi/installation-config-parameters-bare-metal#installation-config-parameters-bare-metal)

**Additional resources**

- [Load balancing requirements for user-provisioned infrastructure](/openshift-docs-markdown/installing/installing_bare_metal/upi/installing-bare-metal#installation-load-balancing-user-infra_installing-bare-metal)
- [Cluster capabilities](/openshift-docs-markdown/installing/overview/cluster-capabilities#cluster-capabilities)
- [Optional cluster capabilities in OpenShift Container Platform 4.22](/openshift-docs-markdown/installing/overview/cluster-capabilities#explanation_of_capabilities_cluster-capabilities)

**Additional resources**

- [Recovering from expired control plane certificates](/openshift-docs-markdown/backup_and_restore/control_plane_backup_and_restore/disaster_recovery/scenario-3-expired-certs#dr-recovering-expired-certs)

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

- [`dracut.cmdline` manual page](https://www.man7.org/linux/man-pages/man7/dracut.cmdline.7.html)
- [Installing {{ op_system }} and starting the OpenShift Container Platform bootstrap process](/openshift-docs-markdown/installing/installing_bare_metal/upi/installing-bare-metal#creating-machines-bare-metal_installing-bare-metal)

**Additional resources**

- [Monitoring installation progress](/openshift-docs-markdown/support/troubleshooting/troubleshooting-installations#monitoring-installation-progress_troubleshooting-installations)

**Additional resources**

- [Certificate Signing Requests](https://kubernetes.io/docs/reference/access-authn-authz/certificate-signing-requests/)

**Additional resources**

- [Gathering logs from a failed installation](/openshift-docs-markdown/support/troubleshooting/troubleshooting-installations#installation-bootstrap-gather_troubleshooting-installations)
- [Troubleshooting Operator issues](/openshift-docs-markdown/support/troubleshooting/troubleshooting-operator-issues#troubleshooting-operator-issues)

**Additional resources**

- [About remote health monitoring](/openshift-docs-markdown/support/remote_health_monitoring/about-remote-health-monitoring#about-remote-health-monitoring)
- [Validating an installation](/openshift-docs-markdown/installing/validation_and_troubleshooting/validating-an-installation#validating-an-installation)
- [Customize your cluster](/openshift-docs-markdown/post_installation_configuration/cluster-tasks#available_cluster_customizations).
- [Remote health reporting](/openshift-docs-markdown/support/remote_health_monitoring/remote-health-reporting#remote-health-reporting)
- [Set up your registry and configure registry storage](/openshift-docs-markdown/registry/configuring_registry_storage/configuring-registry-storage-baremetal#configuring-registry-storage-baremetal)
- [Data Gathered and Used by Red Hat’s subscription services ](https://access.redhat.com/solutions/4656511)
