{%- set _mod_docs_content_type = "REFERENCE" %}
# HTTPS redirection global settings {id="serverless-https-redirect-global_{{ context }}"}

```yaml title="Example KnativeServing CR that enables HTTPS redirection"
apiVersion: operator.knative.dev/v1beta1
kind: KnativeServing
metadata:
  name: knative-serving
spec:
  config:
    network:
      httpProtocol: "redirected"
...
```