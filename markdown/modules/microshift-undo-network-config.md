{%- set _mod_docs_content_type = "PROCEDURE" %}
# Restoring {{ microshift_short }} networking settings to default {id="microshift-undo-network-config_{{ context }}"}

To remove networking customizations and return the network to default settings, stop {{ microshift_short }} and run a clean-up script. {._abstract}

**Prerequisites**

*   RHEL 9 or newer.
*   MicroShift 4.14 or newer.
*   Access to the host CLI.

**Procedure**

1.  Stop the {{ microshift_short }} service by running the following command:
    ```terminal
    $ sudo systemctl stop microshift
    ```
1.  Stop the `kubepods.slice` systemd unit by running the following command:
    ```terminal
    $ sudo systemctl stop kubepods.slice
    ```
1.  {{ microshift_short }} installs a helper script to undo network changes made by OVN-K. Run the cleanup script by entering the following command:
    ```terminal
    $ sudo /usr/bin/microshift-cleanup-data --ovn
    ```