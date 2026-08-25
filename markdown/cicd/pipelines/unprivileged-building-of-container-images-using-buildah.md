{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Building of container images using Buildah as a non-root user {id="unprivileged-building-of-container-images-using-buildah"}
{%- set context = "unprivileged-building-of-container-images-using-buildah" %}

Running {{ pipelines_shortname }} as the root user on a container can expose the container processes and the host to other potentially malicious resources. You can reduce this type of exposure by running the workload as a specific non-root user in the container. To run builds of container images using Buildah as a non-root user, you can perform the following steps:

*   Define custom service account (SA) and security context constraint (SCC).
*   Configure Buildah to use the `build` user with id `1000`.
*   Start a task run with a custom config map, or integrate it with a pipeline run.

{% leveloffset +1 %}{% include "./modules/op-configuring-custom-sa-and-scc.md" %}{% endleveloffset %}
{% leveloffset +1 %}{% include "./modules/op-configuring-buildah-to-use-build-user.md" %}{% endleveloffset %}
{% leveloffset +1 %}{% include "./modules/op-starting-a-task-run-pipeline-run-build-user.md" %}{% endleveloffset %}
{% leveloffset +1 %}{% include "./modules/op-limitations-of-unprivileged-builds.md" %}{% endleveloffset %}

**Additional resources**

*   [Managing security context constraints (SCCs)](/authentication/managing-security-context-constraints#managing-pod-security-policies)