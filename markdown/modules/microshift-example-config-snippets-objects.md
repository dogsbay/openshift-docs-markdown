{%- set _mod_docs_content_type = "CONCEPT" %}
# Example configuration snippets that are objects {id="microshift-example-config-snippets-objects_{{ context }}"}

Object fields in {{ product_title }} are merged together when you use a configuration snippet. {._abstract}

```yaml title="Example 10-advertiseAddress.yaml snippet"
apiServer:
  advertiseAddress: "microshift-example"
```

```yaml title="Example 20-audit-log.yaml snippet"
apiServer:
  auditLog:
    maxFileAge: 12
```

```yaml title="Example configuration result"
apiServer:
  advertiseAddress: "microshift-example"
  auditLog:
    maxFileAge: 12
```