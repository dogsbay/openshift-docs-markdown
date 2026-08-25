{%- set _mod_docs_content_type = "PROCEDURE" %}
# Verify the {{ microshift_short }} Observability state {id="microshift-otel-verify_{{ context }}"}

After {{ microshift_short }} Observability starts, you can verify the state by using a `systemd` service. The {{ microshift_short }} Observability service logs are available as `journald` logs. {._abstract}

**Procedure**

1.  Check the {{ microshift_short }} Observability status by entering the following command:
    ```terminal
    $ sudo systemctl status microshift-observability
    ```
1.  Check the {{ microshift_short }} Observability logs by entering the following command:
    ```terminal
    $ sudo journalctl -u microshift-observability
    ```