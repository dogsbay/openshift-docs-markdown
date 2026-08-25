{%- set _mod_docs_content_type = "CONCEPT" %}
# Examples of mixed configuration snippets {id="microshift-example-mixed-config-snippets_{{ context }}"}

When you use mixed configuration snippets in {{ product_title }}, object fields merge and the last-read snippet replaces list values. File order controls which list entries apply. {._abstract}

In the following example, the values of both `advertiseAddress` and `auditLog.maxFileAge` fields merge into the configuration, but only the `c.com` and `d.com` `subjectAltNames` values are retained. This happens because the numbering in the filename indicates that the `c.com` and `d.com` values are higher priority.

```yaml title="Example 10-advertiseAddress.yaml snippet"
apiServer:
  advertiseAddress: "microshift-example"
```

```yaml title="Example 20-audit-log.yaml snippet"
apiServer:
  auditLog:
    maxFileAge: 12
```

```yaml title="Example 30-SAN.yaml snippet"
apiServer:
  subjectAltNames:
    - a.com
    - b.com
```

```yaml title="Example 40-SAN.yaml snippet"
apiServer:
  subjectAltNames:
    - c.com
    - d.com
```

```yaml title="Example configuration result"
apiServer:
  advertiseAddress: "microshift-example"
  auditLog:
    maxFileAge: 12
  subjectAltNames:
    - c.com
    - d.com
```