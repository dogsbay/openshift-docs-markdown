{%- set _mod_docs_content_type = "CONCEPT" %}
# Manual RPM updates {id="microshift-manual-rpm-updates_{{ context }}"}

You can update {{ microshift_short }} manually on {{ op_system_base_full }} by updating the RPMs. This type of update is useful for development environments and testing. {._abstract}

*   To complete this update type, use the subscription manager to enable the repository that has the new RPMs.
*   Use manual processes to ensure system health and complete additional system backups.
*   To begin a manual RPM update, use the procedures in the following documentation:
    *   [About updating MicroShift RPMs manually](https://docs.redhat.com/en/documentation/red_hat_build_of_microshift/{{ ocp_version }}/html/updating/microshift-update-rpms-manually)