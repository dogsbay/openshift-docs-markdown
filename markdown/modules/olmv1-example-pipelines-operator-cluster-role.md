{%- set _mod_docs_content_type = "REFERENCE" %}

# Example cluster role for the {{ pipelines_title }} Operator {id="olmv1-example-cluster-role-pipelines_{{ context }}"}

Review the complete cluster role manifest for the {{ pipelines_shortname }} Operator, including all of the RBAC required to install and manage the extension. {._abstract}

```yaml
{% include "./snippets/example-pipelines-installer-clusterrole.yaml" %}
```