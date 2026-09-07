{%- set _mod_docs_content_type = "CONCEPT" %}
# Adding application manifests to an image for offline use {id="microshift-embed-app-manifests-offline_{{ context }}"}

If you have a simple application that includes a few files for deployment such as manifests, you can add those manifests directly to a {{ op_system_ostree_first }} system image. This method is an alternative to building application RPMs or embedding workload container images.

See the "Create a custom file blueprint customization" section of the following {{ op_system_ostree }} documentation for an example:

*   [Create a custom file blueprint customization](https://access.redhat.com/documentation/en-us/red_hat_enterprise_linux/9/html/composing_installing_and_managing_rhel_for_edge_images/composing-a-rhel-for-edge-image-using-image-builder-command-line_composing-installing-managing-rhel-for-edge-images#image-customizations_composing-a-rhel-for-edge-image-using-image-builder-command-line)