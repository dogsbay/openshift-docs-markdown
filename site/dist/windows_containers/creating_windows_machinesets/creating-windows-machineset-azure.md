---
title: Creating a Windows machine set on Azure
---

# Creating a Windows machine set on Azure {#creating-windows-machineset-azure}

You can use a `MachineSet` custom resource (CR) to add a Windows compute node to your {{ azure_full }} cluster, where you can run Windows container workloads.

For example, you might create infrastructure Windows machine sets and related machines so that you can move supporting Windows workloads to the new Windows machines. For more information about machine sets, see "Overview of machine management".

## Prerequisites {#prerequisites_creating-windows-machineset-azure}

- You installed the Windows Machine Config Operator (WMCO) using Operator Lifecycle Manager (OLM).
- You are using a supported Windows Server as the operating system image.

## Additional resources {#_additional_resources}

- [Overview of machine management](/openshift-docs-markdown/machine_management/index#overview-of-machine-management)
