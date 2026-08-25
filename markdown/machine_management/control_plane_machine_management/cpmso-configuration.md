---
title: Control plane machine set configuration
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Control plane machine set configuration {id="cpmso-configuration"}
{%- set context = "cpmso-configuration" %}

Use a control plane machine set to automate management and recovery of control plane machines in your cluster. {._abstract}

{% leveloffset +1 %}{% include "./modules/cpmso-yaml-sample-cr.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Getting started with control plane machine sets](/machine_management/control_plane_machine_management/cpmso-getting-started#cpmso-getting-started)
*   [Updating the control plane configuration](/machine_management/control_plane_machine_management/cpmso-managing-machines#cpmso-feat-config-update_cpmso-managing-machines)

{% leveloffset +1 %}{% include "./modules/cpmso-config-options-overview.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/cpmso-config-options.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Replacing a control plane machine](/machine_management/control_plane_machine_management/cpmso-managing-machines#cpmso-feat-replace_cpmso-managing-machines)

{% leveloffset +1 %}{% include "./modules/cpmso-config-provider-specific.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Control plane configuration options for {{ aws_full }}](/machine_management/control_plane_machine_management/cpmso_provider_configurations/cpmso-config-options-aws#cpmso-config-options-aws)
*   [Control plane configuration options for {{ gcp_full }}](/machine_management/control_plane_machine_management/cpmso_provider_configurations/cpmso-config-options-gcp#cpmso-config-options-gcp)
*   [Control plane configuration options for {{ azure_full }}](/machine_management/control_plane_machine_management/cpmso_provider_configurations/cpmso-config-options-azure#cpmso-config-options-azure)
*   [Control plane configuration options for Nutanix](/machine_management/control_plane_machine_management/cpmso_provider_configurations/cpmso-config-options-nutanix#cpmso-config-options-nutanix)
*   [Control plane configuration options for {{ rh_openstack_first }}](/machine_management/control_plane_machine_management/cpmso_provider_configurations/cpmso-config-options-openstack#cpmso-config-options-openstack)
*   [Control plane configuration options for {{ vmw_full }}](/machine_management/control_plane_machine_management/cpmso_provider_configurations/cpmso-config-options-vsphere#cpmso-config-options-vsphere)