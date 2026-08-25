{%- set _mod_docs_content_type = "PROCEDURE" %}
# Configuring nodes {id="configuring-nodes_{{ context }}"}

## Configuring nodes when using the `provisioning` network {id="_configuring_nodes_when_using_the_provisioning_network"}

Each node in the cluster requires the following configuration for proper installation.


:::warning

A mismatch between nodes will cause an installation failure.

:::


While the cluster nodes can contain more than two NICs, the installation process only focuses on the first two NICs. In the following table, NIC1 is a non-routable network (`provisioning`) that is only used for the installation of the {{ product_title }} cluster.

| NIC | Network | VLAN |
| --- | --- | --- |
| NIC1 | `provisioning` | `<provisioning_vlan>` |
| NIC2 | `baremetal` | `<baremetal_vlan>` |

{% if not openshift_origin %}
The {{ op_system_base_full }} {{ op_system_version }} installation process on the provisioner node might vary. To install {{ op_system_base_full }} {{ op_system_version }} using a local Satellite server or a PXE server, PXE-enable NIC2.
{% endif %}
{% if openshift_origin %}
The {{ op_system_first }} installation process on the provisioner node might vary. To install {{ op_system }} using a local Satellite server or a PXE server, PXE-enable NIC2.
{% endif %}

| PXE | Boot order |
| --- | --- |
| NIC1 PXE-enabled `provisioning` network | 1 |
| NIC2 `baremetal` network. PXE-enabled is optional. | 2 |


:::note

Ensure PXE is disabled on all other NICs.

:::


Configure the control plane and worker nodes as follows:

| PXE | Boot order |
| --- | --- |
| NIC1 PXE-enabled (provisioning network) | 1 |

## Configuring nodes without the `provisioning` network {id="_configuring_nodes_without_the_provisioning_network"}

The installation process requires one NIC:

| NIC | Network | VLAN |
| --- | --- | --- |
| NICx | `baremetal` | `<baremetal_vlan>` |

NICx is a routable network (`baremetal`) that is used for the installation of the {{ product_title }} cluster, and routable to the internet.


:::important

The `provisioning` network is optional, but it is required for PXE booting. If you deploy without a `provisioning` network, you must use a virtual media BMC addressing option such as `redfish-virtualmedia` or `idrac-virtualmedia`.

:::


## Configuring nodes for Secure Boot manually {id="configuring-nodes-for-secure-boot_{{ context }}"}

Secure Boot prevents a node from booting unless it verifies the node is using only trusted software, such as UEFI firmware drivers, EFI applications, and the operating system.


:::note

Red Hat only supports manually configured Secure Boot when deploying with Redfish virtual media.

:::


To enable Secure Boot manually, refer to the hardware guide for the node and execute the following:

**Procedure**

1.  Boot the node and enter the BIOS menu.
1.  Set the node’s boot mode to `UEFI Enabled`.
1.  Enable Secure Boot.


:::important

Red Hat does not support Secure Boot with self-generated keys.

:::