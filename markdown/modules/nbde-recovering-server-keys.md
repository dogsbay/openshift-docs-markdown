{%- set _mod_docs_content_type = "PROCEDURE" %}
# Recovering keys for a Tang server {id="nbde-recovering-server-keys_{{ context }}"}

You can recover the keys for a Tang server by accessing the keys from a backup.

**Procedure**

*   Restore the key from your backup folder to the `/var/db/tang/` directory.

    When the Tang server starts up, it advertises and uses these restored keys.