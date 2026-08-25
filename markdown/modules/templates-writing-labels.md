{%- set _mod_docs_content_type = "REFERENCE" %}
# Writing template labels {id="templates-writing-labels_{{ context }}"}

To label every object created from a template, add a `labels` section to the template definition. Use parameterized labels so users can identify and manage resources created from your template. {._abstract}

The following is an example of template object labels:

```yaml
kind: "Template"
apiVersion: "v1"
...
labels:
  template: "cakephp-mysql-example"
  app: "${NAME}"
```

where:


`labels.template`
:   Specifies a label that is applied to all objects created from this template.

`labels.app`
:   Specifies a parameterized label that is also applied to all objects created from this template. Parameter expansion is carried out on both label keys and values.