---
title: "Configuring {{ gcp_full }} features for control plane machines"
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Configuring {{ gcp_full }} features for control plane machines {id="cpmso-supported-features-gcp"}
{%- set context = "cpmso-supported-features-gcp" %}

You can enable or change the configuration of features for your control plane machines by editing values in the control plane machine set specification. {._abstract}

When you save an update to the control plane machine set, the Control Plane Machine Set Operator updates the control plane machines according to your configured update strategy.
For more information, see "Updating the control plane configuration".

{% leveloffset +1 %}{% include "./modules/machineset-gcp-pd-disk-types.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/machineset-gcp-confidential-vm.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/machineset-gcp-shielded-vms.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [What is Shielded VM? ({{ gcp_short }} documentation)](https://cloud.google.com/compute/shielded-vm/docs/shielded-vm)
*   [Secure Boot ({{ gcp_short }} documentation)](https://cloud.google.com/compute/shielded-vm/docs/shielded-vm#secure-boot)
*   [Virtual Trusted Platform Module (vTPM) ({{ gcp_short }} documentation)](https://cloud.google.com/compute/shielded-vm/docs/shielded-vm#vtpm)
*   [Integrity monitoring ({{ gcp_short }} documentation)](https://cloud.google.com/compute/shielded-vm/docs/shielded-vm#integrity-monitoring)

{% leveloffset +1 %}{% include "./modules/machineset-gcp-enabling-customer-managed-encryption.md" %}{% endleveloffset %}

## Additional resources {id="additional-resources_{{ context }}" ._additional-resources}
*   [Updating the control plane configuration](/machine_management/control_plane_machine_management/cpmso-managing-machines#cpmso-feat-config-update_cpmso-managing-machines)
*   [Control plane configuration options for {{ gcp_full }}](/machine_management/control_plane_machine_management/cpmso_provider_configurations/cpmso-config-options-gcp#cpmso-config-options-gcp)