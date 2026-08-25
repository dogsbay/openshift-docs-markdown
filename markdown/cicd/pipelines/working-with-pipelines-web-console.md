{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Working with {{ pipelines_title }} in the web console {id="working-with-pipelines-web-console"}
{%- set context = "working-with-pipelines-web-console" %}

You can use the **Administrator** or **Developer** perspective to create and modify `Pipeline`, `PipelineRun`, and `Repository` objects from the **Pipelines** page in the {{ product_title }} web console.
You can also use the **+Add** page in the **Developer** perspective of the web console to create CI/CD pipelines for your software delivery process.

{% leveloffset +1 %}{% include "./modules/op-odc-pipelines-abstract.md" %}{% endleveloffset %}

## Prerequisites {id="prerequisites_working-with-pipelines-web-console"}

*   You have access to an {{ product_title }} cluster, and have [switched to the **Developer** perspective](/web_console/web-console-overview#about-developer-perspective_web-console-overview).
*   You have the [{{ pipelines_shortname }} Operator installed](/cicd/pipelines/installing-pipelines#installing-pipelines) in your cluster.
*   You are a cluster administrator or a user with create and edit permissions.
*   You have created a project.

{% leveloffset +2 %}{% include "./modules/op-constructing-pipelines-using-pipeline-builder.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/op-creating-pipelines-along-with-applications.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/odc-adding-a-GitHub-repository-containing-pipelines.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/op-interacting-with-pipelines-using-the-developer-perspective.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/op-starting-pipelines-from-pipelines-view.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/op-starting-pipelines-from-topology-view.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/op-interacting-pipelines-from-topology-view.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/op-editing-pipelines.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/op-deleting-pipelines.md" %}{% endleveloffset %}

### Additional resources {id="additional-resources_working-with-pipelines-web-console" ._additional-resources}

*   [Using Tekton Hub with {{ pipelines_shortname }}](/cicd/pipelines/using-tekton-hub-with-openshift-pipelines#using-tekton-hub-with-openshift-pipelines)

{% leveloffset +1 %}{% include "./modules/op-creating-pipeline-templates-admin-console.md" %}{% endleveloffset %}