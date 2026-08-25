{%- set _mod_docs_content_type = "REFERENCE" %}
# Setting a value {id="developer-cli-odo-set-config_{{ context }}"}

You can set a value for a preference key by using the following command:

```terminal
$ odo preference set <key> <value>
```


:::note

Preference keys are case-insensitive.

:::


```terminal title="Example command"
$ odo preference set updatenotification false
```

```terminal title="Example output"
Global preference was successfully updated
```