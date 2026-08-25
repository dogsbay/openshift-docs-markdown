{%- set _mod_docs_content_type = "CONCEPT" %}
# Migrate {{ microshift_short }} to {{ op_system_image }} {id="microshift-update-options-edge-to-image-mode_{{ context }}"}

Migrating {{ microshift_short }} from a {{ op_system_ostree_first }} system to a {{ op_system_image }} system requires building a new {{ op_system_image }} image containing the required version of {{ microshift_short }} and any associated optional RPMs. {._abstract}

See the {{ op_system_base_full }} documentation for general instructions on migrating {{ op_system_ostree }} systems to {{ op_system_image }} using the `bootc switch` command. Plan the upgrade process carefully. The following tips apply:

*   Follow the instructions in the {{ op_system_base }} documentation for converting `rpm-ostree` blueprint files to image mode container files.
*   You can use the `rpm-ostree compose container-encapsulate` image-compose command to create a base container image that can be used for bootc container builds. Then you can derive and familiarize yourself with an {{ op_system_image }} image that is based on existing `ostree` commits.
*   To fully adopt {{ op_system_image }}, define a container build pipeline.
*   Plan for UID and GID drift because {{ op_system_ostree }} and {{ op_system_image }} are not derived from the same parent image. See the {{ op_system_base }} documentation for more information.