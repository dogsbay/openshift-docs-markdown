{%- set _mod_docs_content_type = "CONCEPT" %}
# Custom strategy {id="deployments-custom-strategy_{{ context }}"}

To define your own rollout behavior in {{ product_title }}, you can use a custom deployment strategy. Provide a container image, command, and environment variables that control how the new deployment becomes active. {._abstract}

```yaml title="Example custom strategy definition"
kind: DeploymentConfig
apiVersion: apps.openshift.io/v1
metadata:
  name: example-dc
# ...
spec:
# ...
  strategy:
    type: Custom
    customParams:
      image: organization/strategy
      command: [ "command", "arg1" ]
      environment:
        - name: ENV_1
          value: VALUE_1

```

In the above example, the `organization/strategy` container image provides the deployment behavior. The optional `command` array overrides any `CMD` directive specified in the image’s `Dockerfile`. The optional environment variables provided are added to the execution environment of the strategy process.

Additionally, {{ product_title }} provides the following environment variables to the deployment process:

| Environment variable | Description |
| --- | --- |
| `OPENSHIFT_DEPLOYMENT_NAME` | The name of the new deployment, a replication controller. |
| `OPENSHIFT_DEPLOYMENT_NAMESPACE` | The name space of the new deployment. |

The replica count of the new deployment will initially be zero. The responsibility of the strategy is to make the new deployment active using the
logic that best serves the needs of the user.

Alternatively, use the `customParams` object to inject the custom deployment logic into the existing deployment strategies. Provide a custom shell script logic and call the `openshift-deploy` binary. Users do not have to supply their custom deployer container image; in this case, the default {{ product_title }} deployer image is used instead:

```yaml
kind: DeploymentConfig
apiVersion: apps.openshift.io/v1
metadata:
  name: example-dc
# ...
spec:
# ...
  strategy:
    type: Rolling
    customParams:
      command:
      - /bin/sh
      - -c
      - |
        set -e
        openshift-deploy --until=50%
        echo Halfway there
        openshift-deploy
        echo Complete
```

This results in following deployment:

```terminal
Started deployment #2
--> Scaling up custom-deployment-2 from 0 to 2, scaling down custom-deployment-1 from 2 to 0 (keep 2 pods available, don't exceed 3 pods)
    Scaling custom-deployment-2 up to 1
--> Reached 50% (currently 50%)
Halfway there
--> Scaling up custom-deployment-2 from 1 to 2, scaling down custom-deployment-1 from 2 to 0 (keep 2 pods available, don't exceed 3 pods)
    Scaling custom-deployment-1 down to 1
    Scaling custom-deployment-2 up to 2
    Scaling custom-deployment-1 down to 0
--> Success
Complete
```

If the custom deployment strategy process requires access to the {{ product_title }} API or the Kubernetes API the container that executes the strategy can use the service account token available inside the container for authentication.