{%- set _mod_docs_content_type = "CONCEPT" %}
# DeploymentConfig object-specific features {id="deploymentconfig-object-specific-features_{{ context }}"}

When using `DeploymentConfig` objects in {{ product_title }}, you can set Lifecycle hooks and configure custom deployment strategies. `DeploymentConfig` objects also provide automatic replica set rollbacks upon failure and automatic roll out of updates. {._abstract}

These capabilities are specific to `DeploymentConfig` objects and are not available on Kubernetes `Deployment` objects.

## Automatic rollbacks {id="deploymentconfig-object-specific-features-automatic-rollbacks_{{ context }}"}

Currently, deployments do not support automatically rolling back to the last successfully deployed replica set in case of a failure.

## Triggers {id="deploymentconfig-object-specific-features-triggers_{{ context }}"}

Deployments have an implicit config change trigger in that every change in the pod template of a deployment automatically triggers a new rollout.
If you do not want new rollouts on pod template changes, pause the deployment:

```terminal
$ oc rollout pause deployments/<name>
```

## Lifecycle hooks {id="deploymentconfig-object-specific-features-lifecycle-hooks_{{ context }}"}

Deployments do not yet support any lifecycle hooks.

## Custom strategies {id="deploymentconfig-object-specific-features-custom-strategies_{{ context }}"}

Deployments do not support user-specified custom deployment strategies.