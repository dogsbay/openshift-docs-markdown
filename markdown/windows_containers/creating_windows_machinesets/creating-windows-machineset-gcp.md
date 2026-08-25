---
title: "Creating a Windows machine set on {{ gcp_short }}"
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Creating a Windows machine set on {{ gcp_short }} {id="creating-windows-machineset-gcp"}
{%- set context = "creating-windows-machineset-gcp" %}

You can use a `MachineSet` custom resource (CR) to add a Windows compute node to your {{ gcp_full }} cluster, where you can run Windows container workloads. {._abstract}

For example, you might create infrastructure Windows machine sets and related machines so that you can move supporting Windows workloads to the new Windows machines. For more information about machine sets, see "Overview of machine management".

## Prerequisites {id="prerequisites_creating-windows-machineset-gcp"}

*   You installed the Windows Machine Config Operator (WMCO) using Operator Lifecycle Manager (OLM).
*   You are using a supported Windows Server as the operating system image.

{% leveloffset +1 %}{% include "./modules/windows-machineset-gcp.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/machineset-creating.md" %}{% endleveloffset %}

## Additional resources {id="creating-windows-machineset-gcp-additional" ._additional-resources}

*   [Overview of machine management](/machine_management/index#overview-of-machine-management)