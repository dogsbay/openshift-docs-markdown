{%- set _mod_docs_content_type = "REFERENCE" %}
# Configuring label policies for jobs {id="configuring-labelpolicy_{{ context }}"}

You can configure the `spec.config.workloadManagement.labelPolicy` field in the `Kueue` CR to control whether {{ kueue_name }} manages or ignores specific jobs. {._abstract}

The allowed values are `QueueName`, `None`, and empty (`""`).

If the `labelPolicy` setting is omitted or empty (`""`), the default policy is that {{ kueue_name }} manages jobs that have a `kueue.x-k8s.io/queue-name` label, and ignores jobs that do not have the `kueue.x-k8s.io/queue-name` label. This is the same workflow as if the `labelPolicy` is set to `QueueName`.

If the `labelPolicy` setting is set to `None`, jobs are managed by {{ kueue_name }} even if they do not have the `kueue.x-k8s.io/queue-name` label.

```yaml title="Example workloadManagement spec configuration"
apiVersion: kueue.openshift.io/v1
kind: Kueue
metadata:
  labels:
    app.kubernetes.io/name: kueue-operator
    app.kubernetes.io/managed-by: kustomize
  name: cluster
  namespace: openshift-kueue-operator
spec:
  config:
    workloadManagement:
      labelPolicy: QueueName
# ...
```

```yaml title="Example user-created Job object containing the kueue.x-k8s.io/queue-name label"
apiVersion: batch/v1
kind: Job
metadata:
  generateName: sample-job-
  namespace: my-namespace
  labels:
    kueue.x-k8s.io/queue-name: user-queue
spec:
# ...
```