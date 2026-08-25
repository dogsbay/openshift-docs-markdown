{%- set _mod_docs_content_type = "CONCEPT" %}
# Nodes configuration {id="configuring-nodes_{{ context }}"}

You can configure nodes for an installer-provisioned installation of {{ product_title }} on bare metal by using either a `provisioning` network, a `baremetal` network, or with manually configured secure boot. {._abstract}

## Node configuration when using the `provisioning` network {id="_node_configuration_when_using_the_provisioning_network"}

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

## Node configuration without the `provisioning` network {id="_node_configuration_without_the_provisioning_network"}

The installation process requires one NIC.

| NIC | Network | VLAN |
| --- | --- | --- |
| NICx | `baremetal` | `<baremetal_vlan>` |

NICx is a routable network (`baremetal`) that is used for the installation of the {{ product_title }} cluster, and routable to the internet.


:::important

The `provisioning` network is optional, but it is required for PXE booting. If you deploy without a `provisioning` network, you must use a virtual media BMC addressing option such as `redfish-virtualmedia` or `idrac-virtualmedia`.

:::