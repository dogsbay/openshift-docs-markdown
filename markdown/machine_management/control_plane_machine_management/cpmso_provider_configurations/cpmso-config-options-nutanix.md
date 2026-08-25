---
title: Control plane configuration options for Nutanix
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Control plane configuration options for Nutanix {id="cpmso-config-options-nutanix"}
{%- set context = "cpmso-config-options-nutanix" %}

You can update your control plane machines to reflect changes in your infrastructure or environment by editing values in the control plane machine set specification. {._abstract}

When you save an update to the control plane machine set, the Control Plane Machine Set Operator updates the control plane machines according to your configured update strategy.
For more information, see "Updating the control plane configuration".

The following example YAML snippets show provider specification and failure domain configurations for a Nutanix cluster.

{% leveloffset +1 %}{% include "./modules/cpmso-yaml-provider-spec-nutanix.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/mapi-failure-domain-nutanix.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/cpmso-ts-nutanix-multiple-subnet.md" %}{% endleveloffset %}

## Additional resources {id="additional-resources_{{ context }}" ._additional-resources}
*   [Updating the control plane configuration](/machine_management/control_plane_machine_management/cpmso-managing-machines#cpmso-feat-config-update_cpmso-managing-machines)
*   [Adding failure domains to an existing Nutanix cluster](/installing/installing_nutanix/nutanix-failure-domains#nutanix-failure-domains-adding-to-existing-cluster_nutanix-failure-domains)