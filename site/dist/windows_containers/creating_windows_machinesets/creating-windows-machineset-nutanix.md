---
title: Creating a Windows MachineSet object on Nutanix
---

# Creating a Windows MachineSet object on Nutanix {#creating-windows-machineset-nutanix}

You can use a `MachineSet` custom resource (CR) to add a Windows compute node to your Nutanix cluster, where you can run Windows container workloads.

For example, you might create infrastructure Windows machine sets and related machines so that you can move supporting Windows workloads to the new Windows machines. For more information about machine sets, see "Overview of machine management".

## Prerequisites {#prerequisites_creating-windows-machineset-nutanix}

- You installed the Windows Machine Config Operator (WMCO) using Operator Lifecycle Manager (OLM).
- You are using a supported Windows Server as the operating system image.
- You added a new DNS entry for the internal API server URL, `api-int.<cluster_name>.<base_domain>`, that points to the external API server URL, `api.<cluster_name>.<base_domain>`. This can be a CNAME or an additional A record.

## Additional resources {#_additional_resources}

- [Overview of machine management](/machine_management/index#overview-of-machine-management)
- [Understanding UEFI, Secure Boot, and TPM in the Virtualized Environment (Nutanix documenation)](https://portal.nutanix.com/page/documents/kbs/details?targetId=kA07V000000H3K9SAK)
