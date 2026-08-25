{%- set _mod_docs_content_type = "PROCEDURE" %}
# Apply patch updates using RPMs {id="microshift-applying-patch-updates-rpms_{{ context }}"}

Updating {{ microshift_short }} on non `rpm-ostree` systems such as {{ op_system_base_full }} requires downloading then updating the RPMs. For example, use the following procedure to upgrade from 4.22.0 to 4.22.1. {._abstract}

{% leveloffset +1 %}{% include "./snippets/microshift-unsupported-config-warn.md" %}{% endleveloffset %}


:::note

You cannot downgrade {{ microshift_short }} with this process. Downgrades are not supported.

:::


**Prerequisites**

*   The system requirements for installing {{ microshift_short }} have been met.
*   You have root user access to the host.
*   The version of {{ microshift_short }} you have is compatible to upgrade to the version you are preparing to use.
*   You have verified that your host operating system is compatible with the version of {{ microshift_short }} you are preparing to install.
*   You have completed a system backup.

**Procedure**

1.  Update the {{ microshift_short }} RPMs by running the following command:
    ```terminal
    $ sudo dnf update microshift
    ```
1.  Restart {{ microshift_short }} by running the following command:
    ```terminal
    $ sudo systemctl restart microshift
    ```

    :::note

    The greenboot system health check runs on this update type, but does not perform any actions. If the update fails, an error message appears with the instruction to check the logs.
    
    :::