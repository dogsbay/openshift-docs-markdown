---
title: "Configuring {{ azure_full }} features for control plane machines"
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Configuring {{ azure_full }} features for control plane machines {id="cpmso-supported-features-azure"}
{%- set context = "cpmso-supported-features-azure" %}

You can enable or change the configuration of features for your control plane machines by editing values in the control plane machine set specification.

When you save an update to the control plane machine set, the Control Plane Machine Set Operator updates the control plane machines according to your configured update strategy.
For more information, see "Updating the control plane configuration".

{% leveloffset +1 %}{% include "./modules/private-clusters-setting-api-private-azure.md" %}{% endleveloffset %}

**Additional resources**

*   [Configuring the Ingress Controller endpoint publishing scope to Internal](/networking/ingress_load_balancing/configuring_ingress_cluster_traffic/nw-configuring-ingress-controller-endpoint-publishing-strategy#nw-ingresscontroller-change-internal_nw-configuring-ingress-controller-endpoint-publishing-strategy)

{% leveloffset +1 %}{% include "./modules/installation-azure-marketplace-subscribe.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/machineset-azure-boot-diagnostics.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/machineset-azure-ultra-disk.md" %}{% endleveloffset %}

**Additional resources**

*   [{{ azure_full }} ultra disks documentation](https://docs.microsoft.com/en-us/azure/virtual-machines/disks-types#ultra-disks)

{% leveloffset +2 %}{% include "./modules/machineset-creating-azure-ultra-disk.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/machineset-troubleshooting-azure-ultra-disk.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/machineset-customer-managed-encryption-azure.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/machineset-azure-trusted-launch.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/machineset-azure-confidential-vms.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/machineset-capacity-reservation.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/machineset-azure-accelerated-networking.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/machineset-azure-enabling-accelerated-networking-existing.md" %}{% endleveloffset %}

## Additional resources {id="additional-resources_{{ context }}"}
*   [Updating the control plane configuration](/machine_management/control_plane_machine_management/cpmso-managing-machines#cpmso-feat-config-update_cpmso-managing-machines)
*   [Control plane configuration options for {{ azure_full }}](/machine_management/control_plane_machine_management/cpmso_provider_configurations/cpmso-config-options-azure#cpmso-config-options-azure)