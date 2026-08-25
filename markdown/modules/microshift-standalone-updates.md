{%- set _mod_docs_content_type = "CONCEPT" %}
# Standalone {{ microshift_short }} updates {id="microshift-standalone-updates_{{ context }}"}

You can update just your {{ microshift_short }} version by embedding the new version in a {{ op_system_base }} image or by installing the RPMs on a standard {{ op_system_base }} operating system. Consider your current operating system version and deployments when planning a {{ microshift_short }} update. {._abstract}

The following factors apply to a standalone {{ microshift_short }} version update:

*   {{ microshift_short }} operates as an in-place update and does not require removal of the earlier version.
*   Data backups beyond those required for the usual functioning of your applications are not required.
*   You can potentially update {{ microshift_short }} without reinstalling your applications and Operators.
*   Only `rpm-ostree` updates include automatic rollbacks.


:::important

You must update {{ op_system_base }} to update {{ microshift_short }} if your current operating system is not compatible with the new version of {{ microshift_short }} that you want to use.

:::