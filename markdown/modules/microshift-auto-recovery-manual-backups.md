{%- set _mod_docs_content_type = "CONCEPT" %}
# Modify backup and restore commands to automate data recovery {id="microshift-auto-recovery-manual-backups_{{ context }}"}

The `--auto-recovery` option stores {{ product_title }} backups in one directory and selects the latest backup when you restore. You add the option to your `backup` and `restore` commands for automatic recovery. {._abstract}

The `--auto-recovery` option treats the `PATH` argument as a path to a directory that holds all the backups for automated recovery, and not just as a path to a particular backup file. You can use the `--auto-recovery` option with both `backup` and `restore` commands.

*   For example, if you use the automatic recovery option with `restore`, such as in `microshift restore --auto-recovery PATH`, running the modified command automatically selects and restores the most recent backup.
*   If you use the same option in the `microshift backup` command, such as in `microshift backup --auto-recovery PATH`, a new backup is created in the PATH.
*   By default, `microshift restore --auto-recovery PATH` creates a backup of the failed {{ microshift_short }} data in `PATH/failed`. You can add the `--dont-save-failed` option to disable the creation of failed backup data.


:::important

You can only use the `--dont-save-failed` option with the `restore` command.

:::