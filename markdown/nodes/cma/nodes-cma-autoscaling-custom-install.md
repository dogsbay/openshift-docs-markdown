---
title: Installing the custom metrics autoscaler
---

{%- set _mod_docs_content_type = "ASSEMBLY" -%}
{%- set context = "nodes-cma-autoscaling-custom-install" %}
# Installing the custom metrics autoscaler {id="nodes-cma-autoscaling-custom-install"}
{% include "./_attributes/common-attributes.md" %}

You can use the {{ product_title }} web console to install the Custom Metrics Autoscaler Operator.

The installation creates the following five CRDs:

*   `ClusterTriggerAuthentication`
*   `KedaController`
*   `ScaledJob`
*   `ScaledObject`
*   `TriggerAuthentication`

The installation process also creates the `KedaController` custom resource (CR). You can modify the default `KedaController` CR, if needed. For more information, see "Editing the Keda Controller CR".


:::note

If you are installing a Custom Metrics Autoscaler Operator version lower than 2.17.2, you must manually create the Keda Controller CR. You can use the procedure described in "Editing the Keda Controller CR" to create the CR.

:::


{% if not (openshift_rosa or openshift_rosa_hcp or openshift_dedicated) %}
{% leveloffset +1 %}{% include "./modules/nodes-cma-autoscaling-custom-install.md" %}{% endleveloffset %}

{% endif %}

{% if openshift_rosa or openshift_rosa_hcp or openshift_dedicated %}
{% leveloffset +1 %}{% include "./modules/sd-nodes-cma-autoscaling-custom-install.md" %}{% endleveloffset %}

{% endif %}

{% leveloffset +1 %}{% include "./modules/nodes-cma-autoscaling-keda-controller-edit.md" %}{% endleveloffset %}