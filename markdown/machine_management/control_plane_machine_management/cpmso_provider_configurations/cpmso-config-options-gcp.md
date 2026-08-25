---
title: "Control plane configuration options for {{ gcp_full }}"
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Control plane configuration options for {{ gcp_full }} {id="cpmso-config-options-gcp"}
{%- set context = "cpmso-config-options-gcp" %}

You can update your control plane machines to reflect changes in your infrastructure or environment by editing values in the control plane machine set specification.

When you save an update to the control plane machine set, the Control Plane Machine Set Operator updates the control plane machines according to your configured update strategy.
For more information, see "Updating the control plane configuration".

The following example YAML snippets show provider specification and failure domain configurations for a {{ gcp_short }} cluster.

{% leveloffset +1 %}{% include "./modules/cpmso-yaml-provider-spec-gcp.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/cpmso-yaml-failure-domain-gcp.md" %}{% endleveloffset %}

## Additional resources {id="additional-resources_{{ context }}"}
*   [Updating the control plane configuration](/machine_management/control_plane_machine_management/cpmso-managing-machines#cpmso-feat-config-update_cpmso-managing-machines)
*   [Configuring {{ gcp_full }} features for control plane machines](/machine_management/control_plane_machine_management/cpmso_provider_configurations/cpmso-supported-features-gcp#cpmso-supported-features-gcp)