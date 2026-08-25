{%- set _mod_docs_content_type = "CONCEPT" %}
# Recreate strategy {id="deployments-recreate-strategy_{{ context }}"}

To replace all previous pods before starting the new version in {{ product_title }}, you can use the recreate deployment strategy. Scale the old deployment to zero, then scale up the new one, optionally running `pre`, `mid`, and `post` lifecycle hooks. {._abstract}

```yaml title="Example recreate strategy definition"
kind: Deployment
apiVersion: apps/v1
metadata:
  name: hello-openshift
# ...
spec:
# ...
  strategy:
    type: Recreate
    recreateParams:
      pre: {} 
      mid: {}
      post: {}
```

*   `spec.strategy.recreateParams` are optional.
*   `spec.strategy.recreateParams.pre`, `spec.strategy.recreateParams.mid`, and `spec.strategy.recreateParams.post` are lifecycle hooks.

The recreate strategy:

1.  Executes any `pre` lifecycle hook.
1.  Scales down the previous deployment to zero.
1.  Executes any `mid` lifecycle hook.
1.  Scales up the new deployment.
1.  Executes any `post` lifecycle hook.


:::important

During scale up, if the replica count of the deployment is greater than one, the first replica of the deployment will be validated for readiness before fully scaling up the deployment. If the validation of the first replica fails, the deployment will be considered a failure.

:::


**When to use a recreate deployment:**

*   When you must run migrations or other data transformations before your new code starts.
*   When you do not support having new and old versions of your application code running at the same time.
*   When you want to use a RWO volume, which is not supported being shared between multiple replicas.

A recreate deployment incurs downtime because, for a brief period, no instances of your application are running. However, your old code and new code do not run at the same time.