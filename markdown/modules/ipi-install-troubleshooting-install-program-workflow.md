{%- set _mod_docs_content_type = "REFERENCE" %}
# Troubleshooting the installation program workflow {id="ipi-install-troubleshooting-install-workflow_{{ context }}"}

Before troubleshooting the installation environment, it is critical to understand the overall flow of the installer-provisioned installation on bare metal.  {._abstract}

The following diagrams illustrate a troubleshooting flow with a step-by-step breakdown for the environment.

**Figure 1. Troubleshooting workflow for `install-config.yaml` file errors or inaccessible {{ op_system }} images**

![Troubleshooting workflow when the `install-config.yaml` file has errors or the {{ op_system_first }} images are inaccessible](/images/flow1.png)

This diagram illustrates a troubleshooting workflow when the `install-config.yaml` file has errors or the {{ op_system_first }} images are inaccessible. See  [Troubleshooting `install-config.yaml`](#ipi-install-troubleshooting-install-config_ipi-install-troubleshooting) for troubleshooting suggestions.

**Figure 2. Troubleshooting workflow for bootstrap VM issues, bootstrap VMs that cannot boot up the cluster nodes, and inspecting logs**

![Troubleshooting workflow for bootstrap VM issues](/images/flow2.png)

This diagram illustrates a troubleshooting workflow for [ bootstrap VM issues](#ipi-install-troubleshooting-bootstrap-vm_ipi-install-troubleshooting), [ bootstrap VMs that cannot boot up the cluster nodes](#ipi-install-troubleshooting-bootstrap-vm-cannot-boot_ipi-install-troubleshooting), and  [ inspecting logs](#ipi-install-troubleshooting-bootstrap-vm-inspecting-logs_ipi-install-troubleshooting). When installing an {{ product_title }} cluster without the `provisioning` network, this workflow does not apply.

**Figure 3. Troubleshooting workflow for cluster nodes that will not PXE boot**

![Troubleshooting workflow for cluster nodes that will not PXE boot](/images/flow3.png)

This diagram illustrates a troubleshooting workflow for [cluster nodes that will not PXE boot](#ipi-install-troubleshooting-cluster-nodes-will-not-pxe_ipi-install-troubleshooting). If installing using Redfish virtual media, each node must meet minimum firmware requirements for the installation program to deploy the node. For additional details, see [Firmware requirements for installing with virtual media](/installing/installing_bare_metal/ipi/ipi-install-prerequisites#ipi-install-firmware-requirements-for-installing-with-virtual-media_ipi-install-prerequisites).

**Figure 4. Troubleshooting workflow from a non-accessible API to a validated installation**

![Troubleshooting workflow from a non-accessible API to a validated installation](/images/flow4.png)

This diagram illustrates a troubleshooting workflow from
[ a non-accessible API](#investigating-an-unavailable-kubernetes-api_ipi-install-troubleshooting) to a [validated installation](#ipi-install-troubleshooting-reviewing-the-installation_ipi-install-troubleshooting).