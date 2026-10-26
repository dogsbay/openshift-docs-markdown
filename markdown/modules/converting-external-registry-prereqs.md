{%- set _mod_docs_content_type = "CONCEPT" %}
# Pre-configuration tasks {id="converting-external-registry-prereqs_{{ context }}"}

Before you can configure your cluster to use an external registry, you must prepare your environment with an image registry and perform an update using images on the registry. {._abstract}

To prevent the accidental deletion of the cluster’s internal image registry, you cannot delete the `InternalReleaseImage` custom resource without first having completed the following tasks:

*   You have created a mirror registry in your environment.
For more information, see "Creating a mirror registry with mirror registry for Red&#160;Hat OpenShift".
*   You have mirrored images to the mirror registry.
For more information, see "Mirroring images for a disconnected installation by using the oc-mirror plugin v2".
*   You have updated your cluster using the images you mirrored to your registry.
For more information, see "Updating a cluster in a disconnected environment using the OpenShift Update Service".