---
title: Including pod priority in pod scheduling decisions
---

# Including pod priority in pod scheduling decisions {#nodes-pods-priority}

Pod priority ranks pods by importance to influence scheduling order, sort out-of-resource evictions, and enable preemption, where higher-priority pods can evict lower-priority pods when resources are constrained.

To use priority and preemption, you create priority classes that define the relative weight of your pods. Then, reference a priority class in the pod specification to apply that weight for scheduling.
