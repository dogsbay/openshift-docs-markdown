---
title: Preparing to install with the Agent-based Installer
---

# Preparing to install with the Agent-based Installer {#preparing-to-install-with-agent-based-installer}

The Agent-based Installer provides the flexibility to boot your on-premise servers in any way that you choose. It combines the ease of use of the Assisted Installation service with the ability to run offline, including in air-gapped environments.

The Agent-based Installer uses a subcommand of the OpenShift Container Platform installation program. It generates a bootable ISO image containing all of the information required to deploy an OpenShift Container Platform cluster, with an available release image.

The configuration is in the same format as for the installer-provisioned infrastructure and user-provisioned infrastructure installation methods. The Agent-based Installer can also optionally generate or accept Zero Touch Provisioning (ZTP) custom resources. ZTP allows you to provision new edge sites with declarative configurations of bare-metal equipment.

> [!NOTE]
> To deploy clusters with virtualized control planes running on {{ VirtProductName }} VMs, you can use KubeVirt Redfish to expose VMs as Redfish-compatible endpoints. For more information about using virtualized control planes, see "Using virtualized control planes".

**Agent-based Installer supported architectures**

| CPU architecture | Connected installation | Disconnected installation |
| --- | --- | --- |
| `64-bit x86` | ✓ | ✓ |
| `64-bit ARM` | ✓ | ✓ |
| `ppc64le` | ✓ | ✓ |
| `s390x` | ✓ | ✓ |

**Additional resources**

- [Understanding virtualized control planes](/openshift-docs-markdown/vcp/vcp-overview#vcp-overview)

**Additional resources**

- [Cluster capabilities](/openshift-docs-markdown/installing/overview/cluster-capabilities#cluster-capabilities)
- [Deploying OpenShift 4.x on non-tested platforms using the bare metal install method (Red Hat Knowledgebase article)](https://access.redhat.com/articles/4207611)
- [Requirements for a cluster using the platform "none" option](/openshift-docs-markdown/installing/installing_with_agent_based_installer/preparing-to-install-with-agent-based-installer#installation-requirements-platform-none_preparing-to-install-with-agent-based-installer)
- [Increase the network MTU](/openshift-docs-markdown/installing/installing_bare_metal/ipi/ipi-install-prerequisites#network-requirements-increase-mtu_ipi-install-prerequisites)
- [Adding worker nodes to {{ sno }} clusters](/openshift-docs-markdown/nodes/nodes/nodes-sno-worker-nodes#nodes-sno-worker-nodes)
- [About a local arbiter node](/openshift-docs-markdown/installing/installing_with_agent_based_installer/preparing-to-install-with-agent-based-installer#installing-ocp-agent-local-arbiter-node_preparing-to-install-with-agent-based-installer)

**Additional resources**

- [OpenShift Security Guide Book](https://access.redhat.com/articles/5059881)
- [Support for FIPS cryptography](/openshift-docs-markdown/installing/overview/installing-fips#installing-fips)

**Additional resources**

- [Port requirements for the rendezvous host](/openshift-docs-markdown/installing/installing_with_agent_based_installer/preparing-to-install-with-agent-based-installer#agent-install-networking-ports_preparing-to-install-with-agent-based-installer)
- [Cluster capabilities](/openshift-docs-markdown/installing/overview/cluster-capabilities#cluster-capabilities)
- [Deploying OpenShift 4.x on non-tested platforms using the bare metal install method (Red Hat Knowledgebase article)](https://access.redhat.com/articles/4207611)

**Additional resources**

- [Configuring network bonding](https://access.redhat.com/documentation/en-us/red_hat_enterprise_linux/9/html/configuring_and_managing_networking/configuring-network-bonding_configuring-and-managing-networking)

## Additional resources {#additional-resources_preparing-to-install-with-agent-based-installer}

- [Installing a cluster](/openshift-docs-markdown/installing/installing_with_agent_based_installer/installing-with-agent-basic#installing-with-agent-basic)
- [Installing a cluster with customizations](/openshift-docs-markdown/installing/installing_with_agent_based_installer/installing-with-agent-based-installer#installing-with-agent-based-installer)
