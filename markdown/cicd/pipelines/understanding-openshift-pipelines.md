{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Understanding {{ pipelines_shortname }} {id="understanding-openshift-pipelines"}
{%- set context = "understanding-openshift-pipelines" %}

{%- set FeatureName = "OpenShift Pipelines" %}

{{ pipelines_title }} is a cloud-native, continuous integration and continuous delivery (CI/CD) solution based on Kubernetes resources. It uses Tekton building blocks to automate deployments across multiple platforms by abstracting away the underlying implementation details. Tekton introduces a number of standard custom resource definitions (CRDs) for defining CI/CD pipelines that are portable across Kubernetes distributions.

## Key features {id="op-key-features"}

*   {{ pipelines_title }} is a serverless CI/CD system that runs pipelines with all the required dependencies in isolated containers.
*   {{ pipelines_title }} are designed for decentralized teams that work on microservice-based architecture.
*   {{ pipelines_title }} use standard CI/CD pipeline definitions that are easy to extend and integrate with the existing Kubernetes tools, enabling you to scale on-demand.
*   You can use {{ pipelines_title }} to build images with Kubernetes tools such as Source-to-Image (S2I), Buildah, Buildpacks, and Kaniko that are portable across any Kubernetes platform.
*   You can use the {{ product_title }} web console **Developer** perspective to create Tekton resources, view logs of pipeline runs, and manage pipelines in your {{ product_title }} namespaces.

## {{ pipelines_shortname }} Concepts {id="op-detailed-concepts"}
This guide provides a detailed view of the various pipeline concepts.

{% leveloffset +2 %}{% include "./modules/op-about-tasks.md" %}{% endleveloffset %}
{% leveloffset +2 %}{% include "./modules/op-about-whenexpression.md" %}{% endleveloffset %}
{% leveloffset +2 %}{% include "./modules/op-about-finally_tasks.md" %}{% endleveloffset %}
{% leveloffset +2 %}{% include "./modules/op-about-taskrun.md" %}{% endleveloffset %}
{% leveloffset +2 %}{% include "./modules/op-about-pipelines.md" %}{% endleveloffset %}
{% leveloffset +2 %}{% include "./modules/op-about-pipelinerun.md" %}{% endleveloffset %}
{% leveloffset +2 %}{% include "./modules/op-about-workspace.md" %}{% endleveloffset %}
{% leveloffset +2 %}{% include "./modules/op-about-triggers.md" %}{% endleveloffset %}

## Additional resources {id="_additional_resources" ._additional-resources}

*   For information on installing {{ pipelines_shortname }}, see [Installing {{ pipelines_shortname }}](/cicd/pipelines/installing-pipelines#installing-pipelines).
*   For more details on creating custom CI/CD solutions, see [Creating CI/CD solutions for applications using {{ pipelines_shortname }}](/cicd/pipelines/creating-applications-with-cicd-pipelines#creating-applications-with-cicd-pipelines).
*   For more details on re-encrypt TLS termination, see [Re-encryption Termination](https://docs.openshift.com/container-platform/3.11/architecture/networking/routes.html#re-encryption-termination).
*   For more details on secured routes, see the [Securing routes](/networking/ingress_load_balancing/routes/securing-routes#securing-routes) section.