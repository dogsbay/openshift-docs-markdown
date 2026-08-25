---
title: Using deployment strategies
---

# Using deployment strategies {#deployment-strategies}

To upgrade applications with little or no downtime in OpenShift Container Platform, you can use a deployment strategy. Choose strategies that use `DeploymentConfig` object features or router features depending on whether you need to affect all routes or only specific ones.

Because users generally access applications through a route handled by a router, deployment strategies can focus on `DeploymentConfig` object features or routing features. Strategies that focus on `DeploymentConfig` object features impact all routes that use the application. Strategies that use router features target individual routes.

Most deployment strategies are supported through the `DeploymentConfig` object, and some additional strategies are supported through router features.

## Choosing a deployment strategy {#choosing-deployment-strategies}

Consider the following when choosing a deployment strategy:

- Long-running connections must be handled gracefully.
- Database conversions can be complex and must be done and rolled back along with the application.
- If the application is a hybrid of microservices and traditional components, downtime might be required to complete the transition.
- You must have the infrastructure to do this.
- If you have a non-isolated test environment, you can break both new and old versions.

A deployment strategy uses readiness checks to determine if a new pod is ready for use. If a readiness check fails, the `DeploymentConfig` object retries to run the pod until it times out. The default timeout is `10m`, a value set in `TimeoutSeconds` in `dc.spec.strategy.*params`.

**Additional resources**

- [Creating and deploying applications on OpenShift Container Platform using the **Developer** perspective](/openshift-docs-markdown/applications/creating_applications/odc-creating-applications-using-developer-perspective#odc-creating-applications-using-developer-perspective)
- [Viewing the applications in your project, verifying their deployment status, and interacting with them in the **Topology** view](/openshift-docs-markdown/applications/odc-viewing-application-composition-using-topology-view#odc-viewing-application-composition-using-topology-view)

**Additional resources**

- [Creating and deploying applications on OpenShift Container Platform using the **Developer** perspective](/openshift-docs-markdown/applications/creating_applications/odc-creating-applications-using-developer-perspective#odc-creating-applications-using-developer-perspective)
- [Viewing the applications in your project, verifying their deployment status, and interacting with them in the **Topology** view](/openshift-docs-markdown/applications/odc-viewing-application-composition-using-topology-view#odc-viewing-application-composition-using-topology-view)
