{%- set _mod_docs_content_type = "REFERENCE" %}
# Viewing the current configuration {id="developer-cli-odo-view-config_{{ context }}"}

You can view the current `odo` CLI configuration by using the following command:

```terminal
$ odo preference view
```

```terminal title="Example output"
PARAMETER             CURRENT_VALUE
UpdateNotification
NamePrefix
Timeout
BuildTimeout
PushTimeout
Ephemeral
ConsentTelemetry      true
```