---
title: Configuring KubeVirt Redfish for VM management
---

# Configuring KubeVirt Redfish for VM management {#virt-kubevirt-redfish}

KubeVirt Redfish exposes {{ VirtProductName }} virtual machines (VMs) through a Redfish-compatible API. This enables external tools and orchestration systems to manage VM power states, query inventory, and attach virtual media using the industry-standard Redfish protocol.

Use KubeVirt Redfish when you need programmatic control over VMs using Redfish, such as deploying virtualized control planes or automating VM lifecycle management.

## Additional resources {#additional-resources_virt-kubevirt-redfish}

- [BMC addressing for installer-provisioned infrastructure](/installing/installing_bare_metal/ipi/ipi-install-installation-workflow#bmc-addressing_ipi-install-installation-workflow)
- [Deploying far edge sites with ZTP](/edge_computing/ztp-deploying-far-edge-sites#ztp-deploying-far-edge-sites)
- [Redfish standard (DMTF)](https://www.dmtf.org/standards/redfish)
