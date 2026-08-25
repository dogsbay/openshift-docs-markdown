---
title: Admission plugins
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
# Admission plugins {id="admission-plug-ins"}
{% include "./_attributes/common-attributes.md" %}
{%- set context = "admission-plug-ins" %}

You can use admission plugins to regulate how {{ product_title }} functions. The default set of admission plugins for {{ product_title }} ensures proper functioning for your cluster.

{% leveloffset +1 %}{% include "./modules/admission-plug-ins-about.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/admission-plug-ins-default.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/admission-webhooks-about.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/admission-webhook-types.md" %}{% endleveloffset %}

{%- if not (openshift_rosa or openshift_dedicated) %}
{% leveloffset +1 %}{% include "./modules/configuring-dynamic-admission.md" %}{% endleveloffset %}
{% endif %}

## Additional resources {id="admission-plug-ins-additional-resources"}

{% if not (openshift_rosa or openshift_dedicated) %}
*   [Configuring the SR-IOV Network Operator](/networking/networking_operators/sr-iov-operator/configuring-sriov-operator#configuring-sriov-operator_configuring-sriov-operator)
*   [Controlling pod placement using node taints](/nodes/scheduling/nodes-scheduler-taints-tolerations#nodes-scheduler-taints-tolerations_dedicating_nodes-scheduler-taints-tolerations)
{% endif %}
*   [Including pod priority in pod scheduling decisions](/nodes/pods/nodes-pods-priority#admin-guide-priority-preemption-names_nodes-pods-priority)