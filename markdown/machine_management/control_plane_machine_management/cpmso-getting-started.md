---
title: Getting started with control plane machine sets
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Getting started with control plane machine sets {id="cpmso-getting-started"}
{%- set context = "cpmso-getting-started" %}

Set up the control plane machine set to enable automated management, recovery, and configuration updates for control plane machines in your cluster. {._abstract}

The process for getting started with control plane machine sets depends on the state of the `ControlPlaneMachineSet` custom resource (CR) in your cluster.


Clusters with an active generated CR
:   Clusters that have a generated CR with an active state use the control plane machine set by default. No administrator action is required.


Clusters with an inactive generated CR
:   For clusters that include an inactive generated CR, you must review the CR configuration and [activate the CR](/machine_management/control_plane_machine_management/cpmso-getting-started#cpmso-activating_cpmso-getting-started).


Clusters without a generated CR
:   For clusters that do not include a generated CR, you must [create and activate a CR](/machine_management/control_plane_machine_management/cpmso-getting-started#cpmso-creating-cr_cpmso-getting-started) with the appropriate configuration for your cluster.

If you are uncertain about the state of the `ControlPlaneMachineSet` CR in your cluster, you can [verify the CR status](/machine_management/control_plane_machine_management/cpmso-getting-started#cpmso-checking-status_cpmso-getting-started).

## Supported cloud providers {id="cpmso-platform-matrix_{{ context }}"}

In {{ product_title }} {{ product_version }}, the control plane machine set is supported for Amazon Web Services (AWS), {{ gcp_first }}, Microsoft Azure, Nutanix, and VMware vSphere clusters.

The status of the control plane machine set after installation depends on your cloud provider and the version of {{ product_title }} that you installed on your cluster.

**Control plane machine set implementation for {{ product_title }} {{ product_version }}**

| Cloud provider | Active by default | Generated CR | Manual CR required |
| :-- | :-: | :-: | :-: |
| {{ aws_first }} | X <sup>[1]</sup> | X |  |
| {{ gcp_first }} | X <sup>[2]</sup> | X |  |
| {{ azure_first }} | X <sup>[2]</sup> | X |  |
| Nutanix | X <sup>[3]</sup> | X |  |
| {{ rh_openstack_first }} | X <sup>[3]</sup> | X |  |
| {{ vmw_full }} | X <sup>[4]</sup> | X |  |

1.  {{ aws_short }} clusters that are upgraded from version 4.11 or earlier require [CR activation](/machine_management/control_plane_machine_management/cpmso-getting-started#cpmso-activating_cpmso-getting-started).
1.  {{ gcp_short }} and {{ azure_short }} clusters that are upgraded from version 4.12 or earlier require [CR activation](/machine_management/control_plane_machine_management/cpmso-getting-started#cpmso-activating_cpmso-getting-started).
1.  Nutanix and {{ rh_openstack }} clusters that are upgraded from version 4.13 or earlier require [CR activation](/machine_management/control_plane_machine_management/cpmso-getting-started#cpmso-activating_cpmso-getting-started).
1.  {{ vmw_short }} clusters that are upgraded from version 4.15 or earlier require [CR activation](/machine_management/control_plane_machine_management/cpmso-getting-started#cpmso-activating_cpmso-getting-started).

{% leveloffset +1 %}{% include "./modules/cpmso-checking-status.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/cpmso-activating.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Control plane machine set configuration](/machine_management/control_plane_machine_management/cpmso-configuration#cpmso-configuration)

{% leveloffset +1 %}{% include "./modules/cpmso-creating-cr.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Updating the control plane configuration](/machine_management/control_plane_machine_management/cpmso-managing-machines#cpmso-feat-config-update_cpmso-managing-machines)
*   [Control plane machine set configuration](/machine_management/control_plane_machine_management/cpmso-configuration#cpmso-configuration)
*   [Provider-specific configuration options](/machine_management/control_plane_machine_management/cpmso-configuration#cpmso-config-provider-specific_cpmso-configuration)