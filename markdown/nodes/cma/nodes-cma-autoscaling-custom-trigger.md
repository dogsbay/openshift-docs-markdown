---
title: Understanding custom metrics autoscaler triggers
---

{%- set _mod_docs_content_type = "ASSEMBLY" -%}
{%- set context = "nodes-cma-autoscaling-custom-trigger" %}
{% include "./_attributes/common-attributes.md" %}
# Understanding custom metrics autoscaler triggers {id="nodes-cma-autoscaling-custom-overview-trigger"}

Triggers, also known as scalers, provide the metrics that the Custom Metrics Autoscaler Operator uses to scale your pods.

The custom metrics autoscaler currently supports the Prometheus, CPU, memory, Apache Kafka, and cron triggers.

You use a `ScaledObject` or `ScaledJob` custom resource to configure triggers for specific objects, as described in the sections that follow.

You can configure a certificate authority [to use with your scaled objects](/nodes/cma/nodes-cma-autoscaling-custom-trigger-auth#nodes-cma-autoscaling-custom-trigger-auth) or  [for all scalers in the cluster](/nodes/cma/nodes-cma-autoscaling-custom#nodes-cma-autoscaling-custom-ca_nodes-cma-autoscaling-custom).

{% leveloffset +1 %}{% include "./modules/nodes-cma-autoscaling-custom-trigger-prom.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/nodes-cma-autoscaling-custom-trigger-prom-gpu.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/nodes-cma-autoscaling-custom-prometheus-config.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Understanding custom metrics autoscaler trigger authentications](/nodes/cma/nodes-cma-autoscaling-custom-trigger-auth#nodes-cma-autoscaling-custom-trigger-auth)

{% leveloffset +1 %}{% include "./modules/nodes-cma-autoscaling-custom-trigger-cpu.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/nodes-cma-autoscaling-custom-trigger-memory.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/nodes-cma-autoscaling-custom-trigger-kafka.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/nodes-cma-autoscaling-custom-trigger-cron.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/nodes-cma-autoscaling-custom-trigger-workload.md" %}{% endleveloffset %}