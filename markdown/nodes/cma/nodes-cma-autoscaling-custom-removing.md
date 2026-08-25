---
title: Removing the Custom Metrics Autoscaler Operator
---

{%- set _mod_docs_content_type = "ASSEMBLY" -%}
{%- set context = "nodes-cma-autoscaling-custom-removing" %}
{% include "./_attributes/common-attributes.md" %}
# Removing the Custom Metrics Autoscaler Operator {id="nodes-cma-autoscaling-custom-removing"}

You can remove the custom metrics autoscaler from your {{ product_title }} cluster. After removing the Custom Metrics Autoscaler Operator, remove other components associated with the Operator to avoid potential issues.

{% if not (openshift_rosa or openshift_rosa_hcp or openshift_dedicated) %}

:::note

Delete the `KedaController` custom resource (CR) first. If you do not delete the `KedaController` CR, {{ product_title }} can hang when you delete the `openshift-keda` project. If you delete the Custom Metrics Autoscaler Operator before deleting the CR, you are not able to delete the CR.

:::

{% endif %}
{% if openshift_rosa or openshift_rosa_hcp or openshift_dedicated %}

:::note

Delete the `KedaController` custom resource (CR) first. If you do not delete the `KedaController` CR, {{ product_title }} can hang when you delete the `keda` project. If you delete the Custom Metrics Autoscaler Operator before deleting the CR, you are not able to delete the CR.

:::

{% endif %}

{% leveloffset +1 %}{% include "./modules/nodes-cma-autoscaling-custom-uninstalling.md" %}{% endleveloffset %}