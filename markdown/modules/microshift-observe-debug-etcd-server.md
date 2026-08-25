{%- set _mod_docs_content_type = "PROCEDURE" %}
# Observe and debug the {{ microshift_short }} etcd server {id="microshift-observe-debug-etcd-server_{{ context }}"}

Monitoring the etcd server is critical for maintaining system stability and diagnosing errors. You can gather `journalctl` logs to observe and debug the etcd server logs. {._abstract}

**Prerequisites**

*   The {{ microshift_short }} service is running.

**Procedure**

*   To get the logs for etcd, run the following command:
    ```terminal
    $ sudo journalctl -u microshift-etcd.scope
    ```

    :::note

    {{ microshift_short }} logs can be accessed separately from etcd logs using the `journalctl -u microshift` command.
    
    :::