---
title: Applying autoscaling to an OpenShift Container Platform cluster
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Applying autoscaling to an {{ product_title }} cluster {id="applying-autoscaling"}

{%- set context = "applying-autoscaling" %}

Apply autoscaling to an {{ product_title }} cluster to automatically adjust the size of the cluster to meet deployment needs. You can deploy a cluster autoscaler and then deploy machine autoscalers for each machine type in your cluster. After you configure the cluster autoscaler, you must configure at least one machine autoscaler. {._abstract}


:::important

You can configure the cluster autoscaler only in clusters where the Machine API Operator is operational.

:::


{% leveloffset +1 %}{% include "./modules/cluster-autoscaler-about.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/cluster-autoscaler-cr.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/cluster-autoscaler-config-priority-expander.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/machineset-label-gpu-autoscaler.md" %}{% endleveloffset %}

{%- set FeatureName = "cluster autoscaler" -%}
{%- set FeatureResourceName = "ClusterAutoscaler" %}
{% leveloffset +2 %}{% include "./modules/deploying-resource.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/machine-autoscaler-about.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/machine-autoscaler-configuring.md" %}{% endleveloffset %}

{% leveloffset +3 %}{% include "./modules/machine-autoscaler-cr.md" %}{% endleveloffset %}

{%- set FeatureName = "machine autoscaler" -%}
{%- set FeatureResourceName = "MachineAutoscaler" %}
{% leveloffset +2 %}{% include "./modules/deploying-resource.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/deleting-machine-autoscaler.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/deleting-cluster-autoscaler.md" %}{% endleveloffset %}

## Additional resources {id="_additional_resources" ._additional-resources}

*   [Including pod priority in pod scheduling decisions in {{ product_title }}](/nodes/pods/nodes-pods-priority#nodes-pods-priority)