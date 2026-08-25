{%- set _mod_docs_content_type = "PROCEDURE" %}
# Backing up keys for a Tang server {id="nbde-backing-up-server-keys_{{ context }}"}

The Tang server uses `/usr/libexec/tangd-keygen` to generate new keys and stores them in the `/var/db/tang` directory by default. To recover the Tang server in the event of a failure, back up this directory. The keys are sensitive and because they are able to perform the boot disk decryption of all hosts that have used them, the keys must be protected accordingly.

**Procedure**

*   Copy the backup key from the `/var/db/tang` directory to the temp directory from which you can restore the key.