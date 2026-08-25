{%- set _mod_docs_content_type = "PROCEDURE" %}
# Check the status of a node {id="microshift-check-node-status_{{ context }}"}

You can check the status of a {{ microshift_short }} node or see active pods. You can choose to run any or all of the following commands to help you get the information you need to troubleshoot the node. {._abstract}

**Procedure**

*   Check the system status, which returns the node status, by running the following command:
    ```terminal
    $ sudo systemctl status microshift
    ```

    If {{ microshift_short }} fails to start, this command returns the logs from the earlier run.
    ```text title="Example healthy output"
    ● microshift.service - MicroShift
         Loaded: loaded (/usr/lib/systemd/system/microshift.service; enabled; preset: disabled)
         Active: active (running) since <day> <date> 12:39:06 UTC; 47min ago
       Main PID: 20926 (microshift)
          Tasks: 14 (limit: 48063)
         Memory: 542.9M
            CPU: 2min 41.185s
         CGroup: /system.slice/microshift.service
                 └─20926 microshift run

    <Month-Day> 13:23:06 i-06166fbb376f14a8b.<hostname> microshift[20926]: kube-apiserver I0528 13:23:06.876001   20926 controll>
    <Month-Day> 13:23:06 i-06166fbb376f14a8b.<hostname> microshift[20926]: kube-apiserver I0528 13:23:06.876574   20926 controll>
    # ...
    ```
*   Optional: Get comprehensive logs by running the following command:
    ```terminal
    $ sudo journalctl -u microshift
    ```

    :::note

    The default configuration of the `systemd` journal service stores data in a volatile directory, which does not persist across restarts. To retain logs across system restarts, enable log persistence and set a maximum size limit for journal data.
    
    :::

*   If {{ microshift_short }} is running, check the status of active pods by entering the following command:
{% leveloffset +1 %}{% include "./snippets/microshift-healthy-pods-snip.md" %}{% endleveloffset %}