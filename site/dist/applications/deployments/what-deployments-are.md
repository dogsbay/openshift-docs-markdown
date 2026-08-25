---
title: Understanding deployments
---

# Understanding deployments {#what-deployments-are}

You can use `Deployment` and `DeploymentConfig` objects in OpenShift Container Platform to describe the desired state of an application and to manage pods through replica sets or replication controllers. Use `Deployment` objects unless you need a feature that only `DeploymentConfig` objects provide.

The `Deployment` and `DeploymentConfig` API objects provide two similar but different methods for fine-grained management over common user applications. They are composed of the following separate API objects:

- A `Deployment` or `DeploymentConfig` object, either of which describes the desired state of a particular component of the application as a pod template.
- `Deployment` objects involve one or more *replica sets*, which contain a point-in-time record of the state of a deployment as a pod template. Similarly, `DeploymentConfig` objects involve one or more *replication controllers*, which preceded replica sets.
- One or more pods, which represent an instance of a particular version of an application.

## Building blocks of a deployment {#what-deployments-are-build-blocks}

Deployments and deployment configs are enabled by the use of native Kubernetes API objects `ReplicaSet` and `ReplicationController`, respectively, as their building blocks.

Users do not have to manipulate replica sets, replication controllers, or pods owned by `Deployment` or `DeploymentConfig` objects. The deployment systems ensure changes are propagated appropriately.

> [!TIP]
> If the existing deployment strategies are not suited for your use case and you must run manual steps during the lifecycle of your deployment, then you should consider creating a custom deployment strategy.

The following sections provide further details on these objects.
