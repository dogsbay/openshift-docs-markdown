---
title: Understanding how to add custom metrics autoscalers
---

{%- set _mod_docs_content_type = "ASSEMBLY" -%}
{%- set context = "nodes-cma-autoscaling-custom-adding" %}
# Understanding how to add custom metrics autoscalers {id="nodes-cma-autoscaling-custom-adding"}
{% include "./_attributes/common-attributes.md" %}

To add a custom metrics autoscaler, create a `ScaledObject` custom resource for a deployment, stateful set, or custom resource. Create a `ScaledJob` custom resource for a job.

You can create only one scaled object for each workload that you want to scale. Also, you cannot use a scaled object and the horizontal pod autoscaler (HPA) on the same workload.

{% leveloffset +1 %}{% include "./modules/nodes-cma-autoscaling-custom-creating-workload.md" %}{% endleveloffset %}

{%- if not (openshift_rosa or openshift_rosa_hcp or openshift_dedicated) %}
{% leveloffset +1 %}{% include "./modules/nodes-cma-autoscaling-custom-creating-job.md" %}{% endleveloffset %}

{% endif %}

## Additional resources {id="nodes-cma-autoscaling-custom-adding-additional-resources"}

*   [Understanding custom metrics autoscaler triggers](/nodes/cma/nodes-cma-autoscaling-custom-trigger#nodes-cma-autoscaling-custom-overview-trigger)
*   [Understanding custom metrics autoscaler trigger authentications](/nodes/cma/nodes-cma-autoscaling-custom-trigger-auth#nodes-cma-autoscaling-custom-trigger-auth)