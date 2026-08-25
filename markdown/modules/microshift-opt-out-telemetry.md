{%- set _mod_docs_content_type = "PROCEDURE" %}
# Opt out of Telemetry for {{ microshift_short }} {id="microshift-opt-out-telemetry_{{ context }}"}

By default, {{ microshift_short }} enables the Telemetry service to collect health and usage data. You can disable this service if your node is operating in a disconnected environment or if you want to opt out of data collection. {._abstract}

**Prerequisites**

*   You installed {{ oc_first }}.
*   You have root access to the node.

**Procedure**

1.  If you have not done so, make a copy of the provided `config.yaml.default` file in the `/etc/microshift/` directory, renaming it `config.yaml`.
1.  Keep the new {{ microshift_short }} `config.yaml` in the `/etc/microshift/` directory. Your `config.yaml` file is read every time the {{ microshift_short }} service starts.

    :::note

    After you create it, the `config.yaml` file takes precedence over built-in settings.
    
    :::

1.  Optional: Use a configuration snippet if you are using an existing {{ microshift_short }} YAML. See "Using configuration snippets" in the _Additional resources_ section for more information.
1.  Set the `telemetry.status` section of the {{ microshift_short }} YAML with the `Disabled` value.
    ```yaml title="Example disabled Telemetry configuration"
    apiServer:
    # ...
    telemetry:
        endpoint: https://infogw.api.openshift.com
        status: Disabled
    # ...
    ```