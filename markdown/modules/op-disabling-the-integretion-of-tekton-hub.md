{%- set _mod_docs_content_type = "CONCEPT" %}
# Disabling the integration of {{ tekton_hub }} {id="op-disabling-the-integretion-of-tekton-hub_{{ context }}"}

You can disable the integration of {{ tekton_hub }} in the web console **Developer** perspective by setting the `enable-devconsole-integration` parameter to `false` in the `TektonConfig` custom resource (CR).

```yaml title="Example of disabling {{ tekton_hub }}"
apiVersion: operator.tekton.dev/v1alpha1
kind: TektonConfig
metadata:
  name: config
spec:
  hub:
    params:
      - name: enable-devconsole-integration
        value: false
```