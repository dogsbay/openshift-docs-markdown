---
title: Troubleshooting the control plane machine set
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Troubleshooting the control plane machine set {id="cpmso-troubleshooting"}
{%- set context = "cpmso-troubleshooting" %}

Use the following information to understand and recover from issues you might encounter. {._abstract}

{% leveloffset +1 %}{% include "./modules/cpmso-checking-status.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Activating the control plane machine set custom resource](/machine_management/control_plane_machine_management/cpmso-getting-started#cpmso-activating_cpmso-getting-started)
*   [Creating a control plane machine set custom resource](/machine_management/control_plane_machine_management/cpmso-getting-started#cpmso-creating-cr_cpmso-getting-started)

{% leveloffset +1 %}{% include "./modules/cpmso-ts-ilb-missing.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Sample {{ azure_full }} provider specification](/machine_management/control_plane_machine_management/cpmso_provider_configurations/cpmso-config-options-azure#cpmso-yaml-provider-spec-azure_cpmso-config-options-azure)

{% leveloffset +1 %}{% include "./modules/cpmso-ts-mhc-etcd-degraded.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Restoring to an earlier cluster state](/backup_and_restore/control_plane_backup_and_restore/disaster_recovery/scenario-2-restoring-cluster-state#dr-restoring-cluster-state)

{% leveloffset +1 %}{% include "./modules/cpmso-ts-openstack-upgrade.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/cpmso-openstack-ts-root-volume-azs.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/cpmso-openstack-with-az-config.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/cpmso-ts-nutanix-multiple-subnet.md" %}{% endleveloffset %}