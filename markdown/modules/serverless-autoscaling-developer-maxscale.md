{%- set _mod_docs_content_type = "REFERENCE" %}
# Maximum scale bounds {id="serverless-autoscaling-developer-maxscale_{{ context }}"}

The maximum number of replicas that can serve an application is determined by the `max-scale` annotation. If the `max-scale` annotation is not set, there is no upper limit for the number of replicas created.

```yaml title="Example service spec with max-scale annotation"
apiVersion: serving.knative.dev/v1
kind: Service
metadata:
  name: example-service
  namespace: default
spec:
  template:
    metadata:
      annotations:
        autoscaling.knative.dev/max-scale: "10"
...
```