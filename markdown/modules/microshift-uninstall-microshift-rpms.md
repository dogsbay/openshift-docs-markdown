{%- set _mod_docs_content_type = "PROCEDURE" %}
# Uninstall {{ microshift_short }} from an RPM package {id="microshift-uninstall-microshift-rpms_{{ context }}"}

When you want to uninstall {{ microshift_short }}, you must first clean up all data, pods, and configurations before removing the RPM packages. {._abstract}

**Prerequisites**

*   You are logged into {{ microshift_short }} as an administrator with root-user access.
*   You have filed a support case.
*   You have root access to the {{ microshift_short }} node.

**Procedure**

1.  Clean all your data by running the following command:
    ```terminal
    $ sudo microshift-cleanup-data --all
    ```

    When you run the script with the `--all` argument, you perform the following clean up actions:
    *   Stop and disable all {{ microshift_short }} services
    *   Delete all {{ microshift_short }} pods
    *   Delete all container image storage
    *   Reset network configuration
    *   Delete the `/var/lib/microshift` data directory
    *   Delete OVN-K networking configuration
1.  Run the following command:
    ```terminal
    $ sudo dnf remove -y microshift*
    ```