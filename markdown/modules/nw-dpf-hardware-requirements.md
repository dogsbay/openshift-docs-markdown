{%- set _mod_docs_content_type = "REFERENCE" %}
# DPF hardware requirements {id="nw-dpf-hardware-requirements_{{ context }}"}

A DPF v{{ dpf_version }} deployment on {{ product_title }} {{ product_version }} requires a workstation with CLI tools, a management cluster, at least two worker servers with NVIDIA BlueField-3 DPUs, dedicated management and DPU network switches, and a shared storage server for BFB images. {._abstract}

## Workstation {id="_workstation"}

A workstation with the following command-line interface (CLI) tools installed:

*   OpenShift CLI (`oc`) is installed.
*   Helm CLI (`helm`) is installed.

## Control plane nodes {id="_control_plane_nodes"}

Three nodes form the control plane of the management cluster.

**Control plane node requirements**

| Component | Requirement |
| --- | --- |
| Form factor | Virtual machines or physical servers |
| Memory | 60 GB RAM |
| CPU | 16 vCPUs (Intel or AMD x86_64) |
| Storage | 120 GB NVMe SSD storage, plus an additional 80 GB disk for {{ lvms }} |
| Networking | 1x 1GbE network interface |
| DPUs | DPUs must not be installed on control plane nodes |

## Worker nodes {id="_worker_nodes"}

Two physical x86 servers host the NVIDIA BlueField-3 DPUs and act as worker nodes for the management cluster.

**Worker node requirements**

| Component | Requirement |
| --- | --- |
| Memory | 256 GB RAM |
| CPU | 16 cores (Intel or AMD x86_64) |
| Storage | A minimum of 500 GB NVMe SSD storage for the base operating system |
| DPU slot | PCIe Gen 5 x16 slot required. Each server can have multiple DPUs but only one NVIDIA BlueField-3 DPU can be provisioned. |
| BIOS settings | SR-IOV must be enabled. In-Band Manageability Interface must be enabled. |


:::note

As part of the installation process, a Linux bridge named `br-ex` is automatically created on the worker node’s physical management port by using a `MachineConfig` custom resource to facilitate control-plane traffic from the DPU through the host server.

:::


## NVIDIA BlueField-3 DPUs {id="_nvidia_bluefield-3_dpus"}

One NVIDIA BlueField-3 DPU is required per worker node.

**BlueField-3 DPU requirements**

| Component | Requirement |
| --- | --- |
| Model | BlueField-3: [B3240](https://docs.nvidia.com/networking/display/bf3dpu/specifications#src-2449222537_Specifications-B3240DPUsSpecifications), [B3220](https://docs.nvidia.com/networking/display/bf3dpu/specifications#src-2449222537_Specifications-B3220DPUsSpecifications), or [B3210](https://docs.nvidia.com/networking/display/bf3dpu/specifications#src-2449222537_Specifications-B3210DPUsSpecifications) |
| Memory | 32 GB. Dual-port DPUs with 32 GB require an external power connection to the x86 server. |
| Networking | Dual 200GbE ports per DPU. Both ports must be connected to the high-speed switch for ECMP routing. |
| Management | The out-of-band management port is not used in this configuration. |
| Operating system and software | The DPUs are provisioned with a BlueField Bootstream File (BFB) that bundles a Red Hat Enterprise Linux CoreOS (RHCOS) base image and the NVIDIA DOCA software stack. The DOCA software stack includes the DPU firmware (version 32.49.1014). |