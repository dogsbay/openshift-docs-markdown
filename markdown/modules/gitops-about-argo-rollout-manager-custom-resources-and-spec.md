{%- set _mod_docs_content_type = "CONCEPT" %}
# About RolloutManager custom resources and specification {id="gitops-about-argo-rollout-manager-custom-resources-and-spec_{{ context }}"}

To use Argo Rollouts, you must install {{ gitops_title }} Operator on the cluster, and then create and submit a `RolloutManager` custom resource (CR) to the Operator in the namespace of your choice. You can scope the `RolloutManager` CR for single or multiple namespaces. The Operator creates an `argo-rollouts` instance with the following namespace-scoped supporting resources:

*   Argo Rollouts controller
*   Argo Rollouts metrics service
*   Argo Rollouts service account
*   Argo Rollouts roles
*   Argo Rollouts role bindings
*   Argo Rollouts secret

You can specify the command arguments, environment variables, a custom image name, and so on for the Argo Rollouts controller resource in the spec of the `RolloutsManager` CR. The `RolloutManager` CR spec defines the desired state of Argo Rollouts.

```yaml title="Example: RolloutManager CR"
apiVersion: argoproj.io/v1alpha1
kind: RolloutManager
metadata:
  name: argo-rollout
  labels:
    example: basic
spec: {}
```

## Argo Rollouts controller {id="argo-rollouts-controller_{{ context }}"}

With the Argo Rollouts controller resource, you can manage the progressive application delivery in your namespace. The Argo Rollouts controller resource monitors the cluster for events, and reacts whenever there is a change in any resource related to Argo Rollouts. The controller reads all the rollout details and brings the cluster to the same state as described in the rollout definition.

**Additional resources**

[`RolloutManager` Custom Resource specification](https://argo-rollouts-manager.readthedocs.io/en/latest/crd_reference/)