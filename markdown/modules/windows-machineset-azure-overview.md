{%- set _mod_docs_content_type = "CONCEPT" %}
# Windows machine set on Azure {id="windows-machineset-azure-overview_{{ context }}"}

You can use a `MachineSet` custom resource (CR) to add a Windows compute node to your {{ azure_full }} cluster, where you can run Windows container workloads. {._abstract}

For example, you might create infrastructure Windows machine sets and related machines so that you can move supporting Windows workloads to the new Windows machines. For more information about machine sets, see "Overview of machine management" in the _Additional resources_ section.

## Prerequisites {id="_prerequisites"}

*   You have installed the Windows Machine Config Operator (WMCO) using Operator Lifecycle Manager (OLM).
*   You are using a supported Windows Server as the operating system image.

## Additional resources {id="additional-resources-windows-machineset-azure-overview_{{ context }}" ._additional-resources}

*   [Overview of machine management](/machine_management/index#overview-of-machine-management)