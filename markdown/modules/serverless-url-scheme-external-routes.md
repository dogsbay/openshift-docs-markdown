{%- set _mod_docs_content_type = "REFERENCE" %}
# Setting the URL scheme for external routes {id="serverless-url-scheme-external-routes_{{ context }}"}

```yaml title="Default spec"
...
spec:
  config:
    network:
      default-external-scheme: "https"
...
```

You can override the default spec to use HTTP by modifying the `default-external-scheme` key:

```yaml title="HTTP override spec"
...
spec:
  config:
    network:
      default-external-scheme: "http"
...
```