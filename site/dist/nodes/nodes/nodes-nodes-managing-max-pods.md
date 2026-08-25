---
title: Managing the maximum number of pods per node
---

# Managing the maximum number of pods per node {#nodes-nodes-managing-max-pods}

In OpenShift Container Platform, you can configure the number of pods that can run on a node based on the number of processor cores on the node, a hard limit, or both. If you use both options, the lower of the two limits the number of pods on a node. Setting a maximum number of pods can prevent a node from running more pods than its underlying hardware can handle.
