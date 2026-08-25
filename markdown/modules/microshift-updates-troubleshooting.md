{%- set _mod_docs_content_type = "REFERENCE" %}
# Troubleshoot {{ microshift_short }} updates {id="microshift-troubleshooting-updates_{{ context }}"}

In some cases, {{ microshift_short }} might fail to update. In these events, it is helpful to understand failure types and how to troubleshoot them. {._abstract}


Update path is blocked by {{ microshift_short }} version sequence
:   Non-EUS versions of {{ microshift_short }} require serial updates. For example, if you attempt to update from {{ microshift_short }} `4.15.5` directly to `4.17.1`, the update fails. You must first update `4.15.5` to `4.16.z`, and then you can update from `4.16.z` to `4.17.0`.


Update path is blocked by version incompatibility
:   RPM dependency errors result if a {{ microshift_short }} update is incompatible with the version of {{ op_system_ostree_first }} or {{ op_system_base_full }}. For more information, see "{{ op_system_bundle }} release compatibility matrix".


{{ op_system_ostree }} update failed
:   If you updated on an `rpm-ostree` system, the greenboot health check automatically logs and acts on system health. A system rollback by greenboot can indicate an update failure. In cases where the update failed, but greenboot did not complete a system rollback, you can troubleshoot using the {{ op_system_ostree }} documentation linked in the "Additional resources" section.

    *   Manually check the greenboot logs to verify system health by running the following command:
    ```terminal
    $ sudo systemctl restart --no-block greenboot-healthcheck && sudo journalctl -fu greenboot-healthcheck
    ```

Manual RPM update failed
:   If you updated by using RPMs on a non-OSTree system, greenboot can indicate an update failure, but the health checks are only informative. Checking the system logs is the next step in troubleshooting a manual RPM update failure. You can use greenboot and the `sos report` tool to check both the {{ microshift_short }} update and the host system.