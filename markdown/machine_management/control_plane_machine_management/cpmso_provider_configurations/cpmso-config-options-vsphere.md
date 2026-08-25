---
title: Control plane configuration options for VMware vSphere
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Control plane configuration options for VMware vSphere {id="cpmso-config-options-vsphere"}
{%- set context = "cpmso-config-options-vsphere" %}

You can update your control plane machines to reflect changes in your infrastructure or environment by editing values in the control plane machine set specification. {._abstract}

When you save an update to the control plane machine set, the Control Plane Machine Set Operator updates the control plane machines according to your configured update strategy.
For more information, see "Updating the control plane configuration".

The following example YAML snippets show provider specification and failure domain configurations for a {{ vmw_short }} cluster.

{% leveloffset +1 %}{% include "./modules/cpmso-yaml-provider-spec-vsphere.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/cpmso-yaml-failure-domain-vsphere.md" %}{% endleveloffset %}

## Additional resources {id="additional-resources_{{ context }}" ._additional-resources}
*   [Updating the control plane configuration](/machine_management/control_plane_machine_management/cpmso-managing-machines#cpmso-feat-config-update_cpmso-managing-machines)
*   [Configuring {{ vmw_full }} features for control plane machines](/machine_management/control_plane_machine_management/cpmso_provider_configurations/cpmso-supported-features-vsphere#cpmso-supported-features-vsphere)
*   [Specifying multiple regions and zones for your cluster on {{ vmw_short }}](/installing/installing_vsphere/post-install-vsphere-zones-regions-configuration#specifying-regions-zones-infrastructure-vsphere_post-install-vsphere-zones-regions-configuration)