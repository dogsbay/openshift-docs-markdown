---
title: Understanding update channels and releases
---

# Understanding update channels and releases {#understanding-update-channels-releases}

Update channels are the mechanism by which users declare the OpenShift Container Platform minor version they intend to update their clusters to. They also allow users to choose the timing and level of support their updates will have through the `fast`, `stable`, `candidate`, and `eus` channel options.

The Cluster Version Operator uses an update graph based on the channel declaration, along with other conditional information, to provide a list of recommended and conditional updates available to the cluster.
