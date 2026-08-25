{%- set _mod_docs_content_type = "CONCEPT" %}
# Data restoration failure {id="microshift-restore-data-failed_{{ context }}"}

The restoration of data can fail for many reasons, including storage and permission issues. Mismatched data versions can cause failures when {{ microshift_short }} restarts. {._abstract}

## Image-based systems data restore failed {id="microshift-image-based-systems-data-restore-failed_{{ context }}"}

Data restorations are automatic on `rpm-ostree` systems, but can fail, for example:

*   The only backups that are restored on `rpm-ostree` systems are backups from the current deployment or a rollback deployment. Backups are not taken on an unhealthy system.
    *   Only the latest backups that have corresponding deployments are retained. Outdated backups that do not have a matching deployment are automatically removed.
    *   Data is usually not restored from a newer version of {{ microshift_short }}.
    *   Ensure that the data you are restoring follows same versioning pattern as the update path. For example, if the destination version of {{ microshift_short }} is an older version than the version of the {{ microshift_short }} data you are currently using, the restoration can fail.

## RPM-based manual data restore failed {id="microshift-rpm-manual-restore-data-failed_{{ context }}"}

If you are using an RPM system that is not `rpm-ostree` and tried to restore a manual backup, the following reasons can cause the restoration to fail:

*   If {{ microshift_short }} stopped running because of an error, you cannot restore data.
    *   Make sure the system is healthy.
    *   Start it in a healthy state before attempting to restore data.
*   If you do not have enough storage space allocated for the incoming data, the restoration fails.
    *   Make sure that your current system storage is configured to accept the restored data.
*   You are attempting to restore data from a newer version of {{ microshift_short }}.
    *   Ensure that the data you are restoring follows same versioning pattern as the update path. For example, if the destination version of {{ microshift_short }} is an older version than the version of the {{ microshift_short }} data you are attempting to use, the restoration can fail.