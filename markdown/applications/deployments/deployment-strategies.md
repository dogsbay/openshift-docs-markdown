---
title: Using deployment strategies
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Using deployment strategies {id="deployment-strategies"}
{%- set context = "deployment-strategies" %}

To upgrade applications with little or no downtime in {{ product_title }}, you can use a deployment strategy. Choose strategies that use `DeploymentConfig` object features or router features depending on whether you need to affect all routes or only specific ones. {._abstract}

Because users generally access applications through a route handled by a router, deployment strategies can focus on `DeploymentConfig` object features or routing features. Strategies that focus on `DeploymentConfig` object features impact all routes that use the application. Strategies that use router features target individual routes.

Most deployment strategies are supported through the `DeploymentConfig` object, and some additional strategies are supported through router features.

## Choosing a deployment strategy {id="choosing-deployment-strategies"}

Consider the following when choosing a deployment strategy:

*   Long-running connections must be handled gracefully.
*   Database conversions can be complex and must be done and rolled back along with the application.
*   If the application is a hybrid of microservices and traditional components, downtime might be required to complete the transition.
*   You must have the infrastructure to do this.
*   If you have a non-isolated test environment, you can break both new and old versions.

A deployment strategy uses readiness checks to determine if a new pod is ready for use. If a readiness check fails, the `DeploymentConfig` object retries to run the pod until it times out. The default timeout is `10m`, a value set in `TimeoutSeconds` in `dc.spec.strategy.*params`.

{% leveloffset +1 %}{% include "./modules/deployments-rolling-strategy.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/deployments-canary-deployments.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/creating-rolling-deployments-CLI.md" %}{% endleveloffset %}

{%- set context = "rolling-strategy" %}
{% leveloffset +2 %}{% include "./modules/odc-editing-deployments.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/odc-starting-rolling-deployment.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Creating and deploying applications on {{ product_title }} using the **Developer** perspective](/applications/creating_applications/odc-creating-applications-using-developer-perspective#odc-creating-applications-using-developer-perspective)
*   [Viewing the applications in your project, verifying their deployment status, and interacting with them in the **Topology** view](/applications/odc-viewing-application-composition-using-topology-view#odc-viewing-application-composition-using-topology-view)

{% leveloffset +1 %}{% include "./modules/deployments-recreate-strategy.md" %}{% endleveloffset %}

{%- set context = "recreate-strategy" %}
{% leveloffset +2 %}{% include "./modules/odc-editing-deployments.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/odc-starting-recreate-deployment.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Creating and deploying applications on {{ product_title }} using the **Developer** perspective](/applications/creating_applications/odc-creating-applications-using-developer-perspective#odc-creating-applications-using-developer-perspective)
*   [Viewing the applications in your project, verifying their deployment status, and interacting with them in the **Topology** view](/applications/odc-viewing-application-composition-using-topology-view#odc-viewing-application-composition-using-topology-view)

{% leveloffset +1 %}{% include "./modules/deployments-custom-strategy.md" %}{% endleveloffset %}

{%- set context = "custom-strategy" %}
{% leveloffset +2 %}{% include "./modules/odc-editing-deployments.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/deployments-lifecycle-hooks.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/deployments-lifecycle-hooks-pod-based.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/deployments-setting-lifecycle-hooks.md" %}{% endleveloffset %}