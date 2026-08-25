{%- set _mod_docs_content_type = "CONCEPT" %}
# Build and use the rpm-ostree image for offline deployments {id="microshift-embed-microshift-build-image-offline-deployment_{{ context }}"}

You can use image builder to create `rpm-ostree` system images with embedded {{ microshift_short }} container images. {._abstract}

To embed container images, you must add the image references to your image builder blueprint. You can create the commit and ISO as needed for your use case.

Add the prerequisites listed here to the ones that are included in the procedures that follow.

## Additional prerequisites for offline deployments {id="microshift-embed-microshift-build-image-offline-deployment-prereqs_{{ context }}"}

*   You have created and updated a {{ op_system_ostree }} image blueprint for offline use. The following procedures use the example of a blueprint created with container images. You must use the updated blueprint you created in the "Embedding MicroShift containers for offline deployments" procedure.
*   You have updated the `/etc/osbuild-worker/osbuild-worker.toml` configuration file for offline use.


:::important

Replace `minimal-microshift.toml` in the following procedures with the name of the TOML you updated for offline use, &lt;my_blueprint_name>.

:::