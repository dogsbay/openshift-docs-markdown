{%- set _mod_docs_content_type = "REFERENCE" %}
# Kubernetes manifest components for {{ product_title }} {id="creating-kubernetes-manifest-openshift_{{ context }}"}

While the container image is the basic building block for a containerized
application, you need more information to manage and deploy that application
in a Kubernetes environment such as {{ product_title }}.  {._abstract}

After you create an image, you can complete the following next steps:

*   Understand the different resources you work with in Kubernetes manifests
*   Determine your application type that you are running
*   Gather supporting components
*   Create a manifest and store that manifest in a Git repository. You can then do the following tasks on the manifest file:
    *   Store it in a source versioning system
    *   Audit it
    *   Track it
    *   Promote and deploy it to the next environment
    *   Roll it back to earlier versions, if necessary, and share it with others