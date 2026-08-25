{%- set _mod_docs_content_type = "REFERENCE" %}
# Concurrency target utilization {id="serverless-target-utilization_{{ context }}"}

This value specifies the percentage of the concurrency limit that is actually targeted by the autoscaler. This is also known as specifying the _hotness_ at which a replica runs, which enables the autoscaler to scale up before the defined hard limit is reached.

For example, if the `containerConcurrency` value is set to 10, and the `target-utilization-percentage` value is set to 70 percent, the autoscaler creates a new replica when the average number of concurrent requests across all existing replicas reaches 7. Requests numbered 7 to 10 are still sent to the existing replicas, but additional replicas are started in anticipation of being required after the `containerConcurrency` value is reached.

```yaml title="Example service configured using the target-utilization-percentage annotation"
apiVersion: serving.knative.dev/v1
kind: Service
metadata:
  name: example-service
  namespace: default
spec:
  template:
    metadata:
      annotations:
        autoscaling.knative.dev/target-utilization-percentage: "70"
...
```