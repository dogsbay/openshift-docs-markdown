{%- set _mod_docs_content_type = "CONCEPT" %}
# Examples of configuration snippet lists or arrays {id="microshift-ex-config-snippets-lists_{{ context }}"}

Lists and arrays in {{ product_title }} configuration snippets are overwritten, not merged. {._abstract}

For example, you can replace a SAN or list of SANs by creating an additional snippet for the same field that is read after the first:


{{ microshift_short }} configuration directory contents
:   `/etc/microshift/config.yaml.default` or `/etc/microshift/config.yaml`


Example {{ microshift_short }} configuration snippet directory contents
:   `/etc/microshift/config.d/10-san.yaml` and `/etc/microshift/config.d/20-san.yaml`

```yaml title="Example 10-san.yaml snippet"
apiServer:
  subjectAltNames:
    - host1
    - host2
```

```yaml title="Example 20-san.yaml snippet"
apiServer:
  subjectAltNames:
    - hostZ
```

```yaml title="Example configuration result"
apiServer:
  subjectAltNames:
    - hostZ
```

If you want to add a value to an existing list, you can add it to an existing snippet. For example, to add `hostZ` to an existing list of SANs, edit the snippet you have instead of creating a new one:

```yaml title="Example 10-san.yaml snippet"
apiServer:
  subjectAltNames:
    - host1
    - host2
    - hostZ
```

```yaml title="Example configuration result"
apiServer:
  subjectAltNames:
    - host1
    - host2
    - hostZ
```