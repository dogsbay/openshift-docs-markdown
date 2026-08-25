---
title: Preparing to install with the Agent-based Installer
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Preparing to install with the Agent-based Installer {id="preparing-to-install-with-agent-based-installer"}
{%- set context = "preparing-to-install-with-agent-based-installer" %}

The Agent-based Installer provides the flexibility to boot your on-premise servers in any way that you choose. It combines the ease of use of the Assisted Installation service with the ability to run offline, including in air-gapped environments. {._abstract}

The Agent-based Installer uses a subcommand of the {{ product_title }} installation program.
It generates a bootable ISO image containing all of the information required to deploy an {{ product_title }} cluster, with an available release image.

The configuration is in the same format as for the installer-provisioned infrastructure and user-provisioned infrastructure installation methods.
The Agent-based Installer can also optionally generate or accept Zero Touch Provisioning (ZTP) custom resources. ZTP allows you to provision new edge sites with declarative configurations of bare-metal equipment.


:::note

To deploy clusters with virtualized control planes running on {{ VirtProductName }} VMs, you can use KubeVirt Redfish to expose VMs as Redfish-compatible endpoints.
For more information about using virtualized control planes, see "Using virtualized control planes".

:::


**Agent-based Installer supported architectures**

| CPU architecture | Connected installation | Disconnected installation |
| --- | --- | --- |
| `64-bit x86` | &#10003; | &#10003; |
| `64-bit ARM` | &#10003; | &#10003; |
| `ppc64le` | &#10003; | &#10003; |
| `s390x` | &#10003; | &#10003; |

**Additional resources**
{._additional-resources}

*   [Understanding virtualized control planes](/vcp/vcp-overview#vcp-overview)

{% leveloffset +1 %}{% include "./modules/understanding-agent-install.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Cluster capabilities](/installing/overview/cluster-capabilities#cluster-capabilities)
*   [Deploying OpenShift 4.x on non-tested platforms using the bare metal install method (Red&#160;Hat Knowledgebase article)](https://access.redhat.com/articles/4207611)
*   [Requirements for a cluster using the platform "none" option](/installing/installing_with_agent_based_installer/preparing-to-install-with-agent-based-installer#installation-requirements-platform-none_preparing-to-install-with-agent-based-installer)
*   [Increase the network MTU](/installing/installing_bare_metal/ipi/ipi-install-prerequisites#network-requirements-increase-mtu_ipi-install-prerequisites)
*   [Adding worker nodes to {{ sno }} clusters](/nodes/nodes/nodes-sno-worker-nodes#nodes-sno-worker-nodes)
*   [About a local arbiter node](/installing/installing_with_agent_based_installer/preparing-to-install-with-agent-based-installer#installing-ocp-agent-local-arbiter-node_preparing-to-install-with-agent-based-installer)

{% leveloffset +1 %}{% include "./modules/agent-installer-fips-compliance.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/agent-installer-configuring-fips-compliance.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [OpenShift Security Guide Book](https://access.redhat.com/articles/5059881)
*   [Support for FIPS cryptography](/installing/overview/installing-fips#installing-fips)

{% leveloffset +1 %}{% include "./modules/agent-host-config.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/agent-host-roles.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/agent-install-ipi-install-root-device-hints.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/agent-install-networking.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/agent-install-requirements-none.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/agent-install-dns-none.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/agent-install-load-balancing-none.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Port requirements for the rendezvous host](/installing/installing_with_agent_based_installer/preparing-to-install-with-agent-based-installer#agent-install-networking-ports_preparing-to-install-with-agent-based-installer)
*   [Cluster capabilities](/installing/overview/cluster-capabilities#cluster-capabilities)
*   [Deploying OpenShift 4.x on non-tested platforms using the bare metal install method (Red&#160;Hat Knowledgebase article)](https://access.redhat.com/articles/4207611)

{% leveloffset +1 %}{% include "./modules/installing-ocp-agent-local-arbiter-node.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/agent-install-sample-config-bonds-vlans.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/agent-install-sample-config-bond-sriov.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Configuring network bonding](https://access.redhat.com/documentation/en-us/red_hat_enterprise_linux/9/html/configuring_and_managing_networking/configuring-network-bonding_configuring-and-managing-networking)

{% leveloffset +1 %}{% include "./modules/installation-bare-metal-agent-installer-config-yaml.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/validations-before-agent-iso-creation.md" %}{% endleveloffset %}

## Additional resources {id="additional-resources_{{ context }}" ._additional-resources}

*   [Installing a cluster](/installing/installing_with_agent_based_installer/installing-with-agent-basic#installing-with-agent-basic)
*   [Installing a cluster with customizations](/installing/installing_with_agent_based_installer/installing-with-agent-based-installer#installing-with-agent-based-installer)