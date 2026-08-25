{%- set _mod_docs_content_type = "REFERENCE" %}
# Redirecting HTTPS for a service {id="serverless-https-redirect-service_{{ context }}"}

The following example shows how you can use this annotation in a Knative `Service` YAML object:

```yaml
apiVersion: serving.knative.dev/v1
kind: Service
metadata:
  name: example
  namespace: default
  annotations:
    networking.knative.dev/http-option: "redirected"
spec:
  ...
```