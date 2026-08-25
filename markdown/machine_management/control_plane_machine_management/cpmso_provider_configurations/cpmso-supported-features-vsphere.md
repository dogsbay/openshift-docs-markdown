---
title: "Configuring {{ vmw_first }} features for control plane machines"
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Configuring {{ vmw_first }} features for control plane machines {id="cpmso-supported-features-vsphere"}
{%- set context = "cpmso-supported-features-vsphere" %}

You can enable or change the configuration of features for your control plane machines by editing values in the control plane machine set specification.

When you save an update to the control plane machine set, the Control Plane Machine Set Operator updates the control plane machines according to your configured update strategy.
For more information, see "Updating the control plane configuration".

{% leveloffset +1 %}{% include "./modules/machine-api-vmw-add-tags.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/machineset-vsphere-data-disks.md" %}{% endleveloffset %}

## Additional resources {id="additional-resources_{{ context }}"}
*   [Updating the control plane configuration](/machine_management/control_plane_machine_management/cpmso-managing-machines#cpmso-feat-config-update_cpmso-managing-machines)
*   [Control plane configuration options for {{ vmw_full }}](/machine_management/control_plane_machine_management/cpmso_provider_configurations/cpmso-config-options-vsphere#cpmso-config-options-vsphere)