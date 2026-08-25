{%- set _mod_docs_content_type = "REFERENCE" %}
# Managing Windows container workloads {id="managing-windows-container-workloads_{{ context }}"}

With a Red Hat subscription, you can get support for running Windows workloads in {{ product_title }}. {._abstract}

Windows instances deployed by the WMCO are configured with the containerd container runtime. For more information, see the [release notes](/windows_containers/wmco_rn/windows-containers-release-notes#windows-containers-release-notes).

You can add Windows nodes either by creating a [compute machine set](/windows_containers/creating_windows_machinesets/creating-windows-machineset-aws#creating-windows-machineset-aws) or by specifying existing Bring-Your-Own-Host (BYOH) Windows instances through a [ConfigMap](/windows_containers/byoh-windows-instance#byoh-windows-instance).


:::note

Compute machine sets are not supported for bare metal or provider agnostic clusters.

:::


For workloads including both Linux and Windows, {{ product_title }} allows you to deploy Windows workloads running on Windows Server containers while also providing traditional Linux workloads hosted on {{ op_system_first }} or {{ op_system_base_full }}. For more information, see [getting started with Windows container workloads](/windows_containers/understanding-windows-container-workloads#understanding-windows-container-workloads).

You need the WMCO to run Windows workloads in your cluster. The WMCO orchestrates the process of deploying and managing Windows workloads on a cluster. For more information, see [how to enable Windows container workloads](/windows_containers/enabling-windows-container-workloads#enabling-windows-container-workloads).

You can create a Windows `MachineSet` object to create infrastructure Windows machine sets and related machines so that you can move supported Windows workloads to the new Windows machines. You can create a Windows `MachineSet` object on multiple platforms.

You can [schedule Windows workloads](/windows_containers/scheduling-windows-workloads#scheduling-windows-workloads) to Windows compute nodes.

You can [perform Windows Machine Config Operator upgrades](/windows_containers/windows-node-upgrades#windows-node-upgrades) to ensure that your Windows nodes have the latest updates.

You can [remove a Windows node](/windows_containers/removing-windows-nodes#removing-windows-nodes) by deleting a specific machine.

You can [use Bring-Your-Own-Host (BYOH) Windows instances](/windows_containers/byoh-windows-instance#byoh-windows-instance) to repurpose Windows Server VMs and bring them to {{ product_title }}. BYOH Windows instances benefit users who are looking to mitigate major disruptions when a Windows server goes offline. You can use BYOH Windows instances as nodes on {{ product_title }} 4.8 and later versions.

You can [disable Windows container workloads](/windows_containers/disabling-windows-container-workloads#disabling-windows-container-workloads) by performing the following:

*   Uninstalling the Windows Machine Config Operator
*   Deleting the Windows Machine Config Operator namespace