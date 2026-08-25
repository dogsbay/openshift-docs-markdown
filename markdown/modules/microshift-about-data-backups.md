{%- set _mod_docs_content_type = "CONCEPT" %}
# About backing up and restoring {{ microshift_short }} data {id="microshift-about-data-backups_{{ context }}"}

Backing up and restoring {{ microshift_short }} data applies to the database only, and not to any application data. Before you can create a manual backup, greenboot health checks must finish running and you must stop the {{ microshift_short }} service. {._abstract}

*   On `rpm-ostree` systems, {{ microshift_short }} automatically creates a backup on every start. These automatic backups are deleted and replaced with the latest backup each time the system restarts.
*   Data is also automatically restored on an `rpm-ostree` system after a greenboot system rollback. This data restoration ensures that the database matches the software running on the host after the rollback is completed.
*   On other system types, you must back up and restore data manually.

Automated backups are in the `/var/lib/microshift-backups` directory by default. You can use this directory for manually backing up and restoring data by specifying it in each command. When you restore a backup, you must use the entire file path.


:::note

The following procedures only backup and restore {{ microshift_short }} data. Application data is not included.

:::