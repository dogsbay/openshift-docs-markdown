{%- set _mod_docs_content_type = "CONCEPT" %}
# Migrate from RHEL 9 to RHEL 10 {id="microshift-migrate-rhel9-to-rhel10_{{ context }}"}

To migrate {{ microshift_short }} from an existing {{ op_system_ostree_first }} system running {{ op_system_version }} to one running {{ op_system_version_10 }}, you must embed {{ microshift_short }} into a new operating system image. This process transitions your deployment from an `rpm-ostree`-based system to an image mode for RHEL (bootc) system, and requires planning for any UID or GID drift that may occur.