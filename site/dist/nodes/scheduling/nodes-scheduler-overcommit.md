---
title: Placing pods onto overcommited nodes
---

# Placing pods onto overcommited nodes {#nodes-scheduler-overcommit}

OpenShift Container Platform administrators can use container compute resource requests and limits to allow and manage the overcommitment of resources on a node, which enables pods to use additional resources when available, without guaranteeing those resources.

In an *overcommited* state, the sum of the container compute resource requests and limits exceeds the resources available on the system. Overcommitment might be desirable in development environments where a trade-off of guaranteed performance for capacity is acceptable.

Requests and limits enable administrators to allow and manage the overcommitment of resources on a node. The scheduler uses requests for scheduling your container and providing a minimum service guarantee. Limits constrain the amount of compute resource that may be consumed on your node.
