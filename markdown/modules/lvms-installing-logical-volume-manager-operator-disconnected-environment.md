{%- set _mod_docs_content_type = "PROCEDURE" %}
# Installing {{ lvms }} in a disconnected environment {id="lvms-installing-lvms-disconnected-env_{{ context }}"}

Install {{ lvms }} in a disconnected environment where your cluster has no internet access, such as air-gapped networks, high-security facilities, or regulated industries requiring network isolation for security and compliance. {._abstract}

**Prerequisites**

*   You read "About disconnected installation mirroring".
*   You have access to the {{ product_title }} image repository.
*   You created a mirror registry (see "Creating a mirror registry with mirror registry for Red Hat OpenShift").

**Procedure**

1.  Follow the steps in the "Creating the image set configuration" procedure. To create an `ImageSetConfiguration` custom resource (CR) for {{ lvms }}, you can use the following example `ImageSetConfiguration` CR configuration:
{% include "./snippets/lvms-disconnected-ImageSetConfig.md" %}
1.  Follow the procedure in "Mirroring an image set to a mirror registry".
1.  Follow the procedure in "Configuring image registry repository mirroring".