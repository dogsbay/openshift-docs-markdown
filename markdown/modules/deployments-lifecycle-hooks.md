{%- set _mod_docs_content_type = "CONCEPT" %}
# Lifecycle hooks {id="deployments-lifecycle-hooks_{{ context }}"}

To run custom logic at specific points during a rollout in {{ product_title }}, you can use lifecycle hooks with the rolling or recreate strategy. Configure hooks such as `pre` with a failure policy to abort, retry, or ignore when a hook fails. {._abstract}

The rolling and recreate strategies support _lifecycle hooks_, or deployment hooks, which allow behavior to be injected into the deployment process at predefined points within the strategy as shown in the following example:

```yaml
pre:
  failurePolicy: Abort
  execNewPod: {}
```
`pre.execNewPod` is a pod-based lifecycle hook.

Every hook has a _failure policy_, which defines the action the strategy should take when a hook failure is encountered:

|     |     |
| --- | --- |
| `Abort` | The deployment process will be considered a failure if the hook fails. |
| `Retry` | The hook execution should be retried until it succeeds. |
| `Ignore` | Any hook failure should be ignored and the deployment should proceed. |

Hooks have a type-specific field that describes how to execute the hook. Currently, pod-based hooks are the only supported hook type, specified by the `execNewPod` field.