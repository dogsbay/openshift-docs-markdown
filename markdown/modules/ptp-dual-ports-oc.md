{%- set _mod_docs_content_type = "CONCEPT" %}
# Using dual-port NICs to improve redundancy for PTP ordinary clocks {id="ptp-dual-ports-oc_{{ context }}"}

{{ product_title }} supports single-port networking interface cards (NICs) as ordinary clocks for PTP timing. To improve redundancy, you can configure a dual-port NIC with one port as active and the other as standby. {._abstract}

In this configuration, the ports in a dual-port NIC operate as follows:

*   The active port functions as an ordinary clock in the `Following` port state.
*   The standby port remains in the `Listening` port state.
*   If the active port fails, the standby port transitions to active to ensure continued PTP timing synchronization.
*   If both ports become faulty, the clock state moves to the `HOLDOVER` state, then the `FREERUN` state when the holdover timeout expires, before resyncing to a leader clock.

## Hardware requirements {id="hardware-requirements_{{ context }}"}

You can configure PTP ordinary clocks with added redundancy on x86_64 or AArch64 architecture nodes.

For x86_64 architecture nodes, the nodes must feature dual-port NICs that support PTP and expose a single PTP hardware clock (PHC) per NIC, such as the Intel E810.

For AArch64 architecture nodes, you can use the following dual-port NICs only:

*   NVIDIA ConnectX-7 series
*   NVIDIA BlueField-3 series, in NIC mode
    *   You must configure the NVIDIA BlueField-3 series DPU in NIC mode before configuring the interface as an ordinary clock with improved redundancy. For further information about configuring NIC mode, see [NIC Mode for BlueField-3](https://docs.nvidia.com/networking/display/bluefielddpubspv422/modes+of+operation#src-141856548_ModesofOperation-NICModeforBlueField-3) (NVIDIA documentation), [BlueField Management](https://docs.nvidia.com/networking/display/bluefieldbmcv2504/bluefield+managementink) (NVIDIA documentation), and [Configuring NIC Mode on BlueField-3 from Host BIOS HII UEFI Menu](https://docs.nvidia.com/networking/display/bluefielddpuosv470/modes+of+operation#src-2821766680_ModesofOperation-ConfiguringNICModeonBlueField-3fromHostHIIUEFI) (NVIDIA documentation).
    *   You must restart the card after changing to NIC mode. For more information about restarting the card, see [NVIDIA BlueField Reset and Reboot Procedures](https://docs.nvidia.com/doca/sdk/nvidia+bluefield+reset+and+reboot+procedures/index.html) (NVIDIA documentation).
*   Use the latest supported NVIDIA drivers and firmware to ensure proper PTP support and to expose a single PHC per NIC.