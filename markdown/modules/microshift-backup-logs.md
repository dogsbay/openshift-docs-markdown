{%- set _mod_docs_content_type = "PROCEDURE" %}
# Check backup logs {id="microshift-checking-backup-logs_{{ context }}"}

Backup logs can help you identify the location and status of manual and automatic backups, and the processes that occurred during each backup. {._abstract}

*   Manual backup logs are displayed in the terminal output.
*   Automatic backup logs for `rpm-ostree` systems are available in the {{ microshift_short }} journal logs.

**Procedure**

*   Check the journal logs:
    ```terminal
    $ sudo journalctl -u microshift
    ```