{%- set _mod_docs_content_type = "REFERENCE" %}
# Example annotation {id="security-controlling-pod-execution-example-annotation_{{ context }}"}

The preceding YAML shows you an example annotation. {._abstract}

```yaml
annotations:
  images.openshift.io/deny-execution: true
```