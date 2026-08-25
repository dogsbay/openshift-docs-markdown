{%- set _mod_docs_content_type = "PROCEDURE" %}
# hostPort {id="microshift-exposed-audit-ports-hostport_{{ context }}"}

To access host port open and close activity for workloads that use `hostPort` on {{ microshift_short }}, you can run `journalctl -u crio` and filter for lines that contain `local port`. {._abstract}

**Procedure**

*   You can access the logs by running the following command:
    ```terminal
    $ journalctl -u crio | grep "local port"
    ```
    ```terminal title="Example CRI-O logs when the host port is opened"
    $ Jun 25 16:27:37 rhel92 crio[77216]: time="2023-06-25 16:27:37.033003098+08:00" level=info msg="Opened local port tcp:443"
    ```
    ```terminal title="Example CRI-O logs when the host port is closed"
    $ Jun 25 16:24:11 rhel92 crio[77216]: time="2023-06-25 16:24:11.342088450+08:00" level=info msg="Closing host port tcp:443"
    ```