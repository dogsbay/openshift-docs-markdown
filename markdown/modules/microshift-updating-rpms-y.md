{%- set _mod_docs_content_type = "PROCEDURE" %}
# Applying minor-version updates with RPMs {id="microshift-updating-rpms_{{ context }}"}

Updating a {{ microshift_short }} minor version on non `rpm-ostree` systems such as {{ op_system_base_full }} requires downloading then updating the RPMs. For example, use the following procedure to update from 4.18 to 4.20. {._abstract}

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

1.  For all lifecycles, enable the repository for the release you want to update to by running the following command:
    ```terminal
    $ sudo subscription-manager repos \
        --enable rhocp-{{ ocp_version }}-for-rhel-{{ op_system_version_major }}-$(uname -m)-rpms \
        --enable fast-datapath-for-rhel-{{ op_system_version_major }}-$(uname -m)-rpms
    ```
1.  For extended support (EUS) releases, also enable the EUS repositories by running the following command:
    ```terminal
    $ sudo subscription-manager repos \
        --enable rhel-{{ op_system_version_major }}-for-$(uname -m)-appstream-eus-rpms \
        --enable rhel-{{ op_system_version_major }}-for-$(uname -m)-baseos-eus-rpms
    ```
1.  Avoid unintended future updates into an unsupported configuration by locking your operating system version with the following command:
    ```terminal
    $ sudo subscription-manager release --set={{ op_system_version }}
    ```
1.  Update the {{ microshift_short }} RPMs by running the following command:
    ```terminal
    $ sudo dnf update microshift
    ```
1.  Reboot the host to apply updates by running the following command:
    ```terminal
    $ sudo systemctl reboot
    ```

    :::note

    The system health check runs on this update type, but does not perform any actions. If the update fails, an error message appears with the instruction to check the logs.
    
    :::


**Verification**

1.  Check if the health checks exited with a successful boot by running the following command:
    ```terminal
    $ sudo systemctl status greenboot-healthcheck
    ```
1.  Check the health check logs by running the following command:
    ```terminal
    $ sudo journalctl -u greenboot-healthcheck
    ```