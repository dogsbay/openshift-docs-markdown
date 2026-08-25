---
title: Disabling the control plane machine set
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Disabling the control plane machine set {id="cpmso-disabling"}
{%- set context = "cpmso-disabling" %}

Disable the control plane machine set if you need to manually manage control plane machines or troubleshoot Operator behavior. {._abstract}

The `.spec.state` field in an activated `ControlPlaneMachineSet` custom resource (CR) cannot be changed from `Active` to `Inactive`. To disable the control plane machine set, you must delete the CR so that it is removed from the cluster.

When you delete the CR, the Control Plane Machine Set Operator performs cleanup operations and disables the control plane machine set. The Operator then removes the CR from the cluster and creates an inactive control plane machine set with default settings.

{% leveloffset +1 %}{% include "./modules/cpmso-deleting.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/cpmso-checking-status.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/cpmso-reenabling.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Activating the control plane machine set custom resource](/machine_management/control_plane_machine_management/cpmso-getting-started#cpmso-activating_cpmso-getting-started)