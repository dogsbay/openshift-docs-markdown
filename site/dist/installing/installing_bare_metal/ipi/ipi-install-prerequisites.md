---
title: Prerequisites
---

# Prerequisites {#ipi-install-prerequisites}

Installer-provisioned installation of OpenShift Container Platform requires:

1. One provisioner node with {{ op_system_base_full }} {{ op_system_version }} installed. The provisioner can be removed after installation.
2. Three control plane nodes
3. Baseboard management controller (BMC) access to each node
4. At least one network:

   1. One required routable network
   2. One optional provisioning network
   3. One optional management network

Before starting an installer-provisioned installation of OpenShift Container Platform, ensure the hardware environment meets the following requirements.

**Additional resources**

- [Preparing your cluster for {{ VirtProductName }}](/virt/install/preparing-cluster-for-virt#preparing-cluster-for-virt)
- [About Single Root I/O Virtualization (SR-IOV) hardware networks](/networking/hardware_networks/about-sriov#about-sriov)
- [Connecting a virtual machine to an SR-IOV network](/virt/vm_networking/virt-connecting-vm-to-sriov#virt-connecting-vm-to-sriov)

**Additional resources**

- [Red Hat third-party support policy](https://access.redhat.com/third-party-software-support)
- [UCSHCL](https://ucshcltool.cloudapps.cisco.com/public/)
- [Unable to discover new bare-metal hosts by using the BMC](/installing/installing_bare_metal/ipi/ipi-install-troubleshooting#unable-to-discover-new-bare-metal-hosts-using-the-bmc_ipi-install-troubleshooting)

**Additional resources**

- [Ironic NC-SI Specification](https://specs.openstack.org/openstack/ironic-specs/specs/approved/nc-si.html)
- [DMTF: Network Controller Sideband Interface (NC-SI) Specification](https://www.dmtf.org/sites/default/files/standards/documents/DSP0222_1.1.1.pdf)

**Additional resources**

- [Using DNS forwarding](/networking/networking_operators/dns-operator#nw-dns-forward_dns-operator)
