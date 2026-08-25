{%- set _mod_docs_content_type = "CONCEPT" %}
# Prepare for image building {id="microshift-preparing-for-image-building_{{ context }}"}

Use the image builder tool to compose customized {{ op_system_ostree_first }} images optimized for edge deployments. {._abstract}

{% leveloffset 1 %}{% include "./snippets/microshift-rhel10-bootc-not-osbuild.md" %}{% endleveloffset %}

You can run a {{ microshift_short }} node with your applications on a {{ op_system_ostree }} virtual machine for development and testing first, then use your whole solution in edge production environments.

Use the following {{ op_system_base }} documentation to understand the full details of using {{ op_system_ostree }}:

*   [Introduction to RHEL for Edge images](https://docs.redhat.com/en/documentation/red_hat_enterprise_linux/9/html/composing_installing_and_managing_rhel_for_edge_images/introducing-rhel-for-edge-images_composing-installing-managing-rhel-for-edge-images)
*   To build an {{ op_system_ostree_first }} {{ op_system_version }} image for a given CPU architecture, you need a {{ op_system_base }} {{ op_system_version }} build host of the same CPU architecture that meets the image builder system requirements. See the following link for more information:
    *   [Image builder system requirements](https://docs.redhat.com/en/documentation/red_hat_enterprise_linux/9/html/composing_installing_and_managing_rhel_for_edge_images/setting-up-image-builder_composing-installing-managing-rhel-for-edge-images#edge-image-builder-system-requirements_setting-up-image-builder)
*   To install image builder and the `composer-cli` tool, use the following instructions:
    *   [Installing image builder](https://docs.redhat.com/en/documentation/red_hat_enterprise_linux/9/html/composing_installing_and_managing_rhel_for_edge_images/setting-up-image-builder_composing-installing-managing-rhel-for-edge-images#edge-installing-image-builder_setting-up-image-builder)