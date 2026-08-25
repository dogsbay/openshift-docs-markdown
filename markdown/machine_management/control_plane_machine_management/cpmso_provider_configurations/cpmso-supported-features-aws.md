---
title: "Configuring {{ aws_full }} features for control plane machines"
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Configuring {{ aws_full }} features for control plane machines {id="cpmso-supported-features-aws"}
{%- set context = "cpmso-supported-features-aws" %}

You can enable or change the configuration of features for your control plane machines by editing values in the control plane machine set specification. {._abstract}

When you save an update to the control plane machine set, the Control Plane Machine Set Operator updates the control plane machines according to your configured update strategy.
For more information, see "Updating the control plane configuration".

{% leveloffset +1 %}{% include "./modules/private-clusters-setting-api-private-aws.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Configuring the Ingress Controller endpoint publishing scope to Internal](/networking/ingress_load_balancing/configuring_ingress_cluster_traffic/nw-configuring-ingress-controller-endpoint-publishing-strategy#nw-ingresscontroller-change-internal_nw-configuring-ingress-controller-endpoint-publishing-strategy)

{% leveloffset +1 %}{% include "./modules/cpms-changing-aws-instance-type.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/machineset-aws-existing-placement-group.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/machineset-creating-imds-options.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Boot image management](/machine_configuration/mco-update-boot-images#mco-update-boot-images)

{% leveloffset +1 %}{% include "./modules/machineset-creating-gp3-throughput.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/machineset-creating-dedicated-instances.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/machineset-capacity-reservation.md" %}{% endleveloffset %}

## Additional resources {id="additional-resources_{{ context }}" ._additional-resources}
*   [Updating the control plane configuration](/machine_management/control_plane_machine_management/cpmso-managing-machines#cpmso-feat-config-update_cpmso-managing-machines)
*   [Control plane configuration options for {{ aws_full }}](/machine_management/control_plane_machine_management/cpmso_provider_configurations/cpmso-config-options-aws#cpmso-config-options-aws)