{%- set _mod_docs_content_type = "REFERENCE" %}
# Configuring the EmptyDir extension {id="serverless-config-emptydir_{{ context }}"}

The `kubernetes.podspec-volumes-emptydir` extension controls whether `emptyDir` volumes can be used with Knative Serving. To enable using `emptyDir` volumes, you must modify the `KnativeServing` custom resource (CR) to include the following YAML:

```yaml title="Example KnativeServing CR"
apiVersion: operator.knative.dev/v1beta1
kind: KnativeServing
metadata:
  name: knative-serving
spec:
  config:
    features:
      kubernetes.podspec-volumes-emptydir: enabled
...
```