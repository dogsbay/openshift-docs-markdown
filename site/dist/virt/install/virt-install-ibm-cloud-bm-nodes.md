---
title: Installing {{ VirtProductName }} on {{ ibm_cloud_title }} bare-metal nodes
---

# Installing {{ VirtProductName }} on {{ ibm_cloud_title }} bare-metal nodes {#virt-install-ibm-cloud-bm-nodes}

Install {{ VirtProductName }} on {{ ibm_cloud_title }} bare-metal nodes using Assisted Installer. The cluster has 6 bare-metal nodes (3 control and 3 compute). An additional virtual machine is required for bootstrapping and to act as a Samba server, DHCP server, network gateway, and load balancer.

## Prerequisites {#_prerequisites}

- An account in {{ ibm_cloud_title }} with permissions to order and operate bare-metal nodes.
- An {{ ibm_cloud_title }} SSL VPN user, to access the SuperMicro IPMI interface of a node.
- Install the OpenShift CLI (`oc`).
