{%- set _mod_docs_content_type = "ASSEMBLY" %}
# Specifying remote pipelines and tasks using resolvers {id="remote-pipelines-tasks-resolvers"}
{% include "./_attributes/common-attributes.md" %}
{%- set context = "remote-pipelines-tasks-resolvers" %}

Pipelines and tasks are reusable blocks for your CI/CD processes. You can reuse pipelines or tasks that you previously developed, or that were developed by others, without having to copy and paste their definitions. These pipelines or tasks can be available from several types of sources, from other namespaces on your cluster to public catalogs.

In a pipeline run resource, you can specify a pipeline from an existing source. In a pipeline resource or a task run resource, you can specify a task from an existing source.

In these cases, the _resolvers_ in {{ pipelines_title }} retrieve the pipeline or task definition from the specified source at run time.

The following resolvers are available in a default installaton of {{ pipelines_title }}:


Hub resolver
:   Retrieves a task or pipeline from the Pipelines Catalog available on {{ artifact_hub }} or {{ tekton_hub }}.

Bundles resolver
:   Retrieves a task or pipeline from a Tekton bundle, which is an OCI image available from any OCI repository, such as an OpenShift container repository.

Cluster resolver
:   Retrieves a task or pipeline that is already created on the same {{ product_title }} cluster in a specific namespace.

Git resolver
:   Retrieves a task or pipeline binding from a Git repository. You must specify the repository, the branch, and the path.

## Specifying a remote pipeline or task from a Tekton catalog {id="resolver-hub_{{ context }}"}
You can use the hub resolver to specify a remote pipeline or task that is defined either in a public Tekton catalog of [{{ artifact_hub }}](https://artifacthub.io/) or in an instance of {{ tekton_hub }}.


:::important

The {{ artifact_hub }} project is not supported with {{ pipelines_title }}. Only the configuration of {{ artifact_hub }} is supported.

:::


{% leveloffset +2 %}{% include "./modules/op-resolver-hub-config.md" %}{% endleveloffset %}
{% leveloffset +2 %}{% include "./modules/op-resolver-hub.md" %}{% endleveloffset %}

## Specifying a remote pipeline or task from a Tekton bundle {id="resolver-bundles_{{ context }}"}

You can use the bundles resolver to specify a remote pipeline or task from a Tekton bundle. A Tekton bundle is an OCI image available from any OCI repository, such as an OpenShift container repository.

{% leveloffset +2 %}{% include "./modules/op-resolver-bundle-config.md" %}{% endleveloffset %}
{% leveloffset +2 %}{% include "./modules/op-resolver-bundle.md" %}{% endleveloffset %}

## Specifying a remote pipeline or task from the same cluster {id="resolver-cluster_{{ context }}"}

You can use the cluster resolver to specify a remote pipeline or task that is defined in a namespace on the {{ product_title }} cluster where {{ pipelines_title }} is running.

{% leveloffset +2 %}{% include "./modules/op-resolver-cluster-config.md" %}{% endleveloffset %}
{% leveloffset +2 %}{% include "./modules/op-resolver-cluster.md" %}{% endleveloffset %}

## Specifying a remote pipeline or task from a Git repository {id="resolver-git_{{ context }}"}

You can use the Git resolver to specify a remote pipeline or task from a Git repostory. The repository must contain a YAML file that defines the pipeline or task. The Git resolver can access a repository either by cloning it anonymously or else by using the authenticated SCM API.

{% leveloffset +2 %}{% include "./modules/op-resolver-git-config-anon.md" %}{% endleveloffset %}
{% leveloffset +2 %}{% include "./modules/op-resolver-git-config-scm.md" %}{% endleveloffset %}
{% leveloffset +2 %}{% include "./modules/op-resolver-git.md" %}{% endleveloffset %}

## Additional resources {id="additional-resources_{{ context }}" ._additional-resources}

*   [Using Tekton Hub with {{ pipelines_shortname }}](/cicd/pipelines/using-tekton-hub-with-openshift-pipelines#using-tekton-hub-with-openshift-pipelines)