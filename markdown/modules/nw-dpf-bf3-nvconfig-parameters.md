{%- set _mod_docs_content_type = "REFERENCE" %}
# Required BlueField-3 NVConfig parameters {id="nw-dpf-bf3-nvconfig-parameters_{{ context }}"}

The `nvconfig` section contains BlueField-3 firmware parameters that the DPU agent applies by using `mlxconfig` during provisioning. If any parameter differs from the current firmware configuration, the provisioning controller triggers a system-level reset so that the changes take effect. {._abstract}

The following parameters are required for DPF operation:

**Required BlueField-3 NVConfig parameters**

| Parameter | Value | Description |
| --- | --- | --- |
| `INTERNAL_CPU_MODEL` | `1` | Switches the BlueField-3 to DPU mode where the Arm cores are active. A value of `0` keeps the card in NIC-only mode, which does not support DPF. |
| `SRIOV_EN` | `1` | Enables SR-IOV on both physical functions. The host agent creates Virtual Functions (VFs) that carry tenant traffic between the host and the DPU. |
| `NUM_OF_VFS` | Variable | Number of VFs per physical function. Set this value by using the `$NUM_VFS` environment variable. The default is `46`. |
| `LINK_TYPE_P1` / `LINK_TYPE_P2` | `ETH` | Sets both ports to Ethernet mode. DPF requires Ethernet. InfiniBand (`IB`) mode is not supported. |


:::note

If the BlueField-3 is already configured with the correct values, the DPU agent reports no action required and no reset occurs.

:::