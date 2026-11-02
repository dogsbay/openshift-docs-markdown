{%- set _mod_docs_content_type = "REFERENCE" %}
# Gang scheduling configuration {id="configuring-gangscheduling_{{ context }}"}

The `spec.config.gangScheduling.policy` field in the `Kueue` custom resource (CR) controls the gang scheduling policy for workloads. {._abstract}

The following example uses parallel admission and a 10-minute start timeout:

```yaml title="Example Kueue CR with gang scheduling configured"
apiVersion: kueue.openshift.io/v1
kind: Kueue
metadata:
  name: cluster
  labels:
    app.kubernetes.io/managed-by: kustomize
    app.kubernetes.io/name: kueue-operator
spec:
  config:
    integrations:
      frameworks:
      - BatchJob
    gangScheduling:
      policy: ByWorkload
      byWorkload:
        admission: Parallel
        timeoutSeconds: 600
```

The `policy` field accepts the following values:

**`spec.config.gangScheduling.policy` values**

| Value | Behavior |
| --- | --- |
| `ByWorkload` | Processes each workload as a single unit for admission. The readiness timeout applies to the entire workload. If retries remain or you omit the limit, {{ kueue_name }} evicts and requeues the workload for another admission attempt. If no retries remain, {{ kueue_name }} deactivates the workload. Include the `byWorkload` field. |
| `ByWorkloadDefaults` | Processes each workload as a single unit for admission and uses the default admission, timeout, and requeue settings. The `ByWorkloadDefaults` policy does not allow the `byWorkload` field. |
| `None` | Uses parallel admission and a fixed one-year readiness timeout. For workloads that reach a ready state within one year, this policy provides the same behavior as disabling gang scheduling. Workloads that do not reach a ready state remain subject to the timeout. The `None` policy does not allow the `byWorkload` field. |
| Empty string (`""`) | Uses `ByWorkloadDefaults`, the default policy. An empty `policy` value does not allow the `byWorkload` field. |