{%- set _mod_docs_content_type = "PROCEDURE" %}
# Planning for a loss of client network connectivity {id="nbde-loss-of-client-connectivity_{{ context }}"}

The loss of network connectivity to an individual node will cause it to become unable to boot in an unattended fashion.

If you are planning work that might cause a loss of network connectivity,
you can reveal the passphrase for an onsite technician to use manually,
and then rotate the keys afterwards to invalidate it:

**Procedure**

1.  Before the network becomes unavailable, show the password used in the first slot `-s 1` of device `/dev/vda2` with this command:
    ```terminal
    $ sudo clevis luks pass -d /dev/vda2 -s 1
    ```
1.  Invalidate that value and regenerate a new random boot-time passphrase with this command:
    ```terminal
    $ sudo clevis luks regen -d /dev/vda2 -s 1
    ```