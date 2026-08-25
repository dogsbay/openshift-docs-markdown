{%- set _mod_docs_content_type = "REFERENCE" %}
# Unsetting a value {id="developer-cli-odo-unset-config_{{ context }}"}

You can unset a value for a preference key by using the following command:

```terminal
$ odo preference unset <key>
```


:::note

You can use the `-f` flag to skip the confirmation.

:::


```terminal title="Example command"
$ odo preference unset updatenotification
? Do you want to unset updatenotification in the preference (y/N) y
```

```terminal title="Example output"
Global preference was successfully updated
```