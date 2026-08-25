---
title: Understanding how to add custom metrics autoscalers
---

# Understanding how to add custom metrics autoscalers {#nodes-cma-autoscaling-custom-adding}

To add a custom metrics autoscaler, create a `ScaledObject` custom resource for a deployment, stateful set, or custom resource. Create a `ScaledJob` custom resource for a job.

You can create only one scaled object for each workload that you want to scale. Also, you cannot use a scaled object and the horizontal pod autoscaler (HPA) on the same workload.

## Additional resources {#nodes-cma-autoscaling-custom-adding-additional-resources}

- [Understanding custom metrics autoscaler triggers](/nodes/cma/nodes-cma-autoscaling-custom-trigger#nodes-cma-autoscaling-custom-overview-trigger)
- [Understanding custom metrics autoscaler trigger authentications](/nodes/cma/nodes-cma-autoscaling-custom-trigger-auth#nodes-cma-autoscaling-custom-trigger-auth)
