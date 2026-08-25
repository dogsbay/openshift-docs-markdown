{%- set _mod_docs_content_type = "REFERENCE" %}
# Linking to other quick starts {id="linking-to-other-quick-starts_{{ context }}"}

You can link a quick start to another quick start by setting the `nextQuickStart` field. {._abstract}

In the `nextQuickStart` section of the YAML file, enter the `name`, not the `displayName`, of the quick start to which you want to link. For example:

```yaml
nextQuickStart:
  - add-healthchecks
```