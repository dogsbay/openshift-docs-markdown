---
title: Planning your environment according to object maximums
---

# Planning your environment according to object maximums {#planning-your-environment-according-to-object-maximums}

To ensure your cluster meets performance and scalability requirements, plan your environment according to tested object maximums. By reviewing these limits, you can design a OpenShift Container Platform deployment that operates reliably within supported boundaries.

The example guidelines are based on the largest possible cluster. For smaller clusters, the maximums are lower. There are many factors that influence the stated thresholds, including the etcd version or storage data format. In most cases, exceeding these numbers results in lower overall performance but might not cause your cluster to fail.

> [!WARNING]
> Clusters that experience rapid change, such as those with many starting and stopping pods, can have a lower practical maximum size than documented.
