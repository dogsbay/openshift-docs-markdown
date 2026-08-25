{%- set _mod_docs_content_type = "REFERENCE" %}
# Minimum scale bounds {id="serverless-autoscaling-developer-minscale_{{ context }}"}

The minimum number of replicas that can serve an application is determined by the `min-scale` annotation. If scale to zero is not enabled, the `min-scale` value defaults to `1`.

The `min-scale` value defaults to `0` replicas if the following conditions are met:

*   The `min-scale` annotation is not set
*   Scaling to zero is enabled
*   The class `KPA` is used

```yaml title="Example service spec with min-scale annotation"
apiVersion: serving.knative.dev/v1
kind: Service
metadata:
  name: example-service
  namespace: default
spec:
  template:
    metadata:
      annotations:
        autoscaling.knative.dev/min-scale: "0"
...
```