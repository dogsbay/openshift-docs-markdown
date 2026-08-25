{%- set _mod_docs_content_type = "CONCEPT" %}
# The image mode for {{ op_system_base }} with {{ microshift_short }} workflow {id="microshift-install-rhel-image-mode-conc_{{ context }}"}

Before you can use {{ op_system_image }} with {{ microshift_short }}, you must verify the availability of required resources. {._abstract}

## Required resources {id="microshift-install-rhel-image-mode-resources_{{ context }}"}

Ensure that the following resources are available:

*   A {{ op_system_base }} {{ op_system_version }} host with an active Red&#160;Hat subscription for building {{ microshift_short }} bootc images.
*   A remote registry for storing and accessing `rhel-bootc` images.
*   An AArch64 or x86_64 system architecture.

## Workflow {id="microshift-install-rhel-image-mode-workflow_{{ context }}"}

The workflow for using {{ op_system_image }} with {{ microshift_short }} includes the following steps:

1.  Find and use a prebuilt {{ microshift_short }} container image to install {{ op_system_base }}.
1.  If the prebuilt {{ microshift_short }} container image requires customization, build a custom {{ microshift_short }} container image.
1.  Run the container image.


:::important

The `rpm-ostree` file system used by {{ op_system_ostree }} is not supported in {{ op_system_image }}. Do not use the `rpm-ostree` file system to modify deployments that use {{ op_system_image }}.

:::