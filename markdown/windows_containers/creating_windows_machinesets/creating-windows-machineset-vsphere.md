---
title: Creating a Windows machine set on vSphere
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Creating a Windows machine set on vSphere {id="creating-windows-machineset-vsphere"}
{%- set context = "creating-windows-machineset-vsphere" %}

You can use a `MachineSet` custom resource (CR) to add a Windows compute node to your {{ vmw_full }} cluster, where you can run Windows container workloads. {._abstract}

For example, you might create infrastructure Windows machine sets and related machines so that you can move supporting Windows workloads to the new Windows machines. For more information about machine sets, see "Overview of machine management" in the _Additional resources_ section.

## Prerequisites {id="prerequisites_creating-windows-machineset-vsphere"}

*   You installed the Windows Machine Config Operator (WMCO) using Operator Lifecycle Manager (OLM).
*   You are using a supported Windows Server as the operating system image.
*   You must prepare your vSphere environment for Windows container workloads by creating the vSphere Windows VM golden image. See "Creating the vSphere Windows VM golden image" in this section.
*   You must enable communication with the internal API server for the WMCO. See "Enabling communication with the internal API server for the WMCO on vSphere" in this section.

{% leveloffset +1 %}{% include "./modules/creating-the-vsphere-windows-vm-golden-image.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/enabling-internal-api-server-vsphere.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/windows-machineset-vsphere.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/machineset-creating.md" %}{% endleveloffset %}

## Additional resources {id="additional-resources_{{ context }}" ._additional-resources}

*   [Configuring a secret for the Windows Machine Config Operator](/windows_containers/enabling-windows-container-workloads#configuring-secret-for-wmco_enabling-windows-container-workloads)
*   [VMware vSphere infrastructure requirements](/installing/installing_vsphere/ipi/ipi-vsphere-installation-reqs#installation-vsphere-infrastructure_ipi-vsphere-installation-reqs)
*   [Overview of machine management](/machine_management/index#overview-of-machine-management)
*   [Object Names and IDs specification (Kubernetes documentation)](https://kubernetes.io/docs/concepts/overview/working-with-objects/names)
*   [Password must meet complexity requirements (Microsoft documentation)](https://docs.microsoft.com/en-us/windows/security/threat-protection/security-policy-settings/password-must-meet-complexity-requirements)
*   [vSphere Virtual Machine Administration (vSphere documentation)](https://techdocs.broadcom.com/us/en/vmware-cis/vsphere/vsphere/7-0/vsphere-virtual-machine-administration.html)