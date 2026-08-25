---
title: About control plane machine sets
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
# About control plane machine sets {id="cpmso-about"}
{% include "./_attributes/common-attributes.md" %}
{%- set context = "cpmso-about" %}

With control plane machine sets, you can automate management of the control plane machine resources within your {{ product_title }} cluster, simplifying upgrades and recovery from degraded control plane machines.


:::important

Control plane machine sets cannot manage compute machines, and compute machine sets cannot manage control plane machines.

:::


Control plane machine sets provide for control plane machines similar management capabilities as compute machine sets provide for compute machines. However, these two types of machine sets are separate custom resources defined within the Machine API and have several fundamental differences in their architecture and functionality.

{% leveloffset +1 %}{% include "./modules/cpmso-overview.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/cpmso-limitations.md" %}{% endleveloffset %}

## Additional resources {id="additional-resources_cpmso-about"}

*   [Control Plane Machine Set Operator reference](/operators/operator-reference#control-plane-machine-set-operator_operator-reference)
*   [`ControlPlaneMachineSet` custom resource](/rest_api/machine_apis/controlplanemachineset-machine-openshift-io-v1#controlplanemachineset-machine-openshift-io-v1)