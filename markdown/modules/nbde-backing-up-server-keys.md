{%- set _mod_docs_content_type = "PROCEDURE" %}
# Back up keys for a Tang server {id="nbde-backing-up-server-keys_{{ context }}"}

To recover a Tang server after a failure, back up the `/var/db/tang` directory that stores its keys. {._abstract}

The Tang server uses `/usr/libexec/tangd-keygen` to generate new keys and stores them in the `/var/db/tang` directory by default. The keys are sensitive and because they are able to perform the boot disk decryption of all hosts that have used them, the keys must be protected accordingly.

**Procedure**

*   Copy the backup key from the `/var/db/tang` directory to the temp directory from which you can restore the key.