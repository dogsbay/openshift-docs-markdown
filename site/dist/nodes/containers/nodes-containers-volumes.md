---
title: Using volumes to persist container data
---

# Using volumes to persist container data {#nodes-containers-volumes}

You can use *volumes* to persist the data used by the containers in a pod. A volume is directory, accessible to the containers in a pod, where data is stored for the life of the pod.

Files in a container are ephemeral. As such, when a container crashes or stops, the data is lost.
