---
title: Understanding custom metrics autoscaler triggers
---

# Understanding custom metrics autoscaler triggers {#nodes-cma-autoscaling-custom-overview-trigger}

Triggers, also known as scalers, provide the metrics that the Custom Metrics Autoscaler Operator uses to scale your pods.

The custom metrics autoscaler currently supports the Prometheus, CPU, memory, Apache Kafka, and cron triggers.

You use a `ScaledObject` or `ScaledJob` custom resource to configure triggers for specific objects, as described in the sections that follow.

You can configure a certificate authority [to use with your scaled objects](/openshift-docs-markdown/nodes/cma/nodes-cma-autoscaling-custom-trigger-auth#nodes-cma-autoscaling-custom-trigger-auth) or  [for all scalers in the cluster](/openshift-docs-markdown/nodes/cma/nodes-cma-autoscaling-custom#nodes-cma-autoscaling-custom-ca_nodes-cma-autoscaling-custom).

**Additional resources**

- [Understanding custom metrics autoscaler trigger authentications](/openshift-docs-markdown/nodes/cma/nodes-cma-autoscaling-custom-trigger-auth#nodes-cma-autoscaling-custom-trigger-auth)
