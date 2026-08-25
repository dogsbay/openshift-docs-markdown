{%- set _mod_docs_content_type = "ASSEMBLY" %}
# Using Tekton Hub with {{ pipelines_shortname }} {id="using-tekton-hub-with-openshift-pipelines"}
{% include "./_attributes/common-attributes.md" %}
{%- set context = "using-tekton-hub-with-openshift-pipelines" %}

{%- set FeatureName = "Tekton Hub" %}
{% include "./snippets/technology-preview.md" %}

{{ tekton_hub }} helps you discover, search, and share reusable tasks and pipelines for your CI/CD workflows. A public instance of {{ tekton_hub }} is available at [hub.tekton.dev](https://hub.tekton.dev/). Cluster administrators can also install and deploy a custom instance of {{ tekton_hub }} by modifying the configurations in the `TektonHub` custom resource (CR). {._abstract}

{% leveloffset +1 %}{% include "./modules/op-installing-and-deploying-tekton-hub-on-an-openshift-cluster.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/op-installing-tekton-hub-without-login-and-rating.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/op-installing-tekton-hub-with-login-and-rating.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/op-using-a-custom-database-in-tekton-hub.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/op-installing-crunchy-postgres-database-and-tekton-hub.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/op-migrating-tekton-hub-data-to-an-existing-crunchy-postgres-database.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/op-updating-tekton-hub-with-custom-categories-and-catalogs.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/op-modifying-catalog-refresh-interval-tekton-hub.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/op-adding-new-users-in-tekton-hub-configuration.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/op-disabling-tekton-hub-authorization-after-upgrade.md" %}{% endleveloffset %}

## Additional resources {id="additional-resources-tekton-hub" ._additional-resources}

*   GitHub repository of [Tekton Hub](https://github.com/tektoncd/hub)
*   [Installing {{ pipelines_shortname }}](/cicd/pipelines/installing-pipelines#installing-pipelines)
*   [{{ pipelines_title }} release notes](/cicd/pipelines/op-release-notes#op-release-notes)