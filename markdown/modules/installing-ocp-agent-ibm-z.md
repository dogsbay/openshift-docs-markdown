{%- set _mod_docs_content_type = "CONCEPT" %}
# Manually adding {{ ibm_z_title }} agents {id="installing-ocp-agent-ibm-z_{{ context }}"}

After creating the PXE assets, you can add {{ ibm_z_name }} agents. {._abstract}

Only use this procedure for {{ ibm_z_name }} clusters.

Depending on your {{ ibm_z_name }} environment, you can choose from the following options:

*   Adding {{ ibm_z_name }} agents with z/VM
*   Adding {{ ibm_z_name }} agents with {{ op_system_base }} KVM
*   Adding {{ ibm_z_name }} agents with Logical Partition (LPAR)


:::note

Currently, ISO boot support on {{ ibm_z_name }} (`s390x`) is available only for {{ op_system_base_full }} KVM, which provides the flexibility to choose either PXE or ISO-based installation. For installations with z/VM and Logical Partition (LPAR), only PXE boot is supported.

:::


## Networking requirements for {{ ibm_z_title }} {id="networking-reqs-ibm-z_{{ context }}"}

In {{ ibm_z_title }} environments, advanced networking technologies such as Open Systems Adapter (OSA), HiperSockets, and Remote Direct Memory Access (RDMA) over Converged Ethernet (RoCE) require specific configurations that deviate from the standard network settings and those needs to be persisted for multiple boot scenarios that occur in the Agent-based Installation.

To persist these parameters during boot, the `ai.ip_cfg_override=1` parameter is required in the `.parm` file. This parameter is used with the configured network cards to ensure a successful and efficient deployment on {{ ibm_z_title }}.

The following table lists the network devices that are supported on each hypervisor for the network configuration override functionality:

| Network device | z/VM | KVM | LPAR Classic | LPAR Dynamic Partition Manager (DPM) |
| --- | --- | --- | --- | --- |
| Virtual Switch | Supported <sup>[1]</sup> | Not applicable <sup>[2]</sup> | Not applicable | Not applicable |
| Direct attached Open Systems Adapter (OSA) | Supported | Not required <sup>[3]</sup> | Supported | Not required |
| RDMA over Converged Ethernet (RoCE) | Not required | Not required | Not required | Not required |
| HiperSockets | Supported | Not required | Supported | Not required |

1.  Supported: When the `ai.ip_cfg_override` parameter is required for the installation procedure.
1.  Not Applicable: When a network card is not applicable to be used on the hypervisor.
1.  Not required: When the `ai.ip_cfg_override` parameter is not required for the installation procedure.