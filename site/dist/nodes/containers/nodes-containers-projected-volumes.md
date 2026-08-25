---
title: Mapping volumes using projected volumes
---

# Mapping volumes using projected volumes {#nodes-containers-projected-volumes}

You can centralize sensitive information and environment metadata for your applications by using projected volumes to map multiple configuration sources, such as secrets and config maps, into a single directory. Having a single directory makes it easier for your applications to access that information.

The following types of volume sources can be projected:

- Secrets
- Config Maps
- Downward API

> [!NOTE]
> All sources are required to be in the same namespace as the pod.
