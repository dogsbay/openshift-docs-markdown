{%- set _mod_docs_content_type = "CONCEPT" %}
# Prepare for bootc image building {id="microshift-preparing-for-image-building-bootc_{{ context }}"}

Use the image builder tool to compose customized {{ microshift_short }} bootc images optimized for edge deployments. You can run a {{ microshift_short }} node with your applications on a {{ op_system_image }} virtual machine for development and testing first, then use your whole solution in edge production environments. {._abstract}

Use the following {{ op_system_base }} documentation to understand the full details of using {{ op_system_image }}:

*   Follow the instructions at the following link:
    *   [Using image mode for RHEL to build, deploy, and manage operating systems](https://docs.redhat.com/en/documentation/red_hat_enterprise_linux/{{ op_system_version_major }}/html/using_image_mode_for_rhel_to_build_deploy_and_manage_operating_systems/index)

{% leveloffset 1 %}{% include "./snippets/microshift-power-loss-embed-images.md" %}{% endleveloffset %}