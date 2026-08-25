---
title: Freeing node resources using garbage collection
---

# Freeing node resources using garbage collection {#nodes-nodes-garbage-collection}

As an administrator, you can use OpenShift Container Platform to ensure that your nodes are running efficiently by freeing up resources through garbage collection.

The OpenShift Container Platform node performs two types of garbage collection:

- Container garbage collection: Removes terminated containers.
- Image garbage collection: Removes images not referenced by any running pods.
