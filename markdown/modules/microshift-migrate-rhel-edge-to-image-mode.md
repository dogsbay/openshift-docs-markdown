{%- set _mod_docs_content_type = "CONCEPT" %}
# Migrate {{ microshift_short }} from {{ op_system_ostree }} to {{ op_system_image }} {id="microshift-migrate-rhel-edge-to-image-mode_{{ context }}"}

Starting with {{ microshift_short }} 4.19, you can migrate your {{ microshift_short }} node from {{ op_system_ostree }} to {{ op_system_image }} if the final versions are a supported configuration of {{ op_system_bundle }}. Check compatibilities before beginning a migration. See the {{ op_system_base }} documentation for instructions to migrate your image-based {{ op_system_base }} system.