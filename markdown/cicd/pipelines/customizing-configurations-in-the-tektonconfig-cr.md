{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Customizing configurations in the TektonConfig custom resource {id="customizing-configurations-in-the-tektonconfig-cr"}
{%- set context = "customizing-configurations-in-the-tektonconfig-cr" %}

In {{ pipelines_title }}, you can customize the following configurations by using the `TektonConfig` custom resource (CR):

*   Configuring the {{ pipelines_title }} control plane
*   Changing the default service account
*   Disabling the service monitor
*   Configuring pipeline resolvers
*   Disabling cluster tasks and pipeline templates
*   Disabling the integration of {{ tekton_hub }}
*   Disabling the automatic creation of RBAC resources
*   Pruning of task runs and pipeline runs

## Prerequisites {id="prerequisites_customizing-configurations-in-the-tektonconfig-cr"}

*   You have installed the {{ pipelines_title }} Operator.

{% leveloffset +1 %}{% include "./modules/op-configuring-pipelines-control-plane.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/op-modifiable-fields-with-default-values.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/op-optional-configuration-fields.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/op-changing-default-service-account.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/op-disabling-the-service-monitor.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/op-configuring-pipeline-resolvers.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/op-disabling-cluster-tasks-and-pipeline-templates.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/op-disabling-the-integretion-of-tekton-hub.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/op-disabling-automatic-creation-of-rbac-resources.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/op-automatic-pruning-taskrun-pipelinerun.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/op-default-pruner-configuration.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/op-annotations-for-automatic-pruning-taskruns-pipelineruns.md" %}{% endleveloffset %}

## Additional resources {id="additional-resources_customizing-configurations-in-the-tektonconfig-cr" ._additional-resources}

*   [Configuring SSH authentication for Git](/cicd/pipelines/authenticating-pipelines-using-git-secret#op-configuring-ssh-authentication-for-git_authenticating-pipelines-using-git-secret)
*   [Managing non-versioned and versioned cluster tasks](/cicd/pipelines/managing-nonversioned-and-versioned-cluster-tasks#managing-nonversioned-and-versioned-cluster-tasks)
*   [Pruning objects to reclaim resources](/applications/pruning-objects#pruning-objects)
*   [Creating pipeline templates in the Administrator perspective](/cicd/pipelines/working-with-pipelines-web-console#op-creating-pipeline-templates-admin-console_working-with-pipelines-web-console)